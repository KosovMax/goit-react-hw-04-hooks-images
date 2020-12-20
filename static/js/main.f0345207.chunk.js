(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{64:function(e,t,c){},65:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c(0),o=c(7),r=c.n(o),s=c(4),i=c(10),l=c(5),u=c(19),d=c.n(u);function j(e){var t=e.onSearch,c=Object(a.useState)(""),o=Object(l.a)(c,2),r=o[0],s=o[1];return Object(n.jsx)("header",{className:"Searchbar",children:Object(n.jsxs)("form",{className:"SearchForm",onSubmit:function(e){e.preventDefault(),t(r)},children:[Object(n.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(n.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(n.jsx)("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",name:"search",value:r,onChange:function(e){var t=e.target;s(t.value)}})]})})}function h(e){var t=e.id,c=e.src,a=e.alt,o=e.showIdModel;return Object(n.jsx)("li",{className:"ImageGalleryItem",children:Object(n.jsx)("img",{src:c,alt:a,onClick:function(){return o(t)},className:"ImageGalleryItem-image"})})}function b(e){var t=e.imageGalleries,c=e.showIdModel;return Object(n.jsx)("ul",{className:"ImageGallery",children:t.map((function(e){var t=e.id,a=e.webformatURL;return Object(n.jsx)(h,{id:t,src:a,showIdModel:c},t)}))})}function f(e){var t=e.onClick,c=e.children,a=e.allyProps;return Object(n.jsx)("div",{style:{textAlign:"center"},children:Object(n.jsx)("button",Object(s.a)(Object(s.a)({type:"button",onClick:t,className:"Button"},a),{},{children:c}))})}j.defaultProps={onSearch:function(){}},h.defaultProps={id:0,src:"https://dummyimage.com/640x480/2a2a2a/ffffff&text=No+image",alt:""},b.defaultProps={imageGalleries:[]},f.defaultProps={onClick:function(){return null},children:null};var m=c(2),O=c.n(m),p=document.querySelector("#modal-root");function g(e){var t=this,c=e.src,r=e.closeModal,s=function(e){"Escape"===e.key&&t.props.closeModal()};return Object(a.useEffect)((function(){return window.addEventListener("keydown",s),function(){window.removeEventListener("keydown",s)}}),[s]),Object(o.createPortal)(Object(n.jsx)("div",{className:"Overlay",onClick:function(e){e.currentTarget===e.target&&r()},children:Object(n.jsx)("div",{className:"Modal",children:Object(n.jsx)("img",{src:c,alt:""})})}),p)}g.defaultProps={src:"",closeModal:function(){}},g.defaultProps={src:O.a.string.isRequired,closeModal:O.a.func};var v=c(20),w=c.n(v),x=function(e){var t=e.searchQuery,c=void 0===t?"":t,n=e.page,a=void 0===n?1:n,o=e.perPage,r=void 0===o?12:o;return w.a.get("https://pixabay.com/api/?q=".concat(c,"&page=").concat(a,"&key=").concat("19319242-70903095163a85f904f3acecb","&image_type=photo&orientation=horizontal&per_page=").concat(r)).then((function(e){return e.data.hits}))};function y(e,t){switch(t){case"go":return e+1;case"clear":return 1;default:throw new Error("Unsuported action type ".concat(t))}}function S(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),c=t[0],o=t[1],r=Object(a.useState)(""),u=Object(l.a)(r,2),h=u[0],m=u[1],O=Object(a.useState)(!1),p=Object(l.a)(O,2),v=p[0],w=p[1],S=Object(a.useState)(null),k=Object(l.a)(S,2),N=k[0],M=k[1],I=Object(a.useState)({show:!1,id:0}),P=Object(l.a)(I,2),C=P[0],F=P[1],E=Object(a.useReducer)(y,0),G=Object(l.a)(E,2),L=G[0],q=G[1];Object(a.useEffect)((function(){""!==h.trim()&&(w(!0),x({searchQuery:h,page:L}).then((function(e){o((function(t){return[].concat(Object(i.a)(t),Object(i.a)(e))}))})).catch((function(e){return M(e)})).finally((function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"}),w(!1)})))}),[h,L]);var R=Object(a.useMemo)((function(){return c.find((function(e){return e.id===C.id}))}),[c,C.id]);console.log(C);return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(j,{onSearch:function(e){h!==e&&(m(e),o([]),q("clear"))}}),N&&Object(n.jsxs)("p",{children:["Whoops, something went wrong: ",N.message]}),c.length>0&&Object(n.jsx)(b,{imageGalleries:c,showIdModel:function(e){F((function(t){return Object(s.a)(Object(s.a)({},t),{},{id:e})})),F((function(e){return Object(s.a)(Object(s.a)({},e),{},{show:!0})}))}}),v&&Object(n.jsx)(d.a,{type:"Oval",color:"#00BFFF",height:100,width:100,style:{textAlign:"center"}}),c.length>0&&Object(n.jsx)(f,{onClick:function(){return q("go")},children:"Load more"}),C.show&&Object(n.jsx)(g,{src:R.largeImageURL,closeModal:function(){F((function(e){return Object(s.a)(Object(s.a)({},e),{},{show:!e.show})}))}})]})}c(64);r.a.render(Object(n.jsx)(S,{}),document.querySelector("#root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.f0345207.chunk.js.map