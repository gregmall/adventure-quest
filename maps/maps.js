import quests from '../quest-data/quest-data.js';
import { getUser } from '../userUtils.js';



const player = getUser();

if (player.hp <= 0){

    window.location = '../results/index.html';
}

const section = document.querySelector('section');
let questsCompleted = 0;



for (let i = 0; i < quests.length; i ++) {
    const quest = quests[i];
    
    if (player.completed[quest.id]){
        questsCompleted ++;
    }

}
if (questsCompleted === quests.length){
    window.location = '../results/index.html';
}
for (let i = 0; i < quests.length; i++){
    const quest = quests[i];
    if (player.completed[quest.id]){
        const span = document.createElement('span');
        span.textContent = quest.title;
        span.style.textDecoration = 'strikethrough';
        section.append(span);

    } else {
        const a = document.createElement('a');
        a.textContent = quest.title;
        a.href = '/quests/?id=' + quest.id;
        section.append(a);
    }

}
