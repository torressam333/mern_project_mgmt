"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const react_1 = require("@testing-library/react");
require("@testing-library/jest-dom/vitest");
require("@testing-library/jest-dom");
(0, vitest_1.afterEach)(() => {
    (0, react_1.cleanup)();
});
