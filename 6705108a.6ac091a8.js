(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{126:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var i=n(1),r=n(6),a=(n(0),n(142)),o={title:"Web Installation"},c={id:"installation/web",title:"Web Installation",description:"Before using FlutterFire on the web, you must first import the Firebase JavaScript SDK and initialize Firebase.",source:"@site/../docs/installation/web.mdx",permalink:"/flutterfire/docs/installation/web",editUrl:"https://github.com/FirebaseExtended/flutterfire/edit/next/docs/../docs/installation/web.mdx",sidebar:"main",previous:{title:"iOS Installation",permalink:"/flutterfire/docs/installation/ios"},next:{title:"Authentication",permalink:"/flutterfire/docs/auth/overview"}},s=[{value:"Add Firebase SDKs",id:"add-firebase-sdks",children:[]},{value:"Initializing Firebase",id:"initializing-firebase",children:[]},{value:"Initializing FlutterFire",id:"initializing-flutterfire",children:[]}],l={rightToc:s};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Before using FlutterFire on the web, you must first import the Firebase JavaScript SDK and initialize Firebase."),Object(a.b)("h2",{id:"add-firebase-sdks"},"Add Firebase SDKs"),Object(a.b)("p",null,"The only way to currently add the Firebase SDKs to your Flutter web project is by importing the scripts from the\nFirebase content delivery network (CDN). Add the ",Object(a.b)("inlineCode",{parentName:"p"},"firebase-app.js")," script to your ",Object(a.b)("inlineCode",{parentName:"p"},"index.html")," file:"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-html",metastring:'{5} title="web/index.html"',"{5}":!0,title:'"web/index.html"'}),'<html>\n  ...\n  <body>\n    \x3c!-- Add this line --\x3e\n    <script src="https://www.gstatic.com/firebasejs/{{ web.firebase_cdn }}/firebase-app.js"><\/script>\n\n    <script src="main.dart.js" type="application/javascript"><\/script>\n  </body>\n</html>\n')),Object(a.b)("p",null,"For more information on setting Firebase up for the web, view the ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://firebase.google.com/docs/web/setup#add-sdks-initialize"}),"official documentation"),"."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"We are actively investigating ways to initialize Firebase without directly using the CDN and will update the documentation\nonce this becomes available.")),Object(a.b)("h2",{id:"initializing-firebase"},"Initializing Firebase"),Object(a.b)("p",null,"The next step is to initialize Firebase using your projects credentials. Create a new web app (or choose an existing one)\non the ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://console.firebase.google.com/project/_/settings/general/web"}),"Firebase Console")," and copy the configuration\ndetails."),Object(a.b)("p",null,"Initialize Firebase using these credentials, placing the following script below the CDN imports added above:"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-html",metastring:'{7-21} title="web/index.html"',"{7-21}":!0,title:'"web/index.html"'}),'<html>\n  ...\n  <body>\n    <script src="https://www.gstatic.com/firebasejs/{{ web.firebase_cdn }}/firebase-app.js"><\/script>\n\n    \x3c!-- Firebase Credentials --\x3e\n    <script>\n      var firebaseConfig = {\n        apiKey: "...",\n        authDomain: "[YOUR_PROJECT].firebaseapp.com",\n        databaseURL: "https://[YOUR_PROJECT].firebaseio.com",\n        projectId: "[YOUR_PROJECT]",\n        storageBucket: "[YOUR_PROJECT].appspot.com",\n        messagingSenderId: "...",\n        appId: "1:...:web:...",\n        measurementId: "G-...",\n      };\n\n      // Initialize Firebase\n      firebase.initializeApp(firebaseConfig);\n    <\/script>\n\n    <script src="main.dart.js" type="application/javascript"><\/script>\n  </body>\n</html>\n')),Object(a.b)("h2",{id:"initializing-flutterfire"},"Initializing FlutterFire"),Object(a.b)("p",null,"Once complete follow the instructions on ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"/flutterfire/docs/overview#initializing-flutterfire"}),"Initializing FlutterFire"),"."))}p.isMDXComponent=!0},142:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var i=n(0),r=n.n(i);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},b=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(i.forwardRef)((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(n),d=i,f=b["".concat(o,".").concat(d)]||b[d]||u[d]||a;return n?r.a.createElement(f,c({ref:t},l,{components:n})):r.a.createElement(f,c({ref:t},l))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);