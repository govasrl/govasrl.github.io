(this.webpackJsonpGOVA=this.webpackJsonpGOVA||[]).push([[0],{13:function(e,a,t){e.exports=t.p+"static/media/joe-gardner-2.76ff47ae.jpg"},162:function(e,a,t){e.exports=t.p+"static/media/antoine-barres.dfbf459c.jpg"},163:function(e,a,t){e.exports=t.p+"static/media/clouds.61c4e000.png"},164:function(e,a,t){e.exports=t.p+"static/media/1.7c5a9fc7.jpg"},165:function(e,a,t){e.exports=t.p+"static/media/2.b486a7d8.jpg"},166:function(e,a,t){e.exports=t.p+"static/media/3.5e5acc5c.jpg"},168:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),c=t(19),o=t.n(c),r=t(56),l=t(16),s=(t(64),t(65),t(66),t(15)),m=t(5),u=t.n(m),d=i.a.createContext(),p=d.Provider,f=d.Consumer,E=t(10),g=t(169),v=t(170),b=t(171),h=t(172),N=t(173),y=t(174),C=t(175),w=t(176),A=t(25),k=t(9),x=t(26);function j(){var e=Object(A.a)(["\n\tanimation: "," "," ",";\n"]);return j=function(){return e},e}function O(){var e=Object(A.a)(["",""]);return O=function(){return e},e}function T(){var e=Object(A.a)(["",""]);return T=function(){return e},e}Object(k.merge)(k.rollIn,k.rollOut,k.fadeOut);var S=x.a.div(j(),(function(e){return e.tiempo}),(function(e){return function(e){var a;if(Array.isArray(e)){var t=Object(k.merge)(k.fadeIn,k.rollOut),n=Object(k.merge)(k.rollOut,k.fadeOut);Object(k.merge)(t,n);a=Object(x.b)(T(),n)}else a=Object(x.b)(O(),k[e]);return a}(e.animacion)}),(function(e){return e.infinite?"infinite":""}));function z(e){var a=Object.assign({},e,e.config),t=a.tag,n=a.clase,c=a.children;return i.a.createElement(S,Object.assign({as:t,className:n},a),c)}z.defaultProps={animacion:"bounce",tiempo:"2s",clase:"",tag:"div",animes:["tada","filp"],infinite:!1};var I=z;function F(e){e.href;var a=e.descripcion,t=e.iconClass,n=e.id;return i.a.createElement(y.a,null,i.a.createElement(E.Link,{className:"nav-link pointer",smooth:!0,spy:!0,offset:-30,color:"transparent",to:n},i.a.createElement("i",{className:t}),a))}function G(e){var a=e.href,t=e.title,n=e.descripcion,c=e.tipo,o=e.iconClass;return i.a.createElement(y.a,null,i.a.createElement(C.a,{key:n+"_key_type_"+c,"data-placement":"bottom",href:a,target:"_blank",title:t},i.a.createElement("i",{className:o}),i.a.createElement("p",{className:"d-lg-none"},n)))}function L(e){var a=e.id,t=e.descripcion,n=e.toggleNavbarCollapse;return i.a.createElement(f,null,(function(e){var c=e.idioma,o=e.handleClick,r=!0;c===a&&(r=!1);var l={id:a,className:"btn-round",color:"danger",outline:r};return i.a.createElement(y.a,null,i.a.createElement(w.a,Object.assign({},l,{onClick:function(e){!function(e){o(e),document.documentElement.classList.contains("nav-open")&&n(e)}(e)}}),t))}))}var q=function(){var e=i.a.useState("navbar-transparent"),a=Object(s.a)(e,2),t=a[0],n=a[1],c=i.a.useState(!1),o=Object(s.a)(c,2),r=o[0],l=o[1],m=function(){l(!r),document.documentElement.classList.toggle("nav-open")};function d(){E.animateScroll.scrollToTop()}return i.a.useEffect((function(){var e=function(){document.documentElement.scrollTop>299||document.body.scrollTop>299?n(""):(document.documentElement.scrollTop<300||document.body.scrollTop<300)&&n("navbar-transparent")};return window.addEventListener("load",d),window.addEventListener("scroll",e),function(){window.removeEventListener("load",d),window.removeEventListener("scroll",e)}})),i.a.createElement(f,null,(function(e){var a=e.idioma,n=e.Config,c=(e.handleClick,n.header[a].menu),o={animacion:"pulse",tiempo:"10s",clase:!document.documentElement.classList.contains("nav-open")&&!t?"iconBrandCenter gris":"",infinite:!0};return i.a.createElement(g.a,{className:u()("fixed-top",t),expand:"lg"},i.a.createElement("a",{href:"https://api.whatsapp.com/send?phone=595972201844&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Reparaci%C3%B3n%20.",className:"float",target:"_blank"},i.a.createElement(I,{config:{animacion:"bounceIn",tiempo:"5s",infinite:!0}},i.a.createElement("i",{className:"fa fa-whatsapp fa1 my-float"}))),i.a.createElement(I,{config:o}),i.a.createElement(v.a,null,i.a.createElement("div",{className:"navbar-translate"},i.a.createElement(b.a,{"data-placement":"bottom"},i.a.createElement("div",{className:t?"gova blanco gova-navbar logo-size":"gova gris gova-navbar logo-size"})),i.a.createElement("button",{"aria-expanded":r,className:u()("navbar-toggler navbar-toggler",{toggled:r}),onClick:m},i.a.createElement("span",{className:"navbar-toggler-bar bar1"}),i.a.createElement("span",{className:"navbar-toggler-bar bar2"}),i.a.createElement("span",{className:"navbar-toggler-bar bar3"}))),i.a.createElement(h.a,{className:"justify-content-end",navbar:!0,isOpen:r},i.a.createElement(N.a,{navbar:!0},c.map((function(e,a,t){var n="";switch(e.tipo){case"icon":n=i.a.createElement(G,Object.assign({},e,{key:a+"_tipo_"+e.tipo}));break;case"menu":n=i.a.createElement(F,Object.assign({},e,{key:a+"_tipo_"+e.tipo}));break;case"idioma":n=i.a.createElement(L,Object.assign({},e,{key:a+"_tipo_"+e.tipo,toggleNavbarCollapse:function(){m()}}))}return n}))))))}))},M=t(52),V=t.n(M);t(162);var P=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"page-header section-dark",style:{backgroundImage:"url("+V.a+")"}},i.a.createElement("div",{className:"filter"}),i.a.createElement("div",{className:"content-center"},i.a.createElement(v.a,null,i.a.createElement("div",{className:"title-brand"},i.a.createElement("h4",{className:"presentation-title"})),i.a.createElement("div",{className:"fog-low"},i.a.createElement("img",{alt:"...",src:t(42)})),i.a.createElement("div",{className:"fog-low right"},i.a.createElement("img",{alt:"...",src:t(42)})))),i.a.createElement("div",{className:"moving-clouds",style:{backgroundImage:"url("+t(163)+")"}})))},D=t(177);var _=function(){return i.a.createElement(f,null,(function(e){var a=e.idioma,t=e.Config,n=(e.handleClick,t.header[a].menu);return i.a.createElement("footer",{className:"footer footer-black footer-white section-dark"},i.a.createElement(v.a,null,i.a.createElement(D.a,null,i.a.createElement("nav",{className:"footer-nav"},i.a.createElement("ul",null,n.filter((function(e){return"menu"===e.tipo})).map((function(e,a,t){return i.a.createElement("li",{key:"footer_"+a},i.a.createElement(E.Link,{className:"nav-link pointer",smooth:!0,spy:!0,offset:-10,color:"transparent",to:e.id},e.descripcion))})))),i.a.createElement("div",{className:"credits ml-auto"},i.a.createElement("span",{className:"copyright"},"\xa9 ",(new Date).getFullYear(),", made with"," ",i.a.createElement("i",{className:"fa fa-heart heart"})," by $$$")))))}))},B=t(178);var R=function(){return i.a.createElement(f,null,(function(e){var a=e.idioma,t=e.Config.body[a].nosotros,n=t.titulo,c=t.descripcion;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"section text-center",id:"seccion-nosotros"},i.a.createElement(v.a,null,i.a.createElement("div",{className:"text-center"},i.a.createElement("div",{className:"icon"},i.a.createElement("i",{className:"nc-icon turqueza titulo-size nosotros"}))),i.a.createElement(D.a,null,i.a.createElement(B.a,{className:"ml-auto mr-auto",md:"8"},i.a.createElement(I,null,i.a.createElement("h2",{className:"title"},n)),i.a.createElement("h5",{className:"description"},c))))))}))},H=t(179),U=t(180),W=t(181),J=t(54),Q=t(182);var $=function(){return i.a.createElement(f,null,(function(e){var a=e.idioma,t=e.Config.body[a].contactos,n=t.titulo,c=t.inputName,o=t.inputEmail,r=t.inputMessage,l=t.messagePlaceHolder,s=t.inputButton,m=t.inputTelefono;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"section landing-section",id:"seccion-contactos"},i.a.createElement(v.a,null,i.a.createElement(D.a,null,i.a.createElement(B.a,{className:"ml-auto mr-auto",md:"8"},i.a.createElement("h2",{className:"text-center"},n),i.a.createElement(H.a,{className:"contact-form"},i.a.createElement(D.a,null,i.a.createElement(B.a,{md:"6"},i.a.createElement("label",null,c),i.a.createElement(U.a,null,i.a.createElement(W.a,{addonType:"prepend"},i.a.createElement(J.a,null,i.a.createElement("i",{className:"nc-icon nc-single-02"}))),i.a.createElement(Q.a,{placeholder:c,type:"text"}))),i.a.createElement(B.a,{md:"6"},i.a.createElement("label",null,m),i.a.createElement(U.a,null,i.a.createElement(W.a,{addonType:"prepend"},i.a.createElement(J.a,null,i.a.createElement("i",{className:"nc-icon nc-mobile"}))),i.a.createElement(Q.a,{placeholder:m,type:"text"}))),i.a.createElement(B.a,{md:"12"},i.a.createElement("label",null,o),i.a.createElement(U.a,null,i.a.createElement(W.a,{addonType:"prepend"},i.a.createElement(J.a,null,i.a.createElement("i",{className:"nc-icon nc-email-85"}))),i.a.createElement(Q.a,{placeholder:o,type:"text"})))),i.a.createElement("label",null,r),i.a.createElement(Q.a,{placeholder:l,type:"textarea",rows:"4"}),i.a.createElement(D.a,null,i.a.createElement(B.a,{className:"ml-auto mr-auto",md:"4"},i.a.createElement(w.a,{className:"btn-fill",color:"danger",size:"lg"},s)))))))))}))};var K=function(e){var a=e.contenido,n=a.icon,c=void 0===n?"mecanico":n,o=a.infoTitle,r=void 0===o?"info-title":o,l=a.descripcion,s=void 0===l?"descripcion":l,m=a.image,u=void 0===m?"image":m;return i.a.createElement(i.a.Fragment,null,i.a.createElement(B.a,{md:"4"},i.a.createElement("div",{className:"info"},i.a.createElement("div",{className:"icon icon-info"},i.a.createElement("i",{className:"nc-icon turqueza servicios-size "+c})),i.a.createElement("div",{className:"description"},i.a.createElement("h4",{className:"info-title"},r),i.a.createElement("p",{className:"description"},s),i.a.createElement(D.a,null,i.a.createElement(B.a,{md:"12",sm:"12"},i.a.createElement("h4",{className:"description"}),i.a.createElement("img",{alt:"...",className:"img-rounded img-responsive",src:u}),i.a.createElement("div",{className:"img-details"},i.a.createElement("div",{className:"author"},i.a.createElement("img",{alt:"...",className:"img-circle img-no-padding img-responsive",src:t(13)})))))))))};var X=function(){return i.a.createElement(f,null,(function(e){var a=e.idioma,t=e.Config.body[a].servicios,n=t.titulo,c=t.intro,o=t.contenido;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"section text-center",id:"seccion-servicios"},i.a.createElement(v.a,null,i.a.createElement("div",{className:"text-center"},i.a.createElement("div",{className:"icon"},i.a.createElement("i",{className:"nc-icon turqueza titulo-size screwdriver-and-wrench"}))),i.a.createElement(D.a,null,i.a.createElement(B.a,{className:"ml-auto mr-auto",md:"8"},i.a.createElement("h2",{className:"title"},n),i.a.createElement("h5",{className:"description"},c),i.a.createElement("br",null),i.a.createElement(w.a,{className:"btn-round",color:"info",href:"#pablo",onClick:function(e){return e.preventDefault()}},"See Details"))),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement(D.a,null,o.map((function(e,a,t){return i.a.createElement(K,{key:a,contenido:e})}))))))}))};var Y=function(){return i.a.createElement(f,null,(function(e){var a=e.idioma,t=e.Config.footer[a].preFooter.descripcion;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"section section-dark section-nucleo-icons"},i.a.createElement(v.a,null,i.a.createElement(D.a,null,i.a.createElement(B.a,{lg:"6",md:"12"},i.a.createElement("div",{className:"gova2 blanco grande gova-prefooter"}),i.a.createElement("br",null),i.a.createElement("p",{className:"description"},t),i.a.createElement("br",null),i.a.createElement(w.a,{className:"btn-round ml-1",color:"danger",href:"#",outline:!0,target:"_blank"},"Example")),i.a.createElement(B.a,{lg:"6",md:"12"},i.a.createElement("div",{className:"icons-container"},i.a.createElement("i",{className:"nc-icon imagen check blanco mediano"}),i.a.createElement("i",{className:"nc-icon imagen check2 blanco mediano"}),i.a.createElement("i",{className:"nc-icon imagen auto blanco mediano"}),i.a.createElement("i",{className:"nc-icon imagen transmision blanco mediano"}),i.a.createElement("i",{className:"nc-icon imagen timing-belt blanco mediano"}),i.a.createElement("i",{className:"nc-icon imagen mercedes rojo grande"}),i.a.createElement("i",{className:"nc-icon imagen tank blanco mediano"}),i.a.createElement("i",{className:"nc-icon imagen screwdriver-and-wrench blanco mediano"}),i.a.createElement("i",{className:"nc-icon imagen amg blanco marcas"}),i.a.createElement("i",{className:"nc-icon imagen kompressor blanco marcas"}),i.a.createElement("i",{className:"nc-icon imagen voltage blanco mediano"}),i.a.createElement("i",{className:"nc-icon imagen slk blanco marcas"}),i.a.createElement("i",{className:"nc-icon imagen signaling blanco mediano"}),i.a.createElement("i",{className:"nc-icon imagen tachometer blanco mediano"}))))))," ")}))},Z={animacion:"bounceIn",tiempo:"6s linear infinite"};function ee(e){var a=e.elemento,t=a.descripcion;a.icon;return i.a.createElement("div",{className:"info info-horizontal",id:"seccion-mapa"},i.a.createElement("div",{className:"icon icon-info"},i.a.createElement("i",{className:"nc-icon "+a.icon})),i.a.createElement("div",{className:"description"},i.a.createElement("h4",{className:"info-title"},a.titulo),t.map((function(e,a,t){return i.a.createElement("p",{key:"sub_"+a},e)}))))}var ae=function(){return i.a.createElement(f,null,(function(e){var a=e.idioma,t=e.Config.body[a].direccion,n=t.ubicacion,c=t.telefono,o=t.titulo;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"section landing-section"},i.a.createElement(v.a,null,i.a.createElement(D.a,null,i.a.createElement(B.a,{className:"ml-auto mr-auto",md:"6",style:{padding:"20px",margin:"20px"}},i.a.createElement("h2",{className:"text-center"},o))),i.a.createElement(D.a,null,i.a.createElement(B.a,{className:"ml-auto text-center",md:"3"},i.a.createElement("div",{className:"card-body"},i.a.createElement(ee,{elemento:n}),i.a.createElement(I,{config:Z},i.a.createElement(ee,{elemento:c})))),i.a.createElement(B.a,{className:"ml-auto",md:"9"},i.a.createElement("div",{style:{}},i.a.createElement("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d902.0580086122307!2d-57.595365170818944!3d-25.262778786149937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDE1JzQ2LjAiUyA1N8KwMzUnNDEuMyJX!5e0!3m2!1ses!2spy!4v1583454004829!5m2!1ses!2spy",width:"100%",height:"450",frameBorder:"0",style:{border:"0"},allowFullScreen:"",title:"Mapa"})))))))}))},te=t(183),ne=t(184),ie=t(185),ce=t(55),oe=t(186),re=[{src:t(164),altText:"Somewhere",caption:"Somewhere"},{src:t(165),altText:"Somewhere else",caption:"Somewhere else"},{src:t(166),altText:"Here it is",caption:"Here it is"}];var le=function(){var e=i.a.useState(0),a=Object(s.a)(e,2),t=a[0],n=a[1],c=i.a.useState(!1),o=Object(s.a)(c,2),r=o[0],l=o[1],m=function(){l(!0)},u=function(){l(!1)},d=function(){if(!r){var e=t===re.length-1?0:t+1;n(e)}},p=function(){if(!r){var e=0===t?re.length-1:t-1;n(e)}};return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"section pt-o",id:"carousel"},i.a.createElement(v.a,null,i.a.createElement(D.a,null,i.a.createElement(B.a,{className:"ml-auto mr-auto",md:"8"},i.a.createElement(te.a,{className:"page-carousel"},i.a.createElement(ne.a,{activeIndex:t,next:d,previous:p},i.a.createElement(ie.a,{items:re,activeIndex:t,onClickHandler:function(e){r||n(e)}}),re.map((function(e){return i.a.createElement(ce.a,{onExiting:m,onExited:u,key:e.src},i.a.createElement("img",{src:e.src,alt:e.altText}),i.a.createElement(oe.a,{captionText:e.caption,captionHeader:""}))})),i.a.createElement("a",{className:"left carousel-control carousel-control-prev","data-slide":"prev",href:"#pablo",onClick:function(e){e.preventDefault(),p()},role:"button"},i.a.createElement("span",{className:"fa fa-angle-left"}),i.a.createElement("span",{className:"sr-only"},"Previous")),i.a.createElement("a",{className:"right carousel-control carousel-control-next","data-slide":"next",href:"#pablo",onClick:function(e){e.preventDefault(),d()},role:"button"},i.a.createElement("span",{className:"fa fa-angle-right"}),i.a.createElement("span",{className:"sr-only"},"Next"))))))))," ")},se={global:{titulo:" GOVA SA "},header:{config:"config",es:{menu:[{descripcion:"twitter",tipo:"icon",href:"#",title:"Follow us on Twitter",iconClass:"fa fa-twitter"},{descripcion:"facebook",tipo:"icon",href:"#",title:"Follow us on Facebook",iconClass:"fa fa-facebook-square"},{descripcion:"instagram",tipo:"icon",href:"#",title:"Follow us on Instagram",iconClass:"fa fa-instagram"},{descripcion:"Principal",tipo:"menu",iconClass:"fa fa-home",href:"#",id:"seccion-principal"},{descripcion:"Nosotros",tipo:"menu",iconClass:"fa fa-users",href:"#",id:"seccion-nosotros"},{descripcion:"Servicios",tipo:"menu",iconClass:"fa nc-icon nc-settings",href:"#",id:"seccion-servicios"},{descripcion:"Contactos",tipo:"menu",iconClass:"fa nc-icon nc-badge",href:"#",id:"seccion-contactos"},{descripcion:"Ubicaci\xf3n",tipo:"menu",iconClass:"fa nc-icon nc-pin-3",href:"#",id:"seccion-mapa"},{descripcion:"ES",tipo:"idioma",href:"#",id:"es"},{descripcion:"US",tipo:"idioma",href:"#",id:"us"}]},us:{menu:[{descripcion:"twitter",tipo:"icon",href:"#",title:"Follow us on Twitter",iconClass:"fa fa-twitter"},{descripcion:"facebook",tipo:"icon",href:"#",title:"Follow us on Facebook",iconClass:"fa fa-facebook-square"},{descripcion:"instagram",tipo:"icon",href:"#",title:"Follow us on Instagram",iconClass:"fa fa fa-instagram"},{descripcion:"Home",tipo:"menu",iconClass:"fa fa-home",href:"#",id:"seccion-principal"},{descripcion:"About Us",tipo:"menu",iconClass:"fa fa-users",href:"#",id:"seccion-nosotros"},{descripcion:"Services",tipo:"menu",iconClass:"fa nc-icon nc-settings",href:"#",id:"seccion-servicios"},{descripcion:"Contact",tipo:"menu",iconClass:"fa nc-icon nc-badge",href:"#",id:"seccion-contactos"},{descripcion:"Location",tipo:"menu",iconClass:"fa nc-icon nc-pin-3",href:"#",id:"seccion-mapa"},{descripcion:"ES",tipo:"idioma",href:"#",id:"es"},{descripcion:"US",tipo:"idioma",href:"#",id:"us"}]}},body:{config:"config",es:{nosotros:{icon:"",titulo:"Quienes Somos?",descripcion:"GOVA S.A. es un taller especialista en autom\xf3viles de las marcas Mercedes Benz, El Taller GOVA S.A desde su inicio cuenta con la certificaci\xf3n de Servicio T\xe9cnico Autorizado por Condor S.A.C.I. para los veh\xedculos Mercedes-Benz. En el taller encontraran personal especializado para realizar trabajos de mec\xe1nica general, torner\xeda, chaper\xeda y pintura, y electricidad, adem\xe1s de brindar servicios de auxilio a todo el pa\xeds. Actualmente tenemos convenios comerciales en todo lo referente a servicios, reparaci\xf3n, y provisi\xf3n de repuestos con Condor S.A.C.I. para la atenci\xf3n de los clientes de GOVA S."},servicios:{titulo:"Contamos con todos los servicios que su veh\xedculo necesita!",intro:"Desde talleres GOVA tratamos de dar el mejor servicio y estar siempre pr\xf3ximo al cliente. Contamos con un equipo de expertos profesionales en el sector capaces de ofrecerte los mejores servicios para su veh\xedculo y un trato completamente personalizado. Nuestro objetivo principal es proporcionar a nuestros clientes un servicio de calidad.",contenido:[{icon:"mecanico",infoTitle:"Mec\xe1nica General",descripcion:"Reparaci\xf3n de motor, caja, diferencial, frenos, suspensiones, embrague, frenos, radiador, embrague, tren delantero, eje trasero, trucky, etc.",image:t(43),"image-footer":t(13)},{icon:"check2",infoTitle:"Diagn\xf3stico Computarizado",descripcion:"Realizamos Diagn\xf3stico Computarizado del motor para identificar cu\xe1les pueden ser las posibles \xe1reas que no est\xe1n funcionando adecuadamente en el motor de un auto.",image:t(44),"image-footer":t(13)},{icon:"transmision",infoTitle:"Trasmisiones Autom\xe1ticas",descripcion:"GOVA SA cuenta con Equipos y Personal Especializados Para La Reparaci\xf3n Integral de Cajas Autom\xe1ticas, Todo Tipo de Caja Autom\xe1tica Linea Mercedes, TRABAJOS GARANTIZADOS Y AL MEJOR PRECIO!!",image:t(45),"image-footer":t(13)},{icon:"electricidad",infoTitle:"Electricidad",descripcion:"Instalaciones el\xe9ctricas, reparaci\xf3n de alternador, motor de arranque, testeo de motores electr\xf3nicos.",image:t(46),"image-footer":t(13)},{icon:"torneria",infoTitle:"Torner\xeda",descripcion:"Contamos con un torno para la Reparaci\xf3n de punta eje, cardan, crucetas, rectificaci\xf3n de tambores y discos de freno, rectificaci\xf3n de plato de presi\xf3n, volante motor, elaboraci\xf3n de bujes, soportes y acoples.",image:t(47),"image-footer":t(13)}]},contactos:{titulo:"En que te podemos ayudar, envianos un mensaje!",subtitulo:"Visita nuestro Taller",inputName:"Nombre",inputEmail:"Correo",inputTelefono:"Tel\xe9fono",inputMessage:"Mensaje",messagePlaceHolder:"En que podemos ayudarte ...",inputButton:"Enviar mensaje",descripcion:"Inglaterra N\xb0153 c/ Artigas Asunci\xf3n - Paraguay"},direccion:{titulo:"Encu\xe9ntranos",ubicacion:{titulo:"Visita nuestro Taller",icon:"nc-pin-3",descripcion:["Inglaterra N\xb0153 c/ Artigas","Asunci\xf3n - Paraguay"]},telefono:{titulo:"Ll\xe1manos",icon:"nc-badge",descripcion:["Gova S.A.","(0972) 201 844 - (021) 290 718","Lunes - S\xe1bados, 8:00-19:00"]}}},us:{nosotros:{icon:"",titulo:"About Us",descripcion:"GOVA S.A. is a workshop specialized in automobiles of the Mercedes Benz brands, El Taller GOVA S.A from its initial account with the certification of the Technical Service Authorized by Condor S.A.C.I. for Mercedes-Benz vehicles. In the workshop they will find specialized personnel to carry out general mechanical work, turning, metalwork and painting, and electricity, in addition to providing support services to the entire country. We currently have commercial agreements in everything related to services, repair and spare parts supply with Condor S.A.C.I. for customer service of GOVA S."},servicios:{titulo:"We have all the services that your vehicle needs!",intro:"From GOVA workshops we try to give the best service and always be close to the customer. We have a team of professional experts in the sector capable of offering you the best services for your vehicle and a completely personalized service. Our main objective is to provide our clients with a quality service.",contenido:[{icon:"mecanico",infoTitle:"General Mechanics.",descripcion:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi eaque ullam fugit magnam placeat non eligendi aliquid quasi! Pariatur officiis fugiat nisi ut consequuntur nam, commodi tempora et, impedit. At.",image:t(43),"image-footer":t(13)},{icon:"check2",infoTitle:"Computerized Diagnosis",descripcion:"We carry out Computerized Diagnosis of the engine to identify which are the possible areas that are not working properly in the engine of a car.",image:t(44),"image-footer":t(13)},{icon:"transmision",infoTitle:"Automatic transmissions",descripcion:"GOVA SA has Specialized Equipment and Personnel For the Comprehensive Repair of Automatic Gearboxes, All Kinds of Automatic Gearbox Mercedes Line, JOBS GUARANTEED AND AT THE BEST PRICE !!",image:t(45),"image-footer":t(13)},{icon:"electricidad",infoTitle:"Electricity",descripcion:"Electrical installations, alternator repair, starter, testing of electronic motors.",image:t(46),"image-footer":t(13)},{icon:"torneria",infoTitle:"Turnery",descripcion:"We have a lathe for the repair of shaft end, gimbal, spreaders, rectification of drums and brake discs, rectification of pressure plate, flywheel, development of bushings, supports and couplings.",image:t(47),"image-footer":t(13)}]},contactos:{titulo:"How can we help you, send us a message!",subtitulo:"Visit our Workshop",inputName:"Name",inputEmail:"Email",inputMessage:"Message",messagePlaceHolder:"Tell us what you need ...",inputButton:"Send Message",descripcion:"Inglaterra N\xb0153 c/ Artigas Asunci\xf3n - Paraguay",inputTelefono:"Phone"},direccion:{titulo:"Find us",ubicacion:{titulo:"Visit our Workshop",icon:"nc-pin-3",descripcion:["Inglaterra N\xb0153 c/ Artigas","Asunci\xf3n - Paraguay"]},telefono:{titulo:"Call us",icon:"nc-badge",descripcion:["Gova S.A.","(0972) 201 844 - (021) 290 718","Lunes - S\xe1bados, 8:00-19:00"]}}}},footer:{config:"config",es:{preFooter:{descripcion:"Desde talleres GOVA tratamos de dar el mejor servicio y estar siempre pr\xf3ximo al cliente. Contamos con un equipo de expertos profesionales en el sector capaces de ofrecerte los mejores servicios para su veh\xedculo y un trato completamente personalizado. Nuestro objetivo principal es proporcionar a nuestros clientes un servicio de calidad."}},us:{preFooter:{descripcion:"From GOVA workshops we try to give the best service and always be close to the customer. We have a team of professional experts in the sector capable of offering you the best services for your vehicle and a completely personalized service. Our main objective is to provide our clients with a quality service."}}}};var me=function(){var e=Object(n.useState)(localStorage.getItem("idioma")||"es"),a=Object(s.a)(e,2),t=a[0],c=a[1];return document.documentElement.classList.remove("nav-open"),i.a.useEffect((function(){return document.body.classList.add("index"),function(){document.body.classList.remove("index")}})),i.a.createElement(p,{value:{idioma:t,handleClick:function(e){var a=e.target.id;a?(c(a),localStorage.setItem("idioma",a)):console.log("Ocurrio algo "+a)},Config:se}},i.a.createElement(i.a.Fragment,null,i.a.createElement(E.Element,{name:"seccion-principal"},i.a.createElement(q,null),i.a.createElement(P,null)),i.a.createElement("div",{className:"main"},i.a.createElement(E.Element,{name:"seccion-nosotros"},i.a.createElement(R,null)),i.a.createElement(E.Element,{name:"seccion-servicios"},i.a.createElement(X,null)),i.a.createElement(E.Element,{name:"seccion-galeria"},i.a.createElement(le,null)),i.a.createElement(E.Element,{name:"seccion-contactos"},i.a.createElement($,null)),i.a.createElement(E.Element,{name:"seccion-mapa"},i.a.createElement(ae,null)),i.a.createElement(E.Element,{name:"seccion-footer"},i.a.createElement(Y,null),i.a.createElement(_,null)))))};o.a.render(i.a.createElement(r.a,null,i.a.createElement(l.d,null,i.a.createElement(l.b,{path:"/",render:function(e){return i.a.createElement(me,e)}}),i.a.createElement(l.a,{to:"/index"}))),document.getElementById("root"))},42:function(e,a,t){e.exports=t.p+"static/media/fog-low.7812184c.png"},43:function(e,a,t){e.exports=t.p+"static/media/mecanica_general.e1c069ac.jpg"},44:function(e,a,t){e.exports=t.p+"static/media/diagnostico_computarizado.077377cf.jpg"},45:function(e,a,t){e.exports=t.p+"static/media/transmision.a53ee012.jpg"},46:function(e,a,t){e.exports=t.p+"static/media/electricidad.42d6572d.jpg"},47:function(e,a,t){e.exports=t.p+"static/media/torneria.05d44bca.jpg"},52:function(e,a,t){e.exports=t.p+"static/media/principal.2bf06320.png"},59:function(e,a,t){e.exports=t(168)},64:function(e,a,t){},65:function(e,a,t){},66:function(e,a,t){}},[[59,1,2]]]);
//# sourceMappingURL=main.ab507a82.chunk.js.map