(this.webpackJsonpdashboard=this.webpackJsonpdashboard||[]).push([[0],{116:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(46),l=t.n(c),o=(t(66),t(7)),s=t(29),i=t.n(s),m=t(134),u=t(140),d=t(136),p=t(137),E=t(138),b=t(139),v=t(27),g=t(26),f=Object(m.a)((function(e){return{root:{maxWidth:345},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:g.a[500]}}})),h=function(e){var a=e.news,t=e.i,n=i()().format("MMMM Do YYYY, h:mm:ss a"),c=f();return r.a.createElement(u.a,{className:c.root},r.a.createElement(d.a,{avatar:r.a.createElement(b.a,{"aria-label":"",className:c.avatar},t),title:a.title,subheader:n}),r.a.createElement(p.a,{className:c.media,image:a.imageurl,title:a.source}),r.a.createElement(E.a,null,r.a.createElement(v.a,{variant:"body1",color:"textSecondary",component:"p"},"Description: ",a.body?a.body.substring(0,200):"Not Available")),r.a.createElement(E.a,null,r.a.createElement(v.a,{variant:"body2",color:"textSecondary",component:"p"},"Category: ",a.categories)),r.a.createElement(E.a,null,r.a.createElement(v.a,{className:"text-center"},r.a.createElement("a",{href:a.url,className:"btn btn-primary"},"View News"))))},y=t(71);y.setApiKey("b1ea693d79e6f8b6d914d2a8a4afd0916244510823d8628147e8b74fd068b1e7");var N=function(){var e=Object(n.useState)([]),a=Object(o.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)(!1),s=Object(o.a)(l,2),i=s[0],m=s[1];Object(n.useEffect)((function(){setInterval((m(!0),void y.newsList("EN").then((function(e){console.log(e),c(e),m(!1)})).catch(console.error)),3e3)}),[]);return r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"mt-4 text-center"},"Top 50 Latest News"),r.a.createElement("hr",null),i?r.a.createElement("div",{class:"spinner"},r.a.createElement("div",{class:"d-flex justify-content-center"},r.a.createElement("div",{class:"spinner-border",role:"status"}))):r.a.createElement("div",{className:"row"},t.map((function(e,a){return r.a.createElement("div",{key:a,className:"col-4 mb-3"},r.a.createElement(h,{news:e,i:a}))}))))},x=t(16),_=t.n(x),k=t(18),j=t(19),O=t.n(j),w=t(15),S=(t(90),function(e){var a=e.image,t=e.name,n=e.symbol,c=e.price,l=e.volume,o=e.priceChange,s=e.id;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"coin-row"},r.a.createElement("div",{className:"coin"},r.a.createElement("img",{src:a,alt:"crypto"}),r.a.createElement("h1",null,t),r.a.createElement("p",{className:"coin-symbol"},n)),r.a.createElement("div",{className:"coin-data"},r.a.createElement("p",{className:"coin-price"},"Price: \u20b9",c.toLocaleString()),r.a.createElement("p",{className:"coin-volume"},"volume: \u20b9",l.toLocaleString()),o<0?r.a.createElement("p",{className:"coin-percent red"}," ",o.toFixed(2),"%"):r.a.createElement("p",{className:"coin-percent green"},"+ ",o.toFixed(2),"%"),r.a.createElement("p",{className:"coin-price"},r.a.createElement(w.b,{className:"btn btn-outline-primary",to:"/coindata/".concat(s)},"View Data")))))}),C=function(){var e=Object(n.useState)([]),a=Object(o.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)(!1),s=Object(o.a)(l,2),i=s[0],m=s[1],u=Object(n.useState)(""),d=Object(o.a)(u,2),p=d[0],E=d[1],b=function(){var e=Object(k.a)(_.a.mark((function e(){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=50&page=1&sparkline=true",m(!0),e.next=4,O.a.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=50&page=1&sparkline=true").then((function(e){console.log(e.data),c(e.data),m(!1)})).catch((function(e){return alert(e,"Failed to load the data!!")}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){setInterval(b(),3e3)}),[]);var v=function(e){E(e.target.value)},g=t.filter((function(e){return e.name.toLowerCase().includes(p.toLowerCase())}));return r.a.createElement("div",{className:"coin-container"},i?r.a.createElement("div",{class:"spinner"},r.a.createElement("div",{class:"d-flex justify-content-center"},r.a.createElement("div",{class:"spinner-border",role:"status"}))):r.a.createElement("div",{className:"coin-app"},r.a.createElement("div",{className:"coin-search"},r.a.createElement("h1",{className:"coin-text"},"Top 50 Cryptocurrencies"),r.a.createElement("form",null,r.a.createElement("input",{type:"text",required:!0,placeholder:"Search Top 50 Crypto By Their Name...",className:"coin-input",onChange:v}))),g.map((function(e){return r.a.createElement(S,{key:e.id,id:e.id,name:e.name,image:e.image,symbol:e.symbol,volume:e.total_volume,price:e.current_price,priceChange:e.price_change_percentage_24h,marketcap:e.market_cap})}))))},L=t(3),A=function(){return r.a.createElement("nav",{class:"navbar navbar-expand-lg"},r.a.createElement("div",{class:"container"},r.a.createElement("h1",{class:"navbar-brand"},"CryptoDashboard"),r.a.createElement("button",{className:"navbar-toggler bg-secondary",type:"button","data-toggle":"collapse","data-target":"/navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{class:"collapse navbar-collapse"},r.a.createElement("ul",{class:"navbar-nav ms-auto mb-2 mb-lg-0"},r.a.createElement("li",{class:"nav-item"},r.a.createElement(w.b,{class:"nav-link",to:"/"},"Home")),r.a.createElement("li",{class:"nav-item"},r.a.createElement(w.b,{class:"nav-link",to:"/news"},"News")),r.a.createElement("li",{class:"nav-item"},r.a.createElement(w.b,{class:"nav-link",to:"/exchanges"},"Exchanges"))))))},T=O.a.create({baseURL:"https://api.coingecko.com/api/v3"}),F=t(52),I=t(51),V=t.n(I),M={lineHeightAnnotation:{always:!0,hover:!1,lineWeight:1.5},animation:{duration:1e3},maintainAspectRatio:!1,responsive:!0,scales:{xAxes:[{type:"time",distribution:"line"}]}},R=function(e){var a=e.data,t=Object(n.useRef)(),c=a.day,l=a.week,s=a.year,i=a.detail,m=Object(n.useState)("24h"),u=Object(o.a)(m,2),d=u[0],p=u[1],E=function(){switch(d){case"24h":return c;case"7d":return l;case"1y":return s;default:return c}};Object(n.useEffect)((function(){if(t&&t.current&&i){console.log("yeah");new V.a(t.current,{type:"line",data:{datasets:[{label:"".concat(i.name," price"),data:E(),backgroundColor:"rgb(0,0,128)",borderColor:"rgba(174, 305, 194, 0.4",pointRadius:0}]},options:Object(F.a)({},M)})}}));return r.a.createElement("div",{className:"border mt-2 rounded p-3"},r.a.createElement("div",null,function(){if(i)return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:"my-0"},"INR ",i.current_price?i.current_price.toLocaleString():"Not Available"),r.a.createElement("p",{className:i.price_change_24h<0?"text-danger my-0":"text-success my-0"},i.price_change_percentage_24h?i.price_change_percentage_24h.toFixed(2):"Not Available","%"))}()),r.a.createElement("div",{class:"chart-container"},r.a.createElement("canvas",{ref:t,id:"myChart",width:300,height:300})),r.a.createElement("div",{className:"chart-button mt-1"},r.a.createElement("button",{onClick:function(){return p("24h")},className:"btn btn-success "},"24h"),r.a.createElement("button",{onClick:function(){return p("7d")},className:"btn btn-success mx-1"},"7d"),r.a.createElement("button",{onClick:function(){return p("1y")},className:"btn btn-success"},"1y")))},D=function(e){var a=e.data;return r.a.createElement("div",null,function(){if(a)return r.a.createElement("div",{className:"mt-4 p-2 rounded border row"},r.a.createElement("div",{className:"col-sm"},r.a.createElement("div",{className:"d-flex flex-column"},r.a.createElement("span",{className:"text-muted coin-data-category"},"Market Cap"),r.a.createElement("span",null," \u20b9 ",a.market_cap?a.market_cap.toLocaleString():"Not Available")),r.a.createElement("hr",null),r.a.createElement("div",{className:"d-flex flex-column"},r.a.createElement("span",{className:"text-muted coin-data-category"},"Total Supply"),r.a.createElement("span",null," \u20b9 ",a.total_supply?a.total_supply.toLocaleString():"Not Available"))),r.a.createElement("div",{className:"col-sm"},r.a.createElement("div",{className:"d-flex flex-column"},r.a.createElement("span",{className:"text-muted coin-data-category"},"Volume(24H)"),r.a.createElement("span",null," \u20b9 ",a.total_volume?a.total_volume.toLocaleString():"Not Available")),r.a.createElement("hr",null),r.a.createElement("div",{className:"d-flex flex-column"},r.a.createElement("span",{className:"text-muted coin-data-category"},"high 24h"),r.a.createElement("span",null," \u20b9 ",a.high_24h?a.high_24h.toLocaleString():"Not Available"))),r.a.createElement("div",{className:"col-sm"},r.a.createElement("div",{className:"d-flex flex-column"},r.a.createElement("span",{className:"text-muted coin-data-category"},"Circulating Supply"),r.a.createElement("span",null," \u20b9 ",a.circulating_supply?a.circulating_supply.toLocaleString():"Not Available")),r.a.createElement("hr",null),r.a.createElement("div",{className:"d-flex flex-column"},r.a.createElement("span",{className:"text-muted coin-data-category"},"low 24h"),r.a.createElement("span",null," \u20b9 ",a.low_24h?a.low_24h.toLocaleString():"Not Available"))))}())},Y=function(){var e=Object(L.f)().id,a=Object(n.useState)({}),t=Object(o.a)(a,2),c=t[0],l=t[1],s=Object(n.useState)(!1),i=Object(o.a)(s,2),m=i[0],u=i[1],d=function(e){return e.map((function(e){return{t:e[0],y:e[1].toFixed(2)}}))};Object(n.useEffect)((function(){console.log(e),function(){var a=Object(k.a)(_.a.mark((function a(){var t,n,r,c,s,i;return _.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return u(!0),a.next=3,Promise.all([T.get("/coins/".concat(e,"/market_chart/"),{params:{vs_currency:"inr",days:"1"}}),T.get("/coins/".concat(e,"/market_chart/"),{params:{vs_currency:"inr",days:"7"}}),T.get("/coins/".concat(e,"/market_chart/"),{params:{vs_currency:"inr",days:"365"}}),T.get("/coins/markets/",{params:{vs_currency:"inr",ids:e}})]);case 3:t=a.sent,n=Object(o.a)(t,4),r=n[0],c=n[1],s=n[2],i=n[3],console.log(r),l({day:d(r.data.prices),week:d(c.data.prices),year:d(s.data.prices),detail:i.data[0]}),u(!1);case 12:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}()()}),[]);return m?r.a.createElement("div",{class:"spinner"},r.a.createElement("div",{class:"d-flex justify-content-center"},r.a.createElement("div",{class:"spinner-border",role:"status"}))):r.a.createElement("div",{className:"container"},r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(R,{data:c}),r.a.createElement("br",null),r.a.createElement("hr",null),r.a.createElement(D,{data:c.detail}),r.a.createElement("br",null))},z=(t(93),Object(m.a)((function(e){return{root:{maxWidth:345},media:{height:0,paddingTop:"56.5%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:g.a[500]}}}))),H=function(e){var a=e.data,t=z();return r.a.createElement("div",null,r.a.createElement(u.a,{className:t.root},r.a.createElement(d.a,{avatar:r.a.createElement(b.a,{"aria-label":"",className:t.avatar},a.trust_score_rank),title:a.name}),r.a.createElement(p.a,{className:t.media,image:a.image}),r.a.createElement(E.a,null,r.a.createElement(v.a,{variant:"body1",color:"textSecondary",component:"p"},"Country: ",a.country?a.country:"Not Available")),r.a.createElement(E.a,null,r.a.createElement(v.a,{variant:"body2",color:"textSecondary",component:"p"},"Established In: ",a.year_established?a.year_established:"Not Available")),r.a.createElement(E.a,null,r.a.createElement(v.a,{variant:"body2",color:"textSecondary",component:"p"},"Trade Volume: \u20b9 ",a.trade_volume_24h_btc?a.trade_volume_24h_btc.toLocaleString():"Not Available")),r.a.createElement(E.a,null,r.a.createElement(v.a,{variant:"body2",color:"textSecondary",component:"p"},"Normalized Trade Volume: \u20b9 ",a.trade_volume_24h_btc_normalized?a.trade_volume_24h_btc_normalized.toLocaleString():"Not Available")),r.a.createElement(E.a,null,r.a.createElement(v.a,{className:"text-center"},r.a.createElement("a",{href:a.url,className:"btn btn-success"},"View Source")))))},W=function(){var e=Object(n.useState)([]),a=Object(o.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)(!1),s=Object(o.a)(l,2),i=s[0],m=s[1],u=function(){var e=Object(k.a)(_.a.mark((function e(){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.coingecko.com/api/v3/exchanges?per_page=50&page=1",m(!0),e.next=4,O.a.get("https://api.coingecko.com/api/v3/exchanges?per_page=50&page=1").then((function(e){console.log(e.data),c(e.data),m(!1)})).catch((function(e){alert(e,"Not able to load data")}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){setInterval(u(),3e3)}),[]);return r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"mt-4 text-center"},"Top 50 Exchanges"),r.a.createElement("hr",null),i?r.a.createElement("div",{class:"spinner"},r.a.createElement("div",{class:"d-flex justify-content-center"},r.a.createElement("div",{class:"spinner-border",role:"status"}))):r.a.createElement("div",{className:"row"},t.map((function(e,a){return r.a.createElement("div",{key:a,className:"col-4 mb-3"},r.a.createElement(H,{data:e}))}))))},B=function(){return r.a.createElement(w.a,null,r.a.createElement(A,null),r.a.createElement(L.c,null,r.a.createElement(L.a,{path:"/",exact:!0,component:C}),r.a.createElement(L.a,{path:"/news",exact:!0,component:N}),r.a.createElement(L.a,{path:"/coindata/:id",exact:!0,component:Y}),r.a.createElement(L.a,{path:"/exchanges",exact:!0,component:W})))};l.a.render(r.a.createElement(B,null),document.getElementById("root"))},61:function(e,a,t){e.exports=t(116)},66:function(e,a,t){},90:function(e,a,t){}},[[61,1,2]]]);
//# sourceMappingURL=main.6561c751.chunk.js.map