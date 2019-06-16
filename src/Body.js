class Body {

    // this is what's called when you use the "new" keyword
    constructor($el) {
      this.node = $('<div class="bodies" id="body"></div>');
      this.currentBodyDirection = $("#head").currentheadDirection;
      this.SPEED = 200;
      $el.append(this.node);
   
    }
  }

   