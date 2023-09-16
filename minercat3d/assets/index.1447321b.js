var Bt=Object.defineProperty;var Mt=(e,t,o)=>t in e?Bt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var Ce=(e,t,o)=>(Mt(e,typeof t!="symbol"?t+"":t,o),o);const Lt=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(r){if(r.ep)return;r.ep=!0;const i=o(r);fetch(r.href,i)}};Lt();var He=1e-6,ee=typeof Float32Array!="undefined"?Float32Array:Array;Math.hypot||(Math.hypot=function(){for(var e=0,t=arguments.length;t--;)e+=arguments[t]*arguments[t];return Math.sqrt(e)});function Te(){var e=new ee(16);return ee!=Float32Array&&(e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0),e[0]=1,e[5]=1,e[10]=1,e[15]=1,e}function Rt(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e}function Ct(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function Tt(e,t,o){var n=o[0],r=o[1],i=o[2],s,c,l,d,h,a,u,f,k,_,A,I;return t===e?(e[12]=t[0]*n+t[4]*r+t[8]*i+t[12],e[13]=t[1]*n+t[5]*r+t[9]*i+t[13],e[14]=t[2]*n+t[6]*r+t[10]*i+t[14],e[15]=t[3]*n+t[7]*r+t[11]*i+t[15]):(s=t[0],c=t[1],l=t[2],d=t[3],h=t[4],a=t[5],u=t[6],f=t[7],k=t[8],_=t[9],A=t[10],I=t[11],e[0]=s,e[1]=c,e[2]=l,e[3]=d,e[4]=h,e[5]=a,e[6]=u,e[7]=f,e[8]=k,e[9]=_,e[10]=A,e[11]=I,e[12]=s*n+h*r+k*i+t[12],e[13]=c*n+a*r+_*i+t[13],e[14]=l*n+u*r+A*i+t[14],e[15]=d*n+f*r+I*i+t[15]),e}function St(e,t,o){var n=Math.sin(o),r=Math.cos(o),i=t[0],s=t[1],c=t[2],l=t[3],d=t[8],h=t[9],a=t[10],u=t[11];return t!==e&&(e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=i*r-d*n,e[1]=s*r-h*n,e[2]=c*r-a*n,e[3]=l*r-u*n,e[8]=i*n+d*r,e[9]=s*n+h*r,e[10]=c*n+a*r,e[11]=l*n+u*r,e}function wt(e,t,o){var n=Math.sin(o),r=Math.cos(o),i=t[0],s=t[1],c=t[2],l=t[3],d=t[4],h=t[5],a=t[6],u=t[7];return t!==e&&(e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=i*r+d*n,e[1]=s*r+h*n,e[2]=c*r+a*n,e[3]=l*r+u*n,e[4]=d*r-i*n,e[5]=h*r-s*n,e[6]=a*r-c*n,e[7]=u*r-l*n,e}function Pt(e,t,o,n,r){var i=1/Math.tan(t/2),s;return e[0]=i/o,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=i,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[11]=-1,e[12]=0,e[13]=0,e[15]=0,r!=null&&r!==1/0?(s=1/(n-r),e[10]=(r+n)*s,e[14]=2*r*n*s):(e[10]=-1,e[14]=-2*n),e}var Ft=Pt;function gt(e,t,o,n){var r,i,s,c,l,d,h,a,u,f,k=t[0],_=t[1],A=t[2],I=n[0],T=n[1],m=n[2],L=o[0],b=o[1],x=o[2];return Math.abs(k-L)<He&&Math.abs(_-b)<He&&Math.abs(A-x)<He?Ct(e):(h=k-L,a=_-b,u=A-x,f=1/Math.hypot(h,a,u),h*=f,a*=f,u*=f,r=T*u-m*a,i=m*h-I*u,s=I*a-T*h,f=Math.hypot(r,i,s),f?(f=1/f,r*=f,i*=f,s*=f):(r=0,i=0,s=0),c=a*s-u*i,l=u*r-h*s,d=h*i-a*r,f=Math.hypot(c,l,d),f?(f=1/f,c*=f,l*=f,d*=f):(c=0,l=0,d=0),e[0]=r,e[1]=c,e[2]=h,e[3]=0,e[4]=i,e[5]=l,e[6]=a,e[7]=0,e[8]=s,e[9]=d,e[10]=u,e[11]=0,e[12]=-(r*k+i*_+s*A),e[13]=-(c*k+l*_+d*A),e[14]=-(h*k+a*_+u*A),e[15]=1,e)}function j(){var e=new ee(3);return ee!=Float32Array&&(e[0]=0,e[1]=0,e[2]=0),e}function w(e,t,o){var n=new ee(3);return n[0]=e,n[1]=t,n[2]=o,n}function Re(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e}function ht(e,t,o){return e[0]=t[0]+o[0],e[1]=t[1]+o[1],e[2]=t[2]+o[2],e}function It(e,t){return e[0]=Math.floor(t[0]),e[1]=Math.floor(t[1]),e[2]=Math.floor(t[2]),e}function rt(e,t,o){return e[0]=t[0]*o,e[1]=t[1]*o,e[2]=t[2]*o,e}function D(e,t,o,n){return e[0]=t[0]+o[0]*n,e[1]=t[1]+o[1]*n,e[2]=t[2]+o[2]*n,e}function Ut(e,t){var o=t[0]-e[0],n=t[1]-e[1],r=t[2]-e[2];return o*o+n*n+r*r}function ut(e,t){var o=t[0],n=t[1],r=t[2],i=o*o+n*n+r*r;return i>0&&(i=1/Math.sqrt(i)),e[0]=t[0]*i,e[1]=t[1]*i,e[2]=t[2]*i,e}function jt(e,t,o){var n=t[0],r=t[1],i=t[2],s=o[0],c=o[1],l=o[2];return e[0]=r*l-i*c,e[1]=i*s-n*l,e[2]=n*c-r*s,e}function Nt(e){return e[0]=0,e[1]=0,e[2]=0,e}var $t=Ut;(function(){var e=j();return function(t,o,n,r,i,s){var c,l;for(o||(o=3),n||(n=0),r?l=Math.min(r*o+n,t.length):l=t.length,c=n;c<l;c+=o)e[0]=t[c],e[1]=t[c+1],e[2]=t[c+2],i(e,e,s),t[c]=e[0],t[c+1]=e[1],t[c+2]=e[2];return t}})();function pt(){var e=new ee(2);return ee!=Float32Array&&(e[0]=0,e[1]=0),e}function Yt(e,t,o){return e[0]=t[0]*o,e[1]=t[1]*o,e}function Ot(e){return e[0]=0,e[1]=0,e}(function(){var e=pt();return function(t,o,n,r,i,s){var c,l;for(o||(o=2),n||(n=0),r?l=Math.min(r*o+n,t.length):l=t.length,c=n;c<l;c+=o)e[0]=t[c],e[1]=t[c+1],i(e,e,s),t[c]=e[0],t[c+1]=e[1];return t}})();const kt=41,it=[0,.5,.5,1,1.25,1.5,1.75,2,5,6,7,8,25,30,35,40,125,150,175,200,600,750,850,950,4e3,4500,5e3,5500,2e4,21e3,22e3,23e3,8e4,85e3,9e4,95e3,32e4,33e4,34e4,35e4,0,0].map(e=>e*90),ct=[1,3,7,20,60,175,450,2500,7500,2e4,8e4,35e4,15e5,5e6].map(e=>e*90),_e=[0,100,1500,5e3,3e4,125e3,35e4,15e5,75e5,45e6,25e7,1e9,1e10,1e11],xt=["Wood Pickaxe","Stone Pickaxe","Copper Pickaxe","Iron Pickaxe","Platinum Pickaxe","Gold Pickaxe","Diamond Pickaxe","Emerald Pickaxe","Ruby Pickaxe","Master Pickaxe","Obsidian Pickaxe","Sapphire Pickaxe","Hellstone Pickaxe","Fire Pickaxe"],st=[10,20,35,50,75,125,200,450],Ae=[0,450,5e3,16e3,1e5,75e4,5e6,45e6],vt=["Hands","Cola Can","Water Bottle","Pringles Can","Plastic Bag","School Backpack","Normal Backpack","Miner Backpack"],zt=[100,120,140,200,350,650,1e3,7500],qt=["nothing","Copper Armor","Iron Armor","Gold Armor","Diamond Armor","Emerald Armor","Sapphire Armor","Hellstone Armor"],Ee=[0,1e4,2e5,25e5,2e7,1e8,1e9,25e9],Qe=[0,1,2,4,10,20,25,30,10,150,175,250,75,1250,1500,1750,1e3,1e4,12500,15e3,7500,75e3,9e4,1e5,75e3,75e4,875e3,1e6,75e4,75e5,875e4,1e7,75e5,75e6,875e5,1e8,75e6,75e7,875e6,1e9,0,0],bt=document.getElementById("debug");function Ht(e){bt.textContent=e}window.addEventListener("keydown",e=>{e.code=="F3"&&bt.classList.toggle("visible"),e.preventDefault()});let N=Object.create(null),yt=Object.create(null);window.onkeydown=e=>{N[e.code]||(yt[e.code]=!0),N[e.code]=!0};window.onkeyup=e=>{N[e.code]=!1};let lt=Object.create(null),mt=Object.create(null);const De=document.getElementById("canvas");De.onmousedown=e=>{document.pointerLockElement?(mt[e.button]=!0,lt[e.button]=!0):(Me&&(Se=!0),De.requestPointerLock())};De.onmouseup=e=>{lt[e.button]=!1};let $=pt();window.addEventListener("mousemove",e=>{Me||!document.pointerLockElement||(e.movementX!==-2&&($[0]+=e.movementX),$[1]+=e.movementY)});const z=1.75,K=0,B=.1875,Gt=document.getElementById("backpack"),et=document.getElementById("shop"),Vt=document.getElementById("sellall"),Wt=document.getElementById("buy"),Xt=document.getElementById("layer"),Kt=document.getElementById("cash"),Zt=document.getElementById("hp"),Ge=document.getElementById("shopinfoname"),Ve=document.getElementById("shopinfonumber"),at=document.getElementById("shopmenu"),Be=document.getElementById("shoptabs"),We=document.getElementById("shopicon"),Xe=document.getElementById("shopprice"),le=document.getElementById("shopmax"),ae=document.getElementById("shopnotmax");let tt=!1;Vt.addEventListener("click",()=>{document.getElementById("canvas").requestPointerLock(),tt=!0});let Me=!1,Se=!1;et.addEventListener("click",()=>{Me&&document.getElementById("canvas").requestPointerLock(),Se=!0});let ot=!1;Wt.addEventListener("click",()=>{ot=!0});let me=null;for(let e=0;e<Be.children.length;e++)Be.children[e].addEventListener("click",()=>{me=e});function Jt(e,t){var s,c;Me=e.shop.open,Me||Qt(e,t),Dt(e),Xt.textContent=(e.position[1]-z).toFixed(),Kt.textContent=q(e.cash)+"$",Zt.textContent="hp:"+e.hp.toString(),Gt.textContent=`${e.backpackContents.length}/${st[e.backpack]}`;const o=l=>`[${l[0].toFixed(0)} ${l[1].toFixed(1)} ${l[2].toFixed(1)}]`;let n="";n+=`position: ${o(e.position)}
`,n+=`velocity: ${o(e.velocity)}
`,n+=`isOnGround: ${e.isOnGround}
`,n+=`pitch: ${e.pitch.toFixed(1)} yaw: ${e.pitch.toFixed(2)}
`;const r=e.blocks.getBlock((s=e.highlighted)!=null?s:[0,0,0]);n+=`pickaxe: ${e.pickaxe} ${xt[e.pickaxe]}
`,n+=`  speed: ${q(ct[e.pickaxe])}
`,n+=`backpack: ${e.backpack} ${vt[e.backpack]}
`,n+=`highlighted: ${e.highlighted?o(e.highlighted):"null"} ${r}
`,n+=`  health: ${e.blocks.getBlockHealth((c=e.highlighted)!=null?c:[0,0,0])} / ${it[r]}
`,n+=`  cash: ${q(Qe[r])}
`;let i=e.cash;for(const l of e.backpackContents)i+=Qe[l];n+=`cash after selling: ${q(i)}$
`,Ht(n),yt=Object.create(null),mt=Object.create(null)}function Qt(e,t){to(t,e),e.velocity[1]-=16*t,e.velocity[1]<-30&&(e.velocity[1]=-30),no(t,e),ro(e,t),lt[0]&&e.highlighted?(e.blocks.damage(e.highlighted,ct[e.pickaxe]*t),e.miningTime+=t):e.miningTime=0,e.highlighted=eo(e)}function Dt(e){if(ot&&(e.shop.tab===0&&e.pickaxe+1<_e.length&&e.cash>=_e[e.pickaxe+1]&&(e.cash-=_e[e.pickaxe+1],e.pickaxe++),e.shop.tab===1&&e.backpack+1<Ae.length&&e.cash>=Ae[e.backpack+1]&&(e.cash-=Ae[e.backpack+1],e.backpack++),e.shop.tab===2&&e.armor+1<Ee.length&&e.cash>=Ee[e.armor+1]&&(e.cash-=Ee[e.armor+1],e.armor++),Ke(e.shop.tab,e),ot=!1),tt){Nt(e.velocity),Re(e.position,Et);for(const t of e.backpackContents)e.cash+=Qe[t];e.backpackContents.length=0,tt=!1}if(Se&&(e.shop.open?(e.shop.open=!1,et.textContent="shop",at.classList.remove("visible")):(Ke(e.shop.tab,e),e.shop.open=!0,et.textContent="back",at.classList.add("visible")),Se=!1),me!==null){for(let t=0;t<Be.children.length;t++)t==me?Be.children[t].classList.add("selected"):Be.children[t].classList.remove("selected");e.shop.tab=me,Ke(e.shop.tab,e),me=null}}function Ke(e,t){e===0?t.pickaxe+1<_e.length?(ae.classList.add("visible"),le.classList.remove("visible"),We.src=`/minercat3d/pickaxe/pickaxe${t.pickaxe+2}.png`,Xe.textContent=q(_e[t.pickaxe+1])+"$",Ge.textContent=xt[t.pickaxe+1].toLowerCase(),Ve.textContent="speed: "+q(ct[t.pickaxe+1])):(ae.classList.remove("visible"),le.classList.add("visible")):e===1?t.backpack+1<Ae.length?(ae.classList.add("visible"),le.classList.remove("visible"),We.src=`/minercat3d/backpack/backpack${t.backpack+2}.png`,Xe.textContent=q(Ae[t.backpack+1])+"$",Ge.textContent=vt[t.backpack+1].toLowerCase(),Ve.textContent="space: "+q(st[t.backpack+1])):(ae.classList.remove("visible"),le.classList.add("visible")):e===2&&(t.armor+1<Ee.length?(ae.classList.add("visible"),le.classList.remove("visible"),We.src=`/minercat3d/armor/armor${t.armor+2}.png`,Xe.textContent=q(Ee[t.armor+1])+"$",Ge.textContent=qt[t.armor+1].toLowerCase(),Ve.textContent="health: "+q(zt[t.armor+1])):(ae.classList.remove("visible"),le.classList.add("visible")))}function q(e){const t=[[1e12,"t"],[1e9,"b"],[1e6,"m"],[1e3,"k"]];for(const[o,n]of t)if(e>=o)return`${Math.floor(e/(o/10))/10}${n}`;return e.toString()}function eo(e){const o=Re(j(),e.position),n=j(),r=rt(j(),e.facing,.03);for(;$t(o,e.position)<5*5;)for(let i=0;i<3;i++)if(o[i]+=r[i],_t(n,o),e.blocks.getBlock(n))return n;return null}function to(e,t){let o=5;N.ArrowRight&&($[0]+=o),N.ArrowLeft&&($[0]-=o),N.ArrowUp&&($[1]-=o),N.ArrowDown&&($[1]+=o),Yt($,$,.15),t.yaw+=$[0],t.pitch-=$[1],t.pitch>89&&(t.pitch=89),t.pitch<-89&&(t.pitch=-89),oo(t),Ot($)}function oo(e){const t=j(),o=n=>n/180*Math.PI;t[0]=Math.cos(o(e.yaw))*Math.cos(o(e.pitch)),t[1]=Math.sin(o(e.pitch)),t[2]=Math.sin(o(e.yaw))*Math.cos(o(e.pitch)),ut(e.facing,t)}function no(e,t){const n=Re(j(),t.facing);n[1]=0,ut(n,n);const r=jt(j(),n,[0,1,0]);t.velocity[0]=0,t.velocity[2]=0,N.KeyW&&D(t.velocity,t.velocity,n,4),N.KeyS&&D(t.velocity,t.velocity,n,-4),N.Space&&t.isOnGround&&(t.velocity[1]=9),N.ShiftLeft,N.KeyA&&D(t.velocity,t.velocity,r,-4),N.KeyD&&D(t.velocity,t.velocity,r,4)}function _t(e,t){return Re(e,t),It(e,e),e[1]*=-1,e}function ro(e,t){const o=rt(j(),e.velocity,t);Ze(e,w(o[0],0,0))&&(e.velocity[0]=0),Ze(e,w(0,o[1],0))?(e.velocity[1]=0,o[1]<=0&&(e.isOnGround=!0)):e.isOnGround=!1,Ze(e,w(0,0,o[2]))&&(e.velocity[2]=0)}function Ze(e,t){for(let n=0;n<10;n++)if(D(e.position,e.position,t,1/10),co(e))return D(e.position,e.position,t,-1/10),!0;return!1}const io=[w(-B,-z,-B),w(-B,-z,B),w(B,-z,-B),w(B,-z,B),w(-B,K,-B),w(-B,K,B),w(B,K,-B),w(B,K,B),w(-B,(K-z)/2,-B),w(-B,(K-z)/2,B),w(B,(K-z)/2,-B),w(B,(K-z)/2,B)];function co(e){const t=j(),o=j();for(const n of io)if(ht(o,e.position,n),_t(t,o),e.blocks.getBlock(t))return!0;return!1}const so=.5*(Math.sqrt(3)-1),ye=(3-Math.sqrt(3))/6,lo=1/3,O=1/6,ao=(Math.sqrt(5)-1)/4,U=(5-Math.sqrt(5))/20,g=new Float32Array([1,1,0,-1,1,0,1,-1,0,-1,-1,0,1,0,1,-1,0,1,1,0,-1,-1,0,-1,0,1,1,0,-1,1,0,1,-1,0,-1,-1]),S=new Float32Array([0,1,1,1,0,1,1,-1,0,1,-1,1,0,1,-1,-1,0,-1,1,1,0,-1,1,-1,0,-1,-1,1,0,-1,-1,-1,1,0,1,1,1,0,1,-1,1,0,-1,1,1,0,-1,-1,-1,0,1,1,-1,0,1,-1,-1,0,-1,1,-1,0,-1,-1,1,1,0,1,1,1,0,-1,1,-1,0,1,1,-1,0,-1,-1,1,0,1,-1,1,0,-1,-1,-1,0,1,-1,-1,0,-1,1,1,1,0,1,1,-1,0,1,-1,1,0,1,-1,-1,0,-1,1,1,0,-1,1,-1,0,-1,-1,1,0,-1,-1,-1,0]);class fo{constructor(t=Math.random){const o=typeof t=="function"?t:po(t);this.p=uo(o),this.perm=new Uint8Array(512),this.permMod12=new Uint8Array(512);for(let n=0;n<512;n++)this.perm[n]=this.p[n&255],this.permMod12[n]=this.perm[n]%12}noise2D(t,o){const n=this.permMod12,r=this.perm;let i=0,s=0,c=0;const l=(t+o)*so,d=Math.floor(t+l),h=Math.floor(o+l),a=(d+h)*ye,u=d-a,f=h-a,k=t-u,_=o-f;let A,I;k>_?(A=1,I=0):(A=0,I=1);const T=k-A+ye,m=_-I+ye,L=k-1+2*ye,b=_-1+2*ye,x=d&255,y=h&255;let v=.5-k*k-_*_;if(v>=0){const P=n[x+r[y]]*3;v*=v,i=v*v*(g[P]*k+g[P+1]*_)}let M=.5-T*T-m*m;if(M>=0){const P=n[x+A+r[y+I]]*3;M*=M,s=M*M*(g[P]*T+g[P+1]*m)}let C=.5-L*L-b*b;if(C>=0){const P=n[x+1+r[y+1]]*3;C*=C,c=C*C*(g[P]*L+g[P+1]*b)}return 70*(i+s+c)}noise3D(t,o,n){const r=this.permMod12,i=this.perm;let s,c,l,d;const h=(t+o+n)*lo,a=Math.floor(t+h),u=Math.floor(o+h),f=Math.floor(n+h),k=(a+u+f)*O,_=a-k,A=u-k,I=f-k,T=t-_,m=o-A,L=n-I;let b,x,y,v,M,C;T>=m?m>=L?(b=1,x=0,y=0,v=1,M=1,C=0):T>=L?(b=1,x=0,y=0,v=1,M=0,C=1):(b=0,x=0,y=1,v=1,M=0,C=1):m<L?(b=0,x=0,y=1,v=0,M=1,C=1):T<L?(b=0,x=1,y=0,v=0,M=1,C=1):(b=0,x=1,y=0,v=1,M=1,C=0);const P=T-b+O,Y=m-x+O,te=L-y+O,oe=T-v+2*O,ne=m-M+2*O,re=L-C+2*O,ie=T-1+3*O,ce=m-1+3*O,se=L-1+3*O,Z=a&255,J=u&255,Q=f&255;let W=.6-T*T-m*m-L*L;if(W<0)s=0;else{const F=r[Z+i[J+i[Q]]]*3;W*=W,s=W*W*(g[F]*T+g[F+1]*m+g[F+2]*L)}let X=.6-P*P-Y*Y-te*te;if(X<0)c=0;else{const F=r[Z+b+i[J+x+i[Q+y]]]*3;X*=X,c=X*X*(g[F]*P+g[F+1]*Y+g[F+2]*te)}let G=.6-oe*oe-ne*ne-re*re;if(G<0)l=0;else{const F=r[Z+v+i[J+M+i[Q+C]]]*3;G*=G,l=G*G*(g[F]*oe+g[F+1]*ne+g[F+2]*re)}let V=.6-ie*ie-ce*ce-se*se;if(V<0)d=0;else{const F=r[Z+1+i[J+1+i[Q+1]]]*3;V*=V,d=V*V*(g[F]*ie+g[F+1]*ce+g[F+2]*se)}return 32*(s+c+l+d)}noise4D(t,o,n,r){const i=this.perm;let s,c,l,d,h;const a=(t+o+n+r)*ao,u=Math.floor(t+a),f=Math.floor(o+a),k=Math.floor(n+a),_=Math.floor(r+a),A=(u+f+k+_)*U,I=u-A,T=f-A,m=k-A,L=_-A,b=t-I,x=o-T,y=n-m,v=r-L;let M=0,C=0,P=0,Y=0;b>x?M++:C++,b>y?M++:P++,b>v?M++:Y++,x>y?C++:P++,x>v?C++:Y++,y>v?P++:Y++;const te=M>=3?1:0,oe=C>=3?1:0,ne=P>=3?1:0,re=Y>=3?1:0,ie=M>=2?1:0,ce=C>=2?1:0,se=P>=2?1:0,Z=Y>=2?1:0,J=M>=1?1:0,Q=C>=1?1:0,W=P>=1?1:0,X=Y>=1?1:0,G=b-te+U,V=x-oe+U,F=y-ne+U,we=v-re+U,Pe=b-ie+2*U,Fe=x-ce+2*U,ge=y-se+2*U,Ie=v-Z+2*U,Ue=b-J+3*U,je=x-Q+3*U,Ne=y-W+3*U,$e=v-X+3*U,Ye=b-1+4*U,Oe=x-1+4*U,ze=y-1+4*U,qe=v-1+4*U,fe=u&255,de=f&255,he=k&255,ue=_&255;let pe=.6-b*b-x*x-y*y-v*v;if(pe<0)s=0;else{const E=i[fe+i[de+i[he+i[ue]]]]%32*4;pe*=pe,s=pe*pe*(S[E]*b+S[E+1]*x+S[E+2]*y+S[E+3]*v)}let ke=.6-G*G-V*V-F*F-we*we;if(ke<0)c=0;else{const E=i[fe+te+i[de+oe+i[he+ne+i[ue+re]]]]%32*4;ke*=ke,c=ke*ke*(S[E]*G+S[E+1]*V+S[E+2]*F+S[E+3]*we)}let xe=.6-Pe*Pe-Fe*Fe-ge*ge-Ie*Ie;if(xe<0)l=0;else{const E=i[fe+ie+i[de+ce+i[he+se+i[ue+Z]]]]%32*4;xe*=xe,l=xe*xe*(S[E]*Pe+S[E+1]*Fe+S[E+2]*ge+S[E+3]*Ie)}let ve=.6-Ue*Ue-je*je-Ne*Ne-$e*$e;if(ve<0)d=0;else{const E=i[fe+J+i[de+Q+i[he+W+i[ue+X]]]]%32*4;ve*=ve,d=ve*ve*(S[E]*Ue+S[E+1]*je+S[E+2]*Ne+S[E+3]*$e)}let be=.6-Ye*Ye-Oe*Oe-ze*ze-qe*qe;if(be<0)h=0;else{const E=i[fe+1+i[de+1+i[he+1+i[ue+1]]]]%32*4;be*=be,h=be*be*(S[E]*Ye+S[E+1]*Oe+S[E+2]*ze+S[E+3]*qe)}return 27*(s+c+l+d+h)}}var ho=fo;function uo(e){const t=new Uint8Array(256);for(let o=0;o<256;o++)t[o]=o;for(let o=0;o<255;o++){const n=o+~~(e()*(256-o)),r=t[o];t[o]=t[n],t[n]=r}return t}function po(e){let t=0,o=0,n=0,r=1;const i=ko();return t=i(" "),o=i(" "),n=i(" "),t-=i(e),t<0&&(t+=1),o-=i(e),o<0&&(o+=1),n-=i(e),n<0&&(n+=1),function(){const s=2091639*t+r*23283064365386963e-26;return t=o,o=n,n=s-(r=s|0)}}function ko(){let e=4022871197;return function(t){t=t.toString();for(let o=0;o<t.length;o++){e+=t.charCodeAt(o);let n=.02519603282416938*e;e=n>>>0,n-=e,n*=e,e=n>>>0,n-=e,e+=n*4294967296}return(e>>>0)*23283064365386963e-26}}const Je=[{y:5,tries:[{do:0}]},{y:6,tries:[{do:{type:"firstlayer"}}]},{y:7,tries:[{do:2}]},{y:24,tries:[{chance:10,do:4},{chance:12,do:5},{chance:14,do:6},{chance:16,do:7},{do:3}]},{y:60,tries:[{chance:10,do:9},{chance:12,do:10},{chance:14,do:11},{do:8}]},{y:110,tries:[{chance:10,do:13},{chance:12,do:14},{chance:14,do:15},{do:12}]},{y:160,tries:[{chance:10,do:17},{chance:12,do:18},{chance:14,do:19},{do:16}]},{y:225,tries:[{chance:10,do:21},{chance:12,do:22},{chance:14,do:23},{do:20}]},{y:300,tries:[{chance:10,do:25},{chance:12,do:26},{chance:14,do:27},{do:24}]},{y:375,tries:[{chance:10,do:29},{chance:12,do:30},{chance:14,do:31},{do:28}]},{y:500,tries:[{chance:10,do:33},{chance:12,do:34},{chance:14,do:35},{do:32}]},{y:8250,tries:[{chance:10,do:37},{chance:12,do:38},{chance:14,do:39},{do:36}]}];function xo(e){vo(e),yo(e);for(let t=0;t<H;t++)for(let o=0;o<p;o++)for(let n=0;n<p;n++)e.setBlockHealth([o,t,n],it[e.getBlock([o,t,n])])}function vo(e){let t=0;for(let o=0;o<H&&(o>Je[t].y&&t++,!(t>=Je.length));o++)for(let n=0;n<p;n++)for(let r=0;r<p;r++)for(const i of Je[t].tries)if(!("chance"in i&&Math.random()>=1/i.chance)){if(typeof i.do=="number")e.setBlock([n,o,r],i.do);else if(i.do.type=="firstlayer"){const s=Math.floor(p/2);(n==s||n==s-1)&&(r==s||r==s-1)?e.setBlock([n,o,r],kt):e.setBlock([n,o,r],1)}break}}let bo=new ho;function yo(e){for(let t=0;t<H;t++)for(let o=0;o<p;o++)for(let n=0;n<p;n++){let r=Math.max(0,Math.min(1,(t-5)/5));r*=Math.min(8,Math.min(o,p-o))/8,r*=Math.min(8,Math.min(n,p-n))/8;const i=.08,s=.35;bo.noise3D(o*i,t*i,n*i)*r>s&&e.setBlock([o,t,n],0)}}var mo="/minercat3d/assets/atlas.d6079d8e.png";document.getElementById("enterfullscreen").onclick=At;function At(){document.querySelector(".guiPlayer").classList.add("fullscreen"),document.querySelector(".stage-wrapper_stage-wrapper_2bejr").classList.add("stage-wrapper_full-screen_2hjMb"),document.querySelector(".stage-wrapper_stage-wrapper_2bejr > .box_box_2jjDp").innerHTML=`
    <div class="stage-header_stage-header-wrapper-overlay_5vfJa box_box_2jjDp">
      <div class="stage-header_stage-menu-wrapper_15JJt box_box_2jjDp" style="width: 960px;">
        <div class="controls_controls-container_2xinB"><img class="green-flag_green-flag_1kiAo"
          draggable="false" src="/minercat3d/greenflag.3684183e.svg" title="Go"><img class="stop-all_stop-all_1Y8P9"
          draggable="false" src="/minercat3d/stop.083670f1.svg" title="Stop"></div><span
        class="button_outlined-button_1bS__ stage-header_stage-button_hkl9B" role="button">
        <div class="button_content_3jdgj"><img id="closefullscreen" alt="Exit full screen mode"
            class="stage-header_stage-button-icon_3zzFK" draggable="false" src="/minercat3d/closefullscreen.8f148cc2.svg"
            title="Full Screen Control">
        </div>
      </span>
    </div>
  `,document.querySelector(".stage_stage_1fD7k").style.width="960px",document.querySelector(".stage_stage_1fD7k").style.height="720px",document.getElementById("canvas").style.width="960px",document.getElementById("canvas").style.height="720px",document.querySelector(".stage_stage-bottom-wrapper_KIBfo").style.width="960",document.querySelector(".stage_stage-bottom-wrapper_KIBfo").style.height="720",document.querySelector(".stage_stage-overlays_eE14L").classList.add("stage_full-screen_ZO7xi"),document.getElementById("closefullscreen").onclick=_o}function _o(){document.querySelector(".guiPlayer").classList.remove("fullscreen"),document.querySelector(".stage-wrapper_stage-wrapper_2bejr").classList.remove("stage-wrapper_full-screen_2hjMb"),document.querySelector(".stage-wrapper_stage-wrapper_2bejr > .box_box_2jjDp").innerHTML=`
  <div class="stage-header_stage-header-wrapper_1F4gT box_box_2jjDp">
    <div class="stage-header_stage-menu-wrapper_15JJt box_box_2jjDp"
      style="padding-bottom: 0px; padding-top: 0px;">
      <!-- I don't know why but I had to add these width: 20px; height: 20px or else it to big -->
      <div class="controls_controls-container_2xinB"><img id="greenflag"
          class="green-flag_green-flag_1kiAo" draggable="false" src="/minercat3d/greenflag.3684183e.svg" title="Go"
          ><img class="stop-all_stop-all_1Y8P9" draggable="false"
           src="/minercat3d/stop.083670f1.svg" title="Stop" id="stop"></div>
      <div class="stage-header_stage-size-row_14N65">
        <div><span class="button_outlined-button_1bS__ stage-header_stage-button_hkl9B"
             id="enterfullscreen" role="button">
            <div class="button_content_3jdgj"><img alt="Enter full screen mode"
                class="stage-header_stage-button-icon_3zzFK" draggable="false"
                src="/minercat3d/fullscreen.8f148cc2.svg" title="Full Screen Control">
            </div>
          </span></div>
      </div>
    </div>
  `,document.querySelector(".stage_stage_1fD7k").style.width="480px",document.querySelector(".stage_stage_1fD7k").style.height="360px",document.getElementById("canvas").style.width="480px",document.getElementById("canvas").style.height="360px",document.querySelector(".stage_stage-bottom-wrapper_KIBfo").style.width="480",document.querySelector(".stage_stage-bottom-wrapper_KIBfo").style.height="360",document.querySelector(".stage_stage-overlays_eE14L").classList.remove("stage_full-screen_ZO7xi"),document.getElementById("enterfullscreen").onclick=At}const p=24,H=8250,nt=p*p,Et=w(p/2,-5+z+.2,p/2);function Le(e){throw alert(e),new Error(e)}class Ao{constructor(){Ce(this,"array");Ce(this,"gl",null);Ce(this,"buffer",null);this.array=new Uint32Array(nt*H),xo(this)}getBlock([t,o,n]){return t<0||t>=p||n<0||n>=p||o<0||o>=H?0:this.array[t+p*(n+p*o)]&63}setBlock([t,o,n],r){var s,c;if(t<0||t>=p||n<0||n>=p||o<0||o>=H)return;const i=t+p*(n+p*o);this.array[i]=(this.array[i]&-64)+r,(s=this.gl)==null||s.bindBuffer(this.gl.ARRAY_BUFFER,this.buffer),(c=this.gl)==null||c.bufferSubData(this.gl.ARRAY_BUFFER,i*4,this.array,i,4)}getBlockHealth([t,o,n]){return t<0||t>=p||n<0||n>=p||o<0||o>=H?0:this.array[t+p*(n+p*o)]>>6}setBlockHealth([t,o,n],r){var s,c;if(t<0||t>=p||n<0||n>=p||o<0||o>=H)return;const i=t+p*(n+p*o);this.array[i]=(this.array[i]&63)+(r<<6),(s=this.gl)==null||s.bindBuffer(this.gl.ARRAY_BUFFER,this.buffer),(c=this.gl)==null||c.bufferSubData(this.gl.ARRAY_BUFFER,i*4,this.array,i,4)}damage(t,o){const n=R.blocks.getBlock(t);if(n===kt)return;const r=R.blocks.getBlockHealth(t)-o;r<=0?(R.blocks.setBlock(t,0),R.backpackContents.length<st[R.backpack]&&R.backpackContents.push(n)):R.blocks.setBlockHealth(t,r)}}let R={position:Re(j(),Et),facing:w(0,0,0),cameraUp:w(0,1,0),pitch:0,yaw:0,highlighted:null,blocks:new Ao,velocity:j(),isOnGround:!1,pickaxe:0,backpack:0,backpackContents:[],cash:0,hp:0,armor:0,shop:{open:!1,tab:0},miningTime:0};window.gameData=R;function Eo(e,t){const o=t=="uint"?"u":"";let n=t+"[](",r="";for(const i of e)n+=r+i.toFixed()+o,r=", ";return n+=")",n}function Bo(){const t=document.querySelector("#canvas").getContext("webgl2");t||Le("Unable to initialize WebGL2");const o=`#version 300 es

    // vertex attributes
    in vec4 aVertexPosition;
    in vec2 aTextureCoord;
  
    // instance attributes
    in uint iBlock;
  
    out highp vec2 vTextureCoord;
    out highp vec2 vBreakingCoord;
    out float isAir;
    out float isHighlighted;
  
    uniform mat4 uModelViewMatrix;
    uniform mat4 uProjectionMatrix;
    uniform int layerStart;
    uniform vec3 highlighted; // index in array of highlighted block
  
    
    void main() {
      const uint[] blockTypeHealth = ${Eo(it,"uint")};

      int x = gl_InstanceID % ${p};
      int zy = gl_InstanceID / ${p};
      int z = zy % ${p};
      int y = zy / ${p};
      
      vec3 blockPosition = vec3(x, -y-layerStart, z);
      vec3 highlightedPosition = vec3(highlighted.x, -highlighted.y, highlighted.z);
  
  
      uint blockId = iBlock & 63u;
      uint blockHealth = iBlock >> 6u;
      uint textureNum;
  

      isAir = 0.0;
  
      gl_Position = uProjectionMatrix * uModelViewMatrix * (aVertexPosition + vec4(blockPosition, 0.0));
  
      if (blockId == 0u) { // air
        isAir = 1.0;
      } else if (blockId == 1u) { // grass
        if (gl_VertexID >= 8 && gl_VertexID < 12) {
          // top
          textureNum = 0u;
        } else if (gl_VertexID >= 12 && gl_VertexID < 16) {
          // bottom
          textureNum = 2u;
        } else {
          textureNum = 1u;
        }
      } else {
        textureNum = blockId;
      }
  
      isHighlighted = blockPosition == highlightedPosition ? 1.0 : 0.0;
  
      vTextureCoord = (aTextureCoord + vec2(textureNum, 0.0)) / vec2(42.0, 4.0);
      
      float breakingProgress = 1.0 - (float(blockHealth) / float(blockTypeHealth[blockId]));
      uint breakingNum = uint(breakingProgress * 11.0);
      vBreakingCoord = (aTextureCoord + vec2(breakingNum, 1.0)) / vec2(42.0, 4.0);
    }
  `,r=ft(t,o,`#version 300 es
    precision mediump float;
    precision lowp sampler3D;    out vec4 fragColor;
  
    in highp vec2 vTextureCoord;
    in highp vec2 vBreakingCoord;
    in float isAir;
    in float isHighlighted;

    uniform sampler2D uSampler;
    
    void main() {
      if (isAir > 0.5) { discard; }
      
      if(texture(uSampler, vBreakingCoord).a != 0.0) {
        fragColor = vec4(0.0, 0.0, 0.0, 1.0);
      } else {
        fragColor = texture(uSampler, vTextureCoord);
      }
      
 
      if (isHighlighted > 0.5) {
        vec2 uv = fract(vTextureCoord * vec2(42.0, 4.0));
        float pickerWidth =  1.0 / 16.0;
        if (uv.x < pickerWidth || uv.x > 1. - pickerWidth || uv.y < pickerWidth || uv.y > 1. - pickerWidth) {
          fragColor = vec4(1.0);
        }
      }
      
      // fragColor = vec4(vTextureCoord * vec2(42.0, 1.0), 0.0, 1.0);
    }
  `),c=ft(t,`#version 300 es
    precision mediump float;
    in vec4 vertexPosition;
    in vec2 textureCoord;
  
    out vec2 uv;
    
    uniform mat4 projectionMatrix;
    uniform mat4 pickaxeMatrix;  
  
    void main() {
      uv = textureCoord;
      gl_Position = projectionMatrix * (pickaxeMatrix * vertexPosition);
      gl_Position.z = 0.0;
    }
  `,`#version 300 es
    precision mediump float;
    out vec4 fragColor;
    in vec2 uv;

    uniform sampler2D sampler;
    uniform int pickaxeNum;
  
    void main() {
      vec2 aaa = uv;
      aaa.x = 1.0-aaa.x;
      aaa.y = 1.0-aaa.y;
      aaa.x /= 1.5;
      aaa.y /= 1.5;
      aaa.y = 1.0-aaa.y;
  
      fragColor = texture(sampler, (aaa + vec2(pickaxeNum, 1)) / vec2(21.0, 2.0));
      if (fragColor.a == 0.0) discard;
      // fragColor = vec4(aaa, 0.0, 1.0);
    }
  `),l={blocks:{program:r,attribLocations:{vertexPosition:t.getAttribLocation(r,"aVertexPosition"),textureCoord:t.getAttribLocation(r,"aTextureCoord"),block:t.getAttribLocation(r,"iBlock")},uniformLocations:{projectionMatrix:t.getUniformLocation(r,"uProjectionMatrix"),modelViewMatrix:t.getUniformLocation(r,"uModelViewMatrix"),sampler:t.getUniformLocation(r,"uSampler"),layerStart:t.getUniformLocation(r,"layerStart"),highlighted:t.getUniformLocation(r,"highlighted")}},pickaxe:{program:c,attribLocations:{vertexPosition:t.getAttribLocation(c,"vertexPosition"),textureCoord:t.getAttribLocation(c,"textureCoord")},uniformLocations:{projectionMatrix:t.getUniformLocation(c,"projectionMatrix"),pickaxeMatrix:t.getUniformLocation(c,"pickaxeMatrix"),sampler:t.getUniformLocation(c,"sampler"),pickaxeNum:t.getUniformLocation(c,"pickaxeNum")}}},d=Lo(t),h=Mo(t,mo);let a=0;function u(f){f*=.001;const k=f-a;a=f,Jt(R,k),Ro(t,h,l,d),requestAnimationFrame(u)}requestAnimationFrame(u)}function ft(e,t,o){const n=dt(e,e.VERTEX_SHADER,t),r=dt(e,e.FRAGMENT_SHADER,o),i=e.createProgram();return i||Le("error creating shader program"),e.attachShader(i,n),e.attachShader(i,r),e.linkProgram(i),e.getProgramParameter(i,e.LINK_STATUS)||Le(`error linking shader program: ${e.getProgramInfoLog(i)}`),i}function dt(e,t,o){const n=e.createShader(t);if(n||Le("error creating shader"),e.shaderSource(n,o),e.compileShader(n),!e.getShaderParameter(n,e.COMPILE_STATUS)){const r=e.getShaderInfoLog(n);e.deleteShader(n),Le(`error compiling shader: ${r}`)}return n}function Mo(e,t){const o=e.createTexture();e.bindTexture(e.TEXTURE_2D,o);const n=0,r=e.RGBA,i=1,s=1,c=0,l=e.RGBA,d=e.UNSIGNED_BYTE,h=new Uint8Array([0,0,255,255]);e.texImage2D(e.TEXTURE_2D,n,r,i,s,c,l,d,h);const a=new Image;return a.onload=function(){e.bindTexture(e.TEXTURE_2D,o),e.texImage2D(e.TEXTURE_2D,n,r,l,d,a),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST)},a.src=t,o}function Lo(e){const t=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,t);const o=[0,0,1,1,0,1,1,1,1,0,1,1,0,0,0,0,1,0,1,1,0,1,0,0,0,1,0,0,1,1,1,1,1,1,1,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,1,1,0,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0];e.bufferData(e.ARRAY_BUFFER,new Float32Array(o),e.STATIC_DRAW);const n=e.createBuffer();e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n);const r=[0,1,2,0,2,3,4,5,6,4,6,7,8,9,10,8,10,11,12,13,14,12,14,15,16,17,18,16,18,19,20,21,22,20,22,23];e.bufferData(e.ELEMENT_ARRAY_BUFFER,new Uint16Array(r),e.STATIC_DRAW);const i=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,i);const s=[0,1,1,1,1,0,0,0,1,1,1,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,1,1,1,0,0,0,0,1,0,1,1,1,1,0,0,0];e.bufferData(e.ARRAY_BUFFER,new Float32Array(s),e.STATIC_DRAW);const c=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,c),e.bufferData(e.ARRAY_BUFFER,R.blocks.array,e.DYNAMIC_DRAW);const l=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,l),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-.5,1,0,.5,1,0,-.5,0,0,-.5,0,0,.5,0,0,.5,1,0]),e.STATIC_DRAW);const d=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,d),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,0,1,1,1,1,0]),e.STATIC_DRAW),R.blocks.buffer=c,R.blocks.gl=e,{blocks:{vertexPosition:t,indices:n,textureCoord:i},pickaxe:{vertexPosition:l,textureCoord:d}}}function Ro(e,t,o,n){var L;const r=w(.4,1,.996),i=w(0,.192,.188),s=Math.max(0,Math.min(1,-(R.position[1]+5)/10)),c=j();rt(c,r,1-s),D(c,c,i,s),e.clearColor(c[0],c[1],c[2],1),e.clearDepth(1),e.enable(e.DEPTH_TEST),e.depthFunc(e.LEQUAL),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT);const l=70*Math.PI/180,d=e.canvas.clientWidth/e.canvas.clientHeight,h=.1,a=100,u=Te();Ft(u,l,d,h,a);const f=Te(),k=j();ht(k,R.position,R.facing),gt(f,R.position,k,R.cameraUp);{const x=e.FLOAT,y=!1,v=0,M=0;e.bindBuffer(e.ARRAY_BUFFER,n.blocks.vertexPosition),e.vertexAttribPointer(o.blocks.attribLocations.vertexPosition,3,x,y,v,M),e.enableVertexAttribArray(o.blocks.attribLocations.vertexPosition)}const _=Math.floor(-R.position[1]),A=Math.min(Math.max(0,_-25),H-1),I=Math.max(0,Math.min(H-1,_+75));e.bindBuffer(e.ARRAY_BUFFER,n.blocks.textureCoord),e.vertexAttribPointer(o.blocks.attribLocations.textureCoord,2,e.FLOAT,!1,0,0),e.enableVertexAttribArray(o.blocks.attribLocations.textureCoord),e.bindBuffer(e.ARRAY_BUFFER,R.blocks.buffer),e.vertexAttribIPointer(o.blocks.attribLocations.block,1,e.UNSIGNED_INT,0,A*4*nt),e.vertexAttribDivisor(o.blocks.attribLocations.block,1),e.enableVertexAttribArray(o.blocks.attribLocations.block),e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n.blocks.indices),e.useProgram(o.blocks.program),e.uniformMatrix4fv(o.blocks.uniformLocations.projectionMatrix,!1,u),e.uniformMatrix4fv(o.blocks.uniformLocations.modelViewMatrix,!1,f),e.uniform1i(o.blocks.uniformLocations.layerStart,A),e.uniform3fv(o.blocks.uniformLocations.highlighted,(L=R.highlighted)!=null?L:[0,0,0]),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,t),e.uniform1i(o.blocks.uniformLocations.sampler,0);{const y=e.UNSIGNED_SHORT,v=nt*(I-A);e.drawElementsInstanced(e.TRIANGLES,36,y,0,v)}e.useProgram(o.pickaxe.program),e.bindBuffer(e.ARRAY_BUFFER,n.pickaxe.vertexPosition),e.vertexAttribPointer(o.pickaxe.attribLocations.vertexPosition,3,e.FLOAT,!1,0,0),e.enableVertexAttribArray(o.pickaxe.attribLocations.vertexPosition);const T=Rt(Te(),u);e.uniformMatrix4fv(o.pickaxe.uniformLocations.projectionMatrix,!1,T);const m=Te();Tt(m,m,[.55,-.75,-1.5]),St(m,m,-Math.PI/3),wt(m,m,Math.sin(R.miningTime*20)*25*Math.PI/180),e.uniformMatrix4fv(o.pickaxe.uniformLocations.pickaxeMatrix,!1,m),e.bindBuffer(e.ARRAY_BUFFER,n.pickaxe.textureCoord),e.vertexAttribPointer(o.pickaxe.attribLocations.textureCoord,2,e.FLOAT,!1,0,0),e.enableVertexAttribArray(o.pickaxe.attribLocations.textureCoord),e.uniform1i(o.pickaxe.uniformLocations.sampler,0),e.uniform1i(o.pickaxe.uniformLocations.pickaxeNum,R.pickaxe),e.drawArrays(e.TRIANGLES,0,6)}window.onload=Bo;
