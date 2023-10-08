function writeCards( namesArray, event ){
    let thanksYouCards = []
    for ( let i = 0; i < namesArray.length; i++ ) {
      thanksYouCards.push( `Thank you, ${namesArray[i]}, for the wonderful ${event} gift!` )
    }
    return thanksYouCards
  }
  function countDown( firstNumber ){
    while ( firstNumber > 0 ) {
      console.log( firstNumber );
      firstNumber -= 1;
    }
    console.log( firstNumber );
  }