import{r as c,o as i,a as m,b as u,f as t,w as d,v as p,t as l}from"./index-a8cbe381.js";import{a as _}from"./axios-aba6f0e0.js";import{c as f}from"./constants-787934ef.js";const b={class:"bg-gray card p-5"},h=t("h1",null,"Numbers API",-1),v={class:"mx-auto pt-3"},x={class:"mb-3"},y=t("label",{for:"q",class:"form-label"},"Search",-1),g={class:"text-center p-3"},I={class:"col-12 col-sm-6 mx-auto card shadow p-3"},A={__name:"Numbers",setup(M){const o=c(""),e=c(""),r=async()=>{const n={method:"GET",params:{fragment:"true",json:"true"},headers:{"X-RapidAPI-Key":f.NUMBERS_API_KEY,"X-RapidAPI-Host":"numbersapi.p.rapidapi.com"}},a=o.value||Math.floor(Math.random()*100);n.url="https://numbersapi.p.rapidapi.com/"+a+"/math",_.request(n).then(function(s){e.value=s.data}).catch(function(s){console.error(s)})};return i(async()=>{await r()}),(n,a)=>(m(),u("main",b,[h,t("section",null,[t("div",v,[t("div",x,[y,d(t("input",{"onUpdate:modelValue":a[0]||(a[0]=s=>o.value=s),type:"number",class:"form-control",id:"q",placeholder:"Input a number or leave blank for a random number facts"},null,512),[[p,o.value]])])]),t("button",{onClick:a[1]||(a[1]=s=>r()),class:"btn btn-primary mt-3"}," Get random number facts "),t("div",g,[t("div",I,l(e.value.number)+" is "+l(e.value.text),1)])])]))}};export{A as default};
