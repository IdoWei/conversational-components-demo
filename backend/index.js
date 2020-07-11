import { Application } from "https://deno.land/x/oak/mod.ts";
import { APP_HOST, APP_PORT } from "./config.js";
import router from "./routes.js";
import errorHandler from "./controllers/errorHandler.js";
import { oakCors } from "https://deno.land/x/cors/mod.ts";

const app = new Application();

app.use(oakCors());
app.use(async (ctx, next) => {
    const bodyData = await ctx.request.body();

    ctx.bodyData = bodyData?.value;
    await next();
});
app.use(errorHandler);
app.use(router.allowedMethods());
app.use(router.routes());


console.log(`Listening on port:${APP_PORT}...`);

await app.listen(`${APP_HOST}:${APP_PORT}`);