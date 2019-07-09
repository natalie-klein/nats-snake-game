// creates a constructor function - research ES6 classes
class Head {

  // this is what's called when you use the "new" keyword
  constructor($el) {
    //create img element with id of 'head'
    this.node = $('<img id="head" />');
    //adds src property and assigns it to file path of head image
    this.node.attr('src', 'src/assets/sampic.png')
    //when a new Head is created, it will be going to the right
    this.currentheadDirection = 'right';
    //the head moves every 200 milliseconds
    this.SPEED = 200;
    //when a new Head is created, it will be appended to $el ('#board')
    $el.append(this.node);
    //when a new Head is created, it will be at the top left corner of board
    this.node.css({ top: 0, left: 0 });
    // array that will contain body nodes is initialized as empty array
    this.bodyArr = []
    //every 200 milliseconds, the Head.move function will be invoked 
    setTimeout(this.move.bind(this), this.SPEED);
  }

//add a 'move' property/method to the Head class, which is a function 
  move() {

//if the head and any of the body nodes are at the same position (aka if there's a collision), delete whole body
  const bodyCollision = (headPos) => {
    //iterate through body nodes to see if any are at the same position as the head node 
    for (let i = 0 ; i < this.bodyArr.length ; i ++){
      if (headPos.top == this.bodyArr[i].node.position().top && headPos.left == this.bodyArr[i].node.position().left) {
      //remove all divs with class 'bodies'
        $("div").remove(".bodies");
      //delete array of body nodes 
        delete this.bodyArr;
      //re-initialize bodyArr as empty array
        this.bodyArr = []
      //reset score to 0
        score = 0;
        $('#scoreBoard').text(`Score: ${score}`);
      //alert player that they have lost :(
        alert("GAME OVA, yo body and yo head collided");
      }
  }
}
  
    let headDirection = this.currentheadDirection;
    //uses .position() method to return top and left properties of head and apple 
    let headPosition = this.node.position();
    let applePosition = $("#apple").position();

    //logic to make the body nodes follow the head node 
    if (this.bodyArr){
      //iterate through array of body nodes backwards
      for (let i = this.bodyArr.length-1 ; i >= 0 ; i --){
        //if i=0 aka the first body node, make its position the same as the head position
        if (i === 0) this.bodyArr[0].node.css(headPosition);
        else {
          //if current node is not the first body node, assign it the positon of the node directly before it (at i-1)
          let temp = this.bodyArr[i-1].node.position();
          this.bodyArr[i].node.css(temp)
        }
      }
    }

    //logic to move head node around board depending on its direction
    if (headDirection === 'right') {
      headPosition.left += 50;
    }
    if (headDirection === 'up') {
      headPosition.top -= 50;
    }
    if (headDirection === 'down') {
      headPosition.top += 50;
    }
    if (headDirection === 'left') {
      headPosition.left -= 50;
    }
    this.node.css(headPosition);


    //logic for when head node goes out of bounds of the board 
    if (headPosition.top > 450 || headPosition.left > 450 || headPosition.left < 0 || headPosition.top < 0) {
      //deletes all elements with the class 'bodies', then deletes the bodyArr, then re-initializes it as an empty array 
      $("div").remove(".bodies");
      delete this.bodyArr;
      this.bodyArr = []
      //alerts player that they went out of bounds
      alert("GAME OVA, you went out of bounds");
      //places apple in random position 
      apple.style.top = rand_50(0,450);
      apple.style.left = rand_50(0,450);
      //head node goes back to top left corner of board 
      this.node.css({ top: 0, left: 0 });
      //head node given direction 'right' once again
      this.currentheadDirection = "right";
      //reset score to 0
      score = 0;
      $('#scoreBoard').text(`Score: ${score}`);
      //invoke Head.move function once again every 200 ms
      setTimeout(this.move.bind(this), this.SPEED);


    // logic for when snake eats apple (when head node and apple node are at same position)
    } else if (headPosition.top == applePosition.top && headPosition.left == applePosition.left ){
      //increment score by 1
      score += 1;
      //sets the text of html element with id 'scoreBoard' to reflect updated score
      $('#scoreBoard').text(`Score: ${score}`);
       //places apple in random position 
      apple.style.top = rand_50(0,450);
      apple.style.left = rand_50(0,450);
      //creates new body node and appends it to the board
      let bodyPiece = new Body($('#board'));
      //sets top and left properties of new body node to same position as head 
      bodyPiece.node.css({top: headPosition.top, left: headPosition.left})
      //pushes new body node into the body array
      this.bodyArr.push(bodyPiece);
      //invoke Head.move function once again every 200 ms
      setTimeout(this.move.bind(this), this.SPEED);


    
    } else {
      setTimeout(this.move.bind(this), this.SPEED);
      //everytime the head moves, the bodyCollision function is invoked, passing in the current head postion as an argument
      //this checks to see if there's the head node has collided with any of the body nodes
      if (this.bodyArr !== []) bodyCollision(headPosition);
    }
  } 
} 

