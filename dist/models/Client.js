"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**Mongoose model for Client */
const mongoose_1 = __importDefault(require("mongoose"));
const ClientSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phone: {
        type: String,
    },
    // Add an isDeleted field for soft deletes
    isDeleted: {
        type: Boolean,
        default: false,
    },
});
exports.default = mongoose_1.default.model('Client', ClientSchema);
