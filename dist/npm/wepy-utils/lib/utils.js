"use strict";var Utils={now:function(){return(new Date).getTime()},random:function(t,n){return null==n&&(n=t,t=0),t+Math.floor(Math.random()*(n-t+1))},param:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},n=arguments[1],r=[],e=!0,o=!1,a=void 0;try{for(var i,l=Object.keys(t)[Symbol.iterator]();!(e=(i=l.next()).done);e=!0){var u=i.value,c=t[u];r.push(u+"="+(n?c:encodeURIComponent(c)))}}catch(t){o=!0,a=t}finally{try{!e&&l.return&&l.return()}finally{if(o)throw a}}return r.length?"?"+r.join("&"):""},unparam:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",a=arguments[1],i={},n=t.split("?")[1];return n&&n.split("&").forEach(function(t,n){var r=t.split("="),e=r[0],o=r[1]||"";e&&(i[e]=a?o:decodeURIComponent(o))}),i}};module.exports=Utils;