const a5_0x25dd01=a5_0x3e73;function a5_0xf6ba(){const _0x167fe5=['debug','546352cIuMDn','File','Failed\x20to\x20clear\x20the\x20log\x20file:\x20','13507fEJlBl','42IMGvpO','clear','warn','1929179THQJYH','Log\x20file\x20cleared','1495384rGjkGz','error','logger','2530224XCYbhz','10cmNYrm','message','info','truncate','log/app.log','813801kdBJBf','8IJRAmH','18ajHRyE',']:\x20','201010haBFbL','YYYY-MM-DD\x20HH:mm:ss'];a5_0xf6ba=function(){return _0x167fe5;};return a5_0xf6ba();}(function(_0x2e642b,_0x173a7a){const _0x1e975b=a5_0x3e73,_0x2f5779=_0x2e642b();while(!![]){try{const _0x3a39e8=-parseInt(_0x1e975b(0x81))/0x1*(parseInt(_0x1e975b(0x92))/0x2)+parseInt(_0x1e975b(0x90))/0x3+parseInt(_0x1e975b(0x7e))/0x4+parseInt(_0x1e975b(0x94))/0x5*(parseInt(_0x1e975b(0x82))/0x6)+parseInt(_0x1e975b(0x85))/0x7*(-parseInt(_0x1e975b(0x91))/0x8)+-parseInt(_0x1e975b(0x8a))/0x9+-parseInt(_0x1e975b(0x8b))/0xa*(-parseInt(_0x1e975b(0x87))/0xb);if(_0x3a39e8===_0x173a7a)break;else _0x2f5779['push'](_0x2f5779['shift']());}catch(_0x1ec588){_0x2f5779['push'](_0x2f5779['shift']());}}}(a5_0xf6ba,0x23de5));function a5_0x3e73(_0x333c94,_0x5f2cd7){const _0xf6bae1=a5_0xf6ba();return a5_0x3e73=function(_0x3e73d2,_0x233223){_0x3e73d2=_0x3e73d2-0x7d;let _0x4b958f=_0xf6bae1[_0x3e73d2];return _0x4b958f;},a5_0x3e73(_0x333c94,_0x5f2cd7);}import{createLogger,format,transports}from'winston';import a5_0x59a7a0 from'fs';const {combine,timestamp,printf,colorize}=format,customFormat=printf(({level:_0x44e687,message:_0x240bdf,timestamp:_0x104bc6})=>{const _0x33f2fa=a5_0x3e73;return _0x104bc6+'\x20['+_0x44e687+_0x33f2fa(0x93)+_0x240bdf;});class Logger{constructor(){const _0xf29a50=a5_0x3e73;this[_0xf29a50(0x89)]=createLogger({'level':_0xf29a50(0x7d),'format':combine(timestamp({'format':_0xf29a50(0x95)}),colorize(),customFormat),'transports':[new transports['File']({'filename':_0xf29a50(0x8f)})],'exceptionHandlers':[new transports['File']({'filename':_0xf29a50(0x8f)})],'rejectionHandlers':[new transports[(_0xf29a50(0x7f))]({'filename':_0xf29a50(0x8f)})]});}[a5_0x25dd01(0x8d)](_0x4a2699){this['logger']['info'](_0x4a2699);}[a5_0x25dd01(0x84)](_0x571e94){const _0xe5e8f2=a5_0x25dd01;this[_0xe5e8f2(0x89)][_0xe5e8f2(0x84)](_0x571e94);}['error'](_0x121744){const _0x5bfb8d=a5_0x25dd01;this['logger'][_0x5bfb8d(0x88)](_0x121744);}['debug'](_0x243516){const _0x57a25c=a5_0x25dd01;this[_0x57a25c(0x89)]['debug'](_0x243516);}['setLevel'](_0x37b2b3){this['logger']['level']=_0x37b2b3;}[a5_0x25dd01(0x83)](){const _0x3e9990=a5_0x25dd01;a5_0x59a7a0[_0x3e9990(0x8e)](_0x3e9990(0x8f),0x0,_0x4b4500=>{const _0x3cfbe5=_0x3e9990;_0x4b4500?this[_0x3cfbe5(0x89)]['error'](_0x3cfbe5(0x80)+_0x4b4500[_0x3cfbe5(0x8c)]):this[_0x3cfbe5(0x89)][_0x3cfbe5(0x8d)](_0x3cfbe5(0x86));});}}export default new Logger();