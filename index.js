const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');


function Logo(color, char, shape) {
    this.color = color;
    this.char = char;
    this.shape = shape;
    this.generateLogo = function() {
        console.log('???');
    };
}

const questions = [
    {
        type: 'list',
        message: 'What color background?',
        name: 'color',
        choices: ['red', 'yellow', 'blue'],
    },
    {
        type: 'input',
        message: 'What characters?',
        name: 'char',
    },
    {
        type: 'list',
        message: 'What shape?',
        name: 'shape',
        choices: ['circle', 'square'],
    }
];

var userLogo = new Logo('red', 'SVG', 'circle')

inquirer.prompt(questions).then((writeFile) => {
    console.log(data)
})

//.generateLogo();