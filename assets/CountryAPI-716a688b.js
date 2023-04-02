import{_ as x,r as d,c as k,o as y,a as c,b as i,f as e,w as I,v as S,F as A,g as N,u as P,t as a,p as B,h as F}from"./index-e2b31dae.js";import{a as j}from"./axios-aba6f0e0.js";const n=r=>(B("data-v-c5cb7386"),r=r(),F(),r),z={class:"bg-gray card p-2 p-md-5"},M=n(()=>e("h1",null,"Country API",-1)),T={class:"overflow-auto x-flow"},D=n(()=>e("div",{class:"my-3"},[e("i",null,"You can click each country to open new tab and see their map in the globe")],-1)),E={class:"input-group mb-5"},O=n(()=>e("span",{class:"input-group-text",id:"basic-addon1"},"Search",-1)),R={key:0},U=n(()=>e("div",{class:"text-center card p-3"},[e("span",null,[e("i",null,"Loading...")])],-1)),V=[U],$={key:1,class:"text-center text-muted card p-3"},Y=n(()=>e("span",null,"No news found.",-1)),q=[Y],G={key:2,class:"table table-striped table-hover w-100 table-bordered"},H=n(()=>e("th",{scope:"col"},"Flag",-1)),J=n(()=>e("th",{scope:"col"},"CIOC",-1)),K=n(()=>e("th",{scope:"col"},"Timezones",-1)),Q=n(()=>e("th",{scope:"col"},"Official Name",-1)),W=n(()=>e("th",{scope:"col"},"Region",-1)),X=n(()=>e("th",{scope:"col"},"Subregion",-1)),Z=n(()=>e("th",{scope:"col"},"Population",-1)),ee=n(()=>e("th",{scope:"col"},"Capital",-1)),oe=["onClick"],te=["src"],se={scope:"row"},ne={__name:"CountryAPI",setup(r){const l=d([]),f=d(!1),b=d(!1),u=d(!1),_=d(""),w=k(()=>{if(l.value&&l.value.length===0)return[];const s=_.value.toLocaleLowerCase();return l.value.filter(t=>{const o=t.name&&t.name.common.toLocaleLowerCase(),p=t.capital&&t.capital.join(", ").toLocaleLowerCase(),m=t.official&&t.official.toLocaleLowerCase(),h=t.region&&t.region.toLocaleLowerCase(),v=t.subregion&&t.subregion.toLocaleLowerCase(),g=t.cioc&&t.cioc.toLocaleLowerCase();return o&&o.includes(s)||p&&p.includes(s)||m&&m.includes(s)||h&&h.includes(s)||g&&g.includes(s)||v&&v.includes(s)})}),C=()=>{u.value=!u.value;let s=[...l.value];s.sort((t,o)=>t.name.common>o.name.common?u.value?1:-1:t.name.common<o.name.common?u.value?-1:1:0),l.value=s},L=s=>{window.open(s,"_newtab")};return y(async()=>{if(l.value.length===0){let s=await j.get("https://restcountries.com/v3.1/all");l.value=s.data}}),(s,t)=>(c(),i("main",z,[M,e("section",T,[D,e("div",E,[O,I(e("input",{"onUpdate:modelValue":t[0]||(t[0]=o=>_.value=o),type:"text",class:"form-control",placeholder:"Country, Region, Capital etc.","aria-label":"search","aria-describedby":"basic-addon1"},null,512),[[S,_.value]])]),f.value?(c(),i("div",R,V)):b.value?(c(),i("div",$,q)):(c(),i("table",G,[e("thead",null,[e("tr",null,[H,J,e("th",{scope:"col",onClick:t[1]||(t[1]=o=>C())},"Name"),K,Q,W,X,Z,ee])]),e("tbody",null,[(c(!0),i(A,null,N(P(w),(o,p)=>(c(),i("tr",{key:o.cioc,onClick:m=>L(o.maps.googleMaps)},[e("td",null,[e("img",{src:o.flags.svg,style:{width:"2em"}},null,8,te)]),e("td",null,a(o.cioc),1),e("th",se,a(o.name.common),1),e("th",null,a(o.timezones&&o.timezones.join(", ")),1),e("td",null,a(o.name.official),1),e("td",null,a(o.region),1),e("td",null,a(o.subregion),1),e("td",null,a(o.population&&o.population.toLocaleString("en-US")),1),e("td",null,a(o.capital&&o.capital.join(", ")),1)],8,oe))),128))])]))])]))}},ce=x(ne,[["__scopeId","data-v-c5cb7386"]]);export{ce as default};
