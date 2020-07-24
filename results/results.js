import { getUser } from '../userUtils.js';

 
const userResults = getUser();
console.log(userResults);

const results = document.getElementById('results');


results.textContent = 'Hey ' + userResults.name + '!  You ended up with ' + userResults.gold + ' dollars and ' + userResults.hp + ' life left!'

