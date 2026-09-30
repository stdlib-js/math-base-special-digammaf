"use strict";var n=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(t){throw (e=0, t)}};};var l=n(function(B,s){
var o=require('@stdlib/number-float64-base-to-float32/dist');function y(r){return r===0?.0833333358168602:o(.0833333358168602+o(r*o(-.008333333767950535+o(r*.003968254197388887))))}s.exports=y
});var c=n(function(D,q){
var v=require('@stdlib/number-float64-base-to-float32/dist'),F=require('@stdlib/math-base-special-lnf/dist'),I=l();function _(r){var e,t,a;return e=v(r-1),t=v(F(e)+v(1/v(2*e))),a=v(1/v(e*e)),v(t-v(a*I(a)))}q.exports=_
});var m=n(function(G,p){
var i=require('@stdlib/number-float64-base-to-float32/dist');function d(r){var e,t,a;return r===0?.2547985017299652:(r<0?e=-r:e=r,e<=1?(t=i(.2547985017299652+i(r*i(-.4498133063316345+i(r*i(-.43916937708854675+i(r*-.06104176491498947)))))),a=i(1+i(r*i(1.5890202522277832+i(r*i(.6534125208854675+i(r*.06385169178247452))))))):(r=i(1/r),t=i(-.06104176491498947+i(r*i(-.43916937708854675+i(r*i(-.4498133063316345+i(r*.2547985017299652)))))),a=i(.06385169178247452+i(r*i(.6534125208854675+i(r*i(1.5890202522277832+i(r*1))))))),i(t/a))}p.exports=d
});var T=n(function(H,O){
var f=require('@stdlib/number-float64-base-to-float32/dist'),M=m(),R=1.4616317749023438,h=f(37006601859126265e-23),w=f(.9955816268920898);function P(r){var e,t;return e=f(r-R),e=f(e-h),t=M(f(r-1)),f(f(e*w)+f(e*t))}O.exports=P
});var g=n(function(J,A){
var u=require('@stdlib/number-float64-base-to-float32/dist'),S=require('@stdlib/math-base-assert-is-nanf/dist'),Y=require('@stdlib/math-base-special-floorf/dist'),z=require('@stdlib/math-base-special-tanf/dist'),N=require('@stdlib/constants-float32-pi/dist'),C=c(),E=T(),L=10;function b(r){var e,t,a;if(a=u(r),S(a)||a===0)return NaN;if(a<=-1){if(e=u(a-Y(a)),e===0)return NaN;e===.5?t=0:(e>.5&&(e=u(e-1)),t=-u(N/z(u(N*e)))),a=u(1-a)}else t=0;if(a>=L)return t=u(t+C(a)),t;for(;a>2;)a=u(a-1),t=u(t+u(1/a));for(;a<1;)t=u(t-u(1/a)),a=u(a+1);return t=u(t+E(a)),t}A.exports=b
});var j=g();module.exports=j;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
