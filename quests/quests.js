import quests from '../quest-data/quest-data.js';

import { findById, renderSection } from './questUtils.js';

const main = document.querySelector('main');

const params = new URLSearchParams(window.location.search);

const questId = params.get('id');

const questData = findById(quests, questId);

const sectionEl = renderSection(questData);

main.append(sectionEl);

