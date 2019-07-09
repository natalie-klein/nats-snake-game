class Apple {

  constructor($el) {
    //creates img element with id of 'apple'
    this.node = $('<img id="apple"></img>');
    //set src property of img to the path of the apple image
    this.node.attr('src', 'src/assets/58727fbcf3a71010b5e8ef09.png');
    //when a new apple node is created, it is appended to $el ($el will be '#board' in this case)
    $el.append(this.node);
    //each time a new apple node is created, it is placed at random location
    this.node.css({ top: rand_50(0,450), left: rand_50(0,450) });
  }


}

 //returns a random value between 0 and 450 that is evenly divisible by 50 (the apple, head and body pieces are all 50px x 50px)
 function rand_50(min, max){
  return Math.round((Math.random()*(max-min)+min)/50)*50;
}





