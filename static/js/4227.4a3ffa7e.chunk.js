"use strict";(self.webpackChunkdat_ve_xe=self.webpackChunkdat_ve_xe||[]).push([[4227],{4227:function(e,n,t){t.r(n),t.d(n,{default:function(){return y}});var i=t(9439),s=t(2791),r=t(7022),a=t(9743),l=t(2677),c=t(9140),o=t(2592),d=t(3360),h=t(1087),x=t(7689),u=t(39),m=t(1469),g=t(828),j=t(4651),f=(t(1457),t(9230)),p=t(3853),v=t(2062),Z=t.n(v),b=t(184);var y=function(){var e=(0,s.useContext)(m.I).account,n=(0,s.useState)([]),t=(0,i.Z)(n,2),v=t[0],y=t[1],D=(0,s.useState)([]),N=(0,i.Z)(D,2),C=N[0],k=N[1],X=(0,s.useState)([]),w=(0,i.Z)(X,2),T=w[0],S=w[1],B=new Date,F=(0,h.lr)(),I=(0,i.Z)(F,1)[0],G=(0,s.useState)(I.get("diemDi")),O=(0,i.Z)(G,2),_=O[0],A=O[1],E=(0,s.useState)(I.get("diemDen")),M=(0,i.Z)(E,2),P=M[0],Y=M[1],L=function(e){var n;if(e.getDate()<10||e.getMonth()<9){var t=e.getDate(),i=e.getMonth()+1;t<10&&(t="0"+t),i<9&&(i="0"+i),n=e.getFullYear()+"-"+i+"-"+t}else n=e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate();return n},Q=(0,s.useState)(I.get("date")||L(B)),U=(0,i.Z)(Q,2),V=U[0],W=U[1];(0,s.useEffect)((function(){(0,u.QY)().then((function(e){if(e){for(var n=[],t=0;t<e.length;t++)n.indexOf(e[t].tinhThanh)<0&&n.push(e[t].tinhThanh);S(n)}}));var e={benXeDi:_,benXeDen:P,date:V};_||P||V?(0,u.UU)(e).then((function(e){console.log(e),y(e||[])})):y([]),fetch("http://localhost:8081/api/thongke/nguoidung/sao-trung-binh/all").then((function(e){return e.json()})).then((function(e){e.object&&k(e.object)}))}),[_,P,V]),(0,s.useEffect)((function(){window.scrollTo(0,0)}),[]);var q=(0,x.s0)(),H=(0,f.$G)().t;return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(r.Z,{style:{marginTop:"50px",marginBottom:"50px"},children:(0,b.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:(0,b.jsx)("div",{className:"search-form-container shadow",children:(0,b.jsxs)(a.Z,{children:[(0,b.jsx)(l.Z,{md:10,children:(0,b.jsx)("div",{className:"search-form-border",children:(0,b.jsx)("div",{style:{margin:"0px 10px"},children:(0,b.jsxs)(a.Z,{children:[(0,b.jsxs)(l.Z,{md:4,children:[(0,b.jsx)("div",{className:"search-form-label",children:H("\u0110i\u1ec3m \u0111i")}),(0,b.jsxs)("select",{className:"search-form-select",id:"DiemDi",onChange:function(e){return A(e.target.value)},children:[T.map((function(e){return e!==_?(0,b.jsx)("option",{value:e,children:e},"ttdi".concat(e)):(0,b.jsx)("option",{selected:!0,value:e,children:e},"ttdi".concat(e))})),(0,b.jsx)("option",{hidden:!0,children:H("Ch\u1ecdn \u0111i\u1ec3m \u0111i")})]})]}),(0,b.jsx)(l.Z,{md:1,children:(0,b.jsx)("div",{className:"search-form-line",children:(0,b.jsx)("div",{className:"search-form-line-icon",onClick:function(e){e.preventDefault();var n=_;A(P),Y(n)},children:(0,b.jsx)(j.TFW,{})})})}),(0,b.jsxs)(l.Z,{md:4,children:[(0,b.jsx)("div",{className:"search-form-label",children:H("\u0110i\u1ec3m \u0111\u1ebfn")}),(0,b.jsxs)("select",{className:"search-form-select",id:"DiemDen",onChange:function(e){return Y(e.target.value)},children:[T.map((function(e){return e!==P?(0,b.jsx)("option",{value:e,children:e},"ttden".concat(e)):(0,b.jsx)("option",{selected:!0,value:e,children:e},"ttden".concat(e))})),(0,b.jsx)("option",{hidden:!0,children:H("Ch\u1ecdn \u0111i\u1ec3m \u0111\u1ebfn")})]})]}),(0,b.jsx)(l.Z,{md:3,children:(0,b.jsx)("input",{style:{margin:"20px 0px"},class:"form-control",type:"date",required:!0,defaultValue:V||L(B),onChange:function(e){return W(e.target.value)},min:(new Date).toISOString().split("T")[0]})})]})})})}),(0,b.jsx)(l.Z,{md:2,children:(0,b.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%"},children:(0,b.jsx)("button",{className:"search-form-button",children:H("T\xecm ki\u1ebfm")})})})]})})})}),(0,b.jsxs)("h1",{style:{textAlign:"center",marginBottom:"50px"},children:[H("T\u1ea5t c\u1ea3 c\xe1c tuy\u1ebfn xe trong ng\xe0y")," ",new Date(V).toLocaleDateString("vi")]}),(0,b.jsx)(r.Z,{style:{maxWidth:"1100px",width:"85%"},children:(0,b.jsx)(a.Z,{children:v.map((function(n){return(0,b.jsx)(b.Fragment,{children:(0,b.jsx)(c.Z,{className:"tuyen-xe-card",children:(0,b.jsxs)(a.Z,{children:[(0,b.jsx)(l.Z,{xs:12,md:3,lg:3,style:{display:"flex",justifyContent:"center"},children:(0,b.jsx)("div",{style:{margin:"10px"},children:(0,b.jsx)(o.Z,{src:n.xe.nhaXe.picture,style:{height:"100%",width:"100%",objectFit:"cover"}})})}),(0,b.jsx)(l.Z,{xs:6,md:5,lg:5,children:(0,b.jsxs)("div",{style:{margin:"10px"},children:[(0,b.jsx)(a.Z,{children:C.map((function(e){if(e.id==n.xe.nhaXe.id)return(0,b.jsxs)("h5",{children:[n.xe.nhaXe.tenNhaXe," ",(0,b.jsxs)("span",{className:"so-sao-tuyen-xe-span",children:[(0,b.jsx)("i",{className:"fa fa-star"})," ",H("".concat(e.saoTrungBinh," sao"))]})]})}))}),(0,b.jsx)(a.Z,{children:(0,b.jsx)("label",{style:{color:"gray"},children:n.xe.loaiXe.tenLoaiXe})}),(0,b.jsx)(a.Z,{children:(0,b.jsxs)("span",{children:[(0,b.jsx)(p.Q8x,{}),(0,b.jsxs)("span",{style:{margin:"0px 10px"},children:[n.benXeDi.tenBenXe," (",n.benXeDi.tinhThanh,")"]})]})}),(0,b.jsx)("div",{className:"duong-dut-net-div",children:(0,b.jsx)("span",{className:"thoi-gian-hanh-trinh-tuyen-xe-span",children:n.thoiGianHanhTrinh})}),(0,b.jsx)(a.Z,{children:(0,b.jsxs)("span",{children:[(0,b.jsx)(g.opg,{}),(0,b.jsxs)("span",{style:{margin:"0px 10px"},children:[n.benXeDen.tenBenXe," (",n.benXeDen.tinhThanh,")"]})]})}),(0,b.jsx)(a.Z,{children:(0,b.jsxs)("span",{className:"gio-khoi-hanh-tuyen-xe-span",children:[H("Gi\u1edd kh\u1edfi h\xe0nh")," ",n.gioDi]})})]})}),(0,b.jsxs)(l.Z,{xs:6,md:4,lg:4,children:[(0,b.jsx)(a.Z,{style:{margin:"10px",textAlign:"right"},children:(0,b.jsxs)("label",{className:"gia-tuyen-xe-span",children:[(t=n.giaVe.toString(),t.split("").reverse().reduce((function(e,n,t){return(t%3?n:n+".")+e}))),"\u0111"]})}),(0,b.jsx)(a.Z,{style:{margin:"20px 10px 10px 10px",textAlign:"right"}}),(0,b.jsxs)(a.Z,{children:[(0,b.jsx)(d.Z,{onClick:function(){e?function(e){q("/dat-ve-xe/"+e.id)}(n):Z()({title:H("B\u1ea1n ph\u1ea3i \u0111\u0103ng nh\u1eadp \u0111\u1ec3 \u0111\u1eb7t v\xe9!!!"),text:"",icon:"info",button:"Ok"})},style:{backgroundColor:"green",margin:"10px 0",border:"none",width:"90%"},children:H("\u0110\u1eb7t v\xe9")}),(0,b.jsx)(d.Z,{onClick:function(){e?function(e){q("/giao-hang/"+e.id)}(n):Z()({title:H("B\u1ea1n ph\u1ea3i \u0111\u0103ng nh\u1eadp \u0111\u1ec3 nh\u1edd giao h\xe0ng!!!"),text:"",icon:"info",button:"Ok"})},style:{backgroundColor:"blue",margin:"10px 0",border:"none",width:"90%"},children:H("Giao h\xe0ng")})]})]})]})})});var t}))})})]})}},2592:function(e,n,t){var i=t(1413),s=t(5987),r=t(1694),a=t.n(r),l=t(2791),c=t(2007),o=t.n(c),d=t(162),h=t(184),x=["bsPrefix","className","fluid","rounded","roundedCircle","thumbnail"],u=(o().string,o().bool,o().bool,o().bool,o().bool,l.forwardRef((function(e,n){var t=e.bsPrefix,r=e.className,l=e.fluid,c=e.rounded,o=e.roundedCircle,u=e.thumbnail,m=(0,s.Z)(e,x);return t=(0,d.vE)(t,"img"),(0,h.jsx)("img",(0,i.Z)((0,i.Z)({ref:n},m),{},{className:a()(r,l&&"".concat(t,"-fluid"),c&&"rounded",o&&"rounded-circle",u&&"".concat(t,"-thumbnail"))}))})));u.displayName="Image",u.defaultProps={fluid:!1,rounded:!1,roundedCircle:!1,thumbnail:!1},n.Z=u}}]);
//# sourceMappingURL=4227.4a3ffa7e.chunk.js.map