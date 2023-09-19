const element = document.getElementById("level");

function findLevel() {
  let levelCount = 0;
  let currentElement = element;
  while (currentElement.parentNode) {
    currentElement = currentElement.parentNode;
    levelCount++;
  }
  return levelCount;
}

alert(findLevel());