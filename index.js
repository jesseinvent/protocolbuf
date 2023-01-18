const Schema = require("./employee_pb");
const fs = require("fs");

const jesse = new Schema.Employee();

jesse.setId(1001);
jesse.setName("Jesse");
jesse.setSalary(10001);

const admed = new Schema.Employee();

admed.setId(1002);
admed.setName("Admed");
admed.setSalary(9000);

const rick = new Schema.Employee();

rick.setId(1003);
rick.setName("Rick");
rick.setSalary(6000);

const employees = new Schema.Employees();

employees.addEmployees(jesse);
employees.addEmployees(admed);
employees.addEmployees(rick);

// Serialize Object
const bytes = employees.serializeBinary();

console.log(`Binary ${bytes}`);

fs.writeFileSync("binary", bytes);

// Deserialize Object
const employees2 = Schema.Employees.deserializeBinary(bytes);

console.log(employees2.toString());
