(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{75:function(e,t,n){},83:function(e,t,n){"use strict";n.r(t);var a,c,s,r,l,i,o,d=n(3),j=n.n(d),b=n(59),u=n.n(b),m=(n(75),n(24)),h=n(66),p=n(68),O=n(95),x=n(93),g=n(65),f=n(11),v=n(9),k=n(90),y=n(2),w=function(e){var t=e.profiles,n=e.title;return t.length?Object(y.jsxs)("div",{children:[Object(y.jsx)("h3",{className:"text-primary",children:n}),Object(y.jsx)("div",{className:"flex-row justify-space-between my-4",children:t&&t.map((function(e){return Object(y.jsx)("div",{className:"col-12 col-xl-6",children:Object(y.jsxs)("div",{className:"card mb-3",children:[Object(y.jsxs)("h4",{className:"card-header bg-dark text-light p-2 m-0",children:[e.name," ",Object(y.jsx)("br",{}),Object(y.jsxs)("span",{className:"text-white",style:{fontSize:"1rem"},children:["currently has ",e.skills?e.skills.length:0," ","endorsed skill",e.skills&&1===e.skills.length?"":"s"]})]}),Object(y.jsx)(f.b,{className:"btn btn-block btn-squared btn-light text-dark",to:"/profiles/".concat(e._id),children:"View and endorse their skills."})]})},e._id)}))})]}):Object(y.jsx)("h3",{children:"No Profiles Yet"})},N=n(26),S=n(94),I=Object(S.a)(a||(a=Object(N.a)(["\n  query allProfiles {\n    profiles {\n      _id\n      name\n      skills\n    }\n  }\n"]))),$=Object(S.a)(c||(c=Object(N.a)(["\n  query singleProfile($profileId: ID!) {\n    profile(profileId: $profileId) {\n      _id\n      name\n      skills\n    }\n  }\n"]))),_=Object(S.a)(s||(s=Object(N.a)(["\n  query me {\n    me {\n      _id\n      name\n      skills\n    }\n  }\n"]))),C=function(){var e=Object(k.a)(I),t=e.loading,n=e.data,a=(null===n||void 0===n?void 0:n.profiles)||[];return Object(y.jsx)("main",{children:Object(y.jsx)("div",{className:"flex-row justify-center",children:Object(y.jsx)("div",{className:"col-12 col-md-10 my-3",children:t?Object(y.jsx)("div",{children:"Loading..."}):Object(y.jsx)(w,{profiles:a,title:"Here's the current roster of friends..."})})})})},P=n(28),Y=n(23),D=n(18),F=n.n(D),L=n(92),T=Object(S.a)(r||(r=Object(N.a)(["\n  mutation addProfile($name: String!, $email: String!, $password: String!) {\n    addProfile(name: $name, email: $email, password: $password) {\n      token\n      profile {\n        _id\n        name\n      }\n    }\n  }\n"]))),q=Object(S.a)(l||(l=Object(N.a)(["\n  mutation addSkill($profileId: ID!, $skill: String!) {\n    addSkill(profileId: $profileId, skill: $skill) {\n      _id\n      name\n      skills\n    }\n  }\n"]))),E=Object(S.a)(i||(i=Object(N.a)(["\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      profile {\n        _id\n        name\n      }\n    }\n  }\n"]))),B=Object(S.a)(o||(o=Object(N.a)(["\n  mutation removeSkill($skill: String!) {\n    removeSkill(skill: $skill) {\n      _id\n      name\n      skills\n    }\n  }\n"]))),z=function(e){var t=e.skills,n=e.isLoggedInUser,a=void 0!==n&&n,c=Object(L.a)(B,{update:function(e,t){var n=t.data.removeSkill;try{e.writeQuery({query:_,data:{me:n}})}catch(a){console.error(a)}}}),s=Object(Y.a)(c,2),r=s[0],l=s[1].error,i=function(){var e=Object(P.a)(F.a.mark((function e(t){var n;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r({variables:{skill:t}});case 3:n=e.sent,n.data,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();return t.length?Object(y.jsxs)("div",{children:[Object(y.jsx)("div",{className:"flex-row justify-space-between my-4",children:t&&t.map((function(e){return Object(y.jsx)("div",{className:"col-12 col-xl-6",children:Object(y.jsx)("div",{className:"card mb-3",children:Object(y.jsxs)("h4",{className:"card-header bg-dark text-light p-2 m-0 display-flex align-center",children:[Object(y.jsx)("span",{children:e}),a&&Object(y.jsx)("button",{className:"btn btn-sm btn-danger ml-auto",onClick:function(){return i(e)},children:"X"})]})})},e)}))}),l&&Object(y.jsx)("div",{className:"my-3 p-3 bg-danger text-white",children:l.message})]}):Object(y.jsx)("h3",{children:"No Skills Yet"})},U=n(63),M=n(64),J=n(52),V=new(function(){function e(){Object(U.a)(this,e)}return Object(M.a)(e,[{key:"getProfile",value:function(){return Object(J.a)(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!(!e||this.isTokenExpired(e))}},{key:"isTokenExpired",value:function(e){return Object(J.a)(e).exp<Date.now()/1e3&&(localStorage.removeItem("id_token"),!0)}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.reload()}}]),e}()),G=function(e){var t=e.profileId,n=Object(d.useState)(""),a=Object(Y.a)(n,2),c=a[0],s=a[1],r=Object(L.a)(q),l=Object(Y.a)(r,2),i=l[0],o=l[1].error,j=function(){var e=Object(P.a)(F.a.mark((function e(n){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,e.next=4,i({variables:{profileId:t,skill:c}});case 4:e.sent,s(""),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(y.jsxs)("div",{children:[Object(y.jsx)("h4",{children:"Endorse some more skills below."}),V.loggedIn()?Object(y.jsxs)("form",{className:"flex-row justify-center justify-space-between-md align-center",onSubmit:j,children:[Object(y.jsx)("div",{className:"col-12 col-lg-9",children:Object(y.jsx)("input",{placeholder:"Endorse some skills...",value:c,className:"form-input w-100",onChange:function(e){return s(e.target.value)}})}),Object(y.jsx)("div",{className:"col-12 col-lg-3",children:Object(y.jsx)("button",{className:"btn btn-info btn-block py-3",type:"submit",children:"Endorse Skill"})}),o&&Object(y.jsx)("div",{className:"col-12 my-3 bg-danger text-white p-3",children:o.message})]}):Object(y.jsxs)("p",{children:["You need to be logged in to endorse skills. Please"," ",Object(y.jsx)(f.b,{to:"/login",children:"login"})," or ",Object(y.jsx)(f.b,{to:"/signup",children:"signup."})]})]})},H=function(){var e,t=Object(v.h)().profileId,n=Object(k.a)(t?$:_,{variables:{profileId:t}}),a=n.loading,c=n.data,s=(null===c||void 0===c?void 0:c.me)||(null===c||void 0===c?void 0:c.profile)||{};return V.loggedIn()&&V.getProfile().data._id===t?Object(y.jsx)(v.a,{to:"/me"}):a?Object(y.jsx)("div",{children:"Loading..."}):null!==s&&void 0!==s&&s.name?Object(y.jsxs)("div",{children:[Object(y.jsxs)("h2",{className:"card-header",children:[t?"".concat(s.name,"'s"):"Your"," friends have endorsed these skills..."]}),(null===(e=s.skills)||void 0===e?void 0:e.length)>0&&Object(y.jsx)(z,{skills:s.skills,isLoggedInUser:!t&&!0}),Object(y.jsx)("div",{className:"my-4 p-4",style:{border:"1px dotted #1a1a1a"},children:Object(y.jsx)(G,{profileId:s._id})})]}):Object(y.jsx)("h4",{children:"You need to be logged in to see your profile page. Use the navigation links above to sign up or log in!"})},Q=n(33),W=function(){var e=Object(d.useState)({name:"",email:"",password:""}),t=Object(Y.a)(e,2),n=t[0],a=t[1],c=Object(L.a)(T),s=Object(Y.a)(c,2),r=s[0],l=s[1],i=l.error,o=l.data,j=function(e){var t=e.target,c=t.name,s=t.value;a(Object(m.a)(Object(m.a)({},n),{},Object(Q.a)({},c,s)))},b=function(){var e=Object(P.a)(F.a.mark((function e(t){var a,c;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log(n),e.prev=2,e.next=5,r({variables:Object(m.a)({},n)});case 5:a=e.sent,c=a.data,V.login(c.addProfile.token),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(y.jsx)("main",{className:"flex-row justify-center mb-4",children:Object(y.jsx)("div",{className:"col-12 col-lg-10",children:Object(y.jsxs)("div",{className:"card",children:[Object(y.jsx)("h4",{className:"card-header bg-dark text-light p-2",children:"Sign Up"}),Object(y.jsxs)("div",{className:"card-body",children:[o?Object(y.jsxs)("p",{children:["Success! You may now head"," ",Object(y.jsx)(f.b,{to:"/",children:"back to the homepage."})]}):Object(y.jsxs)("form",{onSubmit:b,children:[Object(y.jsx)("input",{className:"form-input",placeholder:"Your username",name:"name",type:"text",value:n.name,onChange:j}),Object(y.jsx)("input",{className:"form-input",placeholder:"Your email",name:"email",type:"email",value:n.email,onChange:j}),Object(y.jsx)("input",{className:"form-input",placeholder:"******",name:"password",type:"password",value:n.password,onChange:j}),Object(y.jsx)("button",{className:"btn btn-block btn-info",style:{cursor:"pointer"},type:"submit",children:"Submit"})]}),i&&Object(y.jsx)("div",{className:"my-3 p-3 bg-danger text-white",children:i.message})]})]})})})},X=function(e){var t=Object(d.useState)({email:"",password:""}),n=Object(Y.a)(t,2),a=n[0],c=n[1],s=Object(L.a)(E),r=Object(Y.a)(s,2),l=r[0],i=r[1],o=i.error,j=i.data,b=function(e){var t=e.target,n=t.name,s=t.value;c(Object(m.a)(Object(m.a)({},a),{},Object(Q.a)({},n,s)))},u=function(){var e=Object(P.a)(F.a.mark((function e(t){var n,s;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log(a),e.prev=2,e.next=5,l({variables:Object(m.a)({},a)});case 5:n=e.sent,s=n.data,V.login(s.login.token),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.error(e.t0);case 13:c({email:"",password:""});case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(y.jsx)("main",{className:"flex-row justify-center mb-4",children:Object(y.jsx)("div",{className:"col-12 col-lg-10",children:Object(y.jsxs)("div",{className:"card",children:[Object(y.jsx)("h4",{className:"card-header bg-dark text-light p-2",children:"Login"}),Object(y.jsxs)("div",{className:"card-body",children:[j?Object(y.jsxs)("p",{children:["Success! You may now head"," ",Object(y.jsx)(f.b,{to:"/",children:"back to the homepage."})]}):Object(y.jsxs)("form",{onSubmit:u,children:[Object(y.jsx)("input",{className:"form-input",placeholder:"Your email",name:"email",type:"email",value:a.email,onChange:b}),Object(y.jsx)("input",{className:"form-input",placeholder:"******",name:"password",type:"password",value:a.password,onChange:b}),Object(y.jsx)("button",{className:"btn btn-block btn-info",style:{cursor:"pointer"},type:"submit",children:"Submit"})]}),o&&Object(y.jsx)("div",{className:"my-3 p-3 bg-danger text-white",children:o.message})]})]})})})},A=function(){return Object(y.jsx)("header",{className:"bg-info text-dark mb-4 py-3 display-flex align-center",children:Object(y.jsxs)("div",{className:"container flex-column justify-space-between-lg justify-center align-center text-center",children:[Object(y.jsx)(f.b,{className:"text-dark",to:"/",children:Object(y.jsx)("h1",{className:"m-0",style:{fontSize:"3rem"},children:"Tech Friends"})}),Object(y.jsx)("p",{className:"m-0",style:{fontSize:"1.75rem",fontWeight:"700"},children:"Meet your new programming pals."}),Object(y.jsx)("div",{children:V.loggedIn()?Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(f.b,{className:"btn btn-lg btn-primary m-2",to:"/me",children:"View My Profile"}),Object(y.jsx)("button",{className:"btn btn-lg btn-light m-2",onClick:function(e){e.preventDefault(),V.logout()},children:"Logout"})]}):Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(f.b,{className:"btn btn-lg btn-primary m-2",to:"/login",children:"Login"}),Object(y.jsx)(f.b,{className:"btn btn-lg btn-light m-2",to:"/signup",children:"Signup"})]})})]})})},K=function(){var e=Object(v.g)(),t=Object(v.f)();return Object(y.jsx)("footer",{className:"w-100 mt-auto text-dark p-4",children:Object(y.jsxs)("div",{className:"container text-center mb-5",children:["/"!==e.pathname&&Object(y.jsx)("button",{className:"btn btn-dark mb-3",onClick:function(){return t.goBack()},children:"\u2190 Go Back"}),Object(y.jsxs)("h4",{children:["\xa9 ",(new Date).getFullYear()," - Tech Friends"]})]})})},R=Object(h.a)({uri:"/graphql"}),Z=Object(g.a)((function(e,t){var n=t.headers,a=localStorage.getItem("id_token");return{headers:Object(m.a)(Object(m.a)({},n),{},{authorization:a?"Bearer ".concat(a):""})}})),ee=new p.a({link:Z.concat(R),cache:new O.a});var te=function(){return Object(y.jsx)(x.a,{client:ee,children:Object(y.jsx)(f.a,{children:Object(y.jsxs)("div",{className:"flex-column justify-flex-start min-100-vh",children:[Object(y.jsx)(A,{}),Object(y.jsxs)("div",{className:"container",children:[Object(y.jsx)(v.b,{exact:!0,path:"/",children:Object(y.jsx)(C,{})}),Object(y.jsx)(v.b,{exact:!0,path:"/login",children:Object(y.jsx)(X,{})}),Object(y.jsx)(v.b,{exact:!0,path:"/signup",children:Object(y.jsx)(W,{})}),Object(y.jsx)(v.b,{exact:!0,path:"/me",children:Object(y.jsx)(H,{})}),Object(y.jsx)(v.b,{exact:!0,path:"/profiles/:profileId",children:Object(y.jsx)(H,{})})]}),Object(y.jsx)(K,{})]})})})},ne=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,97)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))};u.a.render(Object(y.jsx)(j.a.StrictMode,{children:Object(y.jsx)(te,{})}),document.getElementById("root")),ne()}},[[83,1,2]]]);
//# sourceMappingURL=main.606e0373.chunk.js.map