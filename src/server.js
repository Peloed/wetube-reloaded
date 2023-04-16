import express from "express";
import morgan from "morgan";
// const express = require("express");
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const PORT = 4000;

const app = express();
const logger = morgan("common");
// dev: GET / 200 5.875 ms - 4
// combined : 
// ::1 - - [28/Mar/2023:22:08:28 +0000] "GET / HTTP/1.1" 304 - "-" 
// "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36"
// tiny : GET / 304 - - 2.452 ms
// common : ::1 - - [28/Mar/2023:22:10:22 +0000] "GET / HTTP/1.1" 304 -


app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger);
// useを使うと、全てのルートにmiddlewhereを通す。

app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);








const handleListening = () => console.log(`Server listenting on port: http://localhost:${PORT}`);

app.listen(PORT, handleListening);


