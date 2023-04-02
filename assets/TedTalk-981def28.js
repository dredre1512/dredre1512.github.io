import{r as u,o as V,a as s,b as l,d as E,e as L,f as a,i as f,w as b,j as k,F as i,g as p,t as n}from"./index-266bbf12.js";import{a as P}from"./axios-aba6f0e0.js";import{T as N,c as B}from"./Toast-37b7242b.js";const U={class:"bg-gray card p-5"},q=a("h1",null,"TED Talks",-1),C={class:""},F=a("option",{value:"",selected:""},"Select Topic",-1),I=["value"],M=a("option",{value:"",selected:""},"Select Speaker",-1),R=["value"],H=a("option",{value:""},"Select Audio Language",-1),K=["value"],X=a("option",{value:"",selected:""},"Select Subtitle Language",-1),$=["value"],j={class:"text-right"},G={key:0,class:"text-center my-3"},O={key:1,class:"row"},W={class:"card mb-3"},z=["src"],J={class:"card-body"},Q={class:"card-title mb-3"},Y={class:"card-text"},Z=["href"],ee={key:2,class:"text-center my-3"},oe={__name:"TedTalk",setup(te){const y={method:"GET",url:"https://ted-talks-api.p.rapidapi.com/topics",headers:{"X-RapidAPI-Key":B.TED_TALK_API,"X-RapidAPI-Host":"ted-talks-api.p.rapidapi.com"}},x=u("Something went wrong"),T=u(!1),r=u(!1),S=o=>{x.value=o,T.value=!0},c=u([]);u([]);const d=u({}),m=u(""),v=u("en"),_=u("en"),g=u(""),D=async()=>{r.value=!0,y.url="https://ted-talks-api.p.rapidapi.com/talks";const o={...y,params:{}};m.value&&(o.params.topic=m.value),v.value&&(o.params.audio_lang=v.value),_.value&&(o.params.subtitle_lang=_.value),g.value&&(o.params.speaker=g.value);const t=await P.request(o).catch(function(e){S(e.data.errors[0])});t&&t.data&&t.data.errors.length&&S(t.data.errors[0]),t&&t.data&&(c.value=t.data.result.results),r.value=!1},w=o=>o.replace("_"," "),A=async()=>{r.value=!0;const t=["audio_languages","subtitle_languages","topics","speakers"].map(e=>P.request({...y,url:"https://ted-talks-api.p.rapidapi.com/"+e}));Promise.all(t).then(e=>{e.forEach(h=>{d.value[h.data.get]=h.data.result.results}),r.value=!1}).catch(e=>{S("Please input what you want to search"),r.value=!1})};return V(async()=>{await A(),await D()}),(o,t)=>(s(),l(i,null,[T.value?(s(),E(N,{key:0,message:x.value,onHide:t[0]||(t[0]=e=>T.value=!1)},null,8,["message"])):L("",!0),a("main",U,[a("section",null,[q,a("div",C,[f(" Topic "),b(a("select",{"onUpdate:modelValue":t[1]||(t[1]=e=>m.value=e),class:"form-select mb-3","aria-label":"Default select example"},[F,(s(!0),l(i,null,p(d.value.topics,e=>(s(),l("option",{key:"topic_"+e.slug,value:e.slug},n(w(e.slug)),9,I))),128))],512),[[k,m.value]]),f(" Speaker "),b(a("select",{"onUpdate:modelValue":t[2]||(t[2]=e=>g.value=e),class:"form-select mb-3","aria-label":"Default select example"},[M,(s(!0),l(i,null,p(d.value.speakers,e=>(s(),l("option",{key:"topic_"+e.slug,value:e.slug},n(e.full_name),9,R))),128))],512),[[k,g.value]]),f(" Audio "),b(a("select",{"onUpdate:modelValue":t[3]||(t[3]=e=>v.value=e),class:"form-select mb-3","aria-label":"Default select example"},[H,(s(!0),l(i,null,p(d.value.audio_languages,e=>(s(),l("option",{key:"audio_languages_"+e.slug,value:e.slug},n(w(e.slug)),9,K))),128))],512),[[k,v.value]]),f(" Subtitle "),b(a("select",{"onUpdate:modelValue":t[4]||(t[4]=e=>_.value=e),class:"form-select mb-3","aria-label":"Default select example"},[X,(s(!0),l(i,null,p(d.value.subtitle_languages,e=>(s(),l("option",{key:"topic_"+e.slug,value:e.slug},n(w(e.slug)),9,$))),128))],512),[[k,_.value]]),a("button",{onClick:t[5]||(t[5]=e=>D()),class:"btn btn-primary"},"Filter")]),a("div",j,"Results: "+n(c.value.length),1),r.value?(s(),l("div",G," Loading... ")):c.value&&c.value.length!==0?(s(),l("div",O,[(s(!0),l(i,null,p(c.value,(e,h)=>(s(),l("div",{key:"ted-"+h,class:"col-md-6 col-lg-4 col-12 mb-4"},[a("div",W,[a("img",{src:e.thumbnail_url,class:"card-img-top",alt:"..."},null,8,z),a("div",J,[a("h5",Q,n(e.description),1),a("p",Y,n(e.description),1),a("a",{href:e.embed_url,target:"_blank",class:"btn btn-primary"},"Watch",8,Z)])])]))),128))])):(s(),l("div",ee," No data found, try other filters... "))])])],64))}};export{oe as default};
