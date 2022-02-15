import {timesTwo} from "./functions";

test("Multiplies by two", () => {
    expect(timesTwo(4)).toBe(8);
})

//this is called "test driven development"

//using jest that is configured as part of create-react-app
// Multiplies by two is test name
// () => { expect(timesTwo(4)).toBe(8);} => pass the callback function
// and then call the function(timesTwo(4)) and match to be toBe(8)) using expect

// I got the error below when I run the command "npm test" 
// Failed to initialize watch plugin "node_modules/jest-watch-typeahead/filename.js"
// You need to install specifically v0.6.5 of jest-watch-typeahead
// npm i -D --exact jest-watch-typeahead@0.6.5
//and then all good