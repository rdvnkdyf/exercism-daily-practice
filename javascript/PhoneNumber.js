//
// This is only a SKELETON file for the 'Phone Number' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const clean = (input) => {
  if(/[a-z]/gi.test(input)){throw new Error('Letters not permitted') }
  if(/([\072-\100])/gi.test(input)){throw new Error('Punctuations not permitted') }
  if(input.match(/\d/gi).length < 10){ throw new Error('Must not be fewer than 10 digits') }
  if(input.match(/\d/gi).length > 11){ throw new Error('Must not be greater than 11 digits') }
  let toReturn = input.match(/\d/gi)
  if(toReturn.length == 11){
    if(toReturn[0] != '1'){throw Error('11 digits must start with 1')}
    toReturn = toReturn.slice(1)
    if(toReturn[0] == 0){throw Error('Area code cannot start with zero')}
    if(toReturn[0] == 1){throw Error('Area code cannot start with one')}
    if(toReturn[3] == 0){throw Error('Exchange code cannot start with zero')}
    if(toReturn[3] == 1){throw Error('Exchange code cannot start with one')}
    return toReturn.join('')
  }
  if(toReturn.length == 10){
    if(toReturn[0] == 0){throw Error('Area code cannot start with zero')}
    if(toReturn[0] == 1){throw Error('Area code cannot start with one')}
    if(toReturn[3] == 0){throw Error('Exchange code cannot start with zero')}
    if(toReturn[3] == 1){throw Error('Exchange code cannot start with one')}
    return toReturn.join('')
  }
};

