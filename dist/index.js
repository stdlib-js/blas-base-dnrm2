"use strict";var c=function(i,e){return function(){try{return e||i((e={exports:{}}).exports,e),e.exports}catch(v){throw (e=0, v)}};};var E=c(function(P,_){
var j=require('@stdlib/constants-float64-max/dist'),T=require('@stdlib/math-base-special-abs/dist'),y=require('@stdlib/math-base-special-abs2/dist'),b=require('@stdlib/math-base-special-sqrt/dist'),X=14916681462400413e-170,h=1997919072202235e131,p=44989137945431964e145,q=11113793747425387e-178;function k(i,e,v,m){var l,t,n,r,a,f,o,u,s,d,x;if(i<=0)return 0;for(d=m,l=!0,t=0,n=0,r=0,a=0,u=1,x=0;x<i;x++)s=T(e[d]),s>h?(n+=y(s*q),l=!1):s<X?l&&(a+=y(s*p)):r+=s*s,d+=v;return n>0?((r>0||r>j||r!==r)&&(n+=r*q*q),u=1/q,t=n):a>0?r>0||r>j||r!==r?(r=b(r),a=b(a)/p,a>r?(o=r,f=a):(o=a,f=r),u=1,t=f*f*(1+y(o/f))):(u=1/p,t=a):(u=1,t=r),b(t)*u}_.exports=k
});var O=c(function(Q,A){
var w=require('@stdlib/strided-base-stride2offset/dist'),z=E();function B(i,e,v){var m=w(i,v);return z(i,e,v,m)}A.exports=B
});var L=c(function(S,F){
var C=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),R=O(),D=E();C(R,"ndarray",D);F.exports=R
});var G=require("path").join,H=require('@stdlib/utils-try-require/dist'),I=require('@stdlib/assert-is-error/dist'),J=L(),g,M=H(G(__dirname,"./native.js"));I(M)?g=J:g=M;module.exports=g;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
