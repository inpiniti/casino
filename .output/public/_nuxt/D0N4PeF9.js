import{x as W,c as T,D as q,P as E,s as M}from"./6-jSAfBY.js";import{n as x,u as H,o as m,q as I,w as n,b as t,s as p,v as r,C as F,c as v,a as s,B as y,t as c,D as U,r as w,z as Y,E as j,G,H as J,I as K,J as O,K as Q,d,F as X,x as Z}from"./DWzUlBZ_.js";import{u as ee}from"./DpN2UUZU.js";const te=x({__name:"Switch",props:{defaultChecked:{type:Boolean},checked:{type:Boolean},disabled:{type:Boolean},required:{type:Boolean},name:{},id:{},value:{},asChild:{type:Boolean},as:{},class:{}},emits:["update:checked"],setup(u,{emit:a}){const o=u,_=a,P=H(()=>{const{class:N,...i}=o;return i}),$=W(P,_);return(N,i)=>(m(),I(r(E),F(r($),{class:r(T)("peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",o.class)}),{default:n(()=>[t(r(q),{class:p(r(T)("pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"))},null,8,["class"])]),_:1},16,["class"]))}}),le={class:"relative w-full overflow-auto"},se=x({__name:"Table",props:{class:{}},setup(u){const a=u;return(o,_)=>(m(),v("div",le,[s("table",{class:p(r(T)("w-full caption-bottom text-sm",a.class))},[y(o.$slots,"default")],2)]))}}),ae=x({__name:"TableBody",props:{class:{}},setup(u){const a=u;return(o,_)=>(m(),v("tbody",{class:p(r(T)("[&_tr:last-child]:border-0",a.class))},[y(o.$slots,"default")],2))}}),ne=x({__name:"TableCell",props:{class:{}},setup(u){const a=u;return(o,_)=>(m(),v("td",{class:p(r(T)("p-4 align-middle [&:has([role=checkbox])]:pr-0",a.class))},[y(o.$slots,"default")],2))}}),oe=x({__name:"TableHead",props:{class:{}},setup(u){const a=u;return(o,_)=>(m(),v("th",{class:p(r(T)("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",a.class))},[y(o.$slots,"default")],2))}}),re=x({__name:"TableHeader",props:{class:{}},setup(u){const a=u;return(o,_)=>(m(),v("thead",{class:p(r(T)("[&_tr]:border-b",a.class))},[y(o.$slots,"default")],2))}}),ce=x({__name:"TableRow",props:{class:{}},setup(u){const a=u;return(o,_)=>(m(),v("tr",{class:p(r(T)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",a.class))},[y(o.$slots,"default")],2))}}),ue=x({__name:"technicalTextColor",props:{technicalText:{}},setup(u){return(a,o)=>(m(),v("span",{class:p({"text-red-500":a.technicalText==="strong_buy","text-yellow-500":a.technicalText==="buy","text-gray-500":a.technicalText==="neutral","text-blue-500":a.technicalText==="sell","text-green-500":a.technicalText==="strong_sell"})},c(a.technicalText),3))}}),ie={class:"flex flex-col divide-y"},de={class:"h-1 bg-neutral-200"},fe={class:"flex divide-x border-r w-fit"},pe={class:"px-4 py-2 bg-neutral-100"},me={class:"px-4 py-2 text-neutral-400 flex items-center gap-2"},_e={class:"text-xs text-neutral-400"},he={class:"text-xs text-neutral-400"},ve={class:"text-xs text-neutral-400"},xe={class:"text-xs text-neutral-400"},Ce=x({__name:"[code]",setup(u){const a=U(),o=ee("stockList",()=>[]),_=w(),P=w(),$=w(0);Y(()=>{N(),_.value=M(N,1e3*60*1),P.value=M(()=>{$.value+=1/60*100},1e3)}),j(()=>{clearInterval(_.value),clearInterval(P.value)});const N=()=>{fetch(`/api/investing/${a.params.code}`).then(f=>f.json()).then(f=>{(f==null?void 0:f.data)!=null?o.value=f.data:o.value=[]}).catch(f=>{console.error(f)}).finally(()=>{$.value=0})},i=w("Name"),S=w(""),B=w(!1),L=H(()=>{const f=Date.now()-36e5;return o.value.map(l=>({...l,volumeRate:Math.round(l.Volume/l.AvgVolume*100*10)/10})).filter(l=>!B.value||B.value&&Number(l.Time)*1e3>=f).filter(l=>l.Name.toLowerCase().includes(S.value.toLowerCase())).sort((l,b)=>i.value==="Name"?l.Name.localeCompare(b.Name):i.value==="volumeRate"?b.volumeRate-l.volumeRate:i.value==="Chg"?b.Chg-l.Chg:i.value==="ChgPct"?b.ChgPct-l.ChgPct:0).slice(0,100)});function V(f){const l=Math.floor((new Date().getTime()-f*1e3)/1e3),b=Math.floor(l/3600),h=Math.floor(l%3600/60),C=l%60;return`${b.toString().padStart(2,"0")}:${h.toString().padStart(2,"0")}:${C.toString().padStart(2,"0")} 전`}return(f,l)=>{const b=te,h=oe,C=G("font-awesome-icon"),D=ce,A=re,g=ne,R=ue,k=ae,z=se;return m(),v("div",ie,[s("div",de,[s("div",{class:"bg-red-500 h-1",style:J({width:`${r($)}%`})},null,4)]),s("div",fe,[s("div",pe,[K(s("input",{class:"bg-neutral-100 focus:outline-none",type:"text","onUpdate:modelValue":l[0]||(l[0]=e=>Q(S)?S.value=e:null),placeholder:"search"},null,512),[[O,r(S)]])]),s("div",me,[t(b,{id:"airplane-mode",onClick:l[1]||(l[1]=e=>B.value=!r(B))}),d("최근 한시간 이내 데이터만")])]),t(z,{class:"border-b"},{default:n(()=>[t(A,null,{default:n(()=>[t(D,{class:"text-xs"},{default:n(()=>[t(h,null,{default:n(()=>[d("나라")]),_:1}),t(h,{onClick:l[2]||(l[2]=e=>i.value="Name"),class:"cursor-pointer font-bold"},{default:n(()=>[d(" 이름 "),t(C,{icon:["fas",r(i)=="Name"?"sort-down":"sort"]},null,8,["icon"])]),_:1}),t(h,{onClick:l[3]||(l[3]=e=>i.value="volumeRate"),class:"cursor-pointer font-bold"},{default:n(()=>[d(" 거래량 / 평균 거래량 (거래량률) "),t(C,{icon:["fas",r(i)=="volumeRate"?"sort-down":"sort"]},null,8,["icon"])]),_:1}),t(h,{onClick:l[4]||(l[4]=e=>i.value="Chg"),class:"cursor-pointer font-bold"},{default:n(()=>[d("변동치"),t(C,{icon:["fas",r(i)=="Chg"?"sort-down":"sort"]},null,8,["icon"])]),_:1}),t(h,{onClick:l[5]||(l[5]=e=>i.value="ChgPct"),class:"cursor-pointer font-bold"},{default:n(()=>[d(" 변동률 (%) "),t(C,{icon:["fas",r(i)=="ChgPct"?"sort-down":"sort"]},null,8,["icon"])]),_:1}),t(h,{class:"font-bold"},{default:n(()=>[d(" 가격 (최저,마지막,최고) ")]),_:1}),t(h,{class:"font-bold"},{default:n(()=>[d(" 성과 (일일,주간,월간,연간) ")]),_:1}),t(h,{class:"font-bold"},{default:n(()=>[d(" 분석 (시간당,일일,주간,월간) ")]),_:1})]),_:1})]),_:1}),t(k,null,{default:n(()=>[(m(!0),v(X,null,Z(r(L),e=>(m(),I(D,{key:e.Name},{default:n(()=>[t(g,null,{default:n(()=>[d(c(e.CountryNameTranslated),1)]),_:2},1024),t(g,{class:"font-bold"},{default:n(()=>[s("div",null,c(e.Name),1),s("div",null,"("+c(V(Number(e.Time)))+")",1)]),_:2},1024),t(g,null,{default:n(()=>[s("div",_e,c(e.Volume),1),s("div",he,"/ "+c(e.AvgVolume),1),s("div",null,c(e.volumeRate)+"%",1)]),_:2},1024),t(g,null,{default:n(()=>[d(c(e.Chg),1)]),_:2},1024),t(g,null,{default:n(()=>[d(c(e.ChgPct),1)]),_:2},1024),t(g,null,{default:n(()=>[s("div",ve,c(e.Low)+" ~",1),s("div",null,c(e.Last)+" ~",1),s("div",xe,c(e.High),1)]),_:2},1024),t(g,null,{default:n(()=>[s("div",{class:p(e.PerformanceDay>0?"text-red-500":"text-blue-500")},c(e.PerformanceDay)+" /",3),s("div",{class:p(e.PerformanceWeek>0?"text-red-500":"text-blue-500")},c(e.PerformanceWeek)+" /",3),s("div",{class:p(e.PerformanceMonth>0?"text-red-500":"text-blue-500")},c(e.PerformanceMonth)+" /",3),s("div",{class:p(e.PerformanceYear>0?"text-red-500":"text-blue-500")},c(e.PerformanceYear),3)]),_:2},1024),t(g,null,{default:n(()=>[s("div",null,[t(R,{technicalText:e.TechnicalHour},null,8,["technicalText"]),d(" /")]),s("div",null,[t(R,{technicalText:e.TechnicalDay},null,8,["technicalText"]),d(" /")]),s("div",null,[t(R,{technicalText:e.TechnicalMonth},null,8,["technicalText"]),d(" /")]),s("div",null,[t(R,{technicalText:e.TechnicalWeek},null,8,["technicalText"])])]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})])}}});export{Ce as default};