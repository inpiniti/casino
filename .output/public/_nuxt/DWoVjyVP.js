import{s as A,a as L,_ as V}from"./DD25PHWA.js";import{n as x,u as y,o as k,c as m,a as o,t as r,v as h,d as a,s as $,_ as B,B as M,b as l,w as u,r as C,F as z,x as D}from"./BFbZMaZS.js";import"./C-5SdYIA.js";import"./gkycMcKd.js";function R(d){const s=["red","orange","amber","yellow","lime","green","emerald","teal","cyan","sky","blue","indigo","violet","purple","fuchsia","pink","rose"],c=(d-1)%s.length,t=Math.floor((d-1)/s.length)*100+300,e=t+50;return t>900?`bg-${s[c]}-900 hover:bg-${s[c]}-950`:`bg-${s[c]}-${t} hover:bg-${s[c]}-${e}`}const F={class:"absolute text-xs text-white top-0 left-1"},G=x({__name:"greenBall",props:{number:{},count:{},감도:{}},setup(d){const s=d,c=y(()=>{const e=Math.floor(s.count/18)-s.감도;return e<=0?"bg-green-700 hover:bg-green-800 opacity-50":R(e)}),t=y(()=>Math.floor(s.count/18)-s.감도);return(e,v)=>(k(),m("div",{class:$(["relative flex-1 h-full p-1 text-white flex items-center justify-center cursor-pointer",h(c)])},[o("div",F,r(h(t)),1),a(" "+r(s.number),1)],2))}}),H={},N={class:"flex flex-col h-auto divide-y divide-white divide-opacity-50 w-7"};function O(d,s){return k(),m("div",N,[M(d.$slots,"default")])}const S=B(H,[["render",O]]),E={class:"absolute text-xs text-white top-0 left-1"},K=x({__name:"ball",props:{number:{},color:{},count:{},감도:{}},emits:["click"],setup(d,{emit:s}){const c=d,t=s,e=()=>{t("click",c.number)},v=y(()=>{const p=Math.floor(c.count/18)-c.감도;return p<=0?"bg-red-700 hover:bg-red-800 opacity-50":R(p)}),b=y(()=>Math.floor(c.count/18)-c.감도);return(p,n)=>(k(),m("div",{class:$(["relative p-2 cursor-pointer",h(v)]),onClick:e},[o("div",E,r(h(b)),1),o("div",{class:$(["w-10 h-10 bg-black text-white rounded-full flex items-center justify-center",p.color=="red"?"bg-red-600":"bg-black"])},r(p.number),3)],2))}}),q={},J={class:"divide-y divide-white divide-opacity-50"};function P(d,s){return k(),m("div",J,[M(d.$slots,"default")])}const Q=B(q,[["render",P]]),U={},W={class:"flex divide-x divide-white divide-opacity-50"};function X(d,s){return k(),m("div",W,[M(d.$slots,"default")])}const Y=B(U,[["render",X]]),Z={class:"divide-solid divide-red-100 divide-y divide-opacity-50"},ee={class:"flex w-fit divide-solid divide-x divide-white divide-opacity-50"},le={class:"shrink-0 w-8 divide-y divide-red-100 divide-opacity-50 flex flex-col"},te={class:"grow-[0] h-full relative"},oe={class:"absolute text-xs text-white top-0 left-1"},ne={class:"grow-[0] h-full relative"},se={class:"absolute text-xs text-white top-0 left-1"},ie={class:"grow-[0] h-full relative"},ue={class:"absolute text-xs text-white top-0 left-1"},ce={class:"flex divide-x divide-opacity-50 divide-red-50"},re=o("div",{class:"shrink-0 w-7 p-2"},null,-1),ae={class:"grow-[0] w-full p-2 flex justify-center text-white relative"},de={class:"absolute text-xs text-white top-0 left-1"},fe={class:"grow-[0] w-full p-2 flex justify-center text-white relative"},ve={class:"absolute text-xs text-white top-0 left-1"},he={class:"grow-[0] w-full p-2 flex justify-center text-white relative"},be={class:"absolute text-xs text-white top-0 left-1"},pe=o("div",{class:"shrink-0 w-8 bg-green-700 text-white flex justify-center items-end"}," 00 ",-1),_e={class:"flex divide-x divide-opacity-50 divide-red-50"},ke=o("div",{class:"shrink-0 w-7"},null,-1),me={class:"grow-[0] w-full p-2 flex justify-center text-white relative"},we={class:"absolute text-xs text-white top-0 left-1"},ge={class:"grow-[0] w-full p-2 flex justify-center text-white relative"},Ce={class:"absolute text-xs text-white top-0 left-1"},ye={class:"grow-[0] w-full p-2 flex justify-center text-white bg-red-500 relative"},$e={class:"absolute text-xs text-white top-0 left-1"},xe={class:"grow-[0] w-full p-2 flex justify-center text-white bg-black relative"},je={class:"absolute text-xs text-white top-0 left-1"},Be={class:"grow-[0] w-full p-2 flex justify-center text-white relative"},Me={class:"absolute text-xs text-white top-0 left-1"},Re={class:"grow-[0] w-full p-2 flex justify-center text-white relative"},Ie={class:"absolute text-xs text-white top-0 left-1"},Te=o("div",{class:"shrink-0 w-8 bg-green-700 text-white flex justify-center items-start"}," 0 ",-1),Ae=x({__name:"ballTable",props:{카운트배열:{},카운트배열2:{},감도:{}},emits:["click"],setup(d,{emit:s}){const c=s,t=e=>{c("click",e)};return(e,v)=>{const b=G,p=S,n=K,f=Q,g=Y;return k(),m("div",Z,[o("div",ee,[l(p,null,{default:u(()=>[l(b,{number:"00",count:e.카운트배열[36],감도:e.감도,onClick:v[0]||(v[0]=i=>t(37))},null,8,["count","감도"]),l(b,{number:"0",count:e.카운트배열[37],감도:e.감도,onClick:v[1]||(v[1]=i=>t(38))},null,8,["count","감도"])]),_:1}),l(g,null,{default:u(()=>[l(f,null,{default:u(()=>[l(n,{number:3,count:e.카운트배열[2],감도:e.감도,color:"red",onClick:t},null,8,["count","감도"]),l(n,{number:2,count:e.카운트배열[1],감도:e.감도,color:"black",onClick:t},null,8,["count","감도"]),l(n,{number:1,count:e.카운트배열[0],감도:e.감도,color:"red",onClick:t},null,8,["count","감도"])]),_:1}),l(f,null,{default:u(()=>[l(n,{number:6,count:e.카운트배열[5],감도:e.감도,color:"black",onClick:t},null,8,["count","감도"]),l(n,{number:5,count:e.카운트배열[4],감도:e.감도,color:"red",onClick:t},null,8,["count","감도"]),l(n,{number:4,count:e.카운트배열[3],감도:e.감도,color:"black",onClick:t},null,8,["count","감도"])]),_:1}),l(f,null,{default:u(()=>[l(n,{number:9,count:e.카운트배열[8],감도:e.감도,color:"red",onClick:t},null,8,["count","감도"]),l(n,{number:8,count:e.카운트배열[7],감도:e.감도,color:"black",onClick:t},null,8,["count","감도"]),l(n,{number:7,count:e.카운트배열[6],감도:e.감도,color:"red",onClick:t},null,8,["count","감도"])]),_:1}),l(f,null,{default:u(()=>[l(n,{number:12,count:e.카운트배열[11],감도:e.감도,color:"red",onClick:t},null,8,["count","감도"]),l(n,{number:11,count:e.카운트배열[10],감도:e.감도,color:"black",onClick:t},null,8,["count","감도"]),l(n,{number:10,count:e.카운트배열[9],감도:e.감도,color:"black",onClick:t},null,8,["count","감도"])]),_:1})]),_:1}),l(g,null,{default:u(()=>[l(f,null,{default:u(()=>[l(n,{number:15,count:e.카운트배열[14],감도:e.감도,color:"black",onClick:t},null,8,["count","감도"]),l(n,{number:14,count:e.카운트배열[13],감도:e.감도,color:"red",onClick:t},null,8,["count","감도"]),l(n,{number:13,count:e.카운트배열[12],감도:e.감도,color:"black",onClick:t},null,8,["count","감도"])]),_:1}),l(f,null,{default:u(()=>[l(n,{number:18,count:e.카운트배열[17],감도:e.감도,color:"red",onClick:t},null,8,["count","감도"]),l(n,{number:17,count:e.카운트배열[16],감도:e.감도,color:"black",onClick:t},null,8,["count","감도"]),l(n,{number:16,count:e.카운트배열[15],감도:e.감도,color:"red",onClick:t},null,8,["count","감도"])]),_:1}),l(f,null,{default:u(()=>[l(n,{number:21,count:e.카운트배열[20],감도:e.감도,color:"red",onClick:t},null,8,["count","감도"]),l(n,{number:20,count:e.카운트배열[19],감도:e.감도,color:"black",onClick:t},null,8,["count","감도"]),l(n,{number:19,count:e.카운트배열[18],감도:e.감도,color:"red",onClick:t},null,8,["count","감도"])]),_:1}),l(f,null,{default:u(()=>[l(n,{number:24,count:e.카운트배열[23],감도:e.감도,color:"black",onClick:t},null,8,["count","감도"]),l(n,{number:23,count:e.카운트배열[22],감도:e.감도,color:"red",onClick:t},null,8,["count","감도"]),l(n,{number:22,count:e.카운트배열[21],감도:e.감도,color:"black",onClick:t},null,8,["count","감도"])]),_:1})]),_:1}),l(g,null,{default:u(()=>[l(f,null,{default:u(()=>[l(n,{number:27,count:e.카운트배열[26],감도:e.감도,color:"red",onClick:t},null,8,["count","감도"]),l(n,{number:26,count:e.카운트배열[25],감도:e.감도,color:"black",onClick:t},null,8,["count","감도"]),l(n,{number:25,count:e.카운트배열[24],감도:e.감도,color:"red",onClick:t},null,8,["count","감도"])]),_:1}),l(f,null,{default:u(()=>[l(n,{number:30,count:e.카운트배열[29],감도:e.감도,color:"red",onClick:t},null,8,["count","감도"]),l(n,{number:29,count:e.카운트배열[28],감도:e.감도,color:"black",onClick:t},null,8,["count","감도"]),l(n,{number:28,count:e.카운트배열[27],감도:e.감도,color:"black",onClick:t},null,8,["count","감도"])]),_:1}),l(f,null,{default:u(()=>[l(n,{number:33,count:e.카운트배열[32],감도:e.감도,color:"black",onClick:t},null,8,["count","감도"]),l(n,{number:32,count:e.카운트배열[31],감도:e.감도,color:"red",onClick:t},null,8,["count","감도"]),l(n,{number:31,count:e.카운트배열[30],감도:e.감도,color:"black",onClick:t},null,8,["count","감도"])]),_:1}),l(f,null,{default:u(()=>[l(n,{number:36,count:e.카운트배열[35],감도:e.감도,color:"red",onClick:t},null,8,["count","감도"]),l(n,{number:35,count:e.카운트배열[34],감도:e.감도,color:"black",onClick:t},null,8,["count","감도"]),l(n,{number:34,count:e.카운트배열[33],감도:e.감도,color:"red",onClick:t},null,8,["count","감도"])]),_:1}),o("div",le,[o("div",te,[o("div",oe,r(e.카운트배열2[0]),1)]),o("div",ne,[o("div",se,r(e.카운트배열2[1]),1)]),o("div",ie,[o("div",ue,r(e.카운트배열2[2]),1)])])]),_:1})]),o("div",ce,[re,o("div",ae,[o("div",de,r(e.카운트배열2[3]),1),a(" 1~12 ")]),o("div",fe,[o("div",ve,r(e.카운트배열2[4]),1),a(" 13~24 ")]),o("div",he,[o("div",be,r(e.카운트배열2[5]),1),a(" 24~36 ")]),pe]),o("div",_e,[ke,o("div",me,[o("div",we,r(e.카운트배열2[6]),1),a(" 1~18 ")]),o("div",ge,[o("div",Ce,r(e.카운트배열2[7]),1),a(" 짝수 ")]),o("div",ye,[o("div",$e,r(e.카운트배열2[8]),1),a(" 레드 ")]),o("div",xe,[o("div",je,r(e.카운트배열2[9]),1),a(" 블랙 ")]),o("div",Be,[o("div",Me,r(e.카운트배열2[10]),1),a(" 홀수 ")]),o("div",Re,[o("div",Ie,r(e.카운트배열2[11]),1),a(" 19~36 ")]),Te])])}}}),Le={class:"bg-red-700 flex flex-col items-center justify-center p-4 gap-2"},Ve={class:"flex gap-2 items-end"},ze={class:"text-xs flex flex-col bg-black bg-opacity-50 w-fit h-fit"},De=o("div",{class:"text-white p-1 flex justify-center"},"최근 당첨 번호",-1),Fe={class:"flex gap-1 p-1"},Se=x({__name:"roulette",setup(d){const s=C(0),c=C([]),t=C(Array(38).fill(0)),e=C(Array(12).fill(0)),v=C(2);let b=null,p=1;const n=i=>{s.value++,c.value.length>=25&&c.value.shift(),c.value.push(i),t.value=t.value.map(w=>w+1),t.value[i-1]-=38,[3,6,9,12,15,18,21,24,27,30,33,36].includes(i)?(e.value[0]-=2,e.value[1]++,e.value[2]++):[2,5,8,11,14,17,20,23,26,29,32,35].includes(i)?(e.value[0]++,e.value[1]-=2,e.value[2]++):[1,4,7,10,13,16,19,22,25,28,31,34].includes(i)&&(e.value[0]++,e.value[1]++,e.value[2]-=2),i>=1&&i<=12?(e.value[3]-=2,e.value[4]++,e.value[5]++):i>=13&&i<=24?(e.value[3]++,e.value[4]-=2,e.value[5]++):i>=25&&i<=36&&(e.value[3]++,e.value[4]++,e.value[5]-=2),i>=1&&i<=18?(e.value[6]--,e.value[11]++):i>=19&&i<=36&&(e.value[6]++,e.value[11]--),i%2===0?(e.value[7]--,e.value[10]++):(e.value[7]++,e.value[10]--),[1,3,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36].includes(i)?(e.value[8]--,e.value[9]++):(e.value[8]++,e.value[9]--)},f=[2,4,6,8,10,11,13,15,17,20,22,24,26,28,29,31,33,35],g=()=>{b?(clearInterval(b),b=null):b=A(()=>{n(Math.floor(Math.random()*38)+1)},p)};return(i,w)=>{const j=L,I=V,T=Ae;return k(),m("div",Le,[o("div",Ve,[l(j,{onClick:w[0]||(w[0]=_=>g())},{default:u(()=>[a("자동입력")]),_:1}),o("div",null,[l(j,{onClick:w[1]||(w[1]=_=>v.value++),size:"sm"},{default:u(()=>[a("+")]),_:1}),a(" "+r(h(v))+" ",1),l(j,{onClick:w[2]||(w[2]=_=>v.value--)},{default:u(()=>[a("-")]),_:1})]),l(I,{class:"w-fit h-fit flex px-2 py-1 bg-red-500 bg-opacity-50 text-yellow-500 border-0"},{default:u(()=>[a(r(h(s)),1)]),_:1}),o("div",ze,[De,o("div",Fe,[(k(!0),m(z,null,D(h(c).slice(-25).reverse(),_=>(k(),m("div",null,[o("div",{class:$(["bg-black rounded-full text-white w-5 h-5 flex items-center justify-center",f.includes(_)?"bg-black":_==37||_==38?"bg-green-700":"bg-red-600"])},r(_==37?"00":_==38?"0":_),3)]))),256))])])]),l(T,{onClick:n,카운트배열:h(t),카운트배열2:h(e),감도:h(v),class:"border border-white border-opacity-50"},null,8,["카운트배열","카운트배열2","감도"])])}}});export{Se as default};
