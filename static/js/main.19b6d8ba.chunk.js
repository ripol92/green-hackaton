(this["webpackJsonphackaton.test"]=this["webpackJsonphackaton.test"]||[]).push([[0],{230:function(e,t,a){e.exports=a(461)},235:function(e,t,a){},236:function(e,t,a){},435:function(e,t,a){},461:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(8),i=a.n(o),s=(a(235),a(26)),c=a(27),r=a(30),d=a(28),h=a(18),m=a(31),u=(a(236),a(65)),p=a(507),g=a(494),f=a(495),v=a(496),E=a(497),C=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(r.a)(this,Object(d.a)(t).call(this))).handleClose=a.handleClose.bind(Object(h.a)(a)),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement(p.a,{open:this.props.showDialog,onClose:this.handleClose,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},l.a.createElement(g.a,{id:"alert-dialog-title"},"Photo Title"),l.a.createElement(f.a,null,this.props.location&&l.a.createElement("img",{src:this.props.photoUrl,alt:"photo1"}),l.a.createElement("hr",null),this.props.comment),l.a.createElement(v.a,null,l.a.createElement(E.a,{onClick:this.handleClose,color:"primary"},"\u0417\u0430\u043a\u0440\u044b\u0442\u044c")))}},{key:"handleClose",value:function(){this.props.onCLose()}}]),t}(l.a.Component),b=Object(u.withScriptjs)(Object(u.withGoogleMap)((function(e){return l.a.createElement(u.GoogleMap,{defaultZoom:e.selectedLocation?12:8,center:e.selectedLocation?e.selectedLocation:{lat:38.559547,lng:68.75795},defaultCenter:{lat:e.defaultZoomLat?e.defaultZoomLat:38.559547,lng:e.defaultZoomLng?e.defaultZoomLng:68.75795}},e.markers)}))),k=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(r.a)(this,Object(d.a)(t).call(this,e))).onMarkerClick=function(e){var t=e.latLng.lng(),n=e.latLng.lat();a.setState({selectedPlace:e,showingInfoWindow:!0,selectedLng:t,selectedLat:n})},a.onClose=function(e){a.state.showingInfoWindow&&a.setState({showingInfoWindow:!1,activeMarker:null})},a.state={selectedPlace:null,activeMarker:null,showingInfoWindow:!1,showDialog:!1,selectedLat:null,selectedLng:null,defaultZoomLat:a.props.selectedLocation&&a.props.selectedLocation.lat,defaultZoomLng:a.props.selectedLocation&&a.props.selectedLocation.lng,eventsFromApi:a.props.locations},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.selectedLocation&&this.setState({selectedLng:e.selectedLocation.lng,selectedLat:e.selectedLocation.lat,showingInfoWindow:!0})}},{key:"shouldComponentUpdate",value:function(e,t,a){return!0}},{key:"render",value:function(){var e=this,t=(this.props.locations?this.props.locations:[]).map((function(t,a){var n=t.long,o=t.lat,i=t.comment,s=t.image_link;return l.a.createElement(u.Marker,{key:a,name:"fefe",position:{lat:o,lng:n},onClick:e.onMarkerClick},e.state.showingInfoWindow&&e.state.selectedLng===t.long&&e.state.selectedLat===t.lat&&l.a.createElement(u.InfoWindow,{visible:e.state.showingInfoWindow,onClose:e.onClose},l.a.createElement("div",{style:{width:"220px"}},l.a.createElement("p",null,i),l.a.createElement("img",{src:s,alt:"garbage",style:{maxWidth:"220px"}}),l.a.createElement("hr",null),l.a.createElement(E.a,{color:"primary"},"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"))))}));return l.a.createElement("div",null,l.a.createElement(b,{selectedLocation:this.props.selectedLocation,defaultZoomLat:this.state.defaultZoomLat,defaultZoomLng:this.state.defaultZoomLng,markers:t,googleMapURL:"https://maps.googleapis.com/maps/api/js?key=AIzaSyAuHu6uhb9F2sLYrup2eydm_rwxKloUYEU",loadingElement:l.a.createElement("div",{style:{height:"100%"}}),containerElement:l.a.createElement("div",{className:"MyMapComponent"}),mapElement:l.a.createElement("div",{style:{height:"100%"}})}),l.a.createElement(C,{showDialog:this.state.showDialog,photoUrl:this.state.photoUrl,onCLose:this.handleDialogClose}))}},{key:"handleDialogClose",value:function(){this.setState({showDialog:!1})}}]),t}(l.a.Component),O=a(502),y=a(504),w=a(209),L=a.n(w),j=(a(435),a(498)),S=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(r.a)(this,Object(d.a)(t).call(this))).state={open:!1},e.handleClickOpen=e.handleClickOpen.bind(Object(h.a)(e)),e.handleClose=e.handleClose.bind(Object(h.a)(e)),e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"handleClickOpen",value:function(){this.setState({open:!0})}},{key:"handleClose",value:function(){this.setState({open:!1})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(E.a,{variant:"outlined",size:"small",color:"secondary",className:"about-us-btn",onClick:this.handleClickOpen},"\u043e \u043d\u0430\u0441"),l.a.createElement(p.a,{open:this.state.open,onClose:this.handleClose,"aria-labelledby":"responsive-dialog-title"},l.a.createElement(g.a,{id:"responsive-dialog-title"},l.a.createElement("p",{className:"logo"},l.a.createElement("span",null,l.a.createElement("span",{className:"green"},"Clean")," City"))),l.a.createElement(f.a,null,l.a.createElement(j.a,null,"\u0427\u0438\u0441\u0442\u044b\u0439 \u0433\u043e\u0440\u043e\u0434 \u2014 \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0430 \u0434\u043b\u044f \u0440\u0435\u0448\u0435\u043d\u0438\u044f \u044d\u043a\u043e\u043b\u043e\u0433\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u043f\u0440\u043e\u0431\u043b\u0435\u043c. ",l.a.createElement("br",null),"\u2014 \u043c\u044b \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0430 \u0434\u043e\u043d\u0435\u0441\u0435\u043d\u0438\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u0438 \u043d\u0435 \u043d\u0435\u0441\u0451\u043c \u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u0437\u0430 \u0447\u0438\u0441\u0442\u043e\u0442\u0443 \u0438 \u044d\u043a\u043e\u043b\u043e\u0433\u0438\u044e ",l.a.createElement("br",null),"\u2014 \u0434\u0430\u043d\u043d\u044b\u0435 \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0442 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438 \u043f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e \u043d\u0430 \u0434\u043e\u0431\u0440\u043e\u0432\u043e\u043b\u044c\u043d\u043e\u0439 \u043e\u0441\u043d\u043e\u0432\u0435 ",l.a.createElement("br",null),"\u2014 \u043c\u044b \u043d\u0435 \u0441\u043e\u0431\u0438\u0440\u0430\u0435\u043c \u043a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445",l.a.createElement("br",null),"\u041c\u044b \u0437\u0430 \u0447\u0438\u0441\u0442\u044b\u0439 \u0433\u043e\u0440\u043e\u0434!")),l.a.createElement(v.a,null,l.a.createElement(E.a,{onClick:this.handleClose,color:"primary"},"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"))))}}]),t}(n.Component),I=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(r.a)(this,Object(d.a)(t).call(this,e))).state={eventID:-1},a.toggle=a.toggle.bind(Object(h.a)(a)),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"toggle",value:function(e,t){var a=this;this.setState({eventID:e},(function(){a.props.onEventClick(t)}))}},{key:"render",value:function(){var e=this,t=this.props.eventItems&&this.props.eventItems.length>0?this.props.eventItems.map((function(t,a){return l.a.createElement("li",{className:"item",key:a},l.a.createElement("a",{href:"#",onClick:function(){return e.toggle(a,t)},className:"event ".concat(e.state.eventID===a?"active":"")},l.a.createElement("p",{className:"comment ".concat(e.state.eventID===a?"show":"")},t.comment),e.state.eventID===a?l.a.createElement("img",{src:t.image_link,className:"event-img",alt:"event-img"}):l.a.createElement("div",{className:"img-preview-content"},l.a.createElement("img",{src:t.image_link,className:"event-img",alt:"event-img"}))))})):l.a.createElement(l.a.Fragment,null);return l.a.createElement("div",{className:"Events"},l.a.createElement("div",{className:"header"},l.a.createElement("h2",{className:"logo"},l.a.createElement("span",null,l.a.createElement("span",{className:"green"},"Clean")," City"),l.a.createElement(S,null))),l.a.createElement("div",{className:"events"},l.a.createElement("ul",{className:"event-items"},t)),l.a.createElement("div",{style:{justifyContent:"center",display:"flex"}},this.props.pagination))}},{key:"handleImageClick",value:function(e){}}]),t}(n.Component),D=a(508),N=a(503),T=a(511),W=a(207),x=a.n(W),A=a(95),P=a.n(A),U=a(512),z=a(510),M=a(505),R=a(509),Z=a(204),F=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(r.a)(this,Object(d.a)(t).call(this,e))).handleErrorToasterCLose=function(e,t){a.setState({errorToasterOpen:!1})},a.handleCommentChange=function(e){a.setState({comment:e.target.value})},a.handleSelectClose=function(){a.setState({selectOpen:!1})},a.handleSelectOpen=function(){a.setState({selectOpen:!0})},a.handleSelectChange=function(e){a.setState({district:e.target.value})},a.handleSuccessToasterCLose=function(e){a.setState({successToasterOpen:!1})},a.state={file:null,district:"Somoni",comment:null,lat:null,lng:null,photoLoaded:!1,selectOpen:!1,photo:null,errorToasterOpen:!1,successToasterOpen:!1,loading:!1},a.handleCameraChange=a.handleCameraChange.bind(Object(h.a)(a)),a.handleLocation=a.handleLocation.bind(Object(h.a)(a)),a.handleSendClick=a.handleSendClick.bind(Object(h.a)(a)),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(p.a,{open:this.props.open,onClose:this.props.handleAddEventClose,"aria-labelledby":"form-dialog-title"},l.a.createElement(g.a,{id:"form-dialog-title"},"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0440\u0442\u0438\u0442 \u0432\u0430\u0448\u0443 \u044d\u043a\u043e\u043b\u043e\u0433\u0438\u044e?"),l.a.createElement(f.a,null,l.a.createElement(j.a,null,"\u041f\u0440\u043e\u044f\u0432\u0438\u0442\u0435 \u0441\u043e\u0446\u0438\u0430\u043b\u044c\u043d\u0443\u044e \u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u044c - \u0441\u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0440\u0443\u0439\u0442\u0435 \u0438 \u043e\u0442\u043f\u0440\u0430\u0432\u044c\u0442\u0435 \u043d\u0430\u043c."),l.a.createElement(D.a,{autoFocus:!0,margin:"dense",id:"name",label:"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439",type:"text",fullWidth:!0,multiline:!0,onChange:this.handleCommentChange}),l.a.createElement(O.a,{container:!0,style:{marginTop:"5px"}},l.a.createElement(O.a,{item:!0,xs:12,sm:6,md:6},l.a.createElement(z.a,null,"\u0424\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044f"),l.a.createElement("input",{type:"file",accept:"image/jpg,image/png/image/gif",capture:"camera",id:"camera-photo",style:{display:"none",marginTop:"2px"},ref:function(t){return e.cameraFile=t},onChange:this.handleCameraChange}),l.a.createElement(E.a,{style:{display:this.state.photoLoaded&&"none"},variant:"contained",color:"primary",size:"small",onClick:function(){return e.cameraFile.click()},startIcon:l.a.createElement(T.a,null)},"\u0421\u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0440\u043e\u0432\u0430\u0442\u044c"),l.a.createElement(E.a,{style:{display:!this.state.photoLoaded&&"none"},variant:"contained",color:"primary",size:"small",startIcon:l.a.createElement(x.a,null)},"\u0417\u0430\u0433\u0440\u0443\u0436\u0435\u043d\u043e")),l.a.createElement(O.a,{item:!0,xs:12,sm:6,md:6,className:"region-grid"},l.a.createElement(z.a,{id:"demo-controlled-open-select-label",style:{marginRight:"37px"}},"\u0420\u0430\u0439\u043e\u043d"),l.a.createElement(M.a,{labelId:"demo-controlled-open-select-label",id:"demo-controlled-open-select",open:this.state.selectOpen,onClose:this.handleSelectClose,onOpen:this.handleSelectOpen,value:this.state.district,onChange:this.handleSelectChange},l.a.createElement(U.a,{value:"Sino"},"\u0421\u0438\u043d\u043e"),l.a.createElement(U.a,{value:"Firdavsi"},"\u0424\u0438\u0440\u0434\u0430\u0432\u0441\u0438"),l.a.createElement(U.a,{value:"Somoni"},"\u0421\u043e\u043c\u043e\u043d\u0438"),l.a.createElement(U.a,{value:"Shohmansur"},"\u0428\u043e\u0445\u043c\u0430\u043d\u0441\u0443\u0440"))))),l.a.createElement(v.a,null,l.a.createElement(E.a,{onClick:this.props.onClose,color:"primary"},"\u041e\u0442\u043c\u0435\u043d\u0430"),this.state.loading?l.a.createElement(N.a,{size:14}):l.a.createElement(E.a,{onClick:this.handleSendClick,color:"primary"},"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c")),l.a.createElement(R.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:this.state.errorToasterOpen,autoHideDuration:6e3,onClose:this.handleErrorToasterCLose,message:"Whoops...",action:l.a.createElement(l.a.Fragment,null,l.a.createElement(E.a,{color:"secondary",size:"small",onClick:this.handleErrorToasterCLose},"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c"),l.a.createElement(y.a,{size:"small","aria-label":"close",color:"inherit",onClick:this.handleErrorToasterCLose},"\u041e\u0448\u0438\u0431\u043a\u0430!"))}),l.a.createElement(R.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:this.state.successToasterOpen,autoHideDuration:6e3,onClose:this.handleSucessToasterCLose,message:"Success",action:l.a.createElement(l.a.Fragment,null,l.a.createElement(E.a,{color:"secondary",size:"small",onClick:this.handleSuccessToasterCLose},"UNDO"),l.a.createElement(y.a,{size:"small","aria-label":"close",color:"primary",onClick:this.handleSuccessToasterCLose},"Success"))}))}},{key:"handleCameraChange",value:function(e){var t=this,a=e.target.files[0].name;Object(Z.compressAccurately)(e.target.files[0],80).then((function(e){e.name=a,t.setState({photo:e},(function(){t.setState({photoLoaded:!0})}))}))}},{key:"handleSendClick",value:function(){navigator.geolocation.getCurrentPosition(this.handleLocation)||console.log("\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u044c\u0442\u0435 \u0441\u0432\u043e\u0438 \u0433\u0435\u043e\u0434\u0430\u043d\u043d\u044b\u0435 ")}},{key:"handleLocation",value:function(e){var t=this;this.setState({loading:!0,lng:e.coords.longitude,lat:e.coords.latitude},(function(){t.send()}))}},{key:"send",value:function(){var e=this;if(this.state.comment&&this.state.district&&this.state.photo){var t=new FormData;t.append("file",this.state.photo,this.state.photo.name),t.append("long",this.state.lng),t.append("lat",this.state.lat),t.append("comment",this.state.comment),t.append("district",this.state.district),P.a.post("http://cleancity.test/api/create_app",t).then((function(t){e.setState({successToasterOpen:!0},(function(){window.location.reload()}))})).catch((function(t){console.log(t),e.setState({loading:!1,errorToasterOpen:!0})}))}}}]),t}(l.a.Component),_=a(208),H=a.n(_),B=(a(460),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(r.a)(this,Object(d.a)(t).call(this,e))).getApplications=function(e){var t="http://cleancity.test/api/get_apps";e&&(t=t+"?page="+e);var n=window.location.href.replace("/",""),l=new URL(n).searchParams.get("id");l&&(t=t+(e?"&":"?")+"id="+l),P.a.get(t).then((function(t){a.setState({paginationObject:t.data,applications:t.data.data},(function(){if(e)window.history.pushState(null,"",window.location.pathname);else{for(var t=window.location.href.replace("/",""),n=new URL(t).searchParams.get("id"),l=a.state.applications,o=null,i=0;i<l.length;i++)l[i].id===n&&(o=l[i]);o&&a.setState({selectedLocation:{lat:o.lat,lng:o.long}})}}))}))},a.state={offline:!1,selectedLocation:null,photo:null,addEventDialogOpen:!1,applications:null,paginationObject:null,selectedApplicationId:null},a.onEventClick=a.onEventClick.bind(Object(h.a)(a)),a.handleOpen=a.handleOpen.bind(Object(h.a)(a)),a.handleClose=a.handleClose.bind(Object(h.a)(a)),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.getApplications(null)}},{key:"handleOpen",value:function(){this.setState({addEventDialogOpen:!0})}},{key:"handleClose",value:function(){this.setState({addEventDialogOpen:!1})}},{key:"render",value:function(){var e=this.state.applications,t=this.state.paginationObject&&l.a.createElement(H.a,{data:this.state.paginationObject.data,activePage:this.state.paginationObject.current_page,itemsCountPerPage:10,totalItemsCount:this.state.paginationObject.total,pageRangeDisplayed:5,itemClass:"page-item",linkClass:"page-link",onChange:this.getApplications});return l.a.createElement("div",{className:"App"},l.a.createElement(O.a,{container:!0},l.a.createElement(O.a,{item:!0,xs:12,md:4,xl:3},l.a.createElement(I,{eventItems:e,onEventClick:this.onEventClick,pagination:t})),l.a.createElement(O.a,{item:!0,xs:12,md:8,xl:9},l.a.createElement(k,{selectedLocation:this.state.selectedLocation,locations:e}))),l.a.createElement(y.a,{color:"secondary",onClick:this.handleOpen,variant:"primary",className:"add-photo-button","aria-label":"add a photo"},l.a.createElement(L.a,null)),l.a.createElement(F,{open:this.state.addEventDialogOpen,onClose:this.handleClose}))}},{key:"onEventClick",value:function(e){this.setState({selectedPlace:e,selectedLocation:{lat:e.lat,lng:e.long}},(function(){if("URLSearchParams"in window){var t=new URLSearchParams(window.location.search);t.set("id",e.id);var a=window.location.pathname+"?"+t.toString();window.history.pushState(null,"",a)}}))}}]),t}(l.a.Component)),G=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function J(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(l.a.createElement(B,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/green-hackaton",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/green-hackaton","/service-worker.js");G?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):J(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):J(t,e)}))}}()}},[[230,1,2]]]);
//# sourceMappingURL=main.19b6d8ba.chunk.js.map