var Ne=Object.defineProperty;var c=(e,t)=>Ne(e,"name",{value:t,configurable:!0});import{r as f,R as U}from"./index.abc77a45.js";import{r as Te}from"./index.65655ae6.js";import{a as A,j as $,F as I}from"./jsx-runtime.17fe2203.js";function E(){return E=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},E.apply(this,arguments)}c(E,"_extends");var Oe=f.exports.createContext({color:"currentColor",size:"1em",weight:"regular",mirrored:!1}),$e=c(function(t,n,r){var o=r.get(t);return o?o(n):(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),null)},"renderPathForWeight");function de(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}c(de,"_objectWithoutPropertiesLoose");var xe=f.exports.forwardRef(function(e,t){var n=e.alt,r=e.color,o=e.size,i=e.weight,l=e.mirrored,s=e.children,a=e.renderPath,u=de(e,["alt","color","size","weight","mirrored","children","renderPath"]),m=f.exports.useContext(Oe),g=m.color,d=g===void 0?"currentColor":g,h=m.size,b=m.weight,v=b===void 0?"regular":b,y=m.mirrored,x=y===void 0?!1:y,S=de(m,["color","size","weight","mirrored"]);return A("svg",{...Object.assign({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o!=null?o:h,height:o!=null?o:h,fill:r!=null?r:d,viewBox:"0 0 256 256",transform:l||x?"scale(-1, 1)":void 0},S,u),children:[!!n&&$("title",{children:n}),s,$("rect",{width:"256",height:"256",fill:"none"}),a(i!=null?i:v,r!=null?r:d)]})});xe.displayName="IconBase";const Se=xe;var _=new Map;_.set("bold",function(e){return $(I,{children:$("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"})})});_.set("duotone",function(e){return $(I,{children:$("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})})});_.set("fill",function(){return $(I,{children:$("path",{d:"M104,192a8.5,8.5,0,0,1-5.7-2.3l-56-56a8.1,8.1,0,0,1,11.4-11.4L104,172.7,210.3,66.3a8.1,8.1,0,0,1,11.4,11.4l-112,112A8.5,8.5,0,0,1,104,192Z"})})});_.set("light",function(e){return $(I,{children:$("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"})})});_.set("thin",function(e){return $(I,{children:$("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"})})});_.set("regular",function(e){return $(I,{children:$("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})})});var _e=c(function(t,n){return $e(t,n,_)},"renderPath"),ke=f.exports.forwardRef(function(e,t){return $(Se,{...Object.assign({ref:t},e,{renderPath:_e})})});ke.displayName="Check";const Fe=ke;var F=new Map;F.set("bold",function(e){return A(I,{children:[$("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),$("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"})]})});F.set("duotone",function(e){return A(I,{children:[$("circle",{cx:"128",cy:"96",r:"64",opacity:"0.2"}),$("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:e,strokeMiterlimit:"10",strokeWidth:"16"}),$("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})]})});F.set("fill",function(){return $(I,{children:$("path",{d:"M231.9,212a120.7,120.7,0,0,0-67.1-54.2,72,72,0,1,0-73.6,0A120.7,120.7,0,0,0,24.1,212a7.7,7.7,0,0,0,0,8,7.8,7.8,0,0,0,6.9,4H225a7.8,7.8,0,0,0,6.9-4A7.7,7.7,0,0,0,231.9,212Z"})})});F.set("light",function(e){return A(I,{children:[$("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),$("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"})]})});F.set("thin",function(e){return A(I,{children:[$("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),$("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"})]})});F.set("regular",function(e){return A(I,{children:[$("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:e,strokeMiterlimit:"10",strokeWidth:"16"}),$("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})]})});var De=c(function(t,n){return $e(t,n,F)},"renderPath"),ye=f.exports.forwardRef(function(e,t){return $(Se,{...Object.assign({ref:t},e,{renderPath:De})})});ye.displayName="User";const He=ye;function ve(e,t=[]){let n=[];function r(i,l){const s=f.exports.createContext(l),a=n.length;n=[...n,l];function u(g){const{scope:d,children:h,...b}=g,v=(d==null?void 0:d[e][a])||s,y=f.exports.useMemo(()=>b,Object.values(b));return f.exports.createElement(v.Provider,{value:y},h)}c(u,"Provider");function m(g,d){const h=(d==null?void 0:d[e][a])||s,b=f.exports.useContext(h);if(b)return b;if(l!==void 0)return l;throw new Error(`\`${g}\` must be used within \`${i}\``)}return c(m,"useContext"),u.displayName=i+"Provider",[u,m]}c(r,"$c512c27ab02ef895$export$fd42f52fd3ae1109");const o=c(()=>{const i=n.map(l=>f.exports.createContext(l));return c(function(s){const a=(s==null?void 0:s[e])||i;return f.exports.useMemo(()=>({[`__scope${e}`]:{...s,[e]:a}}),[s,a])},"useScope")},"createScope");return o.scopeName=e,[r,Ue(o,...t)]}c(ve,"$c512c27ab02ef895$export$50c7b4e9d9f19c1");function Ue(...e){const t=e[0];if(e.length===1)return t;const n=c(()=>{const r=e.map(o=>({useScope:o(),scopeName:o.scopeName}));return c(function(i){const l=r.reduce((s,{useScope:a,scopeName:u})=>{const g=a(i)[`__scope${u}`];return{...s,...g}},{});return f.exports.useMemo(()=>({[`__scope${t.scopeName}`]:l}),[l])},"useComposedScopes")},"createScope1");return n.scopeName=t.scopeName,n}c(Ue,"$c512c27ab02ef895$var$composeContextScopes");function ae(e){const t=f.exports.useRef(e);return f.exports.useEffect(()=>{t.current=e}),f.exports.useMemo(()=>(...n)=>{var r;return(r=t.current)===null||r===void 0?void 0:r.call(t,...n)},[])}c(ae,"$b1b2314f5f9a1d84$export$25bec8c6f54ee79a");const te=Boolean(globalThis==null?void 0:globalThis.document)?f.exports.useLayoutEffect:()=>{};function Ve(e,t){typeof e=="function"?e(t):e!=null&&(e.current=t)}c(Ve,"$6ed0406888f73fc4$var$setRef");function Ce(...e){return t=>e.forEach(n=>Ve(n,t))}c(Ce,"$6ed0406888f73fc4$export$43e446d32b3d21af");function we(...e){return f.exports.useCallback(Ce(...e),e)}c(we,"$6ed0406888f73fc4$export$c7b2cbe3552a0d05");const Re=f.exports.forwardRef((e,t)=>{const{children:n,...r}=e,o=f.exports.Children.toArray(n),i=o.find(Ye);if(i){const l=i.props.children,s=o.map(a=>a===i?f.exports.Children.count(l)>1?f.exports.Children.only(null):f.exports.isValidElement(l)?l.props.children:null:a);return f.exports.createElement(ie,E({},r,{ref:t}),f.exports.isValidElement(l)?f.exports.cloneElement(l,void 0,s):null)}return f.exports.createElement(ie,E({},r,{ref:t}),n)});Re.displayName="Slot";const ie=f.exports.forwardRef((e,t)=>{const{children:n,...r}=e;return f.exports.isValidElement(n)?f.exports.cloneElement(n,{...qe(r,n.props),ref:Ce(t,n.ref)}):f.exports.Children.count(n)>1?f.exports.Children.only(null):null});ie.displayName="SlotClone";const Ge=c(({children:e})=>f.exports.createElement(f.exports.Fragment,null,e),"$5e63c961fc1ce211$export$d9f1ccf0bdb05d45");function Ye(e){return f.exports.isValidElement(e)&&e.type===Ge}c(Ye,"$5e63c961fc1ce211$var$isSlottable");function qe(e,t){const n={...t};for(const r in t){const o=e[r],i=t[r];/^on[A-Z]/.test(r)?o&&i?n[r]=(...s)=>{i(...s),o(...s)}:o&&(n[r]=o):r==="style"?n[r]={...o,...i}:r==="className"&&(n[r]=[o,i].filter(Boolean).join(" "))}return{...e,...n}}c(qe,"$5e63c961fc1ce211$var$mergeProps");const Ze=["a","button","div","h2","h3","img","label","li","nav","ol","p","span","svg","ul"],J=Ze.reduce((e,t)=>{const n=f.exports.forwardRef((r,o)=>{const{asChild:i,...l}=r,s=i?Re:t;return f.exports.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),f.exports.createElement(s,E({},l,{ref:o}))});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{}),ze="Avatar",[Ke,zr]=ve(ze),[Je,Be]=Ke(ze),Xe=f.exports.forwardRef((e,t)=>{const{__scopeAvatar:n,...r}=e,[o,i]=f.exports.useState("idle");return f.exports.createElement(Je,{scope:n,imageLoadingStatus:o,onImageLoadingStatusChange:i},f.exports.createElement(J.span,E({},r,{ref:t})))}),Qe="AvatarImage",et=f.exports.forwardRef((e,t)=>{const{__scopeAvatar:n,src:r,onLoadingStatusChange:o=c(()=>{},"onLoadingStatusChange"),...i}=e,l=Be(Qe,n),s=nt(r),a=ae(u=>{o(u),l.onImageLoadingStatusChange(u)});return te(()=>{s!=="idle"&&a(s)},[s,a]),s==="loaded"?f.exports.createElement(J.img,E({},i,{ref:t,src:r})):null}),tt="AvatarFallback",rt=f.exports.forwardRef((e,t)=>{const{__scopeAvatar:n,delayMs:r,...o}=e,i=Be(tt,n),[l,s]=f.exports.useState(r===void 0);return f.exports.useEffect(()=>{if(r!==void 0){const a=window.setTimeout(()=>s(!0),r);return()=>window.clearTimeout(a)}},[r]),l&&i.imageLoadingStatus!=="loaded"?f.exports.createElement(J.span,E({},o,{ref:t})):null});function nt(e){const[t,n]=f.exports.useState("idle");return f.exports.useEffect(()=>{if(!e){n("error");return}let r=!0;const o=new window.Image,i=c(l=>()=>{!r||n(l)},"updateStatus");return n("loading"),o.onload=i("loaded"),o.onerror=i("error"),o.src=e,()=>{r=!1}},[e]),t}c(nt,"$cddcb0b647441e34$var$useImageLoadingStatus");const ot=Xe,it=et,st=rt;var k="colors",w="sizes",p="space",Ie={gap:p,gridGap:p,columnGap:p,gridColumnGap:p,rowGap:p,gridRowGap:p,inset:p,insetBlock:p,insetBlockEnd:p,insetBlockStart:p,insetInline:p,insetInlineEnd:p,insetInlineStart:p,margin:p,marginTop:p,marginRight:p,marginBottom:p,marginLeft:p,marginBlock:p,marginBlockEnd:p,marginBlockStart:p,marginInline:p,marginInlineEnd:p,marginInlineStart:p,padding:p,paddingTop:p,paddingRight:p,paddingBottom:p,paddingLeft:p,paddingBlock:p,paddingBlockEnd:p,paddingBlockStart:p,paddingInline:p,paddingInlineEnd:p,paddingInlineStart:p,top:p,right:p,bottom:p,left:p,scrollMargin:p,scrollMarginTop:p,scrollMarginRight:p,scrollMarginBottom:p,scrollMarginLeft:p,scrollMarginX:p,scrollMarginY:p,scrollMarginBlock:p,scrollMarginBlockEnd:p,scrollMarginBlockStart:p,scrollMarginInline:p,scrollMarginInlineEnd:p,scrollMarginInlineStart:p,scrollPadding:p,scrollPaddingTop:p,scrollPaddingRight:p,scrollPaddingBottom:p,scrollPaddingLeft:p,scrollPaddingX:p,scrollPaddingY:p,scrollPaddingBlock:p,scrollPaddingBlockEnd:p,scrollPaddingBlockStart:p,scrollPaddingInline:p,scrollPaddingInlineEnd:p,scrollPaddingInlineStart:p,fontSize:"fontSizes",background:k,backgroundColor:k,backgroundImage:k,borderImage:k,border:k,borderBlock:k,borderBlockEnd:k,borderBlockStart:k,borderBottom:k,borderBottomColor:k,borderColor:k,borderInline:k,borderInlineEnd:k,borderInlineStart:k,borderLeft:k,borderLeftColor:k,borderRight:k,borderRightColor:k,borderTop:k,borderTopColor:k,caretColor:k,color:k,columnRuleColor:k,fill:k,outline:k,outlineColor:k,stroke:k,textDecorationColor:k,fontFamily:"fonts",fontWeight:"fontWeights",lineHeight:"lineHeights",letterSpacing:"letterSpacings",blockSize:w,minBlockSize:w,maxBlockSize:w,inlineSize:w,minInlineSize:w,maxInlineSize:w,width:w,minWidth:w,maxWidth:w,height:w,minHeight:w,maxHeight:w,flexBasis:w,gridTemplateColumns:w,gridTemplateRows:w,borderWidth:"borderWidths",borderTopWidth:"borderWidths",borderRightWidth:"borderWidths",borderBottomWidth:"borderWidths",borderLeftWidth:"borderWidths",borderStyle:"borderStyles",borderTopStyle:"borderStyles",borderRightStyle:"borderStyles",borderBottomStyle:"borderStyles",borderLeftStyle:"borderStyles",borderRadius:"radii",borderTopLeftRadius:"radii",borderTopRightRadius:"radii",borderBottomRightRadius:"radii",borderBottomLeftRadius:"radii",boxShadow:"shadows",textShadow:"shadows",transition:"transitions",zIndex:"zIndices"},at=c((e,t)=>typeof t=="function"?{"()":Function.prototype.toString.call(t)}:t,"i"),Y=c(()=>{const e=Object.create(null);return(t,n,...r)=>{const o=(i=>JSON.stringify(i,at))(t);return o in e?e[o]:e[o]=n(t,...r)}},"o"),N=Symbol.for("sxs.internal"),le=c((e,t)=>Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)),"s"),ue=c(e=>{for(const t in e)return!0;return!1},"a"),{hasOwnProperty:lt}=Object.prototype,se=c(e=>e.includes("-")?e:e.replace(/[A-Z]/g,t=>"-"+t.toLowerCase()),"d"),ct=/\s+(?![^()]*\))/,V=c(e=>t=>e(...typeof t=="string"?String(t).split(ct):[t]),"p"),fe={appearance:e=>({WebkitAppearance:e,appearance:e}),backfaceVisibility:e=>({WebkitBackfaceVisibility:e,backfaceVisibility:e}),backdropFilter:e=>({WebkitBackdropFilter:e,backdropFilter:e}),backgroundClip:e=>({WebkitBackgroundClip:e,backgroundClip:e}),boxDecorationBreak:e=>({WebkitBoxDecorationBreak:e,boxDecorationBreak:e}),clipPath:e=>({WebkitClipPath:e,clipPath:e}),content:e=>({content:e.includes('"')||e.includes("'")||/^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(e)?e:`"${e}"`}),hyphens:e=>({WebkitHyphens:e,hyphens:e}),maskImage:e=>({WebkitMaskImage:e,maskImage:e}),maskSize:e=>({WebkitMaskSize:e,maskSize:e}),tabSize:e=>({MozTabSize:e,tabSize:e}),textSizeAdjust:e=>({WebkitTextSizeAdjust:e,textSizeAdjust:e}),userSelect:e=>({WebkitUserSelect:e,userSelect:e}),marginBlock:V((e,t)=>({marginBlockStart:e,marginBlockEnd:t||e})),marginInline:V((e,t)=>({marginInlineStart:e,marginInlineEnd:t||e})),maxSize:V((e,t)=>({maxBlockSize:e,maxInlineSize:t||e})),minSize:V((e,t)=>({minBlockSize:e,minInlineSize:t||e})),paddingBlock:V((e,t)=>({paddingBlockStart:e,paddingBlockEnd:t||e})),paddingInline:V((e,t)=>({paddingInlineStart:e,paddingInlineEnd:t||e}))},oe=/([\d.]+)([^]*)/,dt=c((e,t)=>e.length?e.reduce((n,r)=>(n.push(...t.map(o=>o.includes("&")?o.replace(/&/g,/[ +>|~]/.test(r)&&/&.*&/.test(o)?`:is(${r})`:r):r+" "+o)),n),[]):t,"f"),ut=c((e,t)=>e in ft&&typeof t=="string"?t.replace(/^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/,(n,r,o,i)=>r+(o==="stretch"?`-moz-available${i};${se(e)}:${r}-webkit-fill-available`:`-moz-fit-content${i};${se(e)}:${r}fit-content`)+i):String(t),"m"),ft={blockSize:1,height:1,inlineSize:1,maxBlockSize:1,maxHeight:1,maxInlineSize:1,maxWidth:1,minBlockSize:1,minHeight:1,minInlineSize:1,minWidth:1,width:1},W=c(e=>e?e+"-":"","S"),Ee=c((e,t,n)=>e.replace(/([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g,(r,o,i,l,s)=>l=="$"==!!i?r:(o||l=="--"?"calc(":"")+"var(--"+(l==="$"?W(t)+(s.includes("$")?"":W(n))+s.replace(/\$/g,"-"):s)+")"+(o||l=="--"?"*"+(o||"")+(i||"1")+")":"")),"k"),pt=/\s*,\s*(?![^()]*\))/,gt=Object.prototype.toString,G=c((e,t,n,r,o)=>{let i,l,s;const a=c((u,m,g)=>{let d,h;const b=c(v=>{for(d in v){const S=d.charCodeAt(0)===64,D=S&&Array.isArray(v[d])?v[d]:[v[d]];for(h of D){const P=/[A-Z]/.test(x=d)?x:x.replace(/-[^]/g,R=>R[1].toUpperCase()),q=typeof h=="object"&&h&&h.toString===gt&&(!r.utils[P]||!m.length);if(P in r.utils&&!q){const R=r.utils[P];if(R!==l){l=R,b(R(h)),l=null;continue}}else if(P in fe){const R=fe[P];if(R!==s){s=R,b(R(h)),s=null;continue}}if(S&&(y=d.slice(1)in r.media?"@media "+r.media[d.slice(1)]:d,d=y.replace(/\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g,(R,z,M,L,B,j)=>{const H=oe.test(z),X=.0625*(H?-1:1),[Q,ce]=H?[L,z]:[z,L];return"("+(M[0]==="="?"":M[0]===">"===H?"max-":"min-")+Q+":"+(M[0]!=="="&&M.length===1?ce.replace(oe,(Le,re,ne)=>Number(re)+X*(M===">"?1:-1)+ne):ce)+(B?") and ("+(B[0]===">"?"min-":"max-")+Q+":"+(B.length===1?j.replace(oe,(Le,re,ne)=>Number(re)+X*(B===">"?-1:1)+ne):j):"")+")"})),q){const R=S?g.concat(d):[...g],z=S?[...m]:dt(m,d.split(pt));i!==void 0&&o(pe(...i)),i=void 0,a(h,z,R)}else i===void 0&&(i=[[],m,g]),d=S||d.charCodeAt(0)!==36?d:`--${W(r.prefix)}${d.slice(1).replace(/\$/g,"-")}`,h=q?h:typeof h=="number"?h&&P in ht?String(h)+"px":String(h):Ee(ut(P,h==null?"":h),r.prefix,r.themeMap[P]),i[0].push(`${S?`${d} `:`${se(d)}:`}${h}`)}}var y,x},"p");b(u),i!==void 0&&o(pe(...i)),i=void 0},"a");a(e,t,n)},"$"),pe=c((e,t,n)=>`${n.map(r=>`${r}{`).join("")}${t.length?`${t.join(",")}{`:""}${e.join(";")}${t.length?"}":""}${Array(n.length?n.length+1:0).join("}")}`,"x"),ht={animationDelay:1,animationDuration:1,backgroundSize:1,blockSize:1,border:1,borderBlock:1,borderBlockEnd:1,borderBlockEndWidth:1,borderBlockStart:1,borderBlockStartWidth:1,borderBlockWidth:1,borderBottom:1,borderBottomLeftRadius:1,borderBottomRightRadius:1,borderBottomWidth:1,borderEndEndRadius:1,borderEndStartRadius:1,borderInlineEnd:1,borderInlineEndWidth:1,borderInlineStart:1,borderInlineStartWidth:1,borderInlineWidth:1,borderLeft:1,borderLeftWidth:1,borderRadius:1,borderRight:1,borderRightWidth:1,borderSpacing:1,borderStartEndRadius:1,borderStartStartRadius:1,borderTop:1,borderTopLeftRadius:1,borderTopRightRadius:1,borderTopWidth:1,borderWidth:1,bottom:1,columnGap:1,columnRule:1,columnRuleWidth:1,columnWidth:1,containIntrinsicSize:1,flexBasis:1,fontSize:1,gap:1,gridAutoColumns:1,gridAutoRows:1,gridTemplateColumns:1,gridTemplateRows:1,height:1,inlineSize:1,inset:1,insetBlock:1,insetBlockEnd:1,insetBlockStart:1,insetInline:1,insetInlineEnd:1,insetInlineStart:1,left:1,letterSpacing:1,margin:1,marginBlock:1,marginBlockEnd:1,marginBlockStart:1,marginBottom:1,marginInline:1,marginInlineEnd:1,marginInlineStart:1,marginLeft:1,marginRight:1,marginTop:1,maxBlockSize:1,maxHeight:1,maxInlineSize:1,maxWidth:1,minBlockSize:1,minHeight:1,minInlineSize:1,minWidth:1,offsetDistance:1,offsetRotate:1,outline:1,outlineOffset:1,outlineWidth:1,overflowClipMargin:1,padding:1,paddingBlock:1,paddingBlockEnd:1,paddingBlockStart:1,paddingBottom:1,paddingInline:1,paddingInlineEnd:1,paddingInlineStart:1,paddingLeft:1,paddingRight:1,paddingTop:1,perspective:1,right:1,rowGap:1,scrollMargin:1,scrollMarginBlock:1,scrollMarginBlockEnd:1,scrollMarginBlockStart:1,scrollMarginBottom:1,scrollMarginInline:1,scrollMarginInlineEnd:1,scrollMarginInlineStart:1,scrollMarginLeft:1,scrollMarginRight:1,scrollMarginTop:1,scrollPadding:1,scrollPaddingBlock:1,scrollPaddingBlockEnd:1,scrollPaddingBlockStart:1,scrollPaddingBottom:1,scrollPaddingInline:1,scrollPaddingInlineEnd:1,scrollPaddingInlineStart:1,scrollPaddingLeft:1,scrollPaddingRight:1,scrollPaddingTop:1,shapeMargin:1,textDecoration:1,textDecorationThickness:1,textIndent:1,textUnderlineOffset:1,top:1,transitionDelay:1,transitionDuration:1,verticalAlign:1,width:1,wordSpacing:1},ge=c(e=>String.fromCharCode(e+(e>25?39:97)),"R"),T=c(e=>(t=>{let n,r="";for(n=Math.abs(t);n>52;n=n/52|0)r=ge(n%52)+r;return ge(n%52)+r})(((t,n)=>{let r=n.length;for(;r;)t=33*t^n.charCodeAt(--r);return t})(5381,JSON.stringify(e))>>>0),"z"),K=["themed","global","styled","onevar","resonevar","allvar","inline"],mt=c(e=>{if(e.href&&!e.href.startsWith(location.origin))return!1;try{return!!e.cssRules}catch{return!1}},"j"),bt=c(e=>{let t;const n=c(()=>{const{cssRules:o}=t.sheet;return[].map.call(o,(i,l)=>{const{cssText:s}=i;let a="";if(s.startsWith("--sxs"))return"";if(o[l-1]&&(a=o[l-1].cssText).startsWith("--sxs")){if(!i.cssRules.length)return"";for(const u in t.rules)if(t.rules[u].group===i)return`--sxs{--sxs:${[...t.rules[u].cache].join(" ")}}${s}`;return i.cssRules.length?`${a}${s}`:""}return s}).join("")},"r"),r=c(()=>{if(t){const{rules:s,sheet:a}=t;if(!a.deleteRule){for(;Object(Object(a.cssRules)[0]).type===3;)a.cssRules.splice(0,1);a.cssRules=[]}for(const u in s)delete s[u]}const o=Object(e).styleSheets||[];for(const s of o)if(mt(s)){for(let a=0,u=s.cssRules;u[a];++a){const m=Object(u[a]);if(m.type!==1)continue;const g=Object(u[a+1]);if(g.type!==4)continue;++a;const{cssText:d}=m;if(!d.startsWith("--sxs"))continue;const h=d.slice(14,-3).trim().split(/\s+/),b=K[h[0]];b&&(t||(t={sheet:s,reset:r,rules:{},toString:n}),t.rules[b]={group:g,index:a,cache:new Set(h)})}if(t)break}if(!t){const s=c((a,u)=>({type:u,cssRules:[],insertRule(m,g){this.cssRules.splice(g,0,s(m,{import:3,undefined:1}[(m.toLowerCase().match(/^@([a-z]+)/)||[])[1]]||4))},get cssText(){return a==="@media{}"?`@media{${[].map.call(this.cssRules,m=>m.cssText).join("")}}`:a}}),"i");t={sheet:e?(e.head||e).appendChild(document.createElement("style")).sheet:s("","text/css"),rules:{},reset:r,toString:n}}const{sheet:i,rules:l}=t;for(let s=K.length-1;s>=0;--s){const a=K[s];if(!l[a]){const u=K[s+1],m=l[u]?l[u].index:i.cssRules.length;i.insertRule("@media{}",m),i.insertRule(`--sxs{--sxs:${s}}`,m),l[a]={group:i.cssRules[m+1],index:m,cache:new Set([s])}}$t(l[a])}},"n");return r(),t},"E"),$t=c(e=>{const t=e.group;let n=t.cssRules.length;e.apply=r=>{try{t.insertRule(r,n),++n}catch{}}},"v"),Z=Symbol(),xt=Y(),he=c((e,t)=>xt(e,()=>(...n)=>{let r={type:null,composers:new Set};for(const o of n)if(o!=null)if(o[N]){r.type==null&&(r.type=o[N].type);for(const i of o[N].composers)r.composers.add(i)}else o.constructor!==Object||o.$$typeof?r.type==null&&(r.type=o):r.composers.add(St(o,e));return r.type==null&&(r.type="span"),r.composers.size||r.composers.add(["PJLV",{},[],[],{},[]]),kt(e,r,t)}),"M"),St=c(({variants:e,compoundVariants:t,defaultVariants:n,...r},o)=>{const i=`${W(o.prefix)}c-${T(r)}`,l=[],s=[],a=Object.create(null),u=[];for(const d in n)a[d]=String(n[d]);if(typeof e=="object"&&e)for(const d in e){m=a,g=d,lt.call(m,g)||(a[d]="undefined");const h=e[d];for(const b in h){const v={[d]:String(b)};String(b)==="undefined"&&u.push(d);const y=h[b],x=[v,y,!ue(y)];l.push(x)}}var m,g;if(typeof t=="object"&&t)for(const d of t){let{css:h,...b}=d;h=typeof h=="object"&&h||{};for(const y in b)b[y]=String(b[y]);const v=[b,h,!ue(h)];s.push(v)}return[i,r,l,s,a,u]},"C"),kt=c((e,t,n)=>{const[r,o,i,l]=yt(t.composers),s=typeof t.type=="function"||t.type.$$typeof?(g=>{function d(){for(let h=0;h<d[Z].length;h++){const[b,v]=d[Z][h];g.rules[b].apply(v)}return d[Z]=[],null}return c(d,"t"),d[Z]=[],d.rules={},K.forEach(h=>d.rules[h]={apply:b=>d[Z].push([h,b])}),d})(n):null,a=(s||n).rules,u=`.${r}${o.length>1?`:where(.${o.slice(1).join(".")})`:""}`,m=c(g=>{g=typeof g=="object"&&g||vt;const{css:d,...h}=g,b={};for(const x in i)if(delete h[x],x in g){let S=g[x];typeof S=="object"&&S?b[x]={"@initial":i[x],...S}:(S=String(S),b[x]=S!=="undefined"||l.has(x)?S:i[x])}else b[x]=i[x];const v=new Set([...o]);for(const[x,S,D,P]of t.composers){n.rules.styled.cache.has(x)||(n.rules.styled.cache.add(x),G(S,[`.${x}`],[],e,z=>{a.styled.apply(z)}));const q=me(D,b,e.media),R=me(P,b,e.media,!0);for(const z of q)if(z!==void 0)for(const[M,L,B]of z){const j=`${x}-${T(L)}-${M}`;v.add(j);const H=(B?n.rules.resonevar:n.rules.onevar).cache,X=B?a.resonevar:a.onevar;H.has(j)||(H.add(j),G(L,[`.${j}`],[],e,Q=>{X.apply(Q)}))}for(const z of R)if(z!==void 0)for(const[M,L]of z){const B=`${x}-${T(L)}-${M}`;v.add(B),n.rules.allvar.cache.has(B)||(n.rules.allvar.cache.add(B),G(L,[`.${B}`],[],e,j=>{a.allvar.apply(j)}))}}if(typeof d=="object"&&d){const x=`${r}-i${T(d)}-css`;v.add(x),n.rules.inline.cache.has(x)||(n.rules.inline.cache.add(x),G(d,[`.${x}`],[],e,S=>{a.inline.apply(S)}))}for(const x of String(g.className||"").trim().split(/\s+/))x&&v.add(x);const y=h.className=[...v].join(" ");return{type:t.type,className:y,selector:u,props:h,toString:()=>y,deferredInjector:s}},"p");return le(m,{className:r,selector:u,[N]:t,toString:()=>(n.rules.styled.cache.has(r)||m(),r)})},"P"),yt=c(e=>{let t="";const n=[],r={},o=[];for(const[i,,,,l,s]of e){t===""&&(t=i),n.push(i),o.push(...s);for(const a in l){const u=l[a];(r[a]===void 0||u!=="undefined"||s.includes(u))&&(r[a]=u)}}return[t,n,r,new Set(o)]},"L"),me=c((e,t,n,r)=>{const o=[];e:for(let[i,l,s]of e){if(s)continue;let a,u=0,m=!1;for(a in i){const g=i[a];let d=t[a];if(d!==g){if(typeof d!="object"||!d)continue e;{let h,b,v=0;for(const y in d){if(g===String(d[y])){if(y!=="@initial"){const x=y.slice(1);(b=b||[]).push(x in n?n[x]:y.replace(/^@media ?/,"")),m=!0}u+=v,h=!0}++v}if(b&&b.length&&(l={["@media "+b.join(", ")]:l}),!h)continue e}}}(o[u]=o[u]||[]).push([r?"cv":`${a}-${i[a]}`,l,m])}return o},"O"),vt={},Ct=Y(),wt=c((e,t)=>Ct(e,()=>(...n)=>{const r=c(()=>{for(let o of n){o=typeof o=="object"&&o||{};let i=T(o);if(!t.rules.global.cache.has(i)){if(t.rules.global.cache.add(i),"@import"in o){let l=[].indexOf.call(t.sheet.cssRules,t.rules.themed.group)-1;for(let s of[].concat(o["@import"]))s=s.includes('"')||s.includes("'")?s:`"${s}"`,t.sheet.insertRule(`@import ${s};`,l++);delete o["@import"]}G(o,[],[],e,l=>{t.rules.global.apply(l)})}}return""},"n");return le(r,{toString:r})}),"D"),Rt=Y(),zt=c((e,t)=>Rt(e,()=>n=>{const r=`${W(e.prefix)}k-${T(n)}`,o=c(()=>{if(!t.rules.global.cache.has(r)){t.rules.global.cache.add(r);const i=[];G(n,[],[],e,s=>i.push(s));const l=`@keyframes ${r}{${i.join("")}}`;t.rules.global.apply(l)}return r},"i");return le(o,{get name(){return o()},toString:o})}),"V"),Bt=c(class{constructor(e,t,n,r){this.token=e==null?"":String(e),this.value=t==null?"":String(t),this.scale=n==null?"":String(n),this.prefix=r==null?"":String(r)}get computedValue(){return"var("+this.variable+")"}get variable(){return"--"+W(this.prefix)+W(this.scale)+this.token}toString(){return this.computedValue}},"G"),It=Y(),Et=c((e,t)=>It(e,()=>(n,r)=>{r=typeof n=="object"&&n||Object(r);const o=`.${n=(n=typeof n=="string"?n:"")||`${W(e.prefix)}t-${T(r)}`}`,i={},l=[];for(const a in r){i[a]={};for(const u in r[a]){const m=`--${W(e.prefix)}${a}-${u}`,g=Ee(String(r[a][u]),e.prefix,a);i[a][u]=new Bt(u,g,a,e.prefix),l.push(`${m}:${g}`)}}const s=c(()=>{if(l.length&&!t.rules.themed.cache.has(n)){t.rules.themed.cache.add(n);const a=`${r===e.theme?":root,":""}.${n}{${l.join(";")}}`;t.rules.themed.apply(a)}return n},"s");return{...i,get className(){return s()},selector:o,toString:s}}),"J"),Pt=Y(),At=Y(),Mt=c(e=>{const t=(n=>{let r=!1;const o=Pt(n,i=>{r=!0;const l="prefix"in(i=typeof i=="object"&&i||{})?String(i.prefix):"",s=typeof i.media=="object"&&i.media||{},a=typeof i.root=="object"?i.root||null:globalThis.document||null,u=typeof i.theme=="object"&&i.theme||{},m={prefix:l,media:s,theme:u,themeMap:typeof i.themeMap=="object"&&i.themeMap||{...Ie},utils:typeof i.utils=="object"&&i.utils||{}},g=bt(a),d={css:he(m,g),globalCss:wt(m,g),keyframes:zt(m,g),createTheme:Et(m,g),reset(){g.reset(),d.theme.toString()},theme:{},sheet:g,config:m,prefix:l,getCssText:g.toString,toString:g.toString};return String(d.theme=d.createTheme(u)),d});return r||o.reset(),o})(e);return t.styled=(({config:n,sheet:r})=>At(n,()=>{const o=he(n,r);return(...i)=>{const l=o(...i),s=l[N].type,a=U.forwardRef((u,m)=>{const g=u&&u.as||s,{props:d,deferredInjector:h}=l(u);return delete d.as,d.ref=m,h?U.createElement(U.Fragment,null,U.createElement(g,d),U.createElement(h,null)):U.createElement(g,d)});return a.className=l.className,a.displayName=`Styled.${s.displayName||s.name||s}`,a.selector=l.selector,a.toString=()=>l.selector,a[N]=l[N],a}}))(t),t},"q");function be(e,t,{checkForDefaultPrevented:n=!0}={}){return c(function(o){if(e==null||e(o),n===!1||!o.defaultPrevented)return t==null?void 0:t(o)},"handleEvent")}c(be,"$e42e1063c40fb3ef$export$b9ecd428b558ff10");function jt({prop:e,defaultProp:t,onChange:n=c(()=>{},"onChange")}){const[r,o]=Wt({defaultProp:t,onChange:n}),i=e!==void 0,l=i?e:r,s=ae(n),a=f.exports.useCallback(u=>{if(i){const g=typeof u=="function"?u(e):u;g!==e&&s(g)}else o(u)},[i,e,o,s]);return[l,a]}c(jt,"$71cd76cc60e0454e$export$6f32135080cb4c3");function Wt({defaultProp:e,onChange:t}){const n=f.exports.useState(e),[r]=n,o=f.exports.useRef(r),i=ae(t);return f.exports.useEffect(()=>{o.current!==r&&(i(r),o.current=r)},[r,o,i]),n}c(Wt,"$71cd76cc60e0454e$var$useUncontrolledState");function Lt(e){const t=f.exports.useRef({value:e,previous:e});return f.exports.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}c(Lt,"$010c2913dbd2fe3d$export$5cae361ad82dce8b");function Nt(e){const[t,n]=f.exports.useState(void 0);return te(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});const r=new ResizeObserver(o=>{if(!Array.isArray(o)||!o.length)return;const i=o[0];let l,s;if("borderBoxSize"in i){const a=i.borderBoxSize,u=Array.isArray(a)?a[0]:a;l=u.inlineSize,s=u.blockSize}else l=e.offsetWidth,s=e.offsetHeight;n({width:l,height:s})});return r.observe(e,{box:"border-box"}),()=>r.unobserve(e)}else n(void 0)},[e]),t}c(Nt,"$db6c3485150b8e66$export$1ab7ae714698c4b8");function Tt(e,t){return f.exports.useReducer((n,r)=>{const o=t[n][r];return o!=null?o:n},e)}c(Tt,"$fe963b355347cc68$export$3e6543de14f8614f");const Pe=c(e=>{const{present:t,children:n}=e,r=Ot(t),o=typeof n=="function"?n({present:r.isPresent}):f.exports.Children.only(n),i=we(r.ref,o.ref);return typeof n=="function"||r.isPresent?f.exports.cloneElement(o,{ref:i}):null},"$921a889cee6df7e8$export$99c2b779aa4e8b8b");Pe.displayName="Presence";function Ot(e){const[t,n]=f.exports.useState(),r=f.exports.useRef({}),o=f.exports.useRef(e),i=f.exports.useRef("none"),l=e?"mounted":"unmounted",[s,a]=Tt(l,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return f.exports.useEffect(()=>{const u=ee(r.current);i.current=s==="mounted"?u:"none"},[s]),te(()=>{const u=r.current,m=o.current;if(m!==e){const d=i.current,h=ee(u);e?a("MOUNT"):h==="none"||(u==null?void 0:u.display)==="none"?a("UNMOUNT"):a(m&&d!==h?"ANIMATION_OUT":"UNMOUNT"),o.current=e}},[e,a]),te(()=>{if(t){const u=c(g=>{const h=ee(r.current).includes(g.animationName);g.target===t&&h&&Te.exports.flushSync(()=>a("ANIMATION_END"))},"handleAnimationEnd"),m=c(g=>{g.target===t&&(i.current=ee(r.current))},"handleAnimationStart");return t.addEventListener("animationstart",m),t.addEventListener("animationcancel",u),t.addEventListener("animationend",u),()=>{t.removeEventListener("animationstart",m),t.removeEventListener("animationcancel",u),t.removeEventListener("animationend",u)}}else a("ANIMATION_END")},[t,a]),{isPresent:["mounted","unmountSuspended"].includes(s),ref:f.exports.useCallback(u=>{u&&(r.current=getComputedStyle(u)),n(u)},[])}}c(Ot,"$921a889cee6df7e8$var$usePresence");function ee(e){return(e==null?void 0:e.animationName)||"none"}c(ee,"$921a889cee6df7e8$var$getAnimationName");const Ae="Checkbox",[_t,Br]=ve(Ae),[Ft,Dt]=_t(Ae),Ht=f.exports.forwardRef((e,t)=>{const{__scopeCheckbox:n,name:r,checked:o,defaultChecked:i,required:l,disabled:s,value:a="on",onCheckedChange:u,...m}=e,[g,d]=f.exports.useState(null),h=we(t,S=>d(S)),b=f.exports.useRef(!1),v=g?Boolean(g.closest("form")):!0,[y=!1,x]=jt({prop:o,defaultProp:i,onChange:u});return f.exports.createElement(Ft,{scope:n,state:y,disabled:s},f.exports.createElement(J.button,E({type:"button",role:"checkbox","aria-checked":O(y)?"mixed":y,"aria-required":l,"data-state":Me(y),"data-disabled":s?"":void 0,disabled:s,value:a},m,{ref:h,onKeyDown:be(e.onKeyDown,S=>{S.key==="Enter"&&S.preventDefault()}),onClick:be(e.onClick,S=>{x(D=>O(D)?!0:!D),v&&(b.current=S.isPropagationStopped(),b.current||S.stopPropagation())})})),v&&f.exports.createElement(Gt,{control:g,bubbles:!b.current,name:r,value:a,checked:y,required:l,disabled:s,style:{transform:"translateX(-100%)"}}))}),Ut="CheckboxIndicator",Vt=f.exports.forwardRef((e,t)=>{const{__scopeCheckbox:n,forceMount:r,...o}=e,i=Dt(Ut,n);return f.exports.createElement(Pe,{present:r||O(i.state)||i.state===!0},f.exports.createElement(J.span,E({"data-state":Me(i.state),"data-disabled":i.disabled?"":void 0},o,{ref:t,style:{pointerEvents:"none",...e.style}})))}),Gt=c(e=>{const{control:t,checked:n,bubbles:r=!0,...o}=e,i=f.exports.useRef(null),l=Lt(n),s=Nt(t);return f.exports.useEffect(()=>{const a=i.current,u=window.HTMLInputElement.prototype,g=Object.getOwnPropertyDescriptor(u,"checked").set;if(l!==n&&g){const d=new Event("click",{bubbles:r});a.indeterminate=O(n),g.call(a,O(n)?!1:n),a.dispatchEvent(d)}},[l,n,r]),f.exports.createElement("input",E({type:"checkbox","aria-hidden":!0,defaultChecked:O(n)?!1:n},o,{tabIndex:-1,ref:i,style:{...e.style,...s,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))},"$e698a72e93240346$var$BubbleInput");function O(e){return e==="indeterminate"}c(O,"$e698a72e93240346$var$isIndeterminate");function Me(e){return O(e)?"indeterminate":e?"checked":"unchecked"}c(Me,"$e698a72e93240346$var$getState");const Yt=Ht,qt=Vt;var Zt={white:"#FFF",black:"#000",gray100:"#E1E1E6",gray200:"#A9A9B2",gray400:"#7C7C8A",gray500:"#505059",gray600:"#323238",gray700:"#29292E",gray800:"#202024",gray900:"#121214",ignite300:"#00B37E",ignite500:"#00875F",ignite700:"#015F43",ignite900:"#00291D"},Kt={xxs:"0.625rem",xs:"0.75rem",sm:"0.875rem",md:"1rem",lg:"1.125rem",xl:"1.25rem","2xl":"1.5rem","4xl":"2rem","5xl":"2.25rem","6xl":"3rem","7xl":"4rem","8xl":"4.5rem","9xl":"6rem"},Jt={regular:"400",medium:"500",bold:"700"},Xt={default:"Roboto, sans-serif",code:"monospace"},Qt={shorter:"125%",short:"140%",base:"160%",tall:"180%"},er={px:"1px",xs:"4px",sm:"6px",md:"8px",lg:"16px",full:"99999px"},tr={1:"0.25rem",2:"0.5rem",3:"0.75rem",4:"1rem",5:"1.25rem",6:"1.5rem",7:"1.75rem",8:"2rem",10:"2.5rem",12:"3rem",16:"4rem",20:"5rem",40:"10rem",64:"16rem",80:"20rem"},{styled:C,css:Ir,globalCss:Er,keyframes:je,getCssText:Pr,theme:Ar,createTheme:Mr,config:jr}=Mt({themeMap:{...Ie,height:"space",width:"space"},theme:{colors:Zt,fontSizes:Kt,fontWeights:Jt,fonts:Xt,lineHeights:Qt,radii:er,space:tr}}),rr=C(ot,{borderRadius:"$full",display:"inline-block",width:"$12",height:"$12",overflow:"hidden"}),nr=C(it,{width:"100%",height:"100%",objectFit:"cover",borderRadius:"inherit"}),or=C(st,{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"$gray600",color:"$gray800",svg:{width:"$6",height:"$6"}});function ir(e){return A(rr,{children:[$(nr,{...e}),$(or,{delayMs:600,children:$(He,{})})]})}c(ir,"Avatar2");ir.displayName="Avatar";var sr=C("div",{padding:"$4",borderRadius:"$md",backgroundColor:"$gray800",border:"1px solid $gray600"});sr.displayName="Box";var ar=C("button",{all:"unset",borderRadius:"$sm",fontSize:"$sm",fontWeight:"$medium",fontFamily:"$default",textAlign:"center",minWidth:120,boxSizing:"border-box",padding:"0 $4",display:"flex",alignItems:"center",justifyContent:"center",gap:"$2",cursor:"pointer",svg:{width:"$4",height:"$4"},"&:disabled":{cursor:"not-allowed"},variants:{variant:{primary:{color:"$white",background:"$ignite500","&:not(:disabled):hover":{background:"$ignite300"},"&:disabled":{backgroundColor:"$gray200"}},secondary:{color:"$ignite300",border:"2px solid $ignite500","&:not(:disabled):hover":{background:"$ignite500",color:"$white"},"&:disabled":{color:"$gray200",borderColor:"$gray200"}},tertiary:{color:"$gray100","&:not(:disabled):hover":{color:"$white"},"&:disabled":{color:"$gray600"}}},size:{sm:{height:38},md:{height:46}}},defaultVariants:{variant:"primary",size:"md"}});ar.displayName="Button";var lr=C(Yt,{all:"unset",width:"$6",height:"$6",backgroundColor:"$gray900",borderRadius:"$xs",lineHeight:0,cursor:"pointer",overflow:"hidden",boxSizing:"border-box",display:"flex",justifyContent:"center",alignItems:"center",border:"2px solid $gray900",'&[data-state="checked"]':{backgroundColor:"$ignite300"},"&:focus":{border:"2px solid $ignite300"}}),cr=je({from:{transform:"translateY(-100%)"},to:{transform:"translateY(0)"}}),dr=je({from:{transform:"translateY(0)"},to:{transform:"translateY(-100%)"}}),ur=C(qt,{color:"$white",width:"$4",height:"$4",'&[data-state="checked"]':{animation:`${cr} 200ms ease-out`},'&[data-state="unchecked"]':{animation:`${dr} 200ms ease-out`}});function fr(e){return $(lr,{...e,children:$(ur,{asChild:!0,children:$(Fe,{weight:"bold"})})})}c(fr,"Checkbox2");fr.displayName="Checkbox";var pr=C("h2",{fontFamily:"$default",lineHeight:"$shorter",margin:0,color:"$gray100",variants:{size:{sm:{fontSize:"$xl"},md:{fontSize:"$2xl"},lg:{fontSize:"$4xl"},xl:{fontSize:"$5xl"},"2xl":{fontSize:"$6xl"},"3xl":{fontSize:"$7xl"},"4xl":{fontSize:"$8xl"},"5xl":{fontSize:"$9xl"},"6xl":{fontSize:"$10xl"}}},defaultVariants:{size:"md"}});pr.displayName="Heading";var We=C("p",{fontFamily:"$default",lineHeight:"$base",margin:0,color:"$gray100",variants:{size:{xxs:{fontSize:"$xxs"},xs:{fontSize:"$xs"},sm:{fontSize:"$sm"},md:{fontSize:"$md"},lg:{fontSize:"$lg"},xl:{fontSize:"$xl"},"2xl":{fontSize:"$2xl"},"4xl":{fontSize:"$4xl"},"5xl":{fontSize:"$5xl"},"6xl":{fontSize:"$6xl"},"7xl":{fontSize:"$7xl"},"8xl":{fontSize:"$8xl"},"9xl":{fontSize:"$9xl"}}},defaultVariants:{size:"md"}});We.displayName="Text";var gr=C("div",{}),hr=C(We,{color:"$gray200",defaultVariants:{size:"xs"}}),mr=C("div",{display:"grid",gridTemplateColumns:"repeat(var(--steps-size), 1fr)",gap:"$2",marginTop:"$1"}),br=C("div",{height:"$1",borderRadius:"$px",backgroundColor:"$gray600",variants:{active:{true:{backgroundColor:"$gray100"}}}});function $r({size:e,currentStep:t=1}){return A(gr,{children:[A(hr,{children:["Passo ",t," de ",e]}),$(mr,{css:{"--steps-size":e},children:Array.from({length:e},(n,r)=>r+1).map(n=>$(br,{active:t>=n},n))})]})}c($r,"MultiStep");$r.displayName="MultiStep";var xr=C("textarea",{backgroundColor:"$gray900",padding:"$3 $4",borderRadius:"$sm",boxSizing:"border-box",border:"2px solid $gray900",fontFamily:"$default",fontSize:"$sm",color:"$white",fontWeight:"$regular",resize:"vertical",minHeight:80,"&:focus":{outline:0,borderColor:"$ignite300"},"&:disabled":{opacity:.5,cursor:"not-allowed"},"&:placeholder":{color:"$gray400"}});xr.displayName="TextArea";var Sr=C("div",{backgroundColor:"$gray900",padding:"$3 $4",borderRadius:"$sm",boxSizing:"border-box",border:"2px solid $gray900",display:"flex",alignItems:"baseline","&:has(input:focus)":{borderColor:"$ignite300"},"&:has(input:disabled)":{opacity:.5,cursor:"not-allowed"}}),kr=C("span",{fontFamily:"$default",fontSize:"$sm",color:"$gray400",fontWeight:"regular"}),yr=C("input",{fontFamily:"$default",fontSize:"$sm",color:"$white",fontWeight:"regular",background:"transparent",border:0,width:"100%","&:focus":{outline:0},"&:disabled":{cursor:"not-allowed"},"&:placeholder":{color:"$gray400"}});function Wr({prefix:e,...t}){return A(Sr,{children:[!!e&&$(kr,{children:e}),$(yr,{...t})]})}c(Wr,"TextInput");export{ir as A,sr as B,fr as C,pr as H,Se as I,$r as M,We as T,ar as a,xr as b,Wr as c,$e as r};
//# sourceMappingURL=index.12e13f45.js.map
