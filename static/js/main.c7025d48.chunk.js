(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,function(e,n,t){e.exports=t(14)},,,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var a=t(0),c=t.n(a),r=t(3),o=t.n(r),i=(t(10),t(1));t(11);function l(e,n){return 0!==e.length&&e.some(function(e){return e[0]===n[0]&&e[1]===n[1]})}function u(e,n){return e.every(function(e){return l(n,e)})}t(12);var s=Object(a.memo)(function(e){var n=e.i,t=e.j,a=e.onCellClick,r=e.children,o=e.className;return c.a.createElement("div",{className:"cell "+o,onClick:a.bind(null,n,t)},r)});t(13);var m=Object(a.memo)(function(e){for(var n=e.onCellClick,t=e.stats,a=e.matrixSize,r=e.winningPosition,o=e.nobodyWon,i=[],u=0;u<a;u++){for(var m=[],f=0;f<a;f++)m.push({i:u,j:f});i.push(m)}return c.a.createElement("div",{className:"table"},i.map(function(e,a){return c.a.createElement("div",{key:"row_".concat(a),className:"row"},e.map(function(e){var a=null,i="";return l(t[0],[e.i,e.j])?(i="clicked-p-1",a=c.a.createElement("span",{className:"cell-value"},"X")):l(t[1],[e.i,e.j])&&(i="clicked-p-2",a=c.a.createElement("span",{className:"cell-value"},"O")),a=null,i+=l(r,[e.i,e.j])?" winning":"",i+=o?" flush":"",c.a.createElement(s,Object.assign({key:"i_".concat(e.i,"_j_").concat(e.j),className:i},e,{onCellClick:n}),a)}))}))}),f=3,v=0,p=1,h=function(e){for(var n=[],t=[],a=[],c=0;c<e;c++){for(var r=[],o=[],i=0;i<e;i++)r.push([c,i]),o.push([i,c]);n.push(r),n.push(o),t.push([c,e-1-c]),a.push([c,c])}return n.push(t),n.push(a),n}(f);var b=function(){var e=Object(a.useState)(v),n=Object(i.a)(e,2),t=n[0],r=n[1],o=Object(a.useState)([[],[]]),s=Object(i.a)(o,2),b=s[0],d=s[1],j=Object(a.useState)([]),w=Object(i.a)(j,2),k=w[0],E=w[1],O=Object(a.useState)(!1),g=Object(i.a)(O,2),C=g[0],N=g[1],y=Object(a.useState)([]),S=Object(i.a)(y,2),W=S[0],_=S[1];function x(){r(v),d([[],[]]),E([]),N(!1),_([])}var P=C&&-1!==t,z=-1===t;return c.a.createElement("div",{className:"App"},P&&c.a.createElement("h2",{className:"title"},"Player ",t+1," Won!"),c.a.createElement(m,{onCellClick:function(e,n){if(!C){var a=[e,n];if(!l(k,a)){var c=k.slice();c.push(a),E(c);var o=b.slice();if(o[t].push(a),d(o),o[t].length>=3&&function(e,n){return e.some(function(e){return u(e,n)})}(h,o[t]))return _(function(e,n){var t=[];return e.forEach(function(e){u(e,n)&&(t=e)}),t}(h,o[t])),void N(!0);if(k.length===f*f-1)return r(-1),N(!0),void setTimeout(function(){x()},1500);r(t===v?p:v)}}},matrixSize:f,winningPosition:W,nobodyWon:z,stats:b}),P&&c.a.createElement("button",{className:"start-btn",onClick:x},c.a.createElement("span",null,"Start Again!")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[4,1,2]]]);
//# sourceMappingURL=main.c7025d48.chunk.js.map