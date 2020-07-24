import quests from '../quest-data/quest-data.js';

import { findById, renderSection } from './questUtils.js';

const main = document.querySelector('main');

const params = new URLSearchParams(window.location.search);
const nextButton = document.querySelector('#next');
const questId = params.get('id');
console.log(questId);
const questData = findById(quests, questId);
console.log(questData);

const sectionEl = renderSection(questData);
nextButton.addEventListener('click', () => { 
    window.location = '../maps/index.html';


});

main.append(sectionEl);