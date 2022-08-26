import{a as U,b as C,h as i,aA as w,$ as F,r as y,w as N,u as e,Q as h,e as a,k as z,J as m}from"./index.b199aced.js";import{aO as L,x as D,aP as $,r as q}from"./base.c04c462c.js";/* empty css                */import{Z as R,a as T}from"./ZFormItem.725d7645.js";/* empty css               */import{E as I}from"./input-number.9c25a8b3.js";/* empty css              */import{l as M,u as Z}from"./admin-setting.c05a41ac.js";import{E as A}from"./request.74fd7f7e.js";import{b as k}from"./route-block.9b0645f8.js";import{_ as G}from"./plugin-vue_export-helper.21dcd24c.js";import{E as S}from"./index.7ec8f0b3.js";import{r as J}from"./BadgeCheckIcon.dcbfd639.js";import{E as O}from"./index.a3fa5686.js";import{v as P}from"./directive.e2e198a2.js";import"./index.5cf4e3bb.js";import"./event.776e7e11.js";import"./index.ce3b681b.js";import"./index.7fa0be7b.js";import"./event.3ec63147.js";import"./index.07ba5ae8.js";import"./scroll.c9434214.js";import"./focus-trap.348910bc.js";import"./validator.30a1b844.js";function Q(p,u){return U(),C("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[i("path",{"fill-rule":"evenodd",d:"M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z","clip-rule":"evenodd"})])}function j(){const{data:p,loading:u,reload:t}=w(M,{formatResult:_=>_.data}),{loading:f,run:c}=w(Z,{manual:!0,onSuccess(){A({message:"\u4FDD\u5B58\u6210\u529F",type:"success"})}});return{data:p,dataLoading:u,reload:t,saveData:()=>{c(p.value)},saveLoading:f}}const H=m(" \u7AD9\u70B9\u4FE1\u606F "),K=m(" \u8BF7\u586B\u5199\u60A8\u7684\u7AD9\u70B9\u4FE1\u606F "),W=m("\u6B64\u5730\u5740\u7528\u4E8E\u751F\u6210\u76F4\u94FE\u53CA\u672C\u6B21\u5B58\u50A8\u4E0B\u8F7D\u4F7F\u7528\uFF0C\u8BF7\u52A1\u5FC5\u4FDD\u6301\u548C\u670D\u52A1\u7AEF\u5730\u5740\u4E00\u6837."),X=m("\u524D\u540E\u7AEF\u5206\u79BB\u540E\uFF0C\u9700\u914D\u7F6E\u6B64\u5730\u5740\uFF0C\u4F1A\u5F71\u54CD 401\u3001403\u3001404 \u9875\u9762\u7684\u8DF3\u8F6C."),Y=m("\u7528\u4E8E\u7BA1\u7406\u5458\u9875\u9762\u53F3\u4E0A\u89D2\u5934\u50CF\u5730\u5740\uFF0C\u63A8\u8350\u5C3A\u5BF8\u4E3A 35 * 35."),ee=m("\u4FDD\u5B58\u8BBE\u7F6E"),B={__name:"site-setting",setup(p){let u=F();const{data:t,dataLoading:f,saveData:c,saveLoading:V}=j();let _=y({siteName:[{required:!0,message:"\u8BF7\u8F93\u5165\u7AD9\u70B9\u540D\u79F0"}],domain:[{required:!0,message:"\u8BF7\u8F93\u5165\u540E\u7AEF\u7AD9\u70B9\u57DF\u540D"},{type:"url",message:"\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u57DF\u540D"}],frontDomain:[{type:"url",message:"\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u57DF\u540D"}],avatar:[{type:"url",message:"\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u5934\u50CF\u5730\u5740\uFF0C\u9700\u4EE5 http \u6216 https \u5F00\u5934"}]});const b=y(),g=()=>{b.value.validate(v=>{v&&c()})};return N(()=>f.value,(v,o)=>{if(o===!0){let l=u.zfileConfig.baseUrl||window.location.origin,r=t.value.domain;if(l!==r)S.confirm(`\u68C0\u6D4B\u5230\u670D\u52A1\u7AEF\u5730\u5740\u4E3A ${l}\uFF0C\u5F53\u524D\u914D\u7F6E\u7AD9\u70B9\u57DF\u540D\u4E3A ${r}\uFF0C\u662F\u5426\u81EA\u52A8\u8FDB\u884C\u4FEE\u6B63\uFF1F\uFF08\u4E0D\u4FEE\u6B63\u53EF\u80FD\u4F1A\u5F71\u54CD\u4E0B\u8F7D\u3001\u6587\u4EF6\u5939\u52A0\u5BC6\u548C\u6587\u6863\u9884\u89C8\u529F\u80FD\uFF09`,"\u63D0\u793A",{confirmButtonText:"\u786E\u5B9A",cancelButtonText:"\u53D6\u6D88",type:"warning",callback:s=>{s==="confirm"&&(t.value.domain=l,g())}});else{let s=t.value.frontDomain,d=window.location.origin;u.zfileConfig.baseUrl!==""&&s!==d&&S.confirm(`\u68C0\u6D4B\u5230\u5F53\u524D\u4E3A\u524D\u540E\u7AEF\u5206\u79BB\u6A21\u5F0F\uFF0C\u8BBF\u95EE\u57DF\u540D\u4E3A ${d}\uFF0C\u5F53\u524D\u914D\u7F6E\u524D\u7AEF\u7AD9\u70B9\u57DF\u540D\u4E3A ${s}\uFF0C\u662F\u5426\u81EA\u52A8\u8FDB\u884C\u4FEE\u6B63\uFF1F\uFF08\u4E0D\u4FEE\u6B63\u53EF\u80FD\u4F1A\u9632\u76D7\u94FE\u529F\u80FD\uFF09`,"\u63D0\u793A",{confirmButtonText:"\u786E\u5B9A",cancelButtonText:"\u53D6\u6D88",type:"warning",callback:x=>{x==="confirm"&&(t.value.frontDomain=d,g())}})}}}),(v,o)=>{const l=O,r=R,s=I,d=q,x=T,E=P;return e(t)?h((U(),C(x,{key:0,model:e(t),rules:e(_),ref_key:"siteSettingForm",ref:b},{"form-title":a(()=>[H]),"form-sub-title":a(()=>[K]),footer:a(()=>[i(d,{type:"primary",size:"default",icon:e(J),onClick:g},{default:a(()=>[ee]),_:1},8,["icon"])]),default:a(()=>[i(r,{prop:"siteName",label:"\u7AD9\u70B9\u540D\u79F0"},{default:a(()=>[i(l,{id:"siteName","prefix-icon":e(L),modelValue:e(t).siteName,"onUpdate:modelValue":o[0]||(o[0]=n=>e(t).siteName=n)},null,8,["prefix-icon","modelValue"])]),_:1}),i(r,{prop:"domain",label:"\u540E\u7AEF\u7AD9\u70B9\u57DF\u540D"},{tips:a(()=>[W]),default:a(()=>[i(l,{id:"domain","prefix-icon":e(D),modelValue:e(t).domain,"onUpdate:modelValue":o[1]||(o[1]=n=>e(t).domain=n)},null,8,["prefix-icon","modelValue"])]),_:1}),i(r,{prop:"frontDomain",label:"\u524D\u7AEF\u7AD9\u70B9\u57DF\u540D"},{tips:a(()=>[X]),default:a(()=>[i(l,{"prefix-icon":e(D),modelValue:e(t).frontDomain,"onUpdate:modelValue":o[2]||(o[2]=n=>e(t).frontDomain=n)},null,8,["prefix-icon","modelValue"])]),_:1}),i(r,{prop:"avatar",label:"\u5934\u50CF\u5730\u5740"},{tips:a(()=>[Y]),default:a(()=>[i(l,{id:"avatar","prefix-icon":e($),modelValue:e(t).avatar,"onUpdate:modelValue":o[3]||(o[3]=n=>e(t).avatar=n)},null,8,["prefix-icon","modelValue"])]),_:1}),i(r,{label:"\u5907\u6848\u53F7"},{default:a(()=>[i(l,{id:"icp","prefix-icon":e(Q),modelValue:e(t).icp,"onUpdate:modelValue":o[4]||(o[4]=n=>e(t).icp=n)},null,8,["prefix-icon","modelValue"])]),_:1}),i(r,{label:"\u6700\u5927\u540C\u65F6\u4E0A\u4F20\u6587\u4EF6\u6570"},{default:a(()=>[i(s,{id:"maxFileUploads",modelValue:e(t).maxFileUploads,"onUpdate:modelValue":o[5]||(o[5]=n=>e(t).maxFileUploads=n),min:1,max:99},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])),[[E,e(V)]]):z("",!0)}}};typeof k=="function"&&k(B);var Se=G(B,[["__scopeId","data-v-121e9c7e"]]);export{Se as default};