import Team from "../model/Team";

export default interface ITeamDirectory {
  list: Team[];

  addTeam(team: Team): void;

  removeTeam(team: Team): void;

  getList(): Team[];
}

