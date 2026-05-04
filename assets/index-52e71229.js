var vn=Object.defineProperty;var yn=(e,r,i)=>r in e?vn(e,r,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[r]=i;var st=(e,r,i)=>(yn(e,typeof r!="symbol"?r+"":r,i),i);import{j as s,C as _t,P as St,i as bn,u as wn,a as jn,b as _n,p as kt,O as Sn,c as kn,d as Ct,e as Cn}from"./three-e9b3e8f9.js";import{r as _,b as En,e as On,g as Pn,R as He,c as Et}from"./vendor-7249422d.js";import{d as y,n as Tn,m as xe,o as An,A as Mn}from"./ui-4dbc6f2d.js";import{M as In,u as Ln,i as Se}from"./mui-383fc1a0.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))c(u);new MutationObserver(u=>{for(const f of u)if(f.type==="childList")for(const v of f.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&c(v)}).observe(document,{childList:!0,subtree:!0});function i(u){const f={};return u.integrity&&(f.integrity=u.integrity),u.referrerPolicy&&(f.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?f.credentials="include":u.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function c(u){if(u.ep)return;u.ep=!0;const f=i(u);fetch(u.href,f)}})();const Rn={bg:"#090917",bgLight:"#1C1E27",primary:"#854CE6",text_primary:"#F2F3F4",text_secondary:"#b1b2b3",card:"#171721",card_light:"#191924",button:"#854CE6",white:"#FFFFFF",black:"#000000"};/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fe(){return fe=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var i=arguments[r];for(var c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c])}return e},fe.apply(this,arguments)}var re;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(re||(re={}));const lt="popstate";function Nn(e){e===void 0&&(e={});function r(c,u){let{pathname:f,search:v,hash:n}=c.location;return Fe("",{pathname:f,search:v,hash:n},u.state&&u.state.usr||null,u.state&&u.state.key||"default")}function i(c,u){return typeof u=="string"?u:we(u)}return Dn(r,i,null,e)}function J(e,r){if(e===!1||e===null||typeof e>"u")throw new Error(r)}function $n(){return Math.random().toString(36).substr(2,8)}function ct(e,r){return{usr:e.state,key:e.key,idx:r}}function Fe(e,r,i,c){return i===void 0&&(i=null),fe({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof r=="string"?ke(r):r,{state:i,key:r&&r.key||c||$n()})}function we(e){let{pathname:r="/",search:i="",hash:c=""}=e;return i&&i!=="?"&&(r+=i.charAt(0)==="?"?i:"?"+i),c&&c!=="#"&&(r+=c.charAt(0)==="#"?c:"#"+c),r}function ke(e){let r={};if(e){let i=e.indexOf("#");i>=0&&(r.hash=e.substr(i),e=e.substr(0,i));let c=e.indexOf("?");c>=0&&(r.search=e.substr(c),e=e.substr(0,c)),e&&(r.pathname=e)}return r}function Dn(e,r,i,c){c===void 0&&(c={});let{window:u=document.defaultView,v5Compat:f=!1}=c,v=u.history,n=re.Pop,a=null,t=o();t==null&&(t=0,v.replaceState(fe({},v.state,{idx:t}),""));function o(){return(v.state||{idx:null}).idx}function p(){n=re.Pop;let x=o(),b=x==null?null:x-t;t=x,a&&a({action:n,location:g.location,delta:b})}function d(x,b){n=re.Push;let w=Fe(g.location,x,b);i&&i(w,x),t=o()+1;let j=ct(w,t),M=g.createHref(w);try{v.pushState(j,"",M)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;u.location.assign(M)}f&&a&&a({action:n,location:g.location,delta:1})}function l(x,b){n=re.Replace;let w=Fe(g.location,x,b);i&&i(w,x),t=o();let j=ct(w,t),M=g.createHref(w);v.replaceState(j,"",M),f&&a&&a({action:n,location:g.location,delta:0})}function h(x){let b=u.location.origin!=="null"?u.location.origin:u.location.href,w=typeof x=="string"?x:we(x);return w=w.replace(/ $/,"%20"),J(b,"No window.location.(origin|href) available to create URL for href: "+w),new URL(w,b)}let g={get action(){return n},get location(){return e(u,v)},listen(x){if(a)throw new Error("A history only accepts one active listener");return u.addEventListener(lt,p),a=x,()=>{u.removeEventListener(lt,p),a=null}},createHref(x){return r(u,x)},createURL:h,encodeLocation(x){let b=h(x);return{pathname:b.pathname,search:b.search,hash:b.hash}},push:d,replace:l,go(x){return v.go(x)}};return g}var ut;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(ut||(ut={}));function Ot(e,r){if(r==="/")return e;if(!e.toLowerCase().startsWith(r.toLowerCase()))return null;let i=r.endsWith("/")?r.length-1:r.length,c=e.charAt(i);return c&&c!=="/"?null:e.slice(i)||"/"}function zn(e,r){r===void 0&&(r="/");let{pathname:i,search:c="",hash:u=""}=typeof e=="string"?ke(e):e;return{pathname:i?i.startsWith("/")?i:Fn(i,r):r,search:Bn(c),hash:Wn(u)}}function Fn(e,r){let i=r.replace(/\/+$/,"").split("/");return e.split("/").forEach(u=>{u===".."?i.length>1&&i.pop():u!=="."&&i.push(u)}),i.length>1?i.join("/"):"/"}function Ne(e,r,i,c){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+r+"` field ["+JSON.stringify(c)+"].  Please separate it out to the ")+("`to."+i+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Vn(e){return e.filter((r,i)=>i===0||r.route.path&&r.route.path.length>0)}function Pt(e,r){let i=Vn(e);return r?i.map((c,u)=>u===i.length-1?c.pathname:c.pathnameBase):i.map(c=>c.pathnameBase)}function Tt(e,r,i,c){c===void 0&&(c=!1);let u;typeof e=="string"?u=ke(e):(u=fe({},e),J(!u.pathname||!u.pathname.includes("?"),Ne("?","pathname","search",u)),J(!u.pathname||!u.pathname.includes("#"),Ne("#","pathname","hash",u)),J(!u.search||!u.search.includes("#"),Ne("#","search","hash",u)));let f=e===""||u.pathname==="",v=f?"/":u.pathname,n;if(v==null)n=i;else{let p=r.length-1;if(!c&&v.startsWith("..")){let d=v.split("/");for(;d[0]==="..";)d.shift(),p-=1;u.pathname=d.join("/")}n=p>=0?r[p]:"/"}let a=zn(u,n),t=v&&v!=="/"&&v.endsWith("/"),o=(f||v===".")&&i.endsWith("/");return!a.pathname.endsWith("/")&&(t||o)&&(a.pathname+="/"),a}const At=e=>e.join("/").replace(/\/\/+/g,"/"),Bn=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Wn=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,Mt=["post","put","patch","delete"];new Set(Mt);const Un=["get",...Mt];new Set(Un);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function je(){return je=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var i=arguments[r];for(var c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c])}return e},je.apply(this,arguments)}const It=_.createContext(null),ae=_.createContext(null),qe=_.createContext(null),Ce=_.createContext({outlet:null,matches:[],isDataRoute:!1});function Hn(e,r){let{relative:i}=r===void 0?{}:r;Ee()||J(!1);let{basename:c,navigator:u}=_.useContext(ae),{hash:f,pathname:v,search:n}=Rt(e,{relative:i}),a=v;return c!=="/"&&(a=v==="/"?c:At([c,v])),u.createHref({pathname:a,search:n,hash:f})}function Ee(){return _.useContext(qe)!=null}function Ge(){return Ee()||J(!1),_.useContext(qe).location}function Lt(e){_.useContext(ae).static||_.useLayoutEffect(e)}function qn(){let{isDataRoute:e}=_.useContext(Ce);return e?Qn():Gn()}function Gn(){Ee()||J(!1);let e=_.useContext(It),{basename:r,future:i,navigator:c}=_.useContext(ae),{matches:u}=_.useContext(Ce),{pathname:f}=Ge(),v=JSON.stringify(Pt(u,i.v7_relativeSplatPath)),n=_.useRef(!1);return Lt(()=>{n.current=!0}),_.useCallback(function(t,o){if(o===void 0&&(o={}),!n.current)return;if(typeof t=="number"){c.go(t);return}let p=Tt(t,JSON.parse(v),f,o.relative==="path");e==null&&r!=="/"&&(p.pathname=p.pathname==="/"?r:At([r,p.pathname])),(o.replace?c.replace:c.push)(p,o.state,o)},[r,c,v,f,e])}function Rt(e,r){let{relative:i}=r===void 0?{}:r,{future:c}=_.useContext(ae),{matches:u}=_.useContext(Ce),{pathname:f}=Ge(),v=JSON.stringify(Pt(u,c.v7_relativeSplatPath));return _.useMemo(()=>Tt(e,JSON.parse(v),f,i==="path"),[e,v,f,i])}var Nt=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Nt||{}),$t=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}($t||{});function Kn(e){let r=_.useContext(It);return r||J(!1),r}function Yn(e){let r=_.useContext(Ce);return r||J(!1),r}function Jn(e){let r=Yn(),i=r.matches[r.matches.length-1];return i.route.id||J(!1),i.route.id}function Qn(){let{router:e}=Kn(Nt.UseNavigateStable),r=Jn($t.UseNavigateStable),i=_.useRef(!1);return Lt(()=>{i.current=!0}),_.useCallback(function(u,f){f===void 0&&(f={}),i.current&&(typeof u=="number"?e.navigate(u):e.navigate(u,je({fromRouteId:r},f)))},[e,r])}function Zn(e,r){e==null||e.v7_startTransition,(e==null?void 0:e.v7_relativeSplatPath)===void 0&&(!r||r.v7_relativeSplatPath),r&&(r.v7_fetcherPersist,r.v7_normalizeFormMethod,r.v7_partialHydration,r.v7_skipActionErrorRevalidation)}function Xn(e){let{basename:r="/",children:i=null,location:c,navigationType:u=re.Pop,navigator:f,static:v=!1,future:n}=e;Ee()&&J(!1);let a=r.replace(/^\/*/,"/"),t=_.useMemo(()=>({basename:a,navigator:f,static:v,future:je({v7_relativeSplatPath:!1},n)}),[a,n,f,v]);typeof c=="string"&&(c=ke(c));let{pathname:o="/",search:p="",hash:d="",state:l=null,key:h="default"}=c,g=_.useMemo(()=>{let x=Ot(o,a);return x==null?null:{location:{pathname:x,search:p,hash:d,state:l,key:h},navigationType:u}},[a,o,p,d,l,h,u]);return g==null?null:_.createElement(ae.Provider,{value:t},_.createElement(qe.Provider,{children:i,value:g}))}new Promise(()=>{});/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ve(){return Ve=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var i=arguments[r];for(var c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c])}return e},Ve.apply(this,arguments)}function er(e,r){if(e==null)return{};var i={},c=Object.keys(e),u,f;for(f=0;f<c.length;f++)u=c[f],!(r.indexOf(u)>=0)&&(i[u]=e[u]);return i}function tr(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function nr(e,r){return e.button===0&&(!r||r==="_self")&&!tr(e)}const rr=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],ir="6";try{window.__reactRouterVersion=ir}catch{}const or="startTransition",pt=En[or];function ar(e){let{basename:r,children:i,future:c,window:u}=e,f=_.useRef();f.current==null&&(f.current=Nn({window:u,v5Compat:!0}));let v=f.current,[n,a]=_.useState({action:v.action,location:v.location}),{v7_startTransition:t}=c||{},o=_.useCallback(p=>{t&&pt?pt(()=>a(p)):a(p)},[a,t]);return _.useLayoutEffect(()=>v.listen(o),[v,o]),_.useEffect(()=>Zn(c),[c]),_.createElement(Xn,{basename:r,children:i,location:n.location,navigationType:n.action,navigator:v,future:c})}const sr=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",lr=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,cr=_.forwardRef(function(r,i){let{onClick:c,relative:u,reloadDocument:f,replace:v,state:n,target:a,to:t,preventScrollReset:o,viewTransition:p}=r,d=er(r,rr),{basename:l}=_.useContext(ae),h,g=!1;if(typeof t=="string"&&lr.test(t)&&(h=t,sr))try{let j=new URL(window.location.href),M=t.startsWith("//")?new URL(j.protocol+t):new URL(t),k=Ot(M.pathname,l);M.origin===j.origin&&k!=null?t=k+M.search+M.hash:g=!0}catch{}let x=Hn(t,{relative:u}),b=ur(t,{replace:v,state:n,target:a,preventScrollReset:o,relative:u,viewTransition:p});function w(j){c&&c(j),j.defaultPrevented||b(j)}return _.createElement("a",Ve({},d,{href:h||x,onClick:g||f?c:w,ref:i,target:a}))});var dt;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(dt||(dt={}));var ft;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(ft||(ft={}));function ur(e,r){let{target:i,replace:c,state:u,preventScrollReset:f,relative:v,viewTransition:n}=r===void 0?{}:r,a=qn(),t=Ge(),o=Rt(e,{relative:v});return _.useCallback(p=>{if(nr(p,i)){p.preventDefault();let d=c!==void 0?c:we(t)===we(o);a(e,{replace:d,state:u,preventScrollReset:f,relative:v,viewTransition:n})}},[t,a,o,c,u,i,e,f,v,n])}const X={name:"Fathi BELMKADEM",roles:["Cyber Security Engineer","AI/ML Security Specialist","Software Engineer"],description:"I am a Cyber Security Engineer with a focus on Zero Trust architecture and automated threat response. I am currently an MSc. AI candidate at Universität Passau bridging the gap between security operations and scalable machine learning pipelines. I specialize in secure AI-powered applications, LLMOps, and cloud-native architecture.",github:"https://github.com/fathi-belmkadem",resume:"https://drive.google.com/file/d/your-resume-link/view?usp=drive_link",linkedin:"https://www.linkedin.com/in/fathi-belmkadem-6a9004198/",twitter:"https://twitter.com/fathi_belmkadem",insta:"https://www.instagram.com/fathi_belmkadem/",facebook:"https://www.facebook.com/fathi.belmkadem/"},pr=[{title:"Programming Languages",skills:[{name:"Python",image:"https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"},{name:"C++",image:"https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg"},{name:"C#",image:"https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg"},{name:"JavaScript",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png"},{name:"React Js",image:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"},{name:"Node Js",image:"https://nodejs.org/static/images/logo.svg"},{name:"Dart",image:"https://raw.githubusercontent.com/devicons/devicon/master/icons/dart/dart-original.svg"},{name:"Assembly",image:"https://raw.githubusercontent.com/devicons/devicon/master/icons/assembly/assembly-original.svg"}]},{title:"Cybersecurity Tools",skills:[{name:"Metasploit",image:"https://www.metasploit.com/favicon.ico"},{name:"Burp Suite",image:"https://portswigger.net/favicon.ico"},{name:"Nmap",image:"https://nmap.org/favicon.ico"},{name:"Nuclei",image:"https://nuclei.projectdiscovery.io/favicon.ico"},{name:"OSINT",image:"https://osintframework.com/favicon.ico"},{name:"Empire",image:"https://github.com/EmpireProject/Empire/favicon.ico"}]},{title:"AI & Machine Learning",skills:[{name:"TensorFlow",image:"https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg"},{name:"PyTorch",image:"https://www.vectorlogo.zone/logos/pytorch/pytorch-icon.svg"},{name:"OpenAI API",image:"https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg"},{name:"Scikit-learn",image:"https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg"},{name:"OpenCV",image:"https://opencv.org/wp-content/uploads/2020/07/OpenCV_logo_black.png"},{name:"Pandas",image:"https://pandas.pydata.org/static/img/pandas_white.svg"},{name:"NumPy",image:"https://numpy.org/images/logo.svg"},{name:"Hugging Face",image:"https://huggingface.co/front/assets/huggingface_logo-noborder.svg"}]},{title:"Databases & Tools",skills:[{name:"MySQL",image:"https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"},{name:"MongoDB",image:"https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"},{name:"InfluxDB",image:"https://www.influxdata.com/favicon.ico"},{name:"Git",image:"https://git-scm.com/favicon.ico"},{name:"Docker",image:"https://www.docker.com/favicon.ico"},{name:"Kubernetes",image:"https://kubernetes.io/favicon.ico"}]}],aa=[{id:1,title:"Outfai: AI-Powered Fashion Assistant",date:"03/2025 - Ongoing",description:"Architected a production-grade mobile assistant using React Native (Expo) and Google Vertex AI, delivering personalized styling recommendations via automated image analysis and NLP. Engineered a scalable serverless backend on Supabase, reducing API response latency by 45%. Integrated vector databases for fine-tuned RAG workflows.",image:"/outfai_logo.png",tags:["React Native","Vertex AI","Supabase","LLMs","RAG"],category:"AI/ML",github:"https://github.com/fathi-belmkadem/outfai-app",webapp:"https://outfai-demo.netlify.app/"},{id:2,title:"Kinetrack: Physiotherapy SaaS CRM",date:"08/2025 - 10/2025",description:"Architected a scalable multi-tenant SaaS platform managing 500+ patient profiles. Engineered automated clinical modules for invoicing and scheduling, reducing administrative overhead by 35%. Built a real-time analytics dashboard using React and D3.js. Automated deployment pipelines via GitHub Actions and Docker.",image:"https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=500&h=300&fit=crop",tags:["Next.js","Node.js","PostgreSQL","Docker","CI/CD","SaaS"],category:"Full Stack Development",github:"https://github.com/fathi-belmkadem/kinetrack",webapp:"https://kinetrack-demo.netlify.app/"},{id:3,title:"AI-Driven Automated Penetration Testing",date:"02/2024 - 07/2024",description:"Architected an autonomous AI-driven penetration testing system using Reinforcement Learning and Deep Learning, achieving a 92% accuracy rate in identifying exploitable vulnerabilities. Orchestrated automated security testing pipelines via Docker and GitLab CI/CD.",image:"https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=300&fit=crop",tags:["Python","AI/ML","Penetration Testing","Docker","GitLab CI/CD"],category:"AI/ML",github:"https://github.com/fathi-belmkadem/ai-pentesting-tool",webapp:"https://ai-pentesting-demo.netlify.app/"},{id:4,title:"MITRE ATT&CK Framework in SOAR",date:"09/2023 - 01/2024",description:"Integrated the MITRE ATT&CK framework into a SOAR platform, improving threat response efficiency by 45%. Automated OSquery data collection and parsing using Python and the ELK Stack. Engineered 20+ custom detection rules.",image:"/SOAR.png",tags:["MITRE ATT&CK","SOAR","OSquery","ELK Stack","Python"],category:"Cybersecurity",github:"https://github.com/fathi-belmkadem/attack-soar-integration",webapp:"https://attack-soar-demo.netlify.app/"},{id:5,title:"Enterprise WAF Implementation",date:"01/2023 - 05/2023",description:"Deployed a high-availability Web Application Firewall (WAF) using ModSecurity as a reverse proxy, securing containerized microservices within a Kubernetes cluster. Configured custom OWASP Core Rule Sets to mitigate SQLi and XSS vectors, reducing attacks by 70%.",image:"/WAF.png",tags:["ModSecurity","Kubernetes","Helm","OWASP","Docker"],category:"Cybersecurity",github:"https://github.com/fathi-belmkadem/web-application-firewall",webapp:"https://waf-demo.netlify.app/"},{id:6,title:"IoT Meteorology Station Dashboard",date:"10/2022 - 01/2023",description:"Prototyped a real-time monitoring application to visualize meteorological data from LoRaWAN sensors, handling high-throughput time-series data with InfluxDB. Developed a high-performance API using FastAPI to serve processed sensor data to a Flutter mobile frontend.",image:"/meteorology_app.png",tags:["Flutter","InfluxDB","LoRaWAN","FastAPI","IoT"],category:"Mobile App",github:"https://github.com/fathi-belmkadem/mobile-project",webapp:"https://meteorology-app-demo.netlify.app/"},{id:7,title:"Network Traffic Surveillance",date:"06/2022 - 08/2022",description:"Developed Deep Learning models for real-time network traffic surveillance, improving the identification of anomalous patterns and DDoS signatures by 25%. Integrated ML-based traffic analysis tools into existing VPC Security Groups.",image:"https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=300&fit=crop",tags:["Deep Learning","Network Security","Traffic Analysis","Python"],category:"AI/ML",github:"https://github.com/fathi-belmkadem/network-traffic-surveillance",webapp:"https://traffic-surveillance-demo.netlify.app/"}],dr=[{id:1,title:"Cybersecurity & DevOps, Working Student",company:"Skymatic GmbH",date:"02/2026 - Present",location:"Bonn, Germany (Remote)",img:"https://cryptomator.org/img/logo.png",description:["Deployed and configured Wazuh SIEM on a Kubernetes (K8s) cluster, establishing centralized security monitoring.","Performing regular Penetration Testing to identify and patch security gaps in the production environment.","Contributing to the security lifecycle of Cryptomator and Cryptomator Hub by implementing DevSecOps best practices."],skills:["SIEM","Kubernetes","DevSecOps","Penetration Testing"]},{id:2,title:"Network Security Engineer",company:"Orange TN",date:"10/2024 - 05/2025",location:"Tunis, Tunisia",img:"/Orange_S.A.-Logo.wine.png",description:["Automated network security audits and traffic filtering tasks using Python, reducing manual configuration time by 40%.","Engineered robust infrastructure security by deploying Fortinet, Juniper SRX, and Cisco WAF policies.","Optimized B2B secure connectivity by architecting VPN infrastructures via MPLS and L2VPN, ensuring 99.9% uptime.","Streamlined incident response by integrating real-time alerting systems with SIEM logs and Wireshark analysis."],skills:["Network Security","Python","Fortinet","Juniper","VPN","SIEM"]},{id:3,title:"Penetration Tester Intern",company:"RiskImmune",date:"02/2024 - 07/2024",location:"Tunis, Tunisia (Hybrid)",img:"/Responsible_cyber.jpg",description:["Architected an autonomous AI-driven penetration testing system using RL and DL, achieving a 92% accuracy rate.","Orchestrated automated security testing pipelines via Docker and GitLab CI/CD, accelerating assessments by 50%.","Secured automated scanning workflows by implementing RBAC and IAM protocols, ensuring Zero Trust compliance."],skills:["AI/ML","Penetration Testing","Docker","GitLab CI/CD","Zero Trust"]},{id:4,title:"Part-Time Tutor (Security Engineering Focus)",company:"6NLG",date:"09/2023 - 01/2024",location:"Tunis, Tunisia (Hybrid)",img:"/SOAR.png",description:["Integrated the MITRE ATT&CK framework into a SOAR platform, improving threat response efficiency by 45%.","Automated OSquery data collection and parsing using Python and the ELK Stack, increasing visibility by 60%.","Engineered 20+ custom detection rules for complex attack vectors, reducing MTTR by 20%."],skills:["MITRE ATT&CK","SOAR","OSquery","ELK Stack","Python"]},{id:5,title:"AI Security Intern",company:"INOTEQIA",date:"06/2023 - 08/2023",location:"Tunis, Tunisia",img:"/cytekia_logo.jpg",description:["Implemented Scikit-learn based machine learning models within a Cuckoo Sandbox environment, enhancing evasive malware detection by 30%.","Scaled the analysis environment using Docker containers, allowing for 3x higher throughput of malware samples."],skills:["Machine Learning","Cuckoo Sandbox","Docker","Python","Malware Analysis"]},{id:6,title:"Network Surveillance Intern",company:"ANCS",date:"06/2022 - 08/2022",location:"Tunis, Tunisia",img:"/ANCS_logo.jpg",description:["Developed Deep Learning models for real-time network traffic surveillance, improving the identification of anomalous patterns by 25%.","Integrated ML-based traffic analysis tools into existing VPC Security Groups, reducing incident identification time by 40%.","Modernized network defense protocols by formulating automated mitigation strategies."],skills:["Deep Learning","Network Security","Traffic Analysis","Python"]}],fr=[{id:1,school:"Universität Passau",degree:"Master of Science – Artificial Intelligence",date:"10/2025 - Present",location:"Passau, Germany",img:"https://upload.wikimedia.org/wikipedia/en/thumb/f/fa/University_of_Passau_logo.svg/1200px-University_of_Passau_logo.svg.png",description:"Courses: Mathematics for AI, LLMOps, Deep Learning, Machine Learning, Software Development, Natural Language Processing (NLP), Cloud Computing."},{id:2,school:"Higher School of Communication of Tunis - SUP'COM",degree:"Engineering Diploma – Telecommunication: Cyber Security and Defence",date:"09/2021 - 10/2024",location:"Ariana, Tunisia",img:"/Supcom_logo.jpg",description:"Courses: Ethical Hacking and Penetration Testing, Blockchain, Cyber Infrastructures Protection, Intrusion Detection, IoT, Cloud Computing Security, Application Security."},{id:3,school:"Preparatory School for Engineering of El Manar – IPEIEM",degree:"Pre-Engineering Studies (Math & Physics)",date:"09/2019 - 06/2021",location:"Tunis, Tunisia",img:"/institut-preparatoire-aux-etudes-dingenieurs-d-el-manar.png",description:"National Rank: 127/1500"}],hr=y.div`
  background-color: ${({theme:e})=>e.bg};
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  color: white;
`,ht=y.div`
  color: ${({theme:e})=>e.primary};
  font-size: 32px;
`,mr=y.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
`,gr=y(cr)`
  display: flex;
  align-items: center;
  width: 80%;
  padding: 0 6px;
  font-weight: 500;
  font-size: 18px;
  text-decoration: none;
  color: inherit;
`,xr=y.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding: 0 6px;
  list-style: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`,Z=y.a`
  color: ${({theme:e})=>e.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    color: ${({theme:e})=>e.primary};
  }
`,vr=y.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 6px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`,mt=y.a`
  border: 1px solid ${({theme:e})=>e.primary};
  color: ${({theme:e})=>e.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  border-radius: 20px;
  cursor: pointer;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.6s ease-in-out;
  text-decoration: none;
  &:hover {
    background: ${({theme:e})=>e.primary};
    color: ${({theme:e})=>e.text_primary};
  }
`,yr=y.div`
  height: 100%;
  display: flex;
  align-items: center;
  color: ${({theme:e})=>e.text_primary};
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
  }
`,br=y.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 16px;
  padding: 0 6px;
  list-style: none;
  width: 100%;
  padding: 12px 40px 24px 40px;
  background: ${({theme:e})=>e.card_light+99};
  position: absolute;
  top: 80px;
  right: 0;

  transition: all 0.6s ease-in-out;
  transform: ${({isOpen:e})=>e?"translateY(0)":"translateY(-100%)"};
  border-radius: 0 0 20px 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  opacity: ${({isOpen:e})=>e?"100%":"0"};
  z-index: ${({isOpen:e})=>e?"1000":"-1000"};
`,wr=()=>{const[e,r]=_.useState(!1),i=Tn();return s.jsx(hr,{children:s.jsxs(mr,{children:[s.jsxs(gr,{to:"/",children:[s.jsx(ht,{children:"<"}),"Fathi",s.jsx("div",{style:{color:i.primary},children:"/"}),"BELMKADEM",s.jsx(ht,{children:">"})]}),s.jsx(yr,{onClick:()=>r(!e),children:s.jsx(In,{style:{color:"inherit"}})}),s.jsxs(xr,{children:[s.jsx(Z,{href:"#About",children:"About"}),s.jsx(Z,{href:"#Skills",children:"Skills"}),s.jsx(Z,{href:"#Experience",children:"Experience"}),s.jsx(Z,{href:"#Projects",children:"Projects"}),s.jsx(Z,{href:"#Education",children:"Education"})]}),e&&s.jsxs(br,{isOpen:e,children:[s.jsx(Z,{onClick:()=>r(!e),href:"#About",children:"About"}),s.jsx(Z,{onClick:()=>r(!e),href:"#Skills",children:"Skills"}),s.jsx(Z,{onClick:()=>r(!e),href:"#Experience",children:"Experience"}),s.jsx(Z,{onClick:()=>r(!e),href:"#Projects",children:"Projects"}),s.jsx(Z,{onClick:()=>r(!e),href:"#Education",children:"Education"}),s.jsx(mt,{href:X.github,target:"_Blank",style:{background:i.primary,color:i.text_primary},children:"Github Profile"})]}),s.jsx(vr,{children:s.jsx(mt,{href:X.github,target:"_Blank",children:"Github Profile"})})]})})};var Dt={exports:{}};(function(e,r){(function(i,c){e.exports=c(_)})(typeof self<"u"?self:On,i=>(()=>{var c={2:(n,a,t)=>{var o=t(2199),p=t(4664),d=t(5950);n.exports=function(l){return o(l,d,p)}},79:(n,a,t)=>{var o=t(3702),p=t(80),d=t(4739),l=t(8655),h=t(1175);function g(x){var b=-1,w=x==null?0:x.length;for(this.clear();++b<w;){var j=x[b];this.set(j[0],j[1])}}g.prototype.clear=o,g.prototype.delete=p,g.prototype.get=d,g.prototype.has=l,g.prototype.set=h,n.exports=g},80:(n,a,t)=>{var o=t(6025),p=Array.prototype.splice;n.exports=function(d){var l=this.__data__,h=o(l,d);return!(h<0||(h==l.length-1?l.pop():p.call(l,h,1),--this.size,0))}},270:(n,a,t)=>{var o=t(7068),p=t(346);n.exports=function d(l,h,g,x,b){return l===h||(l==null||h==null||!p(l)&&!p(h)?l!=l&&h!=h:o(l,h,g,x,d,b))}},289:(n,a,t)=>{var o=t(2651);n.exports=function(p){return o(this,p).get(p)}},294:n=>{n.exports=function(a){return typeof a=="number"&&a>-1&&a%1==0&&a<=9007199254740991}},317:n=>{n.exports=function(a){var t=-1,o=Array(a.size);return a.forEach(function(p,d){o[++t]=[d,p]}),o}},346:n=>{n.exports=function(a){return a!=null&&typeof a=="object"}},361:n=>{var a=/^(?:0|[1-9]\d*)$/;n.exports=function(t,o){var p=typeof t;return!!(o=o??9007199254740991)&&(p=="number"||p!="symbol"&&a.test(t))&&t>-1&&t%1==0&&t<o}},392:n=>{n.exports=function(a,t){return a==null?void 0:a[t]}},659:(n,a,t)=>{var o=t(1873),p=Object.prototype,d=p.hasOwnProperty,l=p.toString,h=o?o.toStringTag:void 0;n.exports=function(g){var x=d.call(g,h),b=g[h];try{g[h]=void 0;var w=!0}catch{}var j=l.call(g);return w&&(x?g[h]=b:delete g[h]),j}},689:(n,a,t)=>{var o=t(2),p=Object.prototype.hasOwnProperty;n.exports=function(d,l,h,g,x,b){var w=1&h,j=o(d),M=j.length;if(M!=o(l).length&&!w)return!1;for(var k=M;k--;){var S=j[k];if(!(w?S in l:p.call(l,S)))return!1}var A=b.get(d),T=b.get(l);if(A&&T)return A==l&&T==d;var L=!0;b.set(d,l),b.set(l,d);for(var P=w;++k<M;){var E=d[S=j[k]],$=l[S];if(g)var F=w?g($,E,S,l,d,b):g(E,$,S,d,l,b);if(!(F===void 0?E===$||x(E,$,h,g,b):F)){L=!1;break}P||(P=S=="constructor")}if(L&&!P){var V=d.constructor,U=l.constructor;V==U||!("constructor"in d)||!("constructor"in l)||typeof V=="function"&&V instanceof V&&typeof U=="function"&&U instanceof U||(L=!1)}return b.delete(d),b.delete(l),L}},695:(n,a,t)=>{var o=t(8096),p=t(2428),d=t(6449),l=t(3656),h=t(361),g=t(7167),x=Object.prototype.hasOwnProperty;n.exports=function(b,w){var j=d(b),M=!j&&p(b),k=!j&&!M&&l(b),S=!j&&!M&&!k&&g(b),A=j||M||k||S,T=A?o(b.length,String):[],L=T.length;for(var P in b)!w&&!x.call(b,P)||A&&(P=="length"||k&&(P=="offset"||P=="parent")||S&&(P=="buffer"||P=="byteLength"||P=="byteOffset")||h(P,L))||T.push(P);return T}},938:n=>{n.exports=function(a){var t=this.__data__,o=t.delete(a);return this.size=t.size,o}},945:(n,a,t)=>{var o=t(79),p=t(8223),d=t(3661);n.exports=function(l,h){var g=this.__data__;if(g instanceof o){var x=g.__data__;if(!p||x.length<199)return x.push([l,h]),this.size=++g.size,this;g=this.__data__=new d(x)}return g.set(l,h),this.size=g.size,this}},1042:(n,a,t)=>{var o=t(6110)(Object,"create");n.exports=o},1175:(n,a,t)=>{var o=t(6025);n.exports=function(p,d){var l=this.__data__,h=o(l,p);return h<0?(++this.size,l.push([p,d])):l[h][1]=d,this}},1380:n=>{n.exports=function(a){return this.__data__.set(a,"__lodash_hash_undefined__"),this}},1420:(n,a,t)=>{var o=t(79);n.exports=function(){this.__data__=new o,this.size=0}},1459:n=>{n.exports=function(a){return this.__data__.has(a)}},1549:(n,a,t)=>{var o=t(2032),p=t(3862),d=t(6721),l=t(2749),h=t(5749);function g(x){var b=-1,w=x==null?0:x.length;for(this.clear();++b<w;){var j=x[b];this.set(j[0],j[1])}}g.prototype.clear=o,g.prototype.delete=p,g.prototype.get=d,g.prototype.has=l,g.prototype.set=h,n.exports=g},1873:(n,a,t)=>{var o=t(9325).Symbol;n.exports=o},1882:(n,a,t)=>{var o=t(2552),p=t(3805);n.exports=function(d){if(!p(d))return!1;var l=o(d);return l=="[object Function]"||l=="[object GeneratorFunction]"||l=="[object AsyncFunction]"||l=="[object Proxy]"}},1986:(n,a,t)=>{var o=t(1873),p=t(7828),d=t(5288),l=t(5911),h=t(317),g=t(4247),x=o?o.prototype:void 0,b=x?x.valueOf:void 0;n.exports=function(w,j,M,k,S,A,T){switch(M){case"[object DataView]":if(w.byteLength!=j.byteLength||w.byteOffset!=j.byteOffset)return!1;w=w.buffer,j=j.buffer;case"[object ArrayBuffer]":return!(w.byteLength!=j.byteLength||!A(new p(w),new p(j)));case"[object Boolean]":case"[object Date]":case"[object Number]":return d(+w,+j);case"[object Error]":return w.name==j.name&&w.message==j.message;case"[object RegExp]":case"[object String]":return w==j+"";case"[object Map]":var L=h;case"[object Set]":var P=1&k;if(L||(L=g),w.size!=j.size&&!P)return!1;var E=T.get(w);if(E)return E==j;k|=2,T.set(w,j);var $=l(L(w),L(j),k,S,A,T);return T.delete(w),$;case"[object Symbol]":if(b)return b.call(w)==b.call(j)}return!1}},2032:(n,a,t)=>{var o=t(1042);n.exports=function(){this.__data__=o?o(null):{},this.size=0}},2199:(n,a,t)=>{var o=t(4528),p=t(6449);n.exports=function(d,l,h){var g=l(d);return p(d)?g:o(g,h(d))}},2404:(n,a,t)=>{var o=t(270);n.exports=function(p,d){return o(p,d)}},2428:(n,a,t)=>{var o=t(7534),p=t(346),d=Object.prototype,l=d.hasOwnProperty,h=d.propertyIsEnumerable,g=o(function(){return arguments}())?o:function(x){return p(x)&&l.call(x,"callee")&&!h.call(x,"callee")};n.exports=g},2552:(n,a,t)=>{var o=t(1873),p=t(659),d=t(9350),l=o?o.toStringTag:void 0;n.exports=function(h){return h==null?h===void 0?"[object Undefined]":"[object Null]":l&&l in Object(h)?p(h):d(h)}},2651:(n,a,t)=>{var o=t(4218);n.exports=function(p,d){var l=p.__data__;return o(d)?l[typeof d=="string"?"string":"hash"]:l.map}},2749:(n,a,t)=>{var o=t(1042),p=Object.prototype.hasOwnProperty;n.exports=function(d){var l=this.__data__;return o?l[d]!==void 0:p.call(l,d)}},2804:(n,a,t)=>{var o=t(6110)(t(9325),"Promise");n.exports=o},2949:(n,a,t)=>{var o=t(2651);n.exports=function(p,d){var l=o(this,p),h=l.size;return l.set(p,d),this.size+=l.size==h?0:1,this}},3040:(n,a,t)=>{var o=t(1549),p=t(79),d=t(8223);n.exports=function(){this.size=0,this.__data__={hash:new o,map:new(d||p),string:new o}}},3146:(n,a,t)=>{for(var o=t(3491),p=typeof window>"u"?t.g:window,d=["moz","webkit"],l="AnimationFrame",h=p["request"+l],g=p["cancel"+l]||p["cancelRequest"+l],x=0;!h&&x<d.length;x++)h=p[d[x]+"Request"+l],g=p[d[x]+"Cancel"+l]||p[d[x]+"CancelRequest"+l];if(!h||!g){var b=0,w=0,j=[],M=1e3/60;h=function(k){if(j.length===0){var S=o(),A=Math.max(0,M-(S-b));b=A+S,setTimeout(function(){var T=j.slice(0);j.length=0;for(var L=0;L<T.length;L++)if(!T[L].cancelled)try{T[L].callback(b)}catch(P){setTimeout(function(){throw P},0)}},Math.round(A))}return j.push({handle:++w,callback:k,cancelled:!1}),w},g=function(k){for(var S=0;S<j.length;S++)j[S].handle===k&&(j[S].cancelled=!0)}}n.exports=function(k){return h.call(p,k)},n.exports.cancel=function(){g.apply(p,arguments)},n.exports.polyfill=function(k){k||(k=p),k.requestAnimationFrame=h,k.cancelAnimationFrame=g}},3345:n=>{n.exports=function(){return[]}},3491:function(n){(function(){var a,t,o,p,d,l;typeof performance<"u"&&performance!==null&&performance.now?n.exports=function(){return performance.now()}:typeof process<"u"&&process!==null&&process.hrtime?(n.exports=function(){return(a()-d)/1e6},t=process.hrtime,p=(a=function(){var h;return 1e9*(h=t())[0]+h[1]})(),l=1e9*process.uptime(),d=p-l):Date.now?(n.exports=function(){return Date.now()-o},o=Date.now()):(n.exports=function(){return new Date().getTime()-o},o=new Date().getTime())}).call(this)},3605:n=>{n.exports=function(a){return this.__data__.get(a)}},3650:(n,a,t)=>{var o=t(4335)(Object.keys,Object);n.exports=o},3656:(n,a,t)=>{n=t.nmd(n);var o=t(9325),p=t(9935),d=a&&!a.nodeType&&a,l=d&&n&&!n.nodeType&&n,h=l&&l.exports===d?o.Buffer:void 0,g=(h?h.isBuffer:void 0)||p;n.exports=g},3661:(n,a,t)=>{var o=t(3040),p=t(7670),d=t(289),l=t(4509),h=t(2949);function g(x){var b=-1,w=x==null?0:x.length;for(this.clear();++b<w;){var j=x[b];this.set(j[0],j[1])}}g.prototype.clear=o,g.prototype.delete=p,g.prototype.get=d,g.prototype.has=l,g.prototype.set=h,n.exports=g},3702:n=>{n.exports=function(){this.__data__=[],this.size=0}},3805:n=>{n.exports=function(a){var t=typeof a;return a!=null&&(t=="object"||t=="function")}},3862:n=>{n.exports=function(a){var t=this.has(a)&&delete this.__data__[a];return this.size-=t?1:0,t}},4218:n=>{n.exports=function(a){var t=typeof a;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?a!=="__proto__":a===null}},4247:n=>{n.exports=function(a){var t=-1,o=Array(a.size);return a.forEach(function(p){o[++t]=p}),o}},4248:n=>{n.exports=function(a,t){for(var o=-1,p=a==null?0:a.length;++o<p;)if(t(a[o],o,a))return!0;return!1}},4335:n=>{n.exports=function(a,t){return function(o){return a(t(o))}}},4509:(n,a,t)=>{var o=t(2651);n.exports=function(p){return o(this,p).has(p)}},4528:n=>{n.exports=function(a,t){for(var o=-1,p=t.length,d=a.length;++o<p;)a[d+o]=t[o];return a}},4664:(n,a,t)=>{var o=t(9770),p=t(3345),d=Object.prototype.propertyIsEnumerable,l=Object.getOwnPropertySymbols,h=l?function(g){return g==null?[]:(g=Object(g),o(l(g),function(x){return d.call(g,x)}))}:p;n.exports=h},4739:(n,a,t)=>{var o=t(6025);n.exports=function(p){var d=this.__data__,l=o(d,p);return l<0?void 0:d[l][1]}},4840:(n,a,t)=>{var o=typeof t.g=="object"&&t.g&&t.g.Object===Object&&t.g;n.exports=o},4894:(n,a,t)=>{var o=t(1882),p=t(294);n.exports=function(d){return d!=null&&p(d.length)&&!o(d)}},4901:(n,a,t)=>{var o=t(2552),p=t(294),d=t(346),l={};l["[object Float32Array]"]=l["[object Float64Array]"]=l["[object Int8Array]"]=l["[object Int16Array]"]=l["[object Int32Array]"]=l["[object Uint8Array]"]=l["[object Uint8ClampedArray]"]=l["[object Uint16Array]"]=l["[object Uint32Array]"]=!0,l["[object Arguments]"]=l["[object Array]"]=l["[object ArrayBuffer]"]=l["[object Boolean]"]=l["[object DataView]"]=l["[object Date]"]=l["[object Error]"]=l["[object Function]"]=l["[object Map]"]=l["[object Number]"]=l["[object Object]"]=l["[object RegExp]"]=l["[object Set]"]=l["[object String]"]=l["[object WeakMap]"]=!1,n.exports=function(h){return d(h)&&p(h.length)&&!!l[o(h)]}},5083:(n,a,t)=>{var o=t(1882),p=t(7296),d=t(3805),l=t(7473),h=/^\[object .+?Constructor\]$/,g=Function.prototype,x=Object.prototype,b=g.toString,w=x.hasOwnProperty,j=RegExp("^"+b.call(w).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");n.exports=function(M){return!(!d(M)||p(M))&&(o(M)?j:h).test(l(M))}},5288:n=>{n.exports=function(a,t){return a===t||a!=a&&t!=t}},5481:(n,a,t)=>{var o=t(9325)["__core-js_shared__"];n.exports=o},5527:n=>{var a=Object.prototype;n.exports=function(t){var o=t&&t.constructor;return t===(typeof o=="function"&&o.prototype||a)}},5580:(n,a,t)=>{var o=t(6110)(t(9325),"DataView");n.exports=o},5749:(n,a,t)=>{var o=t(1042);n.exports=function(p,d){var l=this.__data__;return this.size+=this.has(p)?0:1,l[p]=o&&d===void 0?"__lodash_hash_undefined__":d,this}},5861:(n,a,t)=>{var o=t(5580),p=t(8223),d=t(2804),l=t(6545),h=t(8303),g=t(2552),x=t(7473),b="[object Map]",w="[object Promise]",j="[object Set]",M="[object WeakMap]",k="[object DataView]",S=x(o),A=x(p),T=x(d),L=x(l),P=x(h),E=g;(o&&E(new o(new ArrayBuffer(1)))!=k||p&&E(new p)!=b||d&&E(d.resolve())!=w||l&&E(new l)!=j||h&&E(new h)!=M)&&(E=function($){var F=g($),V=F=="[object Object]"?$.constructor:void 0,U=V?x(V):"";if(U)switch(U){case S:return k;case A:return b;case T:return w;case L:return j;case P:return M}return F}),n.exports=E},5911:(n,a,t)=>{var o=t(8859),p=t(4248),d=t(9219);n.exports=function(l,h,g,x,b,w){var j=1&g,M=l.length,k=h.length;if(M!=k&&!(j&&k>M))return!1;var S=w.get(l),A=w.get(h);if(S&&A)return S==h&&A==l;var T=-1,L=!0,P=2&g?new o:void 0;for(w.set(l,h),w.set(h,l);++T<M;){var E=l[T],$=h[T];if(x)var F=j?x($,E,T,h,l,w):x(E,$,T,l,h,w);if(F!==void 0){if(F)continue;L=!1;break}if(P){if(!p(h,function(V,U){if(!d(P,U)&&(E===V||b(E,V,g,x,w)))return P.push(U)})){L=!1;break}}else if(E!==$&&!b(E,$,g,x,w)){L=!1;break}}return w.delete(l),w.delete(h),L}},5950:(n,a,t)=>{var o=t(695),p=t(8984),d=t(4894);n.exports=function(l){return d(l)?o(l):p(l)}},6009:(n,a,t)=>{n=t.nmd(n);var o=t(4840),p=a&&!a.nodeType&&a,d=p&&n&&!n.nodeType&&n,l=d&&d.exports===p&&o.process,h=function(){try{return d&&d.require&&d.require("util").types||l&&l.binding&&l.binding("util")}catch{}}();n.exports=h},6025:(n,a,t)=>{var o=t(5288);n.exports=function(p,d){for(var l=p.length;l--;)if(o(p[l][0],d))return l;return-1}},6110:(n,a,t)=>{var o=t(5083),p=t(392);n.exports=function(d,l){var h=p(d,l);return o(h)?h:void 0}},6449:n=>{var a=Array.isArray;n.exports=a},6545:(n,a,t)=>{var o=t(6110)(t(9325),"Set");n.exports=o},6721:(n,a,t)=>{var o=t(1042),p=Object.prototype.hasOwnProperty;n.exports=function(d){var l=this.__data__;if(o){var h=l[d];return h==="__lodash_hash_undefined__"?void 0:h}return p.call(l,d)?l[d]:void 0}},7068:(n,a,t)=>{var o=t(7217),p=t(5911),d=t(1986),l=t(689),h=t(5861),g=t(6449),x=t(3656),b=t(7167),w="[object Arguments]",j="[object Array]",M="[object Object]",k=Object.prototype.hasOwnProperty;n.exports=function(S,A,T,L,P,E){var $=g(S),F=g(A),V=$?j:h(S),U=F?j:h(A),R=(V=V==w?M:V)==M,ie=(U=U==w?M:U)==M,ne=V==U;if(ne&&x(S)){if(!x(A))return!1;$=!0,R=!1}if(ne&&!R)return E||(E=new o),$||b(S)?p(S,A,T,L,P,E):d(S,A,V,T,L,P,E);if(!(1&T)){var N=R&&k.call(S,"__wrapped__"),C=ie&&k.call(A,"__wrapped__");if(N||C){var D=N?S.value():S,I=C?A.value():A;return E||(E=new o),P(D,I,T,L,E)}}return!!ne&&(E||(E=new o),l(S,A,T,L,P,E))}},7167:(n,a,t)=>{var o=t(4901),p=t(7301),d=t(6009),l=d&&d.isTypedArray,h=l?p(l):o;n.exports=h},7217:(n,a,t)=>{var o=t(79),p=t(1420),d=t(938),l=t(3605),h=t(9817),g=t(945);function x(b){var w=this.__data__=new o(b);this.size=w.size}x.prototype.clear=p,x.prototype.delete=d,x.prototype.get=l,x.prototype.has=h,x.prototype.set=g,n.exports=x},7296:(n,a,t)=>{var o,p=t(5481),d=(o=/[^.]+$/.exec(p&&p.keys&&p.keys.IE_PROTO||""))?"Symbol(src)_1."+o:"";n.exports=function(l){return!!d&&d in l}},7301:n=>{n.exports=function(a){return function(t){return a(t)}}},7473:n=>{var a=Function.prototype.toString;n.exports=function(t){if(t!=null){try{return a.call(t)}catch{}try{return t+""}catch{}}return""}},7534:(n,a,t)=>{var o=t(2552),p=t(346);n.exports=function(d){return p(d)&&o(d)=="[object Arguments]"}},7670:(n,a,t)=>{var o=t(2651);n.exports=function(p){var d=o(this,p).delete(p);return this.size-=d?1:0,d}},7828:(n,a,t)=>{var o=t(9325).Uint8Array;n.exports=o},8096:n=>{n.exports=function(a,t){for(var o=-1,p=Array(a);++o<a;)p[o]=t(o);return p}},8223:(n,a,t)=>{var o=t(6110)(t(9325),"Map");n.exports=o},8303:(n,a,t)=>{var o=t(6110)(t(9325),"WeakMap");n.exports=o},8655:(n,a,t)=>{var o=t(6025);n.exports=function(p){return o(this.__data__,p)>-1}},8859:(n,a,t)=>{var o=t(3661),p=t(1380),d=t(1459);function l(h){var g=-1,x=h==null?0:h.length;for(this.__data__=new o;++g<x;)this.add(h[g])}l.prototype.add=l.prototype.push=p,l.prototype.has=d,n.exports=l},8984:(n,a,t)=>{var o=t(5527),p=t(3650),d=Object.prototype.hasOwnProperty;n.exports=function(l){if(!o(l))return p(l);var h=[];for(var g in Object(l))d.call(l,g)&&g!="constructor"&&h.push(g);return h}},9155:n=>{n.exports=i},9219:n=>{n.exports=function(a,t){return a.has(t)}},9325:(n,a,t)=>{var o=t(4840),p=typeof self=="object"&&self&&self.Object===Object&&self,d=o||p||Function("return this")();n.exports=d},9350:n=>{var a=Object.prototype.toString;n.exports=function(t){return a.call(t)}},9770:n=>{n.exports=function(a,t){for(var o=-1,p=a==null?0:a.length,d=0,l=[];++o<p;){var h=a[o];t(h,o,a)&&(l[d++]=h)}return l}},9817:n=>{n.exports=function(a){return this.__data__.has(a)}},9905:(n,a,t)=>{t.d(a,{default:()=>ne});var o=t(3146),p=t.n(o);const d=function(N){return new RegExp(/<[a-z][\s\S]*>/i).test(N)},l=function(N,C){return Math.floor(Math.random()*(C-N+1))+N};var h="TYPE_CHARACTER",g="REMOVE_CHARACTER",x="REMOVE_ALL",b="REMOVE_LAST_VISIBLE_NODE",w="PAUSE_FOR",j="CALL_FUNCTION",M="ADD_HTML_TAG_ELEMENT",k="CHANGE_DELETE_SPEED",S="CHANGE_DELAY",A="CHANGE_CURSOR",T="PASTE_STRING",L="HTML_TAG";function P(N){return P=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(C){return typeof C}:function(C){return C&&typeof Symbol=="function"&&C.constructor===Symbol&&C!==Symbol.prototype?"symbol":typeof C},P(N)}function E(N,C){var D=Object.keys(N);if(Object.getOwnPropertySymbols){var I=Object.getOwnPropertySymbols(N);C&&(I=I.filter(function(Q){return Object.getOwnPropertyDescriptor(N,Q).enumerable})),D.push.apply(D,I)}return D}function $(N){for(var C=1;C<arguments.length;C++){var D=arguments[C]!=null?arguments[C]:{};C%2?E(Object(D),!0).forEach(function(I){R(N,I,D[I])}):Object.getOwnPropertyDescriptors?Object.defineProperties(N,Object.getOwnPropertyDescriptors(D)):E(Object(D)).forEach(function(I){Object.defineProperty(N,I,Object.getOwnPropertyDescriptor(D,I))})}return N}function F(N){return function(C){if(Array.isArray(C))return V(C)}(N)||function(C){if(typeof Symbol<"u"&&C[Symbol.iterator]!=null||C["@@iterator"]!=null)return Array.from(C)}(N)||function(C,D){if(C){if(typeof C=="string")return V(C,D);var I={}.toString.call(C).slice(8,-1);return I==="Object"&&C.constructor&&(I=C.constructor.name),I==="Map"||I==="Set"?Array.from(C):I==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(I)?V(C,D):void 0}}(N)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function V(N,C){(C==null||C>N.length)&&(C=N.length);for(var D=0,I=Array(C);D<C;D++)I[D]=N[D];return I}function U(N,C){for(var D=0;D<C.length;D++){var I=C[D];I.enumerable=I.enumerable||!1,I.configurable=!0,"value"in I&&(I.writable=!0),Object.defineProperty(N,ie(I.key),I)}}function R(N,C,D){return(C=ie(C))in N?Object.defineProperty(N,C,{value:D,enumerable:!0,configurable:!0,writable:!0}):N[C]=D,N}function ie(N){var C=function(D){if(P(D)!="object"||!D)return D;var I=D[Symbol.toPrimitive];if(I!==void 0){var Q=I.call(D,"string");if(P(Q)!="object")return Q;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(D)}(N);return P(C)=="symbol"?C:C+""}const ne=function(){function N(I,Q){var m=this;if(function(O,z){if(!(O instanceof z))throw new TypeError("Cannot call a class as a function")}(this,N),R(this,"state",{cursorAnimation:null,lastFrameTime:null,pauseUntil:null,eventQueue:[],eventLoop:null,eventLoopPaused:!1,reverseCalledEvents:[],calledEvents:[],visibleNodes:[],initialOptions:null,elements:{container:null,wrapper:document.createElement("span"),cursor:document.createElement("span")}}),R(this,"options",{strings:null,cursor:"|",delay:"natural",pauseFor:1500,deleteSpeed:"natural",loop:!1,autoStart:!1,devMode:!1,skipAddStyles:!1,wrapperClassName:"Typewriter__wrapper",cursorClassName:"Typewriter__cursor",stringSplitter:null,onCreateTextNode:null,onRemoveNode:null}),R(this,"setupWrapperElement",function(){m.state.elements.container&&(m.state.elements.wrapper.className=m.options.wrapperClassName,m.state.elements.cursor.className=m.options.cursorClassName,m.state.elements.cursor.innerHTML=m.options.cursor,m.state.elements.container.innerHTML="",m.state.elements.container.appendChild(m.state.elements.wrapper),m.state.elements.container.appendChild(m.state.elements.cursor))}),R(this,"start",function(){return m.state.eventLoopPaused=!1,m.runEventLoop(),m}),R(this,"pause",function(){return m.state.eventLoopPaused=!0,m}),R(this,"stop",function(){return m.state.eventLoop&&((0,o.cancel)(m.state.eventLoop),m.state.eventLoop=null),m}),R(this,"pauseFor",function(O){return m.addEventToQueue(w,{ms:O}),m}),R(this,"typeOutAllStrings",function(){return typeof m.options.strings=="string"?(m.typeString(m.options.strings).pauseFor(m.options.pauseFor),m):(m.options.strings.forEach(function(O){m.typeString(O).pauseFor(m.options.pauseFor).deleteAll(m.options.deleteSpeed)}),m)}),R(this,"typeString",function(O){var z=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(d(O))return m.typeOutHTMLString(O,z);if(O){var q=(m.options||{}).stringSplitter,G=typeof q=="function"?q(O):O.split("");m.typeCharacters(G,z)}return m}),R(this,"pasteString",function(O){var z=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;return d(O)?m.typeOutHTMLString(O,z,!0):(O&&m.addEventToQueue(T,{character:O,node:z}),m)}),R(this,"typeOutHTMLString",function(O){var z=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,q=arguments.length>2?arguments[2]:void 0,G=function(se){var le=document.createElement("div");return le.innerHTML=se,le.childNodes}(O);if(G.length>0)for(var B=0;B<G.length;B++){var K=G[B],oe=K.innerHTML;K&&K.nodeType!==3?(K.innerHTML="",m.addEventToQueue(M,{node:K,parentNode:z}),q?m.pasteString(oe,K):m.typeString(oe,K)):K.textContent&&(q?m.pasteString(K.textContent,z):m.typeString(K.textContent,z))}return m}),R(this,"deleteAll",function(){var O=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"natural";return m.addEventToQueue(x,{speed:O}),m}),R(this,"changeDeleteSpeed",function(O){if(!O)throw new Error("Must provide new delete speed");return m.addEventToQueue(k,{speed:O}),m}),R(this,"changeDelay",function(O){if(!O)throw new Error("Must provide new delay");return m.addEventToQueue(S,{delay:O}),m}),R(this,"changeCursor",function(O){if(!O)throw new Error("Must provide new cursor");return m.addEventToQueue(A,{cursor:O}),m}),R(this,"deleteChars",function(O){if(!O)throw new Error("Must provide amount of characters to delete");for(var z=0;z<O;z++)m.addEventToQueue(g);return m}),R(this,"callFunction",function(O,z){if(!O||typeof O!="function")throw new Error("Callback must be a function");return m.addEventToQueue(j,{cb:O,thisArg:z}),m}),R(this,"typeCharacters",function(O){var z=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!O||!Array.isArray(O))throw new Error("Characters must be an array");return O.forEach(function(q){m.addEventToQueue(h,{character:q,node:z})}),m}),R(this,"removeCharacters",function(O){if(!O||!Array.isArray(O))throw new Error("Characters must be an array");return O.forEach(function(){m.addEventToQueue(g)}),m}),R(this,"addEventToQueue",function(O,z){var q=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return m.addEventToStateProperty(O,z,q,"eventQueue")}),R(this,"addReverseCalledEvent",function(O,z){var q=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return m.options.loop?m.addEventToStateProperty(O,z,q,"reverseCalledEvents"):m}),R(this,"addEventToStateProperty",function(O,z){var q=arguments.length>2&&arguments[2]!==void 0&&arguments[2],G=arguments.length>3?arguments[3]:void 0,B={eventName:O,eventArgs:z||{}};return m.state[G]=q?[B].concat(F(m.state[G])):[].concat(F(m.state[G]),[B]),m}),R(this,"runEventLoop",function(){m.state.lastFrameTime||(m.state.lastFrameTime=Date.now());var O=Date.now(),z=O-m.state.lastFrameTime;if(!m.state.eventQueue.length){if(!m.options.loop)return;m.state.eventQueue=F(m.state.calledEvents),m.state.calledEvents=[],m.options=$({},m.state.initialOptions)}if(m.state.eventLoop=p()(m.runEventLoop),!m.state.eventLoopPaused){if(m.state.pauseUntil){if(O<m.state.pauseUntil)return;m.state.pauseUntil=null}var q,G=F(m.state.eventQueue),B=G.shift();if(!(z<=(q=B.eventName===b||B.eventName===g?m.options.deleteSpeed==="natural"?l(40,80):m.options.deleteSpeed:m.options.delay==="natural"?l(120,160):m.options.delay))){var K=B.eventName,oe=B.eventArgs;switch(m.logInDevMode({currentEvent:B,state:m.state,delay:q}),K){case T:case h:var se=oe.character,le=oe.node,rt=document.createTextNode(se),ce=rt;m.options.onCreateTextNode&&typeof m.options.onCreateTextNode=="function"&&(ce=m.options.onCreateTextNode(se,rt)),ce&&(le?le.appendChild(ce):m.state.elements.wrapper.appendChild(ce)),m.state.visibleNodes=[].concat(F(m.state.visibleNodes),[{type:"TEXT_NODE",character:se,node:ce}]);break;case g:G.unshift({eventName:b,eventArgs:{removingCharacterNode:!0}});break;case w:var un=B.eventArgs.ms;m.state.pauseUntil=Date.now()+parseInt(un);break;case j:var it=B.eventArgs,pn=it.cb,dn=it.thisArg;pn.call(dn,{elements:m.state.elements});break;case M:var ot=B.eventArgs,Me=ot.node,Ie=ot.parentNode;Ie?Ie.appendChild(Me):m.state.elements.wrapper.appendChild(Me),m.state.visibleNodes=[].concat(F(m.state.visibleNodes),[{type:L,node:Me,parentNode:Ie||m.state.elements.wrapper}]);break;case x:var fn=m.state.visibleNodes,Le=oe.speed,me=[];Le&&me.push({eventName:k,eventArgs:{speed:Le,temp:!0}});for(var at=0,hn=fn.length;at<hn;at++)me.push({eventName:b,eventArgs:{removingCharacterNode:!1}});Le&&me.push({eventName:k,eventArgs:{speed:m.options.deleteSpeed,temp:!0}}),G.unshift.apply(G,me);break;case b:var mn=B.eventArgs.removingCharacterNode;if(m.state.visibleNodes.length){var Re=m.state.visibleNodes.pop(),gn=Re.type,ge=Re.node,xn=Re.character;m.options.onRemoveNode&&typeof m.options.onRemoveNode=="function"&&m.options.onRemoveNode({node:ge,character:xn}),ge&&ge.parentNode.removeChild(ge),gn===L&&mn&&G.unshift({eventName:b,eventArgs:{}})}break;case k:m.options.deleteSpeed=B.eventArgs.speed;break;case S:m.options.delay=B.eventArgs.delay;break;case A:m.options.cursor=B.eventArgs.cursor,m.state.elements.cursor.innerHTML=B.eventArgs.cursor}m.options.loop&&(B.eventName===b||B.eventArgs&&B.eventArgs.temp||(m.state.calledEvents=[].concat(F(m.state.calledEvents),[B]))),m.state.eventQueue=G,m.state.lastFrameTime=O}}}),I)if(typeof I=="string"){var nt=document.querySelector(I);if(!nt)throw new Error("Could not find container element");this.state.elements.container=nt}else this.state.elements.container=I;Q&&(this.options=$($({},this.options),Q)),this.state.initialOptions=$({},this.options),this.init()}var C,D;return C=N,(D=[{key:"init",value:function(){var I,Q;this.setupWrapperElement(),this.addEventToQueue(A,{cursor:this.options.cursor},!0),this.addEventToQueue(x,null,!0),!window||window.___TYPEWRITER_JS_STYLES_ADDED___||this.options.skipAddStyles||(I=".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}",(Q=document.createElement("style")).appendChild(document.createTextNode(I)),document.head.appendChild(Q),window.___TYPEWRITER_JS_STYLES_ADDED___=!0),this.options.autoStart===!0&&this.options.strings&&this.typeOutAllStrings().start()}},{key:"logInDevMode",value:function(I){this.options.devMode&&console.log(I)}}])&&U(C.prototype,D),Object.defineProperty(C,"prototype",{writable:!1}),N}()},9935:n=>{n.exports=function(){return!1}}},u={};function f(n){var a=u[n];if(a!==void 0)return a.exports;var t=u[n]={id:n,loaded:!1,exports:{}};return c[n].call(t.exports,t,t.exports,f),t.loaded=!0,t.exports}f.n=n=>{var a=n&&n.__esModule?()=>n.default:()=>n;return f.d(a,{a}),a},f.d=(n,a)=>{for(var t in a)f.o(a,t)&&!f.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:a[t]})},f.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),f.o=(n,a)=>Object.prototype.hasOwnProperty.call(n,a),f.nmd=n=>(n.paths=[],n.children||(n.children=[]),n);var v={};return(()=>{f.d(v,{default:()=>M});var n=f(9155),a=f.n(n),t=f(9905),o=f(2404),p=f.n(o);function d(k){return d=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(S){return typeof S}:function(S){return S&&typeof Symbol=="function"&&S.constructor===Symbol&&S!==Symbol.prototype?"symbol":typeof S},d(k)}function l(k,S){for(var A=0;A<S.length;A++){var T=S[A];T.enumerable=T.enumerable||!1,T.configurable=!0,"value"in T&&(T.writable=!0),Object.defineProperty(k,w(T.key),T)}}function h(k,S){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(A,T){return A.__proto__=T,A},h(k,S)}function g(k){if(k===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return k}function x(){try{var k=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(x=function(){return!!k})()}function b(k){return b=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(S){return S.__proto__||Object.getPrototypeOf(S)},b(k)}function w(k){var S=function(A){if(d(A)!="object"||!A)return A;var T=A[Symbol.toPrimitive];if(T!==void 0){var L=T.call(A,"string");if(d(L)!="object")return L;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(A)}(k);return d(S)=="symbol"?S:S+""}var j=function(k){(function(P,E){if(typeof E!="function"&&E!==null)throw new TypeError("Super expression must either be null or a function");P.prototype=Object.create(E&&E.prototype,{constructor:{value:P,writable:!0,configurable:!0}}),Object.defineProperty(P,"prototype",{writable:!1}),E&&h(P,E)})(L,k);var S,A,T=function(P){var E=x();return function(){var $,F=b(P);if(E){var V=b(this).constructor;$=Reflect.construct(F,arguments,V)}else $=F.apply(this,arguments);return function(U,R){if(R&&(d(R)=="object"||typeof R=="function"))return R;if(R!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return g(U)}(this,$)}}(L);function L(){var P,E,$,F;(function(ie,ne){if(!(ie instanceof ne))throw new TypeError("Cannot call a class as a function")})(this,L);for(var V=arguments.length,U=new Array(V),R=0;R<V;R++)U[R]=arguments[R];return E=g(P=T.call.apply(T,[this].concat(U))),F={instance:null},($=w($="state"))in E?Object.defineProperty(E,$,{value:F,enumerable:!0,configurable:!0,writable:!0}):E[$]=F,P}return S=L,(A=[{key:"componentDidMount",value:function(){var P=this,E=new t.default(this.typewriter,this.props.options);this.setState({instance:E},function(){var $=P.props.onInit;$&&$(E)})}},{key:"componentDidUpdate",value:function(P){p()(this.props.options,P.options)||this.setState({instance:new t.default(this.typewriter,this.props.options)})}},{key:"componentWillUnmount",value:function(){this.state.instance&&this.state.instance.stop()}},{key:"render",value:function(){var P=this,E=this.props.component;return a().createElement(E,{ref:function($){return P.typewriter=$},className:"Typewriter","data-testid":"typewriter-wrapper"})}}])&&l(S.prototype,A),Object.defineProperty(S,"prototype",{writable:!1}),L}(n.Component);j.defaultProps={component:"div"};const M=j})(),v.default})())})(Dt);var jr=Dt.exports;const _r=Pn(jr),Sr="/assets/HeroImage-554d88c1.jpg",kr=y.div`
    width:600px;
    height: 500px;
`,Cr=()=>s.jsx(kr,{children:s.jsxs("svg",{className:"BgAnimation__svg",viewBox:"0 0 602 602",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[s.jsxs("g",{opacity:"0.15",children:[s.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M201.337 87.437C193.474 79.5738 180.725 79.5738 172.862 87.437L87.437 172.862C79.5739 180.725 79.5739 193.474 87.437 201.337L400.663 514.563C408.526 522.426 421.275 522.426 429.138 514.563L514.563 429.138C522.426 421.275 522.426 408.526 514.563 400.663L201.337 87.437ZM30.4869 115.912C-8.82897 155.228 -8.82897 218.972 30.4869 258.287L343.713 571.513C383.028 610.829 446.772 610.829 486.088 571.513L571.513 486.088C610.829 446.772 610.829 383.028 571.513 343.713L258.287 30.4869C218.972 -8.82896 155.228 -8.82896 115.912 30.4869L30.4869 115.912Z",stroke:"url(#paint0_radial)",id:"path_0"}),s.jsx("path",{d:"M514.563 201.337C522.426 193.474 522.426 180.725 514.563 172.862L429.138 87.437C421.275 79.5738 408.526 79.5739 400.663 87.437L358.098 130.002L301.148 73.0516L343.713 30.4869C383.028 -8.82896 446.772 -8.82896 486.088 30.4869L571.513 115.912C610.829 155.228 610.829 218.972 571.513 258.287L357.802 471.999L300.852 415.049L514.563 201.337Z",stroke:"url(#paint1_radial)",id:"path_1"}),s.jsx("path",{d:"M243.901 471.999L201.337 514.563C193.474 522.426 180.725 522.426 172.862 514.563L87.437 429.138C79.5739 421.275 79.5739 408.526 87.437 400.663L301.148 186.952L244.198 130.002L30.4869 343.713C-8.82897 383.028 -8.82897 446.772 30.4869 486.088L115.912 571.513C155.228 610.829 218.972 610.829 258.287 571.513L300.852 528.949L243.901 471.999Z",stroke:"url(#paint2_radial)",id:"path_2"})]}),s.jsx("ellipse",{cx:"295.027",cy:"193.118",transform:"translate(-295.027 -193.118)",rx:"1.0",ry:"1.0",fill:"#945DD6",children:s.jsx("animateMotion",{dur:"20s",repeatCount:"indefinite",rotate:"auto",children:s.jsx("mpath",{xlinkHref:"#path_2"})})}),s.jsx("ellipse",{cx:"476.525",cy:"363.313",rx:"1.0",ry:"1.0",transform:"translate(-476.525 -363.313) rotate(90 476.525 363.313)",fill:"#F46737",children:s.jsx("animateMotion",{dur:"25s",repeatCount:"indefinite",rotate:"auto",children:s.jsx("mpath",{xlinkHref:"#path_0"})})}),s.jsx("ellipse",{cx:"333.324",cy:"382.691",rx:"1.0",ry:"1.0",transform:"translate(-333.324 -382.691) rotate(-180 333.324 382.691)",fill:"#13ADC7",children:s.jsx("animateMotion",{dur:"18s",repeatCount:"indefinite",rotate:"auto",children:s.jsx("mpath",{xlinkHref:"#path_1"})})}),s.jsxs("defs",{children:[s.jsxs("radialGradient",{id:"paint0_radial",cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(301 301) rotate(90) scale(300)",children:[s.jsx("stop",{offset:"0.333333",stopColor:"#FBFBFB"}),s.jsx("stop",{offset:"1",stopColor:"white",stopOpacity:"0"})]}),s.jsxs("radialGradient",{id:"paint1_radial",cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(301 301) rotate(90) scale(300)",children:[s.jsx("stop",{offset:"0.333333",stopColor:"#FBFBFB"}),s.jsx("stop",{offset:"1",stopColor:"white",stopOpacity:"0"})]}),s.jsxs("radialGradient",{id:"paint2_radial",cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(301 301) rotate(90) scale(300)",children:[s.jsx("stop",{offset:"0.333333",stopColor:"#FBFBFB"}),s.jsx("stop",{offset:"1",stopColor:"white",stopOpacity:"0"})]})]})]})});var Er=Object.defineProperty,Or=Object.defineProperties,Pr=Object.getOwnPropertyDescriptors,gt=Object.getOwnPropertySymbols,Tr=Object.prototype.hasOwnProperty,Ar=Object.prototype.propertyIsEnumerable,xt=(e,r,i)=>r in e?Er(e,r,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[r]=i,ue=(e,r)=>{for(var i in r||(r={}))Tr.call(r,i)&&xt(e,i,r[i]);if(gt)for(var i of gt(r))Ar.call(r,i)&&xt(e,i,r[i]);return e},pe=(e,r)=>Or(e,Pr(r)),zt=class extends _.Component{constructor(e){super(e),this.ref=He.createRef(),this.state={style:{}};const r={reverse:!1,max:35,perspective:1e3,easing:"cubic-bezier(.03,.98,.52,.99)",scale:"1.1",speed:"1000",transition:!0,axis:null,reset:!0};this.width=null,this.height=null,this.left=null,this.top=null,this.transitionTimeout=null,this.updateCall=null,this.element=null,this.settings=Object.assign({},r,this.props.options),this.reverse=this.settings.reverse?-1:1,this.onMouseEnter=this.onMouseEnter.bind(this,this.props.onMouseEnter),this.onMouseMove=this.onMouseMove.bind(this,this.props.onMouseMove),this.onMouseLeave=this.onMouseLeave.bind(this,this.props.onMouseLeave)}componentDidMount(){this.element=this.ref.current,setTimeout(()=>{this.element.parentElement.querySelector(":hover")===this.element&&this.onMouseEnter()},0)}componentWillUnmount(){clearTimeout(this.transitionTimeout),cancelAnimationFrame(this.updateCall)}onMouseEnter(e=()=>{},r){return this.updateElementPosition(),this.setState(Object.assign({},this.state,{style:pe(ue({},this.state.style),{willChange:"transform"})})),this.setTransition(),e(r)}reset(){window.requestAnimationFrame(()=>{this.setState(Object.assign({},this.state,{style:pe(ue({},this.state.style),{transform:`perspective(${this.settings.perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`})}))})}onMouseMove(e=()=>{},r){return r.persist(),this.updateCall!==null&&window.cancelAnimationFrame(this.updateCall),this.event=r,this.updateCall=requestAnimationFrame(this.update.bind(this,r)),e(r)}setTransition(){clearTimeout(this.transitionTimeout),this.setState(Object.assign({},this.state,{style:pe(ue({},this.state.style),{transition:`${this.settings.speed}ms ${this.settings.easing}`})})),this.transitionTimeout=setTimeout(()=>{this.setState(Object.assign({},this.state,{style:pe(ue({},this.state.style),{transition:""})}))},this.settings.speed)}onMouseLeave(e=()=>{},r){return this.setTransition(),this.settings.reset&&this.reset(),e(r)}getValues(e){const r=(e.nativeEvent.clientX-this.left)/this.width,i=(e.nativeEvent.clientY-this.top)/this.height,c=Math.min(Math.max(r,0),1),u=Math.min(Math.max(i,0),1),f=(this.reverse*(this.settings.max/2-c*this.settings.max)).toFixed(2),v=(this.reverse*(u*this.settings.max-this.settings.max/2)).toFixed(2),n=c*100,a=u*100;return{tiltX:f,tiltY:v,percentageX:n,percentageY:a}}updateElementPosition(){const e=this.element.getBoundingClientRect();this.width=this.element.offsetWidth,this.height=this.element.offsetHeight,this.left=e.left,this.top=e.top}update(e){const r=this.getValues(e);this.setState(Object.assign({},this.state,{style:pe(ue({},this.state.style),{transform:`perspective(${this.settings.perspective}px) rotateX(${this.settings.axis==="x"?0:r.tiltY}deg) rotateY(${this.settings.axis==="y"?0:r.tiltX}deg) scale3d(${this.settings.scale}, ${this.settings.scale}, ${this.settings.scale})`})})),this.updateCall=null}render(){const e=Object.assign({},this.props.style,this.state.style);return s.jsx("div",{style:e,ref:this.ref,className:this.props.className,onMouseEnter:this.onMouseEnter,onMouseMove:this.onMouseMove,onMouseLeave:this.onMouseLeave,children:this.props.children})}};const $e={type:"spring",duration:.6,stiffness:100,damping:20},Mr={initial:{x:100,opacity:0},animate:{x:0,opacity:1},transition:{type:"spring",damping:15,stiffness:100,restDelta:.001,duration:.4}},vt={initial:{y:100,opacity:0},animate:{y:0,opacity:1},transition:{type:"spring",damping:20,stiffness:100,restDelta:.001,duration:.5,delay:.1,delayChildren:.1}},Ir={initial:{x:-100,opacity:0,transition:{...$e,delay:.5}},animate:{x:0,opacity:1,transition:{...$e,delay:0}},exit:{x:-100,opacity:0,transition:{...$e,delay:0}}},Lr=y.div`
  width: 100%;
  height: auto;
  position: absolute;
  inset: 0;
`,Rr=e=>{const r=_.useRef(),[i]=_.useState(()=>{try{return bn(new Float32Array(800),{radius:1.2})}catch(u){return console.warn("Error generating star positions:",u),new Float32Array(800)}}),c=_.useCallback((u,f)=>{try{r.current&&r.current.rotation&&(r.current.rotation.x-=f/12,r.current.rotation.y-=f/16)}catch(v){console.warn("Error in Stars animation frame:",v)}},[]);return wn(c),s.jsx("group",{rotation:[0,0,Math.PI/4],children:s.jsx(jn,{ref:r,positions:i,stride:3,frustumCulled:!0,...e,children:s.jsx(_n,{transparent:!0,color:"#f272c8",size:.002,sizeAttenuation:!0,depthWrite:!1})})})},Ft=()=>s.jsx(Lr,{children:s.jsxs(_t,{camera:{position:[0,0,1]},dpr:[1,1.5],gl:{antialias:!1,alpha:!0,powerPreference:"high-performance",preserveDrawingBuffer:!1},frameloop:"demand",onCreated:({gl:e})=>{e.setClearColor(0,0)},children:[s.jsx(_.Suspense,{fallback:null,children:s.jsx(Rr,{})}),s.jsx(St,{all:!0})]})}),Nr=y.div`
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 30px;
  z-index: 1;

  @media (max-width: 960px) {
    padding: 66px 16px;
  }

  @media (max-width: 640px) {
    padding: 32px 16px;
  }

  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`,$r=y.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`,Dr=y.div`
  width: 100%;
  order: 1;
  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    gap: 6px;
    flex-direction: column;
    align-items: center;
  }
`,zr=y.div`
  width: 100%;
  order: 2;
  display: flex;
  justify-content: end;
  @media (max-width: 960px) {
    order: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-contents: center;
    margin-bottom: 80px;
  }

  @media (max-width: 640px) {
    margin-bottom: 30px;
  }
`,Fr=y.div`
  font-weight: 700;
  font-size: 50px;
  color: ${({theme:e})=>e.text_primary};
  line-height: 68px;

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 960px) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`,Vr=y.div`
  font-weight: 600;
  font-size: 32px;
  display: flex;
  gap: 12px;
  color: ${({theme:e})=>e.text_primary};
  line-height: 68px;

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 960px) {
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }
`,Br=y.div`
  cursor: pointer;
  color: ${({theme:e})=>e.primary};
`,Wr=y.div`
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 42px;
  color: ${({theme:e})=>e.text_primary+95};

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 960px) {
    font-size: 16px;
    line-height: 32px;
  }
`,Ur=y.a`
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;
  text-decoration: none;

  width: 95%;
  max-width: 300px;
  text-align: center;
  padding: 16px 0;

  background: hsla(271, 100%, 50%, 1);
  background: linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  background: -moz-linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  background: -webkit-linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  box-shadow: 20px 20px 60px #1f2634, -20px -20px 60px #1f2634;
  border-radius: 50px;
  font-weight: 600;
  font-size: 20px;

     &:hover {
        transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    box-shadow:  20px 20px 60px #1F2634,
    filter: brightness(1);
    }    
    
    
    @media (max-width: 640px) {
        padding: 12px 0;
        font-size: 18px;
    } 
    color: white;
`,Hr=y.img`
  border-radius: 50%;
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 400px;
  object-fit: cover;
  object-position: center;
  border: 2px solid ${({theme:e})=>e.primary};

  @media (max-width: 640px) {
    max-width: 280px;
    max-height: 280px;
  }
`,qr=y.div`
  position: absolute;
  display: flex;
  justify-content: end;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-width: 1360px;
  overflow: hidden;
  padding: 0 30px;
  top: 50%;
  left: 50%;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);

  @media (max-width: 960px) {
    justify-content: center;
    padding: 0 0px;
  }
`,Vt=_.memo(()=>s.jsx("div",{id:"About",children:s.jsxs(Nr,{children:[s.jsxs(qr,{children:[s.jsx(Ft,{}),s.jsx(Cr,{})]}),s.jsx(xe.div,{...Ir,children:s.jsxs($r,{children:[s.jsxs(Dr,{children:[s.jsxs(xe.div,{...Mr,children:[s.jsxs(Fr,{children:["Hi, I am ",s.jsx("br",{})," ",X.name]}),s.jsxs(Vr,{children:["I am a",s.jsx(Br,{children:s.jsx(_r,{options:{strings:X.roles,autoStart:!0,loop:!0}})})]})]}),s.jsx(xe.div,{...vt,children:s.jsx(Wr,{children:X.description})}),s.jsx(Ur,{href:X.resume,target:"_blank",children:"Check Resume"})]}),s.jsx(zr,{children:s.jsx(xe.div,{...vt,children:s.jsx(zt,{children:s.jsx(Hr,{src:Sr,alt:"Fathi BELMKADEM"})})})})]})})]})}));Vt.displayName="Hero";const Gr=y.div`
display: flex;
flex-direction: column;
justify-content-center;
position: relative;
z-index: 1;
align-items: center;
`,Kr=y.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`,Yr=y.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({theme:e})=>e.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`,Jr=y.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({theme:e})=>e.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`,Qr=y.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  gap: 50px;
  justify-content: center;
`,Zr=y.div`
  width: 100%;
  max-width: 500px;
  background-color: rgba(17, 25, 40, 0.83);
  border: 1px solid rgba(255, 255, 255, 0.125);
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 18px 36px;

  @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }

  @media (max-width: 500px) {
    max-width: 330px;
    padding: 10px 36px;
  }
`,Xr=y.div`
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 20px;
  text-align: center;
  color: ${({theme:e})=>e.text_secondary};
`,ei=y.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`,ti=y.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({theme:e})=>e.text_primary+80};
  border: 1px solid ${({theme:e})=>e.text_primary+80};
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`,ni=y.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
  background-color: ${({theme:e})=>e.white};
  padding: 2px;
  border-radius: 4px;
  box-sizing: border-box;
`,ri=()=>s.jsx(Gr,{id:"Skills",children:s.jsxs(Kr,{children:[s.jsx(Yr,{children:"Skills"}),s.jsx(Jr,{style:{marginBottom:"40px"},children:"Here are some of my skills on which I have been working on for the past 3 years."}),s.jsx(Qr,{children:pr.map((e,r)=>s.jsx(zt,{children:s.jsxs(Zr,{children:[s.jsx(Xr,{children:e.title}),s.jsx(ei,{children:e.skills.map((i,c)=>s.jsxs(ti,{children:[s.jsx(ni,{src:i.image}),i.name]},`skill-x-${c}`))})]},`skill-${r}`)}))})]})});var Oe={},Bt={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var r={}.hasOwnProperty;function i(){for(var f="",v=0;v<arguments.length;v++){var n=arguments[v];n&&(f=u(f,c(n)))}return f}function c(f){if(typeof f=="string"||typeof f=="number")return f;if(typeof f!="object")return"";if(Array.isArray(f))return i.apply(null,f);if(f.toString!==Object.prototype.toString&&!f.toString.toString().includes("[native code]"))return f.toString();var v="";for(var n in f)r.call(f,n)&&f[n]&&(v=u(v,n));return v}function u(f,v){return v?f?f+" "+v:f+v:f}e.exports?(i.default=i,e.exports=i):window.classNames=i})()})(Bt);var Wt=Bt.exports;Oe.__esModule=!0;Oe.default=void 0;var ii=Ke(_),ee=Ke(kt),oi=Ke(Wt);function Ke(e){return e&&e.__esModule?e:{default:e}}const Ut=({animate:e=!0,className:r="",layout:i="2-columns",lineColor:c="#FFF",children:u})=>(typeof window=="object"&&document.documentElement.style.setProperty("--line-color",c),ii.default.createElement("div",{className:(0,oi.default)(r,"vertical-timeline",{"vertical-timeline--animate":e,"vertical-timeline--two-columns":i==="2-columns","vertical-timeline--one-column-left":i==="1-column"||i==="1-column-left","vertical-timeline--one-column-right":i==="1-column-right"})},u));Ut.propTypes={children:ee.default.oneOfType([ee.default.arrayOf(ee.default.node),ee.default.node]).isRequired,className:ee.default.string,animate:ee.default.bool,layout:ee.default.oneOf(["1-column-left","1-column","2-columns","1-column-right"]),lineColor:ee.default.string};var ai=Ut;Oe.default=ai;var Pe={};function Be(){return Be=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var i=arguments[r];for(var c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c])}return e},Be.apply(this,arguments)}function si(e,r){e.prototype=Object.create(r.prototype),e.prototype.constructor=e,We(e,r)}function We(e,r){return We=Object.setPrototypeOf||function(c,u){return c.__proto__=u,c},We(e,r)}function li(e,r){if(e==null)return{};var i={},c=Object.keys(e),u,f;for(f=0;f<c.length;f++)u=c[f],!(r.indexOf(u)>=0)&&(i[u]=e[u]);return i}var Ue=new Map,ve=new WeakMap,yt=0,Ht=void 0;function ci(e){Ht=e}function ui(e){return e?(ve.has(e)||(yt+=1,ve.set(e,yt.toString())),ve.get(e)):"0"}function pi(e){return Object.keys(e).sort().filter(function(r){return e[r]!==void 0}).map(function(r){return r+"_"+(r==="root"?ui(e.root):e[r])}).toString()}function di(e){var r=pi(e),i=Ue.get(r);if(!i){var c=new Map,u,f=new IntersectionObserver(function(v){v.forEach(function(n){var a,t=n.isIntersecting&&u.some(function(o){return n.intersectionRatio>=o});e.trackVisibility&&typeof n.isVisible>"u"&&(n.isVisible=t),(a=c.get(n.target))==null||a.forEach(function(o){o(t,n)})})},e);u=f.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),i={id:r,observer:f,elements:c},Ue.set(r,i)}return i}function Ye(e,r,i,c){if(i===void 0&&(i={}),c===void 0&&(c=Ht),typeof window.IntersectionObserver>"u"&&c!==void 0){var u=e.getBoundingClientRect();return r(c,{isIntersecting:c,target:e,intersectionRatio:typeof i.threshold=="number"?i.threshold:0,time:0,boundingClientRect:u,intersectionRect:u,rootBounds:u}),function(){}}var f=di(i),v=f.id,n=f.observer,a=f.elements,t=a.get(e)||[];return a.has(e)||a.set(e,t),t.push(r),n.observe(e),function(){t.splice(t.indexOf(r),1),t.length===0&&(a.delete(e),n.unobserve(e)),a.size===0&&(n.disconnect(),Ue.delete(v))}}var fi=["children","as","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView","fallbackInView"];function bt(e){return typeof e.children!="function"}var _e=function(e){si(r,e);function r(c){var u;return u=e.call(this,c)||this,u.node=null,u._unobserveCb=null,u.handleNode=function(f){u.node&&(u.unobserve(),!f&&!u.props.triggerOnce&&!u.props.skip&&u.setState({inView:!!u.props.initialInView,entry:void 0})),u.node=f||null,u.observeNode()},u.handleChange=function(f,v){f&&u.props.triggerOnce&&u.unobserve(),bt(u.props)||u.setState({inView:f,entry:v}),u.props.onChange&&u.props.onChange(f,v)},u.state={inView:!!c.initialInView,entry:void 0},u}var i=r.prototype;return i.componentDidUpdate=function(u){(u.rootMargin!==this.props.rootMargin||u.root!==this.props.root||u.threshold!==this.props.threshold||u.skip!==this.props.skip||u.trackVisibility!==this.props.trackVisibility||u.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())},i.componentWillUnmount=function(){this.unobserve(),this.node=null},i.observeNode=function(){if(!(!this.node||this.props.skip)){var u=this.props,f=u.threshold,v=u.root,n=u.rootMargin,a=u.trackVisibility,t=u.delay,o=u.fallbackInView;this._unobserveCb=Ye(this.node,this.handleChange,{threshold:f,root:v,rootMargin:n,trackVisibility:a,delay:t},o)}},i.unobserve=function(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)},i.render=function(){if(!bt(this.props)){var u=this.state,f=u.inView,v=u.entry;return this.props.children({inView:f,entry:v,ref:this.handleNode})}var n=this.props,a=n.children,t=n.as,o=li(n,fi);return _.createElement(t||"div",Be({ref:this.handleNode},o),a)},r}(_.Component);_e.displayName="InView";_e.defaultProps={threshold:0,triggerOnce:!1,initialInView:!1};function hi(e){var r=e===void 0?{}:e,i=r.threshold,c=r.delay,u=r.trackVisibility,f=r.rootMargin,v=r.root,n=r.triggerOnce,a=r.skip,t=r.initialInView,o=r.fallbackInView,p=_.useRef(),d=_.useState({inView:!!t}),l=d[0],h=d[1],g=_.useCallback(function(b){p.current!==void 0&&(p.current(),p.current=void 0),!a&&b&&(p.current=Ye(b,function(w,j){h({inView:w,entry:j}),j.isIntersecting&&n&&p.current&&(p.current(),p.current=void 0)},{root:v,rootMargin:f,threshold:i,trackVisibility:u,delay:c},o))},[Array.isArray(i)?i.toString():i,v,f,n,a,u,o,c]);_.useEffect(function(){!p.current&&l.entry&&!n&&!a&&h({inView:!!t})});var x=[g,l.inView,l.entry];return x.ref=x[0],x.inView=x[1],x.entry=x[2],x}const mi=Object.freeze(Object.defineProperty({__proto__:null,InView:_e,default:_e,defaultFallbackInView:ci,observe:Ye,useInView:hi},Symbol.toStringTag,{value:"Module"})),gi=Et(mi);Pe.__esModule=!0;Pe.default=void 0;var te=Je(_),W=Je(kt),ye=Je(Wt),xi=gi;function Je(e){return e&&e.__esModule?e:{default:e}}const qt=({children:e="",className:r="",contentArrowStyle:i=null,contentStyle:c=null,date:u="",dateClassName:f="",icon:v=null,iconClassName:n="",iconOnClick:a=null,onTimelineElementClick:t=null,iconStyle:o=null,id:p="",position:d="",style:l=null,textClassName:h="",intersectionObserverProps:g={rootMargin:"0px 0px -40px 0px",triggerOnce:!0},visible:x=!1})=>te.default.createElement(xi.InView,g,({inView:b,ref:w})=>te.default.createElement("div",{ref:w,id:p,className:(0,ye.default)(r,"vertical-timeline-element",{"vertical-timeline-element--left":d==="left","vertical-timeline-element--right":d==="right","vertical-timeline-element--no-children":e===""}),style:l},te.default.createElement(te.default.Fragment,null,te.default.createElement("span",{style:o,onClick:a,className:(0,ye.default)(n,"vertical-timeline-element-icon",{"bounce-in":b||x,"is-hidden":!(b||x)})},v),te.default.createElement("div",{style:c,onClick:t,className:(0,ye.default)(h,"vertical-timeline-element-content",{"bounce-in":b||x,"is-hidden":!(b||x)})},te.default.createElement("div",{style:i,className:"vertical-timeline-element-content-arrow"}),e,te.default.createElement("span",{className:(0,ye.default)(f,"vertical-timeline-element-date")},u)))));qt.propTypes={children:W.default.oneOfType([W.default.arrayOf(W.default.node),W.default.node]),className:W.default.string,contentArrowStyle:W.default.shape({}),contentStyle:W.default.shape({}),date:W.default.node,dateClassName:W.default.string,icon:W.default.element,iconClassName:W.default.string,iconStyle:W.default.shape({}),iconOnClick:W.default.func,onTimelineElementClick:W.default.func,id:W.default.string,position:W.default.string,style:W.default.shape({}),textClassName:W.default.string,visible:W.default.bool,intersectionObserverProps:W.default.shape({root:W.default.object,rootMargin:W.default.string,threshold:W.default.number,triggerOnce:W.default.bool})};var vi=qt;Pe.default=vi;var Te={VerticalTimeline:Oe.default,VerticalTimelineElement:Pe.default};const yi=y.div`
  width: 100%;
  display: flex;
  max-width: 100%;
  gap: 12px;
`,bi=y.img`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  margin-top: 4px;
  object-fit: contain;
  background-color: ${({theme:e})=>e.white};
  padding: 4px;
  box-sizing: border-box;

  @media only screen and (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`,wi=y.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`,ji=y.div`
  font-size: 18px;
  font-weight: 600px;
  color: ${({theme:e})=>e.text_primary+99};

  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`,_i=y.div`
  font-size: 14px;
  font-weight: 500px;
  color: ${({theme:e})=>e.text_secondary+99};

  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`,Si=y.div`
  font-size: 12px;
  font-weight: 400px;
  color: ${({theme:e})=>e.text_secondary+80};

  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;y.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({theme:e})=>e.text_secondary+99};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;const ki=y.div`
  width: 100%;
  font-size: 15px;
  font-weight: 400;
  color: ${({theme:e})=>e.text_primary+99};
  margin-bottom: 10px;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`,Ci=y.div``,Ei=({education:e})=>s.jsxs(Te.VerticalTimelineElement,{icon:s.jsx("img",{width:"100%",height:"100%",alt:e.school,style:{borderRadius:"50%",objectFit:"cover"},src:e.img}),contentStyle:{display:"flex",flexDirection:"column",gap:"12px",background:"#1d1836",color:"#fff",boxShadow:"rgba(23, 92, 230, 0.15) 0px 4px 24px",backgroundColor:"rgba(17, 25, 40, 0.83)",border:"1px solid rgba(255, 255, 255, 0.125)",borderRadius:"6px"},contentArrowStyle:{borderRight:"7px solid  rgba(255, 255, 255, 0.3)"},date:e.date,children:[s.jsxs(yi,{children:[s.jsx(bi,{src:e.img}),s.jsxs(wi,{children:[s.jsx(ji,{children:e.school}),s.jsx(_i,{children:e.degree}),s.jsx(Si,{children:e.date})]})]}),s.jsx(ki,{children:s.jsx(Ci,{children:e.description})})]});const Oi=y.div`
margin-top: 100px;
display: flex;
flex-direction: column;
justify-content-center;
position: relative;
z-index: 1;
align-items: center;
`,Pi=y.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`,Ti=y.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({theme:e})=>e.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`,Ai=y.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({theme:e})=>e.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`,Mi=()=>s.jsx(Oi,{id:"Education",children:s.jsxs(Pi,{children:[s.jsx(Ti,{children:"Education"}),s.jsx(Ai,{style:{marginBottom:"40px"},children:"My education has been a journey of self-discovery and growth. My educational details are as follows."}),s.jsx(Te.VerticalTimeline,{children:fr.map((e,r)=>s.jsx(Ei,{education:e},`education-${r}`))})]})}),Ii=y.div`
  width: 100%;
  display: flex;
  max-width: 100%;
  gap: 12px;
`,Li=y.img`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  margin-top: 4px;
  object-fit: contain;
  background-color: ${({theme:e})=>e.white};
  padding: 4px;
  box-sizing: border-box;

  @media only screen and (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`,Ri=y.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`,Ni=y.div`
  font-size: 18px;
  font-weight: 600px;
  color: ${({theme:e})=>e.text_primary+99};

  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`,$i=y.div`
  font-size: 14px;
  font-weight: 500px;
  color: ${({theme:e})=>e.text_secondary+99};

  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`,Di=y.div`
  font-size: 12px;
  font-weight: 400px;
  color: ${({theme:e})=>e.text_secondary+80};

  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;y.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({theme:e})=>e.text_secondary+99};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;const zi=y.div`
  width: 100%;
  font-size: 15px;
  font-weight: 400;
  color: ${({theme:e})=>e.text_primary+99};
  margin-bottom: 10px;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`,Fi=y.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 100%;
`,Vi=y.div`
  width: 100%;
  display: flex;
  gap: 12px;
  margin-top: -10px;
`,Bi=y.div`
  font-size: 15px;
  font-weight: 400;
  color: ${({theme:e})=>e.text_primary+99};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`,Wi=y.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,Ui=({experience:e})=>{var r;return s.jsxs(Te.VerticalTimelineElement,{icon:s.jsx("img",{width:"100%",height:"100%",alt:e.company,style:{borderRadius:"50%",objectFit:"cover"},src:e.img}),contentStyle:{display:"flex",flexDirection:"column",gap:"12px",background:"#1d1836",color:"#fff",boxShadow:"rgba(23, 92, 230, 0.15) 0px 4px 24px",backgroundColor:"rgba(17, 25, 40, 0.83)",border:"1px solid rgba(255, 255, 255, 0.125)",borderRadius:"6px"},contentArrowStyle:{borderRight:"7px solid  rgba(255, 255, 255, 0.3)"},date:e.date,children:[s.jsxs(Ii,{children:[s.jsx(Li,{src:e.img}),s.jsxs(Ri,{children:[s.jsx(Ni,{children:e.title}),s.jsx($i,{children:e.company}),s.jsx(Di,{children:e.date})]})]}),s.jsxs(zi,{children:[(e==null?void 0:e.description)&&s.jsx(Fi,{children:e.description.map((i,c)=>s.jsxs("div",{children:["• ",i]},c))}),(e==null?void 0:e.skills)&&s.jsxs(s.Fragment,{children:[s.jsx("br",{}),s.jsxs(Vi,{children:[s.jsx("b",{children:"Skills:"}),s.jsx(Wi,{children:(r=e==null?void 0:e.skills)==null?void 0:r.map((i,c)=>s.jsxs(Bi,{children:["• ",i]},c))})]})]})]})]})},Hi=y.div`
margin-top: 100px;
display: flex;
flex-direction: column;
justify-content-center;
position: relative;
z-index: 1;
align-items: center;
`,qi=y.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`,Gi=y.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({theme:e})=>e.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`,Ki=y.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({theme:e})=>e.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`,Yi=()=>s.jsx(Hi,{id:"Experience",children:s.jsxs(qi,{children:[s.jsx(Gi,{children:"Experience"}),s.jsx(Ki,{style:{marginBottom:"40px"},children:"My work experience as a software engineer and working on different companies and projects."}),s.jsx(Te.VerticalTimeline,{children:dr.map((e,r)=>s.jsx(Ui,{experience:e},`experience-${r}`))})]})});class he{constructor(r=0,i="Network Error"){this.status=r,this.text=i}}const Ji=()=>{if(!(typeof localStorage>"u"))return{get:e=>Promise.resolve(localStorage.getItem(e)),set:(e,r)=>Promise.resolve(localStorage.setItem(e,r)),remove:e=>Promise.resolve(localStorage.removeItem(e))}},H={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:Ji()},Qe=e=>e?typeof e=="string"?{publicKey:e}:e.toString()==="[object Object]"?e:{}:{},Qi=(e,r="https://api.emailjs.com")=>{if(!e)return;const i=Qe(e);H.publicKey=i.publicKey,H.blockHeadless=i.blockHeadless,H.storageProvider=i.storageProvider,H.blockList=i.blockList,H.limitRate=i.limitRate,H.origin=i.origin||r},Gt=async(e,r,i={})=>{const c=await fetch(H.origin+e,{method:"POST",headers:i,body:r}),u=await c.text(),f=new he(c.status,u);if(c.ok)return f;throw f},Kt=(e,r,i)=>{if(!e||typeof e!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!r||typeof r!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!i||typeof i!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},Zi=e=>{if(e&&e.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},Yt=e=>e.webdriver||!e.languages||e.languages.length===0,Jt=()=>new he(451,"Unavailable For Headless Browser"),Xi=(e,r)=>{if(!Array.isArray(e))throw"The BlockList list has to be an array";if(typeof r!="string")throw"The BlockList watchVariable has to be a string"},eo=e=>{var r;return!((r=e.list)!=null&&r.length)||!e.watchVariable},to=(e,r)=>e instanceof FormData?e.get(r):e[r],Qt=(e,r)=>{if(eo(e))return!1;Xi(e.list,e.watchVariable);const i=to(r,e.watchVariable);return typeof i!="string"?!1:e.list.includes(i)},Zt=()=>new he(403,"Forbidden"),no=(e,r)=>{if(typeof e!="number"||e<0)throw"The LimitRate throttle has to be a positive number";if(r&&typeof r!="string")throw"The LimitRate ID has to be a non-empty string"},ro=async(e,r,i)=>{const c=Number(await i.get(e)||0);return r-Date.now()+c},Xt=async(e,r,i)=>{if(!r.throttle||!i)return!1;no(r.throttle,r.id);const c=r.id||e;return await ro(c,r.throttle,i)>0?!0:(await i.set(c,Date.now().toString()),!1)},en=()=>new he(429,"Too Many Requests"),io=async(e,r,i,c)=>{const u=Qe(c),f=u.publicKey||H.publicKey,v=u.blockHeadless||H.blockHeadless,n=u.storageProvider||H.storageProvider,a={...H.blockList,...u.blockList},t={...H.limitRate,...u.limitRate};return v&&Yt(navigator)?Promise.reject(Jt()):(Kt(f,e,r),Zi(i),i&&Qt(a,i)?Promise.reject(Zt()):await Xt(location.pathname,t,n)?Promise.reject(en()):Gt("/api/v1.0/email/send",JSON.stringify({lib_version:"4.4.1",user_id:f,service_id:e,template_id:r,template_params:i}),{"Content-type":"application/json"}))},oo=e=>{if(!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},ao=e=>typeof e=="string"?document.querySelector(e):e,so=async(e,r,i,c)=>{const u=Qe(c),f=u.publicKey||H.publicKey,v=u.blockHeadless||H.blockHeadless,n=H.storageProvider||u.storageProvider,a={...H.blockList,...u.blockList},t={...H.limitRate,...u.limitRate};if(v&&Yt(navigator))return Promise.reject(Jt());const o=ao(i);Kt(f,e,r),oo(o);const p=new FormData(o);return Qt(a,p)?Promise.reject(Zt()):await Xt(location.pathname,t,n)?Promise.reject(en()):(p.append("lib_version","4.4.1"),p.append("service_id",e),p.append("template_id",r),p.append("user_id",f),Gt("/api/v1.0/email/send-form",p))},lo={init:Qi,send:io,sendForm:so,EmailJSResponseStatus:he},co=()=>{try{const e=kn("./planet/scene.gltf");return s.jsx("primitive",{object:e.scene,scale:3,"position-y":0,"rotation-y":0})}catch(e){return console.warn("Error loading Earth model:",e),null}},uo=()=>s.jsx(_t,{shadows:!0,frameloop:"demand",dpr:[1,1.5],gl:{preserveDrawingBuffer:!0,antialias:!1,powerPreference:"high-performance"},camera:{fov:45,near:.1,far:200,position:[-4,3,6]},children:s.jsxs(_.Suspense,{fallback:null,children:[s.jsx(Sn,{autoRotate:!0,autoRotateSpeed:.5,enableZoom:!1,maxPolarAngle:Math.PI/2,minPolarAngle:Math.PI/2,enableDamping:!0,dampingFactor:.02}),s.jsx(co,{}),s.jsx(St,{all:!0})]})}),po=y.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  z-index: 1;
  align-items: center;
  @media (max-width: 960px) {
    padding: 0px;
  }
`,fo=y.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 0px 0px 80px 0px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`,ho=y.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({theme:e})=>e.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`,mo=y.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({theme:e})=>e.text_secondary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`,go=y.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: rgba(17, 25, 40, 0.83);
  border: 1px solid rgba(255, 255, 255, 0.125);
  padding: 32px;
  border-radius: 12px;
  box-shadow: rgba(23, 92, 230, 0.1) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`,xo=y.div`
  font-size: 28px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({theme:e})=>e.text_primary};
`,De=y.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({theme:e})=>e.text_secondary+50};
  outline: none;
  font-size: 18px;
  color: ${({theme:e})=>e.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({theme:e})=>e.primary};
  }
`,vo=y.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({theme:e})=>e.text_secondary+50};
  outline: none;
  font-size: 18px;
  color: ${({theme:e})=>e.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({theme:e})=>e.primary};
  }
`,yo=y.input`
  width: 100%;
  text-decoration: none;
  text-align: center;
  background: ${({disabled:e})=>e?"rgba(128, 128, 128, 0.5)":"hsla(271, 100%, 50%, 1)"};
  background: ${({disabled:e})=>e?"rgba(128, 128, 128, 0.5)":"linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%)"};
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: ${({theme:e})=>e.text_primary};
  font-size: 18px;
  font-weight: 600;
  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
  transition: all 0.3s ease;

  &:hover {
    transform: ${({disabled:e})=>e?"none":"translateY(-2px)"};
  }
`,bo=y.div`
  padding: 12px 16px;
  border-radius: 8px;
  margin-top: 12px;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  background-color: ${({success:e})=>e?"rgba(34, 197, 94, 0.1)":"rgba(239, 68, 68, 0.1)"};
  border: 1px solid ${({success:e})=>e?"rgba(34, 197, 94, 0.3)":"rgba(239, 68, 68, 0.3)"};
  color: ${({success:e,theme:r})=>e?"#22c55e":"#ef4444"};
`,wo=()=>{const e=_.useRef(),[r,i]=_.useState(!1),[c,u]=_.useState(""),f=v=>{v.preventDefault(),i(!0),u("");try{lo.sendForm("service_8aebk5i","template_inxxex4",e.current,"3bRpwtcx-3rYV5sb1").then(n=>{u("Message sent successfully! I'll get back to you soon."),e.current&&e.current.reset(),i(!1)},n=>{u("Failed to send message. Please try again or contact me directly."),i(!1),console.error("EmailJS error:",n)}).catch(n=>{u("An unexpected error occurred. Please try again later."),i(!1),console.error("Unexpected error:",n)})}catch(n){u("An unexpected error occurred. Please try again later."),i(!1),console.error("Form submission error:",n)}};return s.jsx(po,{children:s.jsxs(fo,{children:[s.jsx(uo,{}),s.jsx(ho,{children:"Contact"}),s.jsx(mo,{children:"Feel free to reach out to me for any questions or opportunities!"}),s.jsxs(go,{ref:e,onSubmit:f,children:[s.jsx(xo,{children:"Email Me 🚀"}),s.jsx(De,{placeholder:"Your Email",name:"from_email",type:"email",required:!0,disabled:r}),s.jsx(De,{placeholder:"Your Name",name:"from_name",required:!0,disabled:r}),s.jsx(De,{placeholder:"Subject",name:"subject",required:!0,disabled:r}),s.jsx(vo,{placeholder:"Message",name:"message",rows:4,required:!0,disabled:r}),s.jsx(yo,{type:"submit",value:r?"Sending...":"Send",disabled:r}),c&&s.jsx(bo,{success:c.includes("successfully"),children:c})]})]})})};var Ze={},ze={};const jo=Et(Ln);var wt;function Ae(){return wt||(wt=1,function(e){"use client";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return r.createSvgIcon}});var r=jo}(ze)),ze}var _o=Se;Object.defineProperty(Ze,"__esModule",{value:!0});var tn=Ze.default=void 0;Co(_);var So=_o(Ae()),ko=s;function nn(e){if(typeof WeakMap!="function")return null;var r=new WeakMap,i=new WeakMap;return(nn=function(c){return c?i:r})(e)}function Co(e,r){if(!r&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var i=nn(r);if(i&&i.has(e))return i.get(e);var c={__proto__:null},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var f in e)if(f!=="default"&&Object.prototype.hasOwnProperty.call(e,f)){var v=u?Object.getOwnPropertyDescriptor(e,f):null;v&&(v.get||v.set)?Object.defineProperty(c,f,v):c[f]=e[f]}return c.default=e,i&&i.set(e,c),c}tn=Ze.default=(0,So.default)((0,ko.jsx)("path",{d:"M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z"}),"Facebook");var Xe={},Eo=Se;Object.defineProperty(Xe,"__esModule",{value:!0});var rn=Xe.default=void 0;To(_);var Oo=Eo(Ae()),Po=s;function on(e){if(typeof WeakMap!="function")return null;var r=new WeakMap,i=new WeakMap;return(on=function(c){return c?i:r})(e)}function To(e,r){if(!r&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var i=on(r);if(i&&i.has(e))return i.get(e);var c={__proto__:null},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var f in e)if(f!=="default"&&Object.prototype.hasOwnProperty.call(e,f)){var v=u?Object.getOwnPropertyDescriptor(e,f):null;v&&(v.get||v.set)?Object.defineProperty(c,f,v):c[f]=e[f]}return c.default=e,i&&i.set(e,c),c}rn=Xe.default=(0,Oo.default)((0,Po.jsx)("path",{d:"M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"}),"Twitter");var et={},Ao=Se;Object.defineProperty(et,"__esModule",{value:!0});var an=et.default=void 0;Lo(_);var Mo=Ao(Ae()),Io=s;function sn(e){if(typeof WeakMap!="function")return null;var r=new WeakMap,i=new WeakMap;return(sn=function(c){return c?i:r})(e)}function Lo(e,r){if(!r&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var i=sn(r);if(i&&i.has(e))return i.get(e);var c={__proto__:null},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var f in e)if(f!=="default"&&Object.prototype.hasOwnProperty.call(e,f)){var v=u?Object.getOwnPropertyDescriptor(e,f):null;v&&(v.get||v.set)?Object.defineProperty(c,f,v):c[f]=e[f]}return c.default=e,i&&i.set(e,c),c}an=et.default=(0,Mo.default)((0,Io.jsx)("path",{d:"M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"}),"LinkedIn");var tt={},Ro=Se;Object.defineProperty(tt,"__esModule",{value:!0});var ln=tt.default=void 0;Do(_);var No=Ro(Ae()),$o=s;function cn(e){if(typeof WeakMap!="function")return null;var r=new WeakMap,i=new WeakMap;return(cn=function(c){return c?i:r})(e)}function Do(e,r){if(!r&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var i=cn(r);if(i&&i.has(e))return i.get(e);var c={__proto__:null},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var f in e)if(f!=="default"&&Object.prototype.hasOwnProperty.call(e,f)){var v=u?Object.getOwnPropertyDescriptor(e,f):null;v&&(v.get||v.set)?Object.defineProperty(c,f,v):c[f]=e[f]}return c.default=e,i&&i.set(e,c),c}ln=tt.default=(0,No.default)((0,$o.jsx)("path",{d:"M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"}),"Instagram");const zo=y.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 1;
`,Fo=y.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  padding: 1rem;
  color: ${({theme:e})=>e.text_primary};
`,Vo=y.div`
  font-weight: 600;
  font-size: 20px;
  color: ${({theme:e})=>e.primary};
`,Bo=y.nav`
  width: 100%;
  max-width: 800px;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    text-align: center;
    font-size: 12px;
  }
`,de=y.a`
  color: ${({theme:e})=>e.text_primary};
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({theme:e})=>e.primary};
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,Wo=y.div`
  display: flex;
  margin-top: 1rem;
`,be=y.a`
  display: inline-block;
  margin: 0 1rem;
  font-size: 1.5rem;
  color: ${({theme:e})=>e.text_primary};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({theme:e})=>e.primary};
  }
`,Uo=y.p`
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: ${({theme:e})=>e.soft2};
  text-align: center;
`,Ho=()=>s.jsx(zo,{children:s.jsxs(Fo,{children:[s.jsx(Vo,{children:"Fathi BELMKADEM"}),s.jsxs(Bo,{children:[s.jsx(de,{href:"#About",children:"About"}),s.jsx(de,{href:"#Skills",children:"Skills"}),s.jsx(de,{href:"#Experience",children:"Experience"}),s.jsx(de,{href:"#Projects",children:"Projects"}),s.jsx(de,{href:"#Education",children:"Education"})]}),s.jsxs(Wo,{children:[s.jsx(be,{href:X.facebook,target:"display",children:s.jsx(tn,{})}),s.jsx(be,{href:X.twitter,target:"display",children:s.jsx(rn,{})}),s.jsx(be,{href:X.linkedin,target:"display",children:s.jsx(an,{})}),s.jsx(be,{href:X.insta,target:"display",children:s.jsx(ln,{})})]}),s.jsx(Uo,{children:"© 2024 Fathi BELMKADEM. All rights reserved."})]})}),qo=y.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
  padding: 20px;
  text-align: center;
  background-color: ${({theme:e})=>e.bg};
  color: ${({theme:e})=>e.text_primary};
`,Go=y.h2`
  color: #ef4444;
  margin-bottom: 16px;
  font-size: 24px;
`,Ko=y.p`
  color: ${({theme:e})=>e.text_secondary};
  margin-bottom: 20px;
  max-width: 600px;
  line-height: 1.6;
`,Yo=y.button`
  background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;class Y extends He.Component{constructor(i){super(i);st(this,"handleRetry",()=>{this.setState({hasError:!1,error:null,errorInfo:null})});this.state={hasError:!1,error:null,errorInfo:null}}static getDerivedStateFromError(i){return{hasError:!0}}componentDidCatch(i,c){this.setState({error:i,errorInfo:c}),console.error("ErrorBoundary caught an error:",i,c)}render(){return this.state.hasError?s.jsxs(qo,{children:[s.jsx(Go,{children:"Oops! Something went wrong"}),s.jsx(Ko,{children:"The application encountered an unexpected error. This might be due to a temporary issue. Please try refreshing the page or contact support if the problem persists."}),s.jsx(Yo,{onClick:this.handleRetry,children:"Try Again"}),!1]}):this.props.children}}const Jo=_.lazy(()=>Ct(()=>import("./Projects-928c5c2d.js"),["assets/Projects-928c5c2d.js","assets/three-e9b3e8f9.js","assets/vendor-7249422d.js","assets/ui-4dbc6f2d.js","assets/mui-383fc1a0.js"])),Qo=_.lazy(()=>Ct(()=>import("./ProjectDetails-8b4ddb0d.js"),["assets/ProjectDetails-8b4ddb0d.js","assets/three-e9b3e8f9.js","assets/vendor-7249422d.js","assets/ui-4dbc6f2d.js","assets/mui-383fc1a0.js"])),Zo=y.div`
  background-color: ${({theme:e})=>e.bg};
  width: 100%;
  overflow-x: hidden;
  position: relative;
`,jt=y.div`
  padding-bottom: 100px;
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;function Xo(){const[e,r]=_.useState({state:!1,project:null});return s.jsx(Y,{children:s.jsx(An,{theme:Rn,children:s.jsxs(ar,{children:[s.jsx(Y,{children:s.jsx(wr,{})}),s.jsxs(Zo,{children:[s.jsx(Y,{children:s.jsx(Ft,{})}),s.jsx(Mn,{children:s.jsxs("div",{children:[s.jsx(Y,{children:s.jsx(Vt,{})}),s.jsxs(jt,{children:[s.jsx(Y,{children:s.jsx(ri,{})}),s.jsx(Y,{children:s.jsx(Yi,{})})]}),s.jsx(Y,{children:s.jsx(_.Suspense,{fallback:s.jsx("div",{children:"Loading..."}),children:s.jsx(Jo,{openModal:e,setOpenModal:r})})}),s.jsxs(jt,{children:[s.jsx(Y,{children:s.jsx(Mi,{})}),s.jsx(Y,{children:s.jsx(wo,{})})]}),s.jsx(Y,{children:s.jsx(Ho,{})}),e.state&&s.jsx(Y,{children:s.jsx(_.Suspense,{fallback:s.jsx("div",{children:"Loading..."}),children:s.jsx(Qo,{openModal:e,setOpenModal:r})})})]})})]})]})})})}const ea=Cn.createRoot(document.getElementById("root"));ea.render(s.jsx(He.StrictMode,{children:s.jsx(Xo,{})}));export{aa as p};
