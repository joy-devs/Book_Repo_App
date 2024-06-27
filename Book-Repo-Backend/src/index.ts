import { serve } from "@hono/node-server";
import { Hono } from 'hono';
import "dotenv/config";
import { booksRouter } from "./books/books.router"; 

const app = new Hono();

app.get("/", (c) => {
  return c.text('The server is running');
});

app.route("/api", booksRouter); 

const PORT = process.env.PORT || 3000; 

console.log(`Server is running on port ${PORT}`);

serve({
  fetch: app.fetch.bind(app),
  port: Number(PORT)
});
