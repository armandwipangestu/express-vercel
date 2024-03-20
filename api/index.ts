const express = require("express");
const app = express();
const port = 5000;

const datas = [
    {
        uuid: "55d4a0e6-1923-4a88-a148-408e510accf4",
        name: "John Doe",
    },
    {
        uuid: "da5913a3-f91e-4b39-868b-c12deacae2be",
        name: "Jane Doe",
    },
];

const getData = () => {
    return datas;
};

app.get("/", (req, res) => {
    const data = getData();
    res.send({
        ok: true,
        status: 200,
        data,
    });
});

app.listen(port, () => {
    console.log(`Server ready on localhost:${port}`);
});

module.exports = app;
