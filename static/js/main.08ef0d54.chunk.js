(this.webpackJsonppet_store=this.webpackJsonppet_store||[]).push([[0],{21:function(e,t,a){e.exports=a.p+"static/media/video.ba80f66c.mp4"},22:function(e,t,a){e.exports=a.p+"static/media/cats1.34d88648.jpg"},23:function(e,t,a){e.exports=a.p+"static/media/dog1.e8289f7a.jpg"},25:function(e,t,a){e.exports=a(57)},30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(12),l=a.n(c),i=(a(30),a(31),a(6)),m=a(1),o=a(9),s=(a(32),a(33),["btn--primary","btn--outline"]),d=["btn--medium","button--large"],p=function(e){var t=e.children,a=e.type,n=e.onClick,c=e.buttonStyle,l=e.buttonSize,m=e.link,o=s.includes(c)?c:s[0],p=d.includes(l)?l:d[0];return r.a.createElement(i.b,{to:m,className:"btn-mobile"},r.a.createElement("button",{className:"btn ".concat(o," ").concat(p),onClick:n,type:a},t))},g=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(!0),m=Object(o.a)(l,2),s=m[0],d=m[1],g=function(){c(!1)},u=function(){window.innerWidth<=960?d(!1):d(!0)};return Object(n.useEffect)((function(){u()}),[]),window.addEventListener("resize",u),r.a.createElement("nav",{className:"navbar"},r.a.createElement("div",{className:"navbar-container"},r.a.createElement(i.b,{className:"navbar-logo",to:"/",onClick:g},r.a.createElement("i",{className:"fas fa-cat"}),r.a.createElement("h1",{className:"navbar-title"},"PAWS"),r.a.createElement("i",{className:"fas fa-dog"})),r.a.createElement("div",{className:"menu-icon",onClick:function(){c(!a)}},r.a.createElement("i",{className:a?"fas fa-times":"fas fa-bars"})),r.a.createElement("ul",{className:a?"nav-menu active":"nav-menu"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(i.b,{className:"nav-links",to:"/",onClick:g},"Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(i.b,{className:"nav-links",to:"/pet",onClick:g},"Pets")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(i.b,{className:"nav-links",to:"/petStore",onClick:g},"Pet Products")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(i.b,{className:"nav-links-mobile",to:"/sign-up",onClick:g},"Sign Up"))),s&&r.a.createElement(p,{buttonStyle:"btn--outline",link:"/sign-up"},"Sign Up")))},u=(a(39),a(21)),b=a.n(u),y=(a(40),function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"hero-container"},r.a.createElement("video",{src:b.a,autoPlay:!0,loop:!0,muted:!0}),r.a.createElement("h1",null,"For all your pet needs"),r.a.createElement("p",null,"What are you waiting for?"),r.a.createElement("div",{className:"hero-btns"},r.a.createElement(p,{className:"btns",buttonStyle:"btn--outline",buttonSize:"btn--large",link:"/sign-up"},"Get started"),r.a.createElement(p,{className:"btns",buttonStyle:"btn--primary",buttonSize:"btn--large",link:"/sign-up"},"Sign up"))))}),E=(a(41),a(22)),v=a(23),h=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"pets-container"},r.a.createElement("h1",{className:"title"},"Which side are you on?"),r.a.createElement("div",{className:"split left"},r.a.createElement("div",{className:"centered"},r.a.createElement("img",{src:E.image1,alt:""}),r.a.createElement("div",{className:"store-btns"},r.a.createElement(p,{className:"btns",buttonStyle:"btn--outline",buttonSize:"btn--large",link:"/pet/cat"},"Buy a Cat"),r.a.createElement(p,{className:"btns",buttonStyle:"btn--primary",buttonSize:"btn--large",link:"/petStore/cat"},"Buy Cat products")))),r.a.createElement("div",{className:"split right"},r.a.createElement("div",{className:"centered"},r.a.createElement("img",{src:v.image2,alt:""}),r.a.createElement("div",{className:"store-btns"},r.a.createElement(p,{className:"btns",buttonStyle:"btn--outline",buttonSize:"btn--large",link:"/pet/dog"},"Buy a Dog"),r.a.createElement(p,{className:"btns",buttonStyle:"btn--primary",buttonSize:"btn--large",link:"/petStore/dog"},"Buy Dog products"))))))},f=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(y,null),r.a.createElement(h,null))},S=(a(42),a(24)),N=a.n(S),k=function(e){var t=e.breed,a=e.name,c=e.price,l=e.gender,i=e.age,m=e.text,s=e.imgSrc,d=e.link,p=Object(n.useState)(!1),g=Object(o.a)(p,2),u=g[0],b=g[1];return r.a.createElement("div",{className:"store"},r.a.createElement("img",{onClick:function(){b(!0)},className:"card-img",src:s,alt:""}),r.a.createElement(N.a,{className:"Modal",isOpen:u,onRequestClose:function(){b(!1)}},r.a.createElement("div",{className:"modal"},r.a.createElement("img",{className:"store-left",src:s,alt:""}),r.a.createElement("div",{className:"store-right"},r.a.createElement("div",{className:"modal-header"},r.a.createElement("h1",{className:"modal-title"},a," , ",i),r.a.createElement("button",{className:"close-button",onClick:function(){b(!1)}},"\xd7")),r.a.createElement("div",{className:"modal-body"},r.a.createElement("h2",null,t),r.a.createElement("h2",null,c),r.a.createElement("h2",null,l),r.a.createElement("p",null,m),r.a.createElement("button",{className:"btn-card"},r.a.createElement("a",{className:"btn-link",href:d},"See More")),r.a.createElement("button",{className:"btn-card"},r.a.createElement("a",{className:"btn-link",href:"/sign-up"},"Contact")))))))},w=(a(52),[{name:"Alex",age:"3 yo",gender:"Male",breed:"Breed: German Shepherd",price:"Price: $50",text:"Most loving and friendly pet you will crave",imgSrc:"/images/dog1.jpg"},{name:"Tim",age:"3 yo",gender:"Male",breed:"Breed: German Shepherd",price:"Price: $50",text:"Most loving and friendly pet you will crave",imgSrc:"/images/dog2.jpg"},{name:"Charlie",age:"3 yo",gender:"Male",breed:"Breed: German Shepherd",price:"Price: $50",text:"Most loving and friendly pet you will crave",imgSrc:"/images/dog3.jpg"},{name:"Max",age:"3 yo",gender:"Male",breed:"Breed: German Shepherd",price:"Price: $50",text:"Most loving and friendly pet you will crave",imgSrc:"/images/dog4.jpg"},{name:"Oscar",age:"3 yo",gender:"Male",breed:"Breed: German Shepherd",price:"Price: $50",text:"Most loving and friendly pet you will crave",imgSrc:"/images/dog5.jpg"}]),x=[{name:"Alex",age:"3 yo",gender:"Male",breed:"Breed: German Shepherd",price:"Price: $50",text:"Most loving and friendly pet you will crave",imgSrc:"/images/cats1.jpg"},{name:"Alex",age:"3 yo",gender:"Male",breed:"Breed: German Shepherd",price:"Price: $50",text:"Most loving and friendly pet you will crave",imgSrc:"/images/cats2.jpg"},{name:"Alex",age:"3 yo",gender:"Male",breed:"Breed: German Shepherd",price:"Price: $50",text:"Most loving and friendly pet you will crave",imgSrc:"/images/cats3.jpg"},{name:"Alex",age:"3 yo",gender:"Male",breed:"Breed: German Shepherd",price:"Price: $50",text:"Most loving and friendly pet you will crave",imgSrc:"/images/cats4.jpg"},{name:"Alex",age:"3 yo",gender:"Male",breed:"Breed: German Shepherd",price:"Price: $50",text:"Most loving and friendly pet you will crave",imgSrc:"/images/cats5.jpg"}],j=function(){var e=w.slice(0,3),t=x.slice(0,3);return r.a.createElement("div",null,r.a.createElement("div",{className:"pet-section"},r.a.createElement("img",{className:"pet-back",src:"images/home1.jpg",alt:""}),r.a.createElement("h1",{className:"pet-text"},"A pet is all you need")),r.a.createElement("h1",{className:"pet-subtitle"},"Looking for Dogs?"),r.a.createElement("div",{className:"pet-pet"},e.map((function(e,t){return r.a.createElement(k,{key:t,link:"/pet/dog",imgSrc:e.imgSrc,name:e.name,age:e.age,price:e.price,breed:e.breed,gender:e.gender,text:e.text})}))),r.a.createElement("h1",{className:"pet-subtitle"},"Or Cats?"),r.a.createElement("div",{className:"pet-pet"},t.map((function(e,t){return r.a.createElement(k,{key:t,link:"/pet/cat",imgSrc:e.imgSrc,name:e.name,age:e.age,price:e.price,breed:e.breed,gender:e.gender,text:e.text})}))))},P=(a(53),[{name:"Pedigree",company:"Abbcs",price:"Price: $14",type:"Type: Food",review:"Recently bought the product, completley worth every penny -Abc",delivertTime:"Should be delivered in 3 working days",imgSrc:"images/dog_food2.jpg"},{name:"Pedigree",company:"Abbcs",price:"Price: $14",type:"Type: Food",review:"Recently bought the product, completley worth every penny -Abc",delivertTime:"Should be delivered in 3 working days",imgSrc:"images/dog_product_food.jpg"},{name:"E-17",company:"Browne",price:"Price: $14",type:"Type: Accessories",review:"Recently bought the product, completley worth every penny -Abc",delivertTime:"Should be delivered in 3 working days",imgSrc:"images/dog_collar.jpg"}]),M=[{name:"Pedigree",company:"Abbcs",price:"Price: $14",type:"Type: Food",review:"Recently bought the product, completley worth every penny -Abc",delivertTime:"Should be delivered in 3 working days",imgSrc:"images/cat_food_1.jpg"},{name:"Pedigree",company:"Abbcs",price:"Price: $14",type:"Type: Food",review:"Recently bought the product, completley worth every penny -Abc",delivertTime:"Should be delivered in 3 working days",imgSrc:"images/cat_food_2.jpg"},{name:"Type 1",company:"Browne",price:"Price: $14",type:"Type: House",review:"Recently bought the product, completley worth every penny -Abc",delivertTime:"Should be delivered in 3 working days",imgSrc:"images/cat_product_box.jpg"}],_=function(){var e=P.slice(0,3),t=M.slice(0,3);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("h1",{className:"petStore--title"},"Pet Store"),r.a.createElement("img",{className:"petStoreBack",src:"/images/dog_food4.jpg",alt:""})),r.a.createElement("h1",{className:"pet-subtitle"},"Looking for Dog Products?"),r.a.createElement("div",{className:"pet-pet"},e.map((function(e,t){return r.a.createElement(k,{key:t,link:"/petStore/dog",imgSrc:e.imgSrc,name:e.name,age:e.company,price:e.price,breed:e.type,gender:e.delivertTime,text:e.review})}))),r.a.createElement("h1",{className:"pet-subtitle"},"Cat Products"),r.a.createElement("div",{className:"pet-pet"},t.map((function(e,t){return r.a.createElement(k,{key:t,link:"/petStore/dog",imgSrc:e.imgSrc,name:e.name,age:e.company,price:e.price,breed:e.type,gender:e.delivertTime,text:e.review})}))))},C=(a(54),function(){return r.a.createElement("div",{className:"signUp"},r.a.createElement("h1",{className:"signUp__title"},"Comign soon..."))}),A=(a(55),function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"pet-container"},r.a.createElement("h1",{className:"Dogs__title"},"Coming soon"),r.a.createElement("img",{className:"Dogs__img",src:"/images/dog1.jpg",alt:"sd"})))}),B=(a(56),function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"pet-container_Cats"},r.a.createElement("h1",{className:"Cats__title"},"Coming Soon"),r.a.createElement("img",{className:"Cats__img",src:"/images/cats2.jpg",alt:"sd"})))});var T=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(i.a,null,r.a.createElement(g,null),r.a.createElement(m.c,null,r.a.createElement(m.a,{path:"/",exact:!0,component:f}),r.a.createElement(m.a,{path:"/pet",exact:!0,component:j}),r.a.createElement(m.a,{path:"/pet/dog",component:A}),r.a.createElement(m.a,{path:"/pet/cat",component:B}),r.a.createElement(m.a,{path:"/petStore",exact:!0,component:_}),r.a.createElement(m.a,{path:"/sign-up",component:C}))))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(T,null)),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.08ef0d54.chunk.js.map