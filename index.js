const franc = require("franc");
const langs = require("langs");
const colors = require('colors')
const argvTwo = process.argv[2];
const langSentence = argvTwo.toString()

const langCode = franc(langSentence)
const langName = langs.where("3", langCode)

if (langName) {
    console.log(colors.green(langName.name));
} else {
    console.log(colors.red("Could not match a language. Please try again with a larger sample"))
}