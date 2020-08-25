(this["webpackJsonpevent-creator-progsoc"]=this["webpackJsonpevent-creator-progsoc"]||[]).push([[0],{102:function(e,t,a){e.exports=a(279)},278:function(e,t,a){},279:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(95),r=a.n(l),s=a(22),c=(a(37),a(36)),i=a.n(c);var u=function(e){var t=e.authUser,a=e.emailHandler,n=e.passHandler,l=e.email,r=e.password;return o.a.createElement("div",null,o.a.createElement("h1",{style:{fontWeight:"lighter",textAlign:"center",marginBottom:"30px"}},o.a.createElement("img",{src:i.a,alt:"progsoc-logo",width:"100px",height:"100px"})," Login"),o.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(l,r)}},o.a.createElement("div",{style:{marginRight:"48%"}},o.a.createElement("h3",{style:{fontWeight:"normal"}},"Email")),o.a.createElement("div",null,o.a.createElement("input",{className:"loginInput",name:"emailInput",type:"email",placeholder:"Your email",onChange:function(e){e.preventDefault(),a(e.target.value)}})),o.a.createElement("div",{style:{marginRight:"45%",marginTop:"30px"}},o.a.createElement("h3",{style:{fontWeight:"normal"}},"Password")),o.a.createElement("div",null,o.a.createElement("input",{className:"loginInput",type:"password",placeholder:"Your password",onChange:function(e){e.preventDefault(),n(e.target.value)}})),o.a.createElement("br",null),o.a.createElement("button",{className:"coolButton",type:"submit",style:{marginTop:"30px"}},"Log In")))},m=a(96),g=a(10),p=a(97),h=a(98),d=a(101),E=a(100),f=a(14),v=a.n(f),N=(a(107),a(99)),b={fontWeight:"lighter"};var C=function(e){var t=e.name,a=e.color;return o.a.createElement("div",null,o.a.createElement("h4",{style:b}," name: ",o.a.createElement("span",{style:{fontWeight:"normal"}},t),", color: ",o.a.createElement("span",{style:{fontWeight:"normal"}},a)))},w={fontWeight:"lighter",textAlign:"center"},D=function(e){Object(d.a)(a,e);var t=Object(E.a)(a);function a(){var e;return Object(p.a)(this,a),(e=t.call(this)).fetchData=function(){v.a.firestore().collection("tags").get().then((function(t){t.forEach((function(t){e.setState((function(e){return{tagDBNames:[].concat(Object(g.a)(e.tagDBNames),[t.id]),tagDBColors:[].concat(Object(g.a)(e.tagDBColors),[t.data()])}}))}))}))},e.updateInput=function(t){e.setState(Object(m.a)({},t.target.name,t.target.value))},e.pickColor=function(t){e.setState({tagColor:t.hex})},e.tagFlush=function(){e.setState({showNewTag:!1,tagText:"",tagColor:"",showError:!1})},e.noDups=function(){return!e.state.tagNames.includes(e.state.tagText.toLowerCase())&&!e.state.tagNames.includes(e.state.selectValue)&&!e.state.tagColors.includes(e.state.tagColor)&&!e.state.tagDBNames.includes(e.state.tagText.toLowerCase())&&!e.state.tagDBColors.includes(e.state.tagColor)},e.addTag=function(t){t.preventDefault(),""!==e.state.selectValue&&e.noDups()?(e.setState({firstTag:!1}),e.setState((function(t){return{tagNames:[].concat(Object(g.a)(t.tagNames),[e.state.selectValue]),tagColors:[].concat(Object(g.a)(t.tagColors),[e.state.tagDBColors[e.state.tagDBNames.indexOf(e.state.selectValue)].color])}})),e.tagFlush()):""!==e.state.tagText&&""!==e.state.tagColor&&e.noDups()?(e.setState({firstTag:!1}),e.setState((function(t){return{tagNames:[].concat(Object(g.a)(t.tagNames),[e.state.tagText.toLowerCase()]),tagColors:[].concat(Object(g.a)(t.tagColors),[e.state.tagColor])}})),e.tagFlush()):e.setState({showError:!0,tagText:""})},e.removeTag=function(t){if(t.preventDefault(),e.state.tagNames.length>0){var a=Object(g.a)(e.state.tagNames),n=Object(g.a)(e.state.tagColors);a.pop(),n.pop(),0===a.length&&e.setState({firstTag:!0}),e.setState({tagNames:a,tagColors:n})}},e.addNewTag=function(t){t.preventDefault(),e.setState({showNewTag:!0,selectValue:""})},e.hide=function(t){t.preventDefault(),e.setState({showNewTag:!1})},e.renderExistingTags=function(){return e.state.tagDBNames.map((function(t,a){return o.a.createElement(C,{name:t,color:e.state.tagDBColors[a].color})}))},e.renderTags=function(){return e.state.tagNames.map((function(t,a){return o.a.createElement(C,{name:t,color:e.state.tagColors[a],key:a})}))},e.getOptions=function(){return e.state.tagDBNames.map((function(e,t){return o.a.createElement("option",{key:t,value:e},e.charAt(0).toUpperCase()+e.slice(1))}))},e.addEvent=function(t){t.preventDefault();var a,n=v.a.firestore();for(n.collection("events").add({description:e.state.description,location:e.state.location,name:e.state.name,photo_url:e.state.photoUrl,start:v.a.firestore.Timestamp.fromDate(new Date(e.state.startDate)),summary:e.state.summary,tag_colors:e.state.tagColors,tag_names:e.state.tagNames}),a=0;a<e.state.tagNames.length;a++){var o=e.state.tagNames[a],l=e.state.tagColors[a];e.state.tagDBNames.includes(o)||n.collection("tags").doc(o).set({color:l})}e.setState({description:"",location:"",name:"",photoUrl:"",startDate:new Date,summary:"",selectValue:"",tagText:"",tagColor:"",tagNames:[],tagColors:[],showNewTag:!1,firstTag:!0,showError:!1})},e.state={description:"",location:"",name:"",photoUrl:"",startDate:new Date,summary:"",selectValue:"",tagText:"",tagColor:"",tagNames:[],tagDBNames:[],tagColors:[],tagDBColors:[],showNewTag:!1,firstTag:!0,showError:!1},e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"render",value:function(){return o.a.createElement("div",{className:"inputDiv"},o.a.createElement("button",{className:"coolButton",style:{float:"right",marginTop:"55px"},onClick:this.props.logOut},"Log Out"),o.a.createElement("h1",{style:w}," ",o.a.createElement("img",{src:i.a,alt:"progsoc-logo",width:"100px",height:"100px"})," Event Creator"),o.a.createElement("div",null,o.a.createElement("form",{onSubmit:this.addEvent},o.a.createElement("div",{className:"inputDiv"},o.a.createElement("label",{className:"required",htmlFor:"name"},"Name"),o.a.createElement("br",null),o.a.createElement("input",{required:!0,name:"name",type:"text",onChange:this.updateInput,value:this.state.name})),o.a.createElement("div",{className:"inputDiv"},o.a.createElement("label",{className:"required",htmlFor:"description"},"Description"),o.a.createElement("br",null),o.a.createElement("textarea",{required:!0,name:"description",type:"text",rows:"5",onChange:this.updateInput,value:this.state.description})),o.a.createElement("div",{className:"inputDiv"},o.a.createElement("label",{className:"required",htmlFor:"location"},"Location"),o.a.createElement("br",null),o.a.createElement("input",{required:!0,name:"location",type:"text",onChange:this.updateInput,value:this.state.location})),o.a.createElement("div",{className:"inputDiv"},o.a.createElement("label",{className:"required",htmlFor:"startDate"},"Start Date"),o.a.createElement("br",null),o.a.createElement("input",{required:!0,name:"startDate",type:"datetime-local",onChange:this.updateInput,value:this.state.startDate})),o.a.createElement("div",{className:"inputDiv"},o.a.createElement("label",{htmlFor:"summary"},"Summary"),o.a.createElement("br",null),o.a.createElement("input",{name:"summary",type:"text",onChange:this.updateInput,value:this.state.summary})),o.a.createElement("div",{className:"inputDiv"},o.a.createElement("label",{htmlFor:"photoUrl"},"Photo URL"),o.a.createElement("br",null),o.a.createElement("input",{name:"photoUrl",type:"url",onChange:this.updateInput,value:this.state.photoUrl})),o.a.createElement("div",{className:"inputDiv"},o.a.createElement("label",{htmlFor:"selectValue"},"Tags"),o.a.createElement("br",null),o.a.createElement("select",{className:"selectInput",name:"selectValue",onChange:this.updateInput,value:this.state.selectValue},o.a.createElement("option",{value:""},"None"),this.getOptions())),this.state.showNewTag?o.a.createElement("div",{className:"inputDiv"},o.a.createElement("label",{htmlFor:"tagText"},"New Tag"),o.a.createElement("br",null),o.a.createElement("input",{name:"tagText",type:"text",onChange:this.updateInput,value:this.state.tagText})):null,o.a.createElement("div",null,this.state.showError?o.a.createElement("div",null,o.a.createElement("h3",{style:{fontWeight:"300",color:"red"}},"Tags need a new name and colour!"),o.a.createElement("h2",{style:w},"Existing Tags"),this.renderExistingTags()):null,this.state.firstTag?null:o.a.createElement("h2",{style:w},"Your Tags"),this.state.tagNames.length>=0?this.renderTags():null,this.state.showNewTag?o.a.createElement("div",null,o.a.createElement("h2",{style:w},"Select Tag Colour"),o.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",paddingTop:"5px",paddingBottom:"20px"}},o.a.createElement(N.CirclePicker,{onChangeComplete:this.pickColor}))):null,o.a.createElement("button",{className:"tagButton coolButton",onClick:this.addTag},"Add Tag"),o.a.createElement("button",{className:"tagButton coolButton",onClick:this.removeTag},"Remove Last Tag"),this.state.showNewTag?o.a.createElement("button",{className:"tagButton coolButton",onClick:this.hide},"Hide"):o.a.createElement("button",{className:"tagButton coolButton",onClick:this.addNewTag},"Add New Tag")),o.a.createElement("button",{className:"eventButton coolButton",type:"submit"},"Add Event"))))}}]),a}(o.a.Component),T={fontSize:"small",color:"#6c757d",paddingLeft:"10px"};var y=function(){return o.a.createElement("p",{style:T},"\xa9 ",(new Date).getFullYear()," EUPS ")};a(276);v.a.initializeApp({apiKey:"AIzaSyAOYtNKsCiwjosXZEsS7Zw-vyrABepxZXQ",authDomain:"prog-soc-site.firebaseapp.com",databaseURL:"https://prog-soc-site.firebaseio.com",projectId:"prog-soc-site",storageBucket:"prog-soc-site.appspot.com",messagingSenderId:"1050991347056",appId:"1:1050991347056:web:e0a9a55f015c36c1c3bbb5",measurementId:"G-MDS039HCQZ"});var x=v.a.auth();var B=function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0],l=t[1],r=Object(n.useState)(""),c=Object(s.a)(r,2),i=c[0],m=c[1],g=Object(n.useState)(""),p=Object(s.a)(g,2),h=p[0],d=p[1],E=Object(n.useState)(!1),f=Object(s.a)(E,2),v=f[0],N=f[1];return Object(n.useEffect)((function(){x.onAuthStateChanged((function(e){e?(l(!0),N(!1)):l(!1)}))}),[]),a?o.a.createElement("div",null,o.a.createElement(D,{logOut:function(){x.signOut().catch((function(e){var t=e.code,a=e.message;console.log(t),console.log(a)})),m(""),d("")}}),o.a.createElement(y,null)):o.a.createElement("div",null,o.a.createElement(u,{authUser:function(e,t){x.signInWithEmailAndPassword(e,t).catch((function(e){N(!0),setTimeout((function(){N(!1)}),2e3)}))},emailHandler:function(e){m(e)},passHandler:function(e){d(e)},email:i,password:h}),o.a.createElement("h3",{className:v?"show-error":"hide-error",style:{fontWeight:"lighter",color:"red",textAlign:"center"}},"Incorrect credentials. Please check them again!"),o.a.createElement("div",{style:{position:"fixed",bottom:"0"}},o.a.createElement(y,null)))};a(278),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(B,null),document.getElementById("event-app")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},36:function(e,t,a){e.exports=a.p+"./event_app_build/static/media/ProgSocLogo.f0f3a878.png"},37:function(e,t,a){}},[[102,1,2]]]);
//# sourceMappingURL=main.f23ccd17.chunk.js.map