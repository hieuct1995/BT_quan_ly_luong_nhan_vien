"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WageList_1 = require("./WageList");
var wageListOfEmp = new WageList_1.WageList();
wageListOfEmp.insertFirst(1, 10000000);
wageListOfEmp.insertFirst(2, 18000000);
wageListOfEmp.insertFirst(2, 15000000);
wageListOfEmp.insertFirst(5, 12000000);
wageListOfEmp.insertLast(5, 22000000);
wageListOfEmp.insertLast(8, 19000000);
wageListOfEmp.insertLast(7, 19000000);
console.table(wageListOfEmp.showList());
console.log(wageListOfEmp.calculateWageSum());
console.log(wageListOfEmp.findMaxWageMonth());