"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var app = (0, express_1["default"])();
var PORT = 8080;
app.get("/", function (req, res) {
    res.send("Hello world!");
});
app.listen(PORT, function () {
    // tslint:disable-next-line:no-console
    console.log("server started at http://localhost:".concat(PORT));
});
//# sourceMappingURL=index.js.map