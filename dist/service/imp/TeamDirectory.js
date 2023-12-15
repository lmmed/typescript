"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TeamDirectory {
    constructor() {
        this.list = [];
    }
    addTeam(team) {
        this.list.push(team);
    }
    removeTeam(team) {
        this.list = this.list.filter((currentTeam) => currentTeam !== team);
    }
    addEmployeeToGroup(team, employee) {
        team.addMember(employee);
    }
    findTeam(name) {
        return this.list.find((currentTeam) => currentTeam.name === name);
    }
    getList() {
        return this.list;
    }
}
exports.default = TeamDirectory;
//# sourceMappingURL=TeamDirectory.js.map