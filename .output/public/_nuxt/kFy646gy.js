import{_ as y,a as S}from"./DfpHx6WD.js";import{n as g,o as m,u as w,w as a,d,t as p,v as $,c as M,b as s,x,a as o,y as i,z as V,F,r as D,A as z}from"./Em_gQpbE.js";import{s as E}from"./keTGQZGh.js";import"./Cl1euuqa.js";const L=g({__name:"dice",props:{선택된주사위:{},주사위:{}},emits:["click"],setup(f,{emit:e}){const u=e;return(t,l)=>{const c=y;return m(),w(c,{class:$(["w-5 h-5 flex justify-center items-center border-0 bg-white cursor-pointer",{"bg-opacity-50":t.선택된주사위!=t.주사위}]),onClick:l[0]||(l[0]=n=>u("click",t.주사위))},{default:a(()=>[d(p(t.주사위),1)]),_:1},8,["class"])}}}),H={class:"flex gap-1"},P=g({__name:"diceTr",props:{선택된주사위:{}},emits:["click"],setup(f,{emit:e}){const u=e;return(t,l)=>{const c=L;return m(),M("div",H,[s(c,{주사위:1,선택된주사위:t.선택된주사위,onClick:l[0]||(l[0]=n=>u("click",n))},null,8,["선택된주사위"]),s(c,{주사위:2,선택된주사위:t.선택된주사위,onClick:l[1]||(l[1]=n=>u("click",n))},null,8,["선택된주사위"]),s(c,{주사위:3,선택된주사위:t.선택된주사위,onClick:l[2]||(l[2]=n=>u("click",n))},null,8,["선택된주사위"]),s(c,{주사위:4,선택된주사위:t.선택된주사위,onClick:l[3]||(l[3]=n=>u("click",n))},null,8,["선택된주사위"]),s(c,{주사위:5,선택된주사위:t.선택된주사위,onClick:l[4]||(l[4]=n=>u("click",n))},null,8,["선택된주사위"]),s(c,{주사위:6,선택된주사위:t.선택된주사위,onClick:l[5]||(l[5]=n=>u("click",n))},null,8,["선택된주사위"])])}}}),R=g({__name:"diceTable",props:{선택된주사위들:{}},emits:["firstClick","secondClick","thirdClick"],setup(f,{emit:e}){const u=e;return(t,l)=>{const c=P,n=y;return m(),w(n,{class:"w-fit h-fit flex flex-col gap-1 px-2 py-1 bg-black bg-opacity-10 border-0 text-xs"},{default:a(()=>[s(c,{선택된주사위:t.선택된주사위들[0],onClick:l[0]||(l[0]=C=>u("firstClick",C))},null,8,["선택된주사위"]),s(c,{선택된주사위:t.선택된주사위들[1],onClick:l[1]||(l[1]=C=>u("secondClick",C))},null,8,["선택된주사위"]),s(c,{선택된주사위:t.선택된주사위들[2],onClick:l[2]||(l[2]=C=>u("thirdClick",C))},null,8,["선택된주사위"])]),_:1})}}}),Y=g({__name:"tripleDice",props:{주사위:{},count:{},감도:{}},setup(f){const e=f,u=x(()=>{switch(Math.floor(e.count/75)-e.감도){case 1:return"bg-red-500";case 2:return"bg-orange-500";case 3:return"bg-amber-500";case 4:return"bg-yellow-500";case 5:return"bg-lime-500";case 6:return"bg-green-500";case 7:return"bg-emerald-500";case 8:return"bg-teal-500";case 9:return"bg-cyan-500";case 10:return"bg-sky-500";case 11:return"bg-blue-500";case 12:return"bg-indigo-500";case 13:return"bg-violet-500";case 14:return"bg-purple-500";case 15:return"bg-fuchsia-500";case 16:return"bg-pink-500";case 17:return"bg-pink-500";case 18:return"bg-rose-500";default:return"bg-emerald-700"}}),t=x(()=>Math.max(0,Math.floor(e.count/75)-e.감도));return(l,c)=>{const n=y;return m(),w(n,{class:$(["w-fit px-3 py-1 flex gap-3 border-0",[i(u)]])},{default:a(()=>[o("div",null,p(i(t)),1),s(n,{class:"w-8 h-8 flex items-center justify-center border-0 bg-emerald-100"},{default:a(()=>[d(p(l.주사위),1)]),_:1}),s(n,{class:"w-8 h-8 flex items-center justify-center border-0 bg-emerald-100"},{default:a(()=>[d(p(l.주사위),1)]),_:1}),s(n,{class:"w-8 h-8 flex items-center justify-center border-0 bg-emerald-100"},{default:a(()=>[d(p(l.주사위),1)]),_:1})]),_:1},8,["class"])}}}),q=o("div",{class:"flex justify-center text-white"},"1:150",-1),G={class:"flex flex-col gap-1"},J=g({__name:"tripleDiceWarp",props:{주사위들:{},triples:{},감도:{}},setup(f){return(e,u)=>{const t=Y,l=y;return m(),w(l,{class:"w-fit px-2 py-1 flex flex-col bg-emerald-500 border-0"},{default:a(()=>[q,o("div",G,[s(t,{주사위:e.주사위들[0],count:e.triples[0],감도:e.감도},null,8,["주사위","count","감도"]),s(t,{주사위:e.주사위들[1],count:e.triples[1],감도:e.감도},null,8,["주사위","count","감도"]),s(t,{주사위:e.주사위들[2],count:e.triples[2],감도:e.감도},null,8,["주사위","count","감도"])])]),_:1})}}}),K={class:"flex justify-center text-white"},Q=o("div",{class:"flex justify-center text-sm text-yellow-200"},"ANY TRIPLE",-1),U={class:"flex flex-col gap-1"},Z={class:"flex flex-col gap-2"},ee={class:"flex items-center gap-1"},te=o("p",{class:"text-white"},"X3",-1),se={class:"flex items-center gap-1"},re=o("p",{class:"text-white"},"X3",-1),le={class:"flex items-center gap-1"},ne=o("p",{class:"text-white"},"X3",-1),ue={class:"flex flex-col gap-2"},oe={class:"flex items-center gap-1"},ae=o("p",{class:"text-white"},"X3",-1),ce={class:"flex items-center gap-1"},ie=o("p",{class:"text-white"},"X3",-1),de={class:"flex items-center gap-1"},pe=o("p",{class:"text-white"},"X3",-1),fe=g({__name:"anyTriple",props:{count:{},감도:{}},setup(f){const e=f,u=x(()=>{switch(Math.floor(e.count/15)-e.감도){case 1:return"bg-red-500";case 2:return"bg-orange-500";case 3:return"bg-amber-500";case 4:return"bg-yellow-500";case 5:return"bg-lime-500";case 6:return"bg-green-500";case 7:return"bg-emerald-500";case 8:return"bg-teal-500";case 9:return"bg-cyan-500";case 10:return"bg-sky-500";case 11:return"bg-blue-500";case 12:return"bg-indigo-500";case 13:return"bg-violet-500";case 14:return"bg-purple-500";case 15:return"bg-fuchsia-500";case 16:return"bg-pink-500";case 17:return"bg-pink-500";case 18:return"bg-rose-500";default:return"bg-emerald-700"}}),t=x(()=>Math.max(0,Math.floor(e.count/15)-e.감도));return(l,c)=>{const n=y;return m(),w(n,{class:"w-fit px-2 py-1 flex flex-col bg-emerald-500 border-0"},{default:a(()=>[o("div",K,"1:30 ("+p(i(t))+")",1),Q,o("div",U,[s(n,{class:$(["w-fit px-1 py-1 flex gap-3 border-0",[i(u)]])},{default:a(()=>[o("div",Z,[o("div",ee,[s(n,{class:"w-7 h-7 flex items-center justify-center border-0 bg-emerald-100"},{default:a(()=>[d("1")]),_:1}),te]),o("div",se,[s(n,{class:"w-7 h-7 flex items-center justify-center border-0 bg-emerald-100"},{default:a(()=>[d("3")]),_:1}),re]),o("div",le,[s(n,{class:"w-7 h-7 flex items-center justify-center border-0 bg-emerald-100"},{default:a(()=>[d("5")]),_:1}),ne])]),o("div",ue,[o("div",oe,[s(n,{class:"w-7 h-7 flex items-center justify-center border-0 bg-emerald-100"},{default:a(()=>[d("2")]),_:1}),ae]),o("div",ce,[s(n,{class:"w-7 h-7 flex items-center justify-center border-0 bg-emerald-100"},{default:a(()=>[d("4")]),_:1}),ie]),o("div",de,[s(n,{class:"w-7 h-7 flex items-center justify-center border-0 bg-emerald-100"},{default:a(()=>[d("5")]),_:1}),pe])])]),_:1},8,["class"])])]),_:1})}}}),me={class:"text-emerald-100 text-3xl font-bold"},be={class:"text-xs text-white"},ge={class:"text-emerald-100 text-sm text-nowrap"},ve=g({__name:"sumDice",props:{sum:{},description:{},count:{},감도:{}},setup(f){const e=f,u=x(()=>{switch(Math.floor(e.count/(e.description/2))-e.감도){case 1:return"bg-red-500";case 2:return"bg-orange-500";case 3:return"bg-amber-500";case 4:return"bg-yellow-500";case 5:return"bg-lime-500";case 6:return"bg-green-500";case 7:return"bg-emerald-500";case 8:return"bg-teal-500";case 9:return"bg-cyan-500";case 10:return"bg-sky-500";case 11:return"bg-blue-500";case 12:return"bg-indigo-500";case 13:return"bg-violet-500";case 14:return"bg-purple-500";case 15:return"bg-fuchsia-500";case 16:return"bg-pink-500";case 17:return"bg-pink-500";case 18:return"bg-rose-500";default:return"bg-emerald-500"}}),t=x(()=>Math.max(0,Math.floor(e.count/(e.description/2))-e.감도));return(l,c)=>{const n=y;return m(),w(n,{class:$(["w-14 px-3 py-2 flex flex-col border-0 justify-between items-center",[i(u)]])},{default:a(()=>[o("div",me,p(l.sum),1),o("div",be,p(i(t)),1),o("div",ge," 1 : "+p(l.description),1)]),_:1},8,["class"])}}}),_e={class:"flex gap-1"},he=g({__name:"sumDiceWrap",props:{sumOfThreeDice:{},감도:{}},setup(f){return(e,u)=>{const t=ve;return m(),M("div",_e,[s(t,{sum:4,description:60,count:e.sumOfThreeDice[0].value,감도:e.감도},null,8,["count","감도"]),s(t,{sum:5,description:20,count:e.sumOfThreeDice[1].value,감도:e.감도},null,8,["count","감도"]),s(t,{sum:6,description:18,count:e.sumOfThreeDice[2].value,감도:e.감도},null,8,["count","감도"]),s(t,{sum:7,description:12,count:e.sumOfThreeDice[3].value,감도:e.감도},null,8,["count","감도"]),s(t,{sum:8,description:8,count:e.sumOfThreeDice[4].value,감도:e.감도},null,8,["count","감도"]),s(t,{sum:9,description:6,count:e.sumOfThreeDice[5].value,감도:e.감도},null,8,["count","감도"]),s(t,{sum:10,description:6,count:e.sumOfThreeDice[6].value,감도:e.감도},null,8,["count","감도"]),s(t,{sum:11,description:6,count:e.sumOfThreeDice[7].value,감도:e.감도},null,8,["count","감도"]),s(t,{sum:12,description:6,count:e.sumOfThreeDice[8].value,감도:e.감도},null,8,["count","감도"]),s(t,{sum:13,description:8,count:e.sumOfThreeDice[9].value,감도:e.감도},null,8,["count","감도"]),s(t,{sum:14,description:12,count:e.sumOfThreeDice[10].value,감도:e.감도},null,8,["count","감도"]),s(t,{sum:15,description:18,count:e.sumOfThreeDice[11].value,감도:e.감도},null,8,["count","감도"]),s(t,{sum:16,description:20,count:e.sumOfThreeDice[12].value,감도:e.감도},null,8,["count","감도"]),s(t,{sum:17,description:60,count:e.sumOfThreeDice[13].value,감도:e.감도},null,8,["count","감도"])])}}}),ye={class:"flex flex-col items-center justify-center text-xs w-4"},we=g({__name:"diceHistory",props:{기록들:{}},setup(f){const e=u=>u[0]+u[1]+u[2];return(u,t)=>{const l=y;return m(),w(l,{class:"w-fit flex gap-1 px-2 py-1 bg-black bg-opacity-50 text-white border-0"},{default:a(()=>[(m(!0),M(F,null,V(u.기록들.slice(-25).reverse(),c=>(m(),M("div",ye,[o("div",{class:$(["text-base",e(c)<11?"text-blue-300":"text-red-300"])},p(e(c)),3),o("div",null,p(c[0]),1),o("div",null,p(c[1]),1),o("div",null,p(c[2]),1)]))),256))]),_:1})}}}),xe=g({__name:"doubleDice",props:{주사위:{},count:{},감도:{}},setup(f){const e=f,u=x(()=>{switch(Math.floor(e.count/4)-e.감도){case 1:return"bg-red-500";case 2:return"bg-orange-500";case 3:return"bg-amber-500";case 4:return"bg-yellow-500";case 5:return"bg-lime-500";case 6:return"bg-green-500";case 7:return"bg-emerald-500";case 8:return"bg-teal-500";case 9:return"bg-cyan-500";case 10:return"bg-sky-500";case 11:return"bg-blue-500";case 12:return"bg-indigo-500";case 13:return"bg-violet-500";case 14:return"bg-purple-500";case 15:return"bg-fuchsia-500";case 16:return"bg-pink-500";case 17:return"bg-pink-500";case 18:return"bg-rose-500";default:return"bg-emerald-700"}}),t=x(()=>Math.max(0,Math.floor(e.count/4)-e.감도));return(l,c)=>{const n=y;return m(),w(n,{class:$(["w-fit px-1 py-1 flex flex-col border-0 h-32 justify-between items-center text-white text-xs",[u.value]])},{default:a(()=>[s(n,{class:"w-10 h-10 flex items-center justify-center border-0 bg-emerald-100"},{default:a(()=>[d(p(l.주사위),1)]),_:1}),o("div",null,p(t.value),1),s(n,{class:"w-10 h-10 flex items-center justify-center border-0 bg-emerald-100"},{default:a(()=>[d(p(l.주사위),1)]),_:1})]),_:1},8,["class"])}}}),ke=o("div",{class:"flex justify-center text-white"},"1:8",-1),Ce={class:"flex gap-1"},X=g({__name:"doubleDiceWarp",props:{주사위들:{},doubles:{},감도:{}},setup(f){return(e,u)=>{const t=xe,l=y;return m(),w(l,{class:"w-fit px-2 py-1 flex flex-col bg-emerald-500 border-0"},{default:a(()=>[ke,o("div",Ce,[s(t,{주사위:e.주사위들[0],count:e.doubles[0],감도:e.감도},null,8,["주사위","count","감도"]),s(t,{주사위:e.주사위들[1],count:e.doubles[1],감도:e.감도},null,8,["주사위","count","감도"]),s(t,{주사위:e.주사위들[2],count:e.doubles[2],감도:e.감도},null,8,["주사위","count","감도"])])]),_:1})}}}),De={class:"p-4 bg-emerald-700 flex flex-col gap-1 items-center"},$e={class:"flex gap-1 items-end"},Te={class:"flex items-center gap-1 text-white"},je={class:"flex gap-1"},Be=g({__name:"daisai",setup(f){const e=D(5),u=D([]),t=D([0,0,0]),l=()=>{u.value.push(t.value),T.value++;for(let r=0;r<6;r++)v[r].value++,t.value.filter(b=>b===r+1).length===3&&(v[r].value=0,T.value=0);for(let r=0;r<6;r++)_[r].value++,t.value.filter(b=>b===r+1).length===2&&(_[r].value=0);for(let r=0;r<14;r++)j[r].value++;const k=t.value.reduce((r,b)=>r+b,0);3<k&&k<18&&(j[k-4].value=0),t.value=[0,0,0]},c=()=>{t.value=Array(3).fill(0).map(()=>Math.floor(Math.random()*6)+1),u.value.push(t.value),T.value++;for(let r=0;r<6;r++)v[r].value++,t.value.filter(b=>b===r+1).length===3&&(v[r].value=0,T.value=0);for(let r=0;r<6;r++)_[r].value++,t.value.filter(b=>b===r+1).length===2&&(_[r].value=0);for(let r=0;r<14;r++)j[r].value++;const k=t.value.reduce((r,b)=>r+b,0);3<k&&k<18&&(j[k-4].value=0),t.value=[0,0,0]};let n=null;const C=()=>{n?(clearInterval(n),n=null):n=E(()=>{c()},100)},T=D(0),v=Array(6).fill(0).map(()=>D(0)),_=Array(6).fill(0).map(()=>D(0)),j=Array(14).fill(0).map(()=>D(0)),B=x(()=>t.value.includes(0));return(k,r)=>{const b=R,O=S,N=y,A=J,W=fe,I=he;return m(),M("div",De,[o("div",$e,[s(b,{선택된주사위들:t.value,onFirstClick:r[0]||(r[0]=h=>t.value[0]=h),onSecondClick:r[1]||(r[1]=h=>t.value[1]=h),onThirdClick:r[2]||(r[2]=h=>t.value[2]=h)},null,8,["선택된주사위들"]),s(O,{variant:"outline",disabled:B.value,onClick:r[3]||(r[3]=h=>l())},{default:a(()=>[d("선택완료")]),_:1},8,["disabled"]),s(O,{onClick:r[4]||(r[4]=h=>c())},{default:a(()=>[d("랜덤입력")]),_:1}),s(O,{onClick:r[5]||(r[5]=h=>C())},{default:a(()=>[d("자동입력")]),_:1}),o("div",Te,[s(O,{onClick:r[6]||(r[6]=h=>e.value++)},{default:a(()=>[d("+")]),_:1}),o("div",null,p(e.value),1),s(O,{onClick:r[7]||(r[7]=h=>e.value--)},{default:a(()=>[d("-")]),_:1})]),s(N,{class:"w-fit h-fit flex px-2 py-1 bg-red-500 bg-opacity-50 text-yellow-500 border-0"},{default:a(()=>[d(p(u.value.length),1)]),_:1}),u.value.length?(m(),w(we,{key:0,기록들:u.value},null,8,["기록들"])):z("",!0)]),o("div",je,[s(X,{주사위들:[1,2,3],doubles:[i(_)[0].value,i(_)[1].value,i(_)[2].value],감도:e.value},null,8,["doubles","감도"]),s(A,{주사위들:[1,2,3],triples:[i(v)[0].value,i(v)[1].value,i(v)[2].value],감도:e.value},null,8,["triples","감도"]),s(W,{count:T.value,감도:e.value},null,8,["count","감도"]),s(A,{주사위들:[4,5,6],triples:[i(v)[3].value,i(v)[4].value,i(v)[5].value],감도:e.value},null,8,["triples","감도"]),s(X,{주사위들:[4,5,6],doubles:[i(_)[3].value,i(_)[4].value,i(_)[5].value],감도:e.value},null,8,["doubles","감도"])]),s(I,{sumOfThreeDice:i(j),감도:e.value},null,8,["sumOfThreeDice","감도"])])}}});export{Be as default};
