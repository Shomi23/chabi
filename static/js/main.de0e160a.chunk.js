(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{31:function(e,a,t){e.exports=t.p+"static/media/truck5.4181f6d1.jpeg"},32:function(e,a,t){e.exports=t.p+"static/media/truck-icon.b5bd8a3c.svg"},33:function(e,a,t){e.exports=t.p+"static/media/correct.e8a8498b.svg"},34:function(e,a,t){e.exports=t.p+"static/media/road.7ee757d5.svg"},37:function(e,a,t){e.exports=t(77)},42:function(e,a,t){},43:function(e,a,t){},53:function(e,a,t){},54:function(e,a,t){},55:function(e,a,t){},72:function(e,a,t){},73:function(e,a,t){},76:function(e,a,t){},77:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(9),s=t.n(c),r=(t(42),t(43),t(10)),o=(t(53),function(){return l.a.createElement("nav",{className:"nav-wrapper"},l.a.createElement("h1",null,l.a.createElement("a",{className:"home_link",href:"#home"},"TIMOK019")),l.a.createElement("div",{className:"nav-block"},l.a.createElement(r.Link,{activeClass:"active",to:"home",spy:!0,smooth:!0,hashSpy:!0,offset:-100,duration:800,delay:0,isDynamic:!0,ignoreCancelEvents:!1},"Home"),l.a.createElement(r.Link,{activeClass:"active",to:"about",spy:!0,smooth:!0,hashSpy:!0,offset:-100,duration:800,delay:0,isDynamic:!0,ignoreCancelEvents:!1},"About"),l.a.createElement(r.Link,{activeClass:"active",to:"contact",spy:!0,smooth:!0,hashSpy:!0,offset:-100,duration:800,delay:0,isDynamic:!0,ignoreCancelEvents:!1},"Contact")))}),i=(t(54),function(){return l.a.createElement("div",{id:"home",className:"home"},l.a.createElement("div",{className:"home-heading-wrapper"},l.a.createElement("h1",null,"TRANSPORT EVERYWHERE"),l.a.createElement("p",null,"Our state-of-the-art vehicles are in use across the United States, either under our own flag or with the livery of our clients.")))}),m=t(28),u=t(29),d=t(36),E=t(35),v=(t(55),function(e){var a=e.type,t=e.labelName,n=e.labelConent,c=e.required,s=e.value,r=e.handleFields;return l.a.createElement("div",{className:"input-block"},l.a.createElement("input",{onChange:r,value:s,type:a,name:t,required:c,autoComplete:"off"}),l.a.createElement("label",{className:"form-label"},l.a.createElement("span",{className:"label-content"},n)))}),f=t(30),h=t.n(f),p=(t(72),function(e){Object(d.a)(t,e);var a=Object(E.a)(t);function t(){var e;Object(m.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(e=a.call.apply(a,[this].concat(l))).state={formData:{firtsname:"",lastname:"",email:"",message:""},submitted:!1},e.handleForm=function(a){h.a.post("https://formcarry.com/s/FZRZQqNhvjc",e.state.formData,{headers:{Accept:"application/json"}}).then((function(e){console.log(e)})).catch((function(e){console.log(e)})),a.preventDefault();e.setState({formData:{firtsname:"",lastname:"",email:"",message:""},submitted:!0},(function(){setTimeout((function(){return e.setState({submitted:!1})}),3e3)}))},e.handleFields=function(a){var t=e.state.formData;t[a.target.name]=a.target.value,e.setState({formData:t})},e}return Object(u.a)(t,[{key:"render",value:function(){var e=this.state.formData,a=e.firtsname,t=e.lastname,n=e.email,c=e.message,s=this.state.submitted;return l.a.createElement("section",{id:"contact"},l.a.createElement("div",null,l.a.createElement("div",{className:"container"},s?l.a.createElement("h2",{id:"msg_sent"},"Message Sent"):"",l.a.createElement("div",{className:"connect"},l.a.createElement("h1",null,"CONTACT US")),l.a.createElement("div",{className:"form-block"},l.a.createElement("form",{className:"form",action:"",method:"POST",acceptCharset:"UTF-8",encType:"multipart/form-data"},l.a.createElement("div",{className:"name-block"},l.a.createElement(v,{handleFields:this.handleFields,type:"text",value:a,name:"firtsname",labelName:"firtsname",labelConent:"First Name",required:!0}),l.a.createElement(v,{handleFields:this.handleFields,type:"text",value:t,name:"lastname",labelName:"lastname",labelConent:"Last Name",required:!0}),l.a.createElement(v,{handleFields:this.handleFields,type:"email",value:n,name:"email",labelName:"email",labelConent:"Email",required:!0})),l.a.createElement("div",{className:"textarea-block"},l.a.createElement("textarea",{onChange:this.handleFields,value:c,type:"text",name:"message",placeholder:"Type your message here...",wrap:"off",autoComplete:"off",multilline:!0})),l.a.createElement("button",{id:"button",type:"submit",name:"button",disabled:s},s?"Message Sent":!s&&"Send Message"))))))}}]),t}(l.a.Component)),b=t(31),N=t.n(b),g=t(32),y=t.n(g),k=t(33),w=t.n(k),C=t(34),F=t.n(C),S=(t(73),function(){return l.a.createElement("div",{id:"icons",className:"icons"},l.a.createElement("div",{className:"icons-row"},l.a.createElement("div",{className:"icon-col"},l.a.createElement("div",{className:"icon-col-img"},l.a.createElement("img",{src:y.a,alt:"icon"})),l.a.createElement("h3",null,"We ensures you the best quality services"),l.a.createElement("p",null,"Friendly staff and great vehicles will ensure you maximum quality")),l.a.createElement("div",{className:"icon-col"},l.a.createElement("div",{className:"icon-col-img"},l.a.createElement("img",{src:F.a,alt:"icon",id:"road"})),l.a.createElement("h3",null,"Safe and on time delivery of your goods"),l.a.createElement("p",null,"From big to small, we do it all, from warehouse to your client")),l.a.createElement("div",{className:"icon-col"},l.a.createElement("div",{className:"icon-col-img"},l.a.createElement("img",{src:w.a,alt:"icon",id:"goods"})),l.a.createElement("h3",null,"Very careful handling of valuable goods"),l.a.createElement("p",null,"Your cargo is our concern"))))}),O=t(4),T=t(3),x=(t(76),function(){return l.a.createElement("div",{id:"about",className:"about"},l.a.createElement("div",{className:"about-row"},l.a.createElement("div",{className:"about-col"},l.a.createElement("h2",null,"ABOUT US"),l.a.createElement("p",null,"From project cargo to international transportation and domestic retail distribution and delivery, we provide a wide range of transportation services. "),l.a.createElement("p",null,"Our capabilities allow us to work on projects of all sizes. From tiny personal projects to large-scale mega-builds, we've got you covered."),l.a.createElement("div",{className:"contact-section"},l.a.createElement("div",{className:"contact-block-item"},l.a.createElement("div",{className:"icon"},l.a.createElement(O.a,{className:"font-aws",icon:T.a,style:{fill:"red"}})),l.a.createElement("div",null,l.a.createElement("h2",null,"TIMOK019 inc."))),l.a.createElement("div",{className:"contact-block-item"},l.a.createElement("div",{className:"icon"},l.a.createElement(O.a,{icon:T.d,className:"iconfa"})),l.a.createElement("div",null,l.a.createElement("h2",null,"5216s lockwood ave"),l.a.createElement("h2",null,"Chicago , IL 60638, USA "))),l.a.createElement("div",{className:"contact-block-item"},l.a.createElement("div",{className:"icon"},l.a.createElement(O.a,{icon:T.c,className:"iconfa"})),l.a.createElement("div",null,l.a.createElement("h2",null,"+12028309765"))),l.a.createElement("div",{className:"contact-block-item"},l.a.createElement("div",{className:"icon"},l.a.createElement(O.a,{icon:T.b,className:"iconfa"})),l.a.createElement("h2",null,"customers@timok019.com")))),l.a.createElement("div",{className:"about-img"},l.a.createElement("img",{src:N.a,alt:"about-us-img"}))),l.a.createElement(S,null))});var j=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(o,null),l.a.createElement(i,null),l.a.createElement(x,null),l.a.createElement(p,null),l.a.createElement("p",{className:"copyright"},"\xa9 2020 TIMOK019"))};s.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(j,null)),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.de0e160a.chunk.js.map