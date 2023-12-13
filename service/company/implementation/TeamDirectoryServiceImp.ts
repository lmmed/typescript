import { Team } from "../../../model/company/Team";
import { ITeamDirectoryService } from "../ITeamDirectoryService";

export class TeamDirectoryServiceImpl implements ITeamDirectoryService {
    private teams: Team[]= [];
    addTeam(team: Team) {
        this.teams.push(team)
    }
    showAll(){
        this.teams.forEach(
            team => console.log(team)
            
        );
    }
    removeTeam(team: Team) {
        this.teams.filter((e) => team.name !== e.name)
    }
}