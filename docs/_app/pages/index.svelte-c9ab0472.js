import{S as xe,i as $e,s as et,k as h,e as o,t as _,M as tt,d as n,m as f,c as a,a as p,h as m,b as t,g as Xe,H as e,N as _e,O as j,j as te,L as Ye,P as rt,Q as st}from"../chunks/vendor-3036e1a8.js";class Ze{constructor(O,s){this.operand1=0,this.operand2=0,this.operator="+",this.correctAnswer=0,this.mode=["ADD"],this.numOfDigits=3,this.generateOperands=()=>{let u=10,c=0;this.operator=="*"&&this.numOfDigits!=1?u=13:this.numOfDigits==3?(u=1e3,c=100):this.numOfDigits==2&&(u=100,c=10);let D=Math.floor(Math.random()*(u-c)+c),I=Math.floor(Math.random()*(u-c)+c);return this.operator=="-"?[D,I].sort((b,A)=>A-b):[D,I]},this.generateOperator=()=>{let u=Math.floor(Math.random()*this.mode.length);const c=this.mode[u];return c==="ADD"?"+":c==="SUB"?"-":"*"},this.checkAnswer=u=>+u==this.correctAnswer,this.calculateAnswer=()=>{if(this.operator=="+")return this.operand1+this.operand2;if(this.operator=="-")return this.operand1-this.operand2;if(this.operator=="*")return this.operand1*this.operand2},O&&(this.numOfDigits=O),s&&(this.mode=s),this.operator=this.generateOperator();let l=this.generateOperands();this.operand1=l[0],this.operand2=l[1],this.correctAnswer=this.calculateAnswer()}}function lt(r){let O,s,l,u,c=r[8].operand1+"",D,I,b,A=(r[8].operator=="*"?"x":r[8].operator)+"",C,H,B=r[8].operand2+"",z,G,y,re,N,se,le,V,oe,d,w,J,T,me,ae,ge,R,ve,ne,be,g,W,we,Ee,q,ke,Ae,X,ie,De,E,ye,S,F,U,Te,Y,Ue,Me,K,M,Pe,Z,Le,Be,Q,P,Oe,x,Ie,Ne,$,Se,Ce,je;return{c(){O=h(),s=o("section"),l=o("div"),u=o("h1"),D=_(c),I=h(),b=o("h1"),C=_(A),H=h(),z=_(B),G=h(),y=o("input"),re=h(),N=o("button"),se=_("Check Answer"),le=h(),V=o("button"),oe=_("New Problem"),d=h(),w=o("p"),J=_("\xA0"),T=_(r[7]),me=_("\xA0"),ge=h(),R=o("p"),ve=_("Correct Answers: "),ne=_(r[6]),be=h(),g=o("div"),W=o("p"),we=_("Choose what to practice."),Ee=h(),q=o("label"),ke=_("Digits for Addition & Subtraction:"),Ae=h(),X=o("output"),ie=_(r[3]),De=h(),E=o("input"),ye=h(),S=o("fieldset"),F=o("div"),U=o("input"),Te=h(),Y=o("label"),Ue=_("Additon"),Me=h(),K=o("div"),M=o("input"),Pe=h(),Z=o("label"),Le=_("Subtraction"),Be=h(),Q=o("div"),P=o("input"),Oe=h(),x=o("label"),Ie=_("Multiplication"),Ne=h(),$=o("p"),Se=_("Multiplaction problems will only use numbers 0-12."),this.h()},l(i){tt('[data-svelte="svelte-v8iwkl"]',document.head).forEach(n),O=f(i),s=a(i,"SECTION",{class:!0});var ue=p(s);l=a(ue,"DIV",{class:!0});var k=p(l);u=a(k,"H1",{class:!0});var He=p(u);D=m(He,c),He.forEach(n),I=f(k),b=a(k,"H1",{class:!0});var ce=p(b);C=m(ce,A),H=f(ce),z=m(ce,B),ce.forEach(n),G=f(k),y=a(k,"INPUT",{class:!0,type:!0,pattern:!0}),re=f(k),N=a(k,"BUTTON",{class:!0,type:!0});var Re=p(N);se=m(Re,"Check Answer"),Re.forEach(n),le=f(k),V=a(k,"BUTTON",{class:!0});var qe=p(V);oe=m(qe,"New Problem"),qe.forEach(n),d=f(k),w=a(k,"P",{class:!0});var pe=p(w);J=m(pe,"\xA0"),T=m(pe,r[7]),me=m(pe,"\xA0"),pe.forEach(n),ge=f(k),R=a(k,"P",{class:!0});var Ve=p(R);ve=m(Ve,"Correct Answers: "),ne=m(Ve,r[6]),Ve.forEach(n),k.forEach(n),be=f(ue),g=a(ue,"DIV",{class:!0});var L=p(g);W=a(L,"P",{class:!0});var Fe=p(W);we=m(Fe,"Choose what to practice."),Fe.forEach(n),Ee=f(L),q=a(L,"LABEL",{class:!0,for:!0});var Ke=p(q);ke=m(Ke,"Digits for Addition & Subtraction:"),Ke.forEach(n),Ae=f(L),X=a(L,"OUTPUT",{class:!0});var Qe=p(X);ie=m(Qe,r[3]),Qe.forEach(n),De=f(L),E=a(L,"INPUT",{type:!0,id:!0,name:!0,min:!0,max:!0,step:!0,class:!0}),ye=f(L),S=a(L,"FIELDSET",{class:!0});var ee=p(S);F=a(ee,"DIV",{});var he=p(F);U=a(he,"INPUT",{type:!0,name:!0,class:!0}),Te=f(he),Y=a(he,"LABEL",{for:!0});var ze=p(Y);Ue=m(ze,"Additon"),ze.forEach(n),he.forEach(n),Me=f(ee),K=a(ee,"DIV",{});var fe=p(K);M=a(fe,"INPUT",{type:!0,name:!0,class:!0}),Pe=f(fe),Z=a(fe,"LABEL",{for:!0});var Ge=p(Z);Le=m(Ge,"Subtraction"),Ge.forEach(n),fe.forEach(n),Be=f(ee),Q=a(ee,"DIV",{});var de=p(Q);P=a(de,"INPUT",{type:!0,name:!0,class:!0}),Oe=f(de),x=a(de,"LABEL",{for:!0});var Je=p(x);Ie=m(Je,"Multiplication"),Je.forEach(n),de.forEach(n),ee.forEach(n),Ne=f(L),$=a(L,"P",{class:!0});var We=p($);Se=m(We,"Multiplaction problems will only use numbers 0-12."),We.forEach(n),L.forEach(n),ue.forEach(n),this.h()},h(){document.title="Math Practice",t(u,"class","svelte-pg04w3"),t(b,"class","operand-2 svelte-pg04w3"),t(y,"class","border rounded-md mt-1 svelte-pg04w3"),t(y,"type","tel"),t(y,"pattern","[0-9]+"),t(N,"class","mt-5 w-full bg-green-600 border border-transparent rounded-md py-3 flex items-center justify-center text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"),t(N,"type","submit"),t(V,"class","mt-5 w-full bg-indigo-600 border border-transparent rounded-md py-3 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"),t(w,"class",ae="result "+(r[5]?"correct":"incorrect")+" mt-5 svelte-pg04w3"),t(R,"class","result correct svelte-pg04w3"),t(l,"class","problem svelte-pg04w3"),t(W,"class","text-center"),t(q,"class","text-center"),t(q,"for","digits"),t(X,"class","text-center text-xl"),t(E,"type","range"),t(E,"id","digits"),t(E,"name","digits"),t(E,"min","1"),t(E,"max","3"),t(E,"step","1"),t(E,"class","svelte-pg04w3"),t(U,"type","checkbox"),t(U,"name","ADD"),U.__value="ADD",U.value=U.__value,t(U,"class","svelte-pg04w3"),t(Y,"for","ADD"),t(M,"type","checkbox"),t(M,"name","SUB"),M.__value="SUB",M.value=M.__value,t(M,"class","svelte-pg04w3"),t(Z,"for","SUB"),t(P,"type","checkbox"),t(P,"name","MULT"),P.__value="MULT",P.value=P.__value,t(P,"class","svelte-pg04w3"),t(x,"for","MULT"),t(S,"class","svelte-pg04w3"),t($,"class","text-xs text-center mt-4"),t(g,"class","settings svelte-pg04w3"),t(s,"class","svelte-pg04w3")},m(i,v){Xe(i,O,v),Xe(i,s,v),e(s,l),e(l,u),e(u,D),e(l,I),e(l,b),e(b,C),e(b,H),e(b,z),e(l,G),e(l,y),_e(y,r[4]),e(l,re),e(l,N),e(N,se),e(l,le),e(l,V),e(V,oe),e(l,d),e(l,w),e(w,J),e(w,T),e(w,me),e(l,ge),e(l,R),e(R,ve),e(R,ne),e(s,be),e(s,g),e(g,W),e(W,we),e(g,Ee),e(g,q),e(q,ke),e(g,Ae),e(g,X),e(X,ie),e(g,De),e(g,E),_e(E,r[3]),e(g,ye),e(g,S),e(S,F),e(F,U),U.checked=r[0],e(F,Te),e(F,Y),e(Y,Ue),e(S,Me),e(S,K),e(K,M),M.checked=r[1],e(K,Pe),e(K,Z),e(Z,Le),e(S,Be),e(S,Q),e(Q,P),P.checked=r[2],e(Q,Oe),e(Q,x),e(x,Ie),e(g,Ne),e(g,$),e($,Se),Ce||(je=[j(y,"input",r[13]),j(y,"keydown",r[11]),j(N,"click",r[10]),j(V,"click",r[9]),j(E,"change",r[14]),j(E,"input",r[14]),j(U,"change",r[15]),j(M,"change",r[16]),j(P,"change",r[17])],Ce=!0)},p(i,[v]){v&256&&c!==(c=i[8].operand1+"")&&te(D,c),v&256&&A!==(A=(i[8].operator=="*"?"x":i[8].operator)+"")&&te(C,A),v&256&&B!==(B=i[8].operand2+"")&&te(z,B),v&16&&_e(y,i[4]),v&128&&te(T,i[7]),v&32&&ae!==(ae="result "+(i[5]?"correct":"incorrect")+" mt-5 svelte-pg04w3")&&t(w,"class",ae),v&64&&te(ne,i[6]),v&8&&te(ie,i[3]),v&8&&_e(E,i[3]),v&1&&(U.checked=i[0]),v&2&&(M.checked=i[1]),v&4&&(P.checked=i[2])},i:Ye,o:Ye,d(i){i&&n(O),i&&n(s),Ce=!1,rt(je)}}}const nt=!0;function ot(r,O,s){let l,u,c="",D=!1,I=0,b="",A=!0,C=!1,H=!1,B=3;function z(d){s(8,l=new Ze(B,u)),s(4,c=""),s(5,D=!1),s(7,b="")}function G(){s(5,D=l.checkAnswer(c)),D?(s(7,b="That's right!"),s(6,I++,I)):s(7,b="Please try again.")}function y(d){let w=new RegExp(/\d/);d.key!="Backspace"&&d.key!="Enter"&&d.key!="Tab"&&d.key!="ArrowLeft"&&d.key!="ArrowRight"&&!w.test(d.key)&&(d.preventDefault(),d.stopPropagation()),d.key=="Enter"&&G()}function re(d,w,J){!d&&!w&&!J&&(d=!0,s(0,A=!0));let T=[];return d&&(T=[...T,"ADD"]),w&&(T=[...T,"SUB"]),J&&(T=[...T,"MULT"]),T}function N(){c=this.value,s(4,c)}function se(){B=st(this.value),s(3,B)}function le(){A=this.checked,s(0,A)}function V(){C=this.checked,s(1,C)}function oe(){H=this.checked,s(2,H)}return r.$$.update=()=>{r.$$.dirty&7&&s(12,u=re(A,C,H)),r.$$.dirty&4104&&s(8,l=new Ze(B,u))},[A,C,H,B,c,D,I,b,l,z,G,y,u,N,se,le,V,oe]}class it extends xe{constructor(O){super();$e(this,O,ot,lt,et,{})}}export{it as default,nt as prerender};
