import { Employee } from "../model/Employee";
import { Team } from "../model/Team";
import { Developpeur } from "../model/Developpeur";
import { Vendeur } from "../model/Vendeur";

abstract class Directory<T extends Employee<string | number> | Team> {
  protected members: T[];

  constructor(members: T[]) {
    this.members = members;
  }

  addMembers(members: T[]) {
    this.members.push(...members);
  }

  getMembers() {
    return this.members;
  }

  deleteMember(member: T) {
    this.members = this.members.filter((m) => m !== member);
  }
  deleteMemberByIndex(index: number) {
    if (index === 0) {
      this.members = this.members.slice(1);
    } else if (index === this.members.length) {
      this.members = this.members.slice(0, -1);
    } else {
      this.members = [
        ...this.members.slice(0, index),
        ...this.members.slice(index + 1),
      ];
    }
  }

  abstract findByName(name: string): T | undefined;
}

class GroupDirectory extends Directory<Team> {
  findByName(name: string) {
    return this.members.find((member) => member.name === name);
  }
}

class EmployeeDirectory extends Directory<Employee<string | number>> {
  findByName(name: string) {
    return this.members.find((member) => member.lastName === name);
  }
}

const employee1 = new Developpeur(1, "Mohammed", "Lamhaouar", 100);
const employee2 = new Vendeur("2", "Jack", "Riley", 100, 5);
const marketing = new Team("Marketing");
const finance = new Team("Finance");

const ed = new EmployeeDirectory([employee1, employee2]);
new GroupDirectory([marketing, finance]);

ed.deleteMember(employee1);
