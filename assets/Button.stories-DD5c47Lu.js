import{r as g}from"./index-CEThVCg_.js";var _={exports:{}},c={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var k=g,h=Symbol.for("react.element"),E=Symbol.for("react.fragment"),S=Object.prototype.hasOwnProperty,O=k.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,R={key:!0,ref:!0,__self:!0,__source:!0};function v(o,r,n){var e,t={},i=null,p=null;n!==void 0&&(i=""+n),r.key!==void 0&&(i=""+r.key),r.ref!==void 0&&(p=r.ref);for(e in r)S.call(r,e)&&!R.hasOwnProperty(e)&&(t[e]=r[e]);if(o&&o.defaultProps)for(e in r=o.defaultProps,r)t[e]===void 0&&(t[e]=r[e]);return{$$typeof:h,type:o,key:i,ref:p,props:t,_owner:O.current}}c.Fragment=E;c.jsx=v;c.jsxs=v;_.exports=c;var w=_.exports;function x({color:o,children:r,onClick:n}){return w.jsx("button",{onClick:n,style:{fontSize:22,color:"white",background:o==="primary"?"var(--primary-color)":"var(--secondary-color)"},children:r})}x.__docgenInfo={description:"",methods:[],displayName:"Button",props:{color:{required:!0,tsType:{name:"union",raw:'"primary" | "secondary"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'}]},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const j={title:"Example/Button",component:x},a={args:{children:"click me",color:"primary"}},s={args:{children:"click me",color:"secondary"}};var l,m,d;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    children: "click me",
    color: "primary"
  }
}`,...(d=(m=a.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,y,f;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: "click me",
    color: "secondary"
  }
}`,...(f=(y=s.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};const P=["Primary","Secondary"];export{a as Primary,s as Secondary,P as __namedExportsOrder,j as default};
