// Location
console.log("what the fuck");
    function allCbd(){
      $(function(){
        $(".cbd").show();
      });
      $(function(){
        $(".teAro, .newtown, .dashboard").hide();
      });
    }
    function allTeAro(){
      $(function(){
        $(".teAro").show();
      });
      $(function(){
        $(".cbd, .newtown, .dashboard").hide();
      });
    }
    function allNewtown(){
      $(function(){
        $(".newtown").show();
      });
      $(function(){
        $(".cbd, .teAro, .dashboard").hide();
      });
    }
// COFFEE TYPE
    function allFlatWhite(){
      $(function(){
        $(".lBlack, .cappuccino, .dashboard").hide();
      });
      $(function(){
        $(".fWhite").show();
      });
    }
    function allLongBlack(){
     $(function(){
        $(".fWhite, .cappuccino, .dashboard").hide();
      });
      $(function(){
        $(".lBlack").show();
      }); 
    }
    function allCappuccino(){
      $(function(){
       $(".lBlack, .fWhite, .dashboard").hide();
      });
      $(function(){
        $(".cappuccino").show();
      });
    }
//BRAND
    function allHavana(){
      $(function(){
        $(".havana").show();
      });
      $(function(){
        $(".mojo, .flight, .dashboard").hide();
      });
    }
    function allMojo(){
      $(function(){
        $(".mojo").show();
      });
      $(function(){
        $(".havana, .flight, .dashboard").hide();
      });
    }
    function allFlight(){
      $(function(){
        $(".flight").show();
      });
      $(function(){
        $(".havana, .mojo, .dashboard").hide();
      });
    }

    
