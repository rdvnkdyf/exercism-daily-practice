export class List {
  constructor(newList) {
    this.array = newList || [];
  }
  
  compare(listTwoObj) {
    let result = undefined
    let sublistStart = 0
    const listOne = this.array
    const listTwo = listTwoObj.array
    const listOneJoined = listOne.join()
    const listTwoJoined = listTwo.join()
    if(listOne.length < listTwo.length){
      if(listTwoJoined.includes(listOneJoined)){
        result = "SUBLIST"
      }
      else result = "UNEQUAL"
    }
    else if(listTwo.length < listOne.length){
      if(listOneJoined.includes(listTwoJoined)){
        result = "SUPERLIST"
      }
      else result = "UNEQUAL"
    }
    else if(listOne.length === listTwo.length){
      if(listOne.length === 0 && listTwo.length === 0){
        result = "EQUAL"
      }
      listOne.forEach((listItem, idx) => {
        if(listItem === listTwo[idx]){
          result = "EQUAL"
        }
        else {
          result = "UNEQUAL"
        }
      })
    }
      return result
    }
  }