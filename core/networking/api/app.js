
// https://www.youtube.com/watch?v=WfCJ3sHnLBM&list=PLYoT8TSz6owA2fyygjVVVg4EUJCCQoMh_&index=1&t=892s
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


    app.listen(3600, () => {
        console.log("Server up and running");
    });