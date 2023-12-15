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
const node_fetch_1 = __importDefault(require("node-fetch"));
class EmployeeDirectory {
    constructor() {
        this.list = [];
    }
    fetchList() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield (0, node_fetch_1.default)('https://657aa1961acd268f9afb6388.mockapi.io/api/emplyee/all', { signal: AbortSignal.timeout(5000) });
                const json = yield res.json();
                this.list = json;
            }
            catch (e) {
                throw new Error("Erreur dans dans la requête");
            }
        });
    }
    addEmployee(employee) {
        this.list.push(employee);
    }
    removeEmployee(employee) {
        this.list = this.list.filter((currentEmployee) => currentEmployee !== employee);
    }
    getList() {
        return this.list;
    }
}
exports.default = EmployeeDirectory;
//# sourceMappingURL=EmployeeDirectory.js.map