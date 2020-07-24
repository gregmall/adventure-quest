import { getUser } from '../userUtils.js'

const userResults = getUser();
console.log(userResults);

const section = document.createElement('section');

   
  
section.textContent = 'You ended up with : ' + userResults.hp; + ' life left and ' + userResults.gold + ' gold.';
console.log(userResults.hp);
console.log(userResults.gold);
console.log(section);
