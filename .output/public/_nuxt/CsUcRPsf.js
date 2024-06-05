import{c as x}from"./C-5SdYIA.js";import{n as h,o as m,c as p,a as P,B as T,s as i,v as d,t as u,u as S,r as R,b as t,w as a,d as o,F as B,x as V,q as H}from"./3izVZgAE.js";import{u as L}from"./BKY7lfgB.js";const M={class:"relative w-full overflow-auto"},A=h({__name:"Table",props:{class:{}},setup(c){const l=c;return(r,s)=>(m(),p("div",M,[P("table",{class:i(d(x)("w-full caption-bottom text-sm",l.class))},[T(r.$slots,"default")],2)]))}}),D=h({__name:"TableBody",props:{class:{}},setup(c){const l=c;return(r,s)=>(m(),p("tbody",{class:i(d(x)("[&_tr:last-child]:border-0",l.class))},[T(r.$slots,"default")],2))}}),F=h({__name:"TableCell",props:{class:{}},setup(c){const l=c;return(r,s)=>(m(),p("td",{class:i(d(x)("p-4 align-middle [&:has([role=checkbox])]:pr-0",l.class))},[T(r.$slots,"default")],2))}}),W=h({__name:"TableHead",props:{class:{}},setup(c){const l=c;return(r,s)=>(m(),p("th",{class:i(d(x)("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",l.class))},[T(r.$slots,"default")],2))}}),q=h({__name:"TableHeader",props:{class:{}},setup(c){const l=c;return(r,s)=>(m(),p("thead",{class:i(d(x)("[&_tr]:border-b",l.class))},[T(r.$slots,"default")],2))}}),z=h({__name:"TableRow",props:{class:{}},setup(c){const l=c;return(r,s)=>(m(),p("tr",{class:i(d(x)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",l.class))},[T(r.$slots,"default")],2))}}),E=h({__name:"TableCaption",props:{class:{}},setup(c){const l=c;return(r,s)=>(m(),p("caption",{class:i(d(x)("mt-4 text-sm text-muted-foreground",l.class))},[T(r.$slots,"default")],2))}}),Y=h({__name:"technicalTextColor",props:{technicalText:{}},setup(c){return(l,r)=>(m(),p("span",{class:i({"text-red-500":l.technicalText==="strong_buy","text-yellow-500":l.technicalText==="buy","text-gray-500":l.technicalText==="neutral","text-blue-500":l.technicalText==="sell","text-green-500":l.technicalText==="strong_sell"})},u(l.technicalText),3))}}),j={class:"flex flex-col divide-y"},K=h({__name:"detail",setup(c){const l=L("stockList"),r=S(()=>l.value.map(_=>({..._,volumeRate:Math.round(_.Volume/_.AvgVolume*100*10)/10})).sort((_,n)=>s.value==="Name"?_.Name.localeCompare(n.Name):s.value==="volumeRate"?n.volumeRate-_.volumeRate:s.value==="Chg"?n.Chg-_.Chg:s.value==="ChgPct"?n.ChgPct-_.ChgPct:0)),s=R("Name");function $(_){const n=Math.floor((new Date().getTime()-_*1e3)/1e3),C=Math.floor(n/3600),f=Math.floor(n%3600/60),g=n%60;return`${C.toString().padStart(2,"0")}:${f.toString().padStart(2,"0")}:${g.toString().padStart(2,"0")} 전`}return(_,n)=>{const C=E,f=W,g=z,y=q,b=F,v=Y,N=D,w=A;return m(),p("div",j,[t(w,null,{default:a(()=>[t(C,null,{default:a(()=>[o("A list of your recent invoices.")]),_:1}),t(y,null,{default:a(()=>[t(g,null,{default:a(()=>[t(f,{onClick:n[0]||(n[0]=e=>s.value="Name"),class:i(["text-blue-500 cursor-pointer font-bold",{"text-red-500":d(s)=="Name"}])},{default:a(()=>[o(" 이름 ")]),_:1},8,["class"]),t(f,{onClick:n[1]||(n[1]=e=>s.value="volumeRate"),class:i(["text-blue-500 cursor-pointer font-bold",{"text-red-500":d(s)=="volumeRate"}])},{default:a(()=>[o("거래량 / 평균 거래량 (거래량률)")]),_:1},8,["class"]),t(f,{onClick:n[2]||(n[2]=e=>s.value="Chg"),class:i(["text-blue-500 cursor-pointer font-bold",{"text-red-500":d(s)=="Chg"}])},{default:a(()=>[o("변동치")]),_:1},8,["class"]),t(f,{onClick:n[3]||(n[3]=e=>s.value="ChgPct"),class:i(["text-blue-500 cursor-pointer font-bold",{"text-red-500":d(s)=="ChgPct"}])},{default:a(()=>[o(" 변동률 (%) ")]),_:1},8,["class"]),t(f,{class:"font-bold"},{default:a(()=>[o(" 최저가 ~ 마지막가격 ~ 최고가 ")]),_:1}),t(f,{class:"font-bold"},{default:a(()=>[o(" 일일성과 주간성과 월간성과 연간성과 ")]),_:1}),t(f,{class:"font-bold"},{default:a(()=>[o(" 시간당분석 일일분석 주간분석 월간분석 ")]),_:1})]),_:1})]),_:1}),t(N,null,{default:a(()=>[(m(!0),p(B,null,V(d(r),e=>(m(),H(g,{key:e.Name},{default:a(()=>[t(b,{class:"font-bold"},{default:a(()=>[o(u(e.Name)+" ("+u($(Number(e.Time)))+") ",1)]),_:2},1024),t(b,null,{default:a(()=>[o(u(e.Volume)+" / "+u(e.AvgVolume)+" ("+u(e.volumeRate)+")",1)]),_:2},1024),t(b,null,{default:a(()=>[o(u(e.Chg),1)]),_:2},1024),t(b,null,{default:a(()=>[o(u(e.ChgPct),1)]),_:2},1024),t(b,null,{default:a(()=>[o(u(e.Low)+" ~ "+u(e.Last)+" ~ "+u(e.High),1)]),_:2},1024),t(b,null,{default:a(()=>[o(u(e.PerformanceDay)+" / "+u(e.PerformanceWeek)+" / "+u(e.PerformanceMonth)+" / "+u(e.PerformanceYear),1)]),_:2},1024),t(b,null,{default:a(()=>[t(v,{technicalText:e.TechnicalHour},null,8,["technicalText"]),o(" / "),t(v,{technicalText:e.TechnicalDay},null,8,["technicalText"]),o(" / "),t(v,{technicalText:e.TechnicalMonth},null,8,["technicalText"]),o(" / "),t(v,{technicalText:e.TechnicalWeek},null,8,["technicalText"])]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})])}}});export{K as default};