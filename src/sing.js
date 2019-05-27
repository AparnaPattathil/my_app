function sing(numberOfBottles) {
  const lastVerse = `No more bottles of beer on the wall, no more bottles of beer. 
    Go to the store and buy some more, 99 bottles of beer on the wall.`;
  const secondLastVerse = `1 bottle of beer on the wall, 1 bottle of beer.
    Take one down and pass it around, no more bottles of beer on the wall.`;
  if (numberOfBottles === 3) {
    return `${gimmeParagraph(3)}

    ${gimmeParagraph(2)}

    ${secondLastVerse}

    ${lastVerse}`;
  }
  if (numberOfBottles === 1) {
    return `${secondLastVerse}

    ${lastVerse}`;
  }
  return lastVerse;
}

function gimmeParagraph(numberOfBottles) {
  return `${numberOfBottles} bottles of beer on the wall, ${numberOfBottles} bottles of beer.
    Take one down and pass it around, ${numberOfBottles - 1} bottles
       of beer on the wall.`;
}

export default sing;
