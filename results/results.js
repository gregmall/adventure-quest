import { getUser } from '../userUtils.js';

 
const userResults = getUser();
console.log(userResults);

const results = document.getElementById('results');

if (userResults.hp <= 0) { 
   
    
    results.textContent = 'Sorry ' + userResults.class + ' ' + userResults.name + '.  You died.  You should really be more careful.  RIP.';

} else {
    results.textContent = 'Hey ' + userResults.name + '!  You ended up with ' + userResults.gold + ' dollars and ' + userResults.hp + ' life left!';
}

const myButton = document.getElementById('reset');

myButton.addEventListener('click', () => {
    
    window.location = '../index.html';

});
    

