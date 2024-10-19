import { CreateServer } from "./app";

const PORT = process.env.PORT || 4000;

async function server() {
  const app = await CreateServer();
  app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
  });
}

server();
