<template>
  <div id="app_content">
    <div class="one_menu_tab">
      <div id="videoTitle">
        <div class="title_label">{{ selectedStreamLabel }}</div>
        <div class="title_content">{{ selectedStreamTitle }}</div>
      </div>
      <div id="videoDescription">{{ selectedStreamDescription }}</div>
      <video id="videoPlay" muted controls width="960" height="540"></video>
      <div id="resource_list"></div>
      <div id="structed_msgs"></div>
    </div>
    <div class="one_menu_tab">
      车辆检索
    </div>
  </div>
</template>

<script>
import $ from "jquery";
var theObj = null;
var menuTabs = null;
export default {
  name: "App",
  data() {
    return {
      selectedStreamTitle: "",
      selectedStreamDescription: "",
      selectedStreamLabel: "",
    };
  },
  mounted: function () {
    theObj = this;
    this.videoEle = $("#videoPlay")[0];
    menuTabs = $(".one_menu_tab");
    for(var i = 0; i < menuTabs.length; i++){
      $(menuTabs[i]).css("display", "none")
    }
    $(menuTabs[0]).css("display", "block")
  },
  setTitleAndDescription(title, description) {
    theObj.selectedStreamTitle = title;
    theObj.selectedStreamDescription = description;
    theObj.selectedStreamLabel = "实时流";
  },
  getVideoEle() {
    return theObj.videoEle;
  },
  switchMenuTab(index) {
    for(var i = 0; i < menuTabs.length; i++){
      $(menuTabs[i]).css("display", "none")
    }
    $(menuTabs[index]).css("display", "block")
    if(index > 0){
      theObj.selectedStreamTitle= ""
      theObj.selectedStreamDescription= ""
      theObj.selectedStreamLabel= ""
    }
  }
};
</script>

<style>
#app_content {
  width: 1670px;
  height: 1030px;
  position: absolute;
  left: 250px;
  top: 50px;
  background-color: rgb(231, 232, 235);
}
#videoTitle {
  width: 100%;
  height: 60px;
  position: relative;
  margin: 50px 0 0 0;
}
#videoTitle .title_label {
  position: absolute;
  top: 28px;
  left: 152px;
  width: 58px;
  padding-top: 3px;
  height: 19px;
  background-color: rgb(9, 142, 235);
  color: white;
  font-size: 12px;
  text-align: center;
}
#videoTitle .title_content {
  position: absolute;
  top: 26px;
  left: 216px;
  margin-left: 8px;
  font-size: 18px;
}
#videoDescription {
  height: 34px;
  font-size: 12px;
  margin-left: 154px;
  color: rgb(153, 153, 153);
}
#videoPlay {
  margin: 0 0 0 150px;
}
#resource_list {
  position: absolute;
  right: 150px;
  top: 150px;
}
#structed_msgs {
  position: absolute;
}
</style>
