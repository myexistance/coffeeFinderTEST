
    // function allCbd(){
    //   $(function(){
    //     $(".cbd").show();
    //   });

    //   $(function(){
    //     $(".teAro .newtown .dashboard").hide();
    //   });
    // }

    // function allteAro(){
    //   $(function(){
    //     $(".teAro").show();
    //   });

    //   $(function(){
    //     $(".cbd .newtown .dashboard").hide();
    //   });
    // }

    function allNewTown(){
      $(function(){
        $(".newtown").show();
      });

      $(function(){
        $(".cbd .teAro .dashboard").hide();
      });

    }

    function allFlatWhite(){
      $(function(){
        $(".fWhite").show();
      });

      $(function(){
        $(".lBlack .cappuccino .dashboard").hide();
      });
    }

    function allFlatWhite(){
      $(function(){
        $(".fWhite").show();
      });

      $(function(){
        $(".lBlack .cappuccino .dashboard").hide();
      });
    }


//pure javascript
var result = $('input:radio[name="option"]:checked').val();
if (result === 'allCbd') {
  $(".cbd").show();
}else if (result !== 'allCbd') {
  $(".teAro .newtown .dashboard").hide();
}

var result = $('input:radio[name="option"]:checked').val();
if (result === 'allteAro') {
  $(".teAro").show();
}else if (result !== 'allteAro') {
  $(".cbd .newtown .dashboard").hide();
}

 
