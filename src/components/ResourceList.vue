<template>
  <div id="resource_list">
    <p id="resource_list_title">可选数据流</p>
    <div class="resource_container">
      <div
        class="one_resource"
        v-for="frameStream in frameStreams"
        :key="frameStream['ID']"
        :class="{ selected: frameStream.isActive }"
        :r_index="frameStream.index"
      >
        <img
          src="@/assets/play.png"
          class="vertical_middle"
          :class="{ hide: !frameStream.isActive }"
        />
        <div class="resource_title vertical_middle">
          {{ frameStream["Position"] }}
        </div>
        <br />
        <div
          class="resource_description"
          :class="{ selected: frameStream.isActive }"
        >
          {{ frameStream["URL"] }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import graphqlHelper from "@/pkg/Graphql";
import $ from "jquery";
import flvjs from "flv.js";
import Common from "@/components/Common";
import App from "@/App";
var resourceHasSelected = false;
var resourceSelectedIndex = -1;
var theObj = null;
export default {
  name: "ResourceList",
  data() {
    var frameStreams = graphqlHelper.queryGraphql(
      `query Query { frameStreams { URL Position ID } }`
    ).frameStreams;
    if (frameStreams != null) {
      var i = 0;
      for (; i < frameStreams.length; i++) {
        frameStreams[i].isActive = false;
        frameStreams[i].index = i;
      }
    }
    return {
      frameStreams: frameStreams,
    };
  },
  mounted: function () {
    theObj = this;
    var videoEle = App.getVideoEle();
    $(".one_resource").click(function () {
      if (resourceHasSelected) {
        theObj.frameStreams[resourceSelectedIndex].isActive = false;
        theObj.player.destroy();
      } else {
        resourceHasSelected = true;
      }
      resourceSelectedIndex = $(this).attr("r_index");
      theObj.frameStreams[resourceSelectedIndex].isActive = true;
      App.setTitleAndDescription(
        theObj.frameStreams[resourceSelectedIndex]["Position"],
        theObj.frameStreams[resourceSelectedIndex]["URL"]
      );
      if (flvjs.isSupported()) {
        theObj.player = flvjs.createPlayer({
          type: "flv",
          isLive: true,
          url: `${Common.COLDBRIDGEURL}?url=${theObj.frameStreams[resourceSelectedIndex]["URL"]}`,
        });
        theObj.player.attachMediaElement(videoEle);
        try {
          theObj.player.load();
          theObj.player.play();
          theObj.getStructedMsgs(Common.STRUCTEDMSGSWSURL);
        } catch (error) {
          console.log(error);
        }
      } else {
        alert("flvjs isn't supported");
      }
    });
    document.addEventListener("visibilitychange", function () {
      // https://github.com/bilibili/flv.js/issues/627 “切换页面或者最小化后，视频会暂停”问题的解决方案
      try {
        const buffered = theObj.player.buffered.end(0) - 0.1;
        if (buffered - theObj.player.currentTime > 1) {
          theObj.player.currentTime = buffered;
        }
      } catch (error) {
        console.log(error);
      }
    });
  },
  stopPlayingVideo() {
    if (resourceHasSelected) {
      theObj.socket.close();
      theObj.frameStreams[resourceSelectedIndex].isActive = false;
      theObj.player.destroy();
      resourceHasSelected = false;
      resourceSelectedIndex = -1;
    }
  },
  methods: {
    getStructedMsgs: function (path) {
      if (typeof WebSocket === "undefined") {
        alert("您的浏览器不支持socket");
      } else {
        // 实例化socket
        this.socket = new WebSocket(path);
        // 监听socket连接
        this.socket.onopen = this.open;
        // 监听socket错误信息
        this.socket.onerror = this.error;
        // 监听socket消息
        this.socket.onmessage = this.getMessage;
        // 监听socket关闭
        this.socket.onclose = this.close;
      }
    },
    open: function () {
      console.log("socket连接成功");
      // this.socket.close();
    },
    error: function () {
      console.log("连接错误");
    },
    getMessage: function (msg) {
      console.log(msg.data);
      if (msg.data != "ping") {
        var jsonObj = JSON.parse(msg.data);
        // console.log(jsonObj["vehicle"]["img"]);
        App.addStructedMsgs(jsonObj);
      }
    },
    send: function (msg) {
      // this.socket.send(msg);
    },
    close: function (e) {
      console.log("socket已经关闭: ", e);
    },
  },
};
</script>

<style>
#resource_list {
  width: 330px;
  height: 502px;
  padding: 14px;
  background-color: rgb(244, 244, 244);
}
#resource_list_title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 14px;
}
#resource_list .resource_container {
  width: 100%;
  height: 476px;
  overflow-y: auto;
}
#resource_list .one_resource {
  padding: 8px 8px 8px 8px;
  margin: 8px 8px 8px 8px;
  cursor: pointer;
}
#resource_list .one_resource:hover {
  background-color: white;
}
#resource_list .resource_title {
  display: inline-block;
  font-size: 14px;
}
#resource_list .resource_description {
  display: inline-block;
  font-size: 12px;
  color: rgb(153, 153, 153);
}
#resource_list .selected {
  background-color: white;
  font-weight: bold;
  color: rgb(3, 160, 214);
}
.hide {
  display: none;
}
</style>

