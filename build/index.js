module.exports=function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=8)}([function(e,n){e.exports=require("react")},function(e,n,t){e.exports=t(2)()},function(e,n,t){"use strict";var r=t(3);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,n,t,o,a,i){if(i!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function n(){return e}e.isRequired=e;var t={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:a,resetWarningCache:o};return t.PropTypes=t,t}},function(e,n,t){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,n,t){var r=t(5),o=t(6);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1};r(o,a);e.exports=o.locals||{}},function(e,n,t){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},a=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),i=[];function s(e){for(var n=-1,t=0;t<i.length;t++)if(i[t].identifier===e){n=t;break}return n}function c(e,n){for(var t={},r=[],o=0;o<e.length;o++){var a=e[o],c=n.base?a[0]+n.base:a[0],u=t[c]||0,l="".concat(c," ").concat(u);t[c]=u+1;var f=s(l),d={css:a[1],media:a[2],sourceMap:a[3]};-1!==f?(i[f].references++,i[f].updater(d)):i.push({identifier:l,updater:m(d,n),references:1}),r.push(l)}return r}function u(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=t.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(n);else{var i=a(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}return n}var l,f=(l=[],function(e,n){return l[e]=n,l.filter(Boolean).join("\n")});function d(e,n,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=f(n,o);else{var a=document.createTextNode(o),i=e.childNodes;i[n]&&e.removeChild(i[n]),i.length?e.insertBefore(a,i[n]):e.appendChild(a)}}function p(e,n,t){var r=t.css,o=t.media,a=t.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var h=null,g=0;function m(e,n){var t,r,o;if(n.singleton){var a=g++;t=h||(h=u(n)),r=d.bind(null,t,a,!1),o=d.bind(null,t,a,!0)}else t=u(n),r=p.bind(null,t,n),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else o()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=o());var t=c(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<t.length;r++){var o=s(t[r]);i[o].references--}for(var a=c(e,n),u=0;u<t.length;u++){var l=s(t[u]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}t=a}}}},function(e,n,t){(n=t(7)(!1)).push([e.i,".passwordStrengthContainer {\r\n  display: flex;\r\n  width: 100%;\r\n  flex-direction: column;\r\n}\r\n.passwordStrengthContainer .strengthBars {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n.passwordStrengthContainer .strengthBars .strengthBar {\r\n  width: calc(25% - 5px);\r\n  height: 4px;\r\n  background: #cfd4dd;\r\n  border-radius: 50px;\r\n}\r\n.passwordStrengthContainer .strengthBars .empty {\r\n  background: #cfd4dd;\r\n}\r\n.passwordStrengthContainer .strengthBars .weak {\r\n  background: #ef4836;\r\n}\r\n.passwordStrengthContainer .strengthBars .normal {\r\n  background: #f6b44d;\r\n}\r\n.passwordStrengthContainer .strengthBars .good {\r\n  background: #2b90ef;\r\n}\r\n.passwordStrengthContainer .strengthBars .strong {\r\n  background: #a2ca6f;\r\n}\r\n.passwordStrengthContainer .strengthTitleContainer {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n.passwordStrengthContainer .strengthTitleContainer .strengthTitle {\r\n  margin-left: 3px;\r\n}\r\n",""]),e.exports=n},function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t=e[1]||"",r=e[3];if(!r)return t;if(n&&"function"==typeof btoa){var o=(i=r,s=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(c," */")),a=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[t].concat(a).concat([o]).join("\n")}var i,s,c;return[t].join("\n")}(n,e);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);r&&o[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),n.push(c))}},n}},function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),a=t(1),i=t.n(a),s=function(e){return/[A-Z]/.test(e)},c=function(e){return/[a-z]/.test(e)},u=function(e){return e.length>=8},l=function(e){return/.*[/!`~_;'+=@#$%^&*()\]\\,.?":{}|<>-]/.test(e)},f=(t(4),{1:"weak",2:"weak",3:"normal",4:"good",5:"strong"}),d=function(e){var n=e.containerClass,t=e.password,a=e.showTitle,i=e.strengthTitles,d=Object(r.useMemo)((function(){return[(e=t,/\d/.test(e)),l(t),s(t),c(t),u(t)].filter((function(e){return!!e})).length||1;var e}),[t]),p=Object(r.useMemo)((function(){return Array.from({length:4},(function(e,n){return n+1}))}),[]);return o.a.createElement("div",{className:"passwordStrengthContainer ".concat(n)},o.a.createElement("div",{className:"strengthBars"},p.map((function(e){var n=t.length>0&&1===e,r=d>e||n?f[d]:"empty";return o.a.createElement("div",{className:"strengthBar ".concat(r)})}))),a&&t.length>0&&o.a.createElement("div",{className:"strengthTitleContainer"},"Password Strength:"," ",o.a.createElement("div",{className:"strengthTitle"},i[f[d]])))};d.propTypes={containerClass:i.a.string,password:i.a.string,showTitle:i.a.bool,strengthTitles:i.a.objectOf(i.a.object)},d.defaultProps={containerClass:"",password:"",showTitle:!0,strengthTitles:{weak:"Weak",normal:"Normal",good:"Good",strong:"Strong"}};n.default=o.a.memo(d)}]);