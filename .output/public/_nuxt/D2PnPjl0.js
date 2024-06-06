import{_ as V}from"./Co8UMe4X.js";import{x as j,I as D,a as H,_ as K,D as F,b as A,g as E}from"./BY5oHCaD.js";import{c as P,s as G}from"./DGQ6wNWV.js";import{n as g,u as y,o as r,c as h,b as d,G as B,v as s,q as b,w as i,B as I,H as J,I as O,_ as U,d as v,r as M,z as W,a as e,J as q,K as R,L as Q,F as N,x as $,y as L,t as f,s as C,M as X}from"./B4mffjkz.js";import{u as Y}from"./C1Mrrx-X.js";const Z={class:"absolute left-0 top-full flex justify-center"},ee=g({__name:"NavigationMenuViewport",props:{forceMount:{type:Boolean},asChild:{type:Boolean},as:{},class:{}},setup(u){const n=u,a=y(()=>{const{class:t,..._}=n;return _}),o=j(a);return(t,_)=>(r(),h("div",Z,[d(s(D),B(s(o),{class:s(P)("origin-top-center relative mt-1.5 h-[--radix-navigation-menu-viewport-height] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[--radix-navigation-menu-viewport-width]",n.class)}),null,16,["class"])]))}}),te=g({__name:"NavigationMenu",props:{modelValue:{},defaultValue:{},dir:{},orientation:{},delayDuration:{},skipDelayDuration:{},disableClickTrigger:{type:Boolean},disableHoverTrigger:{type:Boolean},asChild:{type:Boolean},as:{},class:{}},emits:["update:modelValue"],setup(u,{emit:n}){const a=u,o=n,t=y(()=>{const{class:c,...w}=a;return w}),_=H(t,o);return(c,w)=>(r(),b(s(K),B(s(_),{class:s(P)("relative z-10 flex max-w-max flex-1 items-center justify-center",a.class)}),{default:i(()=>[I(c.$slots,"default"),d(ee)]),_:3},16,["class"]))}}),se=g({__name:"NavigationMenuList",props:{asChild:{type:Boolean},as:{},class:{}},setup(u){const n=u,a=y(()=>{const{class:t,..._}=n;return _}),o=j(a);return(t,_)=>(r(),b(s(F),B(s(o),{class:s(P)("group flex flex-1 list-none items-center justify-center gap-x-1",n.class)}),{default:i(()=>[I(t.$slots,"default")]),_:3},16,["class"]))}}),ae=g({__name:"NavigationMenuItem",props:{value:{},asChild:{type:Boolean},as:{}},setup(u){const n=u;return(a,o)=>(r(),b(s(A),J(O(n)),{default:i(()=>[I(a.$slots,"default")]),_:3},16))}}),oe={};function ne(u,n){const a=V,o=ae,t=se,_=te;return r(),b(_,null,{default:i(()=>[d(t,{class:"px-8 py-4"},{default:i(()=>[d(o,null,{default:i(()=>[d(a,{to:"/",class:"px-2 font-bold"},{default:i(()=>[v(" casino ")]),_:1})]),_:1}),d(o,null,{default:i(()=>[d(a,{to:"/stock",class:"px-2"},{default:i(()=>[v(" stock ")]),_:1})]),_:1}),d(o,null,{default:i(()=>[d(a,{to:"/daisai",class:"px-2"},{default:i(()=>[v(" daisai ")]),_:1})]),_:1}),d(o,null,{default:i(()=>[d(a,{to:"/roulette",class:"px-2"},{default:i(()=>[v(" roulette ")]),_:1})]),_:1})]),_:1})]),_:1})}const le=U(oe,[["render",ne]]),re=g({__name:"Separator",props:{orientation:{},decorative:{type:Boolean},asChild:{type:Boolean},as:{},class:{}},setup(u){const n=u,a=y(()=>{const{class:o,...t}=n;return t});return(o,t)=>(r(),b(s(E),B(a.value,{class:s(P)("shrink-0 bg-border",n.orientation==="vertical"?"w-px h-full":"h-px w-full",n.class)}),null,16,["class"]))}}),ce={class:"w-screen h-screen flex flex-col"},ie={class:"shrink-0"},de={class:"grow-[0] h-full flex divide-x overflow-hidden"},ue={class:"shrink-0 w-60 h-full overflow-y-scroll scrollbar-hide"},_e=["onClick"],pe={class:"flex text-xs"},fe={class:"w-72"},he={class:"flex flex-col grow-[0] h-full w-full bg-neutral-50"},ve={key:0,class:"shrink-0 flex flex-col divide-y bg-white border-b"},me={class:"px-4 py-2 font-bold"},xe={class:"flex divide-x"},ge={class:"text-xs px-4 py-2 flex flex-col gap-2 items-center"},ye={class:"font-bold pr-2"},be={class:"flex gap-2"},we=e("div",{class:"text-neutral-400"},"현재가",-1),ke=e("div",{class:"text-neutral-400"},"고가",-1),Ce=e("div",{class:"text-neutral-400"},"저가",-1),Pe=e("div",{class:"text-neutral-400"},"변동",-1),Be=e("div",{class:"text-neutral-400"},"변동%",-1),Ie=e("div",{class:"text-neutral-400"},"시간",-1),Me={class:"grow-[0] h-full overflow-y-scroll scrollbar-hide"},je=g({__name:"default",setup(u){const n=M();W(()=>{a(),n.value=G(a,1001*60*10)});const a=()=>{fetch("/api/investing/indices").then(p=>p.json()).then(p=>{t.value=p,T()})},o=M(""),t=M({}),_=y(()=>{const p={};return t.value!==void 0&&t.value!==null&&typeof t.value=="object"&&Object.keys(t.value).forEach(m=>{const x=t.value[m].filter(S=>m.toLowerCase().includes(o.value.toLowerCase()));x.length>0&&(p[m]=x)}),p}),c=Y("selectedCountry"),w=({name:p,indiceList:m})=>{const x={Israel:"il",Brazil:"br",France:"fr",Hong:"hk",Belgium:"be",Finland:"fi",Italy:"it",Sweden:"se",Singapore:"sg",Netherlands:"nl",Switzerland:"ch",Chile:"cl",Canada:"ca",Germany:"de",Ireland:"ie",Norway:"no",Denmark:"dk",Portugal:"pt",Spain:"es",United:"uk",Colombia:"co",Czech:"cz",Greece:"gr",Egypt:"eg",Hungary:"hu",India:"in",Indonesia:"id",Korea:"kr",Malaysia:"my",Mexico:"mx",Peru:"pe",Philippines:"ph",Poland:"pl",Thailand:"th",Turkey:"tr",Argentina:"ar",Jordan:"jo",Morocco:"ma",Oman:"om",Pakistan:"pk",Qatar:"qa",Sri:"lk",Australia:"au",China:"cn",Japan:"jp",US:"us",Austria:"at",Cyprus:"cy",Taiwan:"tw"};c.value={name:p,indiceList:m},X(`/stock/${x[p]}`)},T=()=>{c.value!=null?c.value={name:c.value.name,indiceList:t.value[c.value.name]}:c.value={name:"Korea",indiceList:t.value.Korea}};return(p,m)=>{const x=le,S=re;return r(),h("div",ce,[e("div",ie,[d(x,{class:"shrink-0 h-fit"})]),d(S),e("div",de,[e("div",ue,[e("div",null,[q(e("input",{class:"px-4 py-2 bg-neutral-100 w-full focus:outline-none",type:"text",placeholder:"search","onUpdate:modelValue":m[0]||(m[0]=l=>Q(o)?o.value=l:null)},null,512),[[R,s(o)]])]),s(t)?(r(!0),h(N,{key:0},$(Object.entries(s(_)),([l,z])=>(r(),h("div",{class:C(["px-4 py-2 border-b border-l-4 hover:bg-blue-50 hover:border-l-blue-500 cursor-pointer",{"bg-blue-50  border-l-blue-500":s(c)===l}]),onClick:k=>w({name:l,indiceList:z})},[v(f(l=="Hong"?"Hong Kong":l)+" ",1),(r(!0),h(N,null,$(z,k=>(r(),h("div",pe,[e("div",fe,f(k.index),1),e("div",{class:C(k.changePercent.startsWith("+")?"text-red-500":"text-blue-500")},f(k.changePercent),3)]))),256))],10,_e))),256)):L("",!0)]),e("div",he,[s(c)?(r(),h("div",ve,[e("div",me,f(s(c).name),1),e("div",xe,[(r(!0),h(N,null,$(s(c).indiceList,l=>(r(),h("div",ge,[e("div",ye,f(l.index),1),e("div",be,[e("div",null,[we,v(" "+f(l.currentPrice),1)]),e("div",null,[ke,v(" "+f(l.highPrice),1)]),e("div",null,[Ce,v(" "+f(l.lowPrice),1)]),e("div",null,[Pe,e("div",{class:C(l.change.startsWith("+")?"text-red-500":"text-blue-500")},f(l.change),3)]),e("div",null,[Be,e("div",{class:C(l.change.startsWith("+")?"text-red-500":"text-blue-500")},f(l.changePercent),3)]),e("div",null,[Ie,v(" "+f(l.time),1)])])]))),256))])])):L("",!0),e("div",Me,[I(p.$slots,"default")])])])])}}});export{je as default};
