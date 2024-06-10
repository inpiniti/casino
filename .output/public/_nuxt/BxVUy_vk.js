import{x as S,D as se,P as oe,a as ae,h as ne,b as I,y as le,n as re,l as ce,f as ie,o as de,d as ue,u as pe,p as fe,i as _e,c as me,v as he,m as ge,Z as ve,Q as xe,t as ye,J as be,X as we}from"./BI2mVrwD.js";import{c as b}from"./C-5SdYIA.js";import{n as m,x as B,o as _,u as g,w as r,b as l,v as w,y as t,I as $,B as x,J as D,K as V,L as z,a as e,c as R,t as f,M as Ce,r as P,q as Be,N as $e,C as Te,D as Pe,E as W,d as y,F as Se,z as De,G as Ve,O as q}from"./Dlsq2Qc-.js";import{c as Ne,_ as Le}from"./B348yZxc.js";import{u as Re}from"./BGpanqwr.js";import{s as Ie}from"./AY3_v10l.js";const Me=m({__name:"Switch",props:{defaultChecked:{type:Boolean},checked:{type:Boolean},disabled:{type:Boolean},required:{type:Boolean},name:{},id:{},value:{},asChild:{type:Boolean},as:{},class:{}},emits:["update:checked"],setup(a,{emit:s}){const o=a,i=s,u=B(()=>{const{class:p,...h}=o;return h}),c=S(u,i);return(p,h)=>(_(),g(t(oe),$(t(c),{class:t(b)("peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",o.class)}),{default:r(()=>[l(t(se),{class:w(t(b)("pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"))},null,8,["class"])]),_:1},16,["class"]))}}),ke=m({__name:"Select",props:{open:{type:Boolean},defaultOpen:{type:Boolean},defaultValue:{},modelValue:{},dir:{},name:{},autocomplete:{},disabled:{type:Boolean},required:{type:Boolean}},emits:["update:modelValue","update:open"],setup(a,{emit:s}){const u=S(a,s);return(c,p)=>(_(),g(t(ae),D(V(t(u))),{default:r(()=>[x(c.$slots,"default")]),_:3},16))}}),Ae=m({__name:"SelectValue",props:{placeholder:{},asChild:{type:Boolean},as:{}},setup(a){const s=a;return(o,i)=>(_(),g(t(ne),D(V(s)),{default:r(()=>[x(o.$slots,"default")]),_:3},16))}});/**
 * @license lucide-vue-next v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ze=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-vue-next v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var L={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oe=({size:a,strokeWidth:s=2,absoluteStrokeWidth:o,color:i,iconNode:u,name:c,class:p,...h},{slots:T})=>z("svg",{...L,width:a||L.width,height:a||L.height,stroke:i||L.stroke,"stroke-width":o?Number(s)*24/Number(a):s,class:["lucide",`lucide-${ze(c??"icon")}`],...h},[...u.map(M=>z(...M)),...T.default?[T.default()]:[]]);/**
 * @license lucide-vue-next v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O=(a,s)=>(o,{slots:i})=>z(Oe,{...o,iconNode:s,name:a},i);/**
 * @license lucide-vue-next v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fe=O("CheckIcon",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-vue-next v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=O("ChevronDownIcon",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-vue-next v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const je=O("ChevronUpIcon",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]),He=m({__name:"SelectTrigger",props:{disabled:{type:Boolean},asChild:{type:Boolean},as:{},class:{}},setup(a){const s=a,o=B(()=>{const{class:u,...c}=s;return c}),i=I(o);return(u,c)=>(_(),g(t(re),$(t(i),{class:t(b)("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",s.class)}),{default:r(()=>[x(u.$slots,"default"),l(t(le),{"as-child":""},{default:r(()=>[l(t(E),{class:"w-4 h-4 opacity-50"})]),_:1})]),_:3},16,["class"]))}}),Ke=m({inheritAttrs:!1,__name:"SelectContent",props:{forceMount:{type:Boolean},position:{default:"popper"},bodyLock:{type:Boolean},side:{},sideOffset:{},align:{},alignOffset:{},avoidCollisions:{type:Boolean},collisionBoundary:{},collisionPadding:{},arrowPadding:{},sticky:{},hideWhenDetached:{type:Boolean},updatePositionStrategy:{},prioritizePosition:{type:Boolean},asChild:{type:Boolean},as:{},class:{}},emits:["closeAutoFocus","escapeKeyDown","pointerDownOutside"],setup(a,{emit:s}){const o=a,i=s,u=B(()=>{const{class:p,...h}=o;return h}),c=S(u,i);return(p,h)=>(_(),g(t(de),null,{default:r(()=>[l(t(ce),$({...t(c),...p.$attrs},{class:t(b)("relative z-50 max-h-96 min-w-32 overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",p.position==="popper"&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",o.class)}),{default:r(()=>[l(t(Ge)),l(t(ie),{class:w(t(b)("p-1",p.position==="popper"&&"h-[--radix-select-trigger-height] w-full min-w-[--radix-select-trigger-width]"))},{default:r(()=>[x(p.$slots,"default")]),_:3},8,["class"]),l(t(Je))]),_:3},16,["class"])]),_:3}))}}),Ue=m({__name:"SelectGroup",props:{asChild:{type:Boolean},as:{},class:{}},setup(a){const s=a,o=B(()=>{const{class:i,...u}=s;return u});return(i,u)=>(_(),g(t(ue),$({class:t(b)("p-1 w-full",s.class)},o.value),{default:r(()=>[x(i.$slots,"default")]),_:3},16,["class"]))}}),We={class:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center"},qe=m({__name:"SelectItem",props:{value:{},disabled:{type:Boolean},textValue:{},asChild:{type:Boolean},as:{},class:{}},setup(a){const s=a,o=B(()=>{const{class:u,...c}=s;return c}),i=I(o);return(u,c)=>(_(),g(t(_e),$(t(i),{class:t(b)("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",s.class)}),{default:r(()=>[e("span",We,[l(t(pe),null,{default:r(()=>[l(t(Fe),{class:"h-4 w-4"})]),_:1})]),l(t(fe),null,{default:r(()=>[x(u.$slots,"default")]),_:3})]),_:3},16,["class"]))}}),Ee=m({__name:"SelectLabel",props:{for:{},asChild:{type:Boolean},as:{},class:{}},setup(a){const s=a;return(o,i)=>(_(),g(t(me),{class:w(t(b)("py-1.5 pl-8 pr-2 text-sm font-semibold",s.class))},{default:r(()=>[x(o.$slots,"default")]),_:3},8,["class"]))}}),Ge=m({__name:"SelectScrollUpButton",props:{asChild:{type:Boolean},as:{},class:{}},setup(a){const s=a,o=B(()=>{const{class:u,...c}=s;return c}),i=I(o);return(u,c)=>(_(),g(t(he),$(t(i),{class:t(b)("flex cursor-default items-center justify-center py-1",s.class)}),{default:r(()=>[x(u.$slots,"default",{},()=>[l(t(je),{class:"h-4 w-4"})])]),_:3},16,["class"]))}}),Je=m({__name:"SelectScrollDownButton",props:{asChild:{type:Boolean},as:{},class:{}},setup(a){const s=a,o=B(()=>{const{class:u,...c}=s;return c}),i=I(o);return(u,c)=>(_(),g(t(ge),$(t(i),{class:t(b)("flex cursor-default items-center justify-center py-1",s.class)}),{default:r(()=>[x(u.$slots,"default",{},()=>[l(t(E),{class:"h-4 w-4"})])]),_:3},16,["class"]))}}),Ze=m({__name:"Badge",props:{variant:{},class:{}},setup(a){const s=a;return(o,i)=>(_(),R("div",{class:w(t(b)(t(Qe)({variant:o.variant}),s.class))},[x(o.$slots,"default")],2))}}),Qe=Ne("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}}),Xe=m({__name:"Tooltip",props:{defaultOpen:{type:Boolean},open:{type:Boolean},delayDuration:{},disableHoverableContent:{type:Boolean},disableClosingTrigger:{type:Boolean},disabled:{type:Boolean},ignoreNonKeyboardFocus:{type:Boolean}},emits:["update:open"],setup(a,{emit:s}){const u=S(a,s);return(c,p)=>(_(),g(t(ve),D(V(t(u))),{default:r(()=>[x(c.$slots,"default")]),_:3},16))}}),Ye=m({inheritAttrs:!1,__name:"TooltipContent",props:{ariaLabel:{},asChild:{type:Boolean},as:{},side:{},sideOffset:{default:4},align:{},alignOffset:{},avoidCollisions:{type:Boolean},collisionBoundary:{},collisionPadding:{},arrowPadding:{},sticky:{},hideWhenDetached:{type:Boolean},class:{}},emits:["escapeKeyDown","pointerDownOutside"],setup(a,{emit:s}){const o=a,i=s,u=B(()=>{const{class:p,...h}=o;return h}),c=S(u,i);return(p,h)=>(_(),g(t(ye),null,{default:r(()=>[l(t(xe),$({...t(c),...p.$attrs},{class:t(b)("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",o.class)}),{default:r(()=>[x(p.$slots,"default")]),_:3},16,["class"])]),_:3}))}}),et=m({__name:"TooltipTrigger",props:{asChild:{type:Boolean},as:{}},setup(a){const s=a;return(o,i)=>(_(),g(t(be),D(V(s)),{default:r(()=>[x(o.$slots,"default")]),_:3},16))}}),tt=m({__name:"TooltipProvider",props:{delayDuration:{},skipDelayDuration:{},disableHoverableContent:{type:Boolean},disableClosingTrigger:{type:Boolean},disabled:{type:Boolean},ignoreNonKeyboardFocus:{type:Boolean}},setup(a){const s=a;return(o,i)=>(_(),g(t(we),D(V(s)),{default:r(()=>[x(o.$slots,"default")]),_:3},16))}}),st=m({__name:"technicalTextColor",props:{technicalText:{}},setup(a){return(s,o)=>(_(),R("span",{class:w({"text-red-500":s.technicalText==="strong_buy","text-yellow-500":s.technicalText==="buy","text-gray-500":s.technicalText==="neutral","text-blue-500":s.technicalText==="sell","text-green-500":s.technicalText==="strong_sell"})},f(s.technicalText),3))}}),ot={class:"flex flex-col divide-y h-full divide-neutral-300"},at={class:"shrink-0 flex divide-x border-r w-fit divide-neutral-300"},nt={class:"px-4 py-2"},lt={class:"px-4 py-2 text-neutral-400 flex items-center gap-2 text-sm"},rt={class:"px-4 py-2 text-neutral-400 flex items-center gap-2 text-sm"},ct={class:"text-neutral-400 flex items-center gap-2"},it={class:"grow-[0] overflow-hidden flex divide-x h-full divide-neutral-300"},dt={class:"shrink-0 flex flex-col h-full overflow-y-scroll scrollbar-hide"},ut={class:"flex justify-between items-center gap-2"},pt={class:"text-sm"},ft={class:"text-neutral-400"},_t={class:"text-sm flex items-center gap-3"},mt={class:"text-xl font-bold flex items-center gap-1"},ht=e("span",{class:"text-xs font-normal text-neutral-400"},"종가",-1),gt={class:"font-bold text-blue-400 flex items-center gap-1"},vt=e("span",{class:"text-xs font-normal text-neutral-400"},"저가",-1),xt={class:"font-bold text-red-400 flex items-center gap-1"},yt=e("span",{class:"text-xs font-normal text-neutral-400"},"고가",-1),bt={class:"flex gap-2"},wt={class:"flex gap-1"},Ct=e("span",{class:"text-neutral-400"},"매출",-1),Bt={class:"flex gap-1"},$t=e("span",{class:"text-neutral-400 cursor-pointer"}," 주가수익비율(PER) ",-1),Tt=e("p",null,"낮을수록 저평가",-1),Pt={class:"flex gap-1"},St=e("span",{class:"text-neutral-400 cursor-pointer"},"베타",-1),Dt=e("p",null,"베타계수가 1에 가까울 수록 시장과 동일한 선상",-1),Vt=e("p",null,"0으로 갈수록 시장과 관계없이 주가 수익률을 내고 있다는 뜻",-1),Nt=e("p",null,"1보다 큰 값들은 시장보다 수익률이 민감하게 반응",-1),Lt={class:"flex items-center gap-3"},Rt=e("div",{class:"text-neutral-500"},"성과",-1),It={class:"flex items-center gap-1 flex-1"},Mt=e("div",{class:"text-neutral-400"},"일일",-1),kt={class:"flex items-center gap-1 flex-1"},At=e("div",{class:"text-neutral-400"},"주간",-1),zt={class:"flex items-center gap-1 flex-1"},Ot=e("div",{class:"text-neutral-400"},"월간",-1),Ft={class:"flex items-center gap-1 flex-1"},jt=e("div",{class:"text-neutral-400"},"연간",-1),Ht={class:"flex items-center gap-3"},Kt=e("div",{class:"text-neutral-500"},"분석",-1),Ut={class:"flex items-center gap-1"},Wt=e("div",{class:"text-neutral-400"},"시간당",-1),qt={class:"flex items-center gap-1"},Et=e("div",{class:"text-neutral-400"},"일일",-1),Gt={class:"flex items-center gap-1"},Jt=e("div",{class:"text-neutral-400"},"주간",-1),Zt={class:"flex items-center gap-1"},Qt=e("div",{class:"text-neutral-400"},"월간",-1),Xt={class:"flex gap-2"},Yt={class:"h-5 w-full bg-neutral-400 relative rounded overflow-hidden"},es={class:"h-5 text-white absolute flex items-center px-2"},ts={class:"flex gap-2"},ss={class:"h-5 w-full bg-neutral-400 relative rounded"},os={class:"h-5 text-white absolute flex items-center px-2"},as={class:"grow-[0] overflow-hidden w-full"},ps=m({__name:"[code]",setup(a){const s=Ce(),o=Re("stockList",()=>[]),i=P();Be(()=>{u(),i.value=Ie(u,1e3*60*1)}),$e(()=>{clearInterval(i.value)});const u=()=>{fetch(`/api/investing/${s.params.code}`).then(v=>v.json()).then(v=>{(v==null?void 0:v.data)!=null?o.value=v.data:o.value=[]}).catch(v=>{console.error(v)})},c=P("volumeRate"),p=P(""),h=P(!1),T=P(!1),M=B(()=>{if(!Array.isArray(o.value))return console.error("stockList.value is not an array",o.value),[];const v=Date.now()-3600*1e3;return o.value.map(d=>({...d,volumeRate:Math.round(d.Volume/d.AvgVolume*100*10)/10})).filter(d=>!h.value||h.value&&Number(d.Time)*1e3>=v).filter(d=>d.Name.toLowerCase().includes(p.value.toLowerCase())).filter(d=>!T.value||d.TechnicalDay=="strong_buy"&&d.TechnicalHour=="strong_buy"&&d.TechnicalMonth=="strong_buy"&&d.TechnicalWeek=="strong_buy").sort((d,C)=>c.value==="Name"?d.Name.localeCompare(C.Name):c.value==="volumeRate"?C.volumeRate-d.volumeRate:c.value==="Chg"?C.Chg-d.Chg:c.value==="ChgPct"?C.ChgPct-d.ChgPct:0).slice(0,100)});function G(v){const d=Math.floor((new Date().getTime()-v*1e3)/1e3),C=Math.floor(d/3600),k=Math.floor(d%3600/60),A=d%60;return`${C.toString().padStart(2,"0")}:${k.toString().padStart(2,"0")}:${A.toString().padStart(2,"0")} 전`}return(v,d)=>{const C=Me,k=Ae,A=He,J=Ee,F=qe,Z=Ue,Q=Ke,X=ke,Y=Ze,j=et,H=Ye,K=Xe,U=tt,N=st,ee=Le,te=Ve;return _(),R("div",ot,[e("div",at,[e("div",nt,[Te(e("input",{class:"focus:outline-none",type:"text","onUpdate:modelValue":d[0]||(d[0]=n=>W(p)?p.value=n:null),placeholder:"search"},null,512),[[Pe,t(p)]])]),e("div",lt,[l(C,{id:"airplane-mode",onClick:d[1]||(d[1]=n=>h.value=!t(h))}),y("최근 데이터")]),e("div",rt,[l(C,{id:"airplane-mode",onClick:d[2]||(d[2]=n=>T.value=!t(T))}),y("분석")]),e("div",ct,[l(X,{modelValue:t(c),"onUpdate:modelValue":d[3]||(d[3]=n=>W(c)?c.value=n:null)},{default:r(()=>[l(A,{class:"border-0 outline-none focus:outline-none"},{default:r(()=>[l(k,{placeholder:"정렬"})]),_:1}),l(Q,{class:""},{default:r(()=>[l(Z,null,{default:r(()=>[l(J,null,{default:r(()=>[y("Sort")]),_:1}),l(F,{value:"volumeRate"},{default:r(()=>[y(" 거래량율 ")]),_:1}),l(F,{value:"ChgPct"},{default:r(()=>[y(" 변동률 ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])])]),e("div",it,[e("div",dt,[(_(!0),R(Se,null,De(t(M),n=>(_(),g(ee,{class:"px-4 py-2 mx-2 my-1 text-xs flex flex-col gap-1",key:n.Name,onClick:ns=>v.$router.push(`/stock/${t(s).params.code}/${n.Id}`)},{default:r(()=>[e("div",ut,[e("div",pt,[y(f(n.Name)+" ",1),l(Y,{variant:"outline"},{default:r(()=>[y(f(n.Id),1)]),_:2},1024)]),e("div",ft,f(G(Number(n.Time))),1)]),e("div",_t,[e("div",mt,[ht,y(" "+f(n.Last),1)]),e("div",gt,[vt,y(" "+f(n.Low),1)]),e("div",xt,[yt,y(" "+f(n.High),1)])]),e("div",bt,[e("div",wt,[Ct,y(" "+f(n.FundamentalRevenue),1)]),e("div",Bt,[l(U,null,{default:r(()=>[l(K,null,{default:r(()=>[l(j,{"as-child":""},{default:r(()=>[$t]),_:1}),l(H,null,{default:r(()=>[Tt]),_:1})]),_:1})]),_:1}),y(" "+f(n.FundamentalRatio),1)]),e("div",Pt,[l(U,null,{default:r(()=>[l(K,null,{default:r(()=>[l(j,null,{default:r(()=>[St]),_:1}),l(H,null,{default:r(()=>[Dt,Vt,Nt]),_:1})]),_:1})]),_:1}),y(" "+f(n.FundamentalBeta),1)])]),e("div",Lt,[Rt,e("div",It,[Mt,e("div",{class:w(["font-bold",n.PerformanceDay>0?"text-red-500":"text-blue-500"])},f(n.PerformanceDay),3)]),e("div",kt,[At,e("div",{class:w(["font-bold",n.PerformanceWeek>0?"text-red-500":"text-blue-500"])},f(n.PerformanceWeek),3)]),e("div",zt,[Ot,e("div",{class:w(["font-bold",n.PerformanceMonth>0?"text-red-500":"text-blue-500"])},f(n.PerformanceMonth),3)]),e("div",Ft,[jt,e("div",{class:w(["font-bold",n.PerformanceYear>0?"text-red-500":"text-blue-500"])},f(n.PerformanceYear),3)])]),e("div",Ht,[Kt,e("div",Ut,[Wt,l(N,{technicalText:n.TechnicalHour},null,8,["technicalText"])]),e("div",qt,[Et,l(N,{technicalText:n.TechnicalDay},null,8,["technicalText"])]),e("div",Gt,[Jt,l(N,{technicalText:n.TechnicalMonth},null,8,["technicalText"])]),e("div",Zt,[Qt,l(N,{technicalText:n.TechnicalWeek},null,8,["technicalText"])])]),e("div",Xt,[e("div",Yt,[e("div",{class:"h-5 bg-blue-500 absolute top-0 left-0 rounded",style:q({width:`${n.volumeRate/10}%`})},null,4),e("div",es,"거래량 "+f(n.volumeRate)+"% ("+f(n.Volume)+" / "+f(n.AvgVolume)+")",1)])]),e("div",ts,[e("div",ss,[e("div",{class:w(["h-5 absolute top-0 left-0 rounded",n.Chg>0?"bg-red-500":"bg-blue-500"]),style:q({width:`${n.ChgPct*3}%`})},null,6),e("div",os,"변동률 "+f(n.ChgPct)+"% ("+f(n.Chg)+")",1)])])]),_:2},1032,["onClick"]))),128))]),e("div",as,[l(te)])])])}}});export{ps as default};
