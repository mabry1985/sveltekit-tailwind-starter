import{S as k,i as B,s as D,k as g,q as b,a as q,l as I,m as y,r as z,h as f,c as C,C as E,n as u,b as p,D as N,u as P,B as S}from"../../../../chunks/index-0d9e0bfe.js";function G(l){let s,i=l[0].firstName+"",_,r,m,n=l[0].bio+"",o,c,t,v,h;return{c(){s=g("h3"),_=b(i),r=q(),m=g("p"),o=b(n),c=q(),t=g("img"),this.h()},l(e){s=I(e,"H3",{});var a=y(s);_=z(a,i),a.forEach(f),r=C(e),m=I(e,"P",{});var d=y(m);o=z(d,n),d.forEach(f),c=C(e),t=I(e,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){E(t.src,v=l[0].profileImage.sizes.main.url)||u(t,"src",v),u(t,"alt",h=l[0].profileImage.alt),u(t,"class","svelte-vvzp5m")},m(e,a){p(e,s,a),N(s,_),p(e,r,a),p(e,m,a),N(m,o),p(e,c,a),p(e,t,a)},p(e,[a]){a&1&&i!==(i=e[0].firstName+"")&&P(_,i),a&1&&n!==(n=e[0].bio+"")&&P(o,n),a&1&&!E(t.src,v=e[0].profileImage.sizes.main.url)&&u(t,"src",v),a&1&&h!==(h=e[0].profileImage.alt)&&u(t,"alt",h)},i:S,o:S,d(e){e&&f(s),e&&f(r),e&&f(m),e&&f(c),e&&f(t)}}}function H(l,s,i){let{data:_}=s;return l.$$set=r=>{"data"in r&&i(0,_=r.data)},[_]}class j extends k{constructor(s){super(),B(this,s,H,G,D,{data:0})}}export{j as default};