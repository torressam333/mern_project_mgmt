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
const faker_1 = require("@faker-js/faker");
function createRandomClient() {
    return {
        id: faker_1.faker.string.uuid(),
        name: faker_1.faker.internet.userName(),
        email: faker_1.faker.internet.email(),
        phone: faker_1.faker.phone.number(),
    };
}
const CLIENTS = faker_1.faker.helpers.multiple(createRandomClient, {
    count: 10,
});
const seedClients = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield Client_1.default.insertMany(CLIENTS);
    }
    catch (error) {
        throw new Error(`Problem with client seeder: ${error}`);
    }
});
exports.default = seedClients;
