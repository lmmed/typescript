import Employee from "./class/Employee";
import Group from "./class/Group";

const mohamed = new Employee({firstName: 'Mohamed', lastName: "LAMHAOUAR"});
const marketingGroup = new Group("Marketing");
marketingGroup.addMember(mohamed);

const financeGroup = new Group("Finance");
const jack = new Employee({firstName: 'Jack', lastName: "RILEY"});
financeGroup.addMember(jack);