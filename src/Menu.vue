<template>
  <div id="app_menu">
    <br /><br />
    <p id="menu_title">视频流分析系统</p>
    <br /><br />
    <div v-for="menuItem in menuItems" :key="menuItem.index">
      <p
        class="menu_item"
        :class="{ selected: menuItem.isSelected }"
        :item_index="menuItem.index"
      >
        {{ menuItem["content"] }}
      </p>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import App from "@/App";
import ResourceList from "@/components/ResourceList";
var theObj = null;
export default {
  name: "Menu",
  data() {
    var menuItems = [{ content: "实时预览" }, { content: "智能信息检索" }, { content: "任务管理" }];
    for (var i = 0; i < menuItems.length; i++) {
      menuItems[i].index = i;
      menuItems[i].isSelected = false;
    }
    menuItems[0].isSelected = true;
    return {
      menuItems: menuItems,
    };
  },
  mounted: function () {
    theObj = this;
    $(".menu_item").click(function () {
      for (var i = 0; i < theObj.menuItems.length; i++) {
        theObj.menuItems[i].isSelected = false;
      }
      var menuItemIndex = $(this).attr("item_index");
      theObj.menuItems[menuItemIndex].isSelected = true;
      App.switchMenuTab(menuItemIndex);
      if (menuItemIndex != 0) ResourceList.stopPlayingVideo();
    });
  },
};
</script>

<style>
#app_menu {
  width: 250px;
  height: 1080px;
  position: absolute;
  left: 0%;
  top: 0%;
  background-color: rgb(46, 46, 54);
}
#menu_title {
  text-align: center;
  color: rgb(9, 142, 235);
  font-size: 24px;
}
#app_menu .menu_item {
  height: 80px;
  line-height: 80px;
  text-align: center;
  cursor: pointer;
  font-size: 18px;
  color: rgb(122, 122, 130);
}
#app_menu .menu_item:hover,
#app_menu .selected {
  background-color: rgb(55, 55, 63);
  color: rgb(9, 142, 235);
}
</style>
