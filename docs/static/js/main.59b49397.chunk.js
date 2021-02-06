(this.webpackJsonptrivias=this.webpackJsonptrivias||[]).push([[0],{157:function(e,a,t){"use strict";t.r(a);var r=t(1),s=t(2),n=t.n(s),o=t(32),i=t.n(o),c=(t(69),t(15)),u=t(12),l=t(8),d=t(7),p=t(30);t(158),t(75);p.a.initializeApp({apiKey:"AIzaSyBOCevG_BCf5F4hlKRQ3qBgB0a4Z0cBERk",authDomain:"react-app-plataforma.firebaseapp.com",projectId:"react-app-plataforma",storageBucket:"react-app-plataforma.appspot.com",messagingSenderId:"758540809747",appId:"1:758540809747:web:77e69f91e5fa310c3d71e6"});var m=p.a.firestore(),j=new p.a.auth.GoogleAuthProvider,h=t(9),b=t.n(h),g=t(18),f=t(13),O=t.n(f),x="[Auth] Login",v="[Auth] Logout",C="[UI] Set Error",E="[UI] Remove Error",y="[UI] Start loading",N="[UI] Finish loading",P=function(e){return{type:C,payload:e}},S=function(){return{type:E}},A=function(){return{type:N}},w=function(e,a){return function(t){t({type:y}),p.a.auth().signInWithEmailAndPassword(e,a).then((function(e){var a=e.user;t(k(a.uid,a.displayName)),t(A())})).catch((function(e){console.log(e),t(A()),"auth/user-not-found"!==e.code&&"auth/wrong-password"!==e.code||(e.message="El correo no la contrase\xf1a no son correctos"),O.a.fire("Error",e.message,"error")}))}},k=function(e,a){return{type:x,payload:{uid:e,displayName:a}}},_=function(){return{type:v}},M=t(34),q=t(10),R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=Object(s.useState)(e),t=Object(u.a)(a,2),r=t[0],n=t[1],o=function(){n(e)},i=function(e){var a=e.target;n(Object(q.a)(Object(q.a)({},r),{},Object(M.a)({},a.name,a.value)))};return[r,i,o]},F=t(35),B=t.n(F),T=function(){var e,a=Object(c.b)(),t=Object(c.c)((function(e){return e.ui})).loading,s=R({email:"",password:""}),n=Object(u.a)(s,2),o=n[0],i=n[1],d=o.email,m=o.password,h=function(){return 0===d.trim().length?(a(P(e="El correo es requerido")),O.a.fire("Error",e,"error"),!1):B.a.isEmail(d)?0===m.trim().length?(a(P(e="La contrase\xf1a es requerida")),O.a.fire("Error",e,"error"),!1):m.trim().length<6?(a(P(e="A contrase\xf1a le faltan caracteres")),O.a.fire("Error",e,"error"),!1):(a(S()),!0):(a(P(e="El correo no es valido")),O.a.fire("Error",e,"error"),!1)};return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h3",{className:"auth__title",children:"Login"}),Object(r.jsxs)("form",{onSubmit:function(e){e.preventDefault(),h()&&a(w(d,m))},children:[Object(r.jsx)("input",{type:"text",placeholder:"Correo",name:"email",className:"auth__input",autoComplete:"off",value:d,onChange:i}),Object(r.jsx)("input",{type:"password",placeholder:"Contrase\xf1a",name:"password",className:"auth__input",value:m,onChange:i}),Object(r.jsx)("button",{type:"submit",className:"btn btn-primary btn-block",disabled:t,children:"Iniciar sesion"}),Object(r.jsxs)("div",{className:"auth__social-networks",children:[Object(r.jsx)("p",{children:"Iniciar sesion con redes sociales"}),Object(r.jsxs)("div",{className:"google-btn",onClick:function(){a((function(e){p.a.auth().signInWithPopup(j).then((function(a){var t=a.user;e(k(t.uid,t.displayName))}))}))},children:[Object(r.jsx)("div",{className:"google-icon-wrapper",children:Object(r.jsx)("img",{className:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"google button"})}),Object(r.jsx)("p",{className:"btn-text",children:Object(r.jsx)("b",{children:"Iniciar sesion con google"})})]})]}),Object(r.jsx)(l.b,{to:"/auth/register",className:"link",children:"Crear cuenta"})]})]})},L=function(){var e,a=Object(c.b)(),t=R({name:"",email:"",password:"",password2:""}),s=Object(u.a)(t,2),n=s[0],o=s[1],i=n.name,d=n.email,m=n.password,j=n.password2,h=function(){return 0===i.trim().length?(a(P(e="El nombre es requerido")),O.a.fire("Error",e,"error"),!1):B.a.isEmail(d)?m.trim().lengh<6?(a(P(e="La contrase\xf1a debe tener al menos 6 caracteres")),O.a.fire("Error",e,"error"),!1):m!==j?(a(P(e="Las contrase\xf1as no coinciden")),O.a.fire("Error",e,"error"),!1):(a(S()),!0):(a(P(e="El correo no es valido")),O.a.fire("Error",e,"error"),!1)};return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h3",{className:"auth__title",children:"Registro"}),Object(r.jsxs)("form",{onSubmit:function(e){e.preventDefault(),h()&&a(function(e,a,t){return function(r){p.a.auth().createUserWithEmailAndPassword(e,a).then(function(){var e=Object(g.a)(b.a.mark((function e(a){var s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=a.user,e.next=3,s.updateProfile({displayName:t});case 3:r(k(s.uid,s.displayName));case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()).catch((function(e){"auth/weak-password"===e.code&&(e.message="La contrase\xf1a debe tener al menos 6 caracteres"),O.a.fire("Error",e.message,"error")}))}}(d,m,i))},children:[Object(r.jsx)("input",{type:"text",placeholder:"Nombre",name:"name",className:"auth__input",autoComplete:"off",value:i,onChange:o}),Object(r.jsx)("input",{type:"text",placeholder:"Correo",name:"email",className:"auth__input",autoComplete:"off",value:d,onChange:o}),Object(r.jsx)("input",{type:"password",placeholder:"Contrase\xf1a",name:"password",className:"auth__input",value:m,onChange:o}),Object(r.jsx)("input",{type:"password",placeholder:"Confirmar contrase\xf1a",name:"password2",className:"auth__input",value:j,onChange:o}),Object(r.jsx)("button",{type:"submit",className:"btn btn-primary btn-block mb-5",children:"Registrarse"}),Object(r.jsx)(l.b,{to:"/auth/login",className:"link",children:"\xbfYa tienes cuenta?"})]})]})},D=function(){return Object(r.jsx)("div",{className:"auth__main",children:Object(r.jsx)("div",{className:"auth__box-container",children:Object(r.jsxs)(d.d,{children:[Object(r.jsx)(d.b,{exact:!0,path:"/auth/login",component:T}),Object(r.jsx)(d.b,{exact:!0,path:"/auth/register",component:L}),Object(r.jsx)(d.a,{to:"/auth/login"})]})})})},H=function(){var e=Object(c.c)((function(e){return e.auth})).name,a=Object(c.b)();return Object(r.jsxs)("nav",{children:[Object(r.jsxs)("ul",{children:[Object(r.jsxs)(l.b,{to:"/Home",children:[Object(r.jsx)("i",{className:"fas fa-home"}),"Inicio"]}),Object(r.jsxs)(l.b,{to:"/Home/Categorias",children:[Object(r.jsx)("i",{className:"fas fa-book-open"}),"Categorias"]}),Object(r.jsxs)(l.b,{to:"/Home/TablasDePuntuacion",children:[Object(r.jsx)("i",{className:"fas fa-table"}),"Tabla de puntuacion"]})]}),Object(r.jsx)("section",{}),Object(r.jsxs)("section",{className:"Perfil",children:[Object(r.jsx)("i",{className:"fas fa-sign-out-alt",onClick:function(){a(function(){var e=Object(g.a)(b.a.mark((function e(a){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.auth().signOut();case 2:a(_());case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}())}}),Object(r.jsx)(l.b,{to:"/Home/Perfil",children:e})]})]})},I=function(){return Object(r.jsxs)("footer",{children:["Hecho por ",Object(r.jsx)("a",{href:"https:/darkprometheus.github.io",children:"Emmanuel Frias"})]})},G=function(){return Object(r.jsxs)("div",{className:"Home__main",children:[Object(r.jsx)(H,{}),Object(r.jsxs)("div",{className:"Home__content",children:[Object(r.jsx)("h1",{children:"Bienvenido a Trivias"}),Object(r.jsx)("p",{children:"Prueba tus conocimientos con 20 preguntas en ciencia, historia, geografia y entretenimiento. Compite con tus amigos y puntua entre los mejores en la tabla de puntos"}),Object(r.jsx)(l.b,{className:"Jugar",to:"/Home/Categorias",children:"\xa1A jugar!"})]}),Object(r.jsx)(I,{})]})},U=[{id:"1",Categoria:"Ciencia",preguntas:[{id:"1",pregunta:"\xbfCual es el planeta mas grande del sistema solar?",respuestas:["J\xfapiter","Saturno","Urano","Neptuno","La tierra"]},{id:"2",pregunta:"\xbfCuantos planetas hay en el Sistema Solar?",respuestas:["9","8","5","7","6"]},{id:"3",pregunta:"Las estrellas agrupadas forman...",respuestas:["Constelaciones","Sat\xe9lites","Sistemas","Universos","Muchas estrellas"]},{id:"4",pregunta:"\xbfCuanto pesa el cerebro de un ser humano adulto?",respuestas:["1 Kg","2.5 Kg","2 Kg","1.5 Kg","4 Kg"]},{id:"5",pregunta:"\xbfCuantas veces se calcula que latir\xe1 el coraz\xf3n a lo largo de toda la vida de un humano?",respuestas:["3.000 millones de veces","1.000 millones de veces","2.000 millones de veces","4.000 millones de veces","5.000 millones de veces"]},{id:"6",pregunta:"\xbfD\xf3nde realizan las plantas la fotos\xedntesis?",respuestas:["En las hojas","En el tallo","En las ra\xedces","En el aire","En el tierra"]},{id:"7",pregunta:"\xbfQue es la biodiversidad o riqueza de un ecosistema?",respuestas:["El n\xfamero de especies","La abundancia relativa de especies","El n\xfamero de animales","La conservaci\xf3n del ecosistema","El n\xfamero de plantas"]},{id:"8",pregunta:'\xbfEn que a\xf1o se public\xf3 "El origen de las especies" de Charles Darwin?',respuestas:["1859","1900","1866","1840","1858"]},{id:"9",pregunta:'\xbfQue pas\xf3 con la primera edici\xf3n de "El origen de las especies", en el que Darwin explicaba su teor\xeda de la evoluci\xf3n?',respuestas:["Se agot\xf3 el primer d\xeda","Su edici\xf3n fue prohibida y retirada","Solo se vendieron 10 ejemplares","Fue recibida sin mucho entusiasmo","Nunca se public\xf3"]},{id:"10",pregunta:"El oxigeno es el comburente mas habitual, \xbfQue porcentaje hay de este en el aire?",respuestas:["21%","37%","12%","29%","82%"]},{id:"11",pregunta:"\xbfPor que apagan el fuego los extintores?",respuestas:["Cortan el ox\xedgeno del fuego","Aumentan el comburente del aire","Expulsa agua y aire para esparcir el fuego","Enfr\xedan el objeto inflamado","Enfr\xedan el fuego"]},{id:"12",pregunta:"\xbfQue han de tener dos objetos para que entre ellos exista gravedad?",respuestas:["Masa","Fuerza","Aceleraci\xf3n","Energ\xeda","Nada"]},{id:"13",pregunta:"\xbfCual es la intensidad de la gravedad en la Tierra a nivel del mar?",respuestas:["9,8 m/s2","98 m/s2","9,8 km/s2","0,98 m/s2","10 m/s2"]},{id:"14",pregunta:"\xbfDebajo de que \xe1rbol se encontraba Newton cuando, seg\xfan la leyenda, descubri\xf3 la ley de la gravedad?",respuestas:["Manzano","Peral","Cerezo","Melocotonero","Abedul"]},{id:"15",pregunta:"\xbfEn que lugar de la Tierra se ha de estar para no verse influido por la fuerza gravitacional?",respuestas:["En el centro","En el ecuador","En el polo norte","En el polo sur","No es posible"]},{id:"16",pregunta:'La gravedad es una de las "fuerzas fundamentales" que considera la F\xedsica moderna. \xbfCuantas son en total?',respuestas:["4","8","2","5","10"]},{id:"17",pregunta:"\xbfCual es el hueso mas largo en el cuerpo humano?",respuestas:["F\xe9mur","H\xfamero","Peron\xe9","Tibia","T\xf3rax"]},{id:"18",pregunta:"\xbfComo se llama la arteria mas grande del cuerpo humano?",respuestas:["Aorta","Car\xf3tida","Yugular","Cardiaco","Renal"]},{id:"19",pregunta:"El elemento presente en todos los compuestos org\xe1nicos es el...",respuestas:["Carbono","Nitr\xf3geno","F\xf3sforo","Oxigeno","Calcio"]},{id:"20",pregunta:"\xbfComo se form\xf3 la Tierra?",respuestas:["Por un proceso de acreci\xf3n gravitatoria","Por un proceso de disgregaci\xf3n planetaria","Por fragmentaci\xf3n a partir del Sol","Por un fen\xf3meno de gravitaci\xf3n centr\xedpeta","Porque marte se quebr\xf3 a la mitad"]}]},{id:"2",Categoria:"Geograf\xeda",preguntas:[{id:"1",pregunta:"La capital de Egipto es ...",respuestas:["El Cairo","Nueva York","M\xe9xico","Sof\xeda","Damasco"]},{id:"2",pregunta:"La capital de Australia es...",respuestas:["Canberra","Sof\xeda","Berl\xedn","Madrid","Wellington"]},{id:"3",pregunta:"La capital de Chile es...",respuestas:["Santiago","Londres","Sof\xeda","Madrid","Buenos Aires"]},{id:"4",pregunta:"La capital de Corea del sur es...",respuestas:["Se\xfal","Bogot\xe1","Paris","Pionyang","Pekin"]},{id:"5",pregunta:"\xbfCu\xe1l es la capital de Irlanda?",respuestas:["Dubl\xedn","Mascat","Argel","Koror","Galway"]},{id:"6",pregunta:"\xbfCu\xe1l de estos pa\xedses es ba\xf1ado \xfanicamente por un oc\xe9ano?",respuestas:["Reino unido","Mexico","Canad\xe1","Rusia","Estados Unidos"]},{id:"7",pregunta:"\xbfD\xf3nde se encuentra el mar muerto?",respuestas:["Asia","Europa","No existe","Oceania","Africa"]},{id:"8",pregunta:"\xbfD\xf3nde se encuentra el monte Everest?",respuestas:["Asia","America","Polo norte","Oceania","Polo sur"]},{id:"9",pregunta:"\xbfCual es el pais mas grande de Europa?",respuestas:["Rusia","Alemania","Turqu\xeda","Francia","Espa\xf1a"]},{id:"10",pregunta:"\xbfCu\xe1l es el mayor r\xedo que fluye por Brasil?",respuestas:["Amazonas","Po","Rio de Plata","Nilo","Misisipi"]},{id:"11",pregunta:"\xbfEn qu\xe9 pa\xeds se encuentra el r\xedo Arkansas?",respuestas:["Estados Unidos","Francia","Paraguay","Finlandia","Espa\xf1a"]},{id:"12",pregunta:"\xbfCu\xe1l es el pa\xeds m\xe1s peque\xf1o de Centroam\xe9rica?",respuestas:["El Salvador","Nicaragua","Panam\xe1","Honduras","Uruguay"]},{id:"13",pregunta:"\xbfEn qu\xe9 pa\xeds de Europa se encuentra el misterioso Lago de Ness?",respuestas:["Escocia","Finlandia","Austria","Dinamarca","No existe"]},{id:"14",pregunta:"\xbfEn qu\xe9 pa\xeds se encuentra la ciudad de Avi\xf1\xf3n?",respuestas:["Francia","Alemania","Rep\xfablica checa","Suecia","Reino unido"]},{id:"15",pregunta:"\xbfSobre qu\xe9 oc\xe9ano se encuentran las islas Maldivas?",respuestas:["\xcdndico","Atl\xe4ntico","Glacial \xe1rtico","Pac\xe1fico","Ant\xe1rtico"]},{id:"16",pregunta:"\xbfCu\xe1l es el pa\xeds mas grande del mundo?",respuestas:["China","Canad\xe1","India","Rusia","Estados Unidos"]},{id:"17",pregunta:"\xbfCu\xe1l es el pa\xeds mas poblado del mundo?",respuestas:["India","Francia","Brasil","China","Jap\xf3n"]},{id:"18",pregunta:"\xbfEn qu\xe9 pa\xeds se ubican las ruinas de Esparta?",respuestas:["Grecia","Turqu\xeda","Argel","Espa\xf1a","Italia"]},{id:"19",pregunta:"\xbfCu\xe1l de estos pa\xedses no tiene acceso al Mar Mediterr\xe1neo?",respuestas:["Serbia","Egipto","Italia","Espa\xf1a","Marruecos"]},{id:"20",pregunta:"\xbfCu\xe1l es el ri\xf3 m\xe1s largo del mundo?",respuestas:["Amazonas","Nilo","Missisipi","De la plata","T\xe1mesis"]}]},{id:"3",Categoria:"Entretenimiento",preguntas:[{id:"1",pregunta:"En la serie Hora De Aventuras \xbfcuantos a\xf1os tiene Finn?",respuestas:["13","16","Es inmortal","12","26"]},{id:"2",pregunta:"En la serie Hora De Aventuras \xbfen que pa\xeds viven los protagonistas?",respuestas:["En el pa\xeds de Ooo","En el pa\xeds de Nunca Jam\xe1s","En el reino helado","En el pa\xeds de Oroo","En el pa\xeds Liliput"]},{id:"3",pregunta:"En la serie Hora De Aventuras \xbfcomo se llama la consola de Finn y Jake?",respuestas:["Bmo","No tiene nombre","Beemo","Marceline","Sr. consola"]},{id:"4",pregunta:"En la serie Hora De Aventuras \xbfDe qui\xe9n est\xe1 enamorado Finn?",respuestas:["Princesa llama","De todas","No est\xe1 enamorado de nadie","Marceline","Jack"]},{id:"5",pregunta:"En la serie de los Simpsons \xbfcuantos hijos tienen Homer y Marge?",respuestas:["3","Ninguno","5","1","2"]},{id:"6",pregunta:"En la serie de los Simpsons \xbfcomo se apellida el tabernero Moe?",respuestas:["Sislark","Nunca lo dijo","Boubier","Simpsons","Burns"]},{id:"7",pregunta:"\xbfComo se llama el mat\xf3n de Phineas y Ferb?",respuestas:["Buford","Doofenshmirtz","Baljeet","Ferb","Phineas"]},{id:"8",pregunta:"En la serie de Phineas y Ferb que construyen en el primer d\xeda de vacaciones?",respuestas:["Una monta\xf1a rusa","Un perro mec\xe1nico","Crean el Invierano","Copias rob\xf3ticas de s\xed mismos","Un portal interdimensional"]},{id:"9",pregunta:"En la serie de Pokemon \xbfcomo se llama el protagonista principal?",respuestas:["Ash","oak","Brock","Julio","Juan"]},{id:"10",pregunta:"En la serie de Pokemon \xbfcual es el pokemon que siempre acompa\xf1a a Ash en todos sus episodios?",respuestas:["Pikachu","Charmander","Bulbasaur","Squirtle","Charizard"]},{id:"11",pregunta:"\xbfQue pasa si Mario Bross toma una flor roja?",respuestas:["Lanza bolas de fuego","Se hace invisible","Puede volar","Aumenta de tama\xf1o","Resipara bajo el agua"]},{id:"12",pregunta:"\xbfQui\xe9n es Luigi, el personaje que siempre acompa\xf1a a Mario Bross en casi todas sus aventuras?",respuestas:["Su hermano","Su padre","Su novio","Un amigo","Una alucinaci\xf3n"]},{id:"13",pregunta:"\xbfComo se llama el reino por el que se mueven Mario Bross y sus amigos?",respuestas:["Reino Champi\xf1\xf3n","Reino Toad","Reino Encantado","Reino del volc\xe1n","Reino del agua"]},{id:"14",pregunta:"\xbfCual es la profesi\xe9n de Mario Bross?",respuestas:["Fontanero","Ladr\xf3n de bancos","Bombero","Ladr\xf3n de champi\xf1ones","Mago"]},{id:"15",pregunta:"\xbfComo se llama el perro de Mickey Mouse?",respuestas:["Pluto","Donald","Goofy","Peter","Jorge"]},{id:"16",pregunta:'\xbfEn qu\xe9 a\xf1o se estren\xf3 la pelicula de Disney "Pinocho"?',respuestas:["1940","1950","1935","1945","1955"]},{id:"17",pregunta:"\xbfC\xf3mo se llama el protagonista de la saga Indiana Jones?",respuestas:["Harrison Ford","Jack Nicholson","Michael Fox","Robin Williams","No se sabe"]},{id:"18",pregunta:"\xbfA qui\xe9n se considera el Rey del Pop?",respuestas:["Michael Jackson","Justin Bieber","Zayn Malik","Zac Efron","A nadie"]},{id:"19",pregunta:"\xbfC\xf3mo se llama el p\xe1jaro s\xedbolo de los Juegos del Hambre?",respuestas:["Sinsajo","Lechuza","Gale","Llamas","F\xe9nix"]},{id:"20",pregunta:"\xbfCu\xe1ntos a\xf1os tiene Bart Simpson?",respuestas:["10","13","8","11","15"]}]},{id:"4",Categoria:"Historia",preguntas:[{id:"1",pregunta:"\xbfQui\xe9n fue la primera cient\xedfica de la historia?.",respuestas:["Hagn\xf3dica","Ada Lovelace","Atenea","Marie Curie","Frida Kahlo"]},{id:"2",pregunta:"\xbfCu\xe1ntos a\xf1os duro la guerra de los 100 a\xf1os?",respuestas:["116 a\xf1os","100 a\xf1os","97 a\xf1os","99 a\xf1os","100 meses"]},{id:"3",pregunta:"\xbfQuien cre\xf3 el primer coche del mundo?.",respuestas:["Nicolas-Joseph Cugnot","Karl Marx","Henry Ford","Maxwell","Nikola Tesla"]},{id:"4",pregunta:"\xbfCuando termin\xf3 la segunda guerra mundial?",respuestas:["1945","1943","1944","1946","1918"]},{id:"5",pregunta:"\xbfQui\xe9n fue el m\xe1s poderoso rey de la tribu de los Hunos?",respuestas:["Atila","Aecio","Mundzuk","Elac","Julio Cesar"]},{id:"6",pregunta:"\xbfCu\xe1l de estas ciudades fue designada capital de la colonia francesa en el territorio americano en 1722?",respuestas:["Nueva Orlean","Nuevo M\xe9xico","Dallas","San Francisco","Washington"]},{id:"7",pregunta:"\xbfDe qu\xe9 color era la cinta de cuero que ataba las varas de los fasces romanos?",respuestas:["Rojo","Violeta","Naranja","Verde","Amarillo"]},{id:"8",pregunta:"\xbfQui\xe9n fue el primer presidente que present\xf3 una dimisi\xf3n de la historia de Estados Unidos?",respuestas:["Richard Nixon","George W.Bush","George Washington","Bill Clinton","Winston Churchill"]},{id:"9",pregunta:"\xbfQue tipo de gobierno se implanta en Francia en 1791 al comienzo de la revoluci\xf3n francesa?",respuestas:["Monarqu\xeda Constitucional","Rep\xe9blica parlamentaria","Democracia Popular","Rep\xe9blica Imperial","Gabierno representativo"]},{id:"10",pregunta:"\xbfC\xf3mo se llama el libro sagrado propio de la tradici\xf3n cat\xf3lica?",respuestas:["La Biblia","Pantateuco","El apocalipsis","Las palabras de Dios","El cor\xe1n"]},{id:"11",pregunta:"\xbfQu\xe9 te\xf3logo y fraile alem\xe1n fue el principal l\xedder de la reforma protestante?",respuestas:["Mat\xedn Lutero","John Wycliff","Jan Hus","Jacques Derrida","Conrado de Gelnhausen"]},{id:"12",pregunta:"Napole\xf3n Bonaparte nombr\xf3 a su hermano Jos\xe9 I rey \xbfde qu\xe9 pa\xeds?",respuestas:["Espa\xf1a","Inglaterra","Italia","B\xe9lgica","Rusia"]},{id:"13",pregunta:"\xbfEn que a\xf1o descubri\xf3 Col\xf3n Am\xe9rica?",respuestas:["1492","1502","1496","1488","1392"]},{id:"14",pregunta:"\xbfEn que guerra particip\xf3 Juana de Arco?",respuestas:["Guerra de los 100 a\xf1os","Primera cruzada","Guerras napoleonicas","Guerra de los 30 a\xf1os","Guerra de los 7 dias"]},{id:"15",pregunta:"\xbfCu\xe1l era la capital del Imperio Inca?",respuestas:["Quito","Cuzco","Machu picho","Lima","Per\xfa"]},{id:"16",pregunta:"\xbfQui\xe9n fue el primer emperador romano?",respuestas:["Cesar Augusto","Ner\xf3n","Julio Cesar","Cal\xedgula","Tiberio"]},{id:"17",pregunta:"\xbfEn que pa\xeds naci\xf3 Adolf Hitler?",respuestas:["Austria","Australia","Alemania","Polonia","Letonia"]},{id:"18",pregunta:"\xbfPor qu\xe9 conden\xf3 la Iglesia a Galileo Galilei?",respuestas:["Por decir que la tierra giraba al rededor del sol","Por decir que la tierra era redonda","Por decir que la tierra era plana","Por negar la existencia de dios","Por decir que la tierra era el centro del universo"]},{id:"19",pregunta:"\xbfQuienes lucharon en la batalla de Marat\xf3n?",respuestas:["Los griegos y los persas","Los griegos y los egipcios","Alemanes y rusos","Griegos y espartanos","Romanos y cartagineses"]},{id:"20",pregunta:"\xbfC\xf3mo se llam\xf3 durante m\xe1s de 50 a\xf1os San Petersburgo?",respuestas:["Leningrado","Stalingrado","Petersburgo","Trotskigrado","Mosc\xfa"]}]}],z=function(){var e=Object(c.c)((function(e){return e.auth})).name;return Object(r.jsxs)("div",{className:"Categorias__main",children:[Object(r.jsx)(H,{}),Object(r.jsxs)("div",{className:"Categorias__content",children:[Object(r.jsx)("h1",{children:"Selecciona una categoria"}),Object(r.jsx)("div",{className:"Categorias__buttons",children:U.map((function(a){return Object(r.jsx)(l.b,{to:{pathname:"/Home/Categorias/"+a.Categoria,state:{preguntas:a.preguntas,Categoria:a.Categoria,user:e,preguntasGeneradas:!1}},className:"Border",children:a.Categoria},a.Categoria)}))})]}),Object(r.jsx)(I,{})]})},J=t(36),Q=t(37),K=t(23),W=t(40),Y=t(38),V=n.a.forwardRef((function(e,a){var t=Object(s.useState)("00"),n=Object(u.a)(t,2),o=n[0],i=n[1],c=Object(s.useState)("00"),d=Object(u.a)(c,2),p=d[0],m=d[1],j=Object(s.useState)(e.isActive),h=Object(u.a)(j,2),b=h[0],g=h[1],f=Object(s.useState)(0),O=Object(u.a)(f,2),x=O[0],v=O[1],C=e.fin;return Object(s.useEffect)((function(){var e;return b&&(e=setInterval((function(){var e=x%60,a=Math.floor(x/60),t=1===String(e).length?"0".concat(e):e,r=1===String(a).length?"0".concat(a):a;i(t),m(r),v((function(e){return e+1}))}),1e3)),function(){return clearInterval(e)}}),[b,e.isActive,x]),Object(s.useEffect)((function(){!0===e.isActive&&g(!0)}),[e.isActive]),Object(s.useEffect)((function(){!0===C&&(g(!1),e.ObtenerTiempo(o+60*p))}),[C]),Object(r.jsxs)("nav",{children:[Object(r.jsx)("div",{className:"Logo",children:Object(r.jsxs)(l.b,{to:"/Home",children:[Object(r.jsx)("i",{className:"fas fa-home"}),"Inicio"]})}),Object(r.jsxs)("div",{className:"Timer",children:[Object(r.jsx)("span",{className:"minute",children:p}),Object(r.jsx)("span",{children:":"}),Object(r.jsx)("span",{className:"second mr-1",children:o}),Object(r.jsxs)("p",{children:["Puntos: ",e.puntos]})]}),Object(r.jsx)("div",{className:"Perfil",children:e.name})]})})),Z=function(e){Object(W.a)(t,e);var a=Object(Y.a)(t);function t(){var e;return Object(J.a)(this,t),(e=a.call(this)).GenerarRespuestas=e.GenerarRespuestas.bind(Object(K.a)(e)),e.state={Respuesta:""},e}return Object(Q.a)(t,[{key:"GenerarRespuestas",value:function(){for(var e=this,a=[],t=[],s=[],n=0;n<4;n++)a.push(n);a.sort((function(){return Math.random()-.5})),this.props.respuestas.forEach((function(a){t.push(Object(r.jsx)("li",{className:"Border",onClick:function(a){return e.props.Respuesta(a)},children:a},a)),s.push("")}));for(var o=0;o<t.length;o++)s[a[o]]=t[o];return s}},{key:"render",value:function(){return Object(r.jsxs)("div",{className:"Pregunta__main "+this.state.Class,children:[Object(r.jsx)("h3",{children:this.props.pregunta}),Object(r.jsx)("ul",{children:this.GenerarRespuestas()})]})}}]),t}(n.a.Component),X=function(e){var a=[];return e.forEach((function(e){var t,r=e.data().Tiempo;r=(t=Math.trunc(r/60))+":"+(r-60*t),a.push({id:e.id,Usuario:e.data().Usuario,Tiempo:r,Puntos:e.data().Puntos,Fecha:e.data().Fecha})})),a},$=function(){var e=Object(g.a)(b.a.mark((function e(a){var t,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=m.collection("Puntuaciones"+a),e.next=3,t.orderBy("Puntos","desc").get().then((function(e){return r=X(e)}));case 3:return 0===r.length&&(r=[]).push({id:"Sin datos",Usuario:"Sin datos",Tiempo:"Sin datos",Puntos:"Sin datos",Fecha:"Sin datos"}),e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),ee=function(){var e=Object(g.a)(b.a.mark((function e(a,t){var r,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=m.collection("Puntuaciones"+a).where("Usuario","==",t),e.next=3,r.get().then((function(e){return s=X(e)}));case 3:return e.abrupt("return",s);case 4:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}(),ae=function(){var e=Object(g.a)(b.a.mark((function e(a,t,r,s){var n,o,i;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new Date,o=n.getDate()+"/"+(n.getMonth()+1)+"/"+n.getFullYear(),i={Usuario:a,Puntos:t,Tiempo:r,Fecha:o},e.next=5,te(s,i);case 5:case"end":return e.stop()}}),e)})));return function(a,t,r,s){return e.apply(this,arguments)}}(),te=function(){var e=Object(g.a)(b.a.mark((function e(a,t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ee(a,t.Usuario).then((function(e){0===e.length?m.collection("Puntuaciones"+a).add(t):e[0].Puntos>=t.Puntos?(console.log("Puntos mayores"),e[0].Tiempo<=t.Tiempo&&console.log("Tiempo mayor")):m.collection("Puntuaciones"+a).doc(e[0].id).update(t)}));case 2:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}(),re=[],se=[],ne=!1,oe=function(e){Object(W.a)(t,e);var a=Object(Y.a)(t);function t(e){var r;return Object(J.a)(this,t),(r=a.call(this)).Respuesta=r.Respuesta.bind(Object(K.a)(r)),r.GenerarPreguntas=r.GenerarPreguntas.bind(Object(K.a)(r)),r.Empezar=r.Empezar.bind(Object(K.a)(r)),r.Sumar=r.Sumar.bind(Object(K.a)(r)),r.ObtenerTiempo=r.ObtenerTiempo.bind(Object(K.a)(r)),r.state={p:0,PreguntaMostrar:"",Mostrar:"Display",puntos:0,isActive:!1,fin:!1},ne=e.location.state.preguntasGeneradas,r}return Object(Q.a)(t,[{key:"GenerarPreguntas",value:function(){var e=this;re=[];for(var a=[],t=[],s=[],n=0;n<20;n++)a.push(n);a.sort((function(){return Math.random()-.5})),this.props.location.state.preguntas.forEach((function(a){t.push(Object(r.jsx)(Z,{pregunta:a.pregunta,Respuesta:e.Respuesta,respuestas:a.respuestas,ref:function(e){re.push(e)}},a.id))}));for(var o=0;o<t.length;o++)s[a[o]]=t[o];se=s}},{key:"Empezar",value:function(){this.setState({p:this.state.p+1,PreguntaMostrar:se[this.state.p],Mostrar:"NoDisplay",isActive:!0})}},{key:"Respuesta",value:function(e){e.target.textContent===this.state.PreguntaMostrar.props.respuestas[0]?(this.Sumar(),O.a.fire({position:"top",icon:"success",title:"Correcto!",showConfirmButton:!1,timer:1300})):O.a.fire({position:"top",icon:"question",title:"Creo que no...",showConfirmButton:!1,timer:1300}),20===this.state.p&&(console.log("Fin de la trivia"),this.setState({fin:!0})),this.Empezar()}},{key:"Sumar",value:function(){this.setState({puntos:this.state.puntos+1})}},{key:"ObtenerTiempo",value:function(){var e=Object(g.a)(b.a.mark((function e(a){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Fin"),e.next=3,ae(this.props.location.state.user,this.state.puntos,a,this.props.location.state.Categoria);case 3:this.props.history.push("/Home/TablasDePuntuacion");case 4:case"end":return e.stop()}}),e,this)})));return function(a){return e.apply(this,arguments)}}()},{key:"render",value:function(){return!1===ne&&(this.GenerarPreguntas(),ne=!0),Object(r.jsxs)("div",{className:"Categoria__main",children:[Object(r.jsx)(V,{puntos:this.state.puntos,isActive:this.state.isActive,fin:this.state.fin,ObtenerTiempo:this.ObtenerTiempo,name:this.props.location.state.user}),Object(r.jsxs)("div",{className:"Categoria__content",children:[Object(r.jsx)("h2",{children:this.props.location.state.Categoria}),Object(r.jsx)("button",{className:this.state.Mostrar,onClick:this.Empezar,children:"Empezar!"}),this.state.PreguntaMostrar]})]})}}]),t}(n.a.Component),ie=[],ce=0;U.forEach((function(e){ie.push(e.Categoria)}));var ue=function(){var e=Object(s.useState)(ie[0]),a=Object(u.a)(e,2),t=a[0],n=a[1],o=Object(s.useState)(0),i=Object(u.a)(o,2),c=i[0],l=(i[1],function(e){var a=Object(s.useState)({data:null,loading:!0,error:null,vacio:!0}),t=Object(u.a)(a,2),r=t[0],n=t[1];return Object(s.useEffect)((function(){function a(){return(a=Object(g.a)(b.a.mark((function a(){var t;return b.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,$(e);case 2:0===(t=a.sent).length?n({data:null,loading:!1,error:null,vacio:!0}):n({data:t,loading:!1,error:null,vacio:!1});case 4:case"end":return a.stop()}}),a)})))).apply(this,arguments)}!function(){a.apply(this,arguments)}()}),[e]),r}(t)),d=l.loading,p=l.data,m=(l.vacio,function(e){0===ce&&-1===e?ce=ie.length-1:ce===ie.length-1&&1===e?ce=0:ce+=e,n(ie[ce])}),j=c;return Object(r.jsxs)("div",{className:"Tablas__main",children:[Object(r.jsx)(H,{}),Object(r.jsxs)("div",{className:"Tablas__title",children:[Object(r.jsx)("i",{className:"fas fa-chevron-circle-left",onClick:function(){return m(-1)}}),Object(r.jsx)("h1",{children:t}),Object(r.jsx)("i",{className:"fas fa-chevron-circle-right",onClick:function(){return m(1)}})]}),Object(r.jsx)("div",{className:"Tablas__content",children:Object(r.jsxs)("table",{children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"#"}),Object(r.jsx)("th",{children:"Usuario"}),Object(r.jsx)("th",{children:"Puntos"}),Object(r.jsx)("th",{children:"Tiempo"}),Object(r.jsx)("th",{children:"Fecha"})]})}),Object(r.jsx)("tbody",{children:d?Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"Cargando..."}),Object(r.jsx)("td",{children:"Cargando..."}),Object(r.jsx)("td",{children:"Cargando..."}),Object(r.jsx)("td",{children:"Cargando..."}),Object(r.jsx)("td",{children:"Cargando..."})]}):p.map((function(e){return j++,Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:j}),Object(r.jsx)("td",{children:e.Usuario}),Object(r.jsx)("td",{children:e.Puntos}),Object(r.jsx)("td",{children:e.Tiempo}),Object(r.jsx)("td",{children:e.Fecha})]},e.Usuario)}))})]})})]})},le=function(){return Object(r.jsxs)(d.d,{children:[Object(r.jsx)(d.b,{exact:!0,path:"/Home",component:G}),Object(r.jsx)(d.b,{exact:!0,path:"/Home2",component:G}),Object(r.jsx)(d.b,{exact:!0,path:"/Home/Categorias",component:z}),Object(r.jsx)(d.b,{exact:!0,path:"/Home/TablasDePuntuacion",component:ue}),U.map((function(e){return Object(r.jsx)(d.b,{exact:!0,path:"/Home/Categorias/"+e.Categoria,component:oe},"/Home/Categorias/"+e.Categoria)})),Object(r.jsx)(d.a,{to:"/Home"})]})},de=t(39),pe=function(e){var a=e.isAuthenticated,t=e.component,s=Object(de.a)(e,["isAuthenticated","component"]);return Object(r.jsx)(d.b,Object(q.a)(Object(q.a)({},s),{},{component:function(e){return a?Object(r.jsx)(t,Object(q.a)({},e)):Object(r.jsx)(d.a,{to:"/auth/login"})}}))},me=function(e){var a=e.isAuthenticated,t=e.component,s=Object(de.a)(e,["isAuthenticated","component"]);return Object(r.jsx)(d.b,Object(q.a)(Object(q.a)({},s),{},{component:function(e){return a?Object(r.jsx)(d.a,{to:"/Home"}):Object(r.jsx)(t,Object(q.a)({},e))}}))},je=function(){var e=Object(c.b)(),a=Object(s.useState)(!0),t=Object(u.a)(a,2),n=t[0],o=t[1],i=Object(s.useState)(!1),m=Object(u.a)(i,2),j=m[0],h=m[1];return Object(s.useEffect)((function(){p.a.auth().onAuthStateChanged((function(a){(null===a||void 0===a?void 0:a.uid)?(e(k(a.uid,a.displayName)),h(!0)):h(!1),o(!1)}))}),[e,o,h]),n?Object(r.jsx)("h1",{children:"Espera..."}):Object(r.jsx)(l.a,{children:Object(r.jsx)("div",{className:"Routers",children:Object(r.jsxs)(d.d,{children:[Object(r.jsx)(me,{path:"/auth",isAuthenticated:j,component:D}),Object(r.jsx)(pe,{isAuthenticated:j,path:"/Home",component:le}),Object(r.jsx)(d.a,{to:"/auth"})]})})})},he=t(24),be=t(63),ge={loading:!1,msgError:null},fe="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||he.d,Oe=Object(he.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case x:return{uid:a.payload.uid,name:a.payload.displayName};case v:return{};default:return e}},ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case C:return Object(q.a)(Object(q.a)({},e),{},{msgError:a.payload});case E:return Object(q.a)(Object(q.a)({},e),{},{msgError:null});case y:return Object(q.a)(Object(q.a)({},e),{},{loading:!0});case N:return Object(q.a)(Object(q.a)({},e),{},{loading:!1});default:return e}}}),xe=Object(he.e)(Oe,fe(Object(he.a)(be.a))),ve=function(){return Object(r.jsx)(c.a,{store:xe,children:Object(r.jsx)(je,{})})};i.a.render(Object(r.jsx)(ve,{}),document.getElementById("root"))},69:function(e,a,t){}},[[157,1,2]]]);
//# sourceMappingURL=main.59b49397.chunk.js.map