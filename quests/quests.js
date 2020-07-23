import quests from '../quest-data/quest-data.js';

import { findById, renderSection } from './questUtils.js';

const main = document.querySelector('main');

const questId = 'monsters';

const questData = findById(quests, questId);

const sectionEl = renderSection(questData);

main.append(sectionEl);

