export function shuffleTeam(root) {
  const grid = root.querySelector('[data-rotate]');
  if (!grid || grid.children.length < 2) return;

  const cards = Array.from(grid.children);
  for (let index = cards.length - 1; index > 0; index--) {
    const otherIndex = Math.floor(Math.random() * (index + 1));
    const card = cards[index];
    cards[index] = cards[otherIndex];
    cards[otherIndex] = card;
  }
  grid.append(...cards);
}

// Older cached entry scripts import rotateTeam.
export { shuffleTeam as rotateTeam };
