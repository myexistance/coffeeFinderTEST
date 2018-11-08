// $(function(){
//   $('#all').click(function(){
//     $('.item').show();
//     return false;
//   });
  
//   $('#cbd').click(function(){
//     $('.item').show();
    function allCbd(){
      $(function(){
        $(".cbd").show();
      });

      $(function(){
        $(".teAro").hide();
      });

      $(function(){
        $(".newtown").hide();
      });

      $(function(){
        $(".dashboard").hide();
      });
    }

    function allteAro(){
      $(function(){
        $(".teAro").show();
      });

      $(function(){
        $(".cbd").hide();
      });

      $(function(){
        $(".newtown").hide();
      });

      $(function(){
        $(".dashboard").hide();
      });
    }
    function allNewTown(){
      $(function(){
        $(".newtown").show();
      });

      $(function(){
        $(".cbd").hide();
      });

      $(function(){
        $(".teAro").hide();
      });

      $(function(){
        $(".dashboard").hide();
      });
    }

