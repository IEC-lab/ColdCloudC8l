<template>
  <div id="app_header">
    {{ curTime }} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </div>
</template>

<script>
var theObj = null
export default {
  name: 'Header',
  data() {
    return {
      curTime: new Date().toLocaleString()
    }
  },
  mounted: function () {
    theObj = this
    setInterval(function(){
      theObj.curTime = new Date().toLocaleString()
    }, 1000)
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
#app_header{
  width: 1670px;
  height: 50px;
  position: absolute;
  left: 250px;
  top: 0%;
  background-color: white;
  line-height: 50px;
  text-align: right;
}
</style>
