"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Client_1 = __importDefault(require("../models/Client"));
const crypto_1 = require("crypto");
/**
 *
 * @param length
 * @returns
 */
function generateRandomString(length) {
    return (0, crypto_1.randomBytes)(Math.ceil(length / 2))
        .toString('hex')
        .slice(0, length);
}
/**
 *
 * @param numClients
 * @param nameLength
 */
function seedClients(numClients, nameLength = 10) {
    return __awaiter(this, void 0, void 0, function* () {
        const clients = Array.from({ length: numClients }, () => ({
            name: generateRandomString(nameLength),
            email: `${generateRandomString(5)}@example.com`,
            phone: `(123) ${Math.floor(Math.random() * 1000)}-${Math.floor(Math.random() * 10000)}`,
        }));
        try {
            // Use bulk insertion
            yield Client_1.default.insertMany(clients);
            console.log(`${numClients} clients successfully created!`);
        }
        catch (error) {
            console.error(error);
        }
    });
}
exports.default = seedClients;
