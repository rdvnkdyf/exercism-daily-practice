export const recite = (fromVerse, toVerse) => {
  // set from and to verse values to match index
  fromVerse -= 1;
  toVerse = toVerse ? toVerse - 1 : fromVerse;
  const verseValues = [
    ['first', 'a Partridge in a Pear Tree.'],
    ['second', 'two Turtle Doves, '],
    ['third', 'three French Hens, '],
    ['fourth', 'four Calling Birds, '],
    ['fifth', 'five Gold Rings, '],
    ['sixth', 'six Geese-a-Laying, '],
    ['seventh', 'seven Swans-a-Swimming, '],
    ['eighth', 'eight Maids-a-Milking, '],
    ['ninth', 'nine Ladies Dancing, '],
    ['tenth', 'ten Lords-a-Leaping, '],
    ['eleventh', 'eleven Pipers Piping, '],
    ['twelfth', 'twelve Drummers Drumming, '],
  ];
  let verses = '';
  // start at the from verse and go to the from verse
  for (let index = fromVerse; index <= toVerse; index++) {
    verses += `On the ${verseValues[index][0]} day of Christmas my true love gave to me: ${verseValues[index][1]}`;
    // add the remaining sections for the verse
    for (let i = index - 1; i >= 0; i--) {
      verses += i == 0 ? `and ${verseValues[i][1]}` : verseValues[i][1];
    }
    // 2 line feeds after all but last verse
    verses += index == toVerse ? '\n' : '\n\n';
  }
  return verses;
};