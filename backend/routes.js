import { Router } from "https://deno.land/x/oak/mod.ts";

import echoMessage from "./controllers/messages/echoMessage.js";

const router = new Router();

router
  .post("/messages/echo-message", echoMessage)
  
export default router;