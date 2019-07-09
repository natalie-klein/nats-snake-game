class Body {

    // this is what's called when you use the "new" keyword
    constructor($el) {
      //creates div element with class of 'bodies'
      this.node = $('<div class="bodies"></div>');
      //when a new body node is created, it will have the same direction as the head node 
      this.currentBodyDirection = $("#head").currentheadDirection;
      this.SPEED = 200;
      //when a new body node is created, it is appended to $el ($el will be '#board' in this case)
      $el.append(this.node);
   
    }
  }

   