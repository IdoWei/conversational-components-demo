import { assertEquals } from "https://deno.land/std@0.50.0/testing/asserts.ts";
import MessagesService from '../services/messagesService.js';

Deno.test("Test echoMessage api with success", () => {
  const messagesService = new MessagesService();
  const MESSAGE_TO_ECHO = "TEST";
  const returnedMessage = messagesService.echoMessage(MESSAGE_TO_ECHO);

  assertEquals(returnedMessage, MESSAGE_TO_ECHO);
});