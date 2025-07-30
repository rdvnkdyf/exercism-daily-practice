//
// This is only a SKELETON file for the 'Food Chain' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Song {
  verse(num) {
    return this.verses(num);
  }

  verses(from,to = from) {
       const animals = {
    1:['fly',"I don't know why she swallowed the fly. Perhaps she'll die."],
    2:['spider',"It wriggled and jiggled and tickled inside her."],
    3:['bird',"How absurd to swallow a bird!"],
    4:['cat',"Imagine that, to swallow a cat!"],
    5:['dog',"What a hog, to swallow a dog!"],
    6:['goat',"Just opened her throat and swallowed a goat!"],
    7:['cow',"I don't know how she swallowed a cow!"],
    8:['horse',"She's dead, of course!"]
  }
  let finalSong = '';
  let number = from;
  let difference = from === to;  
  do{
  finalSong = finalSong + `I know an old lady who swallowed a ${animals[number][0]}.` + '\n';
  finalSong = finalSong + animals[number][1]+'\n';
  if(number > 1 && number < 8){
  do{
    if(animals[from-1][0] === 'spider'){
      finalSong = finalSong + `She swallowed the ${animals[from][0]} to catch the ${animals[from-1][0]} that wriggled and jiggled and tickled inside her.`+'\n';
    }else{
      finalSong = finalSong + `She swallowed the ${animals[from][0]} to catch the ${animals[from-1][0]}.`+'\n';
    }
    from--;
  }
  while(from > 1);
    finalSong = finalSong + animals[1][1]+ '\n';
  } 
   if(number < to){
    finalSong = finalSong + '\n';
  }  
  number++;
  from = number;  
  }
  while(number <= to);
  difference === true ? finalSong : finalSong += '\n'  
  return finalSong;
  }
  
}