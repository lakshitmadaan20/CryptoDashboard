(this.webpackJsonpdashboard=this.webpackJsonpdashboard||[]).push([[0],{118:function(e,a,t){},130:function(e,a){},157:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(64),l=t.n(c),o=(t(94),t(8)),m=t(36),i=t.n(m),s=t(185),u=t(193),d=t(188),p=t(189),E=t(190),b=t(192),h=t(33),v=t(32),f=t(187),g=Object(s.a)((function(e){return{root:{maxWidth:345},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:v.a[500]}}})),y=function(e){var a=e.news,t=e.i,n=i()().format("MMMM Do YYYY, h:mm:ss a"),c=g();return r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,null,r.a.createElement(u.a,{className:c.root},r.a.createElement(d.a,{avatar:r.a.createElement(b.a,{"aria-label":"",className:c.avatar},t),title:a.title,subheader:n}),r.a.createElement(p.a,{className:c.media,image:a.imageurl,title:a.source}),r.a.createElement(E.a,null,r.a.createElement(h.a,{variant:"body1",color:"textSecondary",component:"p"},"Description: ",a.body?a.body.substring(0,200):"Not Available")),r.a.createElement(E.a,null,r.a.createElement(h.a,{variant:"body2",color:"textSecondary",component:"p"},"Category: ",a.categories)),r.a.createElement(E.a,null,r.a.createElement(h.a,{className:"text-center"},r.a.createElement("a",{href:a.url,className:"btn btn-primary"},"View News"))))))},N=t(99);N.setApiKey("b1ea693d79e6f8b6d914d2a8a4afd0916244510823d8628147e8b74fd068b1e7");var x=function(){var e=Object(n.useState)([]),a=Object(o.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)(!1),m=Object(o.a)(l,2),i=m[0],s=m[1];Object(n.useEffect)((function(){setInterval((s(!0),void N.newsList("EN").then((function(e){console.log(e),c(e),s(!1)})).catch(console.error)),3e3)}),[]);return r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"mt-4 text-center"},"Top 50 Latest News"),r.a.createElement("hr",null),i?r.a.createElement("div",{class:"spinner"},r.a.createElement("div",{class:"d-flex justify-content-center"},r.a.createElement("div",{class:"spinner-border",role:"status"}))):r.a.createElement("div",{className:"row"},t.map((function(e,a){return r.a.createElement("div",{key:a,className:"col-4 mb-3"},r.a.createElement(y,{news:e,i:a}))}))))},_=t(17),k=t.n(_),j=t(20),O=t(21),w=t.n(O),S=t(15),C=(t(118),Object(s.a)((function(e){return{root:{maxWidth:345},media:{height:0,paddingTop:"56.5%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:v.a[500]}}}))),A=function(e){var a=e.image,t=e.name,n=e.symbol,c=e.price,l=e.volume,o=e.priceChange,m=e.id,i=e.rank,s=C();return r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,null,r.a.createElement(u.a,{className:s.root},r.a.createElement(d.a,{avatar:r.a.createElement(b.a,{"aria-label":"",className:s.avatar},i),title:t}),r.a.createElement(p.a,{className:s.media,image:a}),r.a.createElement(E.a,null,r.a.createElement(h.a,{variant:"body1",color:"textSecondary",component:"p"},"Symbol: ",n?n.toUpperCase():"Not Available")),r.a.createElement(E.a,null,r.a.createElement(h.a,{variant:"body2",color:"textSecondary",component:"p"},"Price: ",c||"Not Available")),r.a.createElement(E.a,null,r.a.createElement(h.a,{variant:"body2",color:"textSecondary",component:"p"},"Volume: \u20b9 ",l?l.toLocaleString():"Not Available")),r.a.createElement(E.a,null,r.a.createElement(h.a,{variant:"body2",color:"textSecondary",component:"p"},"Price Change: ",o<0?r.a.createElement("p",{className:"coin-percent red"}," ",o.toFixed(2),"%"):r.a.createElement("p",{className:"coin-percent green"},"+ ",o.toFixed(2),"%"))),r.a.createElement(E.a,null,r.a.createElement(h.a,{className:"text-center"},r.a.createElement(S.b,{className:"btn btn-outline-primary",to:"/coindata/".concat(m)},"View Data"))))))},I=function(){var e=Object(n.useState)([]),a=Object(o.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)(!1),m=Object(o.a)(l,2),i=m[0],s=m[1],u=Object(n.useState)(""),d=Object(o.a)(u,2),p=d[0],E=d[1],b=function(){var e=Object(j.a)(k.a.mark((function e(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=50&page=1&sparkline=true",s(!0),e.next=4,w.a.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=50&page=1&sparkline=true").then((function(e){console.log(e.data),c(e.data),s(!1)})).catch((function(e){return alert(e,"Failed to load the data!!")}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){setInterval(b(),3e3)}),[]);var h=function(e){E(e.target.value)},v=t.filter((function(e){return e.name.toLowerCase().includes(p.toLowerCase())}));return r.a.createElement("div",{className:"coin-container"},i?r.a.createElement("div",{class:"spinner"},r.a.createElement("div",{class:"d-flex justify-content-center"},r.a.createElement("div",{class:"spinner-border",role:"status"}))):r.a.createElement("div",{className:"coin-app container"},r.a.createElement("div",{className:"coin-search"},r.a.createElement("h1",{className:"coin-text"},"Top 50 Cryptocurrencies"),r.a.createElement("form",null,r.a.createElement("input",{type:"text",required:!0,placeholder:"Search Top 50 Crypto By Their Name...",className:"coin-input",onChange:h}))),r.a.createElement("div",{className:"row"},v.map((function(e){return r.a.createElement("div",{className:"col-4 mb-3"},r.a.createElement(A,{key:e.id,id:e.id,name:e.name,image:e.image,symbol:e.symbol,volume:e.total_volume,price:e.current_price,priceChange:e.price_change_percentage_24h,marketcap:e.market_cap,rank:e.market_cap_rank}))})))))},L=t(5),F=function(){return r.a.createElement("nav",{class:"navbar navbar-expand-lg"},r.a.createElement("div",{class:"container"},r.a.createElement("h1",{class:"navbar-brand"},"CryptoDashboard")))},T=w.a.create({baseURL:"https://api.coingecko.com/api/v3"}),V=t(18),z=t(69),D=t.n(z),M={lineHeightAnnotation:{always:!0,hover:!1,lineWeight:1.5},animation:{duration:1e3},maintainAspectRatio:!1,responsive:!0,scales:{xAxes:[{type:"time",distribution:"line"}]}},R=function(e){var a=e.data,t=Object(n.useRef)(),c=a.day,l=a.week,m=a.year,i=a.detail,s=Object(n.useState)("24h"),u=Object(o.a)(s,2),d=u[0],p=u[1],E=function(){switch(d){case"24h":return c;case"7d":return l;case"1y":return m;default:return c}};Object(n.useEffect)((function(){if(t&&t.current&&i){console.log("yeah");new D.a(t.current,{type:"line",data:{datasets:[{label:"".concat(i.name," price"),data:E(),backgroundColor:"rgb(0,0,128)",borderColor:"rgba(174, 305, 194, 0.4",pointRadius:0}]},options:Object(V.a)({},M)})}}));return r.a.createElement("div",{className:"border mt-2 rounded p-3"},r.a.createElement("div",null,function(){if(i)return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:"my-0"},"INR ",i.current_price?i.current_price.toLocaleString():"Not Available"),r.a.createElement("p",{className:i.price_change_24h<0?"text-danger my-0":"text-success my-0"},i.price_change_percentage_24h?i.price_change_percentage_24h.toFixed(2):"Not Available","%"))}()),r.a.createElement("div",{class:"chart-container"},r.a.createElement("canvas",{ref:t,id:"myChart",width:300,height:300})),r.a.createElement("div",{className:"chart-button mt-1"},r.a.createElement("button",{onClick:function(){return p("24h")},className:"btn btn-success "},"24h"),r.a.createElement("button",{onClick:function(){return p("7d")},className:"btn btn-success mx-1"},"7d"),r.a.createElement("button",{onClick:function(){return p("1y")},className:"btn btn-success"},"1y")))},W=function(e){var a=e.data;return r.a.createElement("div",null,function(){if(a)return r.a.createElement("div",{className:"mt-4 p-2 rounded border row"},r.a.createElement("div",{className:"col-sm"},r.a.createElement("div",{className:"d-flex flex-column"},r.a.createElement("span",{className:"text-muted coin-data-category"},"Market Cap"),r.a.createElement("span",null," \u20b9 ",a.market_cap?a.market_cap.toLocaleString():"Not Available")),r.a.createElement("hr",null),r.a.createElement("div",{className:"d-flex flex-column"},r.a.createElement("span",{className:"text-muted coin-data-category"},"Total Supply"),r.a.createElement("span",null," \u20b9 ",a.total_supply?a.total_supply.toLocaleString():"Not Available"))),r.a.createElement("div",{className:"col-sm"},r.a.createElement("div",{className:"d-flex flex-column"},r.a.createElement("span",{className:"text-muted coin-data-category"},"Volume(24H)"),r.a.createElement("span",null," \u20b9 ",a.total_volume?a.total_volume.toLocaleString():"Not Available")),r.a.createElement("hr",null),r.a.createElement("div",{className:"d-flex flex-column"},r.a.createElement("span",{className:"text-muted coin-data-category"},"high 24h"),r.a.createElement("span",null," \u20b9 ",a.high_24h?a.high_24h.toLocaleString():"Not Available"))),r.a.createElement("div",{className:"col-sm"},r.a.createElement("div",{className:"d-flex flex-column"},r.a.createElement("span",{className:"text-muted coin-data-category"},"Circulating Supply"),r.a.createElement("span",null," \u20b9 ",a.circulating_supply?a.circulating_supply.toLocaleString():"Not Available")),r.a.createElement("hr",null),r.a.createElement("div",{className:"d-flex flex-column"},r.a.createElement("span",{className:"text-muted coin-data-category"},"low 24h"),r.a.createElement("span",null," \u20b9 ",a.low_24h?a.low_24h.toLocaleString():"Not Available"))))}())},Y=function(){var e=Object(L.f)().id,a=Object(n.useState)({}),t=Object(o.a)(a,2),c=t[0],l=t[1],m=Object(n.useState)(!1),i=Object(o.a)(m,2),s=i[0],u=i[1],d=function(e){return e.map((function(e){return{t:e[0],y:e[1].toFixed(2)}}))};Object(n.useEffect)((function(){console.log(e),function(){var a=Object(j.a)(k.a.mark((function a(){var t,n,r,c,m,i;return k.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return u(!0),a.next=3,Promise.all([T.get("/coins/".concat(e,"/market_chart/"),{params:{vs_currency:"inr",days:"1"}}),T.get("/coins/".concat(e,"/market_chart/"),{params:{vs_currency:"inr",days:"7"}}),T.get("/coins/".concat(e,"/market_chart/"),{params:{vs_currency:"inr",days:"365"}}),T.get("/coins/markets/",{params:{vs_currency:"inr",ids:e}})]);case 3:t=a.sent,n=Object(o.a)(t,4),r=n[0],c=n[1],m=n[2],i=n[3],console.log(r),l({day:d(r.data.prices),week:d(c.data.prices),year:d(m.data.prices),detail:i.data[0]}),u(!1);case 12:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}()()}),[]);return s?r.a.createElement("div",{class:"spinner"},r.a.createElement("div",{class:"d-flex justify-content-center"},r.a.createElement("div",{class:"spinner-border",role:"status"}))):r.a.createElement("div",{className:"container"},r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(R,{data:c}),r.a.createElement("br",null),r.a.createElement("hr",null),r.a.createElement(W,{data:c.detail}),r.a.createElement("br",null))},P=Object(s.a)((function(e){return{root:{maxWidth:345},media:{height:0,paddingTop:"56.5%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:v.a[500]}}})),U=function(e){var a=e.data,t=P();return r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,null,r.a.createElement(u.a,{className:t.root},r.a.createElement(d.a,{avatar:r.a.createElement(b.a,{"aria-label":"",className:t.avatar},a.trust_score_rank),title:a.name}),r.a.createElement(p.a,{className:t.media,image:a.image}),r.a.createElement(E.a,null,r.a.createElement(h.a,{variant:"body1",color:"textSecondary",component:"p"},"Country: ",a.country?a.country:"Not Available")),r.a.createElement(E.a,null,r.a.createElement(h.a,{variant:"body2",color:"textSecondary",component:"p"},"Established In: ",a.year_established?a.year_established:"Not Available")),r.a.createElement(E.a,null,r.a.createElement(h.a,{variant:"body2",color:"textSecondary",component:"p"},"Trade Volume: \u20b9 ",a.trade_volume_24h_btc?a.trade_volume_24h_btc.toLocaleString():"Not Available")),r.a.createElement(E.a,null,r.a.createElement(h.a,{variant:"body2",color:"textSecondary",component:"p"},"Normalized Trade Volume: \u20b9 ",a.trade_volume_24h_btc_normalized?a.trade_volume_24h_btc_normalized.toLocaleString():"Not Available")),r.a.createElement(E.a,null,r.a.createElement(h.a,{className:"text-center"},r.a.createElement("a",{href:a.url,className:"btn btn-success"},"View Source"))))))},B=function(){var e=Object(n.useState)([]),a=Object(o.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)(!1),m=Object(o.a)(l,2),i=m[0],s=m[1],u=function(){var e=Object(j.a)(k.a.mark((function e(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.coingecko.com/api/v3/exchanges?per_page=50&page=1",s(!0),e.next=4,w.a.get("https://api.coingecko.com/api/v3/exchanges?per_page=50&page=1").then((function(e){console.log(e.data),c(e.data),s(!1)})).catch((function(e){alert(e,"Not able to load data")}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){setInterval(u(),3e3)}),[]);return r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"mt-4 text-center"},"Top 50 Exchanges"),r.a.createElement("hr",null),i?r.a.createElement("div",{class:"spinner"},r.a.createElement("div",{class:"d-flex justify-content-center"},r.a.createElement("div",{class:"spinner-border",role:"status"}))):r.a.createElement("div",{className:"row"},t.map((function(e,a){return r.a.createElement("div",{key:a,className:"col-4 mb-3"},r.a.createElement(U,{data:e}))}))))},H=t(28),J=t(70),q=t.n(J),K=(t(121),function(){var e=Object(n.useState)({amount:"",from:"",loading:!1,results:""}),a=Object(o.a)(e,2),t=a[0],c=a[1],l=t.amount,m=t.from,i=t.results,s=function(e){return function(a){c(Object(V.a)(Object(V.a)({},t),{},Object(H.a)({error:!1},e,a.target.value))),console.log(t)}},u=function(e){e.preventDefault(),c(Object(V.a)(Object(V.a)({},t),{},{loading:!0}));var a=q()(l,m);c(Object(V.a)(Object(V.a)({},t),{},{results:a,amount:"",from:"",loading:!1})),console.log(i)};return r.a.createElement("div",{class:"container mt-4"},r.a.createElement("h1",{className:"text-center"},"Ethereum unit converter"),r.a.createElement("hr",null),r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:u},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Enter Value:"),r.a.createElement("input",{type:"Number",className:"form-control",placeholder:"Enter Value you want to convert",value:l,onChange:s("amount")})),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement("label",null,"Unit:"),r.a.createElement("select",{value:m,onChange:s("from"),className:"form-control"},r.a.createElement("option",null,"Select the unit eg. Wei, Ether, etc."),r.a.createElement("option",null,"ether"),r.a.createElement("option",null,"finney"),r.a.createElement("option",null,"gether"),r.a.createElement("option",null,"gwei"),r.a.createElement("option",null,"kether"),r.a.createElement("option",null,"kwei"),r.a.createElement("option",null,"mether"),r.a.createElement("option",null,"mwei"),r.a.createElement("option",null,"Szabo"),r.a.createElement("option",null,"tether"))),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement("button",{className:"btn btn-success"},"Convert")))),r.a.createElement("br",null),r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"ether: ",i.ether),r.a.createElement("p",null,"finney: ",i.finney),r.a.createElement("p",null,"gether: ",i.gether),r.a.createElement("p",null,"gwei: ",i.gwei),r.a.createElement("p",null,"kether: ",i.kether),r.a.createElement("p",null,"kwei: ",i.kwei),r.a.createElement("p",null,"mether: ",i.mether," "),r.a.createElement("p",null,"mwei: ",i.mwei),r.a.createElement("p",null,"szabo: ",i.szabo),r.a.createElement("p",null,"tether: ",i.tether)))}),G=t(71),Q=t(72),X=t(75),Z=t(74),$=t(191),ee=function(e){Object(X.a)(t,e);var a=Object(Z.a)(t);function t(){var e;Object(G.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={activeItem:"home"},e.handleItemClick=function(a,t){var n=t.name;return e.setState({activeItem:n})},e}return Object(Q.a)(t,[{key:"render",value:function(){var e=this.state.activeItem;return r.a.createElement("div",{className:"container"},r.a.createElement($.a,{secondary:!0},r.a.createElement(S.b,{to:"/"},r.a.createElement($.a.Item,{name:"home",active:"home"===e,onClick:this.handleItemClick})),r.a.createElement(S.b,{to:"/news"},r.a.createElement($.a.Item,{name:"news",active:"news"===e,onClick:this.handleItemClick})),r.a.createElement(S.b,{to:"/exchanges"},r.a.createElement($.a.Item,{position:"right",name:"exchanges",active:"exchanges"===e,onClick:this.handleItemClick})),r.a.createElement(S.b,{to:"/calculator"},r.a.createElement($.a.Item,{name:"calculator",active:"calculator"===e,onClick:this.handleItemClick}))))}}]),t}(n.Component),ae=function(){return r.a.createElement(S.a,null,r.a.createElement(F,null),r.a.createElement("br",null),r.a.createElement(ee,null),r.a.createElement(L.c,null,r.a.createElement(L.a,{path:"/",exact:!0,component:I}),r.a.createElement(L.a,{path:"/news",exact:!0,component:x}),r.a.createElement(L.a,{path:"/coindata/:id",exact:!0,component:Y}),r.a.createElement(L.a,{path:"/exchanges",exact:!0,component:B}),r.a.createElement(L.a,{path:"/calculator",exact:!0,component:K})))};t(133),t(134);l.a.render(r.a.createElement(ae,null),document.getElementById("root"))},89:function(e,a,t){e.exports=t(157)},94:function(e,a,t){}},[[89,1,2]]]);
//# sourceMappingURL=main.ff5a427d.chunk.js.map