(this.webpackJsonpeshop=this.webpackJsonpeshop||[]).push([[0],{11:function(e,t,n){e.exports={navContainer:"Nav_navContainer__35BgB",link:"Nav_link__1CVGd",bigLink:"Nav_bigLink__2kOa6",linkWrapper:"Nav_linkWrapper__1CST3",cartBubble:"Nav_cartBubble__1owfL"}},1108:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(19),u=n.n(c),o=n(2),l=n.n(o),i=n(4),s=(n(47),n(11)),d=n.n(s),p=n(18),m=n.n(p),f=function(e){var t=e.children,n=e.justify,a=e.className,c=e.align,u=e.wrap,o=[m.a.flex,a];switch(function(e,t,n){switch(t){case"space-between":e.push(n.spaceBetween);break;case"space-evenly":e.push(n.spaceEvenly);break;case"space-around":e.push(n.spaceAround);break;case"flex-start":e.push(n.flexStart);break;case"flex-end":e.push(n.flexEnd);break;case"center":e.push(n.center)}}(o,n,m.a),function(e,t,n){switch(t){case"center":e.push(n.alignCenter);break;case"flex-start":e.push(n.alignStart);break;case"flex-end":e.push(n.alignEnd)}}(o,c,m.a),u){case"nowrap":o.push(m.a.noWrap);break;case"wrap":o.push(m.a.wrap)}return r.a.createElement("div",{className:o.join(" ")},t)},b=n(14),E=n(1),h=function(){var e=Object(E.c)((function(e){return e.cart})).reduce((function(e,t){return e+t.cartQuantity}),0);return r.a.createElement(f,{justify:"space-between",className:d.a.navContainer,align:"center"},r.a.createElement("div",null,r.a.createElement(b.b,{className:d.a.bigLink,to:"/"},"SuperParduotuvea")),r.a.createElement("nav",null,r.a.createElement(f,{className:d.a.linkWrapper},r.a.createElement("div",null,r.a.createElement(b.b,{className:d.a.link,to:"/"},"Products")),r.a.createElement("div",null,r.a.createElement(b.b,{className:d.a.link,to:"/orders"},"Orders")),r.a.createElement("div",null,r.a.createElement("div",{className:d.a.cartBubble},e),r.a.createElement(b.b,{className:d.a.link,to:"/cart"},"Cart")))))},_=n(37),v=n.n(_),y=function(e){var t=e.children;return r.a.createElement("div",{className:v.a.container},t)},O=n(10),g=n(5),C=n(8),j=n(7),x=n(12),w=n.n(x),k=n(15),N=n.n(k),P=function(e){var t=e.onClick,n=e.children,a=e.type,c=e.disabled,u=[N.a.button];switch(a){case"primary":u.push(N.a.green);break;case"secondary":u.push(N.a.blue);break;case"danger":u.push(N.a.red)}return c&&u.push(N.a.disabled),r.a.createElement("div",{className:N.a.buttonWrapper},r.a.createElement("button",{onClick:t,className:u.join(" "),disabled:c},n))};P.defaultProps={type:"primary"};var D=function(e){return e.products},S=function(e){return e.cart},R=function(e){return e.orders},A=function(e){return e.customers},T=function(e){var t=e.product,n=e.isCartPage,c=Object(E.b)(),u=Object(E.c)(S),o=Object(a.useState)(!1),l=Object(g.a)(o,2),i=l[0],s=l[1],d=t.image,p=t.name,m=t.description,b=t.price,h=t.quantity,_=t.id,v=(m||"").split(" ").splice(0,20).join(" ")+"...";return Object(a.useEffect)((function(){if(!n){var e=(u.find((function(e){return e.id===_}))||{}).cartQuantity;s(e>=h)}}),[u,_,h]),r.a.createElement("div",{className:w.a.product},r.a.createElement("div",{className:w.a.image},r.a.createElement("img",{src:d,alt:p})),r.a.createElement("div",{className:w.a.productName},p),!n&&r.a.createElement("div",{className:w.a.shortDescription},v),r.a.createElement("div",{className:w.a.bold},"Price: ",b,"\u20ac"),r.a.createElement("div",{className:w.a.bold},"Quantity: ",n?t.cartQuantity:h),r.a.createElement("div",{className:w.a.buttonList},r.a.createElement(f,{justify:"center"},n?r.a.createElement(P,{type:"danger",onClick:function(){var e=u.find((function(e){return e.id===_})),t=u.findIndex((function(e){return e.id===_}));if(1===e.cartQuantity&&c({type:"REMOVE_FROM_CART",id:_}),e.cartQuantity>1){var n=Object(j.a)(u);n[t].cartQuantity-=1,c({type:"REPLACE_CART",newCart:n})}}},"Delete"):r.a.createElement(r.a.Fragment,null,r.a.createElement(P,{onClick:function(){var e=u.findIndex((function(e){return e.id===_}));if(e>=0){var n=Object(j.a)(u);n[e].cartQuantity+=1,c({type:"REPLACE_CART",newCart:n})}-1===e&&c({type:"ADD_TO_CART",newCartItem:Object(C.a)({},t,{cartQuantity:1})})},disabled:i},"Add to cart"),r.a.createElement(P,{type:"secondary",onClick:function(){}},"Edit")))))},F=n(16),L=n(38),B=n.n(L),M=n(22),Q=n.n(M),U=n(13),W=n(28),q=n.n(W),I=function(e){var t=e.label,n=e.type,a=e.inputKey,c=e.value,u=e.errors,o=e.changeHandler,l=e.children;return r.a.createElement("div",{className:q.a.formControl},t&&r.a.createElement("label",{htmlFor:a},t),"textarea"===n&&r.a.createElement("textarea",{id:a,rows:"4",value:c,onChange:function(e){return o(a,e)}}),"input"===n&&r.a.createElement("input",{type:"text",id:a,value:c,onChange:function(e){return o(a,e)}}),u[a]&&r.a.createElement("div",{className:q.a.error}," ",u[a]," "),l)};I.defaultProps={type:"input"};var V=function(){return{id:U.random.uuid(),name:"",description:"",price:0,quantity:"",image:"https://picsum.photos/id/".concat(U.random.number(200)||1,"/600")}},H=function(e){var t=e.isModalOpen,n=e.toggleModal,c=Object(E.b)(),u=Object(a.useState)(V()),o=Object(g.a)(u,2),s=o[0],d=o[1],p=Object(a.useState)({}),m=Object(g.a)(p,2),f=m[0],b=m[1],h=Object(a.useState)(!1),_=Object(g.a)(h,2),v=_[0],y=_[1],O=function(){d(V()),y(!1)};Object(a.useEffect)((function(){O()}),[t]);var j=function(e,t){return d(Object(C.a)({},s,Object(F.a)({},e,t.target.value)))},x=function(){var e=!0,t={};return(!s.name||s.name.length<5)&&(e=!1,t.name="Name must be longer than 5 symbols"),(!s.quantity||s.quantity<=0)&&(e=!1,t.quantity="Quantity is required"),s.price||(e=!1,t.price="Price is required"),b(t),e},w=function(){var e=Object(i.a)(l.a.mark((function e(t){var n,a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!x()){e.next=12;break}return n=Object(C.a)({},s,{price:Number(s.price).toFixed(2)}),e.next=5,fetch("http://localhost:4000/products",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});case 5:if(201!==(a=e.sent).status){e.next=12;break}return y(!0),e.next=10,a.json();case 10:r=e.sent,c({type:"ADD_NEW_PRODUCT",newProduct:r});case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(B.a,{isOpen:t,onRequestClose:n,ariaHideApp:!1},r.a.createElement("div",null,r.a.createElement("h2",{className:Q.a.heading},"Create product"),v?r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Product created!"),r.a.createElement("div",{className:Q.a.buttonList},r.a.createElement("button",{onClick:n},"Close"),r.a.createElement("button",{onClick:O},"Create new product"))):r.a.createElement("form",{onSubmit:w},r.a.createElement(I,{inputKey:"name",changeHandler:j,errors:f,label:"Product name",value:s.name}),r.a.createElement(I,{inputKey:"description",value:s.description,changeHandler:j,label:"Description",errors:f,type:"textarea"},r.a.createElement("button",{onClick:function(e){e.preventDefault(),d(Object(C.a)({},s,{description:U.random.words(250)}))}},"Generate description")),r.a.createElement(I,{inputKey:"price",changeHandler:j,errors:f,label:"Price",value:s.price}),r.a.createElement(I,{inputKey:"quantity",changeHandler:j,errors:f,label:"Quantity",value:s.quantity}),r.a.createElement("div",{className:Q.a.buttonList},r.a.createElement("button",{onClick:n},"Cancel"),r.a.createElement("button",null,"Create")))))},J=function(){var e=Object(E.c)((function(e){return e.products})),t=Object(a.useState)(!1),n=Object(g.a)(t,2),c=n[0],u=n[1],o=function(){return u(!c)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(P,{onClick:o},"Create product"),r.a.createElement(f,{wrap:"wrap",justify:"space-between"},e.map((function(e){return r.a.createElement(T,{key:e.id,product:e})}))),r.a.createElement(H,{isModalOpen:c,toggleModal:o}))},K=n(39),G=n.n(K),Y=function(e){return{type:"ADD_ORDER",newOrder:e}},z=function(e){return{type:"ADD_CUSTOMER",newCustomer:e}},X=function(e,t){return function(){var n=Object(i.a)(l.a.mark((function n(a,r){var c,u,o,i;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c=r(),u=c.cart,o=Object(C.a)({id:U.random.uuid()},e),i={id:U.random.uuid(),products:u.map((function(e){return e.id})),sum:u.reduce((function(e,t){return e+t.price*t.cartQuantity}),0),customerId:o.id,orderDate:(new Date).getTime()},n.next=5,a(Z(i));case 5:return n.next=7,a($(o));case 7:t(!1),a({type:"REPLACE_CART",newCart:[]});case 9:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()},Z=function(e){return function(){var t=Object(i.a)(l.a.mark((function t(n){var a,r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("http://localhost:4000/orders",{method:"POST",headers:{"Content-Type":"application/json",cors:!0},body:JSON.stringify(e)});case 3:return a=t.sent,t.next=6,a.json();case 6:r=t.sent,n(Y(r)),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log("order response failed with following message:",t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()},$=function(e){return function(){var t=Object(i.a)(l.a.mark((function t(n){var a,r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("http://localhost:4000/customers",{method:"POST",headers:{"Content-Type":"application/json",cors:!0},body:JSON.stringify(e)});case 3:return a=t.sent,t.next=6,a.json();case 6:r=t.sent,n(z(r)),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log("customer response failed with following message:",t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()},ee=[{isExact:!0,component:J,path:"/",label:"Products"},{isExact:!0,component:function(){var e=Object(E.b)(),t=Object(E.c)(R),n=Object(E.c)(D),c=Object(E.c)(A);return console.log("orders",t),Object(a.useEffect)((function(){(function(){var t=Object(i.a)(l.a.mark((function t(){var n,a,r,c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://localhost:4000/orders");case 2:return n=t.sent,t.next=5,n.json();case 5:return a=t.sent,t.next=8,fetch("http://localhost:4000/customers");case 8:return r=t.sent,t.next=11,r.json();case 11:c=t.sent,e({type:"REPLACE_ORDERS",newOrders:a}),e({type:"REPLACE_CUSTOMERS",newCustomers:c});case 14:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]),r.a.createElement("table",{border:"1"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Order date"),r.a.createElement("th",null,"Products"),r.a.createElement("th",null,"Sum \u20ac"),r.a.createElement("th",null,"Customer name"))),r.a.createElement("tbody",null,t.map((function(e){var t=new Date(e.orderDate),a="".concat(t.getFullYear(),"-").concat(t.getMonth(),"-").concat(t.getDay()),u=n.filter((function(t){return e.products.some((function(e){return e===t.id}))})),o=c.find((function(t){return console.log(t.id),console.log(e.customerId),t.id===e.customerId}))||{};return r.a.createElement("tr",{key:e.id},r.a.createElement("td",null,a),r.a.createElement("td",null,u.map((function(e){return e.name})).join(";")),r.a.createElement("td",null,e.sum),r.a.createElement("td",null,o.name))}))))},path:"/orders",label:"Orders"},{isExact:!0,component:function(){var e=Object(E.c)(S),t=Object(E.b)(),n=Object(a.useState)({}),c=Object(g.a)(n,2),u=c[0],o=c[1],s=Object(a.useState)({name:"",address:"",phone:"",email:""}),d=Object(g.a)(s,2),p=d[0],m=d[1],b=function(e,t){return m(Object(C.a)({},p,Object(F.a)({},e,t.target.value)))},h=Object(a.useState)(!1),_=Object(g.a)(h,2),v=_[0],y=_[1],O=!!e.length,j=[{label:"Name",value:p.name,key:"name"},{label:"Address",value:p.address,key:"address"},{label:"Phone number",value:p.phone,key:"phone"},{label:"E - mail",value:p.email,key:"email"}],x=function(){var e=!0,t={};return(!p.name||p.name.length<5)&&(e=!1,t.name="Name must be longer than 5 symbols"),p.address||(e=!1,t.address="Address is mandatory"),p.phone.includes("+")||(e=!1,t.phone="Phone format is with +"),p.email.includes("@")||(e=!1,t.email="Please provide valid email"),o(t),e},w=function(){var e=Object(i.a)(l.a.mark((function e(n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),x()&&t(X(p,y));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(f,{wrap:"wrap",justify:O?"space-between":"center"},O?r.a.createElement(r.a.Fragment,null,e.map((function(e){return r.a.createElement(T,{isCartPage:!0,key:e.id,product:e})})),r.a.createElement(f,{justify:"center"},r.a.createElement(P,{onClick:function(){return y(!v)},type:v?"danger":"primary"},v?"Cancel":"Checkout"))):r.a.createElement("h1",{className:G.a.heading},"Sorry, no items in cart :(")),v&&O&&r.a.createElement("form",{onSubmit:w},j.map((function(e){return r.a.createElement(I,{key:e.key,changeHandler:b,errors:u,inputKey:e.key,label:e.label,value:e.value})})),r.a.createElement(f,{align:"center",justify:"center"},r.a.createElement(P,null,"Place order"))))},path:"/cart",label:"Cart"},{isExact:!0,component:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Nera tokio puslapio"))},path:"/404",label:""}];var te=function(){var e=Object(E.b)();return Object(a.useEffect)((function(){(function(){var t=Object(i.a)(l.a.mark((function t(){var n,a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://localhost:4000/products");case 2:return n=t.sent,t.next=5,n.json();case 5:a=t.sent,e({type:"UPLOAD_PRODUCTS",products:a});case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]),r.a.createElement(b.a,null,r.a.createElement(y,null,r.a.createElement(h,null),r.a.createElement("main",null,r.a.createElement(O.d,null,ee.map((function(e,t){return r.a.createElement(O.b,{key:t,path:e.path,component:function(){return r.a.createElement(e.component,null)},exact:e.isExact})})),r.a.createElement(O.a,{from:"*",to:"/404"})))))},ne=n(17),ae=n(40),re=Object(ne.c)({cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TO_CART":return[].concat(Object(j.a)(e),[t.newCartItem]);case"REPLACE_CART":return t.newCart;case"REMOVE_FROM_CART":return e.filter((function(e){return e.id!==t.id}));default:return e}},products:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPLOAD_PRODUCTS":return t.products;case"ADD_NEW_PRODUCT":return[].concat(Object(j.a)(e),[t.newProduct]);default:return e}},customers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REPLACE_CUSTOMERS":return t.newCustomers;case"ADD_CUSTOMER":return[].concat(Object(j.a)(e),[t.newCustomer]);default:return e}},orders:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REPLACE_ORDERS":return t.newOrders;case"ADD_ORDER":return[].concat(Object(j.a)(e),[t.newOrder]);default:return e}}}),ce=Object(ne.d)(re,Object(ne.a)(ae.a));u.a.render(r.a.createElement(E.a,{store:ce},r.a.createElement(te,null)),document.getElementById("root"))},12:function(e,t,n){e.exports={product:"Product_product__13VZ3",image:"Product_image__yVzh7",shortDescription:"Product_shortDescription__uqEH6",productName:"Product_productName__1Rj8d",bold:"Product_bold__3zUua",buttonList:"Product_buttonList__Boxth"}},15:function(e,t,n){e.exports={buttonWrapper:"Button_buttonWrapper__1pewk",button:"Button_button__1RwfN",green:"Button_green__1e_kE",blue:"Button_blue__1ub6y",disabled:"Button_disabled__2ayOJ",red:"Button_red__36D_w"}},18:function(e,t,n){e.exports={flex:"Flex_flex__7NNLx",spaceBetween:"Flex_spaceBetween__32tY3",spaceAround:"Flex_spaceAround__1SYHS",spaceEvenly:"Flex_spaceEvenly__lm_Te",flexStart:"Flex_flexStart__1d6tP",flexEnd:"Flex_flexEnd__9LsGC",alignCenter:"Flex_alignCenter__5sDU7",alignStart:"Flex_alignStart__3A2Vy",alignEnd:"Flex_alignEnd__1XB07",noWrap:"Flex_noWrap__2Fucu",wrap:"Flex_wrap__1YAVC",center:"Flex_center__2G4-P"}},22:function(e,t,n){e.exports={heading:"CreateProductModal_heading__2ESVD",buttonList:"CreateProductModal_buttonList__1TySy"}},28:function(e,t,n){e.exports={formControl:"Input_formControl__1rF8p",error:"Input_error__2VO4D"}},37:function(e,t,n){e.exports={container:"Container_container__cuWME"}},39:function(e,t,n){e.exports={heading:"Cart_heading__3LpkV"}},41:function(e,t,n){e.exports=n(1108)},47:function(e,t,n){}},[[41,1,2]]]);
//# sourceMappingURL=main.110a0ec7.chunk.js.map