import httpContext from 'express-http-context';

export function loggingBefore (request: any, response: any, next?: (err?: any) => any): any {
  console.log('______________');
  console.log('do something Before...');
  console.log('set traceId = 123');
  httpContext.set('traceId', 123);
  next();
}
