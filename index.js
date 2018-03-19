const fs = require('fs'),
        ini = require('ini'),
        home = require('os').homedir();


const gistPath = "C:\\src\\others\\gitconfig\\.gitconfig";
const gitconfigPath = home + '/.gitconfig';

const newConfig = ini.parse(fs.readFileSync(gistPath, 'utf-8'))
const oldConfig = ini.parse(fs.readFileSync(gitconfigPath, 'utf-8'))

oldConfig.alias = newConfig.alias

console.log("appending new aliases to .gitconfig file...");

fs.writeFileSync(gitconfigPath, ini.stringify(oldConfig));

console.log("Done!");
console.log("----------------------");
console.log("To be able to use the newly added aliases, please restart your console.");