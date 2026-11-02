(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();function Lt(i,t=i,e=i){return{top:i,side:t,bottom:e}}const Fl=[{name:"air",displayName:"Air",faces:Lt("none"),solid:!1,transparent:!0,shape:"none",creative:!1,hardness:0},{name:"grass",displayName:"Grass Block",faces:Lt("grass_top","grass_side","dirt"),hardness:.9,drop:"dirt",tool:"shovel"},{name:"dirt",displayName:"Dirt",faces:Lt("dirt"),hardness:.75,tool:"shovel"},{name:"stone",displayName:"Stone",faces:Lt("stone"),hardness:2.25,drop:"cobblestone",tool:"pickaxe",harvestTier:1},{name:"cobblestone",displayName:"Cobblestone",faces:Lt("cobblestone"),hardness:3,tool:"pickaxe",harvestTier:1},{name:"oak_planks",displayName:"Oak Planks",faces:Lt("oak_planks"),hardness:3,tool:"axe"},{name:"oak_log",displayName:"Oak Log",faces:Lt("oak_log_top","oak_log"),hardness:3,tool:"axe"},{name:"oak_leaves",displayName:"Oak Leaves",faces:Lt("oak_leaves"),transparent:!0,hardness:.3},{name:"sand",displayName:"Sand",faces:Lt("sand"),hardness:.75,tool:"shovel"},{name:"gravel",displayName:"Gravel",faces:Lt("gravel"),hardness:.9,tool:"shovel"},{name:"water",displayName:"Water",faces:Lt("water"),solid:!1,transparent:!0,shape:"liquid",hardness:1/0,creative:!1},{name:"glass",displayName:"Glass",faces:Lt("glass"),transparent:!0,hardness:.45},{name:"bricks",displayName:"Bricks",faces:Lt("bricks"),hardness:3,tool:"pickaxe",harvestTier:1},{name:"bedrock",displayName:"Bedrock",faces:Lt("bedrock"),hardness:1/0},{name:"coal_ore",displayName:"Coal Ore",faces:Lt("coal_ore"),hardness:4.5,tool:"pickaxe",harvestTier:1},{name:"iron_ore",displayName:"Iron Ore",faces:Lt("iron_ore"),hardness:4.5,tool:"pickaxe",harvestTier:2},{name:"gold_ore",displayName:"Gold Ore",faces:Lt("gold_ore"),hardness:4.5,tool:"pickaxe",harvestTier:3},{name:"diamond_ore",displayName:"Diamond Ore",faces:Lt("diamond_ore"),hardness:4.5,tool:"pickaxe",harvestTier:3},{name:"birch_log",displayName:"Birch Log",faces:Lt("birch_log_top","birch_log"),hardness:3,tool:"axe"},{name:"birch_leaves",displayName:"Birch Leaves",faces:Lt("birch_leaves"),transparent:!0,hardness:.3},{name:"snowy_grass",displayName:"Snowy Grass Block",faces:Lt("snow","grass_snow_side","dirt"),hardness:.9,drop:"dirt",tool:"shovel"},{name:"snow",displayName:"Snow Block",faces:Lt("snow"),hardness:.3,tool:"shovel"},{name:"white_wool",displayName:"White Wool",faces:Lt("white_wool"),hardness:1.2},{name:"red_wool",displayName:"Red Wool",faces:Lt("red_wool"),hardness:1.2},{name:"orange_wool",displayName:"Orange Wool",faces:Lt("orange_wool"),hardness:1.2},{name:"yellow_wool",displayName:"Yellow Wool",faces:Lt("yellow_wool"),hardness:1.2},{name:"lime_wool",displayName:"Lime Wool",faces:Lt("lime_wool"),hardness:1.2},{name:"blue_wool",displayName:"Blue Wool",faces:Lt("blue_wool"),hardness:1.2},{name:"purple_wool",displayName:"Purple Wool",faces:Lt("purple_wool"),hardness:1.2},{name:"black_wool",displayName:"Black Wool",faces:Lt("black_wool"),hardness:1.2},{name:"glowstone",displayName:"Glowstone",faces:Lt("glowstone"),hardness:.45,emissive:!0,light:15},{name:"bookshelf",displayName:"Bookshelf",faces:Lt("oak_planks","bookshelf"),hardness:2.25,tool:"axe"},{name:"crafting_table",displayName:"Crafting Table",faces:Lt("crafting_table_top","crafting_table_side","oak_planks"),hardness:3.75,tool:"axe"},{name:"dandelion",displayName:"Dandelion",faces:Lt("dandelion"),solid:!1,transparent:!0,shape:"cross",hardness:0,needsSupport:!0},{name:"poppy",displayName:"Poppy",faces:Lt("poppy"),solid:!1,transparent:!0,shape:"cross",hardness:0,needsSupport:!0},{name:"tall_grass",displayName:"Tall Grass",faces:Lt("tall_grass"),solid:!1,transparent:!0,shape:"cross",hardness:0,needsSupport:!0},{name:"allow",displayName:"Allow",faces:Lt("allow"),hardness:1/0},{name:"deny",displayName:"Deny",faces:Lt("deny"),hardness:1/0},{name:"border",displayName:"Border",faces:Lt("border"),hardness:1/0},{name:"furnace",displayName:"Furnace",faces:Lt("furnace_top","furnace_front","furnace_top"),hardness:5.25,tool:"pickaxe",harvestTier:1},{name:"torch",displayName:"Torch",faces:Lt("torch"),solid:!1,transparent:!0,shape:"torch",hardness:0,emissive:!0,light:14},{name:"chalkboard_slate",displayName:"Slate",faces:Lt("chalkboard"),solid:!1,transparent:!0,shape:"none",hardness:1.5},{name:"chalkboard_poster",displayName:"Poster",faces:Lt("chalkboard"),solid:!1,transparent:!0,shape:"none",hardness:1.5},{name:"chalkboard_board",displayName:"Board",faces:Lt("chalkboard"),solid:!1,transparent:!0,shape:"none",hardness:1.5}],Me=Fl.map(({drop:i,...t},e)=>({solid:!0,transparent:!1,shape:"cube",creative:!0,hardness:1,...t,id:e,drop:i===void 0?void 0:Fl.findIndex(n=>n.name===i)})),Vu=new Map(Me.map(i=>[i.name,i])),Ue=0;function Xe(i){const t=Me[i];if(!t)throw new Error(`Unknown block id ${i}`);return t}function Kt(i){const t=Vu.get(i);if(!t)throw new Error(`Unknown block "${i}"`);return t.id}function Dh(){return Me.filter(i=>i.creative)}function Wu(){const i=new Set;for(const t of Me)t.shape!=="none"&&(i.add(t.faces.top),i.add(t.faces.side),i.add(t.faces.bottom));return[...i]}function hi(i){const t=Me[i];return t!==void 0&&t.shape==="cube"&&!t.transparent}function Ii(i){return Me[i]?.solid??!1}const ht=16,de=96;class fn{constructor(t,e){this.cx=t,this.cz=e}blocks=new Uint8Array(ht*de*ht);light=new Uint8Array(ht*de*ht);static index(t,e,n){return(e*ht+n)*ht+t}get(t,e,n){return e<0||e>=de?Ue:this.blocks[fn.index(t,e,n)]}set(t,e,n,s){e<0||e>=de||(this.blocks[fn.index(t,e,n)]=s)}}function Zn(i,t){return`${i},${t}`}function sn(i){return Math.floor(i/ht)}function en(i){return(Math.floor(i)%ht+ht)%ht}function Xu(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function Rn(i,t,e,n){let s=i^Math.imul(t|0,668265261)^Math.imul(e|0,374761393)^Math.imul(n|0,2654435761);return s=Math.imul(s^s>>>15,2246822507),s=Math.imul(s^s>>>13,3266489909),s^=s>>>16,(s>>>0)/4294967296}function Yu(i){if(/^-?\d+$/.test(i.trim()))return Number.parseInt(i.trim(),10)|0;let t=2166136261;for(let e=0;e<i.length;e++)t^=i.charCodeAt(e),t=Math.imul(t,16777619);return t|0}const go=[[1,1],[-1,1],[1,-1],[-1,-1],[1,0],[-1,0],[0,1],[0,-1]],$u=.5*(Math.sqrt(3)-1),Ls=(3-Math.sqrt(3))/6;class nr{perm=new Uint8Array(512);constructor(t){const e=Xu(t),n=new Uint8Array(256);for(let s=0;s<256;s++)n[s]=s;for(let s=255;s>0;s--){const r=Math.floor(e()*(s+1)),o=n[s];n[s]=n[r],n[r]=o}for(let s=0;s<512;s++)this.perm[s]=n[s&255]}noise2(t,e){const n=this.perm,s=(t+e)*$u,r=Math.floor(t+s),o=Math.floor(e+s),a=(r+o)*Ls,c=t-(r-a),l=e-(o-a),h=c>l?1:0,u=c>l?0:1,d=c-h+Ls,f=l-u+Ls,g=c-1+2*Ls,_=l-1+2*Ls,m=r&255,p=o&255;let b=0,S=.5-c*c-l*l;if(S>0){const w=go[n[m+n[p]]&7];S*=S,b+=S*S*(w[0]*c+w[1]*l)}let y=.5-d*d-f*f;if(y>0){const w=go[n[m+h+n[p+u]]&7];y*=y,b+=y*y*(w[0]*d+w[1]*f)}let U=.5-g*g-_*_;if(U>0){const w=go[n[m+1+n[p+1]]&7];U*=U,b+=U*U*(w[0]*g+w[1]*_)}return 70*b}fbm2(t,e,n,s=2,r=.5){let o=1,a=1,c=0,l=0;for(let h=0;h<n;h++)c+=o*this.noise2(t*a,e*a),l+=o,o*=r,a*=s;return c/l}}const kn=30,qu=60,ue={grass:Kt("grass"),dirt:Kt("dirt"),stone:Kt("stone"),sand:Kt("sand"),gravel:Kt("gravel"),water:Kt("water"),bedrock:Kt("bedrock"),coal:Kt("coal_ore"),iron:Kt("iron_ore"),gold:Kt("gold_ore"),diamond:Kt("diamond_ore"),oakLog:Kt("oak_log"),oakLeaves:Kt("oak_leaves"),birchLog:Kt("birch_log"),birchLeaves:Kt("birch_leaves"),snowyGrass:Kt("snowy_grass"),dandelion:Kt("dandelion"),poppy:Kt("poppy"),tallGrass:Kt("tall_grass")};class Ku{constructor(t){this.seed=t,this.heightNoise=new nr(t),this.mountainNoise=new nr(t^1540483477),this.climateNoise=new nr(t^461845907),this.forestNoise=new nr(t^1759714724)}heightNoise;mountainNoise;climateNoise;forestNoise;heightAt(t,e){const n=this.heightNoise.fbm2(t/160,e/160,4),s=Math.max(0,this.mountainNoise.fbm2(t/320,e/320,3)-.1),r=kn+2+n*12+s*s*70;return Math.max(4,Math.min(de-16,Math.floor(r)))}biomeAt(t,e,n=this.heightAt(t,e)){if(n<kn-1)return"ocean";const s=this.climateNoise.fbm2(t/400,e/400,2);return s<-.35||n>=qu?"snowy":s>.4?"desert":this.forestNoise.fbm2(t/120,e/120,2)>.1?"forest":"plains"}generate(t,e){const n=new fn(t,e),s=t*ht,r=e*ht;for(let a=0;a<ht;a++)for(let c=0;c<ht;c++){const l=s+c,h=r+a,u=this.heightAt(l,h),d=this.biomeAt(l,h,u),f=u<=kn+1&&d!=="snowy";let g,_;d==="ocean"?(g=u<kn-6?ue.gravel:ue.sand,_=g):d==="desert"||f?(g=ue.sand,_=ue.sand):d==="snowy"?(g=ue.snowyGrass,_=ue.dirt):(g=ue.grass,_=ue.dirt);for(let m=0;m<=u;m++){let p;m===0||m<=2&&Rn(this.seed,l,m,h)<.5?p=ue.bedrock:m===u?p=g:m>=u-3?p=_:p=this.oreAt(l,m,h),n.set(c,m,a,p)}for(let m=u+1;m<=kn;m++)n.set(c,m,a,ue.water);if(g===ue.grass&&u>kn){const m=Rn(this.seed,l,1e3,h);m<.08?n.set(c,u+1,a,ue.tallGrass):m<.09?n.set(c,u+1,a,ue.dandelion):m<.1&&n.set(c,u+1,a,ue.poppy)}}const o=2;for(let a=r-o;a<r+ht+o;a++)for(let c=s-o;c<s+ht+o;c++)this.maybeTree(n,c,a);return n}oreAt(t,e,n){const s=Rn(this.seed^47,t,e,n);return e<14&&s<.0015?ue.diamond:e<28&&s<.004?ue.gold:e<48&&s<.011?ue.iron:s<.022?ue.coal:ue.stone}maybeTree(t,e,n){const s=this.heightAt(e,n);if(s<=kn)return;const r=this.biomeAt(e,n,s),o=r==="forest"?.04:r==="plains"?.006:r==="snowy"?.008:0;if(Rn(this.seed,e,2e3,n)>=o||Rn(this.seed,e+1,2e3,n)<o||Rn(this.seed,e,2e3,n+1)<o)return;const a=r!=="snowy"&&Rn(this.seed,e,3e3,n)<.3,c=a?ue.birchLog:ue.oakLog,l=a?ue.birchLeaves:ue.oakLeaves,h=4+Math.floor(Rn(this.seed,e,4e3,n)*3),u=s+h,d=(f,g,_,m,p)=>{const b=f-t.cx*ht,S=_-t.cz*ht;if(b<0||S<0||b>=ht||S>=ht||g<0||g>=de)return;const y=t.get(b,g,S);(p||y===0||y===ue.tallGrass)&&t.set(b,g,S,m)};for(let f=-2;f<=1;f++){const g=f<=-1?2:1;for(let _=-g;_<=g;_++)for(let m=-g;m<=g;m++)Math.abs(m)===g&&Math.abs(_)===g&&(f===1||Rn(this.seed,e+m,u+f,n+_)<.5)||d(e+m,u+f,n+_,l,!1)}d(e,s,n,ue.dirt,!0);for(let f=s+1;f<=u-1;f++)d(e,f,n,c,!0)}}const oo=256,al=64,Zu={wooden:{tier:1,speed:2,durability:59,attack:{sword:5,axe:4,pickaxe:3,shovel:2}},stone:{tier:2,speed:4,durability:131,attack:{sword:6,axe:5,pickaxe:4,shovel:3}},iron:{tier:3,speed:6,durability:250,attack:{sword:7,axe:6,pickaxe:5,shovel:4}}},ju={wooden:"Wooden",stone:"Stone",iron:"Iron"},Ju={pickaxe:"Pickaxe",axe:"Axe",shovel:"Shovel",sword:"Sword"};function Ol(i,t){const e=Zu[i],n=`${i}_${t}`;return{name:n,displayName:`${ju[i]} ${Ju[t]}`,maxStack:1,icon:`item_${n}`,tool:{kind:t,material:i,tier:e.tier,speed:e.speed,durability:e.durability,attack:e.attack[t]}}}function $e(i,t,e){return{name:i,displayName:t,maxStack:al,icon:`item_${i}`,...e?{food:e}:{}}}const Bl=["pickaxe","axe","shovel","sword"],Qu=[{name:"stick",displayName:"Stick",maxStack:al,icon:"item_stick"},...["wooden","stone"].flatMap(i=>Bl.map(t=>Ol(i,t))),$e("coal","Coal"),$e("charcoal","Charcoal"),$e("iron_ingot","Iron Ingot"),$e("gold_ingot","Gold Ingot"),$e("diamond","Diamond"),$e("raw_porkchop","Raw Porkchop",{hunger:3,saturation:1.8}),$e("cooked_porkchop","Cooked Porkchop",{hunger:8,saturation:12.8}),$e("raw_chicken","Raw Chicken",{hunger:2,saturation:1.2}),$e("cooked_chicken","Cooked Chicken",{hunger:6,saturation:7.2}),...Bl.map(i=>Ol("iron",i)),$e("rotten_flesh","Rotten Flesh",{hunger:4,saturation:.8,risk:{chance:.8,exhaustion:3}}),$e("feather","Feather"),$e("ink_sac","Ink Sac"),$e("book","Book"),{name:"book_and_quill",displayName:"Book and Quill",maxStack:1,icon:"item_book_and_quill"},{name:"written_book",displayName:"Written Book",maxStack:1,icon:"item_written_book"}],Es=Qu.map((i,t)=>({...i,id:oo+t})),td=new Map(Es.map(i=>[i.name,i]));function pi(i){return i>=oo}function qs(i){const t=Es[i-oo];if(!t)throw new Error(`Unknown item id ${i}`);return t}function Ks(i){const t=td.get(i);if(!t)throw new Error(`Unknown item "${i}"`);return t.id}function Vn(i){const t=Me.find(e=>e.name===i);return t?t.id:Ks(i)}function ll(i){return typeof i!="number"||!Number.isInteger(i)||i<0?!1:pi(i)?Es[i-oo]!==void 0:Me[i]!==void 0}function pn(i){return pi(i)?qs(i).displayName:Xe(i).displayName}function He(i){return pi(i)?qs(i).maxStack:al}function Ih(i){return i==null||!pi(i)?null:qs(i).food??null}const ed={coal_ore:"coal",diamond_ore:"diamond",bookshelf:"book"},nd={bookshelf:3};function Uh(i){return nd[Xe(i).name]??1}function Nh(i){const t=Xe(i),e=ed[t.name];return e?Ks(e):t.drop??t.id}function Ui(i){return i==null||!pi(i)?null:qs(i).tool??null}function id(){return Es.map(i=>i.icon)}const Sn=9,la=36;class qr{slots=new Array(la).fill(null);selected=0;selectedStack(){return this.slots[this.selected]}select(t){this.selected=(t%Sn+Sn)%Sn}scroll(t){this.select(this.selected+Math.sign(t))}add(t,e=1){return this.addStack({id:t,count:e})}addStack(t){const e=He(t.id);let n=t.count;if(e>1)for(const s of this.slots){if(n===0)break;if(s&&s.id===t.id&&s.count<e){const r=Math.min(e-s.count,n);s.count+=r,n-=r}}for(let s=0;s<this.slots.length&&n>0;s++)if(!this.slots[s]){const r=Math.min(e,n),o={id:t.id,count:r};t.damage&&(o.damage=t.damage),t.book&&(o.book={...t.book,pages:[...t.book.pages]}),this.slots[s]=o,n-=r}return n}damageSelected(t=1){const e=this.slots[this.selected],n=Ui(e?.id);return!e||!n?!1:(e.damage=(e.damage??0)+t,e.damage>=n.durability?(this.slots[this.selected]=null,!0):!1)}takeSelected(){const t=this.slots[this.selected];return t?(t.count--,t.count<=0&&(this.slots[this.selected]=null),t.id):null}pick(t){const e=this.slots.findIndex((n,s)=>s<Sn&&n?.id===t);if(e>=0){this.selected=e;return}this.slots[this.selected]={id:t,count:1}}setSlot(t,e){this.slots[t]=e?{...e}:null}spaceFor(t){const e=He(t);return this.slots.reduce((n,s)=>n+(s?s.id===t&&e>1?e-s.count:0:e),0)}swap(t,e){const n=this.slots[t];this.slots[t]=this.slots[e],this.slots[e]=n}toJSON(){return{slots:this.slots.map(t=>t?{...t}:null),selected:this.selected}}static fromJSON(t){const e=new qr;return!t||!Array.isArray(t.slots)||(t.slots.slice(0,la).forEach((n,s)=>{if(!n||!ll(n.id)||!(n.count>0))return;const r=He(n.id),o={id:n.id,count:Math.min(n.count,r)};Ui(n.id)&&n.damage&&(o.damage=n.damage),n.book&&typeof n.book=="object"&&Array.isArray(n.book.pages)&&(o.book={pages:n.book.pages.map(String).slice(0,50)},typeof n.book.title=="string"&&(o.book.title=n.book.title),typeof n.book.author=="string"&&(o.book.author=n.book.author)),e.setSlot(s,o)}),e.select(Number.isInteger(t.selected)?t.selected:0)),e}}function zl(i,t){const e=Math.cos(t);return{x:-Math.sin(i)*e,y:Math.sin(t),z:-Math.cos(i)*e}}class Hl{positions=[];normals=[];uvs=[];colors=[];indices=[];vertexCount(){return this.positions.length/3}build(){return{positions:new Float32Array(this.positions),normals:new Float32Array(this.normals),uvs:new Float32Array(this.uvs),colors:new Float32Array(this.colors),indices:new Uint32Array(this.indices)}}}const sd=[{dir:[1,0,0],corners:[[1,0,1],[1,0,0],[1,1,0],[1,1,1]],shade:.6,key:"side"},{dir:[-1,0,0],corners:[[0,0,0],[0,0,1],[0,1,1],[0,1,0]],shade:.6,key:"side"},{dir:[0,1,0],corners:[[0,1,1],[1,1,1],[1,1,0],[0,1,0]],shade:1,key:"top"},{dir:[0,-1,0],corners:[[0,0,0],[1,0,0],[1,0,1],[0,0,1]],shade:.5,key:"bottom"},{dir:[0,0,1],corners:[[0,0,1],[1,0,1],[1,1,1],[0,1,1]],shade:.8,key:"side"},{dir:[0,0,-1],corners:[[1,0,0],[0,0,0],[0,1,0],[1,1,0]],shade:.8,key:"side"}],rd=[1,.78,.62,.5],Gl=Kt("water"),Vl=.875,zi=ht+2;function od(i,t,e,n){const s=new Uint8Array(zi*zi*de),r=new Uint8Array(zi*zi*de),o=(d,f,g)=>(f*zi+(g+1))*zi+(d+1);for(let d=-1;d<=1;d++)for(let f=-1;f<=1;f++){const g=i.getChunk(t+f,e+d),_=f===-1?ht-1:0,m=f===1?1:ht,p=d===-1?ht-1:0,b=d===1?1:ht;for(let S=0;S<de;S++)for(let y=p;y<b;y++)for(let U=_;U<m;U++){const w=o(U+f*ht,S,y+d*ht);s[w]=g.get(U,S,y),r[w]=g.light[(S*ht+y)*ht+U]}}const a=(d,f,g)=>f<0||f>=de?Ue:s[o(d,f,g)],c=(d,f,g)=>f>=de?240:f<0?0:r[o(d,f,g)],l=(d,f,g)=>hi(a(d,f,g)),h=new Hl,u=new Hl;for(let d=0;d<de;d++)for(let f=0;f<ht;f++)for(let g=0;g<ht;g++){const _=a(g,d,f);if(_===Ue)continue;const m=Me[_];if(m.shape==="none")continue;if(m.shape==="cross"||m.shape==="torch"){cd(h,g,d,f,n(m.faces.side),m.shape==="torch"?0:.15,m.emissive?255:c(g,d,f));continue}const p=m.shape==="liquid",b=p?u:h,S=m.emissive===!0;for(const y of sd){const U=g+y.dir[0],w=d+y.dir[1],A=f+y.dir[2],P=a(U,w,A);if(hi(P)||P===_&&m.transparent&&!m.name.endsWith("leaves")||p&&P===Gl||w<0)continue;const E=p&&a(g,d+1,f)!==Gl,M=S?255:c(U,w,A);ad(b,y,g,d,f,n(m.faces[y.key]),S?null:l,E,M)}}return{solid:h.build(),liquid:u.build()}}function ad(i,t,e,n,s,r,o,a,c){const l=(c>>4)/15,h=(c&15)/15,[u,d,f,g]=r,_=[[u,d],[f,d],[f,g],[u,g]],[m,p,b]=t.dir,S=i.vertexCount(),y=[];for(let U=0;U<4;U++){const w=t.corners[U];let A=w[1];a&&A===1&&(A=Vl),i.positions.push(e+w[0],n+A,s+w[2]),i.normals.push(m,p,b);let P=_[U][1];a&&t.key==="side"&&w[1]===1&&(P=d+(g-d)*Vl),i.uvs.push(_[U][0],P);const E=o?ld(o,t,e,n,s,w):0;y.push(E);const M=(o?t.shade:1)*rd[E];i.colors.push(M,l,h)}y[0]+y[2]>y[1]+y[3]?i.indices.push(S+1,S+2,S+3,S+1,S+3,S):i.indices.push(S,S+1,S+2,S,S+2,S+3)}function ld(i,t,e,n,s,r){const o=t.dir[0]!==0?0:t.dir[1]!==0?1:2,a=(o+1)%3,c=(o+2)%3,l=[e+t.dir[0],n+t.dir[1],s+t.dir[2]],h=[0,0,0],u=[0,0,0];h[a]=r[a]*2-1,u[c]=r[c]*2-1;const d=i(l[0]+h[0],l[1]+h[1],l[2]+h[2]),f=i(l[0]+u[0],l[1]+u[1],l[2]+u[2]);if(d&&f)return 3;const g=i(l[0]+h[0]+u[0],l[1]+h[1]+u[1],l[2]+h[2]+u[2]);return(d?1:0)+(f?1:0)+(g?1:0)}function cd(i,t,e,n,s,r,o){const[a,c,l,h]=s,u=(o>>4)/15,d=(o&15)/15,f=[[r,r,1-r,1-r],[1-r,r,r,1-r]];for(const[g,_,m,p]of f)for(const b of[!1,!0]){const S=i.vertexCount(),y=[[g,0,_,a,c],[m,0,p,l,c],[m,1,p,l,h],[g,1,_,a,h]],U=-(p-_)*(b?-1:1),w=(m-g)*(b?-1:1);for(const[A,P,E,M,C]of y)i.positions.push(t+A,e+P,n+E),i.normals.push(U,0,w),i.uvs.push(M,C),i.colors.push(.9,u,d);b?i.indices.push(S,S+2,S+1,S,S+3,S+2):i.indices.push(S,S+1,S+2,S,S+2,S+3)}}const kh=.6,Fh=1.8,ca=1.62,hd=4.317,ud=5.612,dd=1.3,_o=10.9,ha=32,ua=8.9,fd=2.2,pd=Kt("water");function md(i){return{position:{...i},velocity:{x:0,y:0,z:0},yaw:0,pitch:0,onGround:!1,flying:!1,inWater:!1}}function ui(i,t=kh,e=Fh){const n=t/2;return{minX:i.x-n,minY:i.y,minZ:i.z-n,maxX:i.x+n,maxY:i.y+e,maxZ:i.z+n}}function cl(i){return ui(i)}function di(i,t){for(let n=Math.floor(t.minY+1e-6);n<=Math.floor(t.maxY-1e-6);n++)for(let s=Math.floor(t.minZ+1e-6);s<=Math.floor(t.maxZ-1e-6);s++)for(let r=Math.floor(t.minX+1e-6);r<=Math.floor(t.maxX-1e-6);r++)if(Ii(i(r,n,s)))return!0;return!1}function gd(i,t,e,n){const s=cl(i);return s.maxX>t&&s.minX<t+1&&s.maxY>e&&s.minY<e+1&&s.maxZ>n&&s.minZ<n+1}function us(i,t,e,n,s=kh,r=Fh){if(n===0)return!1;const o=Math.ceil(Math.abs(n)/.45),a=n/o;for(let c=0;c<o;c++){const l=t[e];if(t[e]=l+a,di(i,ui(t,s,r))){if(a>0){const h=e==="y"?r:s/2,u=l+h+a;t[e]=Math.floor(u)-h-1e-4,t[e]<l&&(t[e]=l)}else{const h=e==="y"?0:s/2,u=l-h+a;t[e]=Math.floor(u)+1+h+1e-4,t[e]>l&&(t[e]=l)}return di(i,ui(t,s,r))&&(t[e]=l),!0}}return!1}function _d(i,t){return i(Math.floor(t.x),Math.floor(t.y+.4),Math.floor(t.z))===pd}const vd=1/60;function Oh(i){const t=Math.min(Math.max(i,0),.1),e=Math.max(1,Math.ceil(t/vd-1e-9));return{n:e,h:t/e}}function xd(i,t,e,n){const{n:s,h:r}=Oh(n);for(let o=0;o<s;o++)yd(i,t,e,r)}function yd(i,t,e,n){const s=t.position,r=t.velocity;t.inWater=!t.flying&&_d(i,s);let o=hd;t.flying?o=e.sprint?_o*2:_o:t.inWater?o=fd:e.descend?o=dd:e.sprint&&e.forward>0&&(o=ud);let a=e.forward,c=e.strafe;const l=Math.hypot(a,c);l>1&&(a/=l,c/=l);const h=Math.sin(t.yaw),u=Math.cos(t.yaw),d=-h*a+u*c,f=-u*a-h*c,g=t.onGround||t.flying?20:t.inWater?8:6,_=1-Math.exp(-g*n);if(r.x+=(d*o-r.x)*_,r.z+=(f*o-r.z)*_,t.flying){const E=(e.jump?1:0)-(e.descend?1:0);r.y+=(E*_o*.75-r.y)*_}else t.inWater&&(r.y-=ha*.25*n,e.jump&&(r.y=Math.min(r.y+30*n,3.5)),r.y=Math.max(r.y,-4));let m=r.y;if(!t.flying&&!t.inWater){e.jump&&t.onGround&&(r.y=ua);const E=r.y;r.y=Math.max(r.y-ha*n,-78.4),m=(E+r.y)/2}const p=t.onGround,b=e.descend&&p&&!t.flying,S=s.x,y=s.z,U=us(i,s,"x",r.x*n);U&&(r.x=0),b&&!Wl(i,s)&&(s.x=S);const w=us(i,s,"z",r.z*n);w&&(r.z=0),b&&!Wl(i,s)&&(s.z=y);const A=m,P=us(i,s,"y",m*n);if(t.onGround=P&&A<0,P&&(r.y=0),t.onGround&&t.flying&&(t.flying=!1),e.autoJump&&p&&(U||w)&&!t.flying&&l>.2){const E={x:s.x+d*.4,y:s.y+1.05,z:s.z+f*.4};di(i,cl(E))||(r.y=ua)}}function Wl(i,t){const e=cl(t);return di(i,{...e,minY:e.minY-.1,maxY:e.minY})}function Md(i,t){const e=t.position;return Xe(i(Math.floor(e.x),Math.floor(e.y+ca),Math.floor(e.z))).name}function Sd(i,t,e,n,s){const r=Math.hypot(e.x,e.y,e.z);if(r===0)return null;const o=e.x/r,a=e.y/r,c=e.z/r;let l=Math.floor(t.x),h=Math.floor(t.y),u=Math.floor(t.z);const d=o>0?1:o<0?-1:0,f=a>0?1:a<0?-1:0,g=c>0?1:c<0?-1:0,_=d!==0?Math.abs(1/o):1/0,m=f!==0?Math.abs(1/a):1/0,p=g!==0?Math.abs(1/c):1/0,b=(P,E)=>E>0?Math.floor(P)+1-P:P-Math.floor(P);let S=d!==0?b(t.x,d)*_:1/0,y=f!==0?b(t.y,f)*m:1/0,U=g!==0?b(t.z,g)*p:1/0;const w={x:0,y:0,z:0};let A=0;for(;A<=n;){const P=i(l,h,u);if(s(P))return{x:l,y:h,z:u,id:P,normal:{...w},distance:A};S<y&&S<U?(l+=d,A=S,S+=_,w.x=-d,w.y=0,w.z=0):y<U?(h+=f,A=y,y+=m,w.x=0,w.y=-f,w.z=0):(u+=g,A=U,U+=p,w.x=0,w.y=0,w.z=-g)}return null}const bd=Kt("allow"),Ed=Kt("deny"),Bh=Kt("water");function hl(i,t,e,n,s){if(t==="creative")return!0;for(let r=n-1;r>=0;r--){const o=i.getBlock(e,r,s);if(o===bd)return!0;if(o===Ed)return!1}return!0}function ul(i,t,e,n,s){const r=i.getBlock(e,n,s);return r===Ue||r===Bh||t==="survival"&&!Number.isFinite(Xe(r).hardness)?!1:hl(i,t,e,n,s)}const Td=5/1.5;function zh(i,t){const e=Xe(i).harvestTier;return e?t!==null&&t.kind==="pickaxe"&&t.tier>=e:!0}function wd(i,t,e=null){if(i==="creative")return 0;const n=Xe(t),s=e&&n.tool===e.kind?e.speed:1;return n.hardness*(zh(t,e)?1:Td)/s}function Ad(i,t,e,n,s,r){if(!ul(i,e,n,s,r))return!1;const o=i.getBlock(n,s,r),a=Ui(t.selectedStack()?.id);i.setBlock(n,s,r,Ue),e==="survival"&&(zh(o,a)&&t.add(Nh(o),Uh(o)),a&&Xe(o).hardness>0&&t.damageSelected(1));const c=i.getBlock(n,s+1,r);return Me[c]?.needsSupport&&(i.setBlock(n,s+1,r,Ue),e==="survival"&&t.add(c,1)),!0}function Cd(i,t,e,n,s,r,o){const a=t.selectedStack();if(!a||pi(a.id))return!1;const c=i.getBlock(n,s,r);if(c!==Ue&&c!==Bh&&!Me[c].needsSupport)return!1;const l=Xe(a.id);if(l.solid&&gd(o,n,s,r))return!1;if(l.needsSupport){const h=Xe(i.getBlock(n,s-1,r));if(!h.solid||h.transparent)return!1}return l.shape==="torch"&&![[0,-1,0],[1,0,0],[-1,0,0],[0,0,1],[0,0,-1]].some(([u,d,f])=>hi(i.getBlock(n+u,s+d,r+f)))||!hl(i,e,n,s,r)?!1:(i.setBlock(n,s,r,a.id),e==="survival"&&t.takeSelected(),!0)}const da=1;function Rd(i){return JSON.stringify({version:da,...i})}const Ds=i=>typeof i=="object"&&i!==null&&!Array.isArray(i)&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null),qt=(i,t)=>Object.prototype.hasOwnProperty.call(i,t)?i[t]:void 0,gi=i=>typeof i=="number"&&Number.isFinite(i);function Pd(i){let t;try{t=JSON.parse(i)}catch{throw new Error("Save is not valid JSON")}if(!Ds(t))throw new Error("Malformed save data");const e=qt(t,"version");if(e!==da)throw new Error(`Unsupported save version ${String(e)}`);const n=qt(t,"seed");if(!gi(n))throw new Error("Malformed save data: missing seed");const s=qt(t,"name"),r=qt(t,"mode"),o=qt(t,"timeOfDay"),a=Ds(qt(t,"player"))?qt(t,"player"):{},c=Ds(qt(a,"position"))?qt(a,"position"):{},l=gi(qt(c,"x"))&&gi(qt(c,"y"))&&gi(qt(c,"z"))?{x:qt(c,"x"),y:Math.max(-10,Math.min(500,qt(c,"y"))),z:qt(c,"z")}:null,h=Ds(qt(t,"inventory"))?qt(t,"inventory"):{},u=Ds(qt(t,"gamerules"))?qt(t,"gamerules"):{},d=(g,_)=>typeof g=="boolean"?g:_,f={version:da,name:typeof s=="string"&&s.trim()!==""?s.slice(0,64):"Untitled World",seed:n,mode:r==="survival"?"survival":"creative",timeOfDay:gi(o)?o>=0&&o<1?o:(o%1+1)%1:.05,player:{position:l,yaw:gi(qt(a,"yaw"))?qt(a,"yaw"):0,pitch:gi(qt(a,"pitch"))?Math.max(-1.57,Math.min(1.57,qt(a,"pitch"))):0,flying:d(qt(a,"flying"),!1)},inventory:{slots:Array.isArray(qt(h,"slots"))?qt(h,"slots"):[],selected:Number.isInteger(qt(h,"selected"))?qt(h,"selected"):0},edits:Array.isArray(qt(t,"edits"))?qt(t,"edits"):[],gamerules:{doMobSpawning:d(qt(u,"doMobSpawning"),!0),doDaylightCycle:d(qt(u,"doDaylightCycle"),!0)}};for(const g of["npcs","hunger","agent","programs","chalkboards","furnaces"]){const _=qt(t,g);_!==void 0&&(f[g]=_)}return f}const Ld=1200,Dd=[.47,.65,1],Id=[.98,.55,.32],Ud=[.02,.03,.08];function Xl(i,t,e){return[i[0]+(t[0]-i[0])*e,i[1]+(t[1]-i[1])*e,i[2]+(t[2]-i[2])*e]}function vo(i){const e=(i%1+1)%1*Math.PI*2,n=Math.sin(e),s=Math.min(1,Math.max(0,(n+.15)/.45));let r=Xl(Ud,Dd,s);const o=Math.max(0,1-Math.abs(n)/.25)*(s>0?1:.4);return r=Xl(r,Id,o*.6),{sky:r,light:.2+.8*s,sunAngle:e}}const En=15;function ds(i){return Me[i]?.light??0}function dl(i){return i>>4}function Nd(i){return i&15}const Kr=(i,t)=>t==="sky"?i>>4:i&15,fs=(i,t,e)=>t==="sky"?i&15|e<<4:i&240|e,fl=[[1,0,0],[-1,0,0],[0,0,1],[0,0,-1],[0,1,0],[0,-1,0]];function fa(i,t,e){const n=t;for(let s=0;s<n.length;s+=3){const r=n[s],o=n[s+1],a=n[s+2],c=Kr(i.get(r,o,a),e);if(!(c<=1))for(const[l,h,u]of fl){const d=r+l,f=o+h,g=a+u;if(f<0||f>=de)continue;const _=i.get(d,f,g);if(_<0||hi(i.block(d,f,g)))continue;const m=e==="sky"&&h===-1&&c===En?En:c-1;Kr(_,e)>=m||(i.set(d,f,g,fs(_,e,m)),n.push(d,f,g))}}}function kd(i,t,e,n,s,r){const o=[],a=[t,e,n,s];for(let c=0;c<a.length;c+=4){const l=a[c],h=a[c+1],u=a[c+2],d=a[c+3];for(const[f,g,_]of fl){const m=l+f,p=h+g,b=u+_;if(p<0||p>=de)continue;const S=i.get(m,p,b);if(S<0)continue;const y=Kr(S,r);if(y===0)continue;(y<d||r==="sky"&&g===-1&&d===En&&y===En)&&ds(i.block(m,p,b))<y?(i.set(m,p,b,fs(S,r,0)),a.push(m,p,b,y),r==="block"&&ds(i.block(m,p,b))>0&&(i.set(m,p,b,fs(i.get(m,p,b),r,ds(i.block(m,p,b)))),o.push(m,p,b))):o.push(m,p,b)}}return o}function Fd(i,t,e,n){const s=i.block(t,e,n);for(const r of["block","sky"]){const o=i.get(t,e,n);if(o<0)return;const a=Kr(o,r);i.set(t,e,n,fs(o,r,0));const c=a>0?kd(i,t,e,n,a,r):[];if(r==="block"&&ds(s)>0&&(i.set(t,e,n,fs(i.get(t,e,n),r,ds(s))),c.push(t,e,n)),!hi(s)){r==="sky"&&(e===de-1||dl(Math.max(0,i.get(t,e+1,n)))===En)&&(i.set(t,e,n,fs(i.get(t,e,n),r,En)),c.push(t,e,n));for(const[l,h,u]of fl){const d=e+h;d<0||d>=de||i.get(t+l,d,n+u)>0&&c.push(t+l,d,n+u)}}fa(i,c,r)}}class Od{constructor(t){this.seed=t,this.generator=new Ku(t)}generator;chunks=new Map;edits=new Map;listeners=new Set;blockListeners=new Set;lightTouched=new Set;lastPeek;lightAccess={get:(t,e,n)=>{const s=this.peek(t,n);return s?s.light[fn.index(en(t),e,en(n))]:-1},set:(t,e,n,s)=>{const r=this.peek(t,n);r&&(r.light[fn.index(en(t),e,en(n))]=s,this.lightTouched.add(Zn(r.cx,r.cz)))},block:(t,e,n)=>this.peek(t,n)?.get(en(t),e,en(n))??Ue};hasChunk(t,e){return this.chunks.has(Zn(t,e))}getChunk(t,e){const n=Zn(t,e);let s=this.chunks.get(n);if(!s){s=this.generator.generate(t,e);const r=this.edits.get(n);if(r)for(const[o,a]of r)s.blocks[o]=a;this.chunks.set(n,s),this.lightChunk(s)}return s}peek(t,e){const n=sn(t),s=sn(e),r=this.lastPeek;if(r&&r.cx===n&&r.cz===s)return r;const o=this.chunks.get(Zn(n,s));return o&&(this.lastPeek=o),o}getLight(t,e,n){if(e>=de)return En<<4;if(e<0)return 0;const s=this.peek(Math.floor(t),Math.floor(n));return s?s.light[fn.index(en(t),Math.floor(e),en(n))]:En<<4}lightChunk(t){const e=t.cx*ht,n=t.cz*ht,s=new Int16Array(ht*ht),r=[],o=[];for(let l=0;l<ht;l++)for(let h=0;h<ht;h++){let u=de-1;for(;u>=0&&!hi(t.blocks[fn.index(h,u,l)]);u--)t.light[fn.index(h,u,l)]=En<<4;s[l*ht+h]=u+1}for(let l=0;l<t.blocks.length;l++){const h=ds(t.blocks[l]);if(h===0)continue;t.light[l]=t.light[l]&240|h;const u=l%ht,d=Math.floor(l/ht)%ht;o.push(e+u,Math.floor(l/(ht*ht)),n+d)}const a=(l,h)=>l<0||h<0||l>=ht||h>=ht?-1:s[h*ht+l];for(let l=0;l<ht;l++)for(let h=0;h<ht;h++){const u=a(h,l),d=Math.max(a(h+1,l),a(h-1,l),a(h,l+1),a(h,l-1));for(let f=u;f<d;f++)r.push(e+h,f,n+l)}for(const[l,h]of[[1,0],[-1,0],[0,1],[0,-1]]){const u=this.chunks.get(Zn(t.cx+l,t.cz+h));if(!u)continue;const d=l===1?0:l===-1?ht-1:-1,f=h===1?0:h===-1?ht-1:-1;for(let g=0;g<ht;g++){const _=d>=0?d:g,m=f>=0?f:g;for(let p=0;p<de;p++){const b=u.light[fn.index(_,p,m)];if(b===0)continue;const S=u.cx*ht+_,y=u.cz*ht+m;b>>4>1&&r.push(S,p,y),(b&15)>1&&o.push(S,p,y)}}}this.lightTouched.clear(),fa(this.lightAccess,r,"sky"),fa(this.lightAccess,o,"block");const c=Zn(t.cx,t.cz);for(const l of this.lightTouched){if(l===c)continue;const[h,u]=l.split(",").map(Number);this.emit(h,u)}this.lightTouched.clear()}unloadChunk(t,e){this.chunks.delete(Zn(t,e))}loadedChunkCount(){return this.chunks.size}getBlock(t,e,n){return e<0||e>=de?Ue:this.getChunk(sn(t),sn(n)).get(en(t),Math.floor(e),en(n))}setBlock(t,e,n,s){if(t=Math.floor(t),e=Math.floor(e),n=Math.floor(n),e<0||e>=de)return;const r=sn(t),o=sn(n),a=en(t),c=en(n),l=this.getChunk(r,o);if(l.get(a,e,c)===s)return;l.set(a,e,c,s);const h=Zn(r,o);let u=this.edits.get(h);u||this.edits.set(h,u=new Map),u.set(fn.index(a,e,c),s),this.lightTouched.clear(),Fd(this.lightAccess,t,e,n);for(const d of this.lightTouched){if(d===h)continue;const[f,g]=d.split(",").map(Number);this.emit(f,g)}this.lightTouched.clear();for(const d of this.blockListeners)d(t,e,n,s);this.emit(r,o),a===0&&this.emit(r-1,o),a===ht-1&&this.emit(r+1,o),c===0&&this.emit(r,o-1),c===ht-1&&this.emit(r,o+1)}onBlockChanged(t){return this.blockListeners.add(t),()=>this.blockListeners.delete(t)}onChunkChanged(t){return this.listeners.add(t),()=>this.listeners.delete(t)}exportEdits(){const t=[];for(const[e,n]of this.edits){const[s,r]=e.split(",").map(Number);for(const[o,a]of n){const c=o%ht,l=Math.floor(o/ht)%ht,h=Math.floor(o/(ht*ht));t.push([s*ht+c,h,r*ht+l,a])}}return t}importEdits(t){for(const[e,n,s,r]of t)this.setBlock(e,n,s,r)}surfaceY(t,e,n){for(let s=de-1;s>=0;s--)if(n(this.getBlock(t,s,e)))return s;return-1}emit(t,e){for(const n of this.listeners)n(t,e)}}const ir=24e3,Yl={day:1e3,noon:6e3,sunset:12e3,night:13e3,midnight:18e3,sunrise:23e3},Bd=["/gamemode <creative|survival>","/time set <day|noon|night|midnight|ticks>","/tp <x> <y> <z>  (~ for relative)","/give <block|item> [count]","/summon <pig|sheep|chicken|zombie|npc> [name]","/gamerule <doMobSpawning|doDaylightCycle> <true|false>","/seed","/agent tp  (bring your Agent to you)","/code <name>  (run a Code Builder program by its chat command)"];function zd(i){const t=i.trim().replace(/^\//,"").split(/\s+/).filter(Boolean),[e,...n]=t;switch(e?.toLowerCase()){case"gamemode":case"gm":switch((n[0]??"").toLowerCase()){case"creative":case"c":case"1":return{type:"gamemode",mode:"creative"};case"survival":case"s":case"0":return{type:"gamemode",mode:"survival"};default:return{type:"error",message:"Usage: /gamemode <creative|survival>"}}case"time":{if(n[0]!=="set"||n[1]===void 0)return{type:"error",message:"Usage: /time set <day|night|ticks>"};const s=n[1].toLowerCase(),r=Object.prototype.hasOwnProperty.call(Yl,s)?Yl[s]:Number(n[1]);return Number.isFinite(r)?{type:"time",timeOfDay:(r%ir+ir)%ir/ir}:{type:"error",message:`Invalid time "${n[1]}"`}}case"tp":case"teleport":{if(n.length!==3)return{type:"error",message:"Usage: /tp <x> <y> <z>"};const s=n.map(o=>o.startsWith("~")),r=n.map(o=>o.startsWith("~")?Number(o.slice(1)||"0"):Number(o));return r.some(o=>!Number.isFinite(o))?{type:"error",message:"Coordinates must be numbers"}:{type:"tp",x:r[0],y:r[1],z:r[2],relative:s}}case"give":{const s=(n[0]??"").toLowerCase().replace(/^minecraft:/,""),r=Me.find(a=>a.name===s&&a.creative)??Es.find(a=>a.name===s);if(!r)return{type:"error",message:`Unknown block or item "${n[0]??""}"`};const o=n[1]===void 0?1:Number(n[1]);return!Number.isInteger(o)||o<1||o>2304?{type:"error",message:"Count must be 1-2304"}:{type:"give",id:r.id,count:o}}case"agent":return n[0]===void 0||n[0]==="tp"||n[0]==="summon"?{type:"agent",action:"tp"}:{type:"error",message:"Usage: /agent tp"};case"code":return n[0]?{type:"code",command:n[0].toLowerCase()}:{type:"error",message:"Usage: /code <name>"};case"summon":{const s=(n[0]??"").toLowerCase().replace(/^minecraft:/,"");if(s!=="pig"&&s!=="sheep"&&s!=="chicken"&&s!=="npc"&&s!=="zombie")return{type:"error",message:"Usage: /summon <pig|sheep|chicken|zombie|npc> [name]"};const r=n.slice(1).join(" ").trim();return r?{type:"summon",kind:s,name:r}:{type:"summon",kind:s}}case"gamerule":{const s=n[0]==="doMobSpawning"||n[0]==="doDaylightCycle"?n[0]:null,r=n[1]==="true"?!0:n[1]==="false"?!1:null;return!s||r===null?{type:"error",message:"Usage: /gamerule <doMobSpawning|doDaylightCycle> <true|false>"}:{type:"gamerule",rule:s,value:r}}case"seed":return{type:"seed"};case"help":case"?":return{type:"help"};default:return{type:"error",message:`Unknown command "${e??""}". Type /help`}}}function xo(i,t){const e={"#":t,"|":"stick"};return[{id:`${i}_pickaxe`,pattern:["###"," | "," | "],key:e,result:[`${i}_pickaxe`,1]},{id:`${i}_axe`,pattern:["##","#|"," |"],key:e,result:[`${i}_axe`,1]},{id:`${i}_shovel`,pattern:["#","|","|"],key:e,result:[`${i}_shovel`,1]},{id:`${i}_sword`,pattern:["#","#","|"],key:e,result:[`${i}_sword`,1]}]}const Hd=[{id:"stick",pattern:["#","#"],key:{"#":"oak_planks"},result:["stick",4]},...xo("wooden","oak_planks"),...xo("stone","cobblestone"),...xo("iron","iron_ingot"),{id:"torch",pattern:["C","|"],key:{C:"coal","|":"stick"},result:["torch",4]},{id:"torch_from_charcoal",pattern:["C","|"],key:{C:"charcoal","|":"stick"},result:["torch",4]},{id:"ink_sac",ingredients:["coal"],result:["ink_sac",1],note:"Minecraft gets ink sacs from squids (not modelled)"},{id:"book_and_quill",ingredients:["book","ink_sac","feather"],result:["book_and_quill",1]},{id:"furnace",pattern:["###","# #","###"],key:{"#":"cobblestone"},result:["furnace",1]},{id:"oak_planks",ingredients:["oak_log"],result:["oak_planks",4]},{id:"oak_planks_from_birch",ingredients:["birch_log"],result:["oak_planks",4],note:"Minecraft yields birch planks"},{id:"crafting_table",pattern:["##","##"],key:{"#":"oak_planks"},result:["crafting_table",1]},{id:"bookshelf",pattern:["###","LLL","###"],key:{"#":"oak_planks",L:"oak_log"},result:["bookshelf",1],note:"Minecraft uses books instead of logs"},{id:"snow_block",pattern:["##","##"],key:{"#":"snow"},result:["snow",1],note:"Minecraft uses snowballs"},{id:"yellow_wool",ingredients:["dandelion","white_wool"],result:["yellow_wool",1],note:"dandelion stands in for yellow dye"},{id:"red_wool",ingredients:["poppy","white_wool"],result:["red_wool",1],note:"poppy stands in for red dye"},{id:"glowstone",pattern:["##","##"],key:{"#":"gold_ore"},result:["glowstone",1],note:"Minecraft uses glowstone dust"}];function Gd(i,t){const e=[];for(let l=0;l<i.length/t;l++)e.push(i.slice(l*t,l*t+t).map(h=>h?.id??0));const n=e.map(l=>l.some(h=>h!==0)),s=Array.from({length:t},(l,h)=>e.some(u=>u[h]!==0)),r=n.indexOf(!0),o=n.lastIndexOf(!0),a=s.indexOf(!0),c=s.lastIndexOf(!0);return r<0?[]:e.slice(r,o+1).map(l=>l.slice(a,c+1))}function Vd(i,t){const e=i.pattern;if(e.length!==t.length||e[0].length!==t[0].length)return!1;const n=o=>o===" "?0:Vn(i.key[o]),s=e.every((o,a)=>[...o].every((c,l)=>n(c)===t[a][l])),r=e.every((o,a)=>[...o].every((c,l)=>n(c)===t[a][o.length-1-l]));return s||r}function Wd(i,t){const e=t.filter(s=>s!==null).map(s=>s.id).sort((s,r)=>s-r),n=i.ingredients.map(Vn).sort((s,r)=>s-r);return e.length===n.length&&e.every((s,r)=>s===n[r])}function pa(i,t){const e=Gd(i,t);if(e.length===0)return null;for(const n of Hd)if(n.pattern?Vd(n,e):Wd(n,i))return{recipe:n,result:{id:Vn(n.result[0]),count:n.result[1]}};return null}function Xd(i,t){const e=pa(i,t);if(!e)return null;for(let n=0;n<i.length;n++){const s=i[n];s&&(s.count--,s.count<=0&&(i[n]=null))}return e.result}const Yd=new Set(Me.filter(i=>i.name.endsWith("_log")||i.name.endsWith("_leaves")).map(i=>i.id));function as(i,t,e,n,s){for(let r=0;r<s;r++)if(Ii(i(t,e+r,n)))return!1;return!0}function Vs(i,t,e,n,s=2){return Ii(i(t,e-1,n))&&as(i,t,e,n,s)}function $l(i,t,e,n,s,r){for(let o=0;o<=r;o++)if(Vs(i,t,e-o,n,s))return e-o;return null}const $d=[[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]],sr=(i,t,e)=>((i+32768)*65536+(e+32768))*128+t;class pl{constructor(t,e,n,s){this.get=t,this.height=s.height??2,this.maxDrop=s.maxDrop??3,this.radius=s.radius??24,this.maxNodes=s.maxNodes??3e3,this.sx=e.x,this.sy=e.y,this.sz=e.z,this.gx=Math.floor(n.x),this.gz=Math.floor(n.z),this.gy=$l(t,this.gx,Math.floor(n.y+.01),this.gz,this.height,this.maxDrop)??Math.floor(n.y);const r=sr(e.x,e.y,e.z);this.came.set(r,null),this.cost.set(r,0),this.best=e,this.bestH=this.h(e.x,e.y,e.z),this.heap.push({n:e,f:this.bestH})}maxNodes;expanded=0;done=!1;reached=!1;height;maxDrop;radius;sx;sy;sz;gx;gy;gz;came=new Map;cost=new Map;heap=[];best;bestH;static start(t,e,n,s={}){const r=s.height??2,o=Math.floor(e.x),a=Math.floor(e.z),c=$l(t,o,Math.floor(e.y+.01),a,r,2);return c===null?null:new pl(t,{x:o,y:c,z:a},n,s)}h(t,e,n){return Math.abs(t-this.gx)+Math.abs(n-this.gz)+Math.abs(e-this.gy)}step(t,e){const{get:n,height:s,maxDrop:r,radius:o,heap:a}=this,c=e!==void 0?performance.now():0;let l=0;for(;!this.done&&l<t&&!(e!==void 0&&(l&31)===31&&performance.now()-c>e);){if(a.length===0||this.expanded>=this.maxNodes){this.done=!0;break}const h=this.pop();this.expanded++,l++;const u=this.h(h.x,h.y,h.z);if(u<this.bestH&&(this.best=h,this.bestH=u),h.x===this.gx&&h.z===this.gz&&Math.abs(h.y-this.gy)<=1){this.best=h,this.reached=!0,this.done=!0;break}const d=this.cost.get(sr(h.x,h.y,h.z));for(const[f,g]of $d){const _=h.x+f,m=h.z+g;if(Math.abs(_-this.sx)>o||Math.abs(m-this.sz)>o)continue;const p=f!==0&&g!==0;if(p&&(!as(n,h.x+f,h.y,h.z,s)||!as(n,h.x,h.y,h.z+g,s)))continue;let b=null;if(Vs(n,_,h.y,m,s))b=h.y;else if(!p&&as(n,h.x,h.y+s,h.z,1)&&Vs(n,_,h.y+1,m,s))b=h.y+1;else if(as(n,_,h.y,m,s))for(let U=1;U<=r;U++){if(Vs(n,_,h.y-U,m,s)){b=h.y-U;break}if(!as(n,_,h.y-U,m,1))break}if(b===null)continue;const S=sr(_,b,m),y=d+(p?1.414:1)+(b>h.y?.5:0);y>=(this.cost.get(S)??1/0)||(this.cost.set(S,y),this.came.set(S,h),this.push({x:_,y:b,z:m},y+this.h(_,b,m)))}}return l}result(){const t=[];for(let e=this.best;e&&!(e.x===this.sx&&e.y===this.sy&&e.z===this.sz);e=this.came.get(sr(e.x,e.y,e.z))??null)t.push(e);return t.reverse()}push(t,e){const n=this.heap;n.push({n:t,f:e});let s=n.length-1;for(;s>0;){const r=s-1>>1;if(n[r].f<=n[s].f)break;[n[r],n[s]]=[n[s],n[r]],s=r}}pop(){const t=this.heap,e=t[0],n=t.pop();if(t.length>0){t[0]=n;let s=0;for(;;){const r=s*2+1,o=r+1;let a=s;if(r<t.length&&t[r].f<t[a].f&&(a=r),o<t.length&&t[o].f<t[a].f&&(a=o),a===s)break;[t[a],t[s]]=[t[s],t[a]],s=a}}return e.n}}function qd(i,t,e,n,s=2,r=4){const o=Math.floor(t),a=Math.floor(e),c=Math.floor(n);for(let l=0;l<=r;l++){let h=null;for(let u=-l;u<=l;u++)for(let d=-l;d<=l;d++)if(Math.max(Math.abs(u),Math.abs(d))===l)for(let f=0;f<=6;f++)for(const g of f===0?[c]:[c+f,c-f]){if(f>3&&g>c)continue;const _=i(o+u,g-1,a+d);if(!hi(_)||Yd.has(_)||!Vs(i,o+u,g,a+d,s))continue;const m=Math.hypot(u,d)+Math.abs(g-c)*.5;(!h||m<h.score)&&(h={x:o+u,y:g,z:a+d,score:m})}if(h)return{x:h.x+.5,y:h.y,z:h.z+.5}}return null}const Ee={pig:{kind:"pig",displayName:"Pig",width:.9,height:.9,maxHealth:10,speed:1.2,drop:["raw_porkchop",2]},sheep:{kind:"sheep",displayName:"Sheep",width:.9,height:1.3,maxHealth:8,speed:1.1,drop:["white_wool",1]},chicken:{kind:"chicken",displayName:"Chicken",width:.4,height:.7,maxHealth:4,speed:1,drop:["raw_chicken",1],extraDrop:["feather",1]},npc:{kind:"npc",displayName:"NPC",width:.6,height:1.9,maxHealth:1/0,speed:0},zombie:{kind:"zombie",displayName:"Zombie",width:.6,height:1.95,maxHealth:20,speed:2.3,drop:["rotten_flesh",1],hostile:!0}},mn={followRange:24,reach:1.4,damage:3,attackCooldown:1,knockback:5,knockbackUp:4,burnDamage:1},ql=["pig","sheep","chicken"];function Kd(i,t,e,n={}){return{id:i,kind:t,position:{...e},velocity:{x:0,y:0,z:0},yaw:n.yaw??0,health:Ee[t].maxHealth,onGround:!1,thinkTimer:0,walking:!1,hurtTimer:0,name:t==="npc"?n.name??"NPC":void 0,dialogue:t==="npc"?n.dialogue??"Hello! Welcome to this world.":void 0}}const Hh=Kt("water"),Fn={maxNodes:3e3,budgetPerFrame:400,budgetMs:3,replanSeconds:.5,maxBackoffSeconds:8,moveBlocks:1.5,failMoveBlocks:3},yo=i=>i*.6180339887%1;function Zd(i,t,e,n,s=null,r){const{n:o,h:a}=Oh(e),c=jd(i,t,o*a,s,r);for(let l=0;l<o;l++)Jd(i,t,a,n,c)}function jd(i,t,e,n,s){const r=Ee[t.kind],o=t.position;if(!r.hostile||!n||Math.hypot(n.x-o.x,n.z-o.z)>mn.followRange)return t.path=void 0,t.search=void 0,!1;t.pathTimer=(t.pathTimer??yo(t.id)*.25)-e;const a=t.pathGoal?Math.hypot(n.x-t.pathGoal.x,n.y-t.pathGoal.y,n.z-t.pathGoal.z):1/0,c=(t.failCount??0)>0,l=a>(c?Fn.failMoveBlocks:Fn.moveBlocks);if(!t.search&&t.onGround&&(t.pathTimer<=0||l||!t.path&&!c)){l&&(t.failCount=0);const m=Fn.maxNodes>>Math.min(t.failCount??0,2);t.search=pl.start(i,o,n,{height:2,radius:mn.followRange,maxNodes:m})??void 0,t.pathGoal={...n},t.search||(t.path=[],t.pathTimer=Fn.replanSeconds)}if(t.search){const m=s?s.nodes:1/0,p=s?.ms!==void 0&&s.ms<=0;if(m>0&&!p){const b=s?.ms!==void 0?performance.now():0,S=t.search.step(m,s?.ms);s&&(s.nodes-=S,s.ms!==void 0&&(s.ms-=performance.now()-b))}if(t.search.done){if(t.path=t.search.result(),t.search.reached)t.failCount=0,t.pathTimer=Fn.replanSeconds*(1+.5*yo(t.id));else{t.failCount=(t.failCount??0)+1;const b=Math.min(Fn.maxBackoffSeconds,Fn.replanSeconds*2**t.failCount);t.pathTimer=b*(1+.25*yo(t.id))}t.search=void 0}}const h=t.path??[];for(;h.length>0&&Math.hypot(h[0].x+.5-o.x,h[0].z+.5-o.z)<.35&&Math.abs(h[0].y-o.y)<1.2;)h.shift();const u=Math.hypot(n.x-o.x,n.z-o.z);let d=n.x,f=n.z;h.length>0&&!(u<1.5&&Math.abs(n.y-o.y)<1)&&(d=h[0].x+.5,f=h[0].z+.5);let g=Math.atan2(-(d-o.x),-(f-o.z));const _=Math.hypot(t.velocity.x,t.velocity.z)<.2&&u>mn.reach;return t.stuckTimer=_?(t.stuckTimer??0)+e:0,t.stuckTimer>1&&(t.stuckTimer=0,t.detourTimer=1,t.detourSign=-(t.detourSign??-1)),(t.detourTimer??0)>0&&(t.detourTimer-=e,g+=Math.PI/2*(t.detourSign??1)),t.yaw=g,t.walking=u>mn.reach*.6,t.thinkTimer=.5,!0}function Jd(i,t,e,n,s){const r=Ee[t.kind],o=t.position,a=t.velocity;for(let b=0;b<3&&di(i,ui(o,r.width,r.height));b++)o.y=Math.floor(o.y)+1;t.hurtTimer=Math.max(0,t.hurtTimer-e),t.thinkTimer-=e,!s&&r.speed>0&&t.thinkTimer<=0&&(t.walking=t.hurtTimer>0||n()<.55,t.walking&&(t.yaw=n()*Math.PI*2),t.thinkTimer=t.hurtTimer>0?.6:1.5+n()*3);const c=t.walking?r.speed*(t.hurtTimer>0&&!r.hostile?2.2:1):0,l=-Math.sin(t.yaw)*c,h=-Math.cos(t.yaw)*c,u=1-Math.exp(-(t.onGround?12:3)*e);a.x+=(l-a.x)*u,a.z+=(h-a.z)*u;const d=i(Math.floor(o.x),Math.floor(o.y+r.height*.4),Math.floor(o.z))===Hh,f=a.y;d?a.y=Math.min(a.y+20*e,2):a.y=Math.max(a.y-ha*e,t.kind==="chicken"?-3:-78.4);const g=(f+a.y)/2,_=us(i,o,"x",a.x*e,r.width,r.height);_&&(a.x=0);const m=us(i,o,"z",a.z*e,r.width,r.height);m&&(a.z=0);const p=us(i,o,"y",g*e,r.width,r.height);if(t.onGround=p&&g<0,p&&(a.y=0),(_||m)&&t.onGround&&t.walking){const b={x:o.x-Math.sin(t.yaw)*.5,y:o.y+1.05,z:o.z-Math.cos(t.yaw)*.5};di(i,ui(b,r.width,r.height))?s||(t.thinkTimer=0):a.y=ua*.95}}function Qd(i,t,e){return Number.isFinite(Ee[i.kind].maxHealth)?(i.health-=t,i.hurtTimer=3,i.thinkTimer=0,i.velocity.x+=-Math.sin(e)*4,i.velocity.z+=-Math.cos(e)*4,i.velocity.y=4,i.health<=0):!1}function tf(i,t,e,n){const s=Ee[e.kind],r=ui(e.position,s.width,s.height);let o=0,a=n;const c=[["x",r.minX,r.maxX],["y",r.minY,r.maxY],["z",r.minZ,r.maxZ]];for(const[l,h,u]of c){const d=i[l],f=t[l];if(Math.abs(f)<1e-9){if(d<h||d>u)return null;continue}let g=(h-d)/f,_=(u-d)/f;if(g>_&&([g,_]=[_,g]),o=Math.max(o,g),a=Math.min(a,_),o>a)return null}return o}function ef(i,t,e){if(!Ee[i.kind].hostile)return 0;i.attackTimer=Math.max(0,(i.attackTimer??0)-e);const n=Math.hypot(t.x-i.position.x,t.z-i.position.z),s=Math.abs(t.y-i.position.y);return i.attackTimer>0||n>mn.reach||s>1.5?0:(i.attackTimer=mn.attackCooldown,mn.damage)}function nf(i,t){const e=t.x-i.position.x,n=t.z-i.position.z,s=Math.hypot(e,n)||1;return{x:e/s*mn.knockback,y:mn.knockbackUp,z:n/s*mn.knockback}}function sf(i){return Math.round((1-Math.max(0,Math.min(1,i)))*11)}function rf(i,t,e,n,s,r,o){if(!hi(i(e,n-1,s))||Ii(i(e,n,s))||Ii(i(e,n+1,s))||i(e,n,s)===Hh)return!1;const a=t(e,n,s);return Nd(a)>0?!1:dl(a)-r<=Math.floor(o*8)}function of(i,t,e,n){if(i.kind!=="zombie")return!1;if(i.burning=t===En&&e<=3,!i.burning)return i.burnTimer=0,!1;for(i.burnTimer=(i.burnTimer??0)+n;i.burnTimer>=1;)i.burnTimer-=1,i.health-=mn.burnDamage;return i.health<=0}function af(i,t,e,n,s,r=4){const o=l=>Math.abs(l.x-(t+.5))<=r&&Math.abs(l.y-e)<=r&&Math.abs(l.z-(n+.5))<=r,a=s!==null&&o(s);let c=0;for(const l of i)!Ee[l.kind].hostile||!(l.failCount??0)||!a&&!o(l.position)||(l.failCount=0,l.pathTimer=0,l.search=void 0,c++);return c}const Kl=10,lf={iron_ore:"iron_ingot",gold_ore:"gold_ingot",sand:"glass",cobblestone:"stone",oak_log:"charcoal",birch_log:"charcoal",raw_porkchop:"cooked_porkchop",raw_chicken:"cooked_chicken"},cf={coal:80,charcoal:80,oak_planks:15,oak_log:15,birch_log:15,stick:5},hf=new Map(Object.entries(lf).map(([i,t])=>[Vn(i),Vn(t)])),uf=new Map(Object.entries(cf).map(([i,t])=>[Vn(i),t]));function Gh(i){return hf.get(i)??null}function ma(i){return uf.get(i)??0}function df(){return{input:null,fuel:null,output:null,burnLeft:0,burnTotal:0,progress:0}}function Zl(i){if(!i.input)return!1;const t=Gh(i.input.id);return t===null?!1:!i.output||i.output.id===t&&i.output.count<He(t)}function jl(i){return i?(i.count--,i.count>0?i:null):null}function ff(i,t){let e=t;for(;e>0;){const n=Math.min(e,.25);if(e-=n,i.burnLeft<=0&&Zl(i)&&i.fuel&&ma(i.fuel.id)>0&&(i.burnTotal=i.burnLeft=ma(i.fuel.id),i.fuel=jl(i.fuel)),i.burnLeft>0)if(i.burnLeft=Math.max(0,i.burnLeft-n),Zl(i)){if(i.progress+=n/Kl,i.progress>=1-1e-9){const s=Gh(i.input.id);i.output=i.output?{...i.output,count:i.output.count+1}:{id:s,count:1},i.input=jl(i.input),i.progress=0}}else i.progress=0;else i.progress=Math.max(0,i.progress-2*n/Kl)}}function pf(i){return[i.input,i.fuel,i.output].filter(t=>t!==null)}const _s=20,mf=1.6,gf=4,_f=4,bi={sprintPerBlock:.1,swimPerBlock:.01,jump:.05,sprintJump:.2,attack:.1,breakBlock:.005,heal:6};function Jl(){return{food:_s,saturation:5,exhaustion:0,timer:0}}function Ai(i,t){for(i.exhaustion=Math.min(40,i.exhaustion+t);i.exhaustion>=4;)i.exhaustion-=4,i.saturation>0?i.saturation=Math.max(0,i.saturation-1):i.food=Math.max(0,i.food-1)}function vf(i,t,e,n){const s=i.food>=18&&e<n,r=i.food===0&&e>1;return!s&&!r?(i.timer=0,0):(i.timer+=t,i.timer<(s?gf:_f)?0:(i.timer=0,s?(Ai(i,bi.heal),1):-1))}function xf(i,t){return Ih(t)!==null&&i.food<_s}function yf(i,t,e=Math.random){const n=Ih(t);return!n||i.food>=_s?!1:(i.food=Math.min(_s,i.food+n.hunger),i.saturation=Math.min(i.food,i.saturation+n.saturation),n.risk&&e()<n.risk.chance&&Ai(i,n.risk.exhaustion),!0)}const wn={slate:{w:1,h:1,block:"chalkboard_slate",maxChars:120},poster:{w:2,h:1,block:"chalkboard_poster",maxChars:240},board:{w:3,h:2,block:"chalkboard_board",maxChars:480}},ao=[[0,1],[-1,0],[0,-1],[1,0]];function rr(i){const t=Me[i]?.name;for(const[e,n]of Object.entries(wn))if(n.block===t)return e;return null}function Ql(i){const t=Math.sin(i),e=Math.cos(i);return Math.abs(e)>=Math.abs(t)?e>0?0:2:t>0?3:1}function Vh(i){const[t,e]=ao[i];return[e,-t]}function Ws(i){const{w:t,h:e}=wn[i.size],[n,s]=Vh(i.facing),r=[];for(let o=0;o<t;o++)for(let a=0;a<e;a++)r.push({x:i.x+n*o,y:i.y+a,z:i.z+s*o});return r}function Mf(i,t){return Ws(t).every(e=>{const n=i(e.x,e.y,e.z);return n===Ue||Me[n]?.needsSupport===!0})}function Sf(i,t){return t.slice(0,wn[i].maxChars)}function bf(i,t){return!i.locked||t==="creative"}const si=(i,t,e)=>`${i},${t},${e}`;Object.keys(wn).map(i=>()=>Kt(wn[i].block));const Wh=50,Xh=256,Yh=32;function Xs(i){return!!i&&i.id===Ks("book_and_quill")}function Ef(i){return!!i&&i.id===Ks("written_book")}function $h(i){const t=i.slice(0,Wh).map(e=>e.slice(0,Xh));return t.length>0?t:[""]}function tc(i,t){return Xs(i)?(i.book={pages:$h(t)},!0):!1}function Tf(i,t,e){const n=t.trim().slice(0,Yh);return!Xs(i)||n===""?!1:(i.id=Ks("written_book"),i.book={pages:$h(i.book?.pages??[""]),title:n,author:e.trim()||"Player"},!0)}const Di=27,qh=["forward","back","left","right","up","down"];function wf(i,t,e,n=2){return{x:Math.floor(i),y:Math.floor(t),z:Math.floor(e),facing:n,slots:new Array(Di).fill(null),selected:0}}function Af(i,t){const[e,n]=ao[i.facing];switch(t){case"forward":return[e,0,n];case"back":return[-e,0,-n];case"right":return[-n,0,e];case"left":return[n,0,-e];case"up":return[0,1,0];case"down":return[0,-1,0]}}function Kh(i,t,e){let n=e;for(const s of i.slots)if(n>0&&s&&s.id===t&&s.count<64){const r=Math.min(64-s.count,n);s.count+=r,n-=r}for(let s=0;s<i.slots.length&&n>0;s++)if(!i.slots[s]){const r=Math.min(64,n);i.slots[s]={id:t,count:r},n-=r}return n}function ec(i,t,e,n={}){const s=r=>{const[o,a,c]=Af(t,r);return{x:t.x+o,y:t.y+a,z:t.z+c}};switch(e.op){case"move":{const r=s(e.dir);return r.y<0||r.y>=de?{ok:!1,message:"Can't move out of the world"}:Ii(i.getBlock(r.x,r.y,r.z))?{ok:!1,message:"Blocked"}:(t.x=r.x,t.y=r.y,t.z=r.z,{ok:!0})}case"turn":return t.facing=(t.facing+(e.side==="left"?3:1))%4,{ok:!0};case"place":{const r=s(e.dir),o=i.getBlock(r.x,r.y,r.z);if(o!==Ue&&!Me[o].needsSupport&&Me[o].shape!=="liquid")return{ok:!1,message:"Something is in the way"};const a=t.slots[t.selected];return!a||pi(a.id)?{ok:!1,message:"No block in the selected slot"}:hl(i,"survival",r.x,r.y,r.z)?(i.setBlock(r.x,r.y,r.z,a.id),a.count--,a.count<=0&&(t.slots[t.selected]=null),{ok:!0}):{ok:!1,message:"Building isn't allowed here (Deny)"}}case"destroy":{const r=s(e.dir),o=i.getBlock(r.x,r.y,r.z);return o===Ue?{ok:!1,message:"Nothing to destroy"}:ul(i,"survival",r.x,r.y,r.z)?(i.setBlock(r.x,r.y,r.z,Ue),Kh(t,Nh(o),Uh(o)),{ok:!0}):{ok:!1,message:"Can't destroy that here"}}case"detect":{const r=s(e.dir);return{ok:!0,value:Ii(i.getBlock(r.x,r.y,r.z))}}case"inspect":{const r=s(e.dir);return{ok:!0,value:Xe(i.getBlock(r.x,r.y,r.z)).name}}case"attack":{const r=s(e.dir);return n.attack?.(r.x,r.y,r.z)?{ok:!0}:{ok:!1,message:"Nothing to attack"}}case"select":return!Number.isInteger(e.slot)||e.slot<0||e.slot>=Di?{ok:!1,message:"Slot must be 1-27"}:(t.selected=e.slot,{ok:!0});case"drop":{const r=t.slots[e.slot];if(!r)return{ok:!1,message:"That slot is empty"};if(!n.giveToPlayer)return{ok:!1,message:"No player to give it to"};const o=n.giveToPlayer({...r});return t.slots[e.slot]=o>0?{...r,count:o}:null,{ok:!0}}case"collect":return{ok:!0,value:!1,message:"Nothing to collect"};default:return{ok:!1,message:"Unknown command"}}}function Cf(i,t,e){return Kh(i,t,e)}const Ys=100,Zr=4,Zh=1e3;class Rf{constructor(t,e=Zh,n=()=>!1){this.stepLimit=e,this.detect=n,this.stack=[{blocks:t.blocks,index:0,remaining:1}]}stack;steps=0;stopped=!1;error=null;get done(){return this.stopped||this.error!==null||this.stack.length===0}stop(){this.stopped=!0}count(){return this.steps++,this.steps<=this.stepLimit?!0:(this.error=`Stopped: more than ${this.stepLimit} steps`,!1)}next(){for(;!this.done;){const t=this.stack[this.stack.length-1];if(t.index>=t.blocks.length){if(t.until!==void 0){if(!this.count())return null;this.detect(t.until)?this.stack.pop():t.index=0;continue}if(t.remaining--,t.remaining>0){if(!this.count())return null;t.index=0}else this.stack.pop();continue}const e=t.blocks[t.index++];if(e.type==="repeat"){if(!this.count())return null;const n=Math.max(0,Math.min(Ys,Math.floor(e.times)));n>0&&e.body.length>0&&this.stack.push({blocks:e.body,index:0,remaining:n});continue}if(e.type==="if"){if(!this.count())return null;const n=this.detect(e.dir)?e.then:e.else;n.length>0&&this.stack.push({blocks:n,index:0,remaining:1});continue}if(e.type==="until"){if(!this.count())return null;this.detect(e.dir)||this.stack.push({blocks:e.body,index:0,remaining:1/0,until:e.dir});continue}return this.count()?e.cmd:null}return null}}const On=i=>typeof i=="string"&&qh.includes(i),nc=i=>typeof i=="number"&&Number.isInteger(i)&&i>=0&&i<27,Ei=i=>typeof i=="object"&&i!==null&&!Array.isArray(i)&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null),ee=(i,t)=>Object.prototype.hasOwnProperty.call(i,t)?i[t]:void 0,Pf=new Map([["move",i=>On(ee(i,"dir"))],["place",i=>On(ee(i,"dir"))],["destroy",i=>On(ee(i,"dir"))],["detect",i=>On(ee(i,"dir"))],["inspect",i=>On(ee(i,"dir"))],["attack",i=>On(ee(i,"dir"))],["turn",i=>ee(i,"side")==="left"||ee(i,"side")==="right"],["select",i=>nc(ee(i,"slot"))],["drop",i=>nc(ee(i,"slot"))],["collect",()=>!0]]);function jr(i){try{return Lf(i)}catch{return["Not a valid program"]}}function Lf(i){const t=[];if(!Ei(i))return["Not a program"];typeof ee(i,"name")!="string"&&t.push("Missing program name");const e=ee(i,"trigger"),n=Ei(e)?ee(e,"type"):void 0,s=Ei(e)?ee(e,"command"):void 0;n==="run"||n==="chat"&&typeof s=="string"&&/^[a-z0-9_-]{1,32}$/.test(s)||t.push("Invalid trigger");let r=0;const o=(a,c)=>{if(!Array.isArray(a)){t.push("Blocks must be a list");return}if(c>Zr){t.push(`Loops and ifs can be nested at most ${Zr} deep`);return}for(const l of a){if(++r>2e3){t.push("Too many blocks");return}if(!Ei(l)){t.push("Invalid block");continue}const h=ee(l,"type");if(h==="repeat"){const u=ee(l,"times");typeof u=="number"&&Number.isInteger(u)&&u>=0&&u<=Ys||t.push(`repeat must be 0-${Ys}`),o(ee(l,"body"),c+1)}else if(h==="if")On(ee(l,"dir"))||t.push(`Unknown direction ${String(ee(l,"dir"))}`),o(ee(l,"then"),c+1),o(ee(l,"else"),c+1);else if(h==="until")On(ee(l,"dir"))||t.push(`Unknown direction ${String(ee(l,"dir"))}`),o(ee(l,"body"),c+1);else if(h==="command"){const u=ee(l,"cmd"),d=Ei(u)?ee(u,"op"):void 0,f=typeof d=="string"?Pf.get(d):void 0;if(!Ei(u)||!f)t.push(`Unknown command ${typeof d=="string"?d:typeof d}`);else if(!f(u)){const g=ee(u,"dir");t.push(g!==void 0&&!On(g)?`Unknown direction ${String(g)}`:`Invalid ${d} parameters`)}}else t.push(`Unknown block ${typeof h=="string"?h:typeof h}`)}};return o(ee(i,"blocks"),0),t}function Df(i){try{if(!Array.isArray(i))return{programs:[],errors:i===void 0?[]:["Saved programs were not a list"]};const t=[],e=[];return i.forEach((n,s)=>{const r=jr(n);if(r.length===0)t.push(n);else{const o=Ei(n)&&typeof ee(n,"name")=="string"?` "${ee(n,"name")}"`:"";e.push(`Program ${s+1}${o}: ${r[0]}`)}}),{programs:t,errors:e}}catch{return{programs:[],errors:["Saved programs could not be read"]}}}function If(i,t=Zh,e){const n=jr(i);return n.length>0?{error:n[0]}:{runner:new Rf(i,t,e)}}const on=i=>typeof i=="object"&&i!==null&&!Array.isArray(i)&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null),mt=(i,t)=>Object.prototype.hasOwnProperty.call(i,t)?i[t]:void 0,Te=(i,t=-1e7,e=1e7)=>typeof i=="number"&&Number.isInteger(i)&&i>=t&&i<=e,gn=(i,t=-1e7,e=1e7)=>typeof i=="number"&&Number.isFinite(i)&&i>=t&&i<=e;function Br(i){if(!on(i))return null;const t=mt(i,"id"),e=mt(i,"count");if(!Te(t,0,1e5)||!ll(t)||!Te(e,1,64))return null;const n={id:t,count:Math.min(e,He(t))},s=mt(i,"damage");return Ui(t)&&Te(s,0,1e5)&&s>0&&(n.damage=s),n}function Uf(i){try{if(!on(i))return null;const t=mt(i,"x"),e=mt(i,"y"),n=mt(i,"z"),s=mt(i,"facing"),r=mt(i,"selected"),o=mt(i,"slots");if(!Te(t)||!Te(e,0,1e3)||!Te(n)||!Te(s,0,3)||!Te(r,0,Di-1)||!Array.isArray(o))return null;const a=new Array(Di).fill(null);return o.slice(0,Di).forEach((c,l)=>a[l]=Br(c)),{x:t,y:e,z:n,facing:s,selected:r,slots:a}}catch{return null}}function Nf(i){const t=[];let e=0;try{if(!Array.isArray(i))return{boards:t,dropped:i===void 0?0:1};for(const n of i){const s=on(n)?mt(n,"size"):void 0;if(!on(n)||typeof s!="string"||!Object.prototype.hasOwnProperty.call(wn,s)||!Te(mt(n,"x"))||!Te(mt(n,"y"),0,1e3)||!Te(mt(n,"z"))||!Te(mt(n,"facing"),0,3)||typeof mt(n,"standing")!="boolean"||typeof mt(n,"text")!="string"||typeof mt(n,"locked")!="boolean"){e++;continue}const r=s;t.push({x:mt(n,"x"),y:mt(n,"y"),z:mt(n,"z"),size:r,facing:mt(n,"facing"),standing:mt(n,"standing"),text:mt(n,"text").slice(0,wn[r].maxChars),locked:mt(n,"locked")})}}catch{e++}return{boards:t,dropped:e}}function kf(i){const t=[];let e=0;try{if(!Array.isArray(i))return{furnaces:t,dropped:i===void 0?0:1};for(const n of i){const s=on(n)?mt(n,"state"):void 0;if(!on(n)||!on(s)||!Te(mt(n,"x"))||!Te(mt(n,"y"),0,1e3)||!Te(mt(n,"z"))||!gn(mt(s,"burnLeft"),0,1e3)||!gn(mt(s,"burnTotal"),0,1e3)||!gn(mt(s,"progress"),0,1)){e++;continue}t.push({x:mt(n,"x"),y:mt(n,"y"),z:mt(n,"z"),state:{input:Br(mt(s,"input")),fuel:Br(mt(s,"fuel")),output:Br(mt(s,"output")),burnLeft:mt(s,"burnLeft"),burnTotal:mt(s,"burnTotal"),progress:mt(s,"progress")}})}}catch{e++}return{furnaces:t,dropped:e}}function Ff(i){const t=[];try{if(!Array.isArray(i))return t;for(const e of i)!on(e)||!gn(mt(e,"x"))||!gn(mt(e,"y"),-100,1e3)||!gn(mt(e,"z"))||!gn(mt(e,"yaw"),-1e4,1e4)||typeof mt(e,"name")!="string"||typeof mt(e,"dialogue")!="string"||t.push({x:mt(e,"x"),y:mt(e,"y"),z:mt(e,"z"),yaw:mt(e,"yaw"),name:mt(e,"name").slice(0,64),dialogue:mt(e,"dialogue").slice(0,2e3)})}catch{}return t}function Of(i){if(!on(i))return null;const t=mt(i,"food"),e=mt(i,"saturation"),n=mt(i,"exhaustion"),s=mt(i,"timer");return!gn(t,0,_s)||!gn(e,0,_s)||!gn(n,0,40)||!gn(s,0,1e6)?null:{food:t,saturation:e,exhaustion:n,timer:s}}function Bf(i){const t=[];try{if(!Array.isArray(i))return t;for(const e of i){if(!Array.isArray(e)||e.length!==4)continue;const[n,s,r,o]=e;Te(n)&&Te(s,0,1e3)&&Te(r)&&Te(o,0,255)&&ll(o)&&t.push([n,s,r,o])}}catch{}return t}function zf(i,t=50){const e=[];let n=0;try{if(!Array.isArray(i))return{photos:e,dropped:i==null?0:1};for(const s of i){const r=on(s)?mt(s,"id"):void 0,o=on(s)?mt(s,"dataUrl"):void 0;if(!on(s)||typeof r!="string"||r.length===0||r.length>64||typeof o!="string"||!/^data:image\/(jpeg|png|webp);base64,/.test(o)){n++;continue}const a=mt(s,"caption"),c=mt(s,"takenAt");if(e.push({id:r,dataUrl:o,caption:typeof a=="string"?a.slice(0,200):"",takenAt:typeof c=="string"&&!Number.isNaN(Date.parse(c))?c:new Date(0).toISOString()}),e.length>=t)break}}catch{n++}return{photos:e,dropped:n}}const fe=16;class jh{data=new Uint8ClampedArray(fe*fe*4);state;constructor(t){let e=2166136261;for(let n=0;n<t.length;n++)e=Math.imul(e^t.charCodeAt(n),16777619);this.state=e>>>0}rand(){this.state=this.state+1831565813>>>0;let t=this.state;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}pick(t){return t[Math.floor(this.rand()*t.length)]}set(t,e,n,s=255){if(t<0||e<0||t>=fe||e>=fe)return;const r=(e*fe+t)*4;this.data[r]=n[0],this.data[r+1]=n[1],this.data[r+2]=n[2],this.data[r+3]=s}get(t,e){const n=(e*fe+t)*4;return[this.data[n],this.data[n+1],this.data[n+2],this.data[n+3]]}fill(t,e=255){for(let n=0;n<fe;n++)for(let s=0;s<fe;s++){const r=t(s,n);r?this.set(s,n,r,e):this.set(s,n,[0,0,0],0)}return this}noise(t,e=1.6){return this.fill(()=>t[Math.min(t.length-1,Math.floor(Math.pow(this.rand(),e)*t.length))])}copyFrom(t){return this.data.set(t.data),this}}function J(i){const t=Number.parseInt(i.replace("#",""),16);return[t>>16&255,t>>8&255,t&255]}function Oe(i,t){return[Math.round(i[0]*t),Math.round(i[1]*t),Math.round(i[2]*t)]}const ic=fe,Jh=["#7a5430","#8f6539","#664424"].map(J),Hf={wooden:["#b08a52","#9b7643","#c39d63"].map(J),stone:["#8e8e8e","#7b7b7b","#a2a2a2"].map(J),iron:["#dcdcdc","#c2c2c2","#f0f0f0"].map(J)};function Ni(i,t,e){for(let n=0;n<ic;n++)for(let s=0;s<ic;s++){if(!t(s,n))continue;const r=!t(s-1,n)||!t(s+1,n)||!t(s,n-1)||!t(s,n+1);i.set(s,n,r?Oe(e[0],.55):i.pick(e))}}function Jr(i,t,e){return(n,s)=>n>=i&&n<=e&&(n+s===i+t||n+s===i+t+1)}const Gf={pickaxe:(i,t)=>{const e=Math.hypot(i-2,t-13);return e>=9.2&&e<=12.2&&i>=3&&t<=12},axe:(i,t)=>i>=7&&i<=13&&t>=1&&t<=7&&i+t>=11&&i-t>=2&&i+t<=18,shovel:(i,t)=>Math.abs(i-11)+Math.abs(t-4)<=3,sword:(i,t)=>i>=6&&i<=14&&Math.abs(i+t-15)<=1||i-t>=-3&&i-t<=-2&&Math.abs(i+t-14)<=3};function Vf(i){return i.fill(()=>null),Ni(i,Jr(3,12,12),Jh),i}function Wf(i,t){return e=>(e.fill(()=>null),Ni(e,t==="sword"?Jr(1,13,4):Jr(2,12,t==="shovel"?9:10),Jh),Ni(e,Gf[t],Hf[i]),e)}function cn(i,t){return e=>(e.fill(()=>null),Ni(e,t,i),e)}const sc=(i,t)=>Math.hypot(i-7.5,t-8)<=5.6&&!(i+t<=6),Xf=(i,t)=>Math.abs(i-7.5)+Math.abs(t-7.5)<=6.5&&t>=3&&t<=12,rc=(i,t)=>t>=6&&t<=10&&i>=2+(10-t)*.5&&i<=13-(10-t)*.5,oc=(i,t)=>Math.hypot((i-7)/1.25,t-8)<=4.6||i>=11&&i<=14&&t>=7&&t<=9,ac=(i,t)=>Math.hypot(i-6,t-6)<=4.3||Math.abs(i-t)<=1&&i>=8&&i<=13;function Mo(i,t,e,n=!1){i.fill(()=>null),Ni(i,(r,o)=>r>=2&&r<=12&&o>=3&&o<=13,[J(t),Oe(J(t),.9),Oe(J(t),1.1)]);for(let r=4;r<=12;r++)i.set(12,r,J("#efe6cf"));if(n)for(let r=4;r<=10;r++)i.set(r,6,J("#e9c24a"));if(e){for(let r=0;r<7;r++)i.set(8+r,9-r,J(r<2?"#3a3a3a":"#f4f4f4"));for(let r=2;r<7;r++)i.set(9+r,9-r,J("#dcdcdc"))}return i}const ga={item_stick:Vf,item_coal:cn(["#2b2b2b","#1c1c1c","#3c3c3c"].map(J),sc),item_charcoal:cn(["#3b3026","#2c241c","#4a3c2f"].map(J),sc),item_diamond:cn(["#6fe0d6","#4cc6bb","#a8f2ec"].map(J),Xf),item_iron_ingot:cn(["#d8d8d8","#bdbdbd","#efefef"].map(J),rc),item_gold_ingot:cn(["#f2c94c","#d9aa2a","#fbe38e"].map(J),rc),item_raw_porkchop:cn(["#e88f8f","#d57272","#f4b0a8"].map(J),oc),item_cooked_porkchop:cn(["#a8683a","#8c522a","#c4874f"].map(J),oc),item_raw_chicken:cn(["#f2c7b8","#e2ab98","#f8dccf"].map(J),ac),item_cooked_chicken:cn(["#c8894a","#a86c33","#dca36a"].map(J),ac),item_feather:i=>(i.fill(()=>null),Ni(i,(t,e)=>Math.abs(t+e-15)<=2-(t<6?1:0)&&t>=3&&t<=13&&!(t+e===15&&t<5),["#f2f2f2","#dcdcdc","#ffffff"].map(J)),Ni(i,Jr(2,13,4),["#9a9a9a"].map(J)),i),item_ink_sac:cn(["#2a2238","#1b1626","#3c3350"].map(J),(i,t)=>Math.hypot(i-7.5,(t-8.5)*1.15)<=5.2||i>=6&&i<=9&&t>=2&&t<=4),item_book:i=>Mo(i,"#8b4f2a",!1),item_book_and_quill:i=>Mo(i,"#8b4f2a",!0),item_written_book:i=>Mo(i,"#5a2f6e",!1,!0),item_rotten_flesh:cn(["#8a6a3c","#6f8a3a","#9c4e3a","#5d4a2a"].map(J),(i,t)=>Math.abs(i-t)<=3-((i*7+t*3)%3===0?1:0)&&i>=2&&i<=13)};for(const i of["wooden","stone","iron"])for(const t of["pickaxe","axe","shovel","sword"])ga[`item_${i}_${t}`]=Wf(i,t);const Ot=fe,Yf=["#866043","#79553a","#966c4a","#6b4a30","#5c3f29"].map(J),So=["#5f9f35","#56932f","#6aad3d","#4c8429","#74b847"].map(J),zr=["#7f7f7f","#757575","#878787","#6d6d6d","#8f8f8f"].map(J),$f=["#dbd3a0","#d3ca94","#e3dcaf","#cbc18a"].map(J),lc=["#f4fbfb","#eaf4f4","#dfeceE"].map(J),cc=J("#a7834f");function bo(i){return i.noise(Yf,1.8)}function Qh(i){i.noise(zr,1.4);for(let t=0;t<5;t++){const e=Math.floor(i.rand()*Ot),n=Math.floor(i.rand()*Ot),s=2+Math.floor(i.rand()*4);for(let r=n;r<n+s;r++)i.set(r%Ot,e,J("#686868"))}return i}function hc(i,t){for(let e=0;e<Ot;e++){const n=3+(i.rand()<.5?1:0)+(i.rand()<.2?1:0);for(let s=0;s<n;s++)i.set(e,s,i.pick(t))}return i}function or(i,t){Qh(i);const e=4+Math.floor(i.rand()*2);for(let n=0;n<e;n++){const s=2+Math.floor(i.rand()*12),r=2+Math.floor(i.rand()*12);for(let o=0;o<4;o++){const a=s+Math.floor(i.rand()*3)-1,c=r+Math.floor(i.rand()*3)-1;i.set(a,c,t[o%t.length])}i.set(s+1,r+1,Oe(t[0],.6))}return i}function ar(i,t){const e=Oe(t,1.1),n=Oe(t,.82),s=Oe(t,.6);return i.fill((r,o)=>{if(o%4===3)return s;const c=(Math.floor(o/4)*7+3)%Ot;if(r===c)return s;const l=i.rand();return l<.15?n:l<.3?e:t}),i}function qf(i,t){const e=Array.from({length:Ot},()=>i.pick(t));return i.fill(n=>i.rand()<.12?Oe(e[n],.85):e[n])}function uc(i,t,e,n){return i.fill((s,r)=>{if(s===0||r===0||s===Ot-1||r===Ot-1)return t;const o=Math.max(Math.abs(s-7.5),Math.abs(r-7.5));return Math.floor(o)%2===0?n:e})}function dc(i,t){i.noise(t,1.2);for(let e=0;e<40;e++)i.set(Math.floor(i.rand()*Ot),Math.floor(i.rand()*Ot),[0,0,0],0);return i}function jn(i,t){return i.fill((e,n)=>{const s=(e+n*3)%4===0?.9:(e*2+n)%5===0?1.06:1,r=.96+i.rand()*.08;return Oe(t,Math.min(1.15,s*r))})}function fc(i,t,e){i.fill(()=>null);const n=J("#3d8a2b");for(let r=7;r<Ot;r++)i.set(7,r,n);i.set(6,11,n),i.set(5,10,n),i.set(8,12,n),i.set(9,11,n);const s=[[7,3],[6,4],[8,4],[5,5],[9,5],[6,6],[8,6],[7,7]];for(const[r,o]of s)i.set(r,o,t);return i.set(6,5,t),i.set(8,5,t),i.set(7,5,e),i.set(7,4,Oe(t,.85)),i.set(7,6,Oe(t,.85)),i}function pc(i,t,e,n,s){i.fill((r,o)=>r===0||o===0||r===Ot-1||o===Ot-1?e:r===1||o===1||r===Ot-2||o===Ot-2?Oe(t,.8):i.rand()<.1?Oe(t,.92):t);for(const[r,o]of n)i.set(r,o,s),i.set(r+1,o,s);return i}const Kf=[[3,8],[4,9],[5,10],[6,11],[7,10],[8,9],[9,8],[10,7],[11,6],[12,5]],Zf=[3,4,5,6,7,8,9,10,11].flatMap(i=>[[i,i+1],[i,13-i]]),_a={dirt:bo,grass_top:i=>i.noise(So,1.3),grass_side:i=>hc(bo(i),So),stone:Qh,cobblestone:i=>{const t=Array.from({length:9},()=>[i.rand()*Ot,i.rand()*Ot,i.pick(zr)]);return i.fill((e,n)=>{let s=1/0,r=1/0,o=zr[0];for(const[a,c,l]of t)for(const h of[-Ot,0,Ot])for(const u of[-Ot,0,Ot]){const d=Math.hypot(e+.5-a-h,n+.5-c-u);d<s?(r=s,s=d,o=l):d<r&&(r=d)}return r-s<1.1?J("#4f4f4f"):s<1.5&&i.rand()<.5?Oe(o,1.12):o})},oak_planks:i=>ar(i,cc),oak_log:i=>qf(i,["#6b5131","#5a4326","#7a5e3a","#634a2c"].map(J)),oak_log_top:i=>uc(i,J("#5f4729"),J("#b8945b"),J("#a07c48")),oak_leaves:i=>dc(i,["#3f8a24","#357a1d","#4c9b2d","#2e6b19"].map(J)),birch_log:i=>{i.fill(()=>i.pick(["#dcd9cf","#d1cdc1","#e6e3da"].map(J)));for(let t=0;t<7;t++){const e=Math.floor(i.rand()*Ot),n=Math.floor(i.rand()*Ot),s=2+Math.floor(i.rand()*4);for(let r=n;r<n+s;r++)i.set(r%Ot,e,J("#33302b"))}return i},birch_log_top:i=>uc(i,J("#dcd9cf"),J("#d3bf86"),J("#bba56d")),birch_leaves:i=>dc(i,["#6b9e40","#5f9137","#78ab4a","#55842f"].map(J)),sand:i=>i.noise($f,1.5),gravel:i=>i.noise(["#857f7c","#6f6966","#99928e","#5d5856","#8a7d73"].map(J),1),water:i=>{const t=J("#3a6fd8");return i.fill((e,n)=>(e+n*2)%7===0||(e*3+n)%11===0?J("#5d8ef0"):t,175),i},glass:i=>{const t=J("#d6eef2");i.fill((e,n)=>e===0||n===0||e===Ot-1||n===Ot-1?t:null);for(const[e,n]of[[3,4],[4,3],[4,5],[5,4],[11,10],[12,11]])i.set(e,n,[255,255,255]);return i},bricks:i=>{const t=J("#b5a99c"),e=["#97543f","#8a4a37","#a35e47"].map(J);return i.fill((n,s)=>{if(s%4===3)return t;const r=Math.floor(s/4);return(n+r%2*4)%8===7?t:i.rand()<.2?i.pick(e):e[r%e.length]})},bedrock:i=>i.noise(["#565656","#353535","#7a7a7a","#1f1f1f","#9a9a9a"].map(J),1),coal_ore:i=>or(i,["#2b2b2b","#3c3c3c","#1b1b1b"].map(J)),iron_ore:i=>or(i,["#d8af93","#c49478","#e5c6ad"].map(J)),gold_ore:i=>or(i,["#fcee4b","#e5c620","#fff79a"].map(J)),diamond_ore:i=>or(i,["#5decf5","#2ccdd8","#a1fbff"].map(J)),snow:i=>i.noise(lc,2),grass_snow_side:i=>hc(bo(i),lc),white_wool:i=>jn(i,J("#e9ecec")),red_wool:i=>jn(i,J("#a12722")),orange_wool:i=>jn(i,J("#f07613")),yellow_wool:i=>jn(i,J("#f8c527")),lime_wool:i=>jn(i,J("#70b919")),blue_wool:i=>jn(i,J("#35399d")),purple_wool:i=>jn(i,J("#7a2aac")),black_wool:i=>jn(i,J("#1e1b1b")),glowstone:i=>i.noise(["#f9d49c","#c98f45","#fff1c4","#8f6328","#ffd060"].map(J),1),bookshelf:i=>{ar(i,cc);const t=["#a12722","#35399d","#3d8a2b","#c9a43a","#6b3b1e","#7a2aac"].map(J);for(const e of[1,9])for(let n=1;n<Ot-1;n++){const s=t[(n*7+e)%t.length],r=5+(n*3+e)%2;for(let o=e+6-r;o<e+6;o++)i.set(n,o,o===e+6-r?Oe(s,1.2):s)}return i},crafting_table_top:i=>{ar(i,J("#a7834f"));const t=J("#5d4426");for(let e=0;e<Ot;e++)i.set(e,0,t),i.set(e,Ot-1,t),i.set(0,e,t),i.set(Ot-1,e,t);for(let e=2;e<Ot-2;e++)i.set(e,5,t),i.set(e,10,t),i.set(5,e,t),i.set(10,e,t);return i},crafting_table_side:i=>{ar(i,J("#9c7a48"));const t=J("#9a9a9a"),e=J("#5d4426");for(let n=0;n<3;n++)for(let s=0;s<Ot;s++)i.set(s,n,J("#7b5c36"));for(let n=4;n<12;n++)i.set(3,n,e);for(let n=2;n<6;n++)i.set(n,4,t);for(let n=5;n<13;n++)i.set(n,13-(n-5),t);return i.set(11,12,e),i.set(12,13,e),i},dandelion:i=>fc(i,J("#f4e04d"),J("#e0a81b")),poppy:i=>fc(i,J("#d1281f"),J("#2b2b2b")),tall_grass:i=>{i.fill(()=>null);for(let t=0;t<7;t++){const e=1+Math.floor(i.rand()*14),n=6+Math.floor(i.rand()*9),s=i.rand()<.5?-1:1;for(let r=0;r<n;r++){const o=e+(r>n/2?s:0);i.set(o,Ot-1-r,i.pick(So))}}return i},torch:i=>{i.fill(()=>null);for(let t=7;t<Ot;t++)for(let e=7;e<=8;e++)i.set(e,t,J(e===7?"#8a6236":"#6b4a28"));for(let t=4;t<=6;t++)for(let e=7;e<=8;e++)i.set(e,t,J(t===4?"#fff6c2":t===5?"#ffd23f":"#ff9d1c"));return i.set(7,3,J("#ffe98a")),i},furnace_top:i=>{i.noise(zr,2.2);for(let t=0;t<Ot;t++)for(const[e,n]of[[t,0],[t,Ot-1],[0,t],[Ot-1,t]])i.set(e,n,J("#5d5d5d"));return i},furnace_front:i=>{i.copyFrom(_a.cobblestone(new jh("furnace_front_stone")));for(let t=8;t<=13;t++)for(let e=4;e<=11;e++)i.set(e,t,J(t===8?"#3a3a3a":t>11?"#2a1a10":"#141414"));for(let t=4;t<=11;t+=2)i.set(t,9,J("#4a4a4a"));for(let t=5;t<=10;t++)i.rand()<.5&&i.set(t,13,J("#7a3b12"));return i},allow:i=>pc(i,J("#4bab3f"),J("#1f5e1a"),Kf,J("#ffffff")),deny:i=>pc(i,J("#c73a2e"),J("#5e1612"),Zf,J("#ffffff")),border:i=>{const t=J("#a3241c"),e=J("#1c1c1c");return i.fill((n,s)=>n===0||s===0||n===Ot-1||s===Ot-1?J("#555555"):Math.floor((n+s)/3)%2===0?t:e)}};function jf(i){const t=new jh(i),e=s=>Object.prototype.hasOwnProperty.call(s,i),n=e(_a)?_a[i]:e(ga)?ga[i]:void 0;return n?n(t).data:t.fill((s,r)=>s<8!=r<8?[248,0,248]:[0,0,0]).data}function Jf(i){const t=[...new Set(i)];let e=1;for(;e*e<t.length;)e*=2;const n=e*fe,s=n,r=new Uint8ClampedArray(n*s*4),o=new Map;t.forEach((l,h)=>{const u=h%e,d=Math.floor(h/e);o.set(l,{col:u,row:d});const f=jf(l);for(let g=0;g<fe;g++){const _=g*fe*4,m=((d*fe+g)*n+u*fe)*4;r.set(f.subarray(_,_+fe*4),m)}});const a=.01/n,c=o.get(t[0])??{col:0,row:0};return{width:n,height:s,tileSize:fe,columns:e,data:r,tiles:o,uv(l){const h=o.get(l)??c,u=h.col/e+a,d=(h.col+1)/e-a,f=h.row/e+a,g=(h.row+1)/e-a;return[u,g,d,f]},tilePixels(l){const h=o.get(l)??c,u=new Uint8ClampedArray(fe*fe*4);for(let d=0;d<fe;d++){const f=((h.row*fe+d)*n+h.col*fe)*4;u.set(r.subarray(f,f+fe*4),d*fe*4)}return u}}}const mc=new Map;function lr(i,t){const e=document.createElement("canvas");return e.width=i.tileSize,e.height=i.tileSize,e.getContext("2d").putImageData(new ImageData(i.tilePixels(t),i.tileSize,i.tileSize),0,0),e}function Eo(i,t,e,n){const s=document.createElement("canvas");s.width=i.canvas.width,s.height=i.canvas.height;const r=s.getContext("2d");r.imageSmoothingEnabled=!1,r.setTransform(...e),r.drawImage(t,0,0),n>0&&(r.globalCompositeOperation="source-atop",r.fillStyle=`rgba(0,0,0,${n})`,r.fillRect(0,0,16,16)),i.drawImage(s,0,0)}function Qr(i,t,e=64){const n=mc.get(t);if(n)return n;const s=document.createElement("canvas");s.width=e,s.height=e;const r=s.getContext("2d");r.imageSmoothingEnabled=!1;const o=pi(t)?null:Xe(t);if(o?.name.startsWith("chalkboard_")){const c=o.name.endsWith("slate")?.6:o.name.endsWith("poster")?.8:.9,l=e*c,h=e*(o.name.endsWith("board")?.6:.5),u=(e-l)/2,d=(e-h)/2;r.fillStyle="#8a6236",r.fillRect(u,d,l,h),r.fillStyle="#24382c",r.fillRect(u+3,d+3,l-6,h-6),r.fillStyle="#f2f2ea";for(let f=0;f<3;f++)r.fillRect(u+7,d+8+f*6,(l-14)*(1-f*.25),2)}else if(!o)r.drawImage(lr(i,qs(t).icon),0,0,e,e);else if(o.shape==="cross")r.drawImage(lr(i,o.faces.side),e*.1,e*.1,e*.8,e*.8);else{const c=e,l=c/32,h=lr(i,o.faces.top),u=lr(i,o.faces.side);Eo(r,h,[l,l/2,-l,l/2,c/2,0],0),Eo(r,u,[l,l/2,0,l,0,c/4],.2),Eo(r,u,[l,-l/2,0,l,c/2,c/2],.4)}const a=s.toDataURL();return mc.set(t,a),a}function ml(){return{forward:0,strafe:0,jump:!1,descend:!1,sprint:!1,lookYaw:0,lookPitch:0,breaking:!1,place:!1,using:!1,pick:!1,toggleFly:!1,hotbarSlot:null,hotbarScroll:0}}function Qf(i){const t=ml();for(const e of i)t.forward+=e.forward,t.strafe+=e.strafe,t.jump||=e.jump,t.descend||=e.descend,t.sprint||=e.sprint,t.lookYaw+=e.lookYaw,t.lookPitch+=e.lookPitch,t.breaking||=e.breaking,t.place||=e.place,t.using||=e.using,t.pick||=e.pick,t.toggleFly||=e.toggleFly,t.hotbarSlot??=e.hotbarSlot,t.hotbarScroll+=e.hotbarScroll;return t.forward=Math.max(-1,Math.min(1,t.forward)),t.strafe=Math.max(-1,Math.min(1,t.strafe)),t}class tp{constructor(t=300){this.windowMs=t}last=-1/0;press(t){const e=t-this.last<=this.windowMs;return this.last=e?-1/0:t,e}}function ep(i,t,e,n=.15){const s=Math.hypot(i,t);if(e<=0||s===0)return{x:0,y:0,magnitude:0};const r=Math.min(1,s/e);if(r<=n)return{x:0,y:0,magnitude:0};const o=(r-n)/(1-n);return{x:i/s*o,y:-t/s*o,magnitude:o}}function np(i,t,e){const n=Math.hypot(i,t);return n<=e||n===0?{x:i,y:t}:{x:i/n*e,y:t/n*e}}function gc(i,t,e,n=300,s=10){return t>s?"drag":i>=n?"hold":e?"tap":"pending"}const _c=400;class ip{constructor(t,e={}){this.target=t,this.sensitivity=e.sensitivity??.0025,this.listen(window,"keydown",n=>this.onKeyDown(n)),this.listen(window,"keyup",n=>this.keys.delete(n.code)),this.listen(window,"blur",()=>this.reset()),this.listen(document,"mousemove",n=>this.onMouseMove(n)),this.listen(document,"pointerlockchange",()=>{this.pointerLocked&&(this.skipNextMove=!0)}),(e.mouseButtons??!0)&&this.listen(t,"mousedown",n=>this.onMouseDown(n)),this.listen(window,"mouseup",n=>{n.button===0&&(this.breaking=!1),n.button===2&&(this.using=!1)}),this.listen(t,"wheel",n=>{this.scroll+=Math.sign(n.deltaY)},{passive:!0}),this.listen(t,"contextmenu",n=>n.preventDefault())}keys=new Set;lookX=0;lookY=0;breaking=!1;using=!1;breakClicked=!1;place=!1;pick=!1;toggleFly=!1;slot=null;scroll=0;flyTap=new tp;sensitivity;disposers=[];skipNextMove=!1;enabled=!0;get pointerLocked(){return document.pointerLockElement===this.target}requestPointerLock(){try{const t=this.target.requestPointerLock();t instanceof Promise&&t.catch(()=>{})}catch{}}isDown(t){return this.keys.has(t)}poll(){const t=ml();if(!this.enabled)return this.consume(),t;const e=this.keys;return t.forward=(e.has("KeyW")||e.has("ArrowUp")?1:0)-(e.has("KeyS")||e.has("ArrowDown")?1:0),t.strafe=(e.has("KeyD")||e.has("ArrowRight")?1:0)-(e.has("KeyA")||e.has("ArrowLeft")?1:0),t.jump=e.has("Space"),t.descend=e.has("ShiftLeft")||e.has("ShiftRight"),t.sprint=e.has("ControlLeft")||e.has("ControlRight")||e.has("KeyR"),t.lookYaw=-this.lookX*this.sensitivity,t.lookPitch=-this.lookY*this.sensitivity,t.breaking=this.breaking||this.breakClicked,t.place=this.place,t.using=this.using,t.pick=this.pick,t.toggleFly=this.toggleFly,t.hotbarSlot=this.slot,t.hotbarScroll=this.scroll,this.consume(),t}reset(){this.keys.clear(),this.breaking=!1,this.using=!1,this.consume()}dispose(){for(const t of this.disposers)t()}consume(){this.lookX=0,this.lookY=0,this.breakClicked=!1,this.place=!1,this.pick=!1,this.toggleFly=!1,this.slot=null,this.scroll=0}onKeyDown(t){if(this.enabled){if(t.code==="Space"&&!t.repeat&&this.flyTap.press(t.timeStamp)&&(this.toggleFly=!0),t.code.startsWith("Digit")){const e=Number(t.code.slice(5));e>=1&&e<=9&&(this.slot=e-1)}this.keys.add(t.code),["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(t.code)&&t.preventDefault()}}onMouseMove(t){if(this.enabled&&(this.pointerLocked||t.buttons&4)){const e=Math.abs(t.movementX)>_c||Math.abs(t.movementY)>_c;if(this.skipNextMove||e){this.skipNextMove=!1;return}this.lookX+=t.movementX,this.lookY+=t.movementY}}onMouseDown(t){this.enabled&&(t.button===0?(this.breaking=!0,this.breakClicked=!0):t.button===2?(this.place=!0,this.using=!0):t.button===1&&(this.pick=!0,t.preventDefault()))}listen(t,e,n,s){t.addEventListener(e,n,s),this.disposers.push(()=>t.removeEventListener(e,n,s))}}class sp{constructor(t,e,n={}){this.lookArea=t,this.radius=n.radius??56,this.sensitivity=n.sensitivity??.006,this.root=ls("div","touch-controls");const s=ls("div","touch-stick-zone");this.base=ls("div","touch-stick-base"),this.knob=ls("div","touch-stick-knob"),this.base.appendChild(this.knob),s.appendChild(this.base),this.root.appendChild(s);const r=ls("div","touch-buttons"),o=To("touch-jump","⤒","Jump"),a=To("touch-fly","✈","Toggle flying"),c=To("touch-down","⤓","Sneak / descend");r.append(a,c,o),this.root.appendChild(r),e.appendChild(this.root),s.addEventListener("pointerdown",l=>this.onStickStart(l)),s.addEventListener("pointermove",l=>this.onStickMove(l)),s.addEventListener("pointerup",l=>this.onStickEnd(l)),s.addEventListener("pointercancel",l=>this.onStickEnd(l)),t.addEventListener("pointerdown",l=>this.onLookStart(l)),t.addEventListener("pointermove",l=>this.onLookMove(l)),t.addEventListener("pointerup",l=>this.onLookEnd(l,!0)),t.addEventListener("pointercancel",l=>this.onLookEnd(l,!1)),wo(o,l=>this.jumpHeld=l),wo(c,l=>this.descendHeld=l),wo(a,l=>{l&&(this.toggleFly=!0)}),this.resetKnob()}root;base;knob;radius;sensitivity;stickId=null;stickOrigin={x:0,y:0};stick={x:0,y:0};look=null;lookX=0;lookY=0;place=!1;toggleFly=!1;jumpHeld=!1;descendHeld=!1;holdTimer=null;enabled=!0;get stickVector(){return{...this.stick}}setVisible(t){this.root.style.display=t?"":"none"}poll(){const t=ml();return this.enabled&&(t.forward=this.stick.y,t.strafe=this.stick.x,t.sprint=Math.hypot(this.stick.x,this.stick.y)>.95,t.jump=this.jumpHeld,t.descend=this.descendHeld,t.lookYaw=-this.lookX*this.sensitivity,t.lookPitch=-this.lookY*this.sensitivity,t.place=this.place,t.breaking=this.look?.breaking??!1,t.using=t.breaking,t.toggleFly=this.toggleFly),this.lookX=0,this.lookY=0,this.place=!1,this.toggleFly=!1,t}onStickStart(t){if(!va(t)||(t.preventDefault(),this.stickId!==null))return;this.stickId=t.pointerId,xa(t);const e=t.currentTarget.getBoundingClientRect();this.stickOrigin={x:t.clientX,y:t.clientY},this.base.style.left=`${t.clientX-e.left}px`,this.base.style.top=`${t.clientY-e.top}px`,this.base.classList.add("active"),this.updateStick(t.clientX,t.clientY)}onStickMove(t){t.pointerId===this.stickId&&this.updateStick(t.clientX,t.clientY)}onStickEnd(t){t.pointerId===this.stickId&&(this.stickId=null,this.stick={x:0,y:0},this.base.classList.remove("active"),this.resetKnob())}updateStick(t,e){const n=t-this.stickOrigin.x,s=e-this.stickOrigin.y,r=ep(n,s,this.radius);this.stick={x:r.x,y:r.y};const o=np(n,s,this.radius);this.knob.style.transform=`translate(calc(-50% + ${o.x}px), calc(-50% + ${o.y}px))`}resetKnob(){this.knob.style.transform="translate(-50%, -50%)",this.base.style.left="",this.base.style.top=""}onLookStart(t){if(!va(t)||(t.preventDefault(),this.look))return;xa(t),this.look={id:t.pointerId,startX:t.clientX,startY:t.clientY,lastX:t.clientX,lastY:t.clientY,startTime:t.timeStamp,moved:0,breaking:!1};const e=this.look;this.holdTimer=setTimeout(()=>{this.look===e&&gc(performance.now()-e.startTime,e.moved,!1)==="hold"&&(e.breaking=!0)},320)}onLookMove(t){const e=this.look;!e||t.pointerId!==e.id||(this.lookX+=t.clientX-e.lastX,this.lookY+=t.clientY-e.lastY,e.lastX=t.clientX,e.lastY=t.clientY,e.moved=Math.max(e.moved,Math.hypot(t.clientX-e.startX,t.clientY-e.startY)))}onLookEnd(t,e){const n=this.look;!n||t.pointerId!==n.id||(e&&gc(t.timeStamp-n.startTime,n.moved,!0)==="tap"&&(this.place=!0),this.holdTimer&&clearTimeout(this.holdTimer),this.look=null)}}function va(i){return i.pointerType!=="mouse"||i.button===0}function xa(i){try{i.currentTarget.setPointerCapture(i.pointerId)}catch{}}function ls(i,t){const e=document.createElement(i);return e.className=t,e}function To(i,t,e){const n=ls("button",`touch-button ${i}`);return n.textContent=t,n.setAttribute("aria-label",e),n}function wo(i,t){const e=new Set;i.addEventListener("pointerdown",s=>{va(s)&&(s.preventDefault(),xa(s),e.add(s.pointerId),i.classList.add("pressed"),t(!0))});const n=s=>{!e.delete(s.pointerId)||e.size>0||(i.classList.remove("pressed"),t(!1))};i.addEventListener("pointerup",n),i.addEventListener("pointercancel",n),i.addEventListener("contextmenu",s=>s.preventDefault())}function St(i,t="",e=""){const n=document.createElement(i);return t&&(n.className=t),e&&(n.textContent=e),n}class rp{constructor(t,e,n,s){this.atlas=e,this.root.append(this.water,this.damage,this.cameraFlash,St("div","crosshair"),this.log,this.debug);for(let a=0;a<Sn;a++){const c=St("button","slot");c.dataset.slot=String(a),c.addEventListener("pointerdown",l=>{l.stopPropagation(),n.onSelectSlot(a)}),this.slots.push(c),this.hotbar.appendChild(c)}const r=St("div","hud-bottom"),o=St("div","stats");if(this.hunger.setAttribute("aria-label","Hunger"),o.append(this.hearts,this.hunger),r.append(this.itemName,o,this.hotbar),s){const a=St("button","slot slot-more","•••");a.setAttribute("aria-label","Open inventory"),a.addEventListener("pointerdown",g=>{g.stopPropagation(),n.onOpenInventory()}),this.hotbar.appendChild(a);const c=St("div","touch-top"),l=St("button","touch-top-button","❚❚");l.setAttribute("aria-label","Pause"),l.addEventListener("pointerdown",g=>{g.stopPropagation(),n.onPause()});const h=St("button","touch-top-button","💬");h.setAttribute("aria-label","Chat and commands"),h.addEventListener("pointerdown",g=>{g.stopPropagation(),n.onChat()});const u=St("button","touch-top-button","📷");u.setAttribute("aria-label","Take photo"),u.addEventListener("pointerdown",g=>{g.stopPropagation(),n.onCamera()});const d=St("button","touch-top-button","🖼");d.setAttribute("aria-label","Portfolio"),d.addEventListener("pointerdown",g=>{g.stopPropagation(),n.onPortfolio()});const f=St("button","touch-top-button","</>");f.setAttribute("aria-label","Code Builder"),f.addEventListener("pointerdown",g=>{g.stopPropagation(),n.onCodeBuilder()}),c.append(f,u,d,h,l),this.root.appendChild(c)}this.root.appendChild(r),this.debug.hidden=!0,t.appendChild(this.root)}root=St("div","hud");hotbar=St("div","hotbar");slots=[];hearts=St("div","hearts");hunger=St("div","hunger");itemName=St("div","item-name");debug=St("pre","debug");log=St("div","chat-log");damage=St("div","damage-flash");water=St("div","underwater");cameraFlash=St("div","camera-flash");itemNameTimer=0;lastSignature="";update(t,e,n,s,r){const o=JSON.stringify([t.slots.slice(0,Sn),t.selected,e,n,s]);if(o!==this.lastSignature){const a=this.lastSignature===""||JSON.parse(this.lastSignature)[1]!==t.selected;this.lastSignature=o,this.slots.forEach((l,h)=>{const u=t.slots[h];if(l.classList.toggle("selected",h===t.selected),l.replaceChildren(),u){const d=St("img");d.src=Qr(this.atlas,u.id),d.alt=pn(u.id),d.draggable=!1,l.appendChild(d),e==="survival"&&u.count>1&&l.appendChild(St("span","count",String(u.count)));const f=tu(u);f&&l.appendChild(f)}}),this.hearts.hidden=e!=="survival",this.hunger.hidden=e!=="survival",this.hunger.dataset.food=String(s),this.hunger.replaceChildren(...Array.from({length:10},(l,h)=>{const u=s-(9-h)*2;return St("span",`food ${u>=2?"full":u===1?"half":"empty"}`)})),this.hearts.replaceChildren(...Array.from({length:10},(l,h)=>{const u=n-h*2;return St("span",`heart ${u>=2?"full":u===1?"half":"empty"}`)}));const c=t.selectedStack();a&&c&&this.showItemName(pn(c.id))}this.itemNameTimer>0&&(this.itemNameTimer-=r,this.itemName.style.opacity=String(Math.min(1,this.itemNameTimer)))}showItemName(t){this.itemName.textContent=t,this.itemNameTimer=2}flashDamage(){this.damage.classList.remove("on"),this.damage.offsetWidth,this.damage.classList.add("on")}flashCamera(){this.cameraFlash.classList.remove("on"),this.cameraFlash.offsetWidth,this.cameraFlash.classList.add("on")}setUnderwater(t){this.water.classList.toggle("on",t)}toggleDebug(){this.debug.hidden=!this.debug.hidden}setDebug(t){this.debug.hidden||(this.debug.textContent=t)}message(t){const e=St("div","chat-line",t);for(this.log.appendChild(e),setTimeout(()=>e.classList.add("fade"),6e3),setTimeout(()=>e.remove(),7e3);this.log.children.length>8;)this.log.firstChild?.remove()}}class op{constructor(t,e,n){this.atlas=e,this.onClose=n,this.root.hidden=!0,this.root.appendChild(this.panel),this.root.addEventListener("pointerdown",s=>{s.target===this.root&&this.onClose()}),t.appendChild(this.root)}root=St("div","screen inventory-screen");panel=St("div","panel inventory-panel");cursor=null;grid=[];width=0;kind="inventory";inventory=null;mode="creative";furnace=null;furnaceSignature="";progressFill=null;flameFill=null;get open(){return!this.root.hidden}show(t,e,n="inventory",s=null){this.inventory=t,this.mode=e,this.kind=n,this.furnace=n==="furnace"?s:null,this.width=n==="crafting_table"?3:n==="furnace"?0:e==="survival"?2:0,this.grid=new Array(this.width*this.width).fill(null),this.cursor=null,this.render(),this.root.hidden=!1}hide(){if(this.inventory)for(const t of[...this.grid,this.cursor])t&&this.inventory.addStack(t);this.grid=[],this.cursor=null,this.furnace=null,this.root.hidden=!0}refresh(){if(this.root.hidden||!this.furnace)return;const t=this.furnace;JSON.stringify([t.input,t.fuel,t.output])!==this.furnaceSignature?this.render():this.updateGauges()}render(){const t=this.inventory,e=this.mode,n=St("div","panel-header"),s=this.kind==="crafting_table"?"Crafting Table":this.kind==="furnace"?"Furnace":e==="creative"?"Creative Inventory":"Inventory";n.append(St("h2","",s));const r=St("button","close-button","✕");r.setAttribute("aria-label","Close inventory"),r.addEventListener("click",()=>this.onClose()),n.append(r);const o=[n];if(this.width>0&&o.push(this.craftingSection()),this.furnace&&o.push(this.furnaceSection()),e==="creative"&&!this.furnace){const h=St("div","item-grid");for(const u of[...Dh(),...Es]){const d=this.cell(u.id,0,u.displayName);d.dataset.block=u.name,d.addEventListener("click",()=>{this.width>0?this.cursor={id:u.id,count:He(u.id)}:t.pick(u.id),this.render()}),h.appendChild(d)}o.push(h)}if(e==="survival"||this.width>0||this.furnace){const h=St("div","item-grid");for(let u=Sn;u<la;u++)h.appendChild(this.slotCell(u));o.push(h)}const a=St("div","item-grid hotbar-grid");for(let h=0;h<Sn;h++){const u=this.slotCell(h);u.classList.toggle("selected",h===t.selected),a.appendChild(u)}o.push(St("div","divider"),a);const c=St("div","cursor-stack");if(c.dataset.testid="cursor",this.cursor){const h=St("img");h.src=Qr(this.atlas,this.cursor.id),h.alt="",c.append(St("span","","Holding:"),h,St("span","",`${pn(this.cursor.id)} ×${this.cursor.count}`))}o.push(c);const l=this.furnace?"Tap a slot to pick items up, then tap the furnace's top slot (to smelt) or bottom slot (fuel). Tap the result to collect it.":e==="creative"&&this.width===0?"Pick a block to put it in the selected hotbar slot. Tap a hotbar slot to select it.":"Tap a slot to pick items up, tap another slot to put them down. Crafting cells take one item per tap.";o.push(St("p","hint",l)),this.panel.replaceChildren(...o)}craftingSection(){const t=St("div","crafting"),e=St("div",`item-grid craft-grid craft-${this.width}`);this.grid.forEach((r,o)=>{const a=this.cell(r?.id??null,r?.count??0,r?pn(r.id):"Empty");a.dataset.craft=String(o),a.addEventListener("click",()=>{const c=this.grid[o];this.cursor&&(!c||c.id===this.cursor.id)&&(c?.count??0)<He(this.cursor.id)?(this.grid[o]={...this.cursor,count:(c?.count??0)+1},this.cursor.count--,this.cursor.count<=0&&(this.cursor=null)):!this.cursor&&c&&(this.cursor=c,this.grid[o]=null),this.render()}),e.appendChild(a)});const n=pa(this.grid,this.width),s=this.cell(n?.result.id??null,n?.result.count??0,n?pn(n.result.id):"No recipe");return s.classList.add("craft-result"),s.dataset.craftResult="",s.addEventListener("click",()=>{const r=pa(this.grid,this.width);if(!r||this.cursor&&(this.cursor.id!==r.result.id||this.cursor.count+r.result.count>He(r.result.id)))return;const o=Xd(this.grid,this.width);this.cursor=this.cursor?{id:o.id,count:this.cursor.count+o.count}:o,this.render()}),t.append(e,St("span","craft-arrow","➜"),s),t}furnaceSection(){const t=this.furnace;this.furnaceSignature=JSON.stringify([t.input,t.fuel,t.output]);const e=(a,c)=>{const l=t[a],h=this.cell(l?.id??null,l?.count??0,l?pn(l.id):c);return h.dataset.furnace=a,h.addEventListener("click",()=>{const u=t[a],d=this.cursor;if(a==="output")u&&!d?(this.cursor=u,t.output=null):u&&d&&d.id===u.id&&d.count+u.count<=He(u.id)&&(d.count+=u.count,t.output=null);else if(d){if(a==="fuel"&&ma(d.id)===0)return;if(u&&u.id===d.id&&He(u.id)>1){const f=Math.min(He(u.id)-u.count,d.count);u.count+=f,d.count-=f,d.count<=0&&(this.cursor=null)}else t[a]=d,this.cursor=u}else u&&(this.cursor=u,t[a]=null);this.render()}),h},n=St("div","furnace-flame");this.flameFill=St("div","furnace-flame-fill"),n.appendChild(this.flameFill);const s=St("div","furnace-progress");this.progressFill=St("div","furnace-progress-fill"),s.appendChild(this.progressFill);const r=St("div","furnace-column");r.append(e("input","Smelt"),n,e("fuel","Fuel"));const o=St("div","furnace");return o.append(r,s,e("output","Result")),this.updateGauges(),o}updateGauges(){const t=this.furnace;if(!t||!this.progressFill||!this.flameFill)return;this.progressFill.style.width=`${Math.round(t.progress*100)}%`,this.progressFill.parentElement.dataset.progress=t.progress.toFixed(2);const e=t.burnTotal>0?t.burnLeft/t.burnTotal:0;this.flameFill.style.height=`${Math.round(e*100)}%`,this.flameFill.parentElement.dataset.burning=String(t.burnLeft>0)}slotCell(t){const e=this.inventory,n=e.slots[t],s=this.mode==="survival"||this.width>0,r=this.cell(n?.id??null,s?n?.count??0:0,n?pn(n.id):"Empty");r.dataset.slot=String(t);const o=n?tu(n):null;return o&&r.appendChild(o),r.addEventListener("click",()=>{if(this.mode==="creative"&&this.width===0&&!this.furnace)t<Sn&&e.select(t);else if(this.cursor){const a=e.slots[t];if(a&&a.id===this.cursor.id&&He(a.id)>1){const c=Math.min(He(a.id)-a.count,this.cursor.count);a.count+=c,this.cursor.count-=c,this.cursor.count<=0&&(this.cursor=null)}else e.setSlot(t,this.cursor),this.cursor=a?{...a}:null}else n?(this.cursor={...n},e.setSlot(t,null)):t<Sn&&e.select(t);this.render()}),r}cell(t,e,n){const s=St("button","item-cell");if(s.title=n,t!==null){const r=St("img");r.src=Qr(this.atlas,t),r.alt=n,r.draggable=!1,s.appendChild(r),e>1&&s.appendChild(St("span","count",String(e)))}return s}}function tu(i){const t=Ui(i.id);if(!t||!i.damage)return null;const e=1-i.damage/t.durability,n=St("span","durability"),s=St("span","durability-fill");return s.style.width=`${Math.round(e*100)}%`,s.style.background=`hsl(${Math.round(e*120)}, 90%, 45%)`,n.appendChild(s),n.dataset.durability=String(t.durability-i.damage),n}class ap{constructor(t,e,n){this.onClose=n,this.input.type="text",this.input.placeholder="Type a command, e.g. /time set night",this.input.autocomplete="off",this.input.setAttribute("aria-label","Chat"),this.root.appendChild(this.input),this.root.hidden=!0,this.root.addEventListener("submit",s=>{s.preventDefault();const r=this.input.value.trim();this.hide(),r&&e(r)}),this.input.addEventListener("keydown",s=>{s.stopPropagation(),s.key==="Escape"&&this.hide()}),t.appendChild(this.root)}root=St("form","chat-input");input=St("input");get open(){return!this.root.hidden}show(t=""){this.root.hidden=!1,this.input.value=t,this.input.focus()}hide(){this.root.hidden=!0,this.input.blur(),this.onClose()}}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const gl="170",lp=0,vc=1,cp=2,eu=1,hp=2,Nn=3,Wn=0,We=1,Ze=2,oi=0,ps=1,xc=2,yc=3,Mc=4,up=5,Ci=100,dp=101,fp=102,pp=103,mp=104,gp=200,_p=201,vp=202,xp=203,ya=204,Ma=205,yp=206,Mp=207,Sp=208,bp=209,Ep=210,Tp=211,wp=212,Ap=213,Cp=214,Sa=0,ba=1,Ea=2,vs=3,Ta=4,wa=5,Aa=6,Ca=7,nu=0,Rp=1,Pp=2,ai=0,Lp=1,Dp=2,Ip=3,Up=4,Np=5,kp=6,Fp=7,iu=300,xs=301,ys=302,Ra=303,Pa=304,lo=306,to=1e3,Pi=1001,La=1002,ge=1003,Op=1004,cr=1005,bn=1006,Ao=1007,Li=1008,Xn=1009,su=1010,ru=1011,$s=1012,_l=1013,ki=1014,Bn=1015,Zs=1016,vl=1017,xl=1018,Ms=1020,ou=35902,au=1021,lu=1022,Ve=1023,cu=1024,hu=1025,ms=1026,Ss=1027,uu=1028,yl=1029,du=1030,Ml=1031,Sl=1033,Hr=33776,Gr=33777,Vr=33778,Wr=33779,Da=35840,Ia=35841,Ua=35842,Na=35843,ka=36196,Fa=37492,Oa=37496,Ba=37808,za=37809,Ha=37810,Ga=37811,Va=37812,Wa=37813,Xa=37814,Ya=37815,$a=37816,qa=37817,Ka=37818,Za=37819,ja=37820,Ja=37821,Xr=36492,Qa=36494,tl=36495,fu=36283,el=36284,nl=36285,il=36286,Bp=3200,zp=3201,Hp=0,Gp=1,ri="",be="srgb",Ts="srgb-linear",co="linear",ie="srgb",Hi=7680,Sc=519,Vp=512,Wp=513,Xp=514,pu=515,Yp=516,$p=517,qp=518,Kp=519,sl=35044,bc="300 es",zn=2e3,eo=2001;class ws{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Le=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Yr=Math.PI/180,rl=180/Math.PI;function li(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Le[i&255]+Le[i>>8&255]+Le[i>>16&255]+Le[i>>24&255]+"-"+Le[t&255]+Le[t>>8&255]+"-"+Le[t>>16&15|64]+Le[t>>24&255]+"-"+Le[e&63|128]+Le[e>>8&255]+"-"+Le[e>>16&255]+Le[e>>24&255]+Le[n&255]+Le[n>>8&255]+Le[n>>16&255]+Le[n>>24&255]).toLowerCase()}function Ge(i,t,e){return Math.max(t,Math.min(e,i))}function Zp(i,t){return(i%t+t)%t}function Co(i,t,e){return(1-e)*i+e*t}function Mn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function se(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Xt{constructor(t=0,e=0){Xt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ge(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Nt{constructor(t,e,n,s,r,o,a,c,l){Nt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=s[0],m=s[3],p=s[6],b=s[1],S=s[4],y=s[7],U=s[2],w=s[5],A=s[8];return r[0]=o*_+a*b+c*U,r[3]=o*m+a*S+c*w,r[6]=o*p+a*y+c*A,r[1]=l*_+h*b+u*U,r[4]=l*m+h*S+u*w,r[7]=l*p+h*y+u*A,r[2]=d*_+f*b+g*U,r[5]=d*m+f*S+g*w,r[8]=d*p+f*y+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,g=e*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(s*l-h*n)*_,t[2]=(a*n-s*o)*_,t[3]=d*_,t[4]=(h*e-s*c)*_,t[5]=(s*r-a*e)*_,t[6]=f*_,t[7]=(n*c-l*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ro.makeScale(t,e)),this}rotate(t){return this.premultiply(Ro.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ro.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ro=new Nt;function mu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function no(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function jp(){const i=no("canvas");return i.style.display="block",i}const Ec={};function Hs(i){i in Ec||(Ec[i]=!0,console.warn(i))}function Jp(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Qp(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function tm(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Zt={enabled:!0,workingColorSpace:Ts,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ie&&(i.r=Hn(i.r),i.g=Hn(i.g),i.b=Hn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ie&&(i.r=gs(i.r),i.g=gs(i.g),i.b=gs(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ri?co:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Hn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function gs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Tc=[.64,.33,.3,.6,.15,.06],wc=[.2126,.7152,.0722],Ac=[.3127,.329],Cc=new Nt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Rc=new Nt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Zt.define({[Ts]:{primaries:Tc,whitePoint:Ac,transfer:co,toXYZ:Cc,fromXYZ:Rc,luminanceCoefficients:wc,workingColorSpaceConfig:{unpackColorSpace:be},outputColorSpaceConfig:{drawingBufferColorSpace:be}},[be]:{primaries:Tc,whitePoint:Ac,transfer:ie,toXYZ:Cc,fromXYZ:Rc,luminanceCoefficients:wc,outputColorSpaceConfig:{drawingBufferColorSpace:be}}});let Gi;class em{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Gi===void 0&&(Gi=no("canvas")),Gi.width=t.width,Gi.height=t.height;const n=Gi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Gi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=no("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Hn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Hn(e[n]/255)*255):e[n]=Hn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let nm=0;class gu{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:nm++}),this.uuid=li(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Po(s[o].image)):r.push(Po(s[o]))}else r=Po(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Po(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?em.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let im=0;class Ne extends ws{constructor(t=Ne.DEFAULT_IMAGE,e=Ne.DEFAULT_MAPPING,n=Pi,s=Pi,r=bn,o=Li,a=Ve,c=Xn,l=Ne.DEFAULT_ANISOTROPY,h=ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:im++}),this.uuid=li(),this.name="",this.source=new gu(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Xt(0,0),this.repeat=new Xt(1,1),this.center=new Xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==iu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case to:t.x=t.x-Math.floor(t.x);break;case Pi:t.x=t.x<0?0:1;break;case La:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case to:t.y=t.y-Math.floor(t.y);break;case Pi:t.y=t.y<0?0:1;break;case La:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ne.DEFAULT_IMAGE=null;Ne.DEFAULT_MAPPING=iu;Ne.DEFAULT_ANISOTROPY=1;class ye{constructor(t=0,e=0,n=0,s=1){ye.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(l+1)/2,y=(f+1)/2,U=(p+1)/2,w=(h+d)/4,A=(u+_)/4,P=(g+m)/4;return S>y&&S>U?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=w/n,r=A/n):y>U?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=w/s,r=P/s):U<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(U),n=A/r,s=P/r),this.set(n,s,r,e),this}let b=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(u-_)/b,this.z=(d-h)/b,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class sm extends ws{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ye(0,0,t,e),this.scissorTest=!1,this.viewport=new ye(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ne(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new gu(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fi extends sm{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class _u extends Ne{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ge,this.minFilter=ge,this.wrapR=Pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class rm extends Ne{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ge,this.minFilter=ge,this.wrapR=Pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class js{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3];const d=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(u!==_||c!==d||l!==f||h!==g){let m=1-a;const p=c*d+l*f+h*g+u*_,b=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){const U=Math.sqrt(S),w=Math.atan2(U,p*b);m=Math.sin(m*w)/U,a=Math.sin(a*w)/U}const y=a*b;if(c=c*m+d*y,l=l*m+f*y,h=h*m+g*y,u=u*m+_*y,m===1-a){const U=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=U,l*=U,h*=U,u*=U}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*u+c*f-l*d,t[e+1]=c*g+h*d+l*u-a*f,t[e+2]=l*g+h*f+a*d-c*u,t[e+3]=h*g-a*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),d=c(n/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ge(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(t=0,e=0,n=0){N.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Pc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Pc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Lo.copy(this).projectOnVector(t),this.sub(Lo)}reflect(t){return this.sub(Lo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ge(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Lo=new N,Pc=new js;class Js{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(hn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(hn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=hn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,hn):hn.fromBufferAttribute(r,o),hn.applyMatrix4(t.matrixWorld),this.expandByPoint(hn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),hr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),hr.copy(n.boundingBox)),hr.applyMatrix4(t.matrixWorld),this.union(hr)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,hn),hn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Is),ur.subVectors(this.max,Is),Vi.subVectors(t.a,Is),Wi.subVectors(t.b,Is),Xi.subVectors(t.c,Is),Jn.subVectors(Wi,Vi),Qn.subVectors(Xi,Wi),_i.subVectors(Vi,Xi);let e=[0,-Jn.z,Jn.y,0,-Qn.z,Qn.y,0,-_i.z,_i.y,Jn.z,0,-Jn.x,Qn.z,0,-Qn.x,_i.z,0,-_i.x,-Jn.y,Jn.x,0,-Qn.y,Qn.x,0,-_i.y,_i.x,0];return!Do(e,Vi,Wi,Xi,ur)||(e=[1,0,0,0,1,0,0,0,1],!Do(e,Vi,Wi,Xi,ur))?!1:(dr.crossVectors(Jn,Qn),e=[dr.x,dr.y,dr.z],Do(e,Vi,Wi,Xi,ur))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,hn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(hn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Pn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Pn=[new N,new N,new N,new N,new N,new N,new N,new N],hn=new N,hr=new Js,Vi=new N,Wi=new N,Xi=new N,Jn=new N,Qn=new N,_i=new N,Is=new N,ur=new N,dr=new N,vi=new N;function Do(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){vi.fromArray(i,r);const a=s.x*Math.abs(vi.x)+s.y*Math.abs(vi.y)+s.z*Math.abs(vi.z),c=t.dot(vi),l=e.dot(vi),h=n.dot(vi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const om=new Js,Us=new N,Io=new N;class ho{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):om.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Us.subVectors(t,this.center);const e=Us.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Us,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Io.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Us.copy(t.center).add(Io)),this.expandByPoint(Us.copy(t.center).sub(Io))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ln=new N,Uo=new N,fr=new N,ti=new N,No=new N,pr=new N,ko=new N;class vu{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ln)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ln.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ln.copy(this.origin).addScaledVector(this.direction,e),Ln.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Uo.copy(t).add(e).multiplyScalar(.5),fr.copy(e).sub(t).normalize(),ti.copy(this.origin).sub(Uo);const r=t.distanceTo(e)*.5,o=-this.direction.dot(fr),a=ti.dot(this.direction),c=-ti.dot(fr),l=ti.lengthSq(),h=Math.abs(1-o*o);let u,d,f,g;if(h>0)if(u=o*c-a,d=o*a-c,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Uo).addScaledVector(fr,d),f}intersectSphere(t,e){Ln.subVectors(t.center,this.origin);const n=Ln.dot(this.direction),s=Ln.dot(Ln)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Ln)!==null}intersectTriangle(t,e,n,s,r){No.subVectors(e,t),pr.subVectors(n,t),ko.crossVectors(No,pr);let o=this.direction.dot(ko),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ti.subVectors(this.origin,t);const c=a*this.direction.dot(pr.crossVectors(ti,pr));if(c<0)return null;const l=a*this.direction.dot(No.cross(ti));if(l<0||c+l>o)return null;const h=-a*ti.dot(ko);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ve{constructor(t,e,n,s,r,o,a,c,l,h,u,d,f,g,_,m){ve.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,u,d,f,g,_,m)}set(t,e,n,s,r,o,a,c,l,h,u,d,f,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ve().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Yi.setFromMatrixColumn(t,0).length(),r=1/Yi.setFromMatrixColumn(t,1).length(),o=1/Yi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,f=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+g*l,e[5]=d-_*l,e[9]=-a*c,e[2]=_-d*l,e[6]=g+f*l,e[10]=o*c}else if(t.order==="YXZ"){const d=c*h,f=c*u,g=l*h,_=l*u;e[0]=d+_*a,e[4]=g*a-f,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=_+d*a,e[10]=o*c}else if(t.order==="ZXY"){const d=c*h,f=c*u,g=l*h,_=l*u;e[0]=d-_*a,e[4]=-o*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=_-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const d=o*h,f=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=g*l-f,e[8]=d*l+_,e[1]=c*u,e[5]=_*l+d,e[9]=f*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const d=o*c,f=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=_-d*u,e[8]=g*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*u+g,e[10]=d-_*u}else if(t.order==="XZY"){const d=o*c,f=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+_,e[5]=o*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(am,t,lm)}lookAt(t,e,n){const s=this.elements;return qe.subVectors(t,e),qe.lengthSq()===0&&(qe.z=1),qe.normalize(),ei.crossVectors(n,qe),ei.lengthSq()===0&&(Math.abs(n.z)===1?qe.x+=1e-4:qe.z+=1e-4,qe.normalize(),ei.crossVectors(n,qe)),ei.normalize(),mr.crossVectors(qe,ei),s[0]=ei.x,s[4]=mr.x,s[8]=qe.x,s[1]=ei.y,s[5]=mr.y,s[9]=qe.y,s[2]=ei.z,s[6]=mr.z,s[10]=qe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],b=n[3],S=n[7],y=n[11],U=n[15],w=s[0],A=s[4],P=s[8],E=s[12],M=s[1],C=s[5],V=s[9],B=s[13],q=s[2],K=s[6],X=s[10],j=s[14],H=s[3],st=s[7],ut=s[11],bt=s[15];return r[0]=o*w+a*M+c*q+l*H,r[4]=o*A+a*C+c*K+l*st,r[8]=o*P+a*V+c*X+l*ut,r[12]=o*E+a*B+c*j+l*bt,r[1]=h*w+u*M+d*q+f*H,r[5]=h*A+u*C+d*K+f*st,r[9]=h*P+u*V+d*X+f*ut,r[13]=h*E+u*B+d*j+f*bt,r[2]=g*w+_*M+m*q+p*H,r[6]=g*A+_*C+m*K+p*st,r[10]=g*P+_*V+m*X+p*ut,r[14]=g*E+_*B+m*j+p*bt,r[3]=b*w+S*M+y*q+U*H,r[7]=b*A+S*C+y*K+U*st,r[11]=b*P+S*V+y*X+U*ut,r[15]=b*E+S*B+y*j+U*bt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*c*u-s*l*u-r*a*d+n*l*d+s*a*f-n*c*f)+_*(+e*c*f-e*l*d+r*o*d-s*o*f+s*l*h-r*c*h)+m*(+e*l*u-e*a*f-r*o*u+n*o*f+r*a*h-n*l*h)+p*(-s*a*h-e*c*u+e*a*d+s*o*u-n*o*d+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],b=u*m*l-_*d*l+_*c*f-a*m*f-u*c*p+a*d*p,S=g*d*l-h*m*l-g*c*f+o*m*f+h*c*p-o*d*p,y=h*_*l-g*u*l+g*a*f-o*_*f-h*a*p+o*u*p,U=g*u*c-h*_*c-g*a*d+o*_*d+h*a*m-o*u*m,w=e*b+n*S+s*y+r*U;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/w;return t[0]=b*A,t[1]=(_*d*r-u*m*r-_*s*f+n*m*f+u*s*p-n*d*p)*A,t[2]=(a*m*r-_*c*r+_*s*l-n*m*l-a*s*p+n*c*p)*A,t[3]=(u*c*r-a*d*r-u*s*l+n*d*l+a*s*f-n*c*f)*A,t[4]=S*A,t[5]=(h*m*r-g*d*r+g*s*f-e*m*f-h*s*p+e*d*p)*A,t[6]=(g*c*r-o*m*r-g*s*l+e*m*l+o*s*p-e*c*p)*A,t[7]=(o*d*r-h*c*r+h*s*l-e*d*l-o*s*f+e*c*f)*A,t[8]=y*A,t[9]=(g*u*r-h*_*r-g*n*f+e*_*f+h*n*p-e*u*p)*A,t[10]=(o*_*r-g*a*r+g*n*l-e*_*l-o*n*p+e*a*p)*A,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*f-e*a*f)*A,t[12]=U*A,t[13]=(h*_*s-g*u*s+g*n*d-e*_*d-h*n*m+e*u*m)*A,t[14]=(g*a*s-o*_*s-g*n*c+e*_*c+o*n*m-e*a*m)*A,t[15]=(o*u*s-h*a*s+h*n*c-e*u*c-o*n*d+e*a*d)*A,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,g=r*u,_=o*h,m=o*u,p=a*u,b=c*l,S=c*h,y=c*u,U=n.x,w=n.y,A=n.z;return s[0]=(1-(_+p))*U,s[1]=(f+y)*U,s[2]=(g-S)*U,s[3]=0,s[4]=(f-y)*w,s[5]=(1-(d+p))*w,s[6]=(m+b)*w,s[7]=0,s[8]=(g+S)*A,s[9]=(m-b)*A,s[10]=(1-(d+_))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Yi.set(s[0],s[1],s[2]).length();const o=Yi.set(s[4],s[5],s[6]).length(),a=Yi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],un.copy(this);const l=1/r,h=1/o,u=1/a;return un.elements[0]*=l,un.elements[1]*=l,un.elements[2]*=l,un.elements[4]*=h,un.elements[5]*=h,un.elements[6]*=h,un.elements[8]*=u,un.elements[9]*=u,un.elements[10]*=u,e.setFromRotationMatrix(un),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=zn){const c=this.elements,l=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s);let f,g;if(a===zn)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===eo)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=zn){const c=this.elements,l=1/(e-t),h=1/(n-s),u=1/(o-r),d=(e+t)*l,f=(n+s)*h;let g,_;if(a===zn)g=(o+r)*u,_=-2*u;else if(a===eo)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Yi=new N,un=new ve,am=new N(0,0,0),lm=new N(1,1,1),ei=new N,mr=new N,qe=new N,Lc=new ve,Dc=new js;class Yn{constructor(t=0,e=0,n=0,s=Yn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Ge(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ge(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ge(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ge(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ge(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ge(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Lc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Lc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Dc.setFromEuler(this),this.setFromQuaternion(Dc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Yn.DEFAULT_ORDER="XYZ";class xu{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let cm=0;const Ic=new N,$i=new js,Dn=new ve,gr=new N,Ns=new N,hm=new N,um=new js,Uc=new N(1,0,0),Nc=new N(0,1,0),kc=new N(0,0,1),Fc={type:"added"},dm={type:"removed"},qi={type:"childadded",child:null},Fo={type:"childremoved",child:null};class Be extends ws{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cm++}),this.uuid=li(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Be.DEFAULT_UP.clone();const t=new N,e=new Yn,n=new js,s=new N(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ve},normalMatrix:{value:new Nt}}),this.matrix=new ve,this.matrixWorld=new ve,this.matrixAutoUpdate=Be.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return $i.setFromAxisAngle(t,e),this.quaternion.multiply($i),this}rotateOnWorldAxis(t,e){return $i.setFromAxisAngle(t,e),this.quaternion.premultiply($i),this}rotateX(t){return this.rotateOnAxis(Uc,t)}rotateY(t){return this.rotateOnAxis(Nc,t)}rotateZ(t){return this.rotateOnAxis(kc,t)}translateOnAxis(t,e){return Ic.copy(t).applyQuaternion(this.quaternion),this.position.add(Ic.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Uc,t)}translateY(t){return this.translateOnAxis(Nc,t)}translateZ(t){return this.translateOnAxis(kc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Dn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?gr.copy(t):gr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ns.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Dn.lookAt(Ns,gr,this.up):Dn.lookAt(gr,Ns,this.up),this.quaternion.setFromRotationMatrix(Dn),s&&(Dn.extractRotation(s.matrixWorld),$i.setFromRotationMatrix(Dn),this.quaternion.premultiply($i.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Fc),qi.child=t,this.dispatchEvent(qi),qi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(dm),Fo.child=t,this.dispatchEvent(Fo),Fo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Dn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Dn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Dn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Fc),qi.child=t,this.dispatchEvent(qi),qi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ns,t,hm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ns,um,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Be.DEFAULT_UP=new N(0,1,0);Be.DEFAULT_MATRIX_AUTO_UPDATE=!0;Be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const dn=new N,In=new N,Oo=new N,Un=new N,Ki=new N,Zi=new N,Oc=new N,Bo=new N,zo=new N,Ho=new N,Go=new ye,Vo=new ye,Wo=new ye;class je{constructor(t=new N,e=new N,n=new N){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),dn.subVectors(t,e),s.cross(dn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){dn.subVectors(s,e),In.subVectors(n,e),Oo.subVectors(t,e);const o=dn.dot(dn),a=dn.dot(In),c=dn.dot(Oo),l=In.dot(In),h=In.dot(Oo),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(l*c-a*h)*d,g=(o*h-a*c)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Un)===null?!1:Un.x>=0&&Un.y>=0&&Un.x+Un.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,Un)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Un.x),c.addScaledVector(o,Un.y),c.addScaledVector(a,Un.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return Go.setScalar(0),Vo.setScalar(0),Wo.setScalar(0),Go.fromBufferAttribute(t,e),Vo.fromBufferAttribute(t,n),Wo.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Go,r.x),o.addScaledVector(Vo,r.y),o.addScaledVector(Wo,r.z),o}static isFrontFacing(t,e,n,s){return dn.subVectors(n,e),In.subVectors(t,e),dn.cross(In).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return dn.subVectors(this.c,this.b),In.subVectors(this.a,this.b),dn.cross(In).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return je.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return je.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return je.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return je.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return je.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Ki.subVectors(s,n),Zi.subVectors(r,n),Bo.subVectors(t,n);const c=Ki.dot(Bo),l=Zi.dot(Bo);if(c<=0&&l<=0)return e.copy(n);zo.subVectors(t,s);const h=Ki.dot(zo),u=Zi.dot(zo);if(h>=0&&u<=h)return e.copy(s);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(Ki,o);Ho.subVectors(t,r);const f=Ki.dot(Ho),g=Zi.dot(Ho);if(g>=0&&f<=g)return e.copy(r);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(Zi,a);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Oc.subVectors(r,s),a=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector(Oc,a);const p=1/(m+_+d);return o=_*p,a=d*p,e.copy(n).addScaledVector(Ki,o).addScaledVector(Zi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const yu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ni={h:0,s:0,l:0},_r={h:0,s:0,l:0};function Xo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Ht{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=be){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Zt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Zt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Zt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Zt.workingColorSpace){if(t=Zp(t,1),e=Ge(e,0,1),n=Ge(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Xo(o,r,t+1/3),this.g=Xo(o,r,t),this.b=Xo(o,r,t-1/3)}return Zt.toWorkingColorSpace(this,s),this}setStyle(t,e=be){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=be){const n=yu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Hn(t.r),this.g=Hn(t.g),this.b=Hn(t.b),this}copyLinearToSRGB(t){return this.r=gs(t.r),this.g=gs(t.g),this.b=gs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=be){return Zt.fromWorkingColorSpace(De.copy(this),t),Math.round(Ge(De.r*255,0,255))*65536+Math.round(Ge(De.g*255,0,255))*256+Math.round(Ge(De.b*255,0,255))}getHexString(t=be){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Zt.workingColorSpace){Zt.fromWorkingColorSpace(De.copy(this),e);const n=De.r,s=De.g,r=De.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Zt.workingColorSpace){return Zt.fromWorkingColorSpace(De.copy(this),e),t.r=De.r,t.g=De.g,t.b=De.b,t}getStyle(t=be){Zt.fromWorkingColorSpace(De.copy(this),t);const e=De.r,n=De.g,s=De.b;return t!==be?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ni),this.setHSL(ni.h+t,ni.s+e,ni.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ni),t.getHSL(_r);const n=Co(ni.h,_r.h,e),s=Co(ni.s,_r.s,e),r=Co(ni.l,_r.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const De=new Ht;Ht.NAMES=yu;let fm=0;class As extends ws{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fm++}),this.uuid=li(),this.name="",this.blending=ps,this.side=Wn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ya,this.blendDst=Ma,this.blendEquation=Ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ht(0,0,0),this.blendAlpha=0,this.depthFunc=vs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hi,this.stencilZFail=Hi,this.stencilZPass=Hi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ps&&(n.blending=this.blending),this.side!==Wn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ya&&(n.blendSrc=this.blendSrc),this.blendDst!==Ma&&(n.blendDst=this.blendDst),this.blendEquation!==Ci&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==vs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Sc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Hi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Hi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Hi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class _n extends As{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.combine=nu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Se=new N,vr=new Xt;class Ie{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=sl,this.updateRanges=[],this.gpuType=Bn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)vr.fromBufferAttribute(this,e),vr.applyMatrix3(t),this.setXY(e,vr.x,vr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix3(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix4(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyNormalMatrix(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.transformDirection(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Mn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=se(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Mn(e,this.array)),e}setX(t,e){return this.normalized&&(e=se(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Mn(e,this.array)),e}setY(t,e){return this.normalized&&(e=se(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Mn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=se(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Mn(e,this.array)),e}setW(t,e){return this.normalized&&(e=se(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=se(e,this.array),n=se(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=se(e,this.array),n=se(n,this.array),s=se(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=se(e,this.array),n=se(n,this.array),s=se(s,this.array),r=se(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==sl&&(t.usage=this.usage),t}}class Mu extends Ie{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Su extends Ie{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Tn extends Ie{constructor(t,e,n){super(new Float32Array(t),e,n)}}let pm=0;const nn=new ve,Yo=new Be,ji=new N,Ke=new Js,ks=new Js,Ce=new N;class vn extends ws{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pm++}),this.uuid=li(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(mu(t)?Su:Mu)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Nt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return nn.makeRotationFromQuaternion(t),this.applyMatrix4(nn),this}rotateX(t){return nn.makeRotationX(t),this.applyMatrix4(nn),this}rotateY(t){return nn.makeRotationY(t),this.applyMatrix4(nn),this}rotateZ(t){return nn.makeRotationZ(t),this.applyMatrix4(nn),this}translate(t,e,n){return nn.makeTranslation(t,e,n),this.applyMatrix4(nn),this}scale(t,e,n){return nn.makeScale(t,e,n),this.applyMatrix4(nn),this}lookAt(t){return Yo.lookAt(t),Yo.updateMatrix(),this.applyMatrix4(Yo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ji).negate(),this.translate(ji.x,ji.y,ji.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Tn(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Js);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Ke.setFromBufferAttribute(r),this.morphTargetsRelative?(Ce.addVectors(this.boundingBox.min,Ke.min),this.boundingBox.expandByPoint(Ce),Ce.addVectors(this.boundingBox.max,Ke.max),this.boundingBox.expandByPoint(Ce)):(this.boundingBox.expandByPoint(Ke.min),this.boundingBox.expandByPoint(Ke.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ho);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){const n=this.boundingSphere.center;if(Ke.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];ks.setFromBufferAttribute(a),this.morphTargetsRelative?(Ce.addVectors(Ke.min,ks.min),Ke.expandByPoint(Ce),Ce.addVectors(Ke.max,ks.max),Ke.expandByPoint(Ce)):(Ke.expandByPoint(ks.min),Ke.expandByPoint(ks.max))}Ke.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ce.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ce));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Ce.fromBufferAttribute(a,l),c&&(ji.fromBufferAttribute(t,l),Ce.add(ji)),s=Math.max(s,n.distanceToSquared(Ce))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ie(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let P=0;P<n.count;P++)a[P]=new N,c[P]=new N;const l=new N,h=new N,u=new N,d=new Xt,f=new Xt,g=new Xt,_=new N,m=new N;function p(P,E,M){l.fromBufferAttribute(n,P),h.fromBufferAttribute(n,E),u.fromBufferAttribute(n,M),d.fromBufferAttribute(r,P),f.fromBufferAttribute(r,E),g.fromBufferAttribute(r,M),h.sub(l),u.sub(l),f.sub(d),g.sub(d);const C=1/(f.x*g.y-g.x*f.y);isFinite(C)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(C),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(C),a[P].add(_),a[E].add(_),a[M].add(_),c[P].add(m),c[E].add(m),c[M].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let P=0,E=b.length;P<E;++P){const M=b[P],C=M.start,V=M.count;for(let B=C,q=C+V;B<q;B+=3)p(t.getX(B+0),t.getX(B+1),t.getX(B+2))}const S=new N,y=new N,U=new N,w=new N;function A(P){U.fromBufferAttribute(s,P),w.copy(U);const E=a[P];S.copy(E),S.sub(U.multiplyScalar(U.dot(E))).normalize(),y.crossVectors(w,E);const C=y.dot(c[P])<0?-1:1;o.setXYZW(P,S.x,S.y,S.z,C)}for(let P=0,E=b.length;P<E;++P){const M=b[P],C=M.start,V=M.count;for(let B=C,q=C+V;B<q;B+=3)A(t.getX(B+0)),A(t.getX(B+1)),A(t.getX(B+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ie(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new N,r=new N,o=new N,a=new N,c=new N,l=new N,h=new N,u=new N;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ce.fromBufferAttribute(t,e),Ce.normalize(),t.setXYZ(e,Ce.x,Ce.y,Ce.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let f=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new Ie(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new vn,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=t(d,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Bc=new ve,xi=new vu,xr=new ho,zc=new N,yr=new N,Mr=new N,Sr=new N,$o=new N,br=new N,Hc=new N,Er=new N;class Re extends Be{constructor(t=new vn,e=new _n){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){br.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&($o.fromBufferAttribute(u,t),o?br.addScaledVector($o,h):br.addScaledVector($o.sub(e),h))}e.add(br)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),xr.copy(n.boundingSphere),xr.applyMatrix4(r),xi.copy(t.ray).recast(t.near),!(xr.containsPoint(xi.origin)===!1&&(xi.intersectSphere(xr,zc)===null||xi.origin.distanceToSquared(zc)>(t.far-t.near)**2))&&(Bc.copy(r).invert(),xi.copy(t.ray).applyMatrix4(Bc),!(n.boundingBox!==null&&xi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,xi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],b=Math.max(m.start,f.start),S=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let y=b,U=S;y<U;y+=3){const w=a.getX(y),A=a.getX(y+1),P=a.getX(y+2);s=Tr(this,p,t,n,l,h,u,w,A,P),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const b=a.getX(m),S=a.getX(m+1),y=a.getX(m+2);s=Tr(this,o,t,n,l,h,u,b,S,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],b=Math.max(m.start,f.start),S=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let y=b,U=S;y<U;y+=3){const w=y,A=y+1,P=y+2;s=Tr(this,p,t,n,l,h,u,w,A,P),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const b=m,S=m+1,y=m+2;s=Tr(this,o,t,n,l,h,u,b,S,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function mm(i,t,e,n,s,r,o,a){let c;if(t.side===We?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===Wn,a),c===null)return null;Er.copy(a),Er.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Er);return l<e.near||l>e.far?null:{distance:l,point:Er.clone(),object:i}}function Tr(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,yr),i.getVertexPosition(c,Mr),i.getVertexPosition(l,Sr);const h=mm(i,t,e,n,yr,Mr,Sr,Hc);if(h){const u=new N;je.getBarycoord(Hc,yr,Mr,Sr,u),s&&(h.uv=je.getInterpolatedAttribute(s,a,c,l,u,new Xt)),r&&(h.uv1=je.getInterpolatedAttribute(r,a,c,l,u,new Xt)),o&&(h.normal=je.getInterpolatedAttribute(o,a,c,l,u,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new N,materialIndex:0};je.getNormal(yr,Mr,Sr,d.normal),h.face=d,h.barycoord=u}return h}class $n extends vn{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Tn(l,3)),this.setAttribute("normal",new Tn(h,3)),this.setAttribute("uv",new Tn(u,2));function g(_,m,p,b,S,y,U,w,A,P,E){const M=y/A,C=U/P,V=y/2,B=U/2,q=w/2,K=A+1,X=P+1;let j=0,H=0;const st=new N;for(let ut=0;ut<X;ut++){const bt=ut*C-B;for(let Bt=0;Bt<K;Bt++){const re=Bt*M-V;st[_]=re*b,st[m]=bt*S,st[p]=q,l.push(st.x,st.y,st.z),st[_]=0,st[m]=0,st[p]=w>0?1:-1,h.push(st.x,st.y,st.z),u.push(Bt/A),u.push(1-ut/P),j+=1}}for(let ut=0;ut<P;ut++)for(let bt=0;bt<A;bt++){const Bt=d+bt+K*ut,re=d+bt+K*(ut+1),W=d+(bt+1)+K*(ut+1),et=d+(bt+1)+K*ut;c.push(Bt,re,et),c.push(re,W,et),H+=6}a.addGroup(f,H,E),f+=H,d+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function bs(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Fe(i){const t={};for(let e=0;e<i.length;e++){const n=bs(i[e]);for(const s in n)t[s]=n[s]}return t}function gm(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function bu(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Zt.workingColorSpace}const _m={clone:bs,merge:Fe};var vm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class fi extends As{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vm,this.fragmentShader=xm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=bs(t.uniforms),this.uniformsGroups=gm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Eu extends Be{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ve,this.projectionMatrix=new ve,this.projectionMatrixInverse=new ve,this.coordinateSystem=zn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ii=new N,Gc=new Xt,Vc=new Xt;class rn extends Eu{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=rl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Yr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return rl*2*Math.atan(Math.tan(Yr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ii.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ii.x,ii.y).multiplyScalar(-t/ii.z),ii.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ii.x,ii.y).multiplyScalar(-t/ii.z)}getViewSize(t,e){return this.getViewBounds(t,Gc,Vc),e.subVectors(Vc,Gc)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Yr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ji=-90,Qi=1;class ym extends Be{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new rn(Ji,Qi,t,e);s.layers=this.layers,this.add(s);const r=new rn(Ji,Qi,t,e);r.layers=this.layers,this.add(r);const o=new rn(Ji,Qi,t,e);o.layers=this.layers,this.add(o);const a=new rn(Ji,Qi,t,e);a.layers=this.layers,this.add(a);const c=new rn(Ji,Qi,t,e);c.layers=this.layers,this.add(c);const l=new rn(Ji,Qi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===zn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===eo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Tu extends Ne{constructor(t,e,n,s,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:xs,super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Mm extends Fi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Tu(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:bn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new $n(5,5,5),r=new fi({name:"CubemapFromEquirect",uniforms:bs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:We,blending:oi});r.uniforms.tEquirect.value=e;const o=new Re(s,r),a=e.minFilter;return e.minFilter===Li&&(e.minFilter=bn),new ym(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const qo=new N,Sm=new N,bm=new Nt;class Ti{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=qo.subVectors(n,e).cross(Sm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(qo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||bm.getNormalMatrix(t),s=this.coplanarPoint(qo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const yi=new ho,wr=new N;class wu{constructor(t=new Ti,e=new Ti,n=new Ti,s=new Ti,r=new Ti,o=new Ti){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=zn){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],_=s[10],m=s[11],p=s[12],b=s[13],S=s[14],y=s[15];if(n[0].setComponents(c-r,d-l,m-f,y-p).normalize(),n[1].setComponents(c+r,d+l,m+f,y+p).normalize(),n[2].setComponents(c+o,d+h,m+g,y+b).normalize(),n[3].setComponents(c-o,d-h,m-g,y-b).normalize(),n[4].setComponents(c-a,d-u,m-_,y-S).normalize(),e===zn)n[5].setComponents(c+a,d+u,m+_,y+S).normalize();else if(e===eo)n[5].setComponents(a,u,_,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),yi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),yi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(yi)}intersectsSprite(t){return yi.center.set(0,0,0),yi.radius=.7071067811865476,yi.applyMatrix4(t.matrixWorld),this.intersectsSphere(yi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(wr.x=s.normal.x>0?t.max.x:t.min.x,wr.y=s.normal.y>0?t.max.y:t.min.y,wr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(wr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Au(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Em(i){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const _=u[f];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class Oi extends vn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=t/a,d=e/c,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const b=p*d-o;for(let S=0;S<l;S++){const y=S*u-r;g.push(y,-b,0),_.push(0,0,1),m.push(S/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let b=0;b<a;b++){const S=b+l*p,y=b+l*(p+1),U=b+1+l*(p+1),w=b+1+l*p;f.push(S,y,w),f.push(y,U,w)}this.setIndex(f),this.setAttribute("position",new Tn(g,3)),this.setAttribute("normal",new Tn(_,3)),this.setAttribute("uv",new Tn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Oi(t.width,t.height,t.widthSegments,t.heightSegments)}}var Tm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Am=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Cm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Pm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Lm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Dm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Im=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Um=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Nm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,km=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Fm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Om=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Bm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,zm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Hm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Gm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Vm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Wm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Xm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ym=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,$m=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,qm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Km=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Zm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,jm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Jm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Qm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,tg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,eg="gl_FragColor = linearToOutputTexel( gl_FragColor );",ng=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ig=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,sg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,rg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,og=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ag=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,lg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ug=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,fg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,_g=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,vg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,yg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Mg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Sg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,bg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Eg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Tg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,wg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ag=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Cg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Lg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Dg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ig=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ug=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ng=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,kg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Fg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Og=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Bg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Hg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Vg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Wg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$g=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,qg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Kg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Zg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Jg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Qg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,t0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,e0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,n0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,i0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,s0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,r0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,o0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,a0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,l0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,c0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,h0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,u0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,d0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,f0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,p0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,m0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,g0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,v0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,x0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,y0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,M0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,S0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,b0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const E0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,T0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,w0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,A0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,C0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,R0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,P0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,L0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,D0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,I0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,U0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,N0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,k0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,F0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,O0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,B0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,z0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,H0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,G0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,V0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,W0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,X0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Y0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,q0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,K0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Z0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,j0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,J0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Q0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,t_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,e_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,n_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,i_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ft={alphahash_fragment:Tm,alphahash_pars_fragment:wm,alphamap_fragment:Am,alphamap_pars_fragment:Cm,alphatest_fragment:Rm,alphatest_pars_fragment:Pm,aomap_fragment:Lm,aomap_pars_fragment:Dm,batching_pars_vertex:Im,batching_vertex:Um,begin_vertex:Nm,beginnormal_vertex:km,bsdfs:Fm,iridescence_fragment:Om,bumpmap_pars_fragment:Bm,clipping_planes_fragment:zm,clipping_planes_pars_fragment:Hm,clipping_planes_pars_vertex:Gm,clipping_planes_vertex:Vm,color_fragment:Wm,color_pars_fragment:Xm,color_pars_vertex:Ym,color_vertex:$m,common:qm,cube_uv_reflection_fragment:Km,defaultnormal_vertex:Zm,displacementmap_pars_vertex:jm,displacementmap_vertex:Jm,emissivemap_fragment:Qm,emissivemap_pars_fragment:tg,colorspace_fragment:eg,colorspace_pars_fragment:ng,envmap_fragment:ig,envmap_common_pars_fragment:sg,envmap_pars_fragment:rg,envmap_pars_vertex:og,envmap_physical_pars_fragment:_g,envmap_vertex:ag,fog_vertex:lg,fog_pars_vertex:cg,fog_fragment:hg,fog_pars_fragment:ug,gradientmap_pars_fragment:dg,lightmap_pars_fragment:fg,lights_lambert_fragment:pg,lights_lambert_pars_fragment:mg,lights_pars_begin:gg,lights_toon_fragment:vg,lights_toon_pars_fragment:xg,lights_phong_fragment:yg,lights_phong_pars_fragment:Mg,lights_physical_fragment:Sg,lights_physical_pars_fragment:bg,lights_fragment_begin:Eg,lights_fragment_maps:Tg,lights_fragment_end:wg,logdepthbuf_fragment:Ag,logdepthbuf_pars_fragment:Cg,logdepthbuf_pars_vertex:Rg,logdepthbuf_vertex:Pg,map_fragment:Lg,map_pars_fragment:Dg,map_particle_fragment:Ig,map_particle_pars_fragment:Ug,metalnessmap_fragment:Ng,metalnessmap_pars_fragment:kg,morphinstance_vertex:Fg,morphcolor_vertex:Og,morphnormal_vertex:Bg,morphtarget_pars_vertex:zg,morphtarget_vertex:Hg,normal_fragment_begin:Gg,normal_fragment_maps:Vg,normal_pars_fragment:Wg,normal_pars_vertex:Xg,normal_vertex:Yg,normalmap_pars_fragment:$g,clearcoat_normal_fragment_begin:qg,clearcoat_normal_fragment_maps:Kg,clearcoat_pars_fragment:Zg,iridescence_pars_fragment:jg,opaque_fragment:Jg,packing:Qg,premultiplied_alpha_fragment:t0,project_vertex:e0,dithering_fragment:n0,dithering_pars_fragment:i0,roughnessmap_fragment:s0,roughnessmap_pars_fragment:r0,shadowmap_pars_fragment:o0,shadowmap_pars_vertex:a0,shadowmap_vertex:l0,shadowmask_pars_fragment:c0,skinbase_vertex:h0,skinning_pars_vertex:u0,skinning_vertex:d0,skinnormal_vertex:f0,specularmap_fragment:p0,specularmap_pars_fragment:m0,tonemapping_fragment:g0,tonemapping_pars_fragment:_0,transmission_fragment:v0,transmission_pars_fragment:x0,uv_pars_fragment:y0,uv_pars_vertex:M0,uv_vertex:S0,worldpos_vertex:b0,background_vert:E0,background_frag:T0,backgroundCube_vert:w0,backgroundCube_frag:A0,cube_vert:C0,cube_frag:R0,depth_vert:P0,depth_frag:L0,distanceRGBA_vert:D0,distanceRGBA_frag:I0,equirect_vert:U0,equirect_frag:N0,linedashed_vert:k0,linedashed_frag:F0,meshbasic_vert:O0,meshbasic_frag:B0,meshlambert_vert:z0,meshlambert_frag:H0,meshmatcap_vert:G0,meshmatcap_frag:V0,meshnormal_vert:W0,meshnormal_frag:X0,meshphong_vert:Y0,meshphong_frag:$0,meshphysical_vert:q0,meshphysical_frag:K0,meshtoon_vert:Z0,meshtoon_frag:j0,points_vert:J0,points_frag:Q0,shadow_vert:t_,shadow_frag:e_,sprite_vert:n_,sprite_frag:i_},nt={common:{diffuse:{value:new Ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Nt}},envmap:{envMap:{value:null},envMapRotation:{value:new Nt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Nt},normalScale:{value:new Xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0},uvTransform:{value:new Nt}},sprite:{diffuse:{value:new Ht(16777215)},opacity:{value:1},center:{value:new Xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}}},yn={basic:{uniforms:Fe([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.fog]),vertexShader:Ft.meshbasic_vert,fragmentShader:Ft.meshbasic_frag},lambert:{uniforms:Fe([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new Ht(0)}}]),vertexShader:Ft.meshlambert_vert,fragmentShader:Ft.meshlambert_frag},phong:{uniforms:Fe([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new Ht(0)},specular:{value:new Ht(1118481)},shininess:{value:30}}]),vertexShader:Ft.meshphong_vert,fragmentShader:Ft.meshphong_frag},standard:{uniforms:Fe([nt.common,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.roughnessmap,nt.metalnessmap,nt.fog,nt.lights,{emissive:{value:new Ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag},toon:{uniforms:Fe([nt.common,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.gradientmap,nt.fog,nt.lights,{emissive:{value:new Ht(0)}}]),vertexShader:Ft.meshtoon_vert,fragmentShader:Ft.meshtoon_frag},matcap:{uniforms:Fe([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,{matcap:{value:null}}]),vertexShader:Ft.meshmatcap_vert,fragmentShader:Ft.meshmatcap_frag},points:{uniforms:Fe([nt.points,nt.fog]),vertexShader:Ft.points_vert,fragmentShader:Ft.points_frag},dashed:{uniforms:Fe([nt.common,nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ft.linedashed_vert,fragmentShader:Ft.linedashed_frag},depth:{uniforms:Fe([nt.common,nt.displacementmap]),vertexShader:Ft.depth_vert,fragmentShader:Ft.depth_frag},normal:{uniforms:Fe([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,{opacity:{value:1}}]),vertexShader:Ft.meshnormal_vert,fragmentShader:Ft.meshnormal_frag},sprite:{uniforms:Fe([nt.sprite,nt.fog]),vertexShader:Ft.sprite_vert,fragmentShader:Ft.sprite_frag},background:{uniforms:{uvTransform:{value:new Nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ft.background_vert,fragmentShader:Ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Nt}},vertexShader:Ft.backgroundCube_vert,fragmentShader:Ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ft.cube_vert,fragmentShader:Ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ft.equirect_vert,fragmentShader:Ft.equirect_frag},distanceRGBA:{uniforms:Fe([nt.common,nt.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ft.distanceRGBA_vert,fragmentShader:Ft.distanceRGBA_frag},shadow:{uniforms:Fe([nt.lights,nt.fog,{color:{value:new Ht(0)},opacity:{value:1}}]),vertexShader:Ft.shadow_vert,fragmentShader:Ft.shadow_frag}};yn.physical={uniforms:Fe([yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Nt},clearcoatNormalScale:{value:new Xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Nt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Nt},sheen:{value:0},sheenColor:{value:new Ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Nt},transmissionSamplerSize:{value:new Xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Nt},attenuationDistance:{value:0},attenuationColor:{value:new Ht(0)},specularColor:{value:new Ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Nt},anisotropyVector:{value:new Xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Nt}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag};const Ar={r:0,b:0,g:0},Mi=new Yn,s_=new ve;function r_(i,t,e,n,s,r,o){const a=new Ht(0);let c=r===!0?0:1,l,h,u=null,d=0,f=null;function g(b){let S=b.isScene===!0?b.background:null;return S&&S.isTexture&&(S=(b.backgroundBlurriness>0?e:t).get(S)),S}function _(b){let S=!1;const y=g(b);y===null?p(a,c):y&&y.isColor&&(p(y,1),S=!0);const U=i.xr.getEnvironmentBlendMode();U==="additive"?n.buffers.color.setClear(0,0,0,1,o):U==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(b,S){const y=g(S);y&&(y.isCubeTexture||y.mapping===lo)?(h===void 0&&(h=new Re(new $n(1,1,1),new fi({name:"BackgroundCubeMaterial",uniforms:bs(yn.backgroundCube.uniforms),vertexShader:yn.backgroundCube.vertexShader,fragmentShader:yn.backgroundCube.fragmentShader,side:We,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(U,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Mi.copy(S.backgroundRotation),Mi.x*=-1,Mi.y*=-1,Mi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Mi.y*=-1,Mi.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(s_.makeRotationFromEuler(Mi)),h.material.toneMapped=Zt.getTransfer(y.colorSpace)!==ie,(u!==y||d!==y.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=y,d=y.version,f=i.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Re(new Oi(2,2),new fi({name:"BackgroundMaterial",uniforms:bs(yn.background.uniforms),vertexShader:yn.background.vertexShader,fragmentShader:yn.background.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=Zt.getTransfer(y.colorSpace)!==ie,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=y,d=y.version,f=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function p(b,S){b.getRGB(Ar,bu(i)),n.buffers.color.setClear(Ar.r,Ar.g,Ar.b,S,o)}return{getClearColor:function(){return a},setClearColor:function(b,S=1){a.set(b),c=S,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,p(a,c)},render:_,addToRenderList:m}}function o_(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(M,C,V,B,q){let K=!1;const X=u(B,V,C);r!==X&&(r=X,l(r.object)),K=f(M,B,V,q),K&&g(M,B,V,q),q!==null&&t.update(q,i.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,y(M,C,V,B),q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function c(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function u(M,C,V){const B=V.wireframe===!0;let q=n[M.id];q===void 0&&(q={},n[M.id]=q);let K=q[C.id];K===void 0&&(K={},q[C.id]=K);let X=K[B];return X===void 0&&(X=d(c()),K[B]=X),X}function d(M){const C=[],V=[],B=[];for(let q=0;q<e;q++)C[q]=0,V[q]=0,B[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:V,attributeDivisors:B,object:M,attributes:{},index:null}}function f(M,C,V,B){const q=r.attributes,K=C.attributes;let X=0;const j=V.getAttributes();for(const H in j)if(j[H].location>=0){const ut=q[H];let bt=K[H];if(bt===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(bt=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(bt=M.instanceColor)),ut===void 0||ut.attribute!==bt||bt&&ut.data!==bt.data)return!0;X++}return r.attributesNum!==X||r.index!==B}function g(M,C,V,B){const q={},K=C.attributes;let X=0;const j=V.getAttributes();for(const H in j)if(j[H].location>=0){let ut=K[H];ut===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(ut=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(ut=M.instanceColor));const bt={};bt.attribute=ut,ut&&ut.data&&(bt.data=ut.data),q[H]=bt,X++}r.attributes=q,r.attributesNum=X,r.index=B}function _(){const M=r.newAttributes;for(let C=0,V=M.length;C<V;C++)M[C]=0}function m(M){p(M,0)}function p(M,C){const V=r.newAttributes,B=r.enabledAttributes,q=r.attributeDivisors;V[M]=1,B[M]===0&&(i.enableVertexAttribArray(M),B[M]=1),q[M]!==C&&(i.vertexAttribDivisor(M,C),q[M]=C)}function b(){const M=r.newAttributes,C=r.enabledAttributes;for(let V=0,B=C.length;V<B;V++)C[V]!==M[V]&&(i.disableVertexAttribArray(V),C[V]=0)}function S(M,C,V,B,q,K,X){X===!0?i.vertexAttribIPointer(M,C,V,q,K):i.vertexAttribPointer(M,C,V,B,q,K)}function y(M,C,V,B){_();const q=B.attributes,K=V.getAttributes(),X=C.defaultAttributeValues;for(const j in K){const H=K[j];if(H.location>=0){let st=q[j];if(st===void 0&&(j==="instanceMatrix"&&M.instanceMatrix&&(st=M.instanceMatrix),j==="instanceColor"&&M.instanceColor&&(st=M.instanceColor)),st!==void 0){const ut=st.normalized,bt=st.itemSize,Bt=t.get(st);if(Bt===void 0)continue;const re=Bt.buffer,W=Bt.type,et=Bt.bytesPerElement,xt=W===i.INT||W===i.UNSIGNED_INT||st.gpuType===_l;if(st.isInterleavedBufferAttribute){const rt=st.data,Ct=rt.stride,Dt=st.offset;if(rt.isInstancedInterleavedBuffer){for(let zt=0;zt<H.locationSize;zt++)p(H.location+zt,rt.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let zt=0;zt<H.locationSize;zt++)m(H.location+zt);i.bindBuffer(i.ARRAY_BUFFER,re);for(let zt=0;zt<H.locationSize;zt++)S(H.location+zt,bt/H.locationSize,W,ut,Ct*et,(Dt+bt/H.locationSize*zt)*et,xt)}else{if(st.isInstancedBufferAttribute){for(let rt=0;rt<H.locationSize;rt++)p(H.location+rt,st.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let rt=0;rt<H.locationSize;rt++)m(H.location+rt);i.bindBuffer(i.ARRAY_BUFFER,re);for(let rt=0;rt<H.locationSize;rt++)S(H.location+rt,bt/H.locationSize,W,ut,bt*et,bt/H.locationSize*rt*et,xt)}}else if(X!==void 0){const ut=X[j];if(ut!==void 0)switch(ut.length){case 2:i.vertexAttrib2fv(H.location,ut);break;case 3:i.vertexAttrib3fv(H.location,ut);break;case 4:i.vertexAttrib4fv(H.location,ut);break;default:i.vertexAttrib1fv(H.location,ut)}}}}b()}function U(){P();for(const M in n){const C=n[M];for(const V in C){const B=C[V];for(const q in B)h(B[q].object),delete B[q];delete C[V]}delete n[M]}}function w(M){if(n[M.id]===void 0)return;const C=n[M.id];for(const V in C){const B=C[V];for(const q in B)h(B[q].object),delete B[q];delete C[V]}delete n[M.id]}function A(M){for(const C in n){const V=n[C];if(V[M.id]===void 0)continue;const B=V[M.id];for(const q in B)h(B[q].object),delete B[q];delete V[M.id]}}function P(){E(),o=!0,r!==s&&(r=s,l(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:E,dispose:U,releaseStatesOfGeometry:w,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:b}}function a_(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,n,1)}function c(l,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function l_(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==Ve&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const P=A===Zs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Xn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Bn&&!P)}function c(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),U=g>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:S,maxFragmentUniforms:y,vertexTextures:U,maxSamples:w}}function c_(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new Ti,a=new Nt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{const b=r?0:n,S=b*4;let y=p.clippingState||null;c.value=y,y=h(g,d,S,f);for(let U=0;U!==S;++U)y[U]=e[U];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=f+_*4,b=d.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,y=f;S!==_;++S,y+=4)o.copy(u[S]).applyMatrix4(b,a),o.normal.toArray(m,y),m[y+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function h_(i){let t=new WeakMap;function e(o,a){return a===Ra?o.mapping=xs:a===Pa&&(o.mapping=ys),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ra||a===Pa)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Mm(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class u_ extends Eu{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const cs=4,Wc=[.125,.215,.35,.446,.526,.582],Ri=20,Ko=new u_,Xc=new Ht;let Zo=null,jo=0,Jo=0,Qo=!1;const wi=(1+Math.sqrt(5))/2,ts=1/wi,Yc=[new N(-wi,ts,0),new N(wi,ts,0),new N(-ts,0,wi),new N(ts,0,wi),new N(0,wi,-ts),new N(0,wi,ts),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)];class $c{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Zo=this._renderer.getRenderTarget(),jo=this._renderer.getActiveCubeFace(),Jo=this._renderer.getActiveMipmapLevel(),Qo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Kc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Zo,jo,Jo),this._renderer.xr.enabled=Qo,t.scissorTest=!1,Cr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===xs||t.mapping===ys?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Zo=this._renderer.getRenderTarget(),jo=this._renderer.getActiveCubeFace(),Jo=this._renderer.getActiveMipmapLevel(),Qo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:bn,minFilter:bn,generateMipmaps:!1,type:Zs,format:Ve,colorSpace:Ts,depthBuffer:!1},s=qc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qc(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=d_(r)),this._blurMaterial=f_(r,t,e)}return s}_compileMaterial(t){const e=new Re(this._lodPlanes[0],t);this._renderer.compile(e,Ko)}_sceneToCubeUV(t,e,n,s){const a=new rn(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Xc),h.toneMapping=ai,h.autoClear=!1;const f=new _n({name:"PMREM.Background",side:We,depthWrite:!1,depthTest:!1}),g=new Re(new $n,f);let _=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,_=!0):(f.color.copy(Xc),_=!0);for(let p=0;p<6;p++){const b=p%3;b===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):b===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const S=this._cubeSize;Cr(s,b*S,p>2?S:0,S,S),h.setRenderTarget(s),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===xs||t.mapping===ys;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Kc());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Re(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;Cr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Ko)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Yc[(s-r-1)%Yc.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Re(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ri-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Ri;m>Ri&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ri}`);const p=[];let b=0;for(let A=0;A<Ri;++A){const P=A/_,E=Math.exp(-P*P/2);p.push(E),A===0?b+=E:A<m&&(b+=2*E)}for(let A=0;A<p.length;A++)p[A]=p[A]/b;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:S}=this;d.dTheta.value=g,d.mipInt.value=S-n;const y=this._sizeLods[s],U=3*y*(s>S-cs?s-S+cs:0),w=4*(this._cubeSize-y);Cr(e,U,w,3*y,2*y),c.setRenderTarget(e),c.render(u,Ko)}}function d_(i){const t=[],e=[],n=[];let s=i;const r=i-cs+1+Wc.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>i-cs?c=Wc[o-i+cs-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,b=new Float32Array(_*g*f),S=new Float32Array(m*g*f),y=new Float32Array(p*g*f);for(let w=0;w<f;w++){const A=w%3*2/3-1,P=w>2?0:-1,E=[A,P,0,A+2/3,P,0,A+2/3,P+1,0,A,P,0,A+2/3,P+1,0,A,P+1,0];b.set(E,_*g*w),S.set(d,m*g*w);const M=[w,w,w,w,w,w];y.set(M,p*g*w)}const U=new vn;U.setAttribute("position",new Ie(b,_)),U.setAttribute("uv",new Ie(S,m)),U.setAttribute("faceIndex",new Ie(y,p)),t.push(U),s>cs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function qc(i,t,e){const n=new Fi(i,t,e);return n.texture.mapping=lo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Cr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function f_(i,t,e){const n=new Float32Array(Ri),s=new N(0,1,0);return new fi({name:"SphericalGaussianBlur",defines:{n:Ri,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:bl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:oi,depthTest:!1,depthWrite:!1})}function Kc(){return new fi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:oi,depthTest:!1,depthWrite:!1})}function Zc(){return new fi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:oi,depthTest:!1,depthWrite:!1})}function bl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function p_(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Ra||c===Pa,h=c===xs||c===ys;if(l||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new $c(i)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return l&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new $c(i)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function m_(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Hs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function g_(i,t,e,n){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function c(u){const d=u.attributes;for(const g in d)t.update(d[g],i.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const _=f[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],i.ARRAY_BUFFER)}}function l(u){const d=[],f=u.index,g=u.attributes.position;let _=0;if(f!==null){const b=f.array;_=f.version;for(let S=0,y=b.length;S<y;S+=3){const U=b[S+0],w=b[S+1],A=b[S+2];d.push(U,w,w,A,A,U)}}else if(g!==void 0){const b=g.array;_=g.version;for(let S=0,y=b.length/3-1;S<y;S+=3){const U=S+0,w=S+1,A=S+2;d.push(U,w,w,A,A,U)}}else return;const m=new(mu(d)?Su:Mu)(d,1);m.version=_;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function __(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){i.drawElements(n,f,r,d*o),e.update(f,n,1)}function l(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*o,g),e.update(f,n,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function u(d,f,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,g);let p=0;for(let b=0;b<g;b++)p+=f[b]*_[b];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function v_(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function x_(i,t,e){const n=new WeakMap,s=new ye;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let M=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var f=M;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let y=0;g===!0&&(y=1),_===!0&&(y=2),m===!0&&(y=3);let U=a.attributes.position.count*y,w=1;U>t.maxTextureSize&&(w=Math.ceil(U/t.maxTextureSize),U=t.maxTextureSize);const A=new Float32Array(U*w*4*u),P=new _u(A,U,w,u);P.type=Bn,P.needsUpdate=!0;const E=y*4;for(let C=0;C<u;C++){const V=p[C],B=b[C],q=S[C],K=U*w*4*C;for(let X=0;X<V.count;X++){const j=X*E;g===!0&&(s.fromBufferAttribute(V,X),A[K+j+0]=s.x,A[K+j+1]=s.y,A[K+j+2]=s.z,A[K+j+3]=0),_===!0&&(s.fromBufferAttribute(B,X),A[K+j+4]=s.x,A[K+j+5]=s.y,A[K+j+6]=s.z,A[K+j+7]=0),m===!0&&(s.fromBufferAttribute(q,X),A[K+j+8]=s.x,A[K+j+9]=s.y,A[K+j+10]=s.z,A[K+j+11]=q.itemSize===4?s.w:1)}}d={count:u,texture:P,size:new Xt(U,w)},n.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function y_(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}class Cu extends Ne{constructor(t,e,n,s,r,o,a,c,l,h=ms){if(h!==ms&&h!==Ss)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ms&&(n=ki),n===void 0&&h===Ss&&(n=Ms),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:ge,this.minFilter=c!==void 0?c:ge,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Ru=new Ne,jc=new Cu(1,1),Pu=new _u,Lu=new rm,Du=new Tu,Jc=[],Qc=[],th=new Float32Array(16),eh=new Float32Array(9),nh=new Float32Array(4);function Cs(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Jc[s];if(r===void 0&&(r=new Float32Array(s),Jc[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function we(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ae(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function uo(i,t){let e=Qc[t];e===void 0&&(e=new Int32Array(t),Qc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function M_(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function S_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;i.uniform2fv(this.addr,t),Ae(e,t)}}function b_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(we(e,t))return;i.uniform3fv(this.addr,t),Ae(e,t)}}function E_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;i.uniform4fv(this.addr,t),Ae(e,t)}}function T_(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(we(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ae(e,t)}else{if(we(e,n))return;nh.set(n),i.uniformMatrix2fv(this.addr,!1,nh),Ae(e,n)}}function w_(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(we(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ae(e,t)}else{if(we(e,n))return;eh.set(n),i.uniformMatrix3fv(this.addr,!1,eh),Ae(e,n)}}function A_(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(we(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ae(e,t)}else{if(we(e,n))return;th.set(n),i.uniformMatrix4fv(this.addr,!1,th),Ae(e,n)}}function C_(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function R_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;i.uniform2iv(this.addr,t),Ae(e,t)}}function P_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(we(e,t))return;i.uniform3iv(this.addr,t),Ae(e,t)}}function L_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;i.uniform4iv(this.addr,t),Ae(e,t)}}function D_(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function I_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;i.uniform2uiv(this.addr,t),Ae(e,t)}}function U_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(we(e,t))return;i.uniform3uiv(this.addr,t),Ae(e,t)}}function N_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;i.uniform4uiv(this.addr,t),Ae(e,t)}}function k_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(jc.compareFunction=pu,r=jc):r=Ru,e.setTexture2D(t||r,s)}function F_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Lu,s)}function O_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Du,s)}function B_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Pu,s)}function z_(i){switch(i){case 5126:return M_;case 35664:return S_;case 35665:return b_;case 35666:return E_;case 35674:return T_;case 35675:return w_;case 35676:return A_;case 5124:case 35670:return C_;case 35667:case 35671:return R_;case 35668:case 35672:return P_;case 35669:case 35673:return L_;case 5125:return D_;case 36294:return I_;case 36295:return U_;case 36296:return N_;case 35678:case 36198:case 36298:case 36306:case 35682:return k_;case 35679:case 36299:case 36307:return F_;case 35680:case 36300:case 36308:case 36293:return O_;case 36289:case 36303:case 36311:case 36292:return B_}}function H_(i,t){i.uniform1fv(this.addr,t)}function G_(i,t){const e=Cs(t,this.size,2);i.uniform2fv(this.addr,e)}function V_(i,t){const e=Cs(t,this.size,3);i.uniform3fv(this.addr,e)}function W_(i,t){const e=Cs(t,this.size,4);i.uniform4fv(this.addr,e)}function X_(i,t){const e=Cs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Y_(i,t){const e=Cs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function $_(i,t){const e=Cs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function q_(i,t){i.uniform1iv(this.addr,t)}function K_(i,t){i.uniform2iv(this.addr,t)}function Z_(i,t){i.uniform3iv(this.addr,t)}function j_(i,t){i.uniform4iv(this.addr,t)}function J_(i,t){i.uniform1uiv(this.addr,t)}function Q_(i,t){i.uniform2uiv(this.addr,t)}function tv(i,t){i.uniform3uiv(this.addr,t)}function ev(i,t){i.uniform4uiv(this.addr,t)}function nv(i,t,e){const n=this.cache,s=t.length,r=uo(e,s);we(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Ru,r[o])}function iv(i,t,e){const n=this.cache,s=t.length,r=uo(e,s);we(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Lu,r[o])}function sv(i,t,e){const n=this.cache,s=t.length,r=uo(e,s);we(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Du,r[o])}function rv(i,t,e){const n=this.cache,s=t.length,r=uo(e,s);we(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Pu,r[o])}function ov(i){switch(i){case 5126:return H_;case 35664:return G_;case 35665:return V_;case 35666:return W_;case 35674:return X_;case 35675:return Y_;case 35676:return $_;case 5124:case 35670:return q_;case 35667:case 35671:return K_;case 35668:case 35672:return Z_;case 35669:case 35673:return j_;case 5125:return J_;case 36294:return Q_;case 36295:return tv;case 36296:return ev;case 35678:case 36198:case 36298:case 36306:case 35682:return nv;case 35679:case 36299:case 36307:return iv;case 35680:case 36300:case 36308:case 36293:return sv;case 36289:case 36303:case 36311:case 36292:return rv}}class av{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=z_(e.type)}}class lv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=ov(e.type)}}class cv{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const ta=/(\w+)(\])?(\[|\.)?/g;function ih(i,t){i.seq.push(t),i.map[t.id]=t}function hv(i,t,e){const n=i.name,s=n.length;for(ta.lastIndex=0;;){const r=ta.exec(n),o=ta.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){ih(e,l===void 0?new av(a,i,t):new lv(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new cv(a),ih(e,u)),e=u}}}class $r{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);hv(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function sh(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const uv=37297;let dv=0;function fv(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const rh=new Nt;function pv(i){Zt._getMatrix(rh,Zt.workingColorSpace,i);const t=`mat3( ${rh.elements.map(e=>e.toFixed(4))} )`;switch(Zt.getTransfer(i)){case co:return[t,"LinearTransferOETF"];case ie:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function oh(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+fv(i.getShaderSource(t),o)}else return s}function mv(i,t){const e=pv(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function gv(i,t){let e;switch(t){case Lp:e="Linear";break;case Dp:e="Reinhard";break;case Ip:e="Cineon";break;case Up:e="ACESFilmic";break;case kp:e="AgX";break;case Fp:e="Neutral";break;case Np:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Rr=new N;function _v(){Zt.getLuminanceCoefficients(Rr);const i=Rr.x.toFixed(4),t=Rr.y.toFixed(4),e=Rr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Gs).join(`
`)}function xv(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function yv(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Gs(i){return i!==""}function ah(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function lh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Mv=/^[ \t]*#include +<([\w\d./]+)>/gm;function ol(i){return i.replace(Mv,bv)}const Sv=new Map;function bv(i,t){let e=Ft[t];if(e===void 0){const n=Sv.get(t);if(n!==void 0)e=Ft[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ol(e)}const Ev=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ch(i){return i.replace(Ev,Tv)}function Tv(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function hh(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function wv(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===eu?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===hp?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Nn&&(t="SHADOWMAP_TYPE_VSM"),t}function Av(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case xs:case ys:t="ENVMAP_TYPE_CUBE";break;case lo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Cv(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ys:t="ENVMAP_MODE_REFRACTION";break}return t}function Rv(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case nu:t="ENVMAP_BLENDING_MULTIPLY";break;case Rp:t="ENVMAP_BLENDING_MIX";break;case Pp:t="ENVMAP_BLENDING_ADD";break}return t}function Pv(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Lv(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=wv(e),l=Av(e),h=Cv(e),u=Rv(e),d=Pv(e),f=vv(e),g=xv(r),_=s.createProgram();let m,p,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Gs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Gs).join(`
`),p.length>0&&(p+=`
`)):(m=[hh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gs).join(`
`),p=[hh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ai?"#define TONE_MAPPING":"",e.toneMapping!==ai?Ft.tonemapping_pars_fragment:"",e.toneMapping!==ai?gv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ft.colorspace_pars_fragment,mv("linearToOutputTexel",e.outputColorSpace),_v(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Gs).join(`
`)),o=ol(o),o=ah(o,e),o=lh(o,e),a=ol(a),a=ah(a,e),a=lh(a,e),o=ch(o),a=ch(a),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===bc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===bc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=b+m+o,y=b+p+a,U=sh(s,s.VERTEX_SHADER,S),w=sh(s,s.FRAGMENT_SHADER,y);s.attachShader(_,U),s.attachShader(_,w),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function A(C){if(i.debug.checkShaderErrors){const V=s.getProgramInfoLog(_).trim(),B=s.getShaderInfoLog(U).trim(),q=s.getShaderInfoLog(w).trim();let K=!0,X=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(K=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,U,w);else{const j=oh(s,U,"vertex"),H=oh(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+V+`
`+j+`
`+H)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(B===""||q==="")&&(X=!1);X&&(C.diagnostics={runnable:K,programLog:V,vertexShader:{log:B,prefix:m},fragmentShader:{log:q,prefix:p}})}s.deleteShader(U),s.deleteShader(w),P=new $r(s,_),E=yv(s,_)}let P;this.getUniforms=function(){return P===void 0&&A(this),P};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(_,uv)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=dv++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=U,this.fragmentShader=w,this}let Dv=0;class Iv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Uv(t),e.set(t,n)),n}}class Uv{constructor(t){this.id=Dv++,this.code=t,this.usedTimes=0}}function Nv(i,t,e,n,s,r,o){const a=new xu,c=new Iv,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return l.add(E),E===0?"uv":`uv${E}`}function m(E,M,C,V,B){const q=V.fog,K=B.geometry,X=E.isMeshStandardMaterial?V.environment:null,j=(E.isMeshStandardMaterial?e:t).get(E.envMap||X),H=j&&j.mapping===lo?j.image.height:null,st=g[E.type];E.precision!==null&&(f=s.getMaxPrecision(E.precision),f!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));const ut=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,bt=ut!==void 0?ut.length:0;let Bt=0;K.morphAttributes.position!==void 0&&(Bt=1),K.morphAttributes.normal!==void 0&&(Bt=2),K.morphAttributes.color!==void 0&&(Bt=3);let re,W,et,xt;if(st){const ne=yn[st];re=ne.vertexShader,W=ne.fragmentShader}else re=E.vertexShader,W=E.fragmentShader,c.update(E),et=c.getVertexShaderID(E),xt=c.getFragmentShaderID(E);const rt=i.getRenderTarget(),Ct=i.state.buffers.depth.getReversed(),Dt=B.isInstancedMesh===!0,zt=B.isBatchedMesh===!0,pe=!!E.map,Yt=!!E.matcap,xe=!!j,I=!!E.aoMap,Qe=!!E.lightMap,Gt=!!E.bumpMap,Vt=!!E.normalMap,wt=!!E.displacementMap,le=!!E.emissiveMap,Tt=!!E.metalnessMap,T=!!E.roughnessMap,v=E.anisotropy>0,k=E.clearcoat>0,Y=E.dispersion>0,Z=E.iridescence>0,G=E.sheen>0,yt=E.transmission>0,ot=v&&!!E.anisotropyMap,dt=k&&!!E.clearcoatMap,$t=k&&!!E.clearcoatNormalMap,Q=k&&!!E.clearcoatRoughnessMap,ft=Z&&!!E.iridescenceMap,At=Z&&!!E.iridescenceThicknessMap,Rt=G&&!!E.sheenColorMap,pt=G&&!!E.sheenRoughnessMap,Wt=!!E.specularMap,kt=!!E.specularColorMap,oe=!!E.specularIntensityMap,R=yt&&!!E.transmissionMap,it=yt&&!!E.thicknessMap,z=!!E.gradientMap,$=!!E.alphaMap,ct=E.alphaTest>0,at=!!E.alphaHash,It=!!E.extensions;let _e=ai;E.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(_e=i.toneMapping);const Pe={shaderID:st,shaderType:E.type,shaderName:E.name,vertexShader:re,fragmentShader:W,defines:E.defines,customVertexShaderID:et,customFragmentShaderID:xt,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,batching:zt,batchingColor:zt&&B._colorsTexture!==null,instancing:Dt,instancingColor:Dt&&B.instanceColor!==null,instancingMorph:Dt&&B.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:rt===null?i.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:Ts,alphaToCoverage:!!E.alphaToCoverage,map:pe,matcap:Yt,envMap:xe,envMapMode:xe&&j.mapping,envMapCubeUVHeight:H,aoMap:I,lightMap:Qe,bumpMap:Gt,normalMap:Vt,displacementMap:d&&wt,emissiveMap:le,normalMapObjectSpace:Vt&&E.normalMapType===Gp,normalMapTangentSpace:Vt&&E.normalMapType===Hp,metalnessMap:Tt,roughnessMap:T,anisotropy:v,anisotropyMap:ot,clearcoat:k,clearcoatMap:dt,clearcoatNormalMap:$t,clearcoatRoughnessMap:Q,dispersion:Y,iridescence:Z,iridescenceMap:ft,iridescenceThicknessMap:At,sheen:G,sheenColorMap:Rt,sheenRoughnessMap:pt,specularMap:Wt,specularColorMap:kt,specularIntensityMap:oe,transmission:yt,transmissionMap:R,thicknessMap:it,gradientMap:z,opaque:E.transparent===!1&&E.blending===ps&&E.alphaToCoverage===!1,alphaMap:$,alphaTest:ct,alphaHash:at,combine:E.combine,mapUv:pe&&_(E.map.channel),aoMapUv:I&&_(E.aoMap.channel),lightMapUv:Qe&&_(E.lightMap.channel),bumpMapUv:Gt&&_(E.bumpMap.channel),normalMapUv:Vt&&_(E.normalMap.channel),displacementMapUv:wt&&_(E.displacementMap.channel),emissiveMapUv:le&&_(E.emissiveMap.channel),metalnessMapUv:Tt&&_(E.metalnessMap.channel),roughnessMapUv:T&&_(E.roughnessMap.channel),anisotropyMapUv:ot&&_(E.anisotropyMap.channel),clearcoatMapUv:dt&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:$t&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ft&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:At&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:Rt&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:pt&&_(E.sheenRoughnessMap.channel),specularMapUv:Wt&&_(E.specularMap.channel),specularColorMapUv:kt&&_(E.specularColorMap.channel),specularIntensityMapUv:oe&&_(E.specularIntensityMap.channel),transmissionMapUv:R&&_(E.transmissionMap.channel),thicknessMapUv:it&&_(E.thicknessMap.channel),alphaMapUv:$&&_(E.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(Vt||v),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!K.attributes.uv&&(pe||$),fog:!!q,useFog:E.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Ct,skinning:B.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:bt,morphTextureStride:Bt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:_e,decodeVideoTexture:pe&&E.map.isVideoTexture===!0&&Zt.getTransfer(E.map.colorSpace)===ie,decodeVideoTextureEmissive:le&&E.emissiveMap.isVideoTexture===!0&&Zt.getTransfer(E.emissiveMap.colorSpace)===ie,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Ze,flipSided:E.side===We,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:It&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(It&&E.extensions.multiDraw===!0||zt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Pe.vertexUv1s=l.has(1),Pe.vertexUv2s=l.has(2),Pe.vertexUv3s=l.has(3),l.clear(),Pe}function p(E){const M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(const C in E.defines)M.push(C),M.push(E.defines[C]);return E.isRawShaderMaterial===!1&&(b(M,E),S(M,E),M.push(i.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function b(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function S(E,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),E.push(a.mask)}function y(E){const M=g[E.type];let C;if(M){const V=yn[M];C=_m.clone(V.uniforms)}else C=E.uniforms;return C}function U(E,M){let C;for(let V=0,B=h.length;V<B;V++){const q=h[V];if(q.cacheKey===M){C=q,++C.usedTimes;break}}return C===void 0&&(C=new Lv(i,M,E,r),h.push(C)),C}function w(E){if(--E.usedTimes===0){const M=h.indexOf(E);h[M]=h[h.length-1],h.pop(),E.destroy()}}function A(E){c.remove(E)}function P(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:U,releaseProgram:w,releaseShaderCache:A,programs:h,dispose:P}}function kv(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Fv(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function uh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function dh(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,f,g,_,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),t++,p}function a(u,d,f,g,_,m){const p=o(u,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function c(u,d,f,g,_,m){const p=o(u,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function l(u,d){e.length>1&&e.sort(u||Fv),n.length>1&&n.sort(d||uh),s.length>1&&s.sort(d||uh)}function h(){for(let u=t,d=i.length;u<d;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function Ov(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new dh,i.set(n,[o])):s>=r.length?(o=new dh,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Bv(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new Ht};break;case"SpotLight":e={position:new N,direction:new N,color:new Ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new Ht,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new Ht,groundColor:new Ht};break;case"RectAreaLight":e={color:new Ht,position:new N,halfWidth:new N,halfHeight:new N};break}return i[t.id]=e,e}}}function zv(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Hv=0;function Gv(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Vv(i){const t=new Bv,e=zv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new N);const s=new N,r=new ve,o=new ve;function a(l){let h=0,u=0,d=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,b=0,S=0,y=0,U=0,w=0,A=0;l.sort(Gv);for(let E=0,M=l.length;E<M;E++){const C=l[E],V=C.color,B=C.intensity,q=C.distance,K=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=V.r*B,u+=V.g*B,d+=V.b*B;else if(C.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(C.sh.coefficients[X],B);A++}else if(C.isDirectionalLight){const X=t.get(C);if(X.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const j=C.shadow,H=e.get(C);H.shadowIntensity=j.intensity,H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize=j.mapSize,n.directionalShadow[f]=H,n.directionalShadowMap[f]=K,n.directionalShadowMatrix[f]=C.shadow.matrix,b++}n.directional[f]=X,f++}else if(C.isSpotLight){const X=t.get(C);X.position.setFromMatrixPosition(C.matrixWorld),X.color.copy(V).multiplyScalar(B),X.distance=q,X.coneCos=Math.cos(C.angle),X.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),X.decay=C.decay,n.spot[_]=X;const j=C.shadow;if(C.map&&(n.spotLightMap[U]=C.map,U++,j.updateMatrices(C),C.castShadow&&w++),n.spotLightMatrix[_]=j.matrix,C.castShadow){const H=e.get(C);H.shadowIntensity=j.intensity,H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize=j.mapSize,n.spotShadow[_]=H,n.spotShadowMap[_]=K,y++}_++}else if(C.isRectAreaLight){const X=t.get(C);X.color.copy(V).multiplyScalar(B),X.halfWidth.set(C.width*.5,0,0),X.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=X,m++}else if(C.isPointLight){const X=t.get(C);if(X.color.copy(C.color).multiplyScalar(C.intensity),X.distance=C.distance,X.decay=C.decay,C.castShadow){const j=C.shadow,H=e.get(C);H.shadowIntensity=j.intensity,H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize=j.mapSize,H.shadowCameraNear=j.camera.near,H.shadowCameraFar=j.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=K,n.pointShadowMatrix[g]=C.shadow.matrix,S++}n.point[g]=X,g++}else if(C.isHemisphereLight){const X=t.get(C);X.skyColor.copy(C.color).multiplyScalar(B),X.groundColor.copy(C.groundColor).multiplyScalar(B),n.hemi[p]=X,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=nt.LTC_FLOAT_1,n.rectAreaLTC2=nt.LTC_FLOAT_2):(n.rectAreaLTC1=nt.LTC_HALF_1,n.rectAreaLTC2=nt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const P=n.hash;(P.directionalLength!==f||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==b||P.numPointShadows!==S||P.numSpotShadows!==y||P.numSpotMaps!==U||P.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=y+U-w,n.spotLightMap.length=U,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=A,P.directionalLength=f,P.pointLength=g,P.spotLength=_,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=b,P.numPointShadows=S,P.numSpotShadows=y,P.numSpotMaps=U,P.numLightProbes=A,n.version=Hv++)}function c(l,h){let u=0,d=0,f=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,b=l.length;p<b;p++){const S=l[p];if(S.isDirectionalLight){const y=n.directional[u];y.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),u++}else if(S.isSpotLight){const y=n.spot[f];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),f++}else if(S.isRectAreaLight){const y=n.rectArea[g];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(S.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(S.width*.5,0,0),y.halfHeight.set(0,S.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){const y=n.point[d];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(m),d++}else if(S.isHemisphereLight){const y=n.hemi[_];y.direction.setFromMatrixPosition(S.matrixWorld),y.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function fh(i){const t=new Vv(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function Wv(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new fh(i),t.set(s,[a])):r>=o.length?(a=new fh(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class Xv extends As{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Bp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Yv extends As{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const $v=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Kv(i,t,e){let n=new wu;const s=new Xt,r=new Xt,o=new ye,a=new Xv({depthPacking:zp}),c=new Yv,l={},h=e.maxTextureSize,u={[Wn]:We,[We]:Wn,[Ze]:Ze},d=new fi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xt},radius:{value:4}},vertexShader:$v,fragmentShader:qv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new vn;g.setAttribute("position",new Ie(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Re(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=eu;let p=this.type;this.render=function(w,A,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const E=i.getRenderTarget(),M=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),V=i.state;V.setBlending(oi),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const B=p!==Nn&&this.type===Nn,q=p===Nn&&this.type!==Nn;for(let K=0,X=w.length;K<X;K++){const j=w[K],H=j.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const st=H.getFrameExtents();if(s.multiply(st),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/st.x),s.x=r.x*st.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/st.y),s.y=r.y*st.y,H.mapSize.y=r.y)),H.map===null||B===!0||q===!0){const bt=this.type!==Nn?{minFilter:ge,magFilter:ge}:{};H.map!==null&&H.map.dispose(),H.map=new Fi(s.x,s.y,bt),H.map.texture.name=j.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();const ut=H.getViewportCount();for(let bt=0;bt<ut;bt++){const Bt=H.getViewport(bt);o.set(r.x*Bt.x,r.y*Bt.y,r.x*Bt.z,r.y*Bt.w),V.viewport(o),H.updateMatrices(j,bt),n=H.getFrustum(),y(A,P,H.camera,j,this.type)}H.isPointLightShadow!==!0&&this.type===Nn&&b(H,P),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(E,M,C)};function b(w,A){const P=t.update(_);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Fi(s.x,s.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(A,null,P,d,_,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(A,null,P,f,_,null)}function S(w,A,P,E){let M=null;const C=P.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(C!==void 0)M=C;else if(M=P.isPointLight===!0?c:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const V=M.uuid,B=A.uuid;let q=l[V];q===void 0&&(q={},l[V]=q);let K=q[B];K===void 0&&(K=M.clone(),q[B]=K,A.addEventListener("dispose",U)),M=K}if(M.visible=A.visible,M.wireframe=A.wireframe,E===Nn?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:u[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,P.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const V=i.properties.get(M);V.light=P}return M}function y(w,A,P,E,M){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===Nn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,w.matrixWorld);const B=t.update(w),q=w.material;if(Array.isArray(q)){const K=B.groups;for(let X=0,j=K.length;X<j;X++){const H=K[X],st=q[H.materialIndex];if(st&&st.visible){const ut=S(w,st,E,M);w.onBeforeShadow(i,w,A,P,B,ut,H),i.renderBufferDirect(P,null,B,ut,w,H),w.onAfterShadow(i,w,A,P,B,ut,H)}}}else if(q.visible){const K=S(w,q,E,M);w.onBeforeShadow(i,w,A,P,B,K,null),i.renderBufferDirect(P,null,B,K,w,null),w.onAfterShadow(i,w,A,P,B,K,null)}}const V=w.children;for(let B=0,q=V.length;B<q;B++)y(V[B],A,P,E,M)}function U(w){w.target.removeEventListener("dispose",U);for(const P in l){const E=l[P],M=w.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}const Zv={[Sa]:ba,[Ea]:Aa,[Ta]:Ca,[vs]:wa,[ba]:Sa,[Aa]:Ea,[Ca]:Ta,[wa]:vs};function jv(i,t){function e(){let R=!1;const it=new ye;let z=null;const $=new ye(0,0,0,0);return{setMask:function(ct){z!==ct&&!R&&(i.colorMask(ct,ct,ct,ct),z=ct)},setLocked:function(ct){R=ct},setClear:function(ct,at,It,_e,Pe){Pe===!0&&(ct*=_e,at*=_e,It*=_e),it.set(ct,at,It,_e),$.equals(it)===!1&&(i.clearColor(ct,at,It,_e),$.copy(it))},reset:function(){R=!1,z=null,$.set(-1,0,0,0)}}}function n(){let R=!1,it=!1,z=null,$=null,ct=null;return{setReversed:function(at){if(it!==at){const It=t.get("EXT_clip_control");it?It.clipControlEXT(It.LOWER_LEFT_EXT,It.ZERO_TO_ONE_EXT):It.clipControlEXT(It.LOWER_LEFT_EXT,It.NEGATIVE_ONE_TO_ONE_EXT);const _e=ct;ct=null,this.setClear(_e)}it=at},getReversed:function(){return it},setTest:function(at){at?rt(i.DEPTH_TEST):Ct(i.DEPTH_TEST)},setMask:function(at){z!==at&&!R&&(i.depthMask(at),z=at)},setFunc:function(at){if(it&&(at=Zv[at]),$!==at){switch(at){case Sa:i.depthFunc(i.NEVER);break;case ba:i.depthFunc(i.ALWAYS);break;case Ea:i.depthFunc(i.LESS);break;case vs:i.depthFunc(i.LEQUAL);break;case Ta:i.depthFunc(i.EQUAL);break;case wa:i.depthFunc(i.GEQUAL);break;case Aa:i.depthFunc(i.GREATER);break;case Ca:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}$=at}},setLocked:function(at){R=at},setClear:function(at){ct!==at&&(it&&(at=1-at),i.clearDepth(at),ct=at)},reset:function(){R=!1,z=null,$=null,ct=null,it=!1}}}function s(){let R=!1,it=null,z=null,$=null,ct=null,at=null,It=null,_e=null,Pe=null;return{setTest:function(ne){R||(ne?rt(i.STENCIL_TEST):Ct(i.STENCIL_TEST))},setMask:function(ne){it!==ne&&!R&&(i.stencilMask(ne),it=ne)},setFunc:function(ne,an,An){(z!==ne||$!==an||ct!==An)&&(i.stencilFunc(ne,an,An),z=ne,$=an,ct=An)},setOp:function(ne,an,An){(at!==ne||It!==an||_e!==An)&&(i.stencilOp(ne,an,An),at=ne,It=an,_e=An)},setLocked:function(ne){R=ne},setClear:function(ne){Pe!==ne&&(i.clearStencil(ne),Pe=ne)},reset:function(){R=!1,it=null,z=null,$=null,ct=null,at=null,It=null,_e=null,Pe=null}}}const r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,b=null,S=null,y=null,U=null,w=null,A=new Ht(0,0,0),P=0,E=!1,M=null,C=null,V=null,B=null,q=null;const K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,j=0;const H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(H)[1]),X=j>=1):H.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),X=j>=2);let st=null,ut={};const bt=i.getParameter(i.SCISSOR_BOX),Bt=i.getParameter(i.VIEWPORT),re=new ye().fromArray(bt),W=new ye().fromArray(Bt);function et(R,it,z,$){const ct=new Uint8Array(4),at=i.createTexture();i.bindTexture(R,at),i.texParameteri(R,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(R,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let It=0;It<z;It++)R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY?i.texImage3D(it,0,i.RGBA,1,1,$,0,i.RGBA,i.UNSIGNED_BYTE,ct):i.texImage2D(it+It,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ct);return at}const xt={};xt[i.TEXTURE_2D]=et(i.TEXTURE_2D,i.TEXTURE_2D,1),xt[i.TEXTURE_CUBE_MAP]=et(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),xt[i.TEXTURE_2D_ARRAY]=et(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),xt[i.TEXTURE_3D]=et(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),rt(i.DEPTH_TEST),o.setFunc(vs),Gt(!1),Vt(vc),rt(i.CULL_FACE),I(oi);function rt(R){h[R]!==!0&&(i.enable(R),h[R]=!0)}function Ct(R){h[R]!==!1&&(i.disable(R),h[R]=!1)}function Dt(R,it){return u[R]!==it?(i.bindFramebuffer(R,it),u[R]=it,R===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=it),R===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=it),!0):!1}function zt(R,it){let z=f,$=!1;if(R){z=d.get(it),z===void 0&&(z=[],d.set(it,z));const ct=R.textures;if(z.length!==ct.length||z[0]!==i.COLOR_ATTACHMENT0){for(let at=0,It=ct.length;at<It;at++)z[at]=i.COLOR_ATTACHMENT0+at;z.length=ct.length,$=!0}}else z[0]!==i.BACK&&(z[0]=i.BACK,$=!0);$&&i.drawBuffers(z)}function pe(R){return g!==R?(i.useProgram(R),g=R,!0):!1}const Yt={[Ci]:i.FUNC_ADD,[dp]:i.FUNC_SUBTRACT,[fp]:i.FUNC_REVERSE_SUBTRACT};Yt[pp]=i.MIN,Yt[mp]=i.MAX;const xe={[gp]:i.ZERO,[_p]:i.ONE,[vp]:i.SRC_COLOR,[ya]:i.SRC_ALPHA,[Ep]:i.SRC_ALPHA_SATURATE,[Sp]:i.DST_COLOR,[yp]:i.DST_ALPHA,[xp]:i.ONE_MINUS_SRC_COLOR,[Ma]:i.ONE_MINUS_SRC_ALPHA,[bp]:i.ONE_MINUS_DST_COLOR,[Mp]:i.ONE_MINUS_DST_ALPHA,[Tp]:i.CONSTANT_COLOR,[wp]:i.ONE_MINUS_CONSTANT_COLOR,[Ap]:i.CONSTANT_ALPHA,[Cp]:i.ONE_MINUS_CONSTANT_ALPHA};function I(R,it,z,$,ct,at,It,_e,Pe,ne){if(R===oi){_===!0&&(Ct(i.BLEND),_=!1);return}if(_===!1&&(rt(i.BLEND),_=!0),R!==up){if(R!==m||ne!==E){if((p!==Ci||y!==Ci)&&(i.blendEquation(i.FUNC_ADD),p=Ci,y=Ci),ne)switch(R){case ps:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case xc:i.blendFunc(i.ONE,i.ONE);break;case yc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Mc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case ps:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case xc:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case yc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Mc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}b=null,S=null,U=null,w=null,A.set(0,0,0),P=0,m=R,E=ne}return}ct=ct||it,at=at||z,It=It||$,(it!==p||ct!==y)&&(i.blendEquationSeparate(Yt[it],Yt[ct]),p=it,y=ct),(z!==b||$!==S||at!==U||It!==w)&&(i.blendFuncSeparate(xe[z],xe[$],xe[at],xe[It]),b=z,S=$,U=at,w=It),(_e.equals(A)===!1||Pe!==P)&&(i.blendColor(_e.r,_e.g,_e.b,Pe),A.copy(_e),P=Pe),m=R,E=!1}function Qe(R,it){R.side===Ze?Ct(i.CULL_FACE):rt(i.CULL_FACE);let z=R.side===We;it&&(z=!z),Gt(z),R.blending===ps&&R.transparent===!1?I(oi):I(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),o.setFunc(R.depthFunc),o.setTest(R.depthTest),o.setMask(R.depthWrite),r.setMask(R.colorWrite);const $=R.stencilWrite;a.setTest($),$&&(a.setMask(R.stencilWriteMask),a.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),a.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),le(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?rt(i.SAMPLE_ALPHA_TO_COVERAGE):Ct(i.SAMPLE_ALPHA_TO_COVERAGE)}function Gt(R){M!==R&&(R?i.frontFace(i.CW):i.frontFace(i.CCW),M=R)}function Vt(R){R!==lp?(rt(i.CULL_FACE),R!==C&&(R===vc?i.cullFace(i.BACK):R===cp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ct(i.CULL_FACE),C=R}function wt(R){R!==V&&(X&&i.lineWidth(R),V=R)}function le(R,it,z){R?(rt(i.POLYGON_OFFSET_FILL),(B!==it||q!==z)&&(i.polygonOffset(it,z),B=it,q=z)):Ct(i.POLYGON_OFFSET_FILL)}function Tt(R){R?rt(i.SCISSOR_TEST):Ct(i.SCISSOR_TEST)}function T(R){R===void 0&&(R=i.TEXTURE0+K-1),st!==R&&(i.activeTexture(R),st=R)}function v(R,it,z){z===void 0&&(st===null?z=i.TEXTURE0+K-1:z=st);let $=ut[z];$===void 0&&($={type:void 0,texture:void 0},ut[z]=$),($.type!==R||$.texture!==it)&&(st!==z&&(i.activeTexture(z),st=z),i.bindTexture(R,it||xt[R]),$.type=R,$.texture=it)}function k(){const R=ut[st];R!==void 0&&R.type!==void 0&&(i.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function Y(){try{i.compressedTexImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Z(){try{i.compressedTexImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function G(){try{i.texSubImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function yt(){try{i.texSubImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ot(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function dt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function $t(){try{i.texStorage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Q(){try{i.texStorage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ft(){try{i.texImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function At(){try{i.texImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Rt(R){re.equals(R)===!1&&(i.scissor(R.x,R.y,R.z,R.w),re.copy(R))}function pt(R){W.equals(R)===!1&&(i.viewport(R.x,R.y,R.z,R.w),W.copy(R))}function Wt(R,it){let z=l.get(it);z===void 0&&(z=new WeakMap,l.set(it,z));let $=z.get(R);$===void 0&&($=i.getUniformBlockIndex(it,R.name),z.set(R,$))}function kt(R,it){const $=l.get(it).get(R);c.get(it)!==$&&(i.uniformBlockBinding(it,$,R.__bindingPointIndex),c.set(it,$))}function oe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},st=null,ut={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,b=null,S=null,y=null,U=null,w=null,A=new Ht(0,0,0),P=0,E=!1,M=null,C=null,V=null,B=null,q=null,re.set(0,0,i.canvas.width,i.canvas.height),W.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:rt,disable:Ct,bindFramebuffer:Dt,drawBuffers:zt,useProgram:pe,setBlending:I,setMaterial:Qe,setFlipSided:Gt,setCullFace:Vt,setLineWidth:wt,setPolygonOffset:le,setScissorTest:Tt,activeTexture:T,bindTexture:v,unbindTexture:k,compressedTexImage2D:Y,compressedTexImage3D:Z,texImage2D:ft,texImage3D:At,updateUBOMapping:Wt,uniformBlockBinding:kt,texStorage2D:$t,texStorage3D:Q,texSubImage2D:G,texSubImage3D:yt,compressedTexSubImage2D:ot,compressedTexSubImage3D:dt,scissor:Rt,viewport:pt,reset:oe}}function ph(i,t,e,n){const s=Jv(n);switch(e){case au:return i*t;case cu:return i*t;case hu:return i*t*2;case uu:return i*t/s.components*s.byteLength;case yl:return i*t/s.components*s.byteLength;case du:return i*t*2/s.components*s.byteLength;case Ml:return i*t*2/s.components*s.byteLength;case lu:return i*t*3/s.components*s.byteLength;case Ve:return i*t*4/s.components*s.byteLength;case Sl:return i*t*4/s.components*s.byteLength;case Hr:case Gr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Vr:case Wr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ia:case Na:return Math.max(i,16)*Math.max(t,8)/4;case Da:case Ua:return Math.max(i,8)*Math.max(t,8)/2;case ka:case Fa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Oa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ba:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case za:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ha:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ga:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Va:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Wa:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Xa:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ya:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case $a:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case qa:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ka:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Za:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ja:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ja:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Xr:case Qa:case tl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case fu:case el:return Math.ceil(i/4)*Math.ceil(t/4)*8;case nl:case il:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Jv(i){switch(i){case Xn:case su:return{byteLength:1,components:1};case $s:case ru:case Zs:return{byteLength:2,components:1};case vl:case xl:return{byteLength:2,components:4};case ki:case _l:case Bn:return{byteLength:4,components:1};case ou:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Qv(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Xt,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,v){return f?new OffscreenCanvas(T,v):no("canvas")}function _(T,v,k){let Y=1;const Z=Tt(T);if((Z.width>k||Z.height>k)&&(Y=k/Math.max(Z.width,Z.height)),Y<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const G=Math.floor(Y*Z.width),yt=Math.floor(Y*Z.height);u===void 0&&(u=g(G,yt));const ot=v?g(G,yt):u;return ot.width=G,ot.height=yt,ot.getContext("2d").drawImage(T,0,0,G,yt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+G+"x"+yt+")."),ot}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),T;return T}function m(T){return T.generateMipmaps}function p(T){i.generateMipmap(T)}function b(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(T,v,k,Y,Z=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let G=v;if(v===i.RED&&(k===i.FLOAT&&(G=i.R32F),k===i.HALF_FLOAT&&(G=i.R16F),k===i.UNSIGNED_BYTE&&(G=i.R8)),v===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(G=i.R8UI),k===i.UNSIGNED_SHORT&&(G=i.R16UI),k===i.UNSIGNED_INT&&(G=i.R32UI),k===i.BYTE&&(G=i.R8I),k===i.SHORT&&(G=i.R16I),k===i.INT&&(G=i.R32I)),v===i.RG&&(k===i.FLOAT&&(G=i.RG32F),k===i.HALF_FLOAT&&(G=i.RG16F),k===i.UNSIGNED_BYTE&&(G=i.RG8)),v===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(G=i.RG8UI),k===i.UNSIGNED_SHORT&&(G=i.RG16UI),k===i.UNSIGNED_INT&&(G=i.RG32UI),k===i.BYTE&&(G=i.RG8I),k===i.SHORT&&(G=i.RG16I),k===i.INT&&(G=i.RG32I)),v===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(G=i.RGB8UI),k===i.UNSIGNED_SHORT&&(G=i.RGB16UI),k===i.UNSIGNED_INT&&(G=i.RGB32UI),k===i.BYTE&&(G=i.RGB8I),k===i.SHORT&&(G=i.RGB16I),k===i.INT&&(G=i.RGB32I)),v===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(G=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(G=i.RGBA16UI),k===i.UNSIGNED_INT&&(G=i.RGBA32UI),k===i.BYTE&&(G=i.RGBA8I),k===i.SHORT&&(G=i.RGBA16I),k===i.INT&&(G=i.RGBA32I)),v===i.RGB&&k===i.UNSIGNED_INT_5_9_9_9_REV&&(G=i.RGB9_E5),v===i.RGBA){const yt=Z?co:Zt.getTransfer(Y);k===i.FLOAT&&(G=i.RGBA32F),k===i.HALF_FLOAT&&(G=i.RGBA16F),k===i.UNSIGNED_BYTE&&(G=yt===ie?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT_4_4_4_4&&(G=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(G=i.RGB5_A1)}return(G===i.R16F||G===i.R32F||G===i.RG16F||G===i.RG32F||G===i.RGBA16F||G===i.RGBA32F)&&t.get("EXT_color_buffer_float"),G}function y(T,v){let k;return T?v===null||v===ki||v===Ms?k=i.DEPTH24_STENCIL8:v===Bn?k=i.DEPTH32F_STENCIL8:v===$s&&(k=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===ki||v===Ms?k=i.DEPTH_COMPONENT24:v===Bn?k=i.DEPTH_COMPONENT32F:v===$s&&(k=i.DEPTH_COMPONENT16),k}function U(T,v){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==ge&&T.minFilter!==bn?Math.log2(Math.max(v.width,v.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?v.mipmaps.length:1}function w(T){const v=T.target;v.removeEventListener("dispose",w),P(v),v.isVideoTexture&&h.delete(v)}function A(T){const v=T.target;v.removeEventListener("dispose",A),M(v)}function P(T){const v=n.get(T);if(v.__webglInit===void 0)return;const k=T.source,Y=d.get(k);if(Y){const Z=Y[v.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&E(T),Object.keys(Y).length===0&&d.delete(k)}n.remove(T)}function E(T){const v=n.get(T);i.deleteTexture(v.__webglTexture);const k=T.source,Y=d.get(k);delete Y[v.__cacheKey],o.memory.textures--}function M(T){const v=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(v.__webglFramebuffer[Y]))for(let Z=0;Z<v.__webglFramebuffer[Y].length;Z++)i.deleteFramebuffer(v.__webglFramebuffer[Y][Z]);else i.deleteFramebuffer(v.__webglFramebuffer[Y]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[Y])}else{if(Array.isArray(v.__webglFramebuffer))for(let Y=0;Y<v.__webglFramebuffer.length;Y++)i.deleteFramebuffer(v.__webglFramebuffer[Y]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let Y=0;Y<v.__webglColorRenderbuffer.length;Y++)v.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[Y]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const k=T.textures;for(let Y=0,Z=k.length;Y<Z;Y++){const G=n.get(k[Y]);G.__webglTexture&&(i.deleteTexture(G.__webglTexture),o.memory.textures--),n.remove(k[Y])}n.remove(T)}let C=0;function V(){C=0}function B(){const T=C;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),C+=1,T}function q(T){const v=[];return v.push(T.wrapS),v.push(T.wrapT),v.push(T.wrapR||0),v.push(T.magFilter),v.push(T.minFilter),v.push(T.anisotropy),v.push(T.internalFormat),v.push(T.format),v.push(T.type),v.push(T.generateMipmaps),v.push(T.premultiplyAlpha),v.push(T.flipY),v.push(T.unpackAlignment),v.push(T.colorSpace),v.join()}function K(T,v){const k=n.get(T);if(T.isVideoTexture&&wt(T),T.isRenderTargetTexture===!1&&T.version>0&&k.__version!==T.version){const Y=T.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W(k,T,v);return}}e.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+v)}function X(T,v){const k=n.get(T);if(T.version>0&&k.__version!==T.version){W(k,T,v);return}e.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+v)}function j(T,v){const k=n.get(T);if(T.version>0&&k.__version!==T.version){W(k,T,v);return}e.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+v)}function H(T,v){const k=n.get(T);if(T.version>0&&k.__version!==T.version){et(k,T,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+v)}const st={[to]:i.REPEAT,[Pi]:i.CLAMP_TO_EDGE,[La]:i.MIRRORED_REPEAT},ut={[ge]:i.NEAREST,[Op]:i.NEAREST_MIPMAP_NEAREST,[cr]:i.NEAREST_MIPMAP_LINEAR,[bn]:i.LINEAR,[Ao]:i.LINEAR_MIPMAP_NEAREST,[Li]:i.LINEAR_MIPMAP_LINEAR},bt={[Vp]:i.NEVER,[Kp]:i.ALWAYS,[Wp]:i.LESS,[pu]:i.LEQUAL,[Xp]:i.EQUAL,[qp]:i.GEQUAL,[Yp]:i.GREATER,[$p]:i.NOTEQUAL};function Bt(T,v){if(v.type===Bn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===bn||v.magFilter===Ao||v.magFilter===cr||v.magFilter===Li||v.minFilter===bn||v.minFilter===Ao||v.minFilter===cr||v.minFilter===Li)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,st[v.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,st[v.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,st[v.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,ut[v.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,ut[v.minFilter]),v.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,bt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===ge||v.minFilter!==cr&&v.minFilter!==Li||v.type===Bn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const k=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function re(T,v){let k=!1;T.__webglInit===void 0&&(T.__webglInit=!0,v.addEventListener("dispose",w));const Y=v.source;let Z=d.get(Y);Z===void 0&&(Z={},d.set(Y,Z));const G=q(v);if(G!==T.__cacheKey){Z[G]===void 0&&(Z[G]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,k=!0),Z[G].usedTimes++;const yt=Z[T.__cacheKey];yt!==void 0&&(Z[T.__cacheKey].usedTimes--,yt.usedTimes===0&&E(v)),T.__cacheKey=G,T.__webglTexture=Z[G].texture}return k}function W(T,v,k){let Y=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(Y=i.TEXTURE_3D);const Z=re(T,v),G=v.source;e.bindTexture(Y,T.__webglTexture,i.TEXTURE0+k);const yt=n.get(G);if(G.version!==yt.__version||Z===!0){e.activeTexture(i.TEXTURE0+k);const ot=Zt.getPrimaries(Zt.workingColorSpace),dt=v.colorSpace===ri?null:Zt.getPrimaries(v.colorSpace),$t=v.colorSpace===ri||ot===dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,$t);let Q=_(v.image,!1,s.maxTextureSize);Q=le(v,Q);const ft=r.convert(v.format,v.colorSpace),At=r.convert(v.type);let Rt=S(v.internalFormat,ft,At,v.colorSpace,v.isVideoTexture);Bt(Y,v);let pt;const Wt=v.mipmaps,kt=v.isVideoTexture!==!0,oe=yt.__version===void 0||Z===!0,R=G.dataReady,it=U(v,Q);if(v.isDepthTexture)Rt=y(v.format===Ss,v.type),oe&&(kt?e.texStorage2D(i.TEXTURE_2D,1,Rt,Q.width,Q.height):e.texImage2D(i.TEXTURE_2D,0,Rt,Q.width,Q.height,0,ft,At,null));else if(v.isDataTexture)if(Wt.length>0){kt&&oe&&e.texStorage2D(i.TEXTURE_2D,it,Rt,Wt[0].width,Wt[0].height);for(let z=0,$=Wt.length;z<$;z++)pt=Wt[z],kt?R&&e.texSubImage2D(i.TEXTURE_2D,z,0,0,pt.width,pt.height,ft,At,pt.data):e.texImage2D(i.TEXTURE_2D,z,Rt,pt.width,pt.height,0,ft,At,pt.data);v.generateMipmaps=!1}else kt?(oe&&e.texStorage2D(i.TEXTURE_2D,it,Rt,Q.width,Q.height),R&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Q.width,Q.height,ft,At,Q.data)):e.texImage2D(i.TEXTURE_2D,0,Rt,Q.width,Q.height,0,ft,At,Q.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){kt&&oe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,it,Rt,Wt[0].width,Wt[0].height,Q.depth);for(let z=0,$=Wt.length;z<$;z++)if(pt=Wt[z],v.format!==Ve)if(ft!==null)if(kt){if(R)if(v.layerUpdates.size>0){const ct=ph(pt.width,pt.height,v.format,v.type);for(const at of v.layerUpdates){const It=pt.data.subarray(at*ct/pt.data.BYTES_PER_ELEMENT,(at+1)*ct/pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,z,0,0,at,pt.width,pt.height,1,ft,It)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,z,0,0,0,pt.width,pt.height,Q.depth,ft,pt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,z,Rt,pt.width,pt.height,Q.depth,0,pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else kt?R&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,z,0,0,0,pt.width,pt.height,Q.depth,ft,At,pt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,z,Rt,pt.width,pt.height,Q.depth,0,ft,At,pt.data)}else{kt&&oe&&e.texStorage2D(i.TEXTURE_2D,it,Rt,Wt[0].width,Wt[0].height);for(let z=0,$=Wt.length;z<$;z++)pt=Wt[z],v.format!==Ve?ft!==null?kt?R&&e.compressedTexSubImage2D(i.TEXTURE_2D,z,0,0,pt.width,pt.height,ft,pt.data):e.compressedTexImage2D(i.TEXTURE_2D,z,Rt,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):kt?R&&e.texSubImage2D(i.TEXTURE_2D,z,0,0,pt.width,pt.height,ft,At,pt.data):e.texImage2D(i.TEXTURE_2D,z,Rt,pt.width,pt.height,0,ft,At,pt.data)}else if(v.isDataArrayTexture)if(kt){if(oe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,it,Rt,Q.width,Q.height,Q.depth),R)if(v.layerUpdates.size>0){const z=ph(Q.width,Q.height,v.format,v.type);for(const $ of v.layerUpdates){const ct=Q.data.subarray($*z/Q.data.BYTES_PER_ELEMENT,($+1)*z/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,$,Q.width,Q.height,1,ft,At,ct)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ft,At,Q.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Rt,Q.width,Q.height,Q.depth,0,ft,At,Q.data);else if(v.isData3DTexture)kt?(oe&&e.texStorage3D(i.TEXTURE_3D,it,Rt,Q.width,Q.height,Q.depth),R&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ft,At,Q.data)):e.texImage3D(i.TEXTURE_3D,0,Rt,Q.width,Q.height,Q.depth,0,ft,At,Q.data);else if(v.isFramebufferTexture){if(oe)if(kt)e.texStorage2D(i.TEXTURE_2D,it,Rt,Q.width,Q.height);else{let z=Q.width,$=Q.height;for(let ct=0;ct<it;ct++)e.texImage2D(i.TEXTURE_2D,ct,Rt,z,$,0,ft,At,null),z>>=1,$>>=1}}else if(Wt.length>0){if(kt&&oe){const z=Tt(Wt[0]);e.texStorage2D(i.TEXTURE_2D,it,Rt,z.width,z.height)}for(let z=0,$=Wt.length;z<$;z++)pt=Wt[z],kt?R&&e.texSubImage2D(i.TEXTURE_2D,z,0,0,ft,At,pt):e.texImage2D(i.TEXTURE_2D,z,Rt,ft,At,pt);v.generateMipmaps=!1}else if(kt){if(oe){const z=Tt(Q);e.texStorage2D(i.TEXTURE_2D,it,Rt,z.width,z.height)}R&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ft,At,Q)}else e.texImage2D(i.TEXTURE_2D,0,Rt,ft,At,Q);m(v)&&p(Y),yt.__version=G.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function et(T,v,k){if(v.image.length!==6)return;const Y=re(T,v),Z=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+k);const G=n.get(Z);if(Z.version!==G.__version||Y===!0){e.activeTexture(i.TEXTURE0+k);const yt=Zt.getPrimaries(Zt.workingColorSpace),ot=v.colorSpace===ri?null:Zt.getPrimaries(v.colorSpace),dt=v.colorSpace===ri||yt===ot?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);const $t=v.isCompressedTexture||v.image[0].isCompressedTexture,Q=v.image[0]&&v.image[0].isDataTexture,ft=[];for(let $=0;$<6;$++)!$t&&!Q?ft[$]=_(v.image[$],!0,s.maxCubemapSize):ft[$]=Q?v.image[$].image:v.image[$],ft[$]=le(v,ft[$]);const At=ft[0],Rt=r.convert(v.format,v.colorSpace),pt=r.convert(v.type),Wt=S(v.internalFormat,Rt,pt,v.colorSpace),kt=v.isVideoTexture!==!0,oe=G.__version===void 0||Y===!0,R=Z.dataReady;let it=U(v,At);Bt(i.TEXTURE_CUBE_MAP,v);let z;if($t){kt&&oe&&e.texStorage2D(i.TEXTURE_CUBE_MAP,it,Wt,At.width,At.height);for(let $=0;$<6;$++){z=ft[$].mipmaps;for(let ct=0;ct<z.length;ct++){const at=z[ct];v.format!==Ve?Rt!==null?kt?R&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct,0,0,at.width,at.height,Rt,at.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct,Wt,at.width,at.height,0,at.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):kt?R&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct,0,0,at.width,at.height,Rt,pt,at.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct,Wt,at.width,at.height,0,Rt,pt,at.data)}}}else{if(z=v.mipmaps,kt&&oe){z.length>0&&it++;const $=Tt(ft[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,it,Wt,$.width,$.height)}for(let $=0;$<6;$++)if(Q){kt?R&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,ft[$].width,ft[$].height,Rt,pt,ft[$].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Wt,ft[$].width,ft[$].height,0,Rt,pt,ft[$].data);for(let ct=0;ct<z.length;ct++){const It=z[ct].image[$].image;kt?R&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct+1,0,0,It.width,It.height,Rt,pt,It.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct+1,Wt,It.width,It.height,0,Rt,pt,It.data)}}else{kt?R&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Rt,pt,ft[$]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Wt,Rt,pt,ft[$]);for(let ct=0;ct<z.length;ct++){const at=z[ct];kt?R&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct+1,0,0,Rt,pt,at.image[$]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct+1,Wt,Rt,pt,at.image[$])}}}m(v)&&p(i.TEXTURE_CUBE_MAP),G.__version=Z.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function xt(T,v,k,Y,Z,G){const yt=r.convert(k.format,k.colorSpace),ot=r.convert(k.type),dt=S(k.internalFormat,yt,ot,k.colorSpace),$t=n.get(v),Q=n.get(k);if(Q.__renderTarget=v,!$t.__hasExternalTextures){const ft=Math.max(1,v.width>>G),At=Math.max(1,v.height>>G);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?e.texImage3D(Z,G,dt,ft,At,v.depth,0,yt,ot,null):e.texImage2D(Z,G,dt,ft,At,0,yt,ot,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),Vt(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,Z,Q.__webglTexture,0,Gt(v)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,Z,Q.__webglTexture,G),e.bindFramebuffer(i.FRAMEBUFFER,null)}function rt(T,v,k){if(i.bindRenderbuffer(i.RENDERBUFFER,T),v.depthBuffer){const Y=v.depthTexture,Z=Y&&Y.isDepthTexture?Y.type:null,G=y(v.stencilBuffer,Z),yt=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ot=Gt(v);Vt(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ot,G,v.width,v.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,ot,G,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,G,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,yt,i.RENDERBUFFER,T)}else{const Y=v.textures;for(let Z=0;Z<Y.length;Z++){const G=Y[Z],yt=r.convert(G.format,G.colorSpace),ot=r.convert(G.type),dt=S(G.internalFormat,yt,ot,G.colorSpace),$t=Gt(v);k&&Vt(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,$t,dt,v.width,v.height):Vt(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,$t,dt,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,dt,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ct(T,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=n.get(v.depthTexture);Y.__renderTarget=v,(!Y.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),K(v.depthTexture,0);const Z=Y.__webglTexture,G=Gt(v);if(v.depthTexture.format===ms)Vt(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0,G):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0);else if(v.depthTexture.format===Ss)Vt(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0,G):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Dt(T){const v=n.get(T),k=T.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==T.depthTexture){const Y=T.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),Y){const Z=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,Y.removeEventListener("dispose",Z)};Y.addEventListener("dispose",Z),v.__depthDisposeCallback=Z}v.__boundDepthTexture=Y}if(T.depthTexture&&!v.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Ct(v.__webglFramebuffer,T)}else if(k){v.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[Y]),v.__webglDepthbuffer[Y]===void 0)v.__webglDepthbuffer[Y]=i.createRenderbuffer(),rt(v.__webglDepthbuffer[Y],T,!1);else{const Z=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,G=v.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,G),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,G)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),rt(v.__webglDepthbuffer,T,!1);else{const Y=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,Z)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function zt(T,v,k){const Y=n.get(T);v!==void 0&&xt(Y.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&Dt(T)}function pe(T){const v=T.texture,k=n.get(T),Y=n.get(v);T.addEventListener("dispose",A);const Z=T.textures,G=T.isWebGLCubeRenderTarget===!0,yt=Z.length>1;if(yt||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=v.version,o.memory.textures++),G){k.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(v.mipmaps&&v.mipmaps.length>0){k.__webglFramebuffer[ot]=[];for(let dt=0;dt<v.mipmaps.length;dt++)k.__webglFramebuffer[ot][dt]=i.createFramebuffer()}else k.__webglFramebuffer[ot]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){k.__webglFramebuffer=[];for(let ot=0;ot<v.mipmaps.length;ot++)k.__webglFramebuffer[ot]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(yt)for(let ot=0,dt=Z.length;ot<dt;ot++){const $t=n.get(Z[ot]);$t.__webglTexture===void 0&&($t.__webglTexture=i.createTexture(),o.memory.textures++)}if(T.samples>0&&Vt(T)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ot=0;ot<Z.length;ot++){const dt=Z[ot];k.__webglColorRenderbuffer[ot]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[ot]);const $t=r.convert(dt.format,dt.colorSpace),Q=r.convert(dt.type),ft=S(dt.internalFormat,$t,Q,dt.colorSpace,T.isXRRenderTarget===!0),At=Gt(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,At,ft,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.RENDERBUFFER,k.__webglColorRenderbuffer[ot])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),rt(k.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(G){e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),Bt(i.TEXTURE_CUBE_MAP,v);for(let ot=0;ot<6;ot++)if(v.mipmaps&&v.mipmaps.length>0)for(let dt=0;dt<v.mipmaps.length;dt++)xt(k.__webglFramebuffer[ot][dt],T,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,dt);else xt(k.__webglFramebuffer[ot],T,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);m(v)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(yt){for(let ot=0,dt=Z.length;ot<dt;ot++){const $t=Z[ot],Q=n.get($t);e.bindTexture(i.TEXTURE_2D,Q.__webglTexture),Bt(i.TEXTURE_2D,$t),xt(k.__webglFramebuffer,T,$t,i.COLOR_ATTACHMENT0+ot,i.TEXTURE_2D,0),m($t)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let ot=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ot=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ot,Y.__webglTexture),Bt(ot,v),v.mipmaps&&v.mipmaps.length>0)for(let dt=0;dt<v.mipmaps.length;dt++)xt(k.__webglFramebuffer[dt],T,v,i.COLOR_ATTACHMENT0,ot,dt);else xt(k.__webglFramebuffer,T,v,i.COLOR_ATTACHMENT0,ot,0);m(v)&&p(ot),e.unbindTexture()}T.depthBuffer&&Dt(T)}function Yt(T){const v=T.textures;for(let k=0,Y=v.length;k<Y;k++){const Z=v[k];if(m(Z)){const G=b(T),yt=n.get(Z).__webglTexture;e.bindTexture(G,yt),p(G),e.unbindTexture()}}}const xe=[],I=[];function Qe(T){if(T.samples>0){if(Vt(T)===!1){const v=T.textures,k=T.width,Y=T.height;let Z=i.COLOR_BUFFER_BIT;const G=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,yt=n.get(T),ot=v.length>1;if(ot)for(let dt=0;dt<v.length;dt++)e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,yt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglFramebuffer);for(let dt=0;dt<v.length;dt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),ot){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,yt.__webglColorRenderbuffer[dt]);const $t=n.get(v[dt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,$t,0)}i.blitFramebuffer(0,0,k,Y,0,0,k,Y,Z,i.NEAREST),c===!0&&(xe.length=0,I.length=0,xe.push(i.COLOR_ATTACHMENT0+dt),T.depthBuffer&&T.resolveDepthBuffer===!1&&(xe.push(G),I.push(G),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,I)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,xe))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ot)for(let dt=0;dt<v.length;dt++){e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,yt.__webglColorRenderbuffer[dt]);const $t=n.get(v[dt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,$t,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){const v=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function Gt(T){return Math.min(s.maxSamples,T.samples)}function Vt(T){const v=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function wt(T){const v=o.render.frame;h.get(T)!==v&&(h.set(T,v),T.update())}function le(T,v){const k=T.colorSpace,Y=T.format,Z=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||k!==Ts&&k!==ri&&(Zt.getTransfer(k)===ie?(Y!==Ve||Z!==Xn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),v}function Tt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=V,this.setTexture2D=K,this.setTexture2DArray=X,this.setTexture3D=j,this.setTextureCube=H,this.rebindTextures=zt,this.setupRenderTarget=pe,this.updateRenderTargetMipmap=Yt,this.updateMultisampleRenderTarget=Qe,this.setupDepthRenderbuffer=Dt,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=Vt}function tx(i,t){function e(n,s=ri){let r;const o=Zt.getTransfer(s);if(n===Xn)return i.UNSIGNED_BYTE;if(n===vl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===xl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ou)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===su)return i.BYTE;if(n===ru)return i.SHORT;if(n===$s)return i.UNSIGNED_SHORT;if(n===_l)return i.INT;if(n===ki)return i.UNSIGNED_INT;if(n===Bn)return i.FLOAT;if(n===Zs)return i.HALF_FLOAT;if(n===au)return i.ALPHA;if(n===lu)return i.RGB;if(n===Ve)return i.RGBA;if(n===cu)return i.LUMINANCE;if(n===hu)return i.LUMINANCE_ALPHA;if(n===ms)return i.DEPTH_COMPONENT;if(n===Ss)return i.DEPTH_STENCIL;if(n===uu)return i.RED;if(n===yl)return i.RED_INTEGER;if(n===du)return i.RG;if(n===Ml)return i.RG_INTEGER;if(n===Sl)return i.RGBA_INTEGER;if(n===Hr||n===Gr||n===Vr||n===Wr)if(o===ie)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Hr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Vr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Wr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Hr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Gr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Vr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Wr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Da||n===Ia||n===Ua||n===Na)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Da)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ia)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ua)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Na)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ka||n===Fa||n===Oa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ka||n===Fa)return o===ie?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Oa)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ba||n===za||n===Ha||n===Ga||n===Va||n===Wa||n===Xa||n===Ya||n===$a||n===qa||n===Ka||n===Za||n===ja||n===Ja)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ba)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===za)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ha)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ga)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Va)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Wa)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Xa)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ya)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===$a)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===qa)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ka)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Za)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ja)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ja)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Xr||n===Qa||n===tl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Xr)return o===ie?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Qa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===tl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===fu||n===el||n===nl||n===il)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Xr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===el)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===nl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===il)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ms?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class ex extends rn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class hs extends Be{constructor(){super(),this.isGroup=!0,this.type="Group"}}const nx={type:"move"};class ea{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(nx)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new hs;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const ix=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,sx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class rx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Ne,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new fi({vertexShader:ix,fragmentShader:sx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Re(new Oi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ox extends ws{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null;const _=new rx,m=e.getContextAttributes();let p=null,b=null;const S=[],y=[],U=new Xt;let w=null;const A=new rn;A.viewport=new ye;const P=new rn;P.viewport=new ye;const E=[A,P],M=new ex;let C=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let et=S[W];return et===void 0&&(et=new ea,S[W]=et),et.getTargetRaySpace()},this.getControllerGrip=function(W){let et=S[W];return et===void 0&&(et=new ea,S[W]=et),et.getGripSpace()},this.getHand=function(W){let et=S[W];return et===void 0&&(et=new ea,S[W]=et),et.getHandSpace()};function B(W){const et=y.indexOf(W.inputSource);if(et===-1)return;const xt=S[et];xt!==void 0&&(xt.update(W.inputSource,W.frame,l||o),xt.dispatchEvent({type:W.type,data:W.inputSource}))}function q(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",K);for(let W=0;W<S.length;W++){const et=y[W];et!==null&&(y[W]=null,S[W].disconnect(et))}C=null,V=null,_.reset(),t.setRenderTarget(p),f=null,d=null,u=null,s=null,b=null,re.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(U.width,U.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(W){l=W},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",q),s.addEventListener("inputsourceschange",K),m.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(U),s.renderState.layers===void 0){const et={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,et),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new Fi(f.framebufferWidth,f.framebufferHeight,{format:Ve,type:Xn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let et=null,xt=null,rt=null;m.depth&&(rt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=m.stencil?Ss:ms,xt=m.stencil?Ms:ki);const Ct={colorFormat:e.RGBA8,depthFormat:rt,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(Ct),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),b=new Fi(d.textureWidth,d.textureHeight,{format:Ve,type:Xn,depthTexture:new Cu(d.textureWidth,d.textureHeight,xt,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),re.setContext(s),re.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function K(W){for(let et=0;et<W.removed.length;et++){const xt=W.removed[et],rt=y.indexOf(xt);rt>=0&&(y[rt]=null,S[rt].disconnect(xt))}for(let et=0;et<W.added.length;et++){const xt=W.added[et];let rt=y.indexOf(xt);if(rt===-1){for(let Dt=0;Dt<S.length;Dt++)if(Dt>=y.length){y.push(xt),rt=Dt;break}else if(y[Dt]===null){y[Dt]=xt,rt=Dt;break}if(rt===-1)break}const Ct=S[rt];Ct&&Ct.connect(xt)}}const X=new N,j=new N;function H(W,et,xt){X.setFromMatrixPosition(et.matrixWorld),j.setFromMatrixPosition(xt.matrixWorld);const rt=X.distanceTo(j),Ct=et.projectionMatrix.elements,Dt=xt.projectionMatrix.elements,zt=Ct[14]/(Ct[10]-1),pe=Ct[14]/(Ct[10]+1),Yt=(Ct[9]+1)/Ct[5],xe=(Ct[9]-1)/Ct[5],I=(Ct[8]-1)/Ct[0],Qe=(Dt[8]+1)/Dt[0],Gt=zt*I,Vt=zt*Qe,wt=rt/(-I+Qe),le=wt*-I;if(et.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(le),W.translateZ(wt),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),Ct[10]===-1)W.projectionMatrix.copy(et.projectionMatrix),W.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{const Tt=zt+wt,T=pe+wt,v=Gt-le,k=Vt+(rt-le),Y=Yt*pe/T*Tt,Z=xe*pe/T*Tt;W.projectionMatrix.makePerspective(v,k,Y,Z,Tt,T),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function st(W,et){et===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(et.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;let et=W.near,xt=W.far;_.texture!==null&&(_.depthNear>0&&(et=_.depthNear),_.depthFar>0&&(xt=_.depthFar)),M.near=P.near=A.near=et,M.far=P.far=A.far=xt,(C!==M.near||V!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),C=M.near,V=M.far),A.layers.mask=W.layers.mask|2,P.layers.mask=W.layers.mask|4,M.layers.mask=A.layers.mask|P.layers.mask;const rt=W.parent,Ct=M.cameras;st(M,rt);for(let Dt=0;Dt<Ct.length;Dt++)st(Ct[Dt],rt);Ct.length===2?H(M,A,P):M.projectionMatrix.copy(A.projectionMatrix),ut(W,M,rt)};function ut(W,et,xt){xt===null?W.matrix.copy(et.matrixWorld):(W.matrix.copy(xt.matrixWorld),W.matrix.invert(),W.matrix.multiply(et.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(et.projectionMatrix),W.projectionMatrixInverse.copy(et.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=rl*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(W){c=W,d!==null&&(d.fixedFoveation=W),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=W)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let bt=null;function Bt(W,et){if(h=et.getViewerPose(l||o),g=et,h!==null){const xt=h.views;f!==null&&(t.setRenderTargetFramebuffer(b,f.framebuffer),t.setRenderTarget(b));let rt=!1;xt.length!==M.cameras.length&&(M.cameras.length=0,rt=!0);for(let Dt=0;Dt<xt.length;Dt++){const zt=xt[Dt];let pe=null;if(f!==null)pe=f.getViewport(zt);else{const xe=u.getViewSubImage(d,zt);pe=xe.viewport,Dt===0&&(t.setRenderTargetTextures(b,xe.colorTexture,d.ignoreDepthValues?void 0:xe.depthStencilTexture),t.setRenderTarget(b))}let Yt=E[Dt];Yt===void 0&&(Yt=new rn,Yt.layers.enable(Dt),Yt.viewport=new ye,E[Dt]=Yt),Yt.matrix.fromArray(zt.transform.matrix),Yt.matrix.decompose(Yt.position,Yt.quaternion,Yt.scale),Yt.projectionMatrix.fromArray(zt.projectionMatrix),Yt.projectionMatrixInverse.copy(Yt.projectionMatrix).invert(),Yt.viewport.set(pe.x,pe.y,pe.width,pe.height),Dt===0&&(M.matrix.copy(Yt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),rt===!0&&M.cameras.push(Yt)}const Ct=s.enabledFeatures;if(Ct&&Ct.includes("depth-sensing")){const Dt=u.getDepthInformation(xt[0]);Dt&&Dt.isValid&&Dt.texture&&_.init(t,Dt,s.renderState)}}for(let xt=0;xt<S.length;xt++){const rt=y[xt],Ct=S[xt];rt!==null&&Ct!==void 0&&Ct.update(rt,et,l||o)}bt&&bt(W,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),g=null}const re=new Au;re.setAnimationLoop(Bt),this.setAnimationLoop=function(W){bt=W},this.dispose=function(){}}}const Si=new Yn,ax=new ve;function lx(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,bu(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,b,S,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,b,S):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===We&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===We&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const b=t.get(p),S=b.envMap,y=b.envMapRotation;S&&(m.envMap.value=S,Si.copy(y),Si.x*=-1,Si.y*=-1,Si.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Si.y*=-1,Si.z*=-1),m.envMapRotation.value.setFromMatrix4(ax.makeRotationFromEuler(Si)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,b,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=S*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===We&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const b=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function cx(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,S){const y=S.program;n.uniformBlockBinding(b,y)}function l(b,S){let y=s[b.id];y===void 0&&(g(b),y=h(b),s[b.id]=y,b.addEventListener("dispose",m));const U=S.program;n.updateUBOMapping(b,U);const w=t.render.frame;r[b.id]!==w&&(d(b),r[b.id]=w)}function h(b){const S=u();b.__bindingPointIndex=S;const y=i.createBuffer(),U=b.__size,w=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,U,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,y),y}function u(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const S=s[b.id],y=b.uniforms,U=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let w=0,A=y.length;w<A;w++){const P=Array.isArray(y[w])?y[w]:[y[w]];for(let E=0,M=P.length;E<M;E++){const C=P[E];if(f(C,w,E,U)===!0){const V=C.__offset,B=Array.isArray(C.value)?C.value:[C.value];let q=0;for(let K=0;K<B.length;K++){const X=B[K],j=_(X);typeof X=="number"||typeof X=="boolean"?(C.__data[0]=X,i.bufferSubData(i.UNIFORM_BUFFER,V+q,C.__data)):X.isMatrix3?(C.__data[0]=X.elements[0],C.__data[1]=X.elements[1],C.__data[2]=X.elements[2],C.__data[3]=0,C.__data[4]=X.elements[3],C.__data[5]=X.elements[4],C.__data[6]=X.elements[5],C.__data[7]=0,C.__data[8]=X.elements[6],C.__data[9]=X.elements[7],C.__data[10]=X.elements[8],C.__data[11]=0):(X.toArray(C.__data,q),q+=j.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,V,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(b,S,y,U){const w=b.value,A=S+"_"+y;if(U[A]===void 0)return typeof w=="number"||typeof w=="boolean"?U[A]=w:U[A]=w.clone(),!0;{const P=U[A];if(typeof w=="number"||typeof w=="boolean"){if(P!==w)return U[A]=w,!0}else if(P.equals(w)===!1)return P.copy(w),!0}return!1}function g(b){const S=b.uniforms;let y=0;const U=16;for(let A=0,P=S.length;A<P;A++){const E=Array.isArray(S[A])?S[A]:[S[A]];for(let M=0,C=E.length;M<C;M++){const V=E[M],B=Array.isArray(V.value)?V.value:[V.value];for(let q=0,K=B.length;q<K;q++){const X=B[q],j=_(X),H=y%U,st=H%j.boundary,ut=H+st;y+=st,ut!==0&&U-ut<j.storage&&(y+=U-ut),V.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=y,y+=j.storage}}}const w=y%U;return w>0&&(y+=U-w),b.__size=y,b.__cache={},this}function _(b){const S={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(S.boundary=4,S.storage=4):b.isVector2?(S.boundary=8,S.storage=8):b.isVector3||b.isColor?(S.boundary=16,S.storage=12):b.isVector4?(S.boundary=16,S.storage=16):b.isMatrix3?(S.boundary=48,S.storage=48):b.isMatrix4?(S.boundary=64,S.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),S}function m(b){const S=b.target;S.removeEventListener("dispose",m);const y=o.indexOf(S.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function p(){for(const b in s)i.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}class hx{constructor(t={}){const{canvas:e=jp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const b=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=be,this.toneMapping=ai,this.toneMappingExposure=1;const y=this;let U=!1,w=0,A=0,P=null,E=-1,M=null;const C=new ye,V=new ye;let B=null;const q=new Ht(0);let K=0,X=e.width,j=e.height,H=1,st=null,ut=null;const bt=new ye(0,0,X,j),Bt=new ye(0,0,X,j);let re=!1;const W=new wu;let et=!1,xt=!1;const rt=new ve,Ct=new ve,Dt=new N,zt=new ye,pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Yt=!1;function xe(){return P===null?H:1}let I=n;function Qe(x,L){return e.getContext(x,L)}try{const x={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${gl}`),e.addEventListener("webglcontextlost",$,!1),e.addEventListener("webglcontextrestored",ct,!1),e.addEventListener("webglcontextcreationerror",at,!1),I===null){const L="webgl2";if(I=Qe(L,x),I===null)throw Qe(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let Gt,Vt,wt,le,Tt,T,v,k,Y,Z,G,yt,ot,dt,$t,Q,ft,At,Rt,pt,Wt,kt,oe,R;function it(){Gt=new m_(I),Gt.init(),kt=new tx(I,Gt),Vt=new l_(I,Gt,t,kt),wt=new jv(I,Gt),Vt.reverseDepthBuffer&&d&&wt.buffers.depth.setReversed(!0),le=new v_(I),Tt=new kv,T=new Qv(I,Gt,wt,Tt,Vt,kt,le),v=new h_(y),k=new p_(y),Y=new Em(I),oe=new o_(I,Y),Z=new g_(I,Y,le,oe),G=new y_(I,Z,Y,le),Rt=new x_(I,Vt,T),Q=new c_(Tt),yt=new Nv(y,v,k,Gt,Vt,oe,Q),ot=new lx(y,Tt),dt=new Ov,$t=new Wv(Gt),At=new r_(y,v,k,wt,G,f,c),ft=new Kv(y,G,Vt),R=new cx(I,le,Vt,wt),pt=new a_(I,Gt,le),Wt=new __(I,Gt,le),le.programs=yt.programs,y.capabilities=Vt,y.extensions=Gt,y.properties=Tt,y.renderLists=dt,y.shadowMap=ft,y.state=wt,y.info=le}it();const z=new ox(y,I);this.xr=z,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const x=Gt.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=Gt.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(x){x!==void 0&&(H=x,this.setSize(X,j,!1))},this.getSize=function(x){return x.set(X,j)},this.setSize=function(x,L,F=!0){if(z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=x,j=L,e.width=Math.floor(x*H),e.height=Math.floor(L*H),F===!0&&(e.style.width=x+"px",e.style.height=L+"px"),this.setViewport(0,0,x,L)},this.getDrawingBufferSize=function(x){return x.set(X*H,j*H).floor()},this.setDrawingBufferSize=function(x,L,F){X=x,j=L,H=F,e.width=Math.floor(x*F),e.height=Math.floor(L*F),this.setViewport(0,0,x,L)},this.getCurrentViewport=function(x){return x.copy(C)},this.getViewport=function(x){return x.copy(bt)},this.setViewport=function(x,L,F,O){x.isVector4?bt.set(x.x,x.y,x.z,x.w):bt.set(x,L,F,O),wt.viewport(C.copy(bt).multiplyScalar(H).round())},this.getScissor=function(x){return x.copy(Bt)},this.setScissor=function(x,L,F,O){x.isVector4?Bt.set(x.x,x.y,x.z,x.w):Bt.set(x,L,F,O),wt.scissor(V.copy(Bt).multiplyScalar(H).round())},this.getScissorTest=function(){return re},this.setScissorTest=function(x){wt.setScissorTest(re=x)},this.setOpaqueSort=function(x){st=x},this.setTransparentSort=function(x){ut=x},this.getClearColor=function(x){return x.copy(At.getClearColor())},this.setClearColor=function(){At.setClearColor.apply(At,arguments)},this.getClearAlpha=function(){return At.getClearAlpha()},this.setClearAlpha=function(){At.setClearAlpha.apply(At,arguments)},this.clear=function(x=!0,L=!0,F=!0){let O=0;if(x){let D=!1;if(P!==null){const tt=P.texture.format;D=tt===Sl||tt===Ml||tt===yl}if(D){const tt=P.texture.type,lt=tt===Xn||tt===ki||tt===$s||tt===Ms||tt===vl||tt===xl,gt=At.getClearColor(),_t=At.getClearAlpha(),Pt=gt.r,Ut=gt.g,vt=gt.b;lt?(g[0]=Pt,g[1]=Ut,g[2]=vt,g[3]=_t,I.clearBufferuiv(I.COLOR,0,g)):(_[0]=Pt,_[1]=Ut,_[2]=vt,_[3]=_t,I.clearBufferiv(I.COLOR,0,_))}else O|=I.COLOR_BUFFER_BIT}L&&(O|=I.DEPTH_BUFFER_BIT),F&&(O|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",$,!1),e.removeEventListener("webglcontextrestored",ct,!1),e.removeEventListener("webglcontextcreationerror",at,!1),dt.dispose(),$t.dispose(),Tt.dispose(),v.dispose(),k.dispose(),G.dispose(),oe.dispose(),R.dispose(),yt.dispose(),z.dispose(),z.removeEventListener("sessionstart",Rl),z.removeEventListener("sessionend",Pl),mi.stop()};function $(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function ct(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;const x=le.autoReset,L=ft.enabled,F=ft.autoUpdate,O=ft.needsUpdate,D=ft.type;it(),le.autoReset=x,ft.enabled=L,ft.autoUpdate=F,ft.needsUpdate=O,ft.type=D}function at(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function It(x){const L=x.target;L.removeEventListener("dispose",It),_e(L)}function _e(x){Pe(x),Tt.remove(x)}function Pe(x){const L=Tt.get(x).programs;L!==void 0&&(L.forEach(function(F){yt.releaseProgram(F)}),x.isShaderMaterial&&yt.releaseShaderCache(x))}this.renderBufferDirect=function(x,L,F,O,D,tt){L===null&&(L=pe);const lt=D.isMesh&&D.matrixWorld.determinant()<0,gt=zu(x,L,F,O,D);wt.setMaterial(O,lt);let _t=F.index,Pt=1;if(O.wireframe===!0){if(_t=Z.getWireframeAttribute(F),_t===void 0)return;Pt=2}const Ut=F.drawRange,vt=F.attributes.position;let jt=Ut.start*Pt,ae=(Ut.start+Ut.count)*Pt;tt!==null&&(jt=Math.max(jt,tt.start*Pt),ae=Math.min(ae,(tt.start+tt.count)*Pt)),_t!==null?(jt=Math.max(jt,0),ae=Math.min(ae,_t.count)):vt!=null&&(jt=Math.max(jt,0),ae=Math.min(ae,vt.count));const ce=ae-jt;if(ce<0||ce===1/0)return;oe.setup(D,O,gt,F,_t);let ze,Qt=pt;if(_t!==null&&(ze=Y.get(_t),Qt=Wt,Qt.setIndex(ze)),D.isMesh)O.wireframe===!0?(wt.setLineWidth(O.wireframeLinewidth*xe()),Qt.setMode(I.LINES)):Qt.setMode(I.TRIANGLES);else if(D.isLine){let Mt=O.linewidth;Mt===void 0&&(Mt=1),wt.setLineWidth(Mt*xe()),D.isLineSegments?Qt.setMode(I.LINES):D.isLineLoop?Qt.setMode(I.LINE_LOOP):Qt.setMode(I.LINE_STRIP)}else D.isPoints?Qt.setMode(I.POINTS):D.isSprite&&Qt.setMode(I.TRIANGLES);if(D.isBatchedMesh)if(D._multiDrawInstances!==null)Qt.renderMultiDrawInstances(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount,D._multiDrawInstances);else if(Gt.get("WEBGL_multi_draw"))Qt.renderMultiDraw(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount);else{const Mt=D._multiDrawStarts,Cn=D._multiDrawCounts,te=D._multiDrawCount,ln=_t?Y.get(_t).bytesPerElement:1,Bi=Tt.get(O).currentProgram.getUniforms();for(let Ye=0;Ye<te;Ye++)Bi.setValue(I,"_gl_DrawID",Ye),Qt.render(Mt[Ye]/ln,Cn[Ye])}else if(D.isInstancedMesh)Qt.renderInstances(jt,ce,D.count);else if(F.isInstancedBufferGeometry){const Mt=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,Cn=Math.min(F.instanceCount,Mt);Qt.renderInstances(jt,ce,Cn)}else Qt.render(jt,ce)};function ne(x,L,F){x.transparent===!0&&x.side===Ze&&x.forceSinglePass===!1?(x.side=We,x.needsUpdate=!0,er(x,L,F),x.side=Wn,x.needsUpdate=!0,er(x,L,F),x.side=Ze):er(x,L,F)}this.compile=function(x,L,F=null){F===null&&(F=x),p=$t.get(F),p.init(L),S.push(p),F.traverseVisible(function(D){D.isLight&&D.layers.test(L.layers)&&(p.pushLight(D),D.castShadow&&p.pushShadow(D))}),x!==F&&x.traverseVisible(function(D){D.isLight&&D.layers.test(L.layers)&&(p.pushLight(D),D.castShadow&&p.pushShadow(D))}),p.setupLights();const O=new Set;return x.traverse(function(D){if(!(D.isMesh||D.isPoints||D.isLine||D.isSprite))return;const tt=D.material;if(tt)if(Array.isArray(tt))for(let lt=0;lt<tt.length;lt++){const gt=tt[lt];ne(gt,F,D),O.add(gt)}else ne(tt,F,D),O.add(tt)}),S.pop(),p=null,O},this.compileAsync=function(x,L,F=null){const O=this.compile(x,L,F);return new Promise(D=>{function tt(){if(O.forEach(function(lt){Tt.get(lt).currentProgram.isReady()&&O.delete(lt)}),O.size===0){D(x);return}setTimeout(tt,10)}Gt.get("KHR_parallel_shader_compile")!==null?tt():setTimeout(tt,10)})};let an=null;function An(x){an&&an(x)}function Rl(){mi.stop()}function Pl(){mi.start()}const mi=new Au;mi.setAnimationLoop(An),typeof self<"u"&&mi.setContext(self),this.setAnimationLoop=function(x){an=x,z.setAnimationLoop(x),x===null?mi.stop():mi.start()},z.addEventListener("sessionstart",Rl),z.addEventListener("sessionend",Pl),this.render=function(x,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),z.enabled===!0&&z.isPresenting===!0&&(z.cameraAutoUpdate===!0&&z.updateCamera(L),L=z.getCamera()),x.isScene===!0&&x.onBeforeRender(y,x,L,P),p=$t.get(x,S.length),p.init(L),S.push(p),Ct.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),W.setFromProjectionMatrix(Ct),xt=this.localClippingEnabled,et=Q.init(this.clippingPlanes,xt),m=dt.get(x,b.length),m.init(),b.push(m),z.enabled===!0&&z.isPresenting===!0){const tt=y.xr.getDepthSensingMesh();tt!==null&&mo(tt,L,-1/0,y.sortObjects)}mo(x,L,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(st,ut),Yt=z.enabled===!1||z.isPresenting===!1||z.hasDepthSensing()===!1,Yt&&At.addToRenderList(m,x),this.info.render.frame++,et===!0&&Q.beginShadows();const F=p.state.shadowsArray;ft.render(F,x,L),et===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset();const O=m.opaque,D=m.transmissive;if(p.setupLights(),L.isArrayCamera){const tt=L.cameras;if(D.length>0)for(let lt=0,gt=tt.length;lt<gt;lt++){const _t=tt[lt];Dl(O,D,x,_t)}Yt&&At.render(x);for(let lt=0,gt=tt.length;lt<gt;lt++){const _t=tt[lt];Ll(m,x,_t,_t.viewport)}}else D.length>0&&Dl(O,D,x,L),Yt&&At.render(x),Ll(m,x,L);P!==null&&(T.updateMultisampleRenderTarget(P),T.updateRenderTargetMipmap(P)),x.isScene===!0&&x.onAfterRender(y,x,L),oe.resetDefaultState(),E=-1,M=null,S.pop(),S.length>0?(p=S[S.length-1],et===!0&&Q.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function mo(x,L,F,O){if(x.visible===!1)return;if(x.layers.test(L.layers)){if(x.isGroup)F=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(L);else if(x.isLight)p.pushLight(x),x.castShadow&&p.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||W.intersectsSprite(x)){O&&zt.setFromMatrixPosition(x.matrixWorld).applyMatrix4(Ct);const lt=G.update(x),gt=x.material;gt.visible&&m.push(x,lt,gt,F,zt.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||W.intersectsObject(x))){const lt=G.update(x),gt=x.material;if(O&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),zt.copy(x.boundingSphere.center)):(lt.boundingSphere===null&&lt.computeBoundingSphere(),zt.copy(lt.boundingSphere.center)),zt.applyMatrix4(x.matrixWorld).applyMatrix4(Ct)),Array.isArray(gt)){const _t=lt.groups;for(let Pt=0,Ut=_t.length;Pt<Ut;Pt++){const vt=_t[Pt],jt=gt[vt.materialIndex];jt&&jt.visible&&m.push(x,lt,jt,F,zt.z,vt)}}else gt.visible&&m.push(x,lt,gt,F,zt.z,null)}}const tt=x.children;for(let lt=0,gt=tt.length;lt<gt;lt++)mo(tt[lt],L,F,O)}function Ll(x,L,F,O){const D=x.opaque,tt=x.transmissive,lt=x.transparent;p.setupLightsView(F),et===!0&&Q.setGlobalState(y.clippingPlanes,F),O&&wt.viewport(C.copy(O)),D.length>0&&tr(D,L,F),tt.length>0&&tr(tt,L,F),lt.length>0&&tr(lt,L,F),wt.buffers.depth.setTest(!0),wt.buffers.depth.setMask(!0),wt.buffers.color.setMask(!0),wt.setPolygonOffset(!1)}function Dl(x,L,F,O){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[O.id]===void 0&&(p.state.transmissionRenderTarget[O.id]=new Fi(1,1,{generateMipmaps:!0,type:Gt.has("EXT_color_buffer_half_float")||Gt.has("EXT_color_buffer_float")?Zs:Xn,minFilter:Li,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Zt.workingColorSpace}));const tt=p.state.transmissionRenderTarget[O.id],lt=O.viewport||C;tt.setSize(lt.z,lt.w);const gt=y.getRenderTarget();y.setRenderTarget(tt),y.getClearColor(q),K=y.getClearAlpha(),K<1&&y.setClearColor(16777215,.5),y.clear(),Yt&&At.render(F);const _t=y.toneMapping;y.toneMapping=ai;const Pt=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),p.setupLightsView(O),et===!0&&Q.setGlobalState(y.clippingPlanes,O),tr(x,F,O),T.updateMultisampleRenderTarget(tt),T.updateRenderTargetMipmap(tt),Gt.has("WEBGL_multisampled_render_to_texture")===!1){let Ut=!1;for(let vt=0,jt=L.length;vt<jt;vt++){const ae=L[vt],ce=ae.object,ze=ae.geometry,Qt=ae.material,Mt=ae.group;if(Qt.side===Ze&&ce.layers.test(O.layers)){const Cn=Qt.side;Qt.side=We,Qt.needsUpdate=!0,Il(ce,F,O,ze,Qt,Mt),Qt.side=Cn,Qt.needsUpdate=!0,Ut=!0}}Ut===!0&&(T.updateMultisampleRenderTarget(tt),T.updateRenderTargetMipmap(tt))}y.setRenderTarget(gt),y.setClearColor(q,K),Pt!==void 0&&(O.viewport=Pt),y.toneMapping=_t}function tr(x,L,F){const O=L.isScene===!0?L.overrideMaterial:null;for(let D=0,tt=x.length;D<tt;D++){const lt=x[D],gt=lt.object,_t=lt.geometry,Pt=O===null?lt.material:O,Ut=lt.group;gt.layers.test(F.layers)&&Il(gt,L,F,_t,Pt,Ut)}}function Il(x,L,F,O,D,tt){x.onBeforeRender(y,L,F,O,D,tt),x.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),D.onBeforeRender(y,L,F,O,x,tt),D.transparent===!0&&D.side===Ze&&D.forceSinglePass===!1?(D.side=We,D.needsUpdate=!0,y.renderBufferDirect(F,L,O,D,x,tt),D.side=Wn,D.needsUpdate=!0,y.renderBufferDirect(F,L,O,D,x,tt),D.side=Ze):y.renderBufferDirect(F,L,O,D,x,tt),x.onAfterRender(y,L,F,O,D,tt)}function er(x,L,F){L.isScene!==!0&&(L=pe);const O=Tt.get(x),D=p.state.lights,tt=p.state.shadowsArray,lt=D.state.version,gt=yt.getParameters(x,D.state,tt,L,F),_t=yt.getProgramCacheKey(gt);let Pt=O.programs;O.environment=x.isMeshStandardMaterial?L.environment:null,O.fog=L.fog,O.envMap=(x.isMeshStandardMaterial?k:v).get(x.envMap||O.environment),O.envMapRotation=O.environment!==null&&x.envMap===null?L.environmentRotation:x.envMapRotation,Pt===void 0&&(x.addEventListener("dispose",It),Pt=new Map,O.programs=Pt);let Ut=Pt.get(_t);if(Ut!==void 0){if(O.currentProgram===Ut&&O.lightsStateVersion===lt)return Nl(x,gt),Ut}else gt.uniforms=yt.getUniforms(x),x.onBeforeCompile(gt,y),Ut=yt.acquireProgram(gt,_t),Pt.set(_t,Ut),O.uniforms=gt.uniforms;const vt=O.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(vt.clippingPlanes=Q.uniform),Nl(x,gt),O.needsLights=Gu(x),O.lightsStateVersion=lt,O.needsLights&&(vt.ambientLightColor.value=D.state.ambient,vt.lightProbe.value=D.state.probe,vt.directionalLights.value=D.state.directional,vt.directionalLightShadows.value=D.state.directionalShadow,vt.spotLights.value=D.state.spot,vt.spotLightShadows.value=D.state.spotShadow,vt.rectAreaLights.value=D.state.rectArea,vt.ltc_1.value=D.state.rectAreaLTC1,vt.ltc_2.value=D.state.rectAreaLTC2,vt.pointLights.value=D.state.point,vt.pointLightShadows.value=D.state.pointShadow,vt.hemisphereLights.value=D.state.hemi,vt.directionalShadowMap.value=D.state.directionalShadowMap,vt.directionalShadowMatrix.value=D.state.directionalShadowMatrix,vt.spotShadowMap.value=D.state.spotShadowMap,vt.spotLightMatrix.value=D.state.spotLightMatrix,vt.spotLightMap.value=D.state.spotLightMap,vt.pointShadowMap.value=D.state.pointShadowMap,vt.pointShadowMatrix.value=D.state.pointShadowMatrix),O.currentProgram=Ut,O.uniformsList=null,Ut}function Ul(x){if(x.uniformsList===null){const L=x.currentProgram.getUniforms();x.uniformsList=$r.seqWithValue(L.seq,x.uniforms)}return x.uniformsList}function Nl(x,L){const F=Tt.get(x);F.outputColorSpace=L.outputColorSpace,F.batching=L.batching,F.batchingColor=L.batchingColor,F.instancing=L.instancing,F.instancingColor=L.instancingColor,F.instancingMorph=L.instancingMorph,F.skinning=L.skinning,F.morphTargets=L.morphTargets,F.morphNormals=L.morphNormals,F.morphColors=L.morphColors,F.morphTargetsCount=L.morphTargetsCount,F.numClippingPlanes=L.numClippingPlanes,F.numIntersection=L.numClipIntersection,F.vertexAlphas=L.vertexAlphas,F.vertexTangents=L.vertexTangents,F.toneMapping=L.toneMapping}function zu(x,L,F,O,D){L.isScene!==!0&&(L=pe),T.resetTextureUnits();const tt=L.fog,lt=O.isMeshStandardMaterial?L.environment:null,gt=P===null?y.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Ts,_t=(O.isMeshStandardMaterial?k:v).get(O.envMap||lt),Pt=O.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,Ut=!!F.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),vt=!!F.morphAttributes.position,jt=!!F.morphAttributes.normal,ae=!!F.morphAttributes.color;let ce=ai;O.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(ce=y.toneMapping);const ze=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Qt=ze!==void 0?ze.length:0,Mt=Tt.get(O),Cn=p.state.lights;if(et===!0&&(xt===!0||x!==M)){const tn=x===M&&O.id===E;Q.setState(O,x,tn)}let te=!1;O.version===Mt.__version?(Mt.needsLights&&Mt.lightsStateVersion!==Cn.state.version||Mt.outputColorSpace!==gt||D.isBatchedMesh&&Mt.batching===!1||!D.isBatchedMesh&&Mt.batching===!0||D.isBatchedMesh&&Mt.batchingColor===!0&&D.colorTexture===null||D.isBatchedMesh&&Mt.batchingColor===!1&&D.colorTexture!==null||D.isInstancedMesh&&Mt.instancing===!1||!D.isInstancedMesh&&Mt.instancing===!0||D.isSkinnedMesh&&Mt.skinning===!1||!D.isSkinnedMesh&&Mt.skinning===!0||D.isInstancedMesh&&Mt.instancingColor===!0&&D.instanceColor===null||D.isInstancedMesh&&Mt.instancingColor===!1&&D.instanceColor!==null||D.isInstancedMesh&&Mt.instancingMorph===!0&&D.morphTexture===null||D.isInstancedMesh&&Mt.instancingMorph===!1&&D.morphTexture!==null||Mt.envMap!==_t||O.fog===!0&&Mt.fog!==tt||Mt.numClippingPlanes!==void 0&&(Mt.numClippingPlanes!==Q.numPlanes||Mt.numIntersection!==Q.numIntersection)||Mt.vertexAlphas!==Pt||Mt.vertexTangents!==Ut||Mt.morphTargets!==vt||Mt.morphNormals!==jt||Mt.morphColors!==ae||Mt.toneMapping!==ce||Mt.morphTargetsCount!==Qt)&&(te=!0):(te=!0,Mt.__version=O.version);let ln=Mt.currentProgram;te===!0&&(ln=er(O,L,D));let Bi=!1,Ye=!1,Rs=!1;const he=ln.getUniforms(),xn=Mt.uniforms;if(wt.useProgram(ln.program)&&(Bi=!0,Ye=!0,Rs=!0),O.id!==E&&(E=O.id,Ye=!0),Bi||M!==x){wt.buffers.depth.getReversed()?(rt.copy(x.projectionMatrix),Qp(rt),tm(rt),he.setValue(I,"projectionMatrix",rt)):he.setValue(I,"projectionMatrix",x.projectionMatrix),he.setValue(I,"viewMatrix",x.matrixWorldInverse);const qn=he.map.cameraPosition;qn!==void 0&&qn.setValue(I,Dt.setFromMatrixPosition(x.matrixWorld)),Vt.logarithmicDepthBuffer&&he.setValue(I,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&he.setValue(I,"isOrthographic",x.isOrthographicCamera===!0),M!==x&&(M=x,Ye=!0,Rs=!0)}if(D.isSkinnedMesh){he.setOptional(I,D,"bindMatrix"),he.setOptional(I,D,"bindMatrixInverse");const tn=D.skeleton;tn&&(tn.boneTexture===null&&tn.computeBoneTexture(),he.setValue(I,"boneTexture",tn.boneTexture,T))}D.isBatchedMesh&&(he.setOptional(I,D,"batchingTexture"),he.setValue(I,"batchingTexture",D._matricesTexture,T),he.setOptional(I,D,"batchingIdTexture"),he.setValue(I,"batchingIdTexture",D._indirectTexture,T),he.setOptional(I,D,"batchingColorTexture"),D._colorsTexture!==null&&he.setValue(I,"batchingColorTexture",D._colorsTexture,T));const Ps=F.morphAttributes;if((Ps.position!==void 0||Ps.normal!==void 0||Ps.color!==void 0)&&Rt.update(D,F,ln),(Ye||Mt.receiveShadow!==D.receiveShadow)&&(Mt.receiveShadow=D.receiveShadow,he.setValue(I,"receiveShadow",D.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(xn.envMap.value=_t,xn.flipEnvMap.value=_t.isCubeTexture&&_t.isRenderTargetTexture===!1?-1:1),O.isMeshStandardMaterial&&O.envMap===null&&L.environment!==null&&(xn.envMapIntensity.value=L.environmentIntensity),Ye&&(he.setValue(I,"toneMappingExposure",y.toneMappingExposure),Mt.needsLights&&Hu(xn,Rs),tt&&O.fog===!0&&ot.refreshFogUniforms(xn,tt),ot.refreshMaterialUniforms(xn,O,H,j,p.state.transmissionRenderTarget[x.id]),$r.upload(I,Ul(Mt),xn,T)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&($r.upload(I,Ul(Mt),xn,T),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&he.setValue(I,"center",D.center),he.setValue(I,"modelViewMatrix",D.modelViewMatrix),he.setValue(I,"normalMatrix",D.normalMatrix),he.setValue(I,"modelMatrix",D.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const tn=O.uniformsGroups;for(let qn=0,Kn=tn.length;qn<Kn;qn++){const kl=tn[qn];R.update(kl,ln),R.bind(kl,ln)}}return ln}function Hu(x,L){x.ambientLightColor.needsUpdate=L,x.lightProbe.needsUpdate=L,x.directionalLights.needsUpdate=L,x.directionalLightShadows.needsUpdate=L,x.pointLights.needsUpdate=L,x.pointLightShadows.needsUpdate=L,x.spotLights.needsUpdate=L,x.spotLightShadows.needsUpdate=L,x.rectAreaLights.needsUpdate=L,x.hemisphereLights.needsUpdate=L}function Gu(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(x,L,F){Tt.get(x.texture).__webglTexture=L,Tt.get(x.depthTexture).__webglTexture=F;const O=Tt.get(x);O.__hasExternalTextures=!0,O.__autoAllocateDepthBuffer=F===void 0,O.__autoAllocateDepthBuffer||Gt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),O.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(x,L){const F=Tt.get(x);F.__webglFramebuffer=L,F.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(x,L=0,F=0){P=x,w=L,A=F;let O=!0,D=null,tt=!1,lt=!1;if(x){const _t=Tt.get(x);if(_t.__useDefaultFramebuffer!==void 0)wt.bindFramebuffer(I.FRAMEBUFFER,null),O=!1;else if(_t.__webglFramebuffer===void 0)T.setupRenderTarget(x);else if(_t.__hasExternalTextures)T.rebindTextures(x,Tt.get(x.texture).__webglTexture,Tt.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const vt=x.depthTexture;if(_t.__boundDepthTexture!==vt){if(vt!==null&&Tt.has(vt)&&(x.width!==vt.image.width||x.height!==vt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(x)}}const Pt=x.texture;(Pt.isData3DTexture||Pt.isDataArrayTexture||Pt.isCompressedArrayTexture)&&(lt=!0);const Ut=Tt.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Ut[L])?D=Ut[L][F]:D=Ut[L],tt=!0):x.samples>0&&T.useMultisampledRTT(x)===!1?D=Tt.get(x).__webglMultisampledFramebuffer:Array.isArray(Ut)?D=Ut[F]:D=Ut,C.copy(x.viewport),V.copy(x.scissor),B=x.scissorTest}else C.copy(bt).multiplyScalar(H).floor(),V.copy(Bt).multiplyScalar(H).floor(),B=re;if(wt.bindFramebuffer(I.FRAMEBUFFER,D)&&O&&wt.drawBuffers(x,D),wt.viewport(C),wt.scissor(V),wt.setScissorTest(B),tt){const _t=Tt.get(x.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+L,_t.__webglTexture,F)}else if(lt){const _t=Tt.get(x.texture),Pt=L||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,_t.__webglTexture,F||0,Pt)}E=-1},this.readRenderTargetPixels=function(x,L,F,O,D,tt,lt){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let gt=Tt.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&lt!==void 0&&(gt=gt[lt]),gt){wt.bindFramebuffer(I.FRAMEBUFFER,gt);try{const _t=x.texture,Pt=_t.format,Ut=_t.type;if(!Vt.textureFormatReadable(Pt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Vt.textureTypeReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=x.width-O&&F>=0&&F<=x.height-D&&I.readPixels(L,F,O,D,kt.convert(Pt),kt.convert(Ut),tt)}finally{const _t=P!==null?Tt.get(P).__webglFramebuffer:null;wt.bindFramebuffer(I.FRAMEBUFFER,_t)}}},this.readRenderTargetPixelsAsync=async function(x,L,F,O,D,tt,lt){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let gt=Tt.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&lt!==void 0&&(gt=gt[lt]),gt){const _t=x.texture,Pt=_t.format,Ut=_t.type;if(!Vt.textureFormatReadable(Pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Vt.textureTypeReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(L>=0&&L<=x.width-O&&F>=0&&F<=x.height-D){wt.bindFramebuffer(I.FRAMEBUFFER,gt);const vt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,vt),I.bufferData(I.PIXEL_PACK_BUFFER,tt.byteLength,I.STREAM_READ),I.readPixels(L,F,O,D,kt.convert(Pt),kt.convert(Ut),0);const jt=P!==null?Tt.get(P).__webglFramebuffer:null;wt.bindFramebuffer(I.FRAMEBUFFER,jt);const ae=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Jp(I,ae,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,vt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,tt),I.deleteBuffer(vt),I.deleteSync(ae),tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(x,L=null,F=0){x.isTexture!==!0&&(Hs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),L=arguments[0]||null,x=arguments[1]);const O=Math.pow(2,-F),D=Math.floor(x.image.width*O),tt=Math.floor(x.image.height*O),lt=L!==null?L.x:0,gt=L!==null?L.y:0;T.setTexture2D(x,0),I.copyTexSubImage2D(I.TEXTURE_2D,F,0,0,lt,gt,D,tt),wt.unbindTexture()},this.copyTextureToTexture=function(x,L,F=null,O=null,D=0){x.isTexture!==!0&&(Hs("WebGLRenderer: copyTextureToTexture function signature has changed."),O=arguments[0]||null,x=arguments[1],L=arguments[2],D=arguments[3]||0,F=null);let tt,lt,gt,_t,Pt,Ut,vt,jt,ae;const ce=x.isCompressedTexture?x.mipmaps[D]:x.image;F!==null?(tt=F.max.x-F.min.x,lt=F.max.y-F.min.y,gt=F.isBox3?F.max.z-F.min.z:1,_t=F.min.x,Pt=F.min.y,Ut=F.isBox3?F.min.z:0):(tt=ce.width,lt=ce.height,gt=ce.depth||1,_t=0,Pt=0,Ut=0),O!==null?(vt=O.x,jt=O.y,ae=O.z):(vt=0,jt=0,ae=0);const ze=kt.convert(L.format),Qt=kt.convert(L.type);let Mt;L.isData3DTexture?(T.setTexture3D(L,0),Mt=I.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(T.setTexture2DArray(L,0),Mt=I.TEXTURE_2D_ARRAY):(T.setTexture2D(L,0),Mt=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,L.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,L.unpackAlignment);const Cn=I.getParameter(I.UNPACK_ROW_LENGTH),te=I.getParameter(I.UNPACK_IMAGE_HEIGHT),ln=I.getParameter(I.UNPACK_SKIP_PIXELS),Bi=I.getParameter(I.UNPACK_SKIP_ROWS),Ye=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,ce.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ce.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,_t),I.pixelStorei(I.UNPACK_SKIP_ROWS,Pt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ut);const Rs=x.isDataArrayTexture||x.isData3DTexture,he=L.isDataArrayTexture||L.isData3DTexture;if(x.isRenderTargetTexture||x.isDepthTexture){const xn=Tt.get(x),Ps=Tt.get(L),tn=Tt.get(xn.__renderTarget),qn=Tt.get(Ps.__renderTarget);wt.bindFramebuffer(I.READ_FRAMEBUFFER,tn.__webglFramebuffer),wt.bindFramebuffer(I.DRAW_FRAMEBUFFER,qn.__webglFramebuffer);for(let Kn=0;Kn<gt;Kn++)Rs&&I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Tt.get(x).__webglTexture,D,Ut+Kn),x.isDepthTexture?(he&&I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Tt.get(L).__webglTexture,D,ae+Kn),I.blitFramebuffer(_t,Pt,tt,lt,vt,jt,tt,lt,I.DEPTH_BUFFER_BIT,I.NEAREST)):he?I.copyTexSubImage3D(Mt,D,vt,jt,ae+Kn,_t,Pt,tt,lt):I.copyTexSubImage2D(Mt,D,vt,jt,ae+Kn,_t,Pt,tt,lt);wt.bindFramebuffer(I.READ_FRAMEBUFFER,null),wt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else he?x.isDataTexture||x.isData3DTexture?I.texSubImage3D(Mt,D,vt,jt,ae,tt,lt,gt,ze,Qt,ce.data):L.isCompressedArrayTexture?I.compressedTexSubImage3D(Mt,D,vt,jt,ae,tt,lt,gt,ze,ce.data):I.texSubImage3D(Mt,D,vt,jt,ae,tt,lt,gt,ze,Qt,ce):x.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,D,vt,jt,tt,lt,ze,Qt,ce.data):x.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,D,vt,jt,ce.width,ce.height,ze,ce.data):I.texSubImage2D(I.TEXTURE_2D,D,vt,jt,tt,lt,ze,Qt,ce);I.pixelStorei(I.UNPACK_ROW_LENGTH,Cn),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,te),I.pixelStorei(I.UNPACK_SKIP_PIXELS,ln),I.pixelStorei(I.UNPACK_SKIP_ROWS,Bi),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ye),D===0&&L.generateMipmaps&&I.generateMipmap(Mt),wt.unbindTexture()},this.copyTextureToTexture3D=function(x,L,F=null,O=null,D=0){return x.isTexture!==!0&&(Hs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),F=arguments[0]||null,O=arguments[1]||null,x=arguments[2],L=arguments[3],D=arguments[4]||0),Hs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(x,L,F,O,D)},this.initRenderTarget=function(x){Tt.get(x).__webglFramebuffer===void 0&&T.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?T.setTextureCube(x,0):x.isData3DTexture?T.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?T.setTexture2DArray(x,0):T.setTexture2D(x,0),wt.unbindTexture()},this.resetState=function(){w=0,A=0,P=null,wt.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Zt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Zt._getUnpackColorSpace()}}class El{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ht(t),this.near=e,this.far=n}clone(){return new El(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class ux extends Be{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yn,this.environmentIntensity=1,this.environmentRotation=new Yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class dx{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=sl,this.updateRanges=[],this.version=0,this.uuid=li()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=li()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=li()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const ke=new N;class io{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyMatrix4(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyNormalMatrix(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.transformDirection(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Mn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=se(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=se(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=se(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=se(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=se(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Mn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Mn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Mn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Mn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=se(e,this.array),n=se(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=se(e,this.array),n=se(n,this.array),s=se(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=se(e,this.array),n=se(n,this.array),s=se(s,this.array),r=se(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ie(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new io(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Iu extends As{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Ht(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let es;const Fs=new N,ns=new N,is=new N,ss=new Xt,Os=new Xt,Uu=new ve,Pr=new N,Bs=new N,Lr=new N,mh=new Xt,na=new Xt,gh=new Xt;class fx extends Be{constructor(t=new Iu){if(super(),this.isSprite=!0,this.type="Sprite",es===void 0){es=new vn;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new dx(e,5);es.setIndex([0,1,2,0,2,3]),es.setAttribute("position",new io(n,3,0,!1)),es.setAttribute("uv",new io(n,2,3,!1))}this.geometry=es,this.material=t,this.center=new Xt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ns.setFromMatrixScale(this.matrixWorld),Uu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),is.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ns.multiplyScalar(-is.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;Dr(Pr.set(-.5,-.5,0),is,o,ns,s,r),Dr(Bs.set(.5,-.5,0),is,o,ns,s,r),Dr(Lr.set(.5,.5,0),is,o,ns,s,r),mh.set(0,0),na.set(1,0),gh.set(1,1);let a=t.ray.intersectTriangle(Pr,Bs,Lr,!1,Fs);if(a===null&&(Dr(Bs.set(-.5,.5,0),is,o,ns,s,r),na.set(0,1),a=t.ray.intersectTriangle(Pr,Lr,Bs,!1,Fs),a===null))return;const c=t.ray.origin.distanceTo(Fs);c<t.near||c>t.far||e.push({distance:c,point:Fs.clone(),uv:je.getInterpolation(Fs,Pr,Bs,Lr,mh,na,gh,new Xt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Dr(i,t,e,n,s,r){ss.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Os.x=r*ss.x-s*ss.y,Os.y=s*ss.x+r*ss.y):Os.copy(ss),i.copy(t),i.x+=Os.x,i.y+=Os.y,i.applyMatrix4(Uu)}class Tl extends Ne{constructor(t=null,e=1,n=1,s,r,o,a,c,l=ge,h=ge,u,d){super(null,o,a,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Nu extends As{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Ht(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const so=new N,ro=new N,_h=new ve,zs=new vu,Ir=new ho,ia=new N,vh=new N;class px extends Be{constructor(t=new vn,e=new Nu){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)so.fromBufferAttribute(e,s-1),ro.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=so.distanceTo(ro);t.setAttribute("lineDistance",new Tn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ir.copy(n.boundingSphere),Ir.applyMatrix4(s),Ir.radius+=r,t.ray.intersectsSphere(Ir)===!1)return;_h.copy(s).invert(),zs.copy(t.ray).applyMatrix4(_h);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=l){const p=h.getX(_),b=h.getX(_+1),S=Ur(this,t,zs,c,p,b);S&&e.push(S)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(f),p=Ur(this,t,zs,c,_,m);p&&e.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=l){const p=Ur(this,t,zs,c,_,_+1);p&&e.push(p)}if(this.isLineLoop){const _=Ur(this,t,zs,c,g-1,f);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Ur(i,t,e,n,s,r){const o=i.geometry.attributes.position;if(so.fromBufferAttribute(o,s),ro.fromBufferAttribute(o,r),e.distanceSqToSegment(so,ro,ia,vh)>n)return;ia.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(ia);if(!(c<t.near||c>t.far))return{distance:c,point:vh.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const xh=new N,yh=new N;class mx extends px{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)xh.fromBufferAttribute(e,s),yh.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+xh.distanceTo(yh);t.setAttribute("lineDistance",new Tn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class fo extends Ne{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}const Nr=new N,kr=new N,sa=new N,Fr=new je;class gx extends vn{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const s=Math.pow(10,4),r=Math.cos(Yr*e),o=t.getIndex(),a=t.getAttribute("position"),c=o?o.count:a.count,l=[0,0,0],h=["a","b","c"],u=new Array(3),d={},f=[];for(let g=0;g<c;g+=3){o?(l[0]=o.getX(g),l[1]=o.getX(g+1),l[2]=o.getX(g+2)):(l[0]=g,l[1]=g+1,l[2]=g+2);const{a:_,b:m,c:p}=Fr;if(_.fromBufferAttribute(a,l[0]),m.fromBufferAttribute(a,l[1]),p.fromBufferAttribute(a,l[2]),Fr.getNormal(sa),u[0]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,u[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,u[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let b=0;b<3;b++){const S=(b+1)%3,y=u[b],U=u[S],w=Fr[h[b]],A=Fr[h[S]],P=`${y}_${U}`,E=`${U}_${y}`;E in d&&d[E]?(sa.dot(d[E].normal)<=r&&(f.push(w.x,w.y,w.z),f.push(A.x,A.y,A.z)),d[E]=null):P in d||(d[P]={index0:l[b],index1:l[S],normal:sa.clone()})}}for(const g in d)if(d[g]){const{index0:_,index1:m}=d[g];Nr.fromBufferAttribute(a,_),kr.fromBufferAttribute(a,m),f.push(Nr.x,Nr.y,Nr.z),f.push(kr.x,kr.y,kr.z)}this.setAttribute("position",new Tn(f,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=gl);const _x={pig:[{size:[.62,.5,.9],at:[0,.6,.05],color:"#eda3a1"},{size:[.5,.5,.5],at:[0,.75,-.6],color:"#eda3a1",face:"pig"},{size:[.26,.2,.08],at:[0,.68,-.88],color:"#d98580"},...Mh(.18,.35,.2,.32,"#e0918f")],sheep:[{size:[.7,.62,1],at:[0,.85,.05],color:"#ececec"},{size:[.4,.42,.45],at:[0,1.08,-.62],color:"#c9b8a6",face:"sheep"},...Mh(.2,.55,.22,.34,"#c9b8a6")],chicken:[{size:[.3,.3,.4],at:[0,.38,.02],color:"#f4f4f4"},{size:[.22,.3,.18],at:[0,.62,-.2],color:"#f4f4f4",face:"chicken"},{size:[.18,.08,.1],at:[0,.62,-.33],color:"#f2a33a"},{size:[.08,.1,.06],at:[0,.53,-.31],color:"#d8312a"},{size:[.06,.24,.06],at:[-.08,.12,.02],color:"#f2a33a",leg:0},{size:[.06,.24,.06],at:[.08,.12,.02],color:"#f2a33a",leg:1}],npc:[{size:[.5,.72,.3],at:[0,1.08,0],color:"#4f7a3a"},{size:[.5,.5,.5],at:[0,1.69,0],color:"#c49a7a",face:"npc"},{size:[.58,.18,.2],at:[0,1.2,-.2],color:"#3f6630"},{size:[.22,.72,.24],at:[-.12,.36,0],color:"#3b3b6b",leg:0},{size:[.22,.72,.24],at:[.12,.36,0],color:"#3b3b6b",leg:1}],zombie:[{size:[.5,.72,.28],at:[0,1.08,0],color:"#2b8c8a"},{size:[.5,.5,.5],at:[0,1.7,0],color:"#5d9447",face:"zombie"},{size:[.2,.2,.72],at:[-.35,1.34,-.3],color:"#5d9447"},{size:[.2,.2,.72],at:[.35,1.34,-.3],color:"#5d9447"},{size:[.23,.72,.25],at:[-.12,.36,0],color:"#3a3f9a",leg:0},{size:[.23,.72,.25],at:[.12,.36,0],color:"#3a3f9a",leg:1}]};function Mh(i,t,e,n,s){return[{size:[i,t,i],at:[-e,t/2,-n],color:s,leg:0},{size:[i,t,i],at:[e,t/2,-n],color:s,leg:1},{size:[i,t,i],at:[-e,t/2,n],color:s,leg:1},{size:[i,t,i],at:[e,t/2,n],color:s,leg:0}]}function vx(i,t){const e=document.createElement("canvas");e.width=e.height=8;const n=e.getContext("2d");n.fillStyle=i,n.fillRect(0,0,8,8);let s=i.length*977+0;const r=()=>(s=s*16807%2147483647)/2147483647;for(let a=0;a<14;a++)n.fillStyle=r()<.5?"rgba(0,0,0,0.08)":"rgba(255,255,255,0.1)",n.fillRect(Math.floor(r()*8),Math.floor(r()*8),1,1);const o=new fo(e);return o.magFilter=ge,o.minFilter=ge,o.colorSpace=be,o}function xx(i,t){const e=document.createElement("canvas");e.width=e.height=8;const n=e.getContext("2d");n.fillStyle=i,n.fillRect(0,0,8,8);const s=(o,a,c)=>{n.fillStyle=c,n.fillRect(o,a,1,1)};t==="npc"?(n.fillStyle="#5a3b22",n.fillRect(0,0,8,2),s(2,3,"#fff"),s(3,3,"#2b5f2b"),s(5,3,"#fff"),s(4,3,"#2b5f2b"),n.fillStyle="#a8775a",n.fillRect(3,4,2,2),n.fillStyle="#7a4a33",n.fillRect(2,6,4,1)):t==="zombie"?(n.fillStyle="#1d2e17",n.fillRect(1,3,2,1),n.fillRect(5,3,2,1),n.fillStyle="#3f6a30",n.fillRect(3,5,2,1),n.fillRect(2,6,4,1)):(s(1,3,"#1b1b1b"),s(6,3,"#1b1b1b"),t==="pig"&&(s(1,2,"#fff"),s(6,2,"#fff")));const r=new fo(e);return r.magFilter=ge,r.minFilter=ge,r.colorSpace=be,r}function Sh(i){const t=new hs;for(const e of _x[i.kind]){const n=new _n({map:vx(e.color)}),s=e.face?[n,n,n,n,n,new _n({map:xx(e.color,e.face)})]:n,r=new $n(...e.size),o=new Re(r,s);e.leg!==void 0?(r.translate(0,-e.size[1]/2,0),o.position.set(e.at[0],e.at[1]+e.size[1]/2,e.at[2]),o.userData.leg=e.leg):o.position.set(...e.at),t.add(o)}return i.kind==="npc"&&t.add(yx(i.name??"NPC")),t}function yx(i){const t=document.createElement("canvas"),e=t.getContext("2d");e.font="28px monospace",t.width=Math.ceil(e.measureText(i).width)+20,t.height=40,e.font="28px monospace",e.fillStyle="rgba(0,0,0,0.45)",e.fillRect(0,0,t.width,t.height),e.fillStyle="#fff",e.textBaseline="middle",e.fillText(i,10,21);const n=new fo(t);n.colorSpace=be;const s=new fx(new Iu({map:n,depthTest:!1}));return s.scale.set(t.width/100,t.height/100,1),s.position.set(0,2.25,0),s.userData.nameTag=!0,s}const bh=12,Mx=8,Sx=96;class bx{constructor(t,e){this.world=t,this.scene=e,t.onBlockChanged((n,s,r)=>af(this.mobs,n,s,r,this.lastPlayer))}mobs=[];models=new Map;nextId=1;spawning=!0;spawnTimer=0;pathBudget={nodes:0};rotation=0;lastPlayer=null;seed=12345;rand=()=>(this.seed=this.seed*16807%2147483647)/2147483647;spawn(t,e,n={}){const s=Kd(this.nextId++,t,e,n);this.mobs.push(s);const r=Sh(s);return this.models.set(s.id,r),this.scene.add(r),s}remove(t){const e=this.mobs.indexOf(t);e>=0&&this.mobs.splice(e,1);const n=this.models.get(t.id);n&&(this.scene.remove(n),n.traverse(s=>{s instanceof Re&&s.geometry.dispose()}),this.models.delete(t.id))}refresh(t){const e=this.models.get(t.id);e&&this.scene.remove(e);const n=Sh(t);this.models.set(t.id,n),this.scene.add(n)}update(t,e,n,s,r=e,o=n){const a=(h,u,d)=>this.world.getBlock(h,u,d),c=sf(o);this.pathBudget.nodes=Fn.budgetPerFrame,this.pathBudget.ms=Fn.budgetMs,this.lastPlayer=r,this.spawnTimer-=t,this.spawnTimer<=0&&(this.spawnTimer=2,this.spawning&&(this.spawnNear(e),this.spawnHostileNear(e,c)));const l=this.mobs.length>0?[...this.mobs.slice(this.rotation%this.mobs.length),...this.mobs.slice(0,this.rotation%this.mobs.length)]:[];this.rotation++;for(const h of l){const u=Math.hypot(h.position.x-e.x,h.position.z-e.z);if(h.kind!=="npc"&&u>Sx){this.remove(h);continue}if(h.position.y<-10){this.remove(h);continue}u<64&&Zd(a,h,t,this.rand,r,this.pathBudget);const d=this.world.getLight(Math.floor(h.position.x),Math.floor(h.position.y+1.6),Math.floor(h.position.z));if(of(h,dl(d),c,t)){this.remove(h);continue}const f=this.models.get(h.id);f.position.set(h.position.x,h.position.y,h.position.z),f.rotation.y=h.yaw;const g=Math.hypot(h.velocity.x,h.velocity.z),_=Math.sin(s*10+h.id)*Math.min(1,g)*.7,m=h.hurtTimer>2.6?new Ht(1,.4,.4):h.burning?new Ht(1,.55+.2*Math.sin(s*20),.2):new Ht(n,n,n);f.traverse(p=>{if(p instanceof Re){p.userData.leg!==void 0&&(p.rotation.x=p.userData.leg===0?_:-_);for(const b of Array.isArray(p.material)?p.material:[p.material])b.color.copy(m)}})}}raycast(t,e,n){let s=null;for(const r of this.mobs){const o=tf(t,e,r,n);o!==null&&(!s||o<s.distance)&&(s={mob:r,distance:o})}return s}attack(t,e,n){if(!Qd(t,e,n))return;this.remove(t);const s=Ee[t.kind].drop;return s?Vn(s[0]):null}animalCount(){return this.mobs.filter(t=>t.kind!=="npc"&&!Ee[t.kind].hostile).length}hostileCount(){return this.mobs.filter(t=>Ee[t.kind].hostile).length}spawnHostileNear(t,e){const n=(r,o,a)=>this.world.getBlock(r,o,a),s=(r,o,a)=>this.world.getLight(r,o,a);for(let r=0;r<4&&this.hostileCount()<Mx;r++){const o=this.rand()*Math.PI*2,a=24+this.rand()*20,c=Math.floor(t.x+Math.cos(o)*a),l=Math.floor(t.z+Math.sin(o)*a);if(!this.world.hasChunk(Math.floor(c/16),Math.floor(l/16)))continue;const h=this.world.generator.heightAt(c,l)+1,u=this.rand()<.5?h:2+Math.floor(this.rand()*Math.max(1,Math.min(h,de-3)-2));if(!rf(n,s,c,u,l,e,this.rand()))continue;const d={x:c+.5,y:u+.01,z:l+.5};di(n,ui(d,Ee.zombie.width,Ee.zombie.height))||this.spawn("zombie",d,{yaw:this.rand()*Math.PI*2})}}exportNpcs(){return this.mobs.filter(t=>t.kind==="npc").map(t=>({x:t.position.x,y:t.position.y,z:t.position.z,yaw:t.yaw,name:t.name??"NPC",dialogue:t.dialogue??""}))}spawnNear(t){if(this.animalCount()>=bh)return;const e=Kt("grass"),n=this.rand()*Math.PI*2,s=14+this.rand()*22,r=Math.floor(t.x+Math.cos(n)*s),o=Math.floor(t.z+Math.sin(n)*s),a=this.world.generator.heightAt(r,o);if(a<=kn||this.world.getBlock(r,a,o)!==e||this.world.getBlock(r,a+1,o)!==0&&this.world.getBlock(r,a+1,o)!==Kt("tall_grass"))return;const c=ql[Math.floor(this.rand()*ql.length)],l=2+Math.floor(this.rand()*2),h=Ee[c],u=(d,f,g)=>this.world.getBlock(d,f,g);for(let d=0;d<l&&this.animalCount()<bh;d++){const f={x:r+.5+d*.7,y:a+1.05,z:o+.5};di(u,ui(f,h.width,h.height))||this.spawn(c,f,{yaw:this.rand()*Math.PI*2})}}}function Et(i,t="",e=""){const n=document.createElement(i);return t&&(n.className=t),e&&(n.textContent=e),n}const ra="craft.portfolio.v1",Eh=24;class Ex{photos=[];dropped=0;constructor(){try{const t=zf(JSON.parse(localStorage.getItem(ra)??"[]"),Eh);this.photos=t.photos,this.dropped=t.dropped}catch{this.photos=[],this.dropped=1}}add(t){const e={id:`${Date.now()}-${Math.random().toString(36).slice(2,7)}`,dataUrl:t,caption:"",takenAt:new Date().toISOString()};return this.photos.unshift(e),this.photos=this.photos.slice(0,Eh),this.persist(),e}remove(t){this.photos=this.photos.filter(e=>e.id!==t),this.persist()}setCaption(t,e){const n=this.photos.find(s=>s.id===t);n&&(n.caption=e),this.persist()}persist(){try{localStorage.setItem(ra,JSON.stringify(this.photos))}catch{this.photos.pop();try{localStorage.setItem(ra,JSON.stringify(this.photos))}catch{}}}}class Tx{constructor(t,e,n){this.portfolio=e,this.onClose=n,this.root.hidden=!0,this.root.appendChild(this.panel),t.appendChild(this.root)}root=Et("div","screen portfolio-screen");panel=Et("div","panel portfolio-panel");get open(){return!this.root.hidden}show(){this.render(),this.root.hidden=!1}hide(){this.root.hidden=!0}render(){const t=Et("div","panel-header");t.append(Et("h2","",`Portfolio (${this.portfolio.photos.length})`));const e=Et("button","close-button","✕");e.setAttribute("aria-label","Close portfolio"),e.addEventListener("click",()=>this.onClose()),t.append(e);const n=Et("div","photo-grid");this.portfolio.photos.length===0&&n.append(Et("p","hint","No photos yet. Press C (or 📷) to take one."));for(const s of this.portfolio.photos){const r=Et("figure","photo-card"),o=Et("img");o.src=s.dataUrl,o.alt=s.caption||"World photo";const a=Et("input","mc-input photo-caption");a.value=s.caption,a.placeholder="Add a caption…",a.setAttribute("aria-label","Photo caption"),a.addEventListener("keydown",u=>u.stopPropagation()),a.addEventListener("change",()=>this.portfolio.setCaption(s.id,a.value));const c=Et("div","photo-actions"),l=Et("a","mc-button small","Save");l.href=s.dataUrl,l.download=`photo-${s.id}.jpg`;const h=Et("button","mc-button small","Delete");h.addEventListener("click",()=>{this.portfolio.remove(s.id),this.render()}),c.append(l,h),r.append(o,a,c),n.appendChild(r)}this.panel.replaceChildren(t,n)}}class wx{constructor(t,e,n){this.onClose=e,this.onRename=n,this.root.hidden=!0,this.root.appendChild(this.panel),t.appendChild(this.root)}root=Et("div","screen npc-screen");panel=Et("div","panel npc-panel");get open(){return!this.root.hidden}show(t,e){const n=Et("h2","",t.name??"NPC"),s=Et("p","npc-text",t.dialogue??""),r=[n,s];if(e){const a=Et("input","mc-input");a.value=t.name??"",a.setAttribute("aria-label","NPC name");const c=Et("textarea","mc-input npc-edit");c.value=t.dialogue??"",c.setAttribute("aria-label","NPC dialogue");for(const u of[a,c])u.addEventListener("keydown",d=>d.stopPropagation());const l=Et("button","mc-button primary","Save");l.addEventListener("click",()=>{t.name=a.value.trim()||"NPC",t.dialogue=c.value,this.onRename(t),this.onClose()});const h=(u,d)=>{const f=Et("label","field");return f.append(Et("span","",u),d),f};r.push(h("Name",a),h("Dialogue",c),l)}const o=Et("button","mc-button","Close");o.addEventListener("click",()=>this.onClose()),r.push(o),this.panel.replaceChildren(...r),this.root.hidden=!1}hide(){this.root.hidden=!0}}class Ax{constructor(t,e,n){this.onClose=e,this.onSave=n,this.root.hidden=!0,this.root.appendChild(this.panel),t.appendChild(this.root)}root=Et("div","screen chalkboard-screen");panel=Et("div","panel npc-panel");get open(){return!this.root.hidden}show(t,e){const s=[Et("h2","",{slate:"Slate",poster:"Poster",board:"Board"}[t.size])];if(bf(t,e)){const o=Et("textarea","mc-input npc-edit chalk-edit");o.value=t.text,o.maxLength=wn[t.size].maxChars,o.setAttribute("aria-label","Chalkboard text"),o.addEventListener("keydown",l=>l.stopPropagation()),s.push(o);let a=null;if(e==="creative"){a=Et("input"),a.type="checkbox",a.checked=t.locked,a.setAttribute("aria-label","Lock chalkboard");const l=Et("label","field checkbox");l.append(a,Et("span","","Locked (only world builders can edit)")),s.push(l)}const c=Et("button","mc-button primary","Save");c.addEventListener("click",()=>{t.text=Sf(t.size,o.value),a&&(t.locked=a.checked),this.onSave(t),this.onClose()}),s.push(c)}else s.push(Et("p","npc-text",t.text),Et("p","hint","This chalkboard is locked."));const r=Et("button","mc-button","Close");r.addEventListener("click",()=>this.onClose()),s.push(r),this.panel.replaceChildren(...s),this.root.hidden=!1}hide(){this.root.hidden=!0}}class Cx{constructor(t,e){this.onClose=e,this.root.hidden=!0,this.root.appendChild(this.panel),t.appendChild(this.root)}root=Et("div","screen book-screen");panel=Et("div","panel book-panel");stack=null;pages=[""];page=0;signing=!1;get open(){return!this.root.hidden}show(t){this.stack=t,this.pages=[...t.book?.pages??[""]],this.page=0,this.signing=!1,this.render(),this.root.hidden=!1}hide(){this.stack&&Xs(this.stack)&&tc(this.stack,this.pages),this.stack=null,this.root.hidden=!0}render(){const t=this.stack,e=Xs(t),n=[];if(e?n.push(Et("h2","","Book and Quill")):n.push(Et("h2","book-title",t.book?.title??"Book"),Et("p","book-author",`by ${t.book?.author??"?"}`)),e&&this.signing){const l=Et("input","mc-input");l.maxLength=Yh,l.setAttribute("aria-label","Book title"),l.addEventListener("keydown",d=>d.stopPropagation());const h=Et("button","mc-button primary","Sign and Close");h.addEventListener("click",()=>{tc(t,this.pages),Tf(t,l.value,"Player")&&this.onClose()});const u=Et("button","mc-button","Cancel");u.addEventListener("click",()=>{this.signing=!1,this.render()}),n.push(Et("p","hint","Signing makes the book read-only."),l,h,u),this.panel.replaceChildren(...n);return}if(e){const l=Et("textarea","mc-input book-page");l.value=this.pages[this.page],l.maxLength=Xh,l.setAttribute("aria-label","Book page"),l.addEventListener("keydown",h=>h.stopPropagation()),l.addEventListener("input",()=>this.pages[this.page]=l.value),n.push(l)}else n.push(Et("p","book-text",this.pages[this.page]));const s=Et("div","book-nav"),r=Et("button","mc-button","◀");r.setAttribute("aria-label","Previous page"),r.disabled=this.page===0,r.addEventListener("click",()=>{this.page--,this.render()});const o=Et("span","book-page-number",`Page ${this.page+1} of ${this.pages.length}`),a=Et("button","mc-button","▶");if(a.setAttribute("aria-label","Next page"),a.disabled=e?this.pages.length>=Wh&&this.page===this.pages.length-1:this.page>=this.pages.length-1,a.addEventListener("click",()=>{this.page===this.pages.length-1&&this.pages.push(""),this.page++,this.render()}),s.append(r,o,a),n.push(s),e){const l=Et("button","mc-button","Sign");l.addEventListener("click",()=>{this.signing=!0,this.render()}),n.push(l)}const c=Et("button","mc-button primary","Done");c.addEventListener("click",()=>this.onClose()),n.push(c),this.panel.replaceChildren(...n)}}const Th=128;function Rx(i){const{w:t,h:e}=wn[i.size],n=document.createElement("canvas");n.width=t*Th,n.height=e*Th;const s=n.getContext("2d");s.fillStyle="#8a6236",s.fillRect(0,0,n.width,n.height),s.fillStyle="#24382c",s.fillRect(8,8,n.width-16,n.height-16),s.fillStyle="rgba(255,255,255,0.04)";for(let l=0;l<40*t*e;l++)s.fillRect(l*37%n.width,l*61%n.height,2,2);s.fillStyle="#f2f2ea";const r=18;s.font=`${r}px monospace`,s.textBaseline="top";const o=n.width-32,a=[];for(const l of i.text.split(`
`)){let h="";for(const u of l.split(" ")){const d=h?`${h} ${u}`:u;s.measureText(d).width>o&&h?(a.push(h),h=u):h=d}a.push(h)}const c=Math.floor((n.height-28)/(r+4));return a.slice(0,c).forEach((l,h)=>s.fillText(l,16,14+h*(r+4))),i.locked&&(s.fillStyle="#e9c24a",s.fillRect(n.width-24,n.height-24,12,10),s.strokeStyle="#e9c24a",s.lineWidth=2,s.beginPath(),s.arc(n.width-18,n.height-24,4,Math.PI,0),s.stroke()),n}class Px{constructor(t){this.scene=t}meshes=new Map;update(t){this.remove(t);const{w:e,h:n}=wn[t.size],s=new fo(Rx(t));s.colorSpace=be,s.anisotropy=4;const r=new Re(new Oi(e,n),new _n({map:s,side:t.standing?Ze:Wn})),[o,a]=ao[t.facing],[c,l]=Vh(t.facing),h=t.standing?0:.47;r.position.set(t.x+.5+c*(e-1)/2-o*h,t.y+n/2,t.z+.5+l*(e-1)/2-a*h),r.rotation.y=Math.atan2(o,a),r.userData.chalkboard=si(t.x,t.y,t.z),this.scene.add(r),this.meshes.set(si(t.x,t.y,t.z),r)}remove(t){const e=si(t.x,t.y,t.z),n=this.meshes.get(e);if(!n)return;this.scene.remove(n),n.geometry.dispose();const s=n.material;s.map?.dispose(),s.dispose(),this.meshes.delete(e)}static cells(t){return Ws(t)}}function rs(i,t,e){const n=new Re(new $n(...i),new _n({color:e}));return n.position.set(...t),n}class Lx{group=new hs;from=new N;to=new N;fromYaw=0;toYaw=0;t=1;constructor(t,e){this.group.add(rs([.56,.42,.42],[0,.42,0],"#7d8a92"),rs([.5,.36,.4],[0,.82,0],"#a7b4bb"),rs([.42,.12,.04],[0,.84,-.21],"#2dd4c4"),rs([.14,.16,.3],[-.16,.12,0],"#4b555b"),rs([.14,.16,.3],[.16,.12,0],"#4b555b"),rs([.04,.16,.04],[0,1.08,0],"#2dd4c4")),this.group.userData.agent=!0,t.add(this.group),this.snap(e)}yawOf(t){const[e,n]=ao[t.facing];return Math.atan2(-e,-n)}snap(t){this.to.set(t.x+.5,t.y,t.z+.5),this.from.copy(this.to),this.toYaw=this.fromYaw=this.yawOf(t),this.t=1,this.apply()}moveTo(t){this.from.copy(this.group.position),this.fromYaw=this.group.rotation.y,this.to.set(t.x+.5,t.y,t.z+.5);let e=this.yawOf(t);for(;e-this.fromYaw>Math.PI;)e-=Math.PI*2;for(;e-this.fromYaw<-Math.PI;)e+=Math.PI*2;this.toYaw=e,this.t=0}update(t,e,n){this.t=Math.min(1,this.t+t/Math.max(.05,e*.8)),this.apply(),this.group.position.y+=.05+Math.sin(n*3)*.03}apply(){const t=this.t*this.t*(3-2*this.t);this.group.position.lerpVectors(this.from,this.to,t),this.group.rotation.y=this.fromYaw+(this.toYaw-this.fromYaw)*t}}function Jt(i,t="",e=""){const n=document.createElement(i);return t&&(n.className=t),e&&(n.textContent=e),n}const Dx=[{id:"move",label:"move",kind:"command",make:()=>({type:"command",cmd:{op:"move",dir:"forward"}})},{id:"turn",label:"turn",kind:"command",make:()=>({type:"command",cmd:{op:"turn",side:"left"}})},{id:"place",label:"place",kind:"command",make:()=>({type:"command",cmd:{op:"place",dir:"forward"}})},{id:"destroy",label:"destroy",kind:"command",make:()=>({type:"command",cmd:{op:"destroy",dir:"forward"}})},{id:"attack",label:"attack",kind:"command",make:()=>({type:"command",cmd:{op:"attack",dir:"forward"}})},{id:"select",label:"select slot",kind:"command",make:()=>({type:"command",cmd:{op:"select",slot:0}})},{id:"drop",label:"give me slot",kind:"command",make:()=>({type:"command",cmd:{op:"drop",slot:0}})},{id:"repeat",label:"repeat",kind:"loop",make:()=>({type:"repeat",times:4,body:[]})},{id:"until",label:"repeat until detect",kind:"loop",make:()=>({type:"until",dir:"forward",body:[]})},{id:"if",label:"if detect",kind:"logic",make:()=>({type:"if",dir:"forward",then:[],else:[]})}];class Ix{constructor(t,e,n){this.host=e,this.onClose=n,this.root.hidden=!0,this.root.appendChild(this.panel),t.appendChild(this.root)}root=Jt("div","screen code-screen");panel=Jt("div","panel code-panel");program={name:"My program",trigger:{type:"run"},blocks:[]};target=this.program.blocks;targetDepth=0;dragging=null;status="";get open(){return!this.root.hidden}show(){const t=this.host.programs[this.host.programs.length-1];t&&(this.program=t),this.target=this.program.blocks,this.targetDepth=0,this.status="",this.render(),this.root.hidden=!1}hide(){this.root.hidden=!0}commit(){const t=jr(this.program);return t.length>0?(this.status=t.join("; "),!1):(this.host.programs.includes(this.program)||this.host.programs.push(this.program),this.host.save(),!0)}fits(t,e){return e+ku(t)<=Zr?!0:(this.status=`Loops and ifs can be nested at most ${Zr} deep`,!1)}render(){const t=Jt("div","panel-header");t.append(Jt("h2","","Code Builder"));const e=Jt("button","close-button","✕");e.setAttribute("aria-label","Close Code Builder"),e.addEventListener("click",()=>this.onClose()),t.append(e);const n=Jt("div","cb-palette");n.setAttribute("aria-label","Blocks");for(const g of Dx){const _=Jt("button",`cb-palette-block cb-${g.kind}`,g.label);_.dataset.palette=g.id,_.draggable=!0,_.addEventListener("dragstart",m=>{this.dragging={block:g.make(),from:null},m.dataTransfer?.setData("text/plain",g.id)}),_.addEventListener("click",()=>{const m=g.make();this.fits(m,this.targetDepth)&&this.target.push(m),this.render()}),n.appendChild(_)}const s=Jt("div","cb-meta"),r=Jt("input","mc-input");r.value=this.program.name,r.setAttribute("aria-label","Program name"),r.addEventListener("keydown",g=>g.stopPropagation()),r.addEventListener("change",()=>this.program.name=r.value.trim()||"My program");const o=Jt("input","mc-input");o.placeholder="chat command (optional)",o.value=this.program.trigger.type==="chat"?this.program.trigger.command:"",o.setAttribute("aria-label","Chat command"),o.addEventListener("keydown",g=>g.stopPropagation()),o.addEventListener("change",()=>{const g=o.value.trim().toLowerCase().split(/\s+/)[0]??"";this.program.trigger=g?{type:"chat",command:g}:{type:"run"}}),s.append(r,o);const a=Jt("div","cb-workspace");a.append(this.zone(this.program.blocks,"on run / chat",0));const c=Jt("div","cb-actions"),l=Jt("button","mc-button primary","▶ Run");l.addEventListener("click",()=>{const g=jr(this.program);if(this.program.blocks.length===0&&g.push("Add some blocks first"),g.length>0){this.status=g.join("; "),this.render();return}if(!this.commit()){this.render();return}this.host.run(this.program),this.onClose()});const h=Jt("button","mc-button","■ Stop");h.disabled=!this.host.running(),h.addEventListener("click",()=>{this.host.stop(),this.render()});const u=Jt("button","mc-button","Give held stack to Agent");u.addEventListener("click",()=>{this.status=this.host.giveHeldToAgent(),this.render()});const d=Jt("button","mc-button","New");d.addEventListener("click",()=>{if(this.program.blocks.length>0&&!this.commit()){this.render();return}this.program={name:`Program ${this.host.programs.length+1}`,trigger:{type:"run"},blocks:[]},this.target=this.program.blocks,this.targetDepth=0,this.render()}),c.append(l,h,u,d);const f=Jt("p","cb-status",this.status);f.setAttribute("role","status"),this.panel.replaceChildren(t,s,n,a,c,f)}zone(t,e,n){const s=Jt("div",`cb-zone${t===this.target?" cb-target":""}`);return s.dataset.drop=e,s.addEventListener("click",r=>{r.target!==s&&!r.target.classList.contains("cb-empty")||(r.stopPropagation(),this.target=t,this.targetDepth=n,this.render())}),s.addEventListener("dragover",r=>r.preventDefault()),s.addEventListener("drop",r=>{r.preventDefault(),r.stopPropagation();const o=this.dragging;if(this.dragging=null,!(!o||Fu(o.block,t))){if(!this.fits(o.block,n)){this.render();return}o.from&&o.from.splice(o.from.indexOf(o.block),1),t.push(o.block),this.render()}}),t.length===0&&s.append(Jt("span","cb-empty",e)),t.forEach((r,o)=>s.append(this.blockView(r,t,o,n))),s}blockView(t,e,n,s){const r=Jt("div",`cb-block cb-${t.type==="command"?"command":t.type==="if"?"logic":"loop"}`);r.dataset.type=t.type==="command"?t.cmd.op:t.type,r.draggable=!0,r.addEventListener("dragstart",a=>{a.stopPropagation(),this.dragging={block:t,from:e},a.dataTransfer?.setData("text/plain",r.dataset.type)});const o=Jt("div","cb-row");if(t.type==="command")o.append(...this.commandFields(t.cmd));else if(t.type==="repeat"){const a=Jt("input","cb-number");a.type="number",a.min="0",a.max=String(Ys),a.value=String(t.times),a.setAttribute("aria-label","Repeat times"),a.addEventListener("keydown",c=>c.stopPropagation()),a.addEventListener("change",()=>t.times=Math.max(0,Math.min(Ys,Number(a.value)||0))),o.append(Jt("span","","repeat"),a,Jt("span","","times"))}else o.append(Jt("span","",t.type==="if"?"if Agent detects block":"repeat until Agent detects block"),this.dirSelect(t.dir,a=>t.dir=a));return o.append(...this.moveButtons(e,n)),r.append(o),(t.type==="repeat"||t.type==="until")&&r.append(this.zone(t.body,"do",s+1)),t.type==="if"&&r.append(this.zone(t.then,"then",s+1),Jt("span","cb-label","else"),this.zone(t.else,"else",s+1)),r}commandFields(t){const n=[Jt("span","",{move:"Agent move",turn:"Agent turn",place:"Agent place",destroy:"Agent destroy",attack:"Agent attack",select:"Agent select slot",drop:"Agent give me slot",detect:"Agent detect",inspect:"Agent inspect",collect:"Agent collect"}[t.op])];if("dir"in t&&n.push(this.dirSelect(t.dir,s=>t.dir=s)),t.op==="turn"){const s=Jt("select","cb-select");for(const r of["left","right"])s.append(new Option(r,r,!1,t.side===r));s.setAttribute("aria-label","Turn side"),s.addEventListener("change",()=>t.side=s.value),n.push(s)}if(t.op==="select"||t.op==="drop"){const s=Jt("input","cb-number");s.type="number",s.min="1",s.max=String(Di),s.value=String(t.slot+1),s.setAttribute("aria-label","Slot"),s.addEventListener("keydown",r=>r.stopPropagation()),s.addEventListener("change",()=>t.slot=Math.max(1,Math.min(Di,Number(s.value)||1))-1),n.push(s)}return n}dirSelect(t,e){const n=Jt("select","cb-select");for(const s of qh)n.append(new Option(s,s,!1,s===t));return n.setAttribute("aria-label","Direction"),n.addEventListener("change",()=>e(n.value)),n}moveButtons(t,e){const n=(r,o,a,c=!1)=>{const l=Jt("button","cb-mini",r);return l.setAttribute("aria-label",o),l.disabled=c,l.addEventListener("click",h=>{h.stopPropagation(),a(),this.render()}),l},s=(r,o)=>[t[r],t[o]]=[t[o],t[r]];return[n("▲","Move block up",()=>s(e,e-1),e===0),n("▼","Move block down",()=>s(e,e+1),e===t.length-1),n("✕","Delete block",()=>t.splice(e,1))]}}function ku(i){const t=i.type==="repeat"||i.type==="until"?[i.body]:i.type==="if"?[i.then,i.else]:[];return t.length===0?0:1+Math.max(0,...t.flat().map(ku))}function Fu(i,t){return(i.type==="repeat"||i.type==="until"?[i.body]:i.type==="if"?[i.then,i.else]:[]).some(n=>n===t||n.some(s=>Fu(s,t)))}const Ux=110;class Nx{constructor(t,e,n){this.canvas=t,this.world=e,this.renderer=new hx({canvas:t,antialias:!1,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.camera.rotation.order="YXZ";const s=new Tl(n.data,n.width,n.height,Ve);s.magFilter=ge,s.minFilter=ge,s.colorSpace=be,s.flipY=!1,s.needsUpdate=!0,this.uv=r=>n.uv(r),this.solidMaterial=new _n({map:s,vertexColors:!0,alphaTest:.5}),this.liquidMaterial=new _n({map:s,vertexColors:!0,transparent:!0,depthWrite:!1,side:Ze});for(const r of[this.solidMaterial,this.liquidMaterial])r.onBeforeCompile=o=>{o.uniforms.uDaylight=this.daylight,o.fragmentShader=`uniform float uDaylight;
${o.fragmentShader}`.replace("#include <color_fragment>",`#ifdef USE_COLOR
            float lightLevel = max(vColor.g * uDaylight, vColor.b);
            float dark = 1.0 - lightLevel;
            // Minecraft-like brightness curve, with a little ambient light so caves aren't pitch black.
            diffuseColor.rgb *= vColor.r * mix(0.05, 1.0, (1.0 - dark) / (dark * 3.0 + 1.0));
          #endif`)};this.fog=new El(8956671,20,100),this.scene.fog=this.fog,this.selection=new mx(new gx(new $n(1.004,1.004,1.004)),new Nu({color:0,transparent:!0,opacity:.6})),this.selection.visible=!1,this.scene.add(this.selection),this.crackTextures=Array.from({length:10},(r,o)=>Fx(o)),this.crack=new Re(new $n(1.006,1.006,1.006),new _n({transparent:!0,depthWrite:!1,map:this.crackTextures[0],fog:!1})),this.crack.visible=!1,this.scene.add(this.crack),this.sun=wh(16774848,60),this.moon=wh(14673663,40),this.scene.add(this.sun,this.moon),this.clouds=new Re(new Oi(1024,1024),new _n({map:kx(),transparent:!0,opacity:.85,depthWrite:!1,side:Ze})),this.clouds.rotation.x=-Math.PI/2,this.scene.add(this.clouds),e.onChunkChanged((r,o)=>{const a=`${r},${o}`;this.chunks.has(a)&&this.dirty.add(a)})}renderer;scene=new ux;camera=new rn(70,1,.05,1e3);renderDistance=6;solidMaterial;liquidMaterial;chunks=new Map;dirty=new Set;daylight={value:1};uv;selection;crack;crackTextures;sun;moon;clouds;fog;skyColor=new Ht;cloudOffset=0;resize(t,e){this.renderer.setSize(t,e,!1),this.camera.aspect=t/Math.max(1,e),this.camera.updateProjectionMatrix()}updateChunks(t=8){const e=sn(this.camera.position.x),n=sn(this.camera.position.z),s=this.renderDistance,r=performance.now();for(const c of this.dirty){this.dirty.delete(c);const[l,h]=c.split(",").map(Number);this.buildChunk(l,h)}const o=[];for(let c=-s;c<=s;c++)for(let l=-s;l<=s;l++){const h=l*l+c*c;h>s*s+1||this.chunks.has(`${e+l},${n+c}`)||o.push([e+l,n+c,h])}o.sort((c,l)=>c[2]-l[2]);for(const[c,l]of o){if(performance.now()-r>t)break;this.buildChunk(c,l)}const a=(s+2)*(s+2)+1;for(const[c,l]of this.chunks){const[h,u]=c.split(",").map(Number);(h-e)**2+(u-n)**2>a&&(this.disposeEntry(l),this.chunks.delete(c))}if(this.world.loadedChunkCount()>(2*s+7)**2)for(let c=-(s+8);c<=s+8;c++)for(let l=-(s+8);l<=s+8;l++)Math.max(Math.abs(l),Math.abs(c))>s+3&&this.world.unloadChunk(e+l,n+c)}meshedChunkCount(){return this.chunks.size}isAreaReady(t=2){const e=sn(this.camera.position.x),n=sn(this.camera.position.z);for(let s=-t;s<=t;s++)for(let r=-t;r<=t;r++)if(!this.chunks.has(`${e+r},${n+s}`))return!1;return!0}setSelection(t,e=0){if(this.selection.visible=t!==null,this.crack.visible=t!==null&&e>0,!!t&&(this.selection.position.set(t.x+.5,t.y+.5,t.z+.5),this.crack.position.copy(this.selection.position),e>0)){const n=Math.min(9,Math.floor(e*10));this.crack.material.map=this.crackTextures[n]}}render(t,e,n){this.skyColor.setRGB(t.sky[0],t.sky[1],t.sky[2],be);const s=this.renderDistance*ht;e?(this.fog.color.setRGB(.05,.15,.45,be),this.fog.near=1,this.fog.far=24,this.scene.background=this.fog.color):(this.fog.color.copy(this.skyColor),this.fog.near=s*.55,this.fog.far=s*.95,this.scene.background=this.skyColor),this.camera.far=s*3,this.camera.updateProjectionMatrix(),this.daylight.value=t.light;const r=this.camera.position,o=400,a=Math.cos(t.sunAngle),c=Math.sin(t.sunAngle);this.sun.position.set(r.x+a*o,r.y+c*o,r.z),this.moon.position.set(r.x-a*o,r.y-c*o,r.z),this.sun.lookAt(r),this.moon.lookAt(r),this.cloudOffset=(this.cloudOffset+n*1.5)%1024,this.clouds.position.set(Math.round(r.x/64)*64+this.cloudOffset-512,Ux,Math.round(r.z/64)*64),this.clouds.material.color.setScalar(Math.max(.3,t.light)),this.renderer.render(this.scene,this.camera)}buildChunk(t,e){const n=`${t},${e}`,s=this.chunks.get(n);s&&this.disposeEntry(s);const r=od(this.world,t,e,this.uv),o={solid:this.toMesh(r.solid,this.solidMaterial,t,e),liquid:this.toMesh(r.liquid,this.liquidMaterial,t,e)};o.liquid&&(o.liquid.renderOrder=1),this.chunks.set(n,o)}toMesh(t,e,n,s){if(t.indices.length===0)return null;const r=new vn;r.setAttribute("position",new Ie(t.positions,3)),r.setAttribute("normal",new Ie(t.normals,3)),r.setAttribute("uv",new Ie(t.uvs,2)),r.setAttribute("color",new Ie(t.colors,3)),r.setIndex(new Ie(t.indices,1)),r.computeBoundingSphere();const o=new Re(r,e);return o.position.set(n*ht,0,s*ht),o.matrixAutoUpdate=!1,o.updateMatrix(),this.scene.add(o),o}disposeEntry(t){for(const e of[t.solid,t.liquid])e&&(this.scene.remove(e),e.geometry.dispose())}}function wh(i,t){return new Re(new Oi(t,t),new _n({color:i,fog:!1,side:Ze}))}function kx(){const t=new Uint8Array(16384);let e=1337;const n=()=>(e=e*1103515245+12345&2147483647)/2147483647,s=new Float32Array(4096).map(()=>n());for(let o=0;o<64;o++)for(let a=0;a<64;a++){let c=0;for(let h=-2;h<=2;h++)for(let u=-2;u<=2;u++)c+=s[(o+h+64)%64*64+(a+u+64)%64];const l=(o*64+a)*4;t[l]=t[l+1]=t[l+2]=255,t[l+3]=c/25>.56?230:0}const r=new Tl(t,64,64,Ve);return r.magFilter=ge,r.minFilter=ge,r.wrapS=r.wrapT=to,r.repeat.set(4,4),r.needsUpdate=!0,r}function Fx(i){const e=new Uint8Array(1024);let n=99;const s=()=>(n=n*1103515245+12345&2147483647)/2147483647,r=2+i*2;for(let a=0;a<r;a++){let c=8,l=8;const h=3+Math.floor(i*.8),u=s()*Math.PI*2;for(let d=0;d<h&&(c+=Math.round(Math.cos(u)+(s()-.5)),l+=Math.round(Math.sin(u)+(s()-.5)),!(c<0||l<0||c>=16||l>=16));d++){const f=(l*16+c)*4;e[f+3]=200}}const o=new Tl(e,16,16,Ve);return o.magFilter=ge,o.minFilter=ge,o.needsUpdate=!0,o}const wl="craft.save.v1",Ah=5,os=20,Ch=Math.PI/2-.01,Ox=.25,oa=Kt("crafting_table"),Or=Kt("furnace"),aa=(i,t,e)=>`${i},${t},${e}`,Rh=.3,Ph=300;class Bx{constructor(t,e,n,s){this.events=s,this.root=document.createElement("div"),this.root.className="game",t.appendChild(this.root);const r=document.createElement("canvas");r.className="game-canvas",this.root.appendChild(r);const o=n.save;this.name=o?.name??n.name,this.world=new Od(o?.seed??n.seed),o&&this.world.importEdits(Bf(o.edits)),this.mode=o?.mode??n.mode,this.timeOfDay=o?.timeOfDay??.05,this.renderer=new Nx(r,this.world,e),this.mobs=new bx(this.world,this.renderer.scene);for(const h of Ff(o?.npcs))this.mobs.spawn("npc",h,h);this.hunger=Of(o?.hunger)??Jl();const a=kf(o?.furnaces);for(const h of a.furnaces)this.furnaces.set(aa(h.x,h.y,h.z),h.state);this.mobs.spawning=o?.gamerules?.doMobSpawning??n.spawnAnimals??!0,this.daylightCycle=o?.gamerules?.doDaylightCycle??!0,this.spawn=this.findSpawn(),this.body=md(o?.player.position??this.spawn),this.lastPos={x:this.body.position.x,z:this.body.position.z},this.body.yaw=o?.player.yaw??0,this.body.pitch=o?.player.pitch??0,this.body.flying=o?.player.flying??!1,this.inventory=o?qr.fromJSON(o.inventory):this.starterInventory(),this.keyboard=new ip(r,{mouseButtons:!n.touch}),this.touch=n.touch?new sp(r,this.root):null,this.hud=new rp(this.root,e,{onSelectSlot:h=>this.inventory.select(h),onOpenInventory:()=>this.toggleInventory(),onPause:()=>this.pause(),onChat:()=>this.openChat(),onCamera:()=>this.takePhoto(),onPortfolio:()=>this.togglePortfolio(),onCodeBuilder:()=>this.openCodeBuilder()},n.touch),this.inventoryScreen=new op(this.root,e,()=>this.toggleInventory()),this.chat=new ap(this.root,h=>this.runChat(h),()=>this.resumeInput()),this.portfolioScreen=new Tx(this.root,this.portfolio,()=>this.togglePortfolio()),this.npcDialog=new wx(this.root,()=>this.closeNpcDialog(),h=>this.mobs.refresh(h)),this.chalkDialog=new Ax(this.root,()=>this.closeDialog(this.chalkDialog),h=>this.chalkViews.update(h)),this.bookScreen=new Cx(this.root,()=>this.closeDialog(this.bookScreen)),this.chalkViews=new Px(this.renderer.scene);const c=Nf(o?.chalkboards);for(const h of c.boards)this.addChalkboard(h);this.agent=Uf(o?.agent)??this.agentNearPlayer();const l=Df(o?.programs);this.programs=l.programs,this.loadErrors=l.errors,c.dropped+a.dropped>0&&this.loadErrors.push(`${c.dropped+a.dropped} damaged chalkboard/furnace entries`),this.agentView=new Lx(this.renderer.scene,this.agent),this.codeBuilder=new Ix(this.root,{programs:this.programs,run:h=>this.runProgram(h),stop:()=>this.stopProgram(),running:()=>this.programRunning,giveHeldToAgent:()=>this.giveHeldToAgent(),save:()=>this.save()},()=>this.closeDialog(this.codeBuilder)),r.addEventListener("click",()=>{!this.touch&&!this.paused&&!this.dead&&this.keyboard.requestPointerLock()}),document.addEventListener("pointerlockchange",()=>{this.keyboard.pointerLocked?this.hadPointerLock=!0:this.hadPointerLock&&this.running&&!this.screenOpen()&&!this.dead&&this.pause()}),window.addEventListener("keydown",h=>this.onKey(h)),window.addEventListener("resize",()=>this.resize()),window.addEventListener("pagehide",()=>this.save()),this.resize(),this.portfolio.dropped>0&&this.loadErrors.push(`${this.portfolio.dropped} damaged portfolio photos`);for(const h of this.loadErrors)this.hud.message(`Dropped damaged saved data: ${h}`);this.hud.message(this.touch?"Move with the left stick, drag to look, tap to place, hold to break.":"Click to play. WASD move, mouse look, left click break, right click place, E inventory, / commands.")}world;body;renderer;hud;mobs;portfolio=new Ex;inventory;mode;timeOfDay;health=os;hunger;furnaces=new Map;openFurnace=null;eatTimer=0;lastPos={x:0,z:0};paused=!1;dead=!1;fps=0;name;keyboard;touch;inventoryScreen;chat;portfolioScreen;npcDialog;chalkDialog;bookScreen;chalkboards=new Map;chalkCells=new Map;chalkViews;agent;programs;agentView;codeBuilder;runner=null;runnerName="";stepTimer=0;runnerStarted=0;loadErrors=[];mobTarget=null;attackCooldown=0;clock=0;daylightCycle=!0;spawn;target=null;breakProgress=0;breakKey="";creativeCooldown=0;placeCooldown=0;fallStart=null;lastTime=0;frameCount=0;fpsTimer=0;autosaveTimer=0;hadPointerLock=!1;running=!1;root;start(){this.running=!0,this.lastTime=performance.now();const t=e=>{if(!this.running)return;const n=Math.min(.1,(e-this.lastTime)/1e3);this.lastTime=e,this.tick(n),requestAnimationFrame(t)};requestAnimationFrame(t)}stop(){this.running=!1,this.save(),this.keyboard.dispose(),this.root.remove(),this.renderer.renderer.dispose()}pause(){this.paused||(this.paused=!0,this.keyboard.reset(),document.pointerLockElement&&document.exitPointerLock(),this.save(),this.events.onPause())}resume(){this.paused=!1,this.lastTime=performance.now(),this.touch||this.keyboard.requestPointerLock()}setMode(t){this.mode=t,t==="survival"&&(this.body.flying=!1),this.health=os,this.hud.message(`Game mode set to ${t==="creative"?"Creative":"Survival"}`)}respawn(){this.dead=!1,this.health=os,this.hunger=Jl(),this.body.position={...this.spawn},this.body.velocity={x:0,y:0,z:0},this.fallStart=null,this.lastTime=performance.now(),this.touch||this.keyboard.requestPointerLock()}save(){try{localStorage.setItem(wl,Rd({name:this.name,seed:this.world.seed,mode:this.mode,timeOfDay:this.timeOfDay,player:{position:{...this.body.position},yaw:this.body.yaw,pitch:this.body.pitch,flying:this.body.flying},inventory:this.inventory.toJSON(),edits:this.world.exportEdits(),npcs:this.mobs.exportNpcs(),hunger:{...this.hunger},chalkboards:[...this.chalkboards.values()].map(t=>({...t})),agent:{...this.agent,slots:this.agent.slots.map(t=>t?{...t}:null)},programs:this.programs,furnaces:[...this.furnaces].map(([t,e])=>{const[n,s,r]=t.split(",").map(Number);return{x:n,y:s,z:r,state:e}}),gamerules:{doMobSpawning:this.mobs.spawning,doDaylightCycle:this.daylightCycle}}))}catch{}}get targetBlock(){return this.target}get targetMob(){return this.mobTarget}screenOpen(){return this.inventoryScreen.open||this.chat.open||this.portfolioScreen.open||this.npcDialog.open||this.chalkDialog.open||this.bookScreen.open||this.codeBuilder.open}tick(t){this.frameCount++,this.fpsTimer+=t,this.fpsTimer>=1&&(this.fps=Math.round(this.frameCount/this.fpsTimer),this.frameCount=0,this.fpsTimer=0),this.clock+=t;const e=!this.paused&&!this.dead&&!this.screenOpen(),n=[this.keyboard.poll()];this.touch&&n.push(this.touch.poll());const s=Qf(n);if(e){this.body.yaw+=s.lookYaw,this.body.pitch=Math.max(-Ch,Math.min(Ch,this.body.pitch+s.lookPitch)),s.hotbarSlot!==null&&this.inventory.select(s.hotbarSlot),s.hotbarScroll!==0&&this.inventory.scroll(s.hotbarScroll),s.toggleFly&&this.mode==="creative"&&(this.body.flying=!this.body.flying);const a=this.body.onGround;xd((h,u,d)=>this.world.getBlock(h,u,d),this.body,{forward:s.forward,strafe:s.strafe,jump:s.jump,descend:s.descend,sprint:s.sprint,autoJump:this.touch!==null},t),this.updateFall(a),this.mode==="survival"&&this.updateHunger(s.sprint,a,t),this.body.position.y<-20&&this.hurt(os),this.daylightCycle&&(this.timeOfDay=(this.timeOfDay+t/Ld)%1);const c=vo(this.timeOfDay).light,l=this.mode==="survival"?this.body.position:null;this.mobs.update(t,this.body.position,c,this.clock,l,(c-.2)/.8),l&&this.takeMobHits(t),this.interact(s.breaking,s.place,s.using,s.pick,t)}else this.target=null,this.mobTarget=null,this.breakProgress=0,this.eatTimer=0;if(this.lastPos={x:this.body.position.x,z:this.body.position.z},this.paused||this.stepAgent(t),this.agentView.update(t,Rh,this.clock),!this.paused){for(const a of this.furnaces.values())ff(a,t);this.inventoryScreen.refresh()}const r=this.renderer.camera;r.position.set(this.body.position.x,this.body.position.y+ca,this.body.position.z),r.rotation.set(this.body.pitch,this.body.yaw,0),this.renderer.updateChunks(this.renderer.isAreaReady(1)?6:30);const o=Md((a,c,l)=>this.world.getBlock(a,c,l),this.body)==="water";this.hud.setUnderwater(o),this.hud.update(this.inventory,this.mode,this.health,this.hunger.food,t),this.renderer.setSelection(this.target,this.breakProgress),this.renderer.render(vo(this.timeOfDay),o,t),this.hud.setDebug(this.debugText()),this.autosaveTimer+=t,this.autosaveTimer>30&&(this.autosaveTimer=0,this.save())}interact(t,e,n,s,r){const o={x:this.body.position.x,y:this.body.position.y+ca,z:this.body.position.z},a=zl(this.body.yaw,this.body.pitch),c=m=>m!==Ue&&Me[m].shape!=="liquid";this.target=Sd((m,p,b)=>this.world.getBlock(m,p,b),o,a,Ah,c),this.creativeCooldown=Math.max(0,this.creativeCooldown-r),this.placeCooldown=Math.max(0,this.placeCooldown-r),this.attackCooldown=Math.max(0,this.attackCooldown-r);const l=this.mobs.raycast(o,a,Ah);this.mobTarget=l&&(!this.target||l.distance<this.target.distance)?l.mob:null;const h=this.inventory.selectedStack();if(e&&this.placeCooldown===0&&this.target&&!this.mobTarget&&rr(this.target.id)){const m=this.chalkboardAt(this.target.x,this.target.y,this.target.z);if(m){this.suspendInput(),this.chalkDialog.show(m,this.mode);return}}if(e&&h&&(Xs(h)||Ef(h))&&!(this.target&&(this.target.id===oa||this.target.id===Or))){this.suspendInput(),this.bookScreen.show(h);return}const u=this.target!==null&&!this.mobTarget&&(this.target.id===oa||this.target.id===Or),d=this.mobTarget?.kind==="npc";if(n&&!(e&&(u||d))&&this.mode==="survival"&&xf(this.hunger,h?.id)){this.eatTimer+=r,this.breakProgress=0,this.eatTimer>=mf&&(yf(this.hunger,h.id),this.inventory.takeSelected(),this.eatTimer=0);return}if(this.eatTimer=0,this.mobTarget){this.target=null,this.breakProgress=0;const m=this.mobTarget;if(t&&this.attackCooldown===0){this.attackCooldown=.4;const p=Ui(this.inventory.selectedStack()?.id),b=Math.max(this.mode==="creative"?4:2,p?.attack??0),S=this.mobs.attack(m,b,this.body.yaw);if(this.mode==="survival"&&Ai(this.hunger,bi.attack),p&&this.mode==="survival"&&this.wearTool(p.kind==="sword"?1:2),S!==void 0){this.hud.message(`${Ee[m.kind].displayName} was defeated`),S!==null&&this.mode==="survival"&&this.inventory.add(S,Ee[m.kind].drop[1]);const y=Ee[m.kind].extraDrop;y&&this.mode==="survival"&&this.inventory.add(Vn(y[0]),y[1])}}e&&m.kind==="npc"&&this.openNpcDialog(m);return}const f=this.target,g=Ui(this.inventory.selectedStack()?.id),_=!(this.mode==="creative"&&g?.kind==="sword");if(t&&_&&f&&ul(this.world,this.mode,f.x,f.y,f.z)){const m=`${f.x},${f.y},${f.z}`;m!==this.breakKey&&(this.breakKey=m,this.breakProgress=0);const p=wd(this.mode,f.id,g);if(p===0)this.creativeCooldown===0&&(this.breakAt(f),this.creativeCooldown=Ox),this.breakProgress=0;else if(this.breakProgress+=r/p,this.breakProgress>=1){const b=this.inventory.selectedStack();this.breakAt(f),b&&g&&!this.inventory.selectedStack()&&this.hud.message(`${pn(b.id)} broke`),this.breakProgress=0,this.breakKey=""}}else this.breakProgress=0,this.breakKey="",t||(this.creativeCooldown=0);if(e&&f&&this.placeCooldown===0&&f.id===oa){this.openInventory("crafting_table");return}if(e&&f&&this.placeCooldown===0&&f.id===Or){const m=aa(f.x,f.y,f.z);this.furnaces.has(m)||this.furnaces.set(m,df()),this.openFurnace=m,this.openInventory("furnace");return}if(e&&f&&this.placeCooldown===0&&h&&rr(h.id)){this.placeChalkboard(f,h.id)&&(this.placeCooldown=.15);return}if(e&&f&&this.placeCooldown===0){const m=Me[f.id].needsSupport===!0,p=m?f.x:f.x+f.normal.x,b=m?f.y:f.y+f.normal.y,S=m?f.z:f.z+f.normal.z;Cd(this.world,this.inventory,this.mode,p,b,S,this.body.position)&&(this.placeCooldown=.15)}s&&f&&this.mode==="creative"&&Xe(f.id).creative&&this.inventory.pick(f.id)}placeChalkboard(t,e){const n=rr(e),s=t.normal.y===1;if(!s&&t.normal.y!==0)return!1;const r=s?Ql(this.body.yaw):[[0,1],[-1,0],[0,-1],[1,0]].findIndex(([c,l])=>c===t.normal.x&&l===t.normal.z),o={x:t.x+t.normal.x,y:t.y+t.normal.y,z:t.z+t.normal.z,size:n,facing:r,standing:s,text:"",locked:!1};if(!Mf((c,l,h)=>this.world.getBlock(c,l,h),o))return!1;for(const c of Ws(o))this.world.setBlock(c.x,c.y,c.z,e);return this.addChalkboard(o),this.mode==="survival"&&this.inventory.takeSelected(),!0}addChalkboard(t){const e=si(t.x,t.y,t.z);this.chalkboards.set(e,t);for(const n of Ws(t))this.chalkCells.set(si(n.x,n.y,n.z),e);this.chalkViews.update(t)}chalkboardAt(t,e,n){const s=this.chalkCells.get(si(t,e,n));return s?this.chalkboards.get(s)??null:null}agentNearPlayer(){const t=this.body.position,e=Ql(this.body.yaw+Math.PI);return wf(t.x-Math.cos(this.body.yaw),Math.floor(t.y),t.z+Math.sin(this.body.yaw),e)}teleportAgent(){const t=this.agentNearPlayer();Object.assign(this.agent,{x:t.x,y:t.y,z:t.z,facing:t.facing}),this.agentView.snap(this.agent)}openCodeBuilder(){this.screenOpen()||(this.suspendInput(),this.codeBuilder.show())}giveHeldToAgent(){const t=this.inventory.selectedStack();if(!t)return"Select a stack in your hotbar first";const e=this.mode==="creative"?He(t.id):t.count,n=Cf(this.agent,t.id,e),s=e-n;return this.mode==="survival"&&(t.count=n,n===0&&(this.inventory.slots[this.inventory.selected]=null)),`Gave the Agent ${s} ${pn(t.id)}`}runProgram(t){this.runner?.stop(),this.runner=null;const e=If(t,void 0,n=>ec(this.world,this.agent,{op:"detect",dir:n}).value===!0);return"error"in e?(this.hud.message(`Can't run "${String(t?.name??"program")}": ${e.error}`),!1):(this.runner=e.runner,this.runnerName=t.name,this.stepTimer=0,this.runnerStarted=this.clock,this.hud.message(`Running "${t.name}"`),!0)}stopProgram(){this.runner&&(this.runner.stop(),this.runner=null,this.hud.message(`Stopped "${this.runnerName}"`))}get programRunning(){return this.runner!==null}stepAgent(t){const e=this.runner;if(!e)return;if(this.clock-this.runnerStarted>Ph){this.runner=null,this.hud.message(`"${this.runnerName}" stopped: it ran for more than ${Ph} s`);return}if(this.stepTimer-=t,this.stepTimer>0)return;this.stepTimer=Rh;let n;try{n=e.next()}catch(r){this.runner=null,this.hud.message(`"${this.runnerName}" stopped: ${r instanceof Error?r.message:String(r)}`);return}if(!n){this.runner=null,this.hud.message(e.error?`"${this.runnerName}": ${e.error}`:`"${this.runnerName}" finished`);return}let s;try{if(s=ec(this.world,this.agent,n,{attack:(r,o,a)=>{const c=this.mobs.mobs.find(l=>Math.floor(l.position.x)===r&&Math.floor(l.position.z)===a&&Math.abs(l.position.y-o)<1.5);return c?(this.mobs.attack(c,4,this.body.yaw),!0):!1},giveToPlayer:r=>this.inventory.addStack(r)}),typeof s!="object"||s===null||typeof s.ok!="boolean")throw new Error("invalid Agent command");this.agentView.moveTo(this.agent),!s.ok&&s.message&&this.hud.message(`Agent: ${s.message}`)}catch(r){this.runner=null,this.hud.message(`"${this.runnerName}" stopped: ${r instanceof Error?r.message:String(r)}`);return}}closeDialog(t){t.hide(),this.resumeInput()}breakAt(t){const e=rr(t.id)?this.chalkboardAt(t.x,t.y,t.z):null;if(!Ad(this.world,this.inventory,this.mode,t.x,t.y,t.z))return;if(e){for(const r of Ws(e))this.chalkCells.delete(si(r.x,r.y,r.z)),(r.x!==t.x||r.y!==t.y||r.z!==t.z)&&this.world.setBlock(r.x,r.y,r.z,Ue);this.chalkboards.delete(si(e.x,e.y,e.z)),this.chalkViews.remove(e)}if(this.mode==="survival"&&Ai(this.hunger,bi.breakBlock),t.id!==Or)return;const n=aa(t.x,t.y,t.z),s=this.furnaces.get(n);if(s)for(const r of pf(s))this.inventory.addStack(r);this.furnaces.delete(n)}takeMobHits(t){for(const e of this.mobs.mobs){const n=ef(e,this.body.position,t);if(n===0||this.dead)continue;const s=nf(e,this.body.position);this.body.velocity={x:this.body.velocity.x+s.x,y:Math.max(this.body.velocity.y,s.y),z:this.body.velocity.z+s.z},this.hurt(n),this.hud.message(`${Ee[e.kind].displayName} hit you`)}}updateHunger(t,e,n){const s=this.body.position,r=Math.hypot(s.x-this.lastPos.x,s.z-this.lastPos.z);this.body.inWater?Ai(this.hunger,bi.swimPerBlock*r):t&&Ai(this.hunger,bi.sprintPerBlock*r),e&&!this.body.onGround&&this.body.velocity.y>0&&Ai(this.hunger,t?bi.sprintJump:bi.jump);const o=vf(this.hunger,n,this.health,os);o>0?this.health=Math.min(os,this.health+o):o<0&&this.hurt(-o)}wearTool(t){const e=this.inventory.selectedStack();e&&this.inventory.damageSelected(t)&&this.hud.message(`${pn(e.id)} broke`)}updateFall(t){const e=this.body.position.y;if(this.body.flying||this.body.inWater||this.mode==="creative"){this.fallStart=null;return}if(!this.body.onGround)(this.fallStart===null||t)&&(this.fallStart=e),this.fallStart=Math.max(this.fallStart,e);else if(this.fallStart!==null){const n=this.fallStart-e;this.fallStart=null;const s=Math.floor(n-3);s>0&&this.hurt(s)}}hurt(t){this.mode==="creative"&&this.body.position.y>-20||(this.health=Math.max(0,this.health-t),this.hud.flashDamage(),(this.health===0||this.body.position.y<-20)&&(this.dead=!0,this.health=0,this.keyboard.reset(),document.pointerLockElement&&document.exitPointerLock(),this.events.onDeath()))}onKey(t){if(!(!this.running||this.chat.open)){if(this.chalkDialog.open||this.bookScreen.open||this.codeBuilder.open){t.code==="Escape"&&this.closeDialog(this.chalkDialog.open?this.chalkDialog:this.bookScreen.open?this.bookScreen:this.codeBuilder);return}if(t.code==="KeyK"&&!this.paused&&!this.dead&&!this.inventoryScreen.open){this.openCodeBuilder();return}if(this.npcDialog.open){t.code==="Escape"&&this.closeNpcDialog();return}if(this.portfolioScreen.open){(t.code==="Escape"||t.code==="KeyP")&&this.togglePortfolio();return}t.code==="KeyE"&&!this.paused&&!this.dead?this.toggleInventory():t.code==="Escape"&&this.inventoryScreen.open?this.toggleInventory():t.code==="KeyC"&&!this.paused&&!this.dead&&!this.inventoryScreen.open?this.takePhoto():t.code==="KeyP"&&!this.paused&&!this.dead&&!this.inventoryScreen.open?this.togglePortfolio():t.code==="Escape"&&!this.paused&&!this.dead?this.pause():(t.code==="Slash"||t.code==="KeyT")&&!this.paused&&!this.dead&&!this.inventoryScreen.open?(t.preventDefault(),this.openChat(t.code==="Slash"?"/":"")):t.code==="F3"&&(t.preventDefault(),this.hud.toggleDebug())}}toggleInventory(){this.inventoryScreen.open?(this.inventoryScreen.hide(),this.resumeInput()):this.openInventory("inventory")}openInventory(t){this.suspendInput();const e=t==="furnace"&&this.openFurnace?this.furnaces.get(this.openFurnace)??null:null;this.inventoryScreen.show(this.inventory,this.mode,t,e)}suspendInput(){this.keyboard.reset(),this.keyboard.enabled=!1,document.pointerLockElement&&document.exitPointerLock()}openNpcDialog(t){this.suspendInput(),this.npcDialog.show(t,this.mode==="creative")}closeNpcDialog(){this.npcDialog.hide(),this.resumeInput()}togglePortfolio(){this.portfolioScreen.open?(this.portfolioScreen.hide(),this.resumeInput()):(this.suspendInput(),this.portfolioScreen.show())}takePhoto(){const t=this.renderer;t.render(vo(this.timeOfDay),!1,0);const e=t.canvas,n=480,s=Math.round(e.height/Math.max(1,e.width)*n),r=document.createElement("canvas");r.width=n,r.height=s,r.getContext("2d").drawImage(e,0,0,n,s),this.portfolio.add(r.toDataURL("image/jpeg",.8)),this.hud.flashCamera(),this.hud.message(`Photo saved to portfolio (${this.portfolio.photos.length}). Press P to view.`)}openChat(t=""){this.keyboard.reset(),this.keyboard.enabled=!1,document.pointerLockElement&&document.exitPointerLock(),this.chat.show(t)}resumeInput(){this.keyboard.enabled=!0,this.lastTime=performance.now(),!this.touch&&!this.paused&&this.keyboard.requestPointerLock()}runChat(t){if(!t.startsWith("/"))return this.hud.message(`<Player> ${t}`),t;const e=zd(t);let n;switch(e.type){case"gamemode":this.setMode(e.mode),n=`Set own game mode to ${e.mode}`;break;case"time":this.timeOfDay=e.timeOfDay,n=`Set the time to ${Math.round(e.timeOfDay*24e3)}`;break;case"tp":{const s=this.body.position;this.body.position={x:e.relative[0]?s.x+e.x:e.x,y:e.relative[1]?s.y+e.y:e.y,z:e.relative[2]?s.z+e.z:e.z},this.body.velocity={x:0,y:0,z:0};const r=this.body.position;n=`Teleported to ${r.x.toFixed(1)}, ${r.y.toFixed(1)}, ${r.z.toFixed(1)}`;break}case"give":{const s=this.inventory.add(e.id,e.count);n=`Gave ${e.count-s} [${pn(e.id)}]`;break}case"summon":{const s=zl(this.body.yaw,0),r=this.body.position.x+s.x*3,o=this.body.position.z+s.z*3,a=(u,d,f)=>this.world.getBlock(u,d,f),c=Math.ceil(Ee[e.kind].height),l=qd(a,r,o,this.body.position.y,c)??{x:r,y:Math.max(this.world.generator.heightAt(Math.floor(r),Math.floor(o))+1,Math.floor(this.body.position.y))+.5,z:o},h=this.mobs.spawn(e.kind,{x:l.x,y:l.y+.01,z:l.z},{name:e.name,yaw:this.body.yaw+Math.PI});n=`Summoned new ${h.kind==="npc"?h.name??"NPC":Ee[h.kind].displayName}`;break}case"gamerule":e.rule==="doMobSpawning"?this.mobs.spawning=e.value:this.daylightCycle=e.value,n=`Game rule ${e.rule} is now set to: ${e.value}`;break;case"seed":n=`Seed: [${this.world.seed}]`;break;case"agent":this.teleportAgent(),n="Teleported the Agent to you";break;case"code":{const s=this.programs.find(r=>r.trigger.type==="chat"&&r.trigger.command===e.command);s?n=this.runProgram(s)?`Running "${s.name}"`:`Couldn't run "${s.name}"`:n=`No Code Builder program runs on "${e.command}"`;break}case"help":n=Bd.join("  ·  ");break;case"error":n=e.message;break}return this.hud.message(n),n}findSpawn(){const t=this.world.generator,e=(s,r,o,a)=>{for(let c=r;c<o;c++){const l=this.world.getBlock(s,c,a);if(l!==Ue&&!Me[l].needsSupport)return!1}return!0},n=(s,r,o)=>{if(!e(s,r+1,de,o))return!1;for(let a=-2;a<=2;a++)for(let c=-2;c<=2;c++)if(!e(s+c,r+1,r+5,o+a))return!1;return!0};for(let s=0;s<96;s+=3)for(let r=0;r<12;r++){const o=Math.round(Math.cos(r/12*Math.PI*2)*s),a=Math.round(Math.sin(r/12*Math.PI*2)*s),c=t.heightAt(o,a);if(c>kn&&n(o,c,a))return{x:o+.5,y:c+1,z:a+.5}}return{x:.5,y:t.heightAt(0,0)+1,z:.5}}starterInventory(){const t=new qr;return this.mode==="creative"&&["grass","dirt","stone","cobblestone","oak_planks","oak_log","glass","bricks","glowstone"].forEach((e,n)=>t.setSlot(n,{id:Kt(e),count:1})),t}resize(){this.renderer.resize(window.innerWidth,window.innerHeight)}debugText(){const t=this.body.position,e=this.target,n=this.world.generator.biomeAt(Math.floor(t.x),Math.floor(t.z));return[`AgentFlow Craft  ${this.fps} fps`,`XYZ: ${t.x.toFixed(2)} / ${t.y.toFixed(2)} / ${t.z.toFixed(2)}`,`Chunk: ${sn(t.x)}, ${sn(t.z)}  meshed ${this.renderer.meshedChunkCount()}`,`Facing: yaw ${(this.body.yaw*180/Math.PI).toFixed(0)}° pitch ${(this.body.pitch*180/Math.PI).toFixed(0)}°`,`Biome: ${n}  Mode: ${this.mode}${this.body.flying?" (flying)":""}`,`Time: ${Math.round(this.timeOfDay*24e3)}  Seed: ${this.world.seed}`,e?`Looking at: ${Xe(e.id).displayName} (${e.x}, ${e.y}, ${e.z})`:"Looking at: -",`Blocks: ${Dh().length}`].join(`
`)}}const ci=document.getElementById("app"),Ou=Jf([...Wu(),...id()]),Lh=new URLSearchParams(location.search),Al=Lh.has("touch")?Lh.get("touch")!=="0":window.matchMedia("(pointer: coarse)").matches||navigator.maxTouchPoints>0;document.body.classList.toggle("touch",Al);let Gn=null;function me(i,t="",e=""){const n=document.createElement(i);return t&&(n.className=t),e&&(n.textContent=e),n}function Je(i,t,e="mc-button"){const n=me("button",e,i);return n.addEventListener("click",t),n}function zx(){try{const i=localStorage.getItem(wl);return i?Pd(i):null}catch{return null}}function po(i,...t){const e=me("div",`screen ${i}`),n=me("div","panel menu-panel");return n.append(...t),e.appendChild(n),e}function Qs(){ci.replaceChildren();const i=me("div","title-screen"),t=me("div","logo");for(const o of["grass","oak_log","bricks","glass","diamond_ore"]){const a=me("img");a.src=Qr(Ou,Kt(o)),a.alt="",t.appendChild(a)}const e=me("h1","","AgentFlow Craft"),n=me("p","tagline","Build, explore and learn — in your browser"),s=me("div","menu-buttons"),r=zx();r&&s.appendChild(Je(`Continue “${r.name}”`,()=>Cl({save:r}),"mc-button primary")),s.appendChild(Je("Create New World",Hx,r?"mc-button":"mc-button primary")),s.appendChild(Je("How to Play",Gx)),i.append(t,e,n,s,me("p","footer","Not affiliated with Mojang or Microsoft. All textures are procedurally generated.")),ci.appendChild(i)}function Hx(){const i=me("input","mc-input");i.value="My World",i.setAttribute("aria-label","World name");const t=me("input","mc-input");t.placeholder="Leave blank for random",t.setAttribute("aria-label","Seed");let e="creative";const n=Je("Game Mode: Creative",()=>{e=e==="creative"?"survival":"creative",n.textContent=`Game Mode: ${e==="creative"?"Creative":"Survival"}`});n.dataset.testid="mode";let s=!0;const r=Je("Spawn Animals: On",()=>{s=!s,r.textContent=`Spawn Animals: ${s?"On":"Off"}`}),o=(c,l)=>{const h=me("label","field");return h.append(me("span","",c),l),h},a=Je("Create",()=>{const c=t.value.trim(),l=c?Yu(c):Math.floor(Math.random()*2**31);localStorage.removeItem(wl),Cl({name:i.value.trim()||"My World",seed:l,mode:e,spawnAnimals:s})},"mc-button primary");a.dataset.testid="create",ci.replaceChildren(po("create-screen",me("h2","","Create New World"),o("World Name",i),o("Seed",t),n,r,a,Je("Cancel",Qs)))}function Gx(){const i=me("div","help");i.innerHTML=`
    <h3>Computer</h3>
    <p><b>WASD</b> move · <b>Mouse</b> look · <b>Space</b> jump (double-tap to fly in Creative) · <b>Shift</b> sneak / fly down · <b>Ctrl</b> sprint</p>
    <p><b>Left click</b> break · <b>Right click</b> place · <b>Middle click</b> pick block · <b>1–9 / wheel</b> hotbar</p>
    <p><b>E</b> inventory · <b>C</b> camera · <b>P</b> portfolio · <b>/</b> or <b>T</b> commands · <b>F3</b> debug · <b>Esc</b> pause</p>
    <h3>Touch</h3>
    <p><b>Left joystick</b> move · <b>Drag</b> right side to look · <b>Tap</b> place · <b>Hold</b> break</p>
    <p><b>⤒</b> jump · <b>✈</b> fly (Creative) · <b>⤓</b> sneak / fly down · <b>•••</b> inventory · <b>📷</b> camera · <b>🖼</b> portfolio</p>
    <h3>Education Edition features</h3>
    <p><b>Allow</b> / <b>Deny</b>: in Survival you can only build above Allow blocks, never above Deny blocks. <b>Border</b> blocks are unbreakable.</p>
    <p><b>Camera &amp; Portfolio</b>: <b>C</b> (📷) takes a photo, <b>P</b> (🖼) opens the portfolio, where you can caption, save or delete photos.</p>
    <p><b>NPCs</b>: <code>/summon npc Name</code>; right click (tap) an NPC to talk. In Creative you can edit its name and dialogue.</p>
    <h3>Crafting &amp; mobs</h3>
    <p>Survival inventory has a 2×2 crafting grid; right click a <b>Crafting Table</b> for 3×3. Pigs, sheep and chickens roam grassland; left click to attack (sheep drop wool).</p>
    <h3>Commands</h3>
    <p>/gamemode creative|survival · /time set day|night|noon|midnight · /tp x y z · /give glass 64 · /summon pig|sheep|chicken|npc · /gamerule doMobSpawning false · /seed</p>`,ci.replaceChildren(po("help-screen",me("h2","","How to Play"),i,Je("Back",Qs)))}function Cl(i){ci.replaceChildren();const t=po("loading-screen",me("h2","","Generating world…"));ci.appendChild(t),requestAnimationFrame(()=>{Gn=new Bx(ci,Ou,{name:i.save?.name??i.name??"My World",seed:i.save?.seed??i.seed??0,mode:i.save?.mode??i.mode??"creative",touch:Al,spawnAnimals:i.spawnAnimals,save:i.save},{onPause:Vx,onDeath:Wx}),t.remove(),Gn.start()})}function Bu(i,...t){const e=po(`overlay ${i}`,...t);return ci.appendChild(e),e}function Vx(){if(!Gn)return;const i=Gn,t=()=>{o.remove(),i.resume()},e=Je(`Game Mode: ${i.mode==="creative"?"Creative":"Survival"}`,()=>{i.setMode(i.mode==="creative"?"survival":"creative"),e.textContent=`Game Mode: ${i.mode==="creative"?"Creative":"Survival"}`}),n=me("input","mc-range");n.type="range",n.min="2",n.max="12",n.value=String(i.renderer.renderDistance),n.setAttribute("aria-label","Render distance");const s=me("span","",`Render Distance: ${i.renderer.renderDistance} chunks`);n.addEventListener("input",()=>{i.renderer.renderDistance=Number(n.value),s.textContent=`Render Distance: ${n.value} chunks`});const r=me("label","field");r.append(s,n);const o=Bu("pause-screen",me("h2","","Game Menu"),Je("Back to Game",t,"mc-button primary"),e,r,Je("Save & Quit to Title",()=>{i.stop(),Gn=null,Qs()})),a=c=>{c.code==="Escape"&&o.isConnected&&(document.removeEventListener("keydown",a),t())};setTimeout(()=>document.addEventListener("keydown",a),0)}function Wx(){if(!Gn)return;const i=Gn,t=Bu("death-screen",me("h2","","You died!"),Je("Respawn",()=>{t.remove(),i.respawn()},"mc-button primary"),Je("Title Screen",()=>{i.stop(),Gn=null,Qs()}))}window.__craft={get game(){return Gn},startGame:Cl,blockId:Kt,stackId:Vn,touch:Al};Qs();
