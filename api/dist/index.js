"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var register_1 = __importDefault(require("./routes/register"));
var app = (0, express_1["default"])();
var PORT = 8080;
app.get("/", function (req, res) {
    res.send("Hello world!");
});
app.use(express_1["default"].json());
app.use((0, cors_1["default"])());
app.use("/register", register_1["default"]);
app.listen(PORT, function () {
    console.log("server started at http://localhost:".concat(PORT));
});
//# sourceMappingURL=index.js.map