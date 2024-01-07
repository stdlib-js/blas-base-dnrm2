"use strict";var q=function(u,r){return function(){return r||u((r={exports:{}}).exports,r),r.exports}};var p=q(function(F,m){
var _=require('@stdlib/math-base-special-sqrt/dist'),f=require('@stdlib/math-base-special-abs/dist'),c=require('@stdlib/math-base-special-pow/dist');function E(u,r,v){var s,e,a,i;if(u<=0||v<=0)return 0;if(u===1)return f(r[0]);for(s=0,e=1,u*=v,i=0;i<u;i+=v)r[i]!==0&&(a=f(r[i]),s<a?(e=1+e*c(s/a,2),s=a):e+=c(a/s,2));return s*_(e)}m.exports=E
});var j=q(function(G,y){
var O=require('@stdlib/math-base-special-sqrt/dist'),d=require('@stdlib/math-base-special-abs/dist'),l=require('@stdlib/math-base-special-pow/dist');function g(u,r,v,s){var e,a,i,t,n;if(u<=0)return 0;if(u===1)return d(r[s]);for(t=s,e=0,a=1,n=0;n<u;n++)r[t]!==0&&(i=d(r[t]),e<i?(a=1+a*l(e/i,2),e=i):a+=l(i/e,2)),t+=v;return e*O(a)}y.exports=g
});var w=q(function(H,b){
var h=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),x=p(),k=j();h(x,"ndarray",k);b.exports=x
});var z=require("path").join,A=require('@stdlib/utils-try-require/dist'),B=require('@stdlib/assert-is-error/dist'),C=w(),o,R=A(z(__dirname,"./native.js"));B(R)?o=C:o=R;module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
