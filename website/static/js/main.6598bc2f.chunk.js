(this.webpackJsonpuserapp=this.webpackJsonpuserapp||[]).push([[0],
    {20:function(e,t,c){},
    21:function(e,t,c){},
    41:function(e,t,c){"use strict";c.r(t);var a=c(2),s=c.n(a),n=c(13),i=c.n(n),r=(c(20),c(3)),l=(c(21),c(0)),
    j=function(e){var t=e.onSetIsClicked;
        return Object(l.jsx)("div",
        {className:"Navbar",children:Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:Object(l.jsx)("a",{className:"brand",children:"Clients"})}),
        Object(l.jsx)("button",{onClick:function(){t(1)},
        className:"button button1",children:"Get Users"})]})})},
        d=c(14),o=function(e){var t=e.email,c=e.first_name,a=e.last_name,s=e.avatar;
            return Object(l.jsx)("div",{className:"container-card col-4 col-s-6",children:Object(l.jsx)("div",{className:"card",children:Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)("div",{className:"col-3 col-s-12",children:Object(l.jsx)("img",Object(d.a)({src:s,alt:"Avatar",style:{width:"100%"}},"style",{height:"100%"}))}),Object(l.jsx)("div",{className:"col-9 col-s-12",children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("span",{children:Object(l.jsx)("b",{children:c+" "+a})}),Object(l.jsx)("p",{className:"email",children:t})]})})]})})})},b=function(e)
            {return e.show?Object(l.jsx)("div",{className:"loader"}):""},u=c(15),O=c.n(u);var h=function(){var e=Object(a.useState)(0),t=Object(r.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)(null),i=Object(r.a)(n,2),d=i[0],u=i[1],h=Object(a.useState)(!1),m=Object(r.a)(h,2),x=m[0],v=m[1];return Object(a.useEffect)((function(){c&&(v(!0),
                O.a.get("https://reqres.in/api/users?page=1").then((function(e){console.log("api data recieved"),u(e.data.data),v(!1)})))}),[c]),Object(l.jsxs)("div",
            {className:"App",children:[Object(l.jsx)(j,{onSetIsClicked:s}),
            Object(l.jsx)("div",{className:"row",children:d&&d.map((function(e)
            {return Object(l.jsx)(o,{first_name:e.first_name,last_name:e.last_name,email:e.email,avatar:e.avatar})}))}),
            Object(l.jsx)(b,{show:x})]})},
            m=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,42)).then((function(t)
            {var c=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,i=t.getTTFB;
            c(e),a(e),s(e),n(e),i(e)}))};
            i.a.render(Object(l.jsx)(s.a.StrictMode,
            {children:Object(l.jsx)(h,{})}),
            document.getElementById("root")),m()}},[[41,1,2]]]);
//# sourceMappingURL=main.6598bc2f.chunk.js.map