import v from"./OwyZ1ItC.js";import{d as x,as as h,r as n,o as g,b as r,c as l,X as S,M as c,f as k,l as y}from"./DO6SvLuA.js";const $={class:"sandbox"},w=["src"],B={key:2},C=x({__name:"Sandbox",props:{src:{type:String,default:""},repo:{type:String,default:""},branch:{type:String,default:""},dir:{type:String,default:""},file:{type:String,default:"app.vue"}},setup(i){const e=i,p=h(),o={CodeSandBox:()=>`https://codesandbox.io/embed/github/${e.repo}/tree/${e.branch}/${e.dir}?hidenavigation=1&theme=${p.value}`,StackBlitz:()=>`https://stackblitz.com/github/${e.repo}/tree/${e.branch}/${e.dir}?embed=1&file=${e.file}&theme=${p.value}`},b=Object.keys(o).map(t=>({label:t})),d=n(-1),u=n(),s=n(""),a=n(""),m=t=>{a.value=t,s.value=e.src||o[a.value](),localStorage.setItem("docus_sandbox",t)},_=t=>{d.value=t,m(b[t].label)};return g(()=>{a.value=window.localStorage.getItem("docus_sandbox")||"CodeSandBox",s.value=e.src||o[a.value](),d.value=Object.keys(o).indexOf(a.value)}),(t,I)=>{const f=v;return r(),l("div",$,[i.src?k("",!0):(r(),S(f,{key:0,ref_key:"tabs",ref:u,"active-tab-index":c(d),tabs:c(b),"onUpdate:activeTabIndex":_},null,8,["active-tab-index","tabs"])),c(s)?(r(),l("iframe",{key:1,src:c(s),title:"Sandbox editor",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"},null,8,w)):(r(),l("span",B,"Loading Sandbox..."))])}}}),O=y(C,[["__scopeId","data-v-39788b10"]]);export{O as default};
