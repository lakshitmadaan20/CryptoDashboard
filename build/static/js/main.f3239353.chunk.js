(this.webpackJsonpdashboard=this.webpackJsonpdashboard||[]).push([[0],{101:function(e,a,t){},112:function(e,a){},139:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),c=t(58),l=t.n(c),o=(t(74),t(4)),s=t(159),m=t(23),i=t.n(m),u=t(157),d=t(164),p=t(160),E=t(161),b=t(162),v=t(163),f=t(33),g=t(32),h=Object(u.a)((function(e){return{root:{maxWidth:345},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:g.a[500]}}})),y=function(e){var a=e.news,t=e.i,n=i()().format("MMMM Do YYYY, h:mm:ss a"),c=h();return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,null,r.a.createElement(d.a,{className:c.root},r.a.createElement(p.a,{avatar:r.a.createElement(v.a,{"aria-label":"",className:c.avatar},t),title:a.title,subheader:n}),r.a.createElement(E.a,{className:c.media,image:a.imageurl,title:a.source}),r.a.createElement(b.a,null,r.a.createElement(f.a,{className:"black-6",variant:"body1",color:"textSecondary",component:"p"},"Description: ",a.body?a.body.substring(0,200):"Not Available")),r.a.createElement(b.a,null,r.a.createElement(f.a,{className:"black-7",variant:"body2",color:"textSecondary",component:"p"},"Category: ",a.categories)),r.a.createElement(b.a,null,r.a.createElement(f.a,{className:"text-center"},r.a.createElement("a",{href:a.url,className:"btn btn-primary"},"View News"))))))},N=t(79);N.setApiKey("b1ea693d79e6f8b6d914d2a8a4afd0916244510823d8628147e8b74fd068b1e7");var x=function(){var e=Object(n.useState)([]),a=Object(o.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)(!1),m=Object(o.a)(l,2),i=m[0],u=m[1];Object(n.useEffect)((function(){setInterval((u(!0),void N.newsList("EN").then((function(e){console.log(e),c(e),u(!1)})).catch(console.error)),3e3)}),[]);return r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"mt-4 text-center"},"Top 50 Latest News"),r.a.createElement("hr",null),i?r.a.createElement("div",{class:"spinner"},r.a.createElement("div",{class:"d-flex justify-content-center"},r.a.createElement("div",{class:"spinner-border",role:"status"}))):r.a.createElement(s.a,{container:!0,spacing:2,style:{gap:"20px",justifyContent:"center"}},t.map((function(e,a){return r.a.createElement(y,{news:e,i:a})}))))},k=t(17),_=t.n(k),j=t(22),O=t(20),S=t.n(O),w=t(13),C=(t(98),Object(u.a)((function(e){return{root:{maxWidth:345},media:{height:0,paddingTop:"56.5%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:g.a[500]}}}))),A=function(e){var a=e.image,t=e.name,n=e.symbol,c=e.price,l=e.volume,o=e.priceChange,m=e.id,i=e.rank,u=C();return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,null,r.a.createElement(d.a,{className:u.root},r.a.createElement(p.a,{avatar:r.a.createElement(v.a,{"aria-label":"",className:u.avatar},i),title:t}),r.a.createElement(E.a,{className:u.media,image:a}),r.a.createElement(b.a,null,r.a.createElement(f.a,{className:"black-6",variant:"body1",color:"textSecondary",component:"p"},"Symbol: ",n?n.toUpperCase():"Not Available")),r.a.createElement(b.a,null,r.a.createElement(f.a,{className:"black-7",variant:"body2",color:"textSecondary",component:"p"},"Price: ",c||"Not Available")),r.a.createElement(b.a,null,r.a.createElement(f.a,{className:"black-8",variant:"body2",color:"textSecondary",component:"p"},"Volume: \u20b9 ",l?l.toLocaleString():"Not Available")),r.a.createElement(b.a,null,r.a.createElement(f.a,{className:"black-9",variant:"body2",color:"textSecondary",component:"p"},"Price Change: ",o<0?r.a.createElement("p",{className:"coin-percent red"}," ",o.toFixed(2),"%"):r.a.createElement("p",{className:"coin-percent green"},"+ ",o.toFixed(2),"%"))),r.a.createElement(b.a,null,r.a.createElement(f.a,{className:"text-center"},r.a.createElement(w.b,{className:"btn btn-outline-primary",to:"/coindata/".concat(m)},"View Data"))))))},L=function(){var e=Object(n.useState)([]),a=Object(o.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)(!1),m=Object(o.a)(l,2),i=m[0],u=m[1],d=Object(n.useState)(""),p=Object(o.a)(d,2),E=p[0],b=p[1],v=function(){var e=Object(j.a)(_.a.mark((function e(){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=50&page=1&sparkline=true",u(!0),e.next=4,S.a.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=50&page=1&sparkline=true").then((function(e){console.log(e.data),c(e.data),u(!1)})).catch((function(e){return alert(e,"Failed to load the data!!")}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){setInterval(v(),3e3)}),[]);var f=function(e){b(e.target.value)},g=t.filter((function(e){return e.name.toLowerCase().includes(E.toLowerCase())}));return r.a.createElement("div",{className:"coin-container"},i?r.a.createElement("div",{class:"spinner"},r.a.createElement("div",{class:"d-flex justify-content-center"},r.a.createElement("div",{class:"spinner-border",role:"status"}))):r.a.createElement("div",{className:"coin-app container"},r.a.createElement("div",{className:"coin-search"},r.a.createElement("h1",{className:"coin-text"},"Top 50 Cryptocurrencies"),r.a.createElement("div",{className:"container"},r.a.createElement("form",null,r.a.createElement("input",{type:"text",required:!0,placeholder:"Search Top 50 Crypto By Their Name...",className:"coin-input text-center",onChange:f})))),r.a.createElement(s.a,{container:!0,spacing:2,style:{gap:"20px",justifyContent:"center"}},g.map((function(e){return r.a.createElement(A,{key:e.id,id:e.id,name:e.name,image:e.image,symbol:e.symbol,volume:e.total_volume,price:e.current_price,priceChange:e.price_change_percentage_24h,marketcap:e.market_cap,rank:e.market_cap_rank})})))))},T=t(5),F=(t(101),t(43)),V=t(0);var D=function(){var e=Object(n.useState)(!1),a=Object(o.a)(e,2),t=a[0],c=a[1],l=function(){return c(!1)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(V.b.Provider,{value:{color:"#fff"}},r.a.createElement("nav",{className:"navbar"},r.a.createElement("div",{className:"navbar-container container"},r.a.createElement(w.b,{to:"/",className:"navbar-logo mt-2",onClick:l},"CryptoDashboard"),r.a.createElement("div",{className:"menu-icon",onClick:function(){return c(!t)}},t?r.a.createElement(F.b,null):r.a.createElement(F.a,{className:"bg-primary"})),r.a.createElement("ul",{className:t?"nav-menu active":"nav-menu"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(w.b,{to:"/",className:"nav-links",onClick:l},"Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(w.b,{to:"/news",className:"nav-links",onClick:l},"News")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(w.b,{to:"/exchanges",className:"nav-links",onClick:l},"Exchanges")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(w.b,{to:"/calculator",className:"nav-links",onClick:l},"Calculator")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(w.b,{to:"/events",className:"nav-links",onClick:l},"Events")))))))},M=S.a.create({baseURL:"https://api.coingecko.com/api/v3"}),z=t(18),Y=t(63),I=t.n(Y),W={lineHeightAnnotation:{always:!0,hover:!1,lineWeight:1.5},animation:{duration:1e3},maintainAspectRatio:!1,responsive:!0,scales:{xAxes:[{type:"time",distribution:"line"}]}},R=function(e){var a=e.data,t=Object(n.useRef)(),c=a.day,l=a.week,s=a.year,m=a.detail,i=Object(n.useState)("24h"),u=Object(o.a)(i,2),d=u[0],p=u[1],E=function(){switch(d){case"24h":return c;case"7d":return l;case"1y":return s;default:return c}};Object(n.useEffect)((function(){if(t&&t.current&&m){console.log("yeah");new I.a(t.current,{type:"line",data:{datasets:[{label:"".concat(m.name," price"),data:E(),backgroundColor:"rgb(0,0,128)",borderColor:"rgba(174, 305, 194, 0.4",pointRadius:0}]},options:Object(z.a)({},W)})}}));return r.a.createElement("div",{className:"border mt-2 rounded p-3"},r.a.createElement("div",null,function(){if(m)return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:"my-0"},"INR ",m.current_price?m.current_price.toLocaleString():"Not Available"),r.a.createElement("p",{className:m.price_change_24h<0?"text-danger my-0":"text-success my-0"},m.price_change_percentage_24h?m.price_change_percentage_24h.toFixed(2):"Not Available","%"))}()),r.a.createElement("div",{class:"chart-container"},r.a.createElement("canvas",{ref:t,id:"myChart",width:300,height:300})),r.a.createElement("div",{className:"chart-button mt-1"},r.a.createElement("button",{onClick:function(){return p("24h")},className:"btn btn-success "},"24h"),r.a.createElement("button",{onClick:function(){return p("7d")},className:"btn btn-success mx-1"},"7d"),r.a.createElement("button",{onClick:function(){return p("1y")},className:"btn btn-success"},"1y")))},P=function(e){var a=e.data;return r.a.createElement("div",null,function(){if(a)return r.a.createElement("div",{className:"mt-4 p-2 rounded border row"},r.a.createElement("div",{className:"col-sm"},r.a.createElement("div",{className:"d-flex flex-column"},r.a.createElement("span",{className:"text-muted coin-data-category"},"Market Cap"),r.a.createElement("span",null," \u20b9 ",a.market_cap?a.market_cap.toLocaleString():"Not Available")),r.a.createElement("hr",null),r.a.createElement("div",{className:"d-flex flex-column"},r.a.createElement("span",{className:"text-muted coin-data-category"},"Total Supply"),r.a.createElement("span",null," \u20b9 ",a.total_supply?a.total_supply.toLocaleString():"Not Available"))),r.a.createElement("div",{className:"col-sm"},r.a.createElement("div",{className:"d-flex flex-column"},r.a.createElement("span",{className:"text-muted coin-data-category"},"Volume(24H)"),r.a.createElement("span",null," \u20b9 ",a.total_volume?a.total_volume.toLocaleString():"Not Available")),r.a.createElement("hr",null),r.a.createElement("div",{className:"d-flex flex-column"},r.a.createElement("span",{className:"text-muted coin-data-category"},"high 24h"),r.a.createElement("span",null," \u20b9 ",a.high_24h?a.high_24h.toLocaleString():"Not Available"))),r.a.createElement("div",{className:"col-sm"},r.a.createElement("div",{className:"d-flex flex-column"},r.a.createElement("span",{className:"text-muted coin-data-category"},"Circulating Supply"),r.a.createElement("span",null," \u20b9 ",a.circulating_supply?a.circulating_supply.toLocaleString():"Not Available")),r.a.createElement("hr",null),r.a.createElement("div",{className:"d-flex flex-column"},r.a.createElement("span",{className:"text-muted coin-data-category"},"low 24h"),r.a.createElement("span",null," \u20b9 ",a.low_24h?a.low_24h.toLocaleString():"Not Available"))))}())},U=function(){var e=Object(T.f)().id,a=Object(n.useState)({}),t=Object(o.a)(a,2),c=t[0],l=t[1],s=Object(n.useState)(!1),m=Object(o.a)(s,2),i=m[0],u=m[1],d=function(e){return e.map((function(e){return{t:e[0],y:e[1].toFixed(2)}}))};Object(n.useEffect)((function(){console.log(e),function(){var a=Object(j.a)(_.a.mark((function a(){var t,n,r,c,s,m;return _.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return u(!0),a.next=3,Promise.all([M.get("/coins/".concat(e,"/market_chart/"),{params:{vs_currency:"inr",days:"1"}}),M.get("/coins/".concat(e,"/market_chart/"),{params:{vs_currency:"inr",days:"7"}}),M.get("/coins/".concat(e,"/market_chart/"),{params:{vs_currency:"inr",days:"365"}}),M.get("/coins/markets/",{params:{vs_currency:"inr",ids:e}})]);case 3:t=a.sent,n=Object(o.a)(t,4),r=n[0],c=n[1],s=n[2],m=n[3],console.log(r),l({day:d(r.data.prices),week:d(c.data.prices),year:d(s.data.prices),detail:m.data[0]}),u(!1);case 12:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}()()}),[]);return i?r.a.createElement("div",{class:"spinner"},r.a.createElement("div",{class:"d-flex justify-content-center"},r.a.createElement("div",{class:"spinner-border",role:"status"}))):r.a.createElement("div",{className:"container"},r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(R,{data:c}),r.a.createElement("br",null),r.a.createElement("hr",null),r.a.createElement(P,{data:c.detail}),r.a.createElement("br",null))},B=Object(u.a)((function(e){return{root:{maxWidth:345},media:{height:0,paddingTop:"56.5%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:g.a[500]}}})),H=function(e){var a=e.data,t=B();return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,null,r.a.createElement(d.a,{className:t.root},r.a.createElement(p.a,{avatar:r.a.createElement(v.a,{"aria-label":"",className:t.avatar},a.trust_score_rank),title:a.name}),r.a.createElement(E.a,{className:t.media,image:a.image}),r.a.createElement(b.a,null,r.a.createElement(f.a,{className:"black-6",variant:"body1",color:"textSecondary",component:"p"},"Country: ",a.country?a.country:"Not Available")),r.a.createElement(b.a,null,r.a.createElement(f.a,{className:"black-7",variant:"body2",color:"textSecondary",component:"p"},"Established In: ",a.year_established?a.year_established:"Not Available")),r.a.createElement(b.a,null,r.a.createElement(f.a,{className:"black-8",variant:"body2",color:"textSecondary",component:"p"},"Trade Volume: \u20b9 ",a.trade_volume_24h_btc?a.trade_volume_24h_btc.toLocaleString():"Not Available")),r.a.createElement(b.a,null,r.a.createElement(f.a,{className:"black-9",variant:"body2",color:"textSecondary",component:"p"},"Normalized Trade Volume: \u20b9 ",a.trade_volume_24h_btc_normalized?a.trade_volume_24h_btc_normalized.toLocaleString():"Not Available")),r.a.createElement(b.a,null,r.a.createElement(f.a,{className:"text-center"},r.a.createElement("a",{href:a.url,className:"btn btn-success"},"View Source"))))))},J=function(){var e=Object(n.useState)([]),a=Object(o.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)(!1),m=Object(o.a)(l,2),i=m[0],u=m[1],d=function(){var e=Object(j.a)(_.a.mark((function e(){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.coingecko.com/api/v3/exchanges?per_page=50&page=1",u(!0),e.next=4,S.a.get("https://api.coingecko.com/api/v3/exchanges?per_page=50&page=1").then((function(e){console.log(e.data),c(e.data),u(!1)})).catch((function(e){alert(e,"Not able to load data")}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){setInterval(d(),3e3)}),[]);return r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"mt-4 text-center"},"Top 50 Exchanges"),r.a.createElement("hr",null),i?r.a.createElement("div",{class:"spinner"},r.a.createElement("div",{class:"d-flex justify-content-center"},r.a.createElement("div",{class:"spinner-border",role:"status"}))):r.a.createElement(s.a,{container:!0,spacing:2,style:{gap:"20px",justifyContent:"center"}},t.map((function(e,a){return r.a.createElement(H,{data:e})}))))},q=t(29),K=t(64),G=t.n(K),Q=(t(103),function(){var e=Object(n.useState)({amount:"",from:"",loading:!1,results:""}),a=Object(o.a)(e,2),t=a[0],c=a[1],l=t.amount,s=t.from,m=t.results,i=function(e){return function(a){c(Object(z.a)(Object(z.a)({},t),{},Object(q.a)({error:!1},e,a.target.value))),console.log(t)}},u=function(e){e.preventDefault(),c(Object(z.a)(Object(z.a)({},t),{},{loading:!0}));var a=G()(l,s);c(Object(z.a)(Object(z.a)({},t),{},{results:a,amount:"",from:"",loading:!1})),console.log(m)};return r.a.createElement("div",{class:"container mt-4"},r.a.createElement("h1",{className:"text-center"},"Ethereum unit converter"),r.a.createElement("hr",null),r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:u},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Enter Value:"),r.a.createElement("input",{type:"Number",className:"form-control",placeholder:"Enter Value you want to convert",value:l,onChange:i("amount")})),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement("label",null,"Unit:"),r.a.createElement("select",{value:s,onChange:i("from"),className:"form-control"},r.a.createElement("option",null,"Select the unit eg. Wei, Ether, etc."),r.a.createElement("option",null,"ether"),r.a.createElement("option",null,"wei"),r.a.createElement("option",null,"finney"),r.a.createElement("option",null,"gether"),r.a.createElement("option",null,"gwei"),r.a.createElement("option",null,"kether"),r.a.createElement("option",null,"kwei"),r.a.createElement("option",null,"mether"),r.a.createElement("option",null,"mwei"),r.a.createElement("option",null,"Szabo"),r.a.createElement("option",null,"tether"))),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement("button",{className:"btn btn-success"},"Convert")))),r.a.createElement("br",null),r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"ether: ",m.ether),r.a.createElement("p",null,"wei: ",m.wei),r.a.createElement("p",null,"finney: ",m.finney),r.a.createElement("p",null,"gether: ",m.gether),r.a.createElement("p",null,"gwei: ",m.gwei),r.a.createElement("p",null,"kether: ",m.kether),r.a.createElement("p",null,"kwei: ",m.kwei),r.a.createElement("p",null,"mether: ",m.mether," "),r.a.createElement("p",null,"mwei: ",m.mwei),r.a.createElement("p",null,"szabo: ",m.szabo),r.a.createElement("p",null,"tether: ",m.tether)))}),X=Object(u.a)((function(e){return{root:{maxWidth:345},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:g.a[500]}}})),Z=function(e){var a=e.events,t=e.i,n=i()().format("MMMM Do YYYY, h:mm:ss a"),c=X();return r.a.createElement(s.a,null,r.a.createElement(d.a,{className:c.root},r.a.createElement(p.a,{avatar:r.a.createElement(v.a,{"aria-label":"",className:c.avatar},t),title:a.title,subheader:n}),r.a.createElement(E.a,{className:c.media,image:a.screenshot}),r.a.createElement(b.a,null,r.a.createElement(f.a,{variant:"body1",color:"textSecondary",component:"p"},"Description: ",a.description?a.description.substring(0,300):"Not Available")),r.a.createElement(b.a,null,r.a.createElement(f.a,{variant:"body2",color:"textSecondary",component:"p"},"Organiser: ",a.organizer?a.organizer:"Not Available")),r.a.createElement(b.a,null,r.a.createElement(f.a,{variant:"body2",color:"textSecondary",component:"p"},"Start Date: ",a.start_date?a.start_date:"Not Available")),r.a.createElement(b.a,null,r.a.createElement(f.a,{variant:"body2",color:"textSecondary",component:"p"},"End Date: ",a.end_date?a.end_date:"Not Available")),r.a.createElement(b.a,null,r.a.createElement(f.a,{variant:"body2",color:"textSecondary",component:"p"},"City: ",a.city?a.city:"Not Available")),r.a.createElement(b.a,null,r.a.createElement(f.a,{variant:"body2",color:"textSecondary",component:"p"},"Country: ",a.country?a.country:"Not Available")),r.a.createElement(b.a,null,r.a.createElement(f.a,{variant:"body2",color:"textSecondary",component:"p"},"Venue: ",a.venue?a.venue:"To Be Determined")),r.a.createElement(b.a,null,r.a.createElement(f.a,{className:"text-center"},r.a.createElement("a",{href:a.website,className:"btn btn-primary"},"View Source")))))},$=function(){var e=Object(n.useState)([]),a=Object(o.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)(!1),m=Object(o.a)(l,2),i=m[0],u=m[1];Object(n.useEffect)((function(){setInterval((u(!0),void S.a.get("https://api.coingecko.com/api/v3/events").then((function(e){console.log(e.data.data),c(e.data.data),u(!1)})).catch(console.error)),3e3)}),[]);return r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"mt-4 text-center"},"Top Upcoming Events"),r.a.createElement("hr",null),i?r.a.createElement("div",{class:"spinner"},r.a.createElement("div",{class:"d-flex justify-content-center"},r.a.createElement("div",{class:"spinner-border",role:"status"}))):r.a.createElement(s.a,{container:!0,spacing:2,style:{gap:"20px",justifyContent:"center"}},t.map((function(e,a){return r.a.createElement(Z,{events:e,i:a})}))))},ee=function(){return r.a.createElement(w.a,null,r.a.createElement(D,null),r.a.createElement("br",null),r.a.createElement(T.c,null,r.a.createElement(T.a,{path:"/",exact:!0,component:L}),r.a.createElement(T.a,{path:"/news",exact:!0,component:x}),r.a.createElement(T.a,{path:"/coindata/:id",exact:!0,component:U}),r.a.createElement(T.a,{path:"/exchanges",exact:!0,component:J}),r.a.createElement(T.a,{path:"/calculator",exact:!0,component:Q}),r.a.createElement(T.a,{path:"/events",exact:!0,component:$})))};t(115),t(116);l.a.render(r.a.createElement(ee,null),document.getElementById("root"))},69:function(e,a,t){e.exports=t(139)},74:function(e,a,t){},98:function(e,a,t){}},[[69,1,2]]]);
//# sourceMappingURL=main.f3239353.chunk.js.map