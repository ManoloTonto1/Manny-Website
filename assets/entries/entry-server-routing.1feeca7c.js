import{_ as r,s as u,d,r as c,q as o,h as p,C as f,t as _,j as v,O as y,P as h,M as x,L as C}from"../chunks/chunk-08454f8d.js";const i={},E={},F={},m={},b=[],L={},P=!0,R=[],w={onBeforeRoute:null},O=null,S=Object.assign({"/pages/index/index.page.tsx":()=>r(()=>import("./pages_index_index.page.90aec9c5.js"),["assets/entries/pages_index_index.page.90aec9c5.js","assets/chunks/chunk-e104bd84.js","assets/chunks/chunk-9dbeca4b.js","assets/static/index.page.1f73f9f2.css"]),"/renderer/_error.page.tsx":()=>r(()=>import("./renderer_error.page.9dc7d9fa.js"),["assets/entries/renderer_error.page.9dc7d9fa.js","assets/chunks/chunk-e104bd84.js"])}),z={...S};i[".page"]=z;const A=Object.assign({"/renderer/_default.page.client.tsx":()=>r(()=>import("./renderer_default.page.client.741959b0.js"),["assets/entries/renderer_default.page.client.741959b0.js","assets/chunks/chunk-e104bd84.js","assets/chunks/chunk-9dbeca4b.js","assets/static/default.page.client.71194e11.css"])}),H={...A};i[".page.client"]=H;const I=Object.freeze(Object.defineProperty({__proto__:null,invalidator:O,isGeneratedFile:P,neverLoaded:L,pageConfigGlobal:w,pageConfigs:R,pageFilesEager:E,pageFilesExportNamesEager:m,pageFilesExportNamesLazy:F,pageFilesLazy:i,pageFilesList:b},Symbol.toStringTag,{value:"Module"}));u(I);const g=d({withoutHash:!0});async function j(){const e=c();return o(e,{isHydration:!0,isBackwardNavigation:null}),o(e,await T(e._pageId)),B(),e}function B(){const e=d({withoutHash:!0});p(g===e,`URL manipulated before hydration finished (\`${g}\` to \`${e}\`). Ensure the hydration finishes with \`onHydrationEnd()\` before manipulating the URL.`)}async function T(e){const a={},{pageFilesAll:t,pageConfigs:l}=await f(!0);return o(a,{_pageFilesAll:t,_pageConfigs:l}),o(a,await _(t,l,e)),t.filter(n=>n.fileType!==".page.server").forEach(n=>{var s;v(!(!((s=n.fileExports)===null||s===void 0)&&s.onBeforeRender),`\`export { onBeforeRender }\` of ${n.filePath} is loaded in the browser but never executed (because you are using Server-side Routing). In order to reduce the size of you browser-side JavaScript, define \`onBeforeRender()\` in \`.page.server.js\` instead. See https://vite-plugin-ssr.com/onBeforeRender-isomorphic#server-routing`,{showStackTrace:!1,onlyOnce:!0})}),a}y();h(!0);U();async function U(){var e,a;const t=await j();await x(t,!1),C(t,"onHydrationEnd"),await((a=(e=t.exports).onHydrationEnd)===null||a===void 0?void 0:a.call(e,t))}
