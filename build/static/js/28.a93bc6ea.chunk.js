(this.webpackJsonpktcapptool=this.webpackJsonpktcapptool||[]).push([[28],{267:function(t,n,e){"use strict";e.r(n),e.d(n,"amplify_nav",(function(){return p})),e.d(n,"amplify_sign_out",(function(){return h}));var r=e(18),o=e(10),i=e(43),a=e(80),u=e(11),c=e(27),s=e(118),l=function(t,n,e,r){return new(e||(e=Promise))((function(o,i){function a(t){try{c(r.next(t))}catch(n){i(n)}}function u(t){try{c(r.throw(t))}catch(n){i(n)}}function c(t){var n;t.done?o(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(a,u)}c((r=r.apply(t,n||[])).next())}))},f=function(t,n){var e,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(e)throw new TypeError("Generator is already executing.");for(;a;)try{if(e=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=n.call(t,a)}catch(u){i=[6,u],r=0}finally{e=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}},p=function(){function t(t){Object(r.k)(this,t)}return t.prototype.render=function(){return Object(r.i)("nav",{class:"nav"},Object(r.i)("slot",null))},t}();p.style=".nav{display:-ms-flexbox;display:flex;-ms-flex:1 1 0%;flex:1 1 0%;-ms-flex-pack:end;justify-content:flex-end;-ms-flex-align:center;align-items:center}.nav>*{margin:0 0.5em}";var h=function(){function t(t){Object(r.k)(this,t),this.handleAuthStateChange=s.d,this.buttonText=u.a.SIGN_OUT}return t.prototype.signOut=function(t){return l(this,void 0,void 0,(function(){var n;return f(this,(function(e){switch(e.label){case 0:if(t&&t.preventDefault(),!a.a||"function"!==typeof a.a.signOut)throw new Error(c.d);e.label=1;case 1:return e.trys.push([1,3,,4]),[4,a.a.signOut()];case 2:return e.sent(),this.handleAuthStateChange(i.a.SignedOut),[3,4];case 3:return n=e.sent(),Object(s.a)(n),[3,4];case 4:return[2]}}))}))},t.prototype.render=function(){var t=this;return Object(r.i)("amplify-button",{slot:"sign-out",onClick:function(n){return t.signOut(n)},"data-test":"sign-out-button"},o.a.get(this.buttonText))},t}()}}]);
//# sourceMappingURL=28.a93bc6ea.chunk.js.map