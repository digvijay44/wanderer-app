(()=>{"use strict";var e,r,t,a,o={},n={};function d(e){var r=n[e];if(void 0!==r)return r.exports;var t=n[e]={id:e,loaded:!1,exports:{}};return o[e].call(t.exports,t,t.exports,d),t.loaded=!0,t.exports}d.m=o,e=[],d.O=(r,t,a,o)=>{if(!t){var n=1/0;for(s=0;s<e.length;s++){for(var[t,a,o]=e[s],i=!0,l=0;l<t.length;l++)(!1&o||n>=o)&&Object.keys(d.O).every(e=>d.O[e](t[l]))?t.splice(l--,1):(i=!1,o<n&&(n=o));i&&(e.splice(s--,1),r=a())}return r}o=o||0;for(var s=e.length;s>0&&e[s-1][2]>o;s--)e[s]=e[s-1];e[s]=[t,a,o]},d.d=(e,r)=>{for(var t in r)d.o(r,t)&&!d.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},d.f={},d.e=e=>Promise.all(Object.keys(d.f).reduce((r,t)=>(d.f[t](e,r),r),[])),d.u=e=>e+"."+{261:"ede36316a2826855a8cb",353:"c8527070ad6f9952f459",779:"ab88ecae4fe0bbacb492",821:"10d2a976820cb52c9618"}[e]+".js",d.miniCssF=e=>"styles.f76aff97c0a89e83c4cc.css",d.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),d.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),r={},t="wanderer-app:",d.l=(e,a,o,n)=>{if(r[e])r[e].push(a);else{var i,l;if(void 0!==o)for(var s=document.getElementsByTagName("script"),u=0;u<s.length;u++){var c=s[u];if(c.getAttribute("src")==e||c.getAttribute("data-webpack")==t+o){i=c;break}}i||(l=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,d.nc&&i.setAttribute("nonce",d.nc),i.setAttribute("data-webpack",t+o),i.src=d.tu(e)),r[e]=[a];var p=(t,a)=>{i.onerror=i.onload=null,clearTimeout(f);var o=r[e];if(delete r[e],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach(e=>e(a)),t)return t(a)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=p.bind(null,i.onerror),i.onload=p.bind(null,i.onload),l&&document.head.appendChild(i)}},d.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.tu=e=>(void 0===a&&(a={createScriptURL:e=>e},"undefined"!=typeof trustedTypes&&trustedTypes.createPolicy&&(a=trustedTypes.createPolicy("angular#bundler",a))),a.createScriptURL(e)),d.p="",(()=>{var e={666:0};d.f.j=(r,t)=>{var a=d.o(e,r)?e[r]:void 0;if(0!==a)if(a)t.push(a[2]);else if(666!=r){var o=new Promise((t,o)=>a=e[r]=[t,o]);t.push(a[2]=o);var n=d.p+d.u(r),i=new Error;d.l(n,t=>{if(d.o(e,r)&&(0!==(a=e[r])&&(e[r]=void 0),a)){var o=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+o+": "+n+")",i.name="ChunkLoadError",i.type=o,i.request=n,a[1](i)}},"chunk-"+r,r)}else e[r]=0},d.O.j=r=>0===e[r];var r=(r,t)=>{var a,o,[n,i,l]=t,s=0;for(a in i)d.o(i,a)&&(d.m[a]=i[a]);if(l)var u=l(d);for(r&&r(t);s<n.length;s++)d.o(e,o=n[s])&&e[o]&&e[o][0](),e[n[s]]=0;return d.O(u)},t=self.webpackChunkwanderer_app=self.webpackChunkwanderer_app||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})()})();