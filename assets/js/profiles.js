import { initAnchors } from './navigation.js';
import { initContents } from './toc.js';
import { rotateTeam } from './team.js';
import { initInstagram } from './media/instagram.js';

const main = document.querySelector('main');
const defaultVisible = matchMedia('(min-width: 761px)').matches;
initContents(main, { defaultVisible });
initAnchors();
rotateTeam(main);
initInstagram(main);
