"use strict";var c=function(i,a){return function(){return a||i((a={exports:{}}).exports,a),a.exports}};var E=c(function(P,_){
var j=require('@stdlib/constants-float64-max/dist'),T=require('@stdlib/math-base-special-abs/dist'),y=require('@stdlib/math-base-special-abs2/dist'),b=require('@stdlib/math-base-special-sqrt/dist'),X=14916681462400413e-170,h=1997919072202235e131,p=44989137945431964e145,q=11113793747425387e-178;function k(i,a,f,m){var l,v,u,r,e,n,o,t,s,d,x;if(i<=0)return 0;for(d=m,l=!0,v=0,u=0,r=0,e=0,t=1,x=0;x<i;x++)s=T(a[d]),s>h?(u+=y(s*q),l=!1):s<X?l&&(e+=y(s*p)):r+=s*s,d+=f;return u>0?((r>0||r>j||r!==r)&&(u+=r*q*q),t=1/q,v=u):e>0?r>0||r>j||r!==r?(r=b(r),e=b(e)/p,e>r?(o=r,n=e):(o=e,n=r),t=1,v=n*n*(1+y(o/n))):(t=1/p,v=e):(t=1,v=r),b(v)*t}_.exports=k
});var O=c(function(Q,A){
var w=require('@stdlib/strided-base-stride2offset/dist'),z=E();function B(i,a,f){var m=w(i,f);return z(i,a,f,m)}A.exports=B
});var L=c(function(S,F){
var C=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),R=O(),D=E();C(R,"ndarray",D);F.exports=R
});var G=require("path").join,H=require('@stdlib/utils-try-require/dist'),I=require('@stdlib/assert-is-error/dist'),J=L(),g,M=H(G(__dirname,"./native.js"));I(M)?g=J:g=M;module.exports=g;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
