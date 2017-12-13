/*An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
Implement a function that determines whether a string that contains only letters is an 
isogram. 
Assume the empty string is an isogram. Ignore letter case. #avatar*/


function isIsogram(str){
    if (str.isEmpty) {
        return true;
      } else {
        str = str.toLowerCase(); //lower case
      }
      var array = str.split('');
      var sortedArr = array.slice().sort();
    
      for (var i = 0; i < array.length; i++) {
       
        if (sortedArr[i + 1] == sortedArr[i]) { //if letters repeat return false
          return false;
        }
      }
      //else return true
      return true;
    }