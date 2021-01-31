var http = require('http');
var cookie = require('cookie');
http.createServer((request, response) => {
  console.log(request.headers.cookie);
  var cookies = {};
  if(request.headers.cookie !== undefined) {
    cookies = cookie.parse(request.headers.cookie);
  };
  console.log(cookies.yummy_cookie);
  response.writeHead(200, {
    'Set-Cookie':[
      'yummy_cookie=choco',
      'tasty_cookie=strawberry',
      `PermanentCookie=myPCookie; Max-age=${60*60*24*30}`,
      'SecureCookie=mySecure; Secure',
      'HttpOnly=myHttpOnly; HttpOnly',
      'Path=myPath; path=/cookie',
      'Domain=myDomain; Domain=o2.org'
    ]
  });
  response.end('Cookie!!');
}).listen(3000);