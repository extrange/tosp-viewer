(this["webpackJsonptosp-viewer"]=this["webpackJsonptosp-viewer"]||[]).push([[0],{147:function(e,t){},149:function(e,t){},170:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(33),r=n.n(i),o=n(77),s=n(13),u=n.p+"static/media/data.0f1454e7.csv",l=n(99),d=n.n(l),O=n(220),m=n(215),p=n(216),j=n(222),P=n(218),b=n(223),h=n(105),f=n(2),x=function(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(),r=Object(s.a)(i,2),l=r[0],x=r[1];return Object(a.useEffect)((function(){return fetch(u).then((function(e){return e.text()})).then((function(e){var t=d()(e,{columns:!0,skip_empty_lines:!0});c(t)}))}),[]),Object(f.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",maxWidth:"800px",margin:"0 auto"},children:[Object(f.jsx)(O.a,{variant:"h4",align:"center",gutterBottom:!0,sx:{marginTop:"10px"},children:"TOSP Table Viewer"}),Object(f.jsx)(O.a,{variant:"caption",align:"center",gutterBottom:!0,children:"Last updated 9/11/21"}),Object(f.jsx)(m.a,{options:n.map((function(e){return{id:e.id,name:e["TOSP Description"],commonName:e["Common name"],code:e["TOSP code"]}})),getOptionLabel:function(e){return"".concat(e.id,": ").concat(e.name)},filterOptions:function(e,t){var n=t.inputValue;return n?Object(h.a)(e,n,{keys:["name","commonName","code"]}):e},sx:{width:"100%"},renderInput:function(e){return Object(f.jsx)(p.a,Object(o.a)(Object(o.a)({},e),{},{label:"Procedure Name",placeholder:"Enter a procedure name or TOSP code"}))},onChange:function(e,t){return x(t?n.find((function(e){return e.id===t.id})):null)}}),Object(f.jsx)(j.a,{dense:!0,children:l?["id","TOSP code","TOSP Description","TOSP table no.","TOSP Common name","Setting","Ward Type","P25 Bill","P50 Bill","P75 Bill","P25 Operation Fee","P50 Operation Fee","P75 Operation Fee","P25 Surgeon Fee","P50 Surgeon Fee","P75 Surgeon Fee","P25 Anaesthetist Fee","P50 Anaesthetist Fee","P75 Anaesthetist Fee","P25 Facility Fee","P50 Facility Fee","P75 Facility Fee","P25 Implant Fee","P50 Implant Fee","P75 Implant Fee","P25 Other Fee","P50 Other Fee","P75 Other Fee"].map((function(e){return Object(f.jsx)(P.a,{children:Object(f.jsx)(b.a,{primary:e,secondary:l[e]})},e)})):Object(f.jsx)(O.a,{children:"Select a procedure to view details"})})]})},F=n(214),S=n(219),g=n(104),v=(n(166),n(167),n(168),n(169),Object(g.a)({palette:{mode:"dark"}}));r.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsxs)(S.a,{theme:v,children:[Object(f.jsx)(F.a,{}),Object(f.jsx)(x,{})]})}),document.getElementById("root"))}},[[170,1,2]]]);
//# sourceMappingURL=main.ca01b394.chunk.js.map