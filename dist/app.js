"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.send("hii there");
});
app.get("/owner", (req, res) => {
    res.send("this is ritesh");
});
app.get("/username:id", (req, res) => {
    const name = req.params.id;
    console.log(name);
    res.send(name);
});
app.listen(3000, () => console.log("Server is listening at port 3000"));
