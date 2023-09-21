import { Elysia } from "elysia";

const app = new Elysia().get("/", () => "Hello World!").listen(process.env.PORT!);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
