<template>
  <div id="intelligent_msg">
    <div style="color:rgb(49,143,187);font-size:18px;font-weight:bold;margin:10px 0 0 12px">智能信息</div>
      <div id="intelligent_msg_search">
        <input class="search_input" type="text" placeholder="车色" />
        <input class="search_input" type="text" placeholder="车牌" />
        <input class="search_input" type="datetime-local" />~<input class="search_input" type="datetime-local" />
        <button>搜索</button>
      </div>
      <div id="intelligent_msg_search_rs">
        <table>
          <tr>
            <th>序号</th><th>车牌</th><th>车色</th><th>截图</th><th>时间</th>
          </tr>
          <tr>
            <td>1</td><td>苏A145A0</td><td>黑</td><td><img src="http://192.168.1.4:7777/5,fc511f59ae" /></td><td>2021-05-07 14:56:45</td>
          </tr>
          <tr>
            <td>2</td><td>苏A145A0</td><td>黑</td><td><img src="http://192.168.1.4:7777/5,fc511f59ae" /></td><td>2021-05-07 14:56:45</td>
          </tr>
          <tr>
            <td>3</td><td>苏A145A0</td><td>黑</td><td><img src="http://192.168.1.4:7777/5,fc511f59ae" /></td><td>2021-05-07 14:56:45</td>
          </tr>
          <tr>
            <td>4</td><td>苏A145A0</td><td>黑</td><td><img src="http://192.168.1.4:7777/5,fc511f59ae" /></td><td>2021-05-07 14:56:45</td>
          </tr>
          <tr>
            <td>5</td><td>苏A145A0</td><td>黑</td><td><img src="http://192.168.1.4:7777/5,fc511f59ae" /></td><td>2021-05-07 14:56:45</td>
          </tr>
          <tr>
            <td>6</td><td>苏A145A0</td><td>黑</td><td><img src="http://192.168.1.4:7777/5,fc511f59ae" /></td><td>2021-05-07 14:56:45</td>
          </tr>
          <tr>
            <td>7</td><td>苏A145A0</td><td>黑</td><td><img src="http://192.168.1.4:7777/5,fc511f59ae" /></td><td>2021-05-07 14:56:45</td>
          </tr>
          <tr>
            <td>8</td><td>苏A145A0</td><td>黑</td><td><img src="http://192.168.1.4:7777/5,fc511f59ae" /></td><td>2021-05-07 14:56:45</td>
          </tr>
          <tr>
            <td>9</td><td>苏A145A0</td><td>黑</td><td><img src="http://192.168.1.4:7777/5,fc511f59ae" /></td><td>2021-05-07 14:56:45</td>
          </tr>
          <tr>
            <td>10</td><td>苏A145A0</td><td>黑</td><td><img src="http://192.168.1.4:7777/5,fc511f59ae" /></td><td>2021-05-07 14:56:45</td>
          </tr>
          <tr>
            <td>11</td><td>苏A145A0</td><td>黑</td><td><img src="http://192.168.1.4:7777/5,fc511f59ae" /></td><td>2021-05-07 14:56:45</td>
          </tr>
          <tr>
            <td>12</td><td>苏A145A0</td><td>黑</td><td><img src="http://192.168.1.4:7777/5,fc511f59ae" /></td><td>2021-05-07 14:56:45</td>
          </tr>
        </table>
        <div id="intelligent_msg_search_split"><span class="click">首页</span><span class="click">上一页</span><span class="click">下一页</span><span class="click">尾页</span>（<span>1</span>/<span>n</span>）</div>
      </div>
  </div>
</template>

<script>
export default {
  name: "IntelligentMsg",
};
</script>

<style>
#intelligent_msg_search {
  text-align: center;
  margin: 20px 0 50px 0;
}
#intelligent_msg_search .search_input {
  height: 20px;
  width: 170px;
  border-color: #ccc;
  border-style: none;
  padding-left: 5px;
  margin: 0 2px 0 0;
}
#intelligent_msg_search button {
  border: none;
  background-color: #ccc;
  padding: 5px;
  cursor: pointer;
}
#intelligent_msg_search_rs table {
  width: 1000px;
  margin: auto;
  border-collapse: collapse;
}
#intelligent_msg_search_rs tr {
  width: 1000px;
  height: 60px;
}
#intelligent_msg_search_rs tr:nth-child(even){
  background-color: white;
}
#intelligent_msg_search_rs tr:first-child {
  background: coral;
  height: 30px;
}
#intelligent_msg_search_rs td {
  text-align: center;
  width: 200px;
}
#intelligent_msg_search_rs img {
  width: 50px;
}
#intelligent_msg_search_split {
  position: absolute;
  top: 900px;
  left: 710px;
  text-align: center;
}
#intelligent_msg_search_split .click {
  margin-right: 10px;
  cursor: pointer;
  color: rgb(9, 142, 235);
  font-weight: bold;
}
</style>

