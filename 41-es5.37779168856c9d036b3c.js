!function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function e(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}function n(t,e){return(n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function i(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}();return function(){var n,i=r(t);if(e){var u=r(this).constructor;n=Reflect.construct(i,arguments,u)}else n=i.apply(this,arguments);return o(this,n)}}function o(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{"/gsP":function(t,o,r){"use strict";r.r(o),r.d(o,"AuthSigninModule",function(){return y});var a,c,s=r("ofXK"),l=r("jtHE"),f=r("NHP+"),h=r("fXoL"),g=function t(){u(this,t)},d=function(){var t=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&n(t,e)}(r,t);var o=i(r);function r(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{scope:"email"};return u(this,r),(e=o.call(this)).clientId=t,e.initOptions=n,e}return e(r,[{key:"initialize",value:function(){var t=this;return new Promise(function(e,n){try{t.loadScript(r.PROVIDER_ID,"https://apis.google.com/js/platform.js",function(){gapi.load("auth2",function(){t.auth2=gapi.auth2.init(Object.assign(Object.assign({},t.initOptions),{client_id:t.clientId})),t.auth2.then(function(){e()}).catch(function(t){n(t)})})})}catch(i){n(i)}})}},{key:"getLoginStatus",value:function(t){var e=this;return new Promise(function(n,i){if(e.auth2.isSignedIn.get()){var o=new g,u=e.auth2.currentUser.get().getBasicProfile();if(o.id=u.getId(),o.name=u.getName(),o.email=u.getEmail(),o.photoUrl=u.getImageUrl(),o.firstName=u.getGivenName(),o.lastName=u.getFamilyName(),o.response=u,t&&t.refreshToken)e.auth2.currentUser.get().reloadAuthResponse().then(function(t){o.authToken=t.access_token,o.idToken=t.id_token,n(o)});else{var a=e.auth2.currentUser.get().getAuthResponse(!0);o.authToken=a.access_token,o.idToken=a.id_token,n(o)}}else i("No user is currently logged in with "+r.PROVIDER_ID)})}},{key:"signIn",value:function(t){var e=this,n=Object.assign(Object.assign({},this.initOptions),t);return new Promise(function(i,o){(n&&n.offline_access?e.auth2.grantOfflineAccess(t):e.auth2.signIn(t)).then(function(t){var n=new g;if(t&&t.code)n.authorizationCode=t.code;else{var o=e.auth2.currentUser.get().getBasicProfile(),r=e.auth2.currentUser.get().getAuthResponse(!0).access_token,u=e.auth2.currentUser.get().getAuthResponse(!0).id_token;n.id=o.getId(),n.name=o.getName(),n.email=o.getEmail(),n.photoUrl=o.getImageUrl(),n.firstName=o.getGivenName(),n.lastName=o.getFamilyName(),n.authToken=r,n.idToken=u,n.response=o}i(n)},function(t){o(t)}).catch(function(t){o(t)})})}},{key:"signOut",value:function(t){var e=this;return new Promise(function(n,i){(t?e.auth2.disconnect():e.auth2.signOut()).then(function(t){t?i(t):n()}).catch(function(t){i(t)})})}}]),r}(function(){function t(){u(this,t)}return e(t,[{key:"loadScript",value:function(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;if("undefined"!=typeof document&&!document.getElementById(t)){var o=document.createElement("script");o.async=!0,o.src=e,o.onload=n,i||(i=document.head),i.appendChild(o)}}}]),t}());return t.PROVIDER_ID="GOOGLE",t}(),p=((c=function(){function t(e){var n=this;u(this,t),this.providers=new Map,this.autoLogin=!1,this._user=null,this._authState=new l.a(1),this.initialized=!1,this._initState=new f.a,e instanceof Promise?e.then(function(t){n.initialize(t)}):this.initialize(e)}return e(t,[{key:"initialize",value:function(t){var e=this;this.autoLogin=void 0!==t.autoLogin&&t.autoLogin;var n=t.onError,i=void 0===n?console.error:n;t.providers.forEach(function(t){e.providers.set(t.id,t.provider)}),Promise.all(Array.from(this.providers.values()).map(function(t){return t.initialize()})).then(function(){if(e.autoLogin){var t=[],n=!1;e.providers.forEach(function(i,o){var r=i.getLoginStatus();t.push(r),r.then(function(t){t.provider=o,e._user=t,e._authState.next(t),n=!0}).catch(console.debug)}),Promise.all(t).catch(function(){n||(e._user=null,e._authState.next(null))})}}).catch(function(t){i(t)}).finally(function(){e.initialized=!0,e._initState.next(e.initialized),e._initState.complete()})}},{key:"refreshAuthToken",value:function(e){var n=this;return new Promise(function(i,o){if(n.initialized)if(e!==d.PROVIDER_ID)o(t.ERR_NOT_SUPPORTED_FOR_REFRESH_TOKEN);else{var r=n.providers.get(e);r?r.getLoginStatus({refreshToken:!0}).then(function(t){t.provider=e,n._user=t,n._authState.next(t),i()}).catch(function(t){o(t)}):o(t.ERR_LOGIN_PROVIDER_NOT_FOUND)}else o(t.ERR_NOT_INITIALIZED)})}},{key:"signIn",value:function(e,n){var i=this;return new Promise(function(o,r){if(i.initialized){var u=i.providers.get(e);u?u.signIn(n).then(function(t){t.provider=e,o(t),i._user=t,i._authState.next(t)}).catch(function(t){r(t)}):r(t.ERR_LOGIN_PROVIDER_NOT_FOUND)}else r(t.ERR_NOT_INITIALIZED)})}},{key:"signOut",value:function(){var e=this,n=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return new Promise(function(i,o){if(e.initialized)if(e._user){var r=e.providers.get(e._user.provider);r?r.signOut(n).then(function(){i(),e._user=null,e._authState.next(null)}).catch(function(t){o(t)}):o(t.ERR_LOGIN_PROVIDER_NOT_FOUND)}else o(t.ERR_NOT_LOGGED_IN);else o(t.ERR_NOT_INITIALIZED)})}},{key:"authState",get:function(){return this._authState.asObservable()}},{key:"initState",get:function(){return this._initState.asObservable()}}]),t}()).\u0275fac=function(t){return new(t||c)(h.Zb("SocialAuthServiceConfig"))},c.\u0275prov=h.Ib({token:c,factory:c.\u0275fac}),c.ERR_LOGIN_PROVIDER_NOT_FOUND="Login provider not found",c.ERR_NOT_LOGGED_IN="Not logged in",c.ERR_NOT_INITIALIZED="Login providers not ready yet. Are there errors on your console?",c.ERR_NOT_SUPPORTED_FOR_REFRESH_TOKEN="Chosen login provider is not supported for refreshing a token",c),v=((a=function(){function t(e){if(u(this,t),e)throw new Error("SocialLoginModule is already loaded. Import it in the AppModule only")}return e(t,null,[{key:"initialize",value:function(e){return{ngModule:t,providers:[p,{provide:"SocialAuthServiceConfig",useValue:e}]}}}]),t}()).\u0275mod=h.Kb({type:a}),a.\u0275inj=h.Jb({factory:function(t){return new(t||a)(h.Zb(a,12))},providers:[p],imports:[[s.b]]}),a);location;var _,b,R=r("tyNb"),O=[{path:"",component:(_=function(){function t(e,n){u(this,t),this.authService=e,this.router=n}return e(t,[{key:"ngOnInit",value:function(){var t=this;console.log("ngOnInit call"),this.authService.authState.subscribe(function(e){t.user=e,t.router.navigateByUrl("/dashboard/default"),console.log("Current user",e),console.log("user",e.email),t.user&&console.log("user",e.authToken)},function(e){console.log("Current Error ",e),t.router.navigateByUrl("/auth/signin")})}},{key:"signInWithGoogle",value:function(){var t=this;console.log("signInWithGoogle call"),this.authService.signIn(d.PROVIDER_ID).then(function(e){console.log("Login user",e),t.router.navigateByUrl("/dashboard/default")}).catch(function(e){console.log("Login user Error",e),t.router.navigateByUrl("/auth/signin")})}},{key:"signOut",value:function(){this.authService.signOut()}}]),t}(),_.\u0275fac=function(t){return new(t||_)(h.Mb(p),h.Mb(R.f))},_.\u0275cmp=h.Gb({type:_,selectors:[["app-auth-signin"]],decls:16,vars:0,consts:[[1,"auth-wrapper"],[1,"auth-content"],[1,"auth-bg"],[1,"r"],[1,"r","s"],[1,"card"],[1,"card-body","text-center"],[1,"mb-4"],[1,"feather","icon-unlock","auth-icon"],[1,"btn","btn-primary","mb-4",3,"click"],[1,"feather","icon-user","mr-2"]],template:function(t,e){1&t&&(h.Sb(0,"div",0),h.Sb(1,"div",1),h.Sb(2,"div",2),h.Nb(3,"span",3),h.Nb(4,"span",4),h.Nb(5,"span",4),h.Nb(6,"span",3),h.Rb(),h.Sb(7,"div",5),h.Sb(8,"div",6),h.Sb(9,"div",7),h.Nb(10,"i",8),h.Rb(),h.Sb(11,"h3",7),h.Gc(12,"Login with Google"),h.Rb(),h.Sb(13,"button",9),h.cc("click",function(){return e.signInWithGoogle()}),h.Nb(14,"span",10),h.Gc(15," Sign in "),h.Rb(),h.Rb(),h.Rb(),h.Rb(),h.Rb())},encapsulation:2}),_)}],y=((b=function t(){u(this,t)}).\u0275mod=h.Kb({type:b}),b.\u0275inj=h.Jb({factory:function(t){return new(t||b)},providers:[{provide:"SocialAuthServiceConfig",useValue:{autoLogin:!1,providers:[{id:d.PROVIDER_ID,provider:new d("227753546366-onka406diau8qaou6pk8j0f00ono2g1d.apps.googleusercontent.com")}]}}],imports:[[s.b,v,R.j.forChild(O)]]}),b)}}])}();