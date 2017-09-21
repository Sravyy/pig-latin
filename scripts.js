$(function(){
  var vowel = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
  var isVowel = function (inputChar) {
    for (var i = 0; i <= vowel.length; i++) {
      if (inputChar == vowel[i]) {
        return true;
      }
    }
    return false;
  }

  var isConsonant = function (inputChar) {
    return !isVowel(inputChar);
  }


  var pigLatinCase1 = function (inputStr){
    if (inputStr.length > 0
      && isVowel(inputStr[0])) {
        return inputStr + "way";
      }
      return inputStr;
    }

    var pigLatinCase2 = function(inputStr){
      var isConsecutiveConsonant = true;
      var outputStr = "";
      var consecutiveConsonants = "";
      for(var index = 0; index < inputStr.length; index++) {
        var eachChar = inputStr[index];
        if(isConsecutiveConsonant) {
          if(isVowel(eachChar)) {
            isConsecutiveConsonant = false;
            outputStr += eachChar;
          }
          else {
            consecutiveConsonants += eachChar;
          }
        }
        else {
           outputStr += eachChar;
        }
      }
      return outputStr + consecutiveConsonants + "ay";
    }

    $("#pig-latin").submit(function(event){
      event.preventDefault();
      var str = $("input#latin").val();
      var result = pigLatinCase1(str);
      $("#output1").text(result);

      result = pigLatinCase2(str);
      $("#output2").text(result);


    });
  });
