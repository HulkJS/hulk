"use strict";(self.webpackChunk_antmjs_doc=self.webpackChunk_antmjs_doc||[]).push([[2633],{833:function(n,e,t){var r=t(9601),o=t.n(r),a=t(2609),c=t.n(a)()(o());c.push([n.id,"\n.demo-vue-btn {\n  background: green;\n  color: #fff;\n  padding: 6px 12px;\n  cursor: pointer;\n  border-radius: 16px;\n}\n",""]),e.Z=c},2609:function(n){n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var c={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var u=0;u<n.length;u++){var f=[].concat(n[u]);r&&c[f[0]]||(void 0!==a&&(void 0===f[5]||(f[1]="@layer".concat(f[5].length>0?" ".concat(f[5]):""," {").concat(f[1],"}")),f[5]=a),t&&(f[2]?(f[1]="@media ".concat(f[2]," {").concat(f[1],"}"),f[2]=t):f[2]=t),o&&(f[4]?(f[1]="@supports (".concat(f[4],") {").concat(f[1],"}"),f[4]=o):f[4]="".concat(o)),e.push(f))}},e}},9601:function(n){n.exports=function(n){return n[1]}},6062:function(n){var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},c=[],i=0;i<n.length;i++){var s=n[i],u=r.base?s[0]+r.base:s[0],f=a[u]||0,d="".concat(u," ").concat(f);a[u]=f+1;var p=t(d),l={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(l);else{var v=o(l,r);r.byIndex=i,e.splice(i,0,{identifier:d,updater:v,references:1})}c.push(d)}return c}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var c=0;c<a.length;c++){var i=t(a[c]);e[i].references--}for(var s=r(n,o),u=0;u<a.length;u++){var f=t(a[u]);0===e[f].references&&(e[f].updater(),e.splice(f,1))}a=s}}},6793:function(n){var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},1173:function(n){n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},7892:function(n,e,t){n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},4036:function(n){n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},2464:function(n){n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},4407:function(n,e){e.Z=(n,e)=>{const t=n.__vccOpts||n;for(const[n,r]of e)t[n]=r;return t}},2633:function(n,e,t){t.r(e),t.d(e,{default:function(){return w}});var r=t(7875),o=t(349);const a={class:"demo-vue-btn"};var c={data(){return{$L:{}}},mounted(){setTimeout((()=>{this.$L=window.$L}),300)}},i=t(6062),s=t.n(i),u=t(4036),f=t.n(u),d=t(6793),p=t.n(d),l=t(7892),v=t.n(l),m=t(1173),h=t.n(m),y=t(2464),b=t.n(y),g=t(833),x={};x.styleTagTransform=b(),x.setAttributes=v(),x.insert=p().bind(null,"head"),x.domAPI=f(),x.insertStyleElement=h(),s()(g.Z,x),g.Z&&g.Z.locals&&g.Z.locals;var w=(0,t(4407).Z)(c,[["render",function(n,e,t,c,i,s){return(0,r.wg)(),(0,r.iD)("span",a,(0,o.zw)(i.$L["点击按钮"]),1)}]])}}]);