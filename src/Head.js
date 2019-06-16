// creates a constructor function - research ES6 classes
class Head {

  // this is what's called when you use the "new" keyword
  constructor($el) {
    this.node = $('<img id="head" />');
    this.node.attr('src', 'src/assets/sampic.png')
    this.currentheadDirection = 'right';
    this.SPEED = 200;
    $el.append(this.node);
    this.node.css({ top: 0, left: 0 });
    this.bodyArr = []
    setTimeout(this.move.bind(this), this.SPEED);
  }

  move() {

  const bodyCollision = (headPos) => {
    for (let i = 0 ; i < this.bodyArr.length ; i++){
      if (headPos.top == this.bodyArr[i].node.position().top && headPos.left == this.bodyArr[i].node.position().left) {
        $("div").remove(".bodies");
        delete this.bodyArr;
        this.bodyArr = []
  
        alert("game over, yo body and yo head collided");
      }
  }
}
  

    let headDirection = this.currentheadDirection;
    let headPosition = this.node.position();
    let applePosition = $("#apple").position();

    if (this.bodyArr){
      for (let i = this.bodyArr.length-1  ; i >= 0 ; i--){
        if (i === 0) this.bodyArr[0].node.css(headPosition);
        else {
          let temp = this.bodyArr[i-1].node.position();
          this.bodyArr[i].node.css(temp)
        }
      }
    }

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

    if (headPosition.top > 450 || headPosition.left > 450 || headPosition.left < 0 || headPosition.top < 0) {
      
// deletes the elements with the class 'bodies', then deletes the bodyArr, then re-initializes it as a empty array 
      $("div").remove(".bodies");
      delete this.bodyArr;
      this.bodyArr = []

      alert("game over, you went out of bounds");
      apple.style.top = rand_50(0,450);
      apple.style.left = rand_50(0,450);
      this.node.css({ top: 0, left: 0 });
      this.currentheadDirection = "right";
      setTimeout(this.move.bind(this), this.SPEED);
    } else if (headPosition.top == applePosition.top && headPosition.left == applePosition.left ){
      console.log("apple and head same pos");
      apple.style.top = rand_50(0,450);
      apple.style.left = rand_50(0,450);
      let bodyPiece = new Body($('#board'));
      bodyPiece.node.css({top: headPosition.top, left: headPosition.left})
      this.bodyArr.push(bodyPiece);
      setTimeout(this.move.bind(this), this.SPEED);
    } else {
      setTimeout(this.move.bind(this), this.SPEED);
      if (this.bodyArr !== []) bodyCollision(headPosition);
    }
  } //move function closing bracket
} // class Head closing bracket 

