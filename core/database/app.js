

//https://www.youtube.com/watch?v=WfCJ3sHnLBM&t=1162s
    const express = require("express");
    const app = express();


    // ALL APIs

    // defauls
    app.get("/api", (req, res) => {
        res.json({
            success: 1,
            message: "This is the default API"
        });
    });


    app.listen(process.env.app.APP_PORT, () => {
        console.log("Server up and running");
        console.log("port -> ", process.env.app.APP_PORT);
    });