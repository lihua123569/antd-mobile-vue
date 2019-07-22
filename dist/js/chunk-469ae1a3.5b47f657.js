(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-469ae1a3"],{"06cd":function(t,n,e){"use strict";var a=e("8fb7"),o=e.n(a);o.a},"1d7f":function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",{staticClass:"toc-affix"},[e("d-anchor",{attrs:{"get-container":t.getContainer,"offset-top":20}},[e("d-anchor-link",{attrs:{href:"#basic",title:"基本"}}),e("d-anchor-link",{attrs:{href:"#demo",title:"示例"}}),e("d-anchor-link",{attrs:{href:"#demo1",title:"基本用法"}}),e("d-anchor-link",{directives:[{name:"show",rawName:"v-show",value:!0,expression:"true"}],attrs:{href:"#props",title:"属性"}}),e("d-anchor-link",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{href:"#events",title:"事件"}}),e("d-anchor-link",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{href:"#functions",title:"方法"}}),e("d-anchor-link",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{href:"#slots",title:"插槽"}})],1)],1),e("div",{attrs:{id:"basic"}},[e("markdown",{attrs:{source:t.title}})],1),t._m(0),e("demo1",{attrs:{id:"demo1"}}),t._m(1),e("markdown",{attrs:{source:t.props}})],1)},o=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"markdown-body m-b",attrs:{id:"demo"}},[e("span"),e("h2",[t._v("示例代码")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"markdown-body",attrs:{id:"props"}},[e("span"),e("h2",[t._v("属性说明")])])}],r=e("d225"),s=e("b0b4"),d=e("308d"),c=e("6bb5"),i=e("4e2b"),l=e("9ab4"),u=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"demo"},[e("code-box",{attrs:{code:t.code,markdown:t.md}},[e("demo-comp",{attrs:{slot:"demo"},slot:"demo"})],1)],1)},m=[],p='<template>\n  <div>\n    <m-pagination v-model="current" :total="3"/>\n    <m-pagination :value="current" :total="3" mode="number"/>\n    <m-pagination :value="current" :total="3" mode="pointer"/>\n  </div>\n</template>\n<script lang="ts">\n  import MPagination from \'../../index\';\n  import Vue from \'vue\';\n  import Component from \'vue-class-component\';\n\n  Vue.use(MPagination);\n  @Component({\n    name: \'Demo1\'\n  })\n  export default class Demo1 extends Vue {\n    public current = 1;\n  }\n<\/script>\n<style lang="less" scoped>\n</style>\n',b=e("c65b"),v=e.n(b),h=e("8bbf"),f=e.n(h),w=e("65d9"),x=e.n(w),C=e("4f8a"),j=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("m-pagination",{attrs:{total:3},model:{value:t.current,callback:function(n){t.current=n},expression:"current"}}),e("m-pagination",{attrs:{value:t.current,total:3,mode:"number"}}),e("m-pagination",{attrs:{value:t.current,total:3,mode:"pointer"}})],1)},g=[],k=e("4d02");f.a.use(k["a"]);var O=function(t){function n(){var t;return Object(r["a"])(this,n),t=Object(d["a"])(this,Object(c["a"])(n).apply(this,arguments)),t.current=1,t}return Object(i["a"])(n,t),n}(f.a);O=l["b"]([x()({name:"Demo1"})],O);var _=O,y=_,N=e("2877"),E=Object(N["a"])(y,j,g,!1,null,"72a58115",null),$=E.exports,D=function(t){function n(){var t;return Object(r["a"])(this,n),t=Object(d["a"])(this,Object(c["a"])(n).apply(this,arguments)),t.code=p,t.md=v.a,t}return Object(i["a"])(n,t),n}(f.a);D=l["b"]([x()({name:"Demo1",components:{CodeBox:C["a"],DemoComp:$}})],D);var P=D,B=P,S=Object(N["a"])(B,u,m,!1,null,null,null),V=S.exports,J=e("cd06"),M=e.n(J),T=e("9777"),I=e.n(T);f.a.use(k["a"]);var q=function(t){function n(){var t;return Object(r["a"])(this,n),t=Object(d["a"])(this,Object(c["a"])(n).apply(this,arguments)),t.title=M.a,t.props=I.a,t}return Object(i["a"])(n,t),Object(s["a"])(n,[{key:"getContainer",value:function(){return document.getElementById("app-content")}}]),n}(f.a);q=l["b"]([x()({name:"ComponentDemo",components:{demo1:V}})],q);var z=q,A=z,F=(e("73da"),Object(N["a"])(A,a,o,!1,null,"6acf45ef",null));n["default"]=F.exports},"4f8a":function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"code-box"},[e("section",{staticClass:"code-box-demo"},[t._t("demo")],2),e("markdown",{staticClass:"code-box-meta",attrs:{source:t.markdown}}),e("pre",{directives:[{name:"hljs",rawName:"v-hljs"},{name:"show",rawName:"v-show",value:t.showCode,expression:"showCode"}],staticClass:"code-box-code markdown-body clearfix"},[t._v("    "),e("ae-layout",[t._v("\n      "),e("ae-icon",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.code,expression:"code",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.copied,expression:"copied",arg:"success"}],staticClass:"copy-btn",attrs:{type:"copy"}}),t._v("\n      "),e("code",{domProps:{textContent:t._s(t.code)}}),t._v("\n    ")],1),t._v("\n  ")],1),e("div",{staticClass:"show-code-btn"},[e("d-button",{staticStyle:{border:"none"},attrs:{block:"",icon:"plus"},on:{click:function(n){t.showCode=!t.showCode}}},[e("span",{domProps:{textContent:t._s(t.showCode?"隐藏代码":"显示代码")}})])],1)],1)},o=[],r=e("d225"),s=e("b0b4"),d=e("308d"),c=e("6bb5"),i=e("4e2b"),l=e("9ab4"),u=e("8bbf"),m=e.n(u),p=e("65d9"),b=e.n(p),v=e("60a3"),h=function(t){function n(){var t;return Object(r["a"])(this,n),t=Object(d["a"])(this,Object(c["a"])(n).apply(this,arguments)),t.showCode=!1,t}return Object(i["a"])(n,t),Object(s["a"])(n,[{key:"copied",value:function(){this.$message.success("已复制")}}]),n}(m.a);l["b"]([Object(v["d"])(String)],h.prototype,"code",void 0),l["b"]([Object(v["d"])(String)],h.prototype,"markdown",void 0),h=l["b"]([b()({name:"CodeBox"})],h);var f=h,w=f,x=(e("06cd"),e("2877")),C=Object(x["a"])(w,a,o,!1,null,null,null);n["a"]=C.exports},"73da":function(t,n,e){"use strict";var a=e("bbdd"),o=e.n(a);o.a},"8fb7":function(t,n,e){},9777:function(t,n){t.exports="<table>\n<thead>\n<tr>\n<th>属性</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>current</td>\n<td></td>\n<td>number</td>\n<td>1</td>\n</tr>\n<tr>\n<td>mode</td>\n<td></td>\n<td>&#39;button&#39; | &#39;number&#39; | &#39;pointer&#39;</td>\n<td></td>\n</tr>\n<tr>\n<td>nextText</td>\n<td></td>\n<td>string</td>\n<td></td>\n</tr>\n<tr>\n<td>prefixCls</td>\n<td></td>\n<td>string</td>\n<td></td>\n</tr>\n<tr>\n<td>prevText</td>\n<td></td>\n<td>string</td>\n<td></td>\n</tr>\n<tr>\n<td>simple</td>\n<td></td>\n<td>boolean</td>\n<td>false</td>\n</tr>\n<tr>\n<td>total</td>\n<td></td>\n<td>number</td>\n<td>0</td>\n</tr>\n<tr>\n<td>value</td>\n<td></td>\n<td>number</td>\n<td>1</td>\n</tr>\n</tbody></table>\n"},bbdd:function(t,n,e){},c65b:function(t,n){t.exports="<p>基本用法</p>\n"},cd06:function(t,n){t.exports='<h1 id="分页器--m-pagination">分页器  m-pagination</h1>\n'}}]);
//# sourceMappingURL=chunk-469ae1a3.5b47f657.js.map