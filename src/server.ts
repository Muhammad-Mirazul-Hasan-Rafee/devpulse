import app from "./app";
import config from "./config";
import { initDB } from "./DB";

const main = () =>{
  initDB();

  app.listen(config.port, ()=>{
    console.log(`Devpulse is running on port ${config.port}`)
  });
};
main();