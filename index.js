#! user/bin/env node
import inquirer from "inquirer";
const answer1 = await inquirer.prompt([{
        message: "Enter your weight in kg", type: "number", name: "weight"
    }]);
const answer2 = await inquirer.prompt([{
        message: "Enter your height in Meters", type: "number", name: "meters"
    }]);
let weightInkg = 65; //65kg
let heightInmeters = 1.68; //1.68m
let bmi = weightInkg / (heightInmeters * heightInmeters);
console.log(`Your BMI is ${bmi}`);
