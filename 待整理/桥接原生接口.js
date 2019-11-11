// https://github.com/wendux/DSBridge-Android/blob/master/readme-chs.md

//npm install dsbridge@3.1.3
var dsBridge = require("dsbridge")

//同步调用
var str = dsBridge.call("testSyn", "testSyn");

//异步调用
dsBridge.call("testAsyn", "testAsyn", function (v) {
  alert(v);
})

//注册 javascript API 
dsBridge.register('addValue', function (l, r) {
  return l + r;
})

// 必须先注册再调用？但我在 menu.m.admin 里看到貌似有直接调用的
