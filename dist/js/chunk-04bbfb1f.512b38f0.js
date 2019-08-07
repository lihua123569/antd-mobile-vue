(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-04bbfb1f"],{"06cd":function(t,e,n){"use strict";var a=n("8fb7"),d=n.n(a);d.a},1329:function(t,e){t.exports='<h1 id="选择器--m-picker">选择器  m-picker</h1>\n'},"205b":function(t,e,n){"use strict";var a=n("a1a2"),d=n.n(a);d.a},"4f8a":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"code-box"},[n("section",{staticClass:"code-box-demo"},[t._t("demo")],2),n("markdown",{staticClass:"code-box-meta",attrs:{source:t.markdown}}),n("pre",{directives:[{name:"hljs",rawName:"v-hljs"},{name:"show",rawName:"v-show",value:t.showCode,expression:"showCode"}],staticClass:"code-box-code markdown-body clearfix"},[t._v("    "),n("ae-layout",[t._v("\n      "),n("ae-icon",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.code,expression:"code",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.copied,expression:"copied",arg:"success"}],staticClass:"copy-btn",attrs:{type:"copy"}}),t._v("\n      "),n("code",{domProps:{textContent:t._s(t.code)}}),t._v("\n    ")],1),t._v("\n  ")],1),n("div",{staticClass:"show-code-btn"},[n("d-button",{staticStyle:{border:"none"},attrs:{block:"",icon:"plus"},on:{click:function(e){t.showCode=!t.showCode}}},[n("span",{domProps:{textContent:t._s(t.showCode?"隐藏代码":"显示代码")}})])],1)],1)},d=[],r=n("d225"),o=n("b0b4"),s=n("308d"),i=n("6bb5"),c=n("4e2b"),l=n("9ab4"),u=n("5365"),m=n("2f23"),p=n("e722"),v=n("8bbf"),b=n.n(v),h=n("65d9"),f=n.n(h),k=n("60a3");b.a.use(p["a"]),b.a.use(m["a"]),b.a.use(u["a"]);var g=function(t){function e(){var t;return Object(r["a"])(this,e),t=Object(s["a"])(this,Object(i["a"])(e).apply(this,arguments)),t.showCode=!1,t}return Object(c["a"])(e,t),Object(o["a"])(e,[{key:"copied",value:function(){this.$message.success("已复制")}}]),e}(b.a);l["a"]([Object(k["d"])(String)],g.prototype,"code",void 0),l["a"]([Object(k["d"])(String)],g.prototype,"markdown",void 0),g=l["a"]([f()({name:"CodeBox"})],g);var w=g,x=w,C=(n("06cd"),n("2877")),y=Object(C["a"])(x,a,d,!1,null,null,null);e["a"]=y.exports},"6c4c":function(t,e){t.exports="<table>\n<thead>\n<tr>\n<th>属性</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>cascade</td>\n<td></td>\n<td>boolean</td>\n<td>true</td>\n</tr>\n<tr>\n<td>cols</td>\n<td></td>\n<td>number</td>\n<td>3</td>\n</tr>\n<tr>\n<td>data</td>\n<td></td>\n<td>PickerData[] | PickerData[][]</td>\n<td></td>\n</tr>\n<tr>\n<td>dismissText</td>\n<td></td>\n<td>string</td>\n<td></td>\n</tr>\n<tr>\n<td>extra</td>\n<td></td>\n<td>string</td>\n<td></td>\n</tr>\n<tr>\n<td>format</td>\n<td></td>\n<td>(values: Array&lt;VNode | string&gt;) =&gt; string | VNode[]</td>\n<td></td>\n</tr>\n<tr>\n<td>indicatorStyle</td>\n<td></td>\n<td>any</td>\n<td></td>\n</tr>\n<tr>\n<td>itemStyle</td>\n<td></td>\n<td>any</td>\n<td></td>\n</tr>\n<tr>\n<td>okText</td>\n<td></td>\n<td>string</td>\n<td></td>\n</tr>\n<tr>\n<td>onChange</td>\n<td></td>\n<td>(date?: CascaderValue) =&gt; void</td>\n<td></td>\n</tr>\n<tr>\n<td>pickerPrefixCls</td>\n<td></td>\n<td>string</td>\n<td></td>\n</tr>\n<tr>\n<td>placeholder</td>\n<td></td>\n<td>string</td>\n<td></td>\n</tr>\n<tr>\n<td>popupPrefixCls</td>\n<td></td>\n<td>string</td>\n<td></td>\n</tr>\n<tr>\n<td>prefixCls</td>\n<td></td>\n<td>string</td>\n<td></td>\n</tr>\n<tr>\n<td>title</td>\n<td></td>\n<td>string</td>\n<td></td>\n</tr>\n<tr>\n<td>triggerType</td>\n<td></td>\n<td>string</td>\n<td></td>\n</tr>\n<tr>\n<td>value</td>\n<td></td>\n<td>Array&lt;string | number&gt;</td>\n<td></td>\n</tr>\n</tbody></table>\n"},"8fb7":function(t,e,n){},a1a2:function(t,e,n){},c38f:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"toc-affix"},[n("d-anchor",{attrs:{"get-container":t.getContainer,"offset-top":20}},[n("d-anchor-link",{attrs:{href:"#basic",title:"基本"}}),n("d-anchor-link",{attrs:{href:"#demo",title:"示例"}}),n("d-anchor-link",{attrs:{href:"#demo1",title:"基本用法"}}),n("d-anchor-link",{directives:[{name:"show",rawName:"v-show",value:!0,expression:"true"}],attrs:{href:"#props",title:"属性"}}),n("d-anchor-link",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{href:"#events",title:"事件"}}),n("d-anchor-link",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{href:"#functions",title:"方法"}}),n("d-anchor-link",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{href:"#slots",title:"插槽"}})],1)],1),n("div",{attrs:{id:"basic"}},[n("markdown",{attrs:{source:t.title}})],1),t._m(0),n("demo1",{attrs:{id:"demo1"}}),t._m(1),n("markdown",{attrs:{source:t.props}})],1)},d=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"markdown-body m-b",attrs:{id:"demo"}},[n("span"),n("h2",[t._v("示例代码")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"markdown-body",attrs:{id:"props"}},[n("span"),n("h2",[t._v("属性说明")])])}],r=n("d225"),o=n("b0b4"),s=n("308d"),i=n("6bb5"),c=n("4e2b"),l=n("9ab4"),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"demo"},[n("code-box",{attrs:{code:t.code,markdown:t.md}},[n("demo-comp",{attrs:{slot:"demo"},slot:"demo"})],1)],1)},m=[],p="<template>\n  <div>\n    <m-picker v-model=\"value\"\n              title=\"测试\"\n              placeholder=\"请选择\"\n              :data=\"data\">\n      <m-list-item>测试</m-list-item>\n    </m-picker>\n    <m-picker v-model=\"value2\"\n              :cols=\"1\"\n              title=\"测试\"\n              placeholder=\"请选择\"\n              :data=\"data2\">\n      <m-list-item>选择颜色</m-list-item>\n    </m-picker>\n  </div>\n</template>\n<script lang=\"tsx\">\n  import List from '@/packages/m-list';\n  import getColors from '@/packages/m-picker/demo/demo1/colors';\n  import Picker from '@/packages/vmc-picker';\n  import Vue from 'vue';\n  import Component from 'vue-class-component';\n  import MPicker from '../../index';\n\n  Vue.component('Picker', Picker);\n  Vue.use(List);\n  Vue.use(MPicker);\n  @Component({\n    name: 'Demo1'\n  })\n  export default class Demo1 extends Vue {\n    public data = [{\n      label: '江苏省',\n      value: 'JiangSu',\n      children: [{\n        label: '南京市',\n        value: 'NanJing'\n      }, {\n        label: '苏州',\n        value: 'SuZhou'\n      }]\n    }];\n    public value2 = null;\n    public data2 = getColors(this.$createElement);\n    public value = null;\n  }\n<\/script>\n<style scoped lang=\"less\">\n</style>\n",v=n("db96"),b=n.n(v),h=n("8bbf"),f=n.n(h),k=n("65d9"),g=n.n(k),w=n("4f8a"),x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("m-picker",{attrs:{title:"测试",placeholder:"请选择",data:t.data},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},[n("m-list-item",[t._v("测试")])],1),n("m-picker",{attrs:{cols:1,title:"测试",placeholder:"请选择",data:t.data2},model:{value:t.value2,callback:function(e){t.value2=e},expression:"value2"}},[n("m-list-item",[t._v("选择颜色")])],1)],1)},C=[],y=n("3604"),j=n("cebc");function O(t){var e={display:"inline-block",verticalAlign:"middle",width:"16px",height:"16px",marginRight:"10px"};return[{label:t("div",[t("span",{style:Object(j["a"])({},e,{backgroundColor:"#FF0000"})}),t("span",["红色"])]),value:"#FF0000"},{label:t("div",[t("span",{style:Object(j["a"])({},e,{backgroundColor:"#00FF00"})}),t("span",["绿色"])]),value:"#00FF00"},{label:t("div",[t("span",{style:Object(j["a"])({},e,{backgroundColor:"#0000FF"})}),t("span",["蓝色"])]),value:"#0000FF"}]}var _=n("92e1"),F=n("651d");f.a.component("Picker",_["a"]),f.a.use(y["a"]),f.a.use(F["a"]);var N=function(t){function e(){var t;return Object(r["a"])(this,e),t=Object(s["a"])(this,Object(i["a"])(e).apply(this,arguments)),t.data=[{label:"江苏省",value:"JiangSu",children:[{label:"南京市",value:"NanJing"},{label:"苏州",value:"SuZhou"}]}],t.value2=null,t.data2=O(t.$createElement),t.value=null,t}return Object(c["a"])(e,t),e}(f.a);N=l["a"]([g()({name:"Demo1"})],N);var P=N,E=P,S=n("2877"),$=Object(S["a"])(E,x,C,!1,null,"4c75a5ee",null),D=$.exports,V=function(t){function e(){var t;return Object(r["a"])(this,e),t=Object(s["a"])(this,Object(i["a"])(e).apply(this,arguments)),t.code=p,t.md=b.a,t}return Object(c["a"])(e,t),e}(f.a);V=l["a"]([g()({name:"Demo1",components:{CodeBox:w["a"],DemoComp:D}})],V);var J=V,A=J,B=Object(S["a"])(A,u,m,!1,null,null,null),T=B.exports,L=n("847c"),M=n("1329"),Z=n.n(M),I=n("6c4c"),R=n.n(I);f.a.use(L["a"]),f.a.use(F["a"]);var q=function(t){function e(){var t;return Object(r["a"])(this,e),t=Object(s["a"])(this,Object(i["a"])(e).apply(this,arguments)),t.title=Z.a,t.props=R.a,t}return Object(c["a"])(e,t),Object(o["a"])(e,[{key:"getContainer",value:function(){return document.getElementById("app-content")}}]),e}(f.a);q=l["a"]([g()({name:"ComponentDemo",components:{demo1:T}})],q);var z=q,G=z,H=(n("205b"),Object(S["a"])(G,a,d,!1,null,"7d30e32e",null));e["default"]=H.exports},db96:function(t,e){t.exports="<p>基本用法</p>\n"}}]);
//# sourceMappingURL=chunk-04bbfb1f.512b38f0.js.map