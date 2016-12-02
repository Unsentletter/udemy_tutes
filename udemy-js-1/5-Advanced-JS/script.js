(function(){

  var popup

  var question1 = function() {
    console.log('Who is the best?');
    console.log('0 - Tristan');
    console.log('1 - Not Tristan');
    console.log('2 - Someone else');

    popup = prompt("Enter the number to answer the question")

    if (popup === '0') {
      console.log('Spot on')
    } else {
      console.log('Try again buddy')
    }

  }

  var question2 = function() {
    console.log('Who is the worst?');
    console.log('0 - Tristan');
    console.log('1 - Not Tristan');
    console.log('2 - Someone else');

    popup = prompt("Enter the number to answer the question")

    if (popup === '1') {
      console.log('Spot on')
    } else {
      console.log('Try again buddy')
    }

  }

  var question3 = function() {
    console.log('Who is the Tristan?');
    console.log('0 - Tristan');
    console.log('1 - Not Tristan');
    console.log('2 - Someone else');

    popup = prompt("Enter the number to answer the question")

    if (popup === '0') {
      console.log('Spot on')
    } else {
      console.log('Try again buddy')
    }

  }


  var question = function() {

    var rand = Math.floor(Math.random() * 3) + 1;

    console.log(rand);
      if (rand === 1) {
        console.log(question1);
        return question1();
      } else if (rand === 2){
        return question2();
      } else {
        return question3();
      }
  }


  question();

})();
