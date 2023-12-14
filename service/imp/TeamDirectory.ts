import Employee from "../../model/Employee";
import Team from "../../model/Team";

export default class TeamDirectory {
  private list: Team[] = [];

  addTeam(team: Team): void {
    this.list.push(team);
  }

  removeTeam(team: Team): void {
    this.list = this.list.filter((currentTeam) => currentTeam !== team);
  }

  addEmployeeToGroup(team: Team, employee: Employee) {
    team.addMember(employee);
  }

  findTeam(name: string): Team | undefined {
    return this.list.find((currentTeam) => currentTeam.name === name);
  }

  getList(): Team[] {
    return this.list;
  }
}
