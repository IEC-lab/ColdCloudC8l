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
        } catch (error) {
          console.log(error);
        }
      } else {
        alert("flvjs isn't supported");
      }
    });
  },
  stopPlayingVideo() {
    if (resourceHasSelected) {
      theObj.frameStreams[resourceSelectedIndex].isActive = false;
      theObj.player.destroy();
      resourceHasSelected = false;
      resourceSelectedIndex = -1;
    }
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

