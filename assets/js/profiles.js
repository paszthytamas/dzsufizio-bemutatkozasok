import { initAnchors } from './navigation.js';
import { initContents } from './toc.js?v=2';
import { shuffleTeam } from './team.js?v=2';
import { initInstagram } from './media/instagram.js?v=4';

const main = document.querySelector('main');
initContents(main);
initAnchors();
shuffleTeam(main);
window.addEventListener('pageshow', event => {
  if (event.persisted) shuffleTeam(main);
});
initInstagram(main);
