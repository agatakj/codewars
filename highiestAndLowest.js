/*In this little assignment you are given a string of space separated numbers, 
and have to return the highest and lowest number. #avatar
highAndLow("1 2 3 4 5"); // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5" */

function highAndLow(numbers){
    var arrange =numbers.split(' ');
    var max = arrange[0],min =arrange[0];
    for(var i = 0;i<arrange.length;i++){
      if(parseInt(arrange[i]) > max){
        max = arrange[i];
      }
      if(parseInt(arrange[i]) < min){
        min = arrange[i]
      }
    }
    var result = max + ' ' + min;
    return result;   //return
    
  
  }
  
  /*
  Test Results:
  Test Passed: Value == '542 -214'
  Test Passed: Value == '1 -1'
  Test Passed: Value == '1 1'
  Test Passed: Value == '-1 -1'
  Test Passed: Value == '1 -1'
  Test Passed: Value == '1 0'
  Test Passed: Value == '0 -1'
  Test Passed: Value == '42 42'
  */
  
  