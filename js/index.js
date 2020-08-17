$(document).ready( function() {

    $('#penguin1').mousedown(function() {
        $('#penguin1').addClass('penguin1_show');
        setTimeout(function(){ 
            $('#penguin1').css('pointer-events','none'); 
        }, 200);
    });
    $('#penguin2').mousedown(function() {
        $('#penguin2').addClass('penguin2_show');
                setTimeout(function(){ 
            $('#penguin2').css('pointer-events','none'); 
        }, 200);
    });

    $('#penguin3').mousedown(function() {
        $('#penguin3').addClass('penguin3_show');
                setTimeout(function(){ 
            $('#penguin3').css('pointer-events','none'); 
        }, 200);
    });
    $('#penguin4').mousedown(function() {
        $('#penguin4').addClass('penguin4_show');
                setTimeout(function(){ 
            $('#penguin4').css('pointer-events','none'); 
        }, 200);
    });
    $('#penguin5').mousedown(function() {
        $('#penguin5').addClass('penguin5_show');
                setTimeout(function(){ 
            $('#penguin5').css('pointer-events','none'); 
        }, 200);
    });
    $('#penguin6').mousedown(function() {
        $('#penguin6').addClass('penguin6_show');
                setTimeout(function(){ 
            $('#penguin6').css('pointer-events','none'); 
        }, 200);
    });
    $('#penguin7').mousedown(function() {
        $('#penguin7').addClass('penguin7_show');
                setTimeout(function(){ 
            $('#penguin7').css('pointer-events','none'); 
        }, 200);
    });
    $('#penguin8').mousedown(function() {
        $('#penguin8').addClass('penguin8_show');
                setTimeout(function(){ 
            $('#penguin8').css('pointer-events','none'); 
        }, 200);
    });
    $('#yeti').mousedown(function() {
        $('#yeti').addClass('beginyeti');
    });
    
});

var fReload = function () {
    
    if($('#penguin1').hasClass('penguin1_show')){
       $('#penguin1').removeClass('penguin1_show');
        setTimeout(function(){ 
            $('#penguin1').css('pointer-events',''); 
        }, 200);
    }
    if($('#penguin2').hasClass('penguin2_show')){
       $('#penguin2').removeClass('penguin2_show');
        setTimeout(function(){ 
            $('#penguin2').css('pointer-events',''); 
        }, 200);
    }
    if($('#penguin3').hasClass('penguin3_show')){
       $('#penguin3').removeClass('penguin3_show');
        setTimeout(function(){ 
            $('#penguin3').css('pointer-events',''); 
        }, 200);
    }
    if($('#penguin4').hasClass('penguin4_show')){
       $('#penguin4').removeClass('penguin4_show');
        setTimeout(function(){ 
            $('#penguin4').css('pointer-events',''); 
        }, 200);
    }
    if($('#penguin5').hasClass('penguin5_show')){
       $('#penguin5').removeClass('penguin5_show');
        setTimeout(function(){ 
            $('#penguin5').css('pointer-events',''); 
        }, 200);
    }
    if($('#penguin6').hasClass('penguin6_show')){
       $('#penguin6').removeClass('penguin6_show');
        setTimeout(function(){ 
            $('#penguin6').css('pointer-events',''); 
        }, 200);
    }
    if($('#penguin7').hasClass('penguin7_show')){
       $('#penguin7').removeClass('penguin7_show');
        setTimeout(function(){ 
            $('#penguin7').css('pointer-events',''); 
        }, 200);
    }
    if($('#penguin8').hasClass('penguin8_show')){
       $('#penguin8').removeClass('penguin8_show');
        setTimeout(function(){ 
            $('#penguin8').css('pointer-events',''); 
        }, 200);
    }
     if($('#yeti').hasClass('beginyeti')){
       $('#yeti').removeClass('beginyeti');
    }
    document.getElementById('scoreCount').value = 0;
    $(function () {
        var parent = $("#shuffle");
        var divs = parent.children();
        while (divs.length) {
            parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
        }
    });  
};

function beginyeti() {
    var s = document.getElementById('yetisound');
    s.currentTime = 0;
    s.play();
    alert("Game Over");
    setTimeout(fReload, 1050);
}

function begin() {
     var s = document.getElementById('jumpsound');
    s.currentTime = 0;
    s.play();
    var value = parseInt(document.getElementById('scoreCount').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('scoreCount').value = value;
    
    var m4Horse = document.getElementById('highscoreCount');
    var kamalVar = parseInt(scoreCount.value);
    var justAnotherVar = m4Horse.value;
    
    if(justAnotherVar == '' && !isNaN(kamalVar)) {
        m4Horse.value = kamalVar;
        console.log(kamalVar+'if');
    } else {
        justAnotherVar = parseInt(justAnotherVar);
        if(justAnotherVar <= kamalVar){
            m4Horse.value =kamalVar;
                
        }
    }
     var gt = document.getElementById('resetID').value;
    document.getElementById("resetID").addEventListener("click", function() {
          kamalVar = 0;
        value = 0;
        m4Horse.value =kamalVar;
        document.getElementById('scoreCount').value = value;
        });
}


