import{O as r}from"./BI2mVrwD.js";import{b as l}from"./C-gpDOA6.js";import{c as i}from"./C-5SdYIA.js";import{n as c,o as u,u as m,w as p,B as f,v as h,y as t}from"./Dlsq2Qc-.js";const y=c({__name:"Button",props:{variant:{},size:{},class:{},asChild:{type:Boolean},as:{default:"button"}},setup(a){const e=a;return(s,o)=>(u(),m(t(r),{as:s.as,"as-child":s.asChild,class:h(t(i)(t(l)({variant:s.variant,size:s.size}),e.class))},{default:p(()=>[f(s.$slots,"default")]),_:3},8,["as","as-child","class"]))}});function C(a){const e=["red","orange","amber","yellow","lime","green","emerald","teal","cyan","sky","blue","indigo","violet","purple","fuchsia","pink","rose"],s=(a-1)%e.length,o=Math.floor((a-1)/e.length)*100+300,n=o+50;return o>900?`bg-${e[s]}-900 hover:bg-${e[s]}-950`:`bg-${e[s]}-${o} hover:bg-${e[s]}-${n}`}function $(a){return a*(1+a)/2}export{y as _,$ as a,C as g};
