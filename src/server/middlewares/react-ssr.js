import React from 'react';
import Index from '../../client/pages/index';
import { renderToString } from 'react-dom/server';

export default (ctx, next) => {
  const html = renderToString(<Index />);
  ctx.body = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>
    <div id="root">
      ${html}
       <h3>server side render!</h3>
    </div>
   
  </body>
  </html>
  <script type="text/javascript" src="index.js"></script>
  `;
  return next();
}