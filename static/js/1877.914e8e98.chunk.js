"use strict";(self.webpackChunkdat_ve_xe=self.webpackChunkdat_ve_xe||[]).push([[1877],{1877:function(e,t,a){a.r(t);var n=a(9439),o=a(2791),i=a(3063),s=a(3360),r=a(5642),l=a(3147),d=a(1628),u=a(9230),c=a(184);t.default=function(){var e=(0,o.useContext)(r.I).token,t=(0,o.useState)({}),a=(0,n.Z)(t,2),h=a[0],p=a[1],x=(0,o.useState)({}),g=(0,n.Z)(x,2),b=g[0],m=g[1],f=(0,o.useState)([]),y=(0,n.Z)(f,2),j=y[0],v=y[1],Z=(0,o.useState)([]),k=(0,n.Z)(Z,2),S=k[0],w=k[1],N=(0,o.useState)([]),C=(0,n.Z)(N,2),T=(C[0],C[1],(0,o.useState)([])),L=(0,n.Z)(T,2),D=(L[0],L[1],(0,o.useState)([])),X=(0,n.Z)(D,2),F=(X[0],X[1],(0,o.useState)([])),O=(0,n.Z)(F,2),$=(O[0],O[1],(0,o.useState)([])),_=(0,n.Z)($,2),A=_[0],B=_[1],V=(0,o.useState)([]),z=(0,n.Z)(V,2),H=z[0],J=z[1],P=(0,o.useState)([]),q=(0,n.Z)(P,2),E=q[0],G=q[1],I=(0,o.useState)([]),Q=(0,n.Z)(I,2),R=Q[0],K=Q[1],M=(0,o.useState)(!1),U=(0,n.Z)(M,2),W=U[0],Y=U[1],ee=(0,o.useState)(""),te=(0,n.Z)(ee,2),ae=te[0],ne=te[1],oe=(0,o.useState)(""),ie=(0,n.Z)(oe,2),se=ie[0],re=ie[1],le=(0,o.useState)([]),de=(0,n.Z)(le,2),ue=de[0],ce=de[1],he=(0,o.useState)([]),pe=(0,n.Z)(he,2),xe=pe[0],ge=pe[1],be=(0,u.$G)().t;(0,o.useEffect)((function(){Number(ae)&&Number(se)&&(fetch("http://localhost:8080/api/thongke/admin/so-don",{method:"POST",headers:{Authorization:"Bearer "+e,"Content-Type":"application/json"},body:JSON.stringify({month:ae,year:se})}).then((function(e){return e.json()})).then((function(e){200==e.status&&ce(e.object)})),fetch("http://localhost:8080/api/thongke/admin/doanh-thu",{method:"POST",headers:{Authorization:"Bearer "+e,"Content-Type":"application/json"},body:JSON.stringify({month:ae,year:se})}).then((function(e){return e.json()})).then((function(e){200==e.status&&ge(e.object)})))}),[ae,se]);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("div",{style:{textAlign:"center",marginBottom:"30px",marginTop:"20px"},children:(0,c.jsx)("h1",{children:be("thongke")})}),(0,c.jsxs)("div",{style:{margin:"20px",backgroundColor:"white",borderRadius:"5px"},className:"shadow",children:[(0,c.jsxs)("div",{style:{display:"flex"},children:[(0,c.jsx)(i.Z.Label,{style:{margin:"15px"},children:"Th\xe1ng:"}),(0,c.jsx)(i.Z.Control,{onChange:function(e){return ne(e.target.value)},type:"text",style:{margin:"10px",width:"20%"},placeholder:be("nhapthangcanthongke")}),(0,c.jsx)(i.Z.Label,{style:{margin:"15px"},children:"N\u0103m:"}),(0,c.jsx)(i.Z.Control,{onChange:function(e){return re(e.target.value)},type:"text",style:{margin:"10px",width:"20%"},placeholder:be("nhapnamcanthongke")})]}),(0,c.jsxs)("div",{style:{display:"flex"},children:[(0,c.jsx)(s.Z,{style:{margin:"10px"},onClick:function(){Number(ae)&&Number(se)?Number(ae)>12||Number(ae)<0?window.alert(be("thangphainamtrongkhoangtu1den12")):(p({labels:ue.map((function(e){return e.tenNhaXe})),datasets:[{label:be("sovebanduoc"),backgroundColor:["#3e95cd","#8e5ea2","#3cba9f","#e8c3b9","#c45850"],data:ue.map((function(e){return e.soSuatVe}))}]}),B({labels:ue.map((function(e){return e.tenNhaXe})),datasets:[{label:be("tyle"),backgroundColor:["#3e95cd","#8e5ea2","#3cba9f","#e8c3b9","#c45850"],data:ue.map((function(e){return e.tyLeVe}))}]}),m({responsive:!0,plugins:{legend:{position:"top"},title:{display:!0,text:be("sovebanduoccuacacnhaxe")}}}),J({responsive:!0,plugins:{legend:{position:"top"},title:{display:!0,text:be("tylephantramsovebanduoccuacacnhaxe")}}}),v({labels:ue.map((function(e){return e.tenNhaXe})),datasets:[{label:be("sohanghoaduocgiao"),backgroundColor:["#3e95cd","#8e5ea2","#3cba9f","#e8c3b9","#c45850"],data:ue.map((function(e){return e.soSuatHangHoa}))}]}),G({labels:ue.map((function(e){return e.tenNhaXe})),datasets:[{label:be("tyle"),backgroundColor:["#3e95cd","#8e5ea2","#3cba9f","#e8c3b9","#c45850"],data:ue.map((function(e){return e.tyLeVe}))}]}),K({responsive:!0,plugins:{legend:{position:"top"},title:{display:!0,text:be("tylephantramsohanghoaduocgiaocuacacnhaxe")}}}),w({responsive:!0,plugins:{legend:{position:"top"},title:{display:!0,text:be("sohanghoaduocgiaocuacacnhaxe")}}}),Y("TanSuat")):window.alert("thangvanamphailaso")},children:be("thongketansuatsudung")}),(0,c.jsx)(s.Z,{style:{margin:"10px"},onClick:function(){Number(ae)&&Number(se)?Number(ae)>12||Number(ae)<0?window.alert(be("thangphainamtrongkhoangtu1den12")):(p({labels:xe.map((function(e){return e.tenNhaXe})),datasets:[{label:be("doanhthu"),backgroundColor:["#3e95cd","#8e5ea2","#3cba9f","#e8c3b9","#c45850"],data:xe.map((function(e){return e.doanhThu}))}]}),B({labels:xe.map((function(e){return e.tenNhaXe})),datasets:[{label:be("tyle"),backgroundColor:["#3e95cd","#8e5ea2","#3cba9f","#e8c3b9","#c45850"],data:xe.map((function(e){return e.tyLeDoanhThu}))}]}),m({responsive:!0,plugins:{legend:{position:"top"},title:{display:!0,text:be("doanhthucuacacnhaxe")}}}),J({responsive:!0,plugins:{legend:{position:"top"},title:{display:!0,text:be("tylephantramdoanhthucuacacnhaxe")}}}),Y("DoanhThu")):window.alert(be("thangvanamphailaso"))},children:be("thongkedoanhthu")})]}),"DoanhThu"===W?(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)("div",{style:{display:"flex",overflow:"auto"},children:[(0,c.jsx)("div",{style:{margin:"20px",border:"1px solid black",height:"500px",width:"550px"},children:(0,c.jsx)(l.Z,{data:h,options:b})}),(0,c.jsx)("div",{style:{margin:"20px",border:"1px solid black",height:"500px",width:"550px"},children:(0,c.jsx)(d.Z,{data:A,options:H})})]})}):"TanSuat"===W?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)("div",{style:{display:"flex",overflow:"auto"},children:[(0,c.jsx)("div",{style:{margin:"20px",border:"1px solid black",height:"500px",width:"550px"},children:(0,c.jsx)(l.Z,{data:h,options:b})}),(0,c.jsx)("div",{style:{margin:"20px",border:"1px solid black",height:"500px",width:"550px"},children:(0,c.jsx)(d.Z,{data:A,options:H})})]}),(0,c.jsxs)("div",{style:{display:"flex"},children:[(0,c.jsx)("div",{style:{margin:"20px",border:"1px solid black",height:"500px",width:"550px"},children:(0,c.jsx)(l.Z,{data:j,options:S})}),(0,c.jsx)("div",{style:{margin:"20px",border:"1px solid black",height:"500px",width:"550px"},children:(0,c.jsx)(d.Z,{data:E,options:R})})]})]}):void 0]})]})}},3147:function(e,t,a){var n=a(3623),o=a(5967),i=a(184);o.kL.register(o.uw,o.f$,o.ZL,o.Dx,o.u,o.De);t.Z=function(e){var t=e.data,a=e.options;return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(n.$Q,{data:t,options:a})})}},1628:function(e,t,a){var n=a(3623),o=a(5967),i=a(184);o.kL.register(o.uw,o.f$,o.ZL,o.qi,o.Dx,o.u,o.De);t.Z=function(e){var t=e.data,a=e.options;return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(n.by,{data:t,options:a})})}}}]);
//# sourceMappingURL=1877.914e8e98.chunk.js.map