function a5_0x32db(){const _0x30bff6=['log/app.log','1630152TGqhOu','YYYY-MM-DD\x20HH:mm:ss','level','debug',']:\x20','Log\x20file\x20cleared','message','235758AfFaKZ','truncate','File','error','logger','37982HMHiuR','info','warn','2536248wierYV','2596396BwVjok','1fdjxOd','317596ikusey','7rukuXx','55DQtKdh','30GCORQq','7156017PZEUAe'];a5_0x32db=function(){return _0x30bff6;};return a5_0x32db();}const a5_0xefd077=a5_0x4548;function a5_0x4548(_0xf32fed,_0x15db4d){const _0x32db7f=a5_0x32db();return a5_0x4548=function(_0x4548a8,_0x43f432){_0x4548a8=_0x4548a8-0x115;let _0x250865=_0x32db7f[_0x4548a8];return _0x250865;},a5_0x4548(_0xf32fed,_0x15db4d);}(function(_0x32252c,_0x1959f0){const _0x4d8177=a5_0x4548,_0x579393=_0x32252c();while(!![]){try{const _0x3fff49=parseInt(_0x4d8177(0x123))/0x1*(-parseInt(_0x4d8177(0x11e))/0x2)+-parseInt(_0x4d8177(0x12a))/0x3+parseInt(_0x4d8177(0x124))/0x4*(parseInt(_0x4d8177(0x126))/0x5)+parseInt(_0x4d8177(0x119))/0x6*(parseInt(_0x4d8177(0x125))/0x7)+parseInt(_0x4d8177(0x121))/0x8+-parseInt(_0x4d8177(0x128))/0x9+-parseInt(_0x4d8177(0x127))/0xa*(-parseInt(_0x4d8177(0x122))/0xb);if(_0x3fff49===_0x1959f0)break;else _0x579393['push'](_0x579393['shift']());}catch(_0x2edafa){_0x579393['push'](_0x579393['shift']());}}}(a5_0x32db,0x8daed));import{createLogger,format,transports}from'winston';import a5_0x8c95 from'fs';const {combine,timestamp,printf,colorize}=format,customFormat=printf(({level:_0x447eb4,message:_0xae213,timestamp:_0x4e8102})=>{const _0x3c96f3=a5_0x4548;return _0x4e8102+'\x20['+_0x447eb4+_0x3c96f3(0x116)+_0xae213;});class Logger{constructor(){const _0x444ec4=a5_0x4548;this['logger']=createLogger({'level':'debug','format':combine(timestamp({'format':_0x444ec4(0x12b)}),colorize(),customFormat),'transports':[new transports['File']({'filename':_0x444ec4(0x129)})],'exceptionHandlers':[new transports['File']({'filename':_0x444ec4(0x129)})],'rejectionHandlers':[new transports[(_0x444ec4(0x11b))]({'filename':_0x444ec4(0x129)})]});}[a5_0xefd077(0x11f)](_0x407861){const _0x337612=a5_0xefd077;this[_0x337612(0x11d)]['info'](_0x407861);}[a5_0xefd077(0x120)](_0xc13306){const _0x50fab0=a5_0xefd077;this[_0x50fab0(0x11d)]['warn'](_0xc13306);}['error'](_0x4bbe7e){const _0x185aaa=a5_0xefd077;this[_0x185aaa(0x11d)][_0x185aaa(0x11c)](_0x4bbe7e);}['debug'](_0x2d7f36){const _0x39091e=a5_0xefd077;this[_0x39091e(0x11d)][_0x39091e(0x115)](_0x2d7f36);}['setLevel'](_0x43d9f6){const _0x5b4ba4=a5_0xefd077;this['logger'][_0x5b4ba4(0x12c)]=_0x43d9f6;}['clear'](){const _0x3e291c=a5_0xefd077;a5_0x8c95[_0x3e291c(0x11a)](_0x3e291c(0x129),0x0,_0xa343cb=>{const _0x33ab7b=_0x3e291c;_0xa343cb?this['logger'][_0x33ab7b(0x11c)]('Failed\x20to\x20clear\x20the\x20log\x20file:\x20'+_0xa343cb[_0x33ab7b(0x118)]):this[_0x33ab7b(0x11d)][_0x33ab7b(0x11f)](_0x33ab7b(0x117));});}}export default new Logger();