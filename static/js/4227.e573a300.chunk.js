"use strict";(self.webpackChunkdat_ve_xe=self.webpackChunkdat_ve_xe||[]).push([[4227],{4227:function(e,n,t){t.r(n),t.d(n,{default:function(){return D}});var i=t(9439),s=t(2791),r=t(7022),a=t(9743),l=t(2677),c=t(9140),o=t(2592),d=t(3360),h=t(1087),x=t(7689),u=t(39),m=t(4047),g=t(828),j=t(4651),f=t(1457),p=t(9230),v=t(3853),Z=t(2062),b=t.n(Z),y=t(184);var D=function(){var e=(0,s.useContext)(m.I).account,n=(0,s.useState)([]),t=(0,i.Z)(n,2),Z=t[0],D=t[1],N=(0,s.useState)([]),C=(0,i.Z)(N,2),k=C[0],w=C[1],X=(0,s.useState)([]),T=(0,i.Z)(X,2),S=T[0],B=T[1],F=new Date,I=(0,h.lr)(),G=(0,i.Z)(I,1)[0],O=(0,s.useState)(G.get("diemDi")),_=(0,i.Z)(O,2),A=_[0],E=_[1],M=(0,s.useState)(G.get("diemDen")),P=(0,i.Z)(M,2),Y=P[0],L=P[1],Q=function(e){var n;if(e.getDate()<10||e.getMonth()<9){var t=e.getDate(),i=e.getMonth()+1;t<10&&(t="0"+t),i<9&&(i="0"+i),n=e.getFullYear()+"-"+i+"-"+t}else n=e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate();return n},U=(0,s.useState)(G.get("date")||Q(F)),V=(0,i.Z)(U,2),W=V[0],q=V[1];(0,s.useEffect)((function(){(0,u.QY)().then((function(e){if(e){for(var n=[],t=0;t<e.length;t++)n.indexOf(e[t].tinhThanh)<0&&n.push(e[t].tinhThanh);B(n)}}));var e={benXeDi:A,benXeDen:Y,date:W};A||Y||W?(0,u.UU)(e).then((function(e){console.log(e),D(e||[])})):D([]),fetch("http://localhost:8081/api/thongke/nguoidung/sao-trung-binh/all").then((function(e){return e.json()})).then((function(e){e.object&&w(e.object)}))}),[A,Y,W]),(0,s.useEffect)((function(){window.scrollTo(0,0)}),[]);var H=(0,x.s0)(),R=(0,p.$G)().t;return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(r.Z,{style:{marginTop:"50px",marginBottom:"50px"},children:(0,y.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:(0,y.jsx)("div",{className:"search-form-container shadow",children:(0,y.jsxs)(a.Z,{children:[(0,y.jsx)(l.Z,{md:10,children:(0,y.jsx)("div",{className:"search-form-border",children:(0,y.jsx)("div",{style:{margin:"0px 10px"},children:(0,y.jsxs)(a.Z,{children:[(0,y.jsxs)(l.Z,{md:4,children:[(0,y.jsx)("div",{className:"search-form-label",children:R("\u0110i\u1ec3m \u0111i")}),(0,y.jsxs)("select",{className:"search-form-select",id:"DiemDi",onChange:function(e){return E(e.target.value)},children:[S.map((function(e){return e!==A?(0,y.jsx)("option",{value:e,children:e},"ttdi".concat(e)):(0,y.jsx)("option",{selected:!0,value:e,children:e},"ttdi".concat(e))})),(0,y.jsx)("option",{hidden:!0,children:R("Ch\u1ecdn \u0111i\u1ec3m \u0111i")})]})]}),(0,y.jsx)(l.Z,{md:1,children:(0,y.jsx)("div",{className:"search-form-line",children:(0,y.jsx)("div",{className:"search-form-line-icon",onClick:function(e){e.preventDefault();var n=A;E(Y),L(n)},children:(0,y.jsx)(j.TFW,{})})})}),(0,y.jsxs)(l.Z,{md:4,children:[(0,y.jsx)("div",{className:"search-form-label",children:R("\u0110i\u1ec3m \u0111\u1ebfn")}),(0,y.jsxs)("select",{className:"search-form-select",id:"DiemDen",onChange:function(e){return L(e.target.value)},children:[S.map((function(e){return e!==Y?(0,y.jsx)("option",{value:e,children:e},"ttden".concat(e)):(0,y.jsx)("option",{selected:!0,value:e,children:e},"ttden".concat(e))})),(0,y.jsx)("option",{hidden:!0,children:R("Ch\u1ecdn \u0111i\u1ec3m \u0111\u1ebfn")})]})]}),(0,y.jsx)(l.Z,{md:3,children:(0,y.jsx)("input",{style:{margin:"20px 0px"},class:"form-control",type:"date",required:!0,defaultValue:W||Q(F),onChange:function(e){return q(e.target.value)},min:(new Date).toISOString().split("T")[0]})})]})})})}),(0,y.jsx)(l.Z,{md:2,children:(0,y.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%"},children:(0,y.jsx)("button",{className:"search-form-button",children:R("T\xecm ki\u1ebfm")})})})]})})})}),(0,y.jsxs)("h1",{style:{textAlign:"center",marginBottom:"50px"},children:[R("T\u1ea5t c\u1ea3 c\xe1c tuy\u1ebfn xe trong ng\xe0y")," ",new Date(W).toLocaleDateString("vi")]}),(0,y.jsx)(r.Z,{style:{maxWidth:"1100px",width:"85%"},children:(0,y.jsx)(a.Z,{children:Z.map((function(n){return(0,y.jsx)(y.Fragment,{children:(0,y.jsx)(c.Z,{className:"tuyen-xe-card",children:(0,y.jsxs)(a.Z,{children:[(0,y.jsx)(l.Z,{xs:12,md:3,lg:3,style:{display:"flex",justifyContent:"center"},children:(0,y.jsx)("div",{style:{margin:"10px"},children:(0,y.jsx)(o.Z,{src:f,style:{height:"100%",width:"100%",objectFit:"cover"}})})}),(0,y.jsx)(l.Z,{xs:6,md:5,lg:5,children:(0,y.jsxs)("div",{style:{margin:"10px"},children:[(0,y.jsx)(a.Z,{children:k.map((function(e){if(e.id==n.xe.nhaXe.id)return(0,y.jsxs)("h5",{children:[n.xe.nhaXe.tenNhaXe," ",(0,y.jsxs)("span",{className:"so-sao-tuyen-xe-span",children:[(0,y.jsx)("i",{className:"fa fa-star"})," ",R("".concat(e.saoTrungBinh," sao"))]})]})}))}),(0,y.jsx)(a.Z,{children:(0,y.jsx)("label",{style:{color:"gray"},children:n.xe.loaiXe.tenLoaiXe})}),(0,y.jsx)(a.Z,{children:(0,y.jsxs)("span",{children:[(0,y.jsx)(v.Q8x,{}),(0,y.jsxs)("span",{style:{margin:"0px 10px"},children:[n.benXeDi.tenBenXe," (",n.benXeDi.tinhThanh,")"]})]})}),(0,y.jsx)("div",{className:"duong-dut-net-div",children:(0,y.jsx)("span",{className:"thoi-gian-hanh-trinh-tuyen-xe-span",children:n.thoiGianHanhTrinh})}),(0,y.jsx)(a.Z,{children:(0,y.jsxs)("span",{children:[(0,y.jsx)(g.opg,{}),(0,y.jsxs)("span",{style:{margin:"0px 10px"},children:[n.benXeDen.tenBenXe," (",n.benXeDen.tinhThanh,")"]})]})}),(0,y.jsx)(a.Z,{children:(0,y.jsxs)("span",{className:"gio-khoi-hanh-tuyen-xe-span",children:[R("Gi\u1edd kh\u1edfi h\xe0nh")," ",n.gioDi]})})]})}),(0,y.jsxs)(l.Z,{xs:6,md:4,lg:4,children:[(0,y.jsx)(a.Z,{style:{margin:"10px",textAlign:"right"},children:(0,y.jsxs)("label",{className:"gia-tuyen-xe-span",children:[(t=n.giaVe.toString(),t.split("").reverse().reduce((function(e,n,t){return(t%3?n:n+".")+e}))),"\u0111"]})}),(0,y.jsx)(a.Z,{style:{margin:"20px 10px 10px 10px",textAlign:"right"}}),(0,y.jsxs)(a.Z,{children:[(0,y.jsx)(d.Z,{onClick:function(){e?function(e){H("/dat-ve-xe/"+e.id)}(n):b()({title:R("B\u1ea1n ph\u1ea3i \u0111\u0103ng nh\u1eadp \u0111\u1ec3 \u0111\u1eb7t v\xe9!!!"),text:"",icon:"info",button:"Ok"})},style:{backgroundColor:"green",margin:"10px 0",border:"none",width:"90%"},children:R("\u0110\u1eb7t v\xe9")}),(0,y.jsx)(d.Z,{onClick:function(){e?function(e){H("/giao-hang/"+e.id)}(n):b()({title:R("B\u1ea1n ph\u1ea3i \u0111\u0103ng nh\u1eadp \u0111\u1ec3 nh\u1edd giao h\xe0ng!!!"),text:"",icon:"info",button:"Ok"})},style:{backgroundColor:"blue",margin:"10px 0",border:"none",width:"90%"},children:R("Giao h\xe0ng")})]})]})]})})});var t}))})})]})}},2592:function(e,n,t){var i=t(1413),s=t(5987),r=t(1694),a=t.n(r),l=t(2791),c=t(2007),o=t.n(c),d=t(162),h=t(184),x=["bsPrefix","className","fluid","rounded","roundedCircle","thumbnail"],u=(o().string,o().bool,o().bool,o().bool,o().bool,l.forwardRef((function(e,n){var t=e.bsPrefix,r=e.className,l=e.fluid,c=e.rounded,o=e.roundedCircle,u=e.thumbnail,m=(0,s.Z)(e,x);return t=(0,d.vE)(t,"img"),(0,h.jsx)("img",(0,i.Z)((0,i.Z)({ref:n},m),{},{className:a()(r,l&&"".concat(t,"-fluid"),c&&"rounded",o&&"rounded-circle",u&&"".concat(t,"-thumbnail"))}))})));u.displayName="Image",u.defaultProps={fluid:!1,rounded:!1,roundedCircle:!1,thumbnail:!1},n.Z=u}}]);
//# sourceMappingURL=4227.e573a300.chunk.js.map