class Apple {

  constructor($el) {
    this.node = $('<img id="apple"></img>');
    this.node.attr('src', 'src/assets/58727fbcf3a71010b5e8ef09.png');
    $el.append(this.node);
    this.node.css({ top: rand_50(0,450), left: rand_50(0,450) });
  }

}




