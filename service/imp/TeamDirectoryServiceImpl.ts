import { Team } from "../../model/Team";
import { TeamDirectoryService } from "../TeamDirectoryService";

export class TeamDirectoryServiceImpl implements TeamDirectoryService {
  private teams: Team[];

  constructor(teams: Team[]) {
    this.teams = teams;
  }

  addTeams(teams: Team[]) {
    this.teams.push(...teams);
  }

  getTeams() {
    return this.teams;
  }

  deleteTeam(team: Team) {
    this.teams = this.teams.filter((e) => e !== team);
  }
  deleteTeamByIndex(index: number) {
    if (index === 0) {
      this.teams = this.teams.slice(1);
    } else if (index === this.teams.length) {
      this.teams = this.teams.slice(0, -1);
    } else {
      this.teams = [
        ...this.teams.slice(0, index),
        ...this.teams.slice(index + 1),
      ];
    }
  }
  findByName(name: string) {
    return this.teams.find((team) => team.name === name);
  }
}