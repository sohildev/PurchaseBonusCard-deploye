(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{"/gsP":function(t,e,i){"use strict";i.r(e),i.d(e,"AuthSigninModule",function(){return d});var n=i("ofXK"),s=i("jtHE"),r=i("NHP+"),o=i("fXoL");class a{}let h=(()=>{class t extends class{constructor(){}loadScript(t,e,i,n=null){if("undefined"!=typeof document&&!document.getElementById(t)){let t=document.createElement("script");t.async=!0,t.src=e,t.onload=i,n||(n=document.head),n.appendChild(t)}}}{constructor(t,e={scope:"email"}){super(),this.clientId=t,this.initOptions=e}initialize(){return new Promise((e,i)=>{try{this.loadScript(t.PROVIDER_ID,"https://apis.google.com/js/platform.js",()=>{gapi.load("auth2",()=>{this.auth2=gapi.auth2.init(Object.assign(Object.assign({},this.initOptions),{client_id:this.clientId})),this.auth2.then(()=>{e()}).catch(t=>{i(t)})})})}catch(n){i(n)}})}getLoginStatus(e){return new Promise((i,n)=>{if(this.auth2.isSignedIn.get()){let t=new a;const n=this.auth2.currentUser.get().getBasicProfile();if(t.id=n.getId(),t.name=n.getName(),t.email=n.getEmail(),t.photoUrl=n.getImageUrl(),t.firstName=n.getGivenName(),t.lastName=n.getFamilyName(),t.response=n,e&&e.refreshToken)this.auth2.currentUser.get().reloadAuthResponse().then(e=>{t.authToken=e.access_token,t.idToken=e.id_token,i(t)});else{const e=this.auth2.currentUser.get().getAuthResponse(!0);t.authToken=e.access_token,t.idToken=e.id_token,i(t)}}else n("No user is currently logged in with "+t.PROVIDER_ID)})}signIn(t){const e=Object.assign(Object.assign({},this.initOptions),t);return new Promise((i,n)=>{(e&&e.offline_access?this.auth2.grantOfflineAccess(t):this.auth2.signIn(t)).then(t=>{let e=new a;if(t&&t.code)e.authorizationCode=t.code;else{let t=this.auth2.currentUser.get().getBasicProfile(),i=this.auth2.currentUser.get().getAuthResponse(!0).access_token,n=this.auth2.currentUser.get().getAuthResponse(!0).id_token;e.id=t.getId(),e.name=t.getName(),e.email=t.getEmail(),e.photoUrl=t.getImageUrl(),e.firstName=t.getGivenName(),e.lastName=t.getFamilyName(),e.authToken=i,e.idToken=n,e.response=t}i(e)},t=>{n(t)}).catch(t=>{n(t)})})}signOut(t){return new Promise((e,i)=>{let n;n=t?this.auth2.disconnect():this.auth2.signOut(),n.then(t=>{t?i(t):e()}).catch(t=>{i(t)})})}}return t.PROVIDER_ID="GOOGLE",t})(),u=(()=>{class t{constructor(t){this.providers=new Map,this.autoLogin=!1,this._user=null,this._authState=new s.a(1),this.initialized=!1,this._initState=new r.a,t instanceof Promise?t.then(t=>{this.initialize(t)}):this.initialize(t)}get authState(){return this._authState.asObservable()}get initState(){return this._initState.asObservable()}initialize(t){this.autoLogin=void 0!==t.autoLogin&&t.autoLogin;const{onError:e=console.error}=t;t.providers.forEach(t=>{this.providers.set(t.id,t.provider)}),Promise.all(Array.from(this.providers.values()).map(t=>t.initialize())).then(()=>{if(this.autoLogin){const t=[];let e=!1;this.providers.forEach((i,n)=>{let s=i.getLoginStatus();t.push(s),s.then(t=>{t.provider=n,this._user=t,this._authState.next(t),e=!0}).catch(console.debug)}),Promise.all(t).catch(()=>{e||(this._user=null,this._authState.next(null))})}}).catch(t=>{e(t)}).finally(()=>{this.initialized=!0,this._initState.next(this.initialized),this._initState.complete()})}refreshAuthToken(e){return new Promise((i,n)=>{if(this.initialized)if(e!==h.PROVIDER_ID)n(t.ERR_NOT_SUPPORTED_FOR_REFRESH_TOKEN);else{const s=this.providers.get(e);s?s.getLoginStatus({refreshToken:!0}).then(t=>{t.provider=e,this._user=t,this._authState.next(t),i()}).catch(t=>{n(t)}):n(t.ERR_LOGIN_PROVIDER_NOT_FOUND)}else n(t.ERR_NOT_INITIALIZED)})}signIn(e,i){return new Promise((n,s)=>{if(this.initialized){let r=this.providers.get(e);r?r.signIn(i).then(t=>{t.provider=e,n(t),this._user=t,this._authState.next(t)}).catch(t=>{s(t)}):s(t.ERR_LOGIN_PROVIDER_NOT_FOUND)}else s(t.ERR_NOT_INITIALIZED)})}signOut(e=!1){return new Promise((i,n)=>{if(this.initialized)if(this._user){let s=this.providers.get(this._user.provider);s?s.signOut(e).then(()=>{i(),this._user=null,this._authState.next(null)}).catch(t=>{n(t)}):n(t.ERR_LOGIN_PROVIDER_NOT_FOUND)}else n(t.ERR_NOT_LOGGED_IN);else n(t.ERR_NOT_INITIALIZED)})}}return t.\u0275fac=function(e){return new(e||t)(o.Zb("SocialAuthServiceConfig"))},t.\u0275prov=o.Ib({token:t,factory:t.\u0275fac}),t.ERR_LOGIN_PROVIDER_NOT_FOUND="Login provider not found",t.ERR_NOT_LOGGED_IN="Not logged in",t.ERR_NOT_INITIALIZED="Login providers not ready yet. Are there errors on your console?",t.ERR_NOT_SUPPORTED_FOR_REFRESH_TOKEN="Chosen login provider is not supported for refreshing a token",t})(),c=(()=>{class t{constructor(t){if(t)throw new Error("SocialLoginModule is already loaded. Import it in the AppModule only")}static initialize(e){return{ngModule:t,providers:[u,{provide:"SocialAuthServiceConfig",useValue:e}]}}}return t.\u0275mod=o.Kb({type:t}),t.\u0275inj=o.Jb({factory:function(e){return new(e||t)(o.Zb(t,12))},providers:[u],imports:[[n.b]]}),t})();location;var l=i("tyNb");const g=[{path:"",component:(()=>{class t{constructor(t,e){this.authService=t,this.router=e}ngOnInit(){console.log("ngOnInit call"),this.authService.authState.subscribe(t=>{this.user=t,this.router.navigateByUrl("/dashboard/default"),console.log("Current user",t),console.log("user",t.email),this.user&&console.log("user",t.authToken)},t=>{console.log("Current Error ",t),this.router.navigateByUrl("/auth/signin")})}signInWithGoogle(){console.log("signInWithGoogle call"),this.authService.signIn(h.PROVIDER_ID).then(t=>{console.log("Login user",t),this.router.navigateByUrl("/dashboard/default")}).catch(t=>{console.log("Login user Error",t),this.router.navigateByUrl("/auth/signin")})}signOut(){this.authService.signOut()}}return t.\u0275fac=function(e){return new(e||t)(o.Mb(u),o.Mb(l.f))},t.\u0275cmp=o.Gb({type:t,selectors:[["app-auth-signin"]],decls:16,vars:0,consts:[[1,"auth-wrapper"],[1,"auth-content"],[1,"auth-bg"],[1,"r"],[1,"r","s"],[1,"card"],[1,"card-body","text-center"],[1,"mb-4"],[1,"feather","icon-unlock","auth-icon"],[1,"btn","btn-primary","mb-4",3,"click"],[1,"feather","icon-user","mr-2"]],template:function(t,e){1&t&&(o.Sb(0,"div",0),o.Sb(1,"div",1),o.Sb(2,"div",2),o.Nb(3,"span",3),o.Nb(4,"span",4),o.Nb(5,"span",4),o.Nb(6,"span",3),o.Rb(),o.Sb(7,"div",5),o.Sb(8,"div",6),o.Sb(9,"div",7),o.Nb(10,"i",8),o.Rb(),o.Sb(11,"h3",7),o.Gc(12,"Login with Google"),o.Rb(),o.Sb(13,"button",9),o.cc("click",function(){return e.signInWithGoogle()}),o.Nb(14,"span",10),o.Gc(15," Sign in "),o.Rb(),o.Rb(),o.Rb(),o.Rb(),o.Rb())},encapsulation:2}),t})()}];let d=(()=>{class t{}return t.\u0275mod=o.Kb({type:t}),t.\u0275inj=o.Jb({factory:function(e){return new(e||t)},providers:[{provide:"SocialAuthServiceConfig",useValue:{autoLogin:!1,providers:[{id:h.PROVIDER_ID,provider:new h("227753546366-onka406diau8qaou6pk8j0f00ono2g1d.apps.googleusercontent.com")}]}}],imports:[[n.b,c,l.j.forChild(g)]]}),t})()}}]);