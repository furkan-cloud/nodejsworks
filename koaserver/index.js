const Koa = require("koa");
const Router = require("@koa/router");

const app = new Koa();
const router = new Router();

app.use(router.routes()).use(router.allowedMethods());

router.get("/", (ctx, next) => {
  // ctx.router available
  ctx.body = "<h1>Welcome to Index Page</h1>";
  ctx.status = 200;
});

router.get("/about", (ctx, next) => {
  // ctx.router available
  ctx.body = "<h1>Welcome to About Page</h1>";
  ctx.status = 200;
});

router.get("/contact", (ctx, next) => {
  // ctx.router available
  ctx.body = "<h1>Welcome to Contact Page</h1>";
  ctx.status = 200;
});

app.listen(3000);
