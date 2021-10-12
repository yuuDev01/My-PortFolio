import React, { Component } from 'react';
class ScrollBox extends Component {
  render() {
    var $html = $("html");
 
    var page = 1;
     
    var lastPage = $(".content").length;
     
    $html.animate({scrollTop:0},10);
    
    $(window).on("wheel", function(e){
 
      if($html.is(":animated")) return;
     
      if(e.originalEvent.deltaY > 0){
        if(page== lastPage) return;
     
        page++;
      }else if(e.originalEvent.deltaY < 0){
        if(page == 1) return;
     
        page--;
      }
      var posTop = (page-1) * $(window).height();
     
      $html.animate({scrollTop : posTop});
     
    });
    



  }
}

export default ScrollBox;
