"use strict";(self.webpackChunkdat_ve_xe=self.webpackChunkdat_ve_xe||[]).push([[5331],{8642:function(e,s,r){r.r(s),r.d(s,{default:function(){return v}});var n=r(4165),t=r(5861),a=r(9439),l=r(2791),i=r(7022),c=r(9743),o=r(2677),d=r(9140),h=r(3063),x=r(3360),m=r(7689),u=r(1087),p=r(5642),j=r(8429),b=r(3728),g=r.p+"static/media/background-login2.90230e962ba201487a9a.jpg",w=r(9230),f=r(184);var v=function(){var e=(0,l.useContext)(p.I).setToken,s=(0,l.useState)("USER"),r=(0,a.Z)(s,2),v=(r[0],r[1],(0,l.useState)("")),N=(0,a.Z)(v,2),Z=N[0],k=N[1],y=(0,l.useState)(""),C=(0,a.Z)(y,2),S=C[0],U=C[1],L=(0,w.$G)().t,T=(0,m.s0)(),E=function(){var s=(0,t.Z)((0,n.Z)().mark((function s(r){var t;return(0,n.Z)().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:r.preventDefault(),t={username:Z,password:S},(0,j.httpLogin)(t).then((function(e){return e.json()})).then((function(s){if(s.jwtToken){var r={jwtToken:s.jwtToken,account:{id:s.id,username:s.username,role:s.role}};e(r),window.alert("\u0110\u0103ng nh\u1eadp th\xe0nh c\xf4ng!!!"),"USER"===s.role?T("/home"):"ADMIN"===s.role?T("/admin/home"):"NHAXE"===s.role&&T("/nha-xe/home")}else 401==s.status?window.alert("Username ho\u1eb7c password kh\xf4ng ch\xednh x\xe1c!!!"):window.alert(s.message)}));case 3:case"end":return s.stop()}}),s)})));return function(e){return s.apply(this,arguments)}}();return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("img",{src:g,style:{width:"100vw",height:"100vh",objectFit:"cover",filter:"brightness(60%)"}}),(0,f.jsx)("div",{style:{position:"absolute",top:"0px",left:"0px",width:"100vw",height:"100vh"},children:(0,f.jsx)(i.Z,{children:(0,f.jsx)(c.Z,{className:"d-flex justify-content-center align-items-center",style:{height:"100vh"},children:(0,f.jsxs)(o.Z,{md:8,lg:6,xs:12,children:[(0,f.jsx)("div",{style:{border:"solid 10px blue",background:"blue",borderRadius:"8px 8px 0px 0px"}}),(0,f.jsx)(d.Z,{className:"shadow",style:{borderRadius:"0px 0px 8px 8px"},children:(0,f.jsx)(d.Z.Body,{children:(0,f.jsxs)("div",{className:"mb-3 mt-md-4",children:[(0,f.jsx)("h2",{className:"fw-bold mb-2 text-uppercase ",children:"WebTour"}),(0,f.jsx)("p",{className:" mb-5",children:L("vuilongnhapusernamevapasswordcuaban")}),(0,f.jsxs)("div",{className:"mb-3",children:[(0,f.jsxs)(h.Z,{onSubmit:E,children:[(0,f.jsxs)(h.Z.Group,{className:"mb-3",controlId:"formBasicEmail",children:[(0,f.jsx)(h.Z.Label,{className:"text-center",children:"Username"}),(0,f.jsx)(h.Z.Control,{onChange:function(e){return k(e.target.value)},type:"text",placeholder:L("nhapusername")})]}),(0,f.jsxs)(h.Z.Group,{className:"mb-3",controlId:"formBasicPassword",children:[(0,f.jsx)(h.Z.Label,{children:"Password"}),(0,f.jsx)(h.Z.Control,{onChange:function(e){return U(e.target.value)},type:"password",placeholder:L("nhappassword")})]}),(0,f.jsx)("div",{className:"d-grid",children:(0,f.jsx)(x.Z,{variant:"primary",type:"submit",children:L("login")})})]}),(0,f.jsxs)("div",{className:"mt-3",children:[(0,f.jsxs)("p",{className:"mb-0  text-center",children:[L("khongcotaikhoan")," ",(0,f.jsx)("a",{href:"/sign-up",className:"text-primary fw-bold",children:(0,f.jsx)(u.rU,{to:"/sign-up",children:"Sign Up"})})]}),(0,f.jsx)("p",{className:"mb-2  text-center",children:L("or")}),(0,f.jsx)("p",{className:"mb-0  text-center",children:(0,f.jsxs)(x.Z,{style:{backgroundColor:"white",borderColor:"red"},children:[(0,f.jsx)(b.JM8,{size:35}),(0,f.jsx)("span",{style:{color:"black",marginLeft:"10px"},children:"Login with google"})]})})]}),(0,f.jsx)("div",{className:"mt-3",children:(0,f.jsx)("p",{className:"mb-0  text-center",children:(0,f.jsx)("a",{lassName:"text-primary fw-bold",children:(0,f.jsx)(u.rU,{to:"/",children:L("dentrangchu")})})})})]})]})})})]})})})})]})}}}]);
//# sourceMappingURL=5331.e613e1c7.chunk.js.map