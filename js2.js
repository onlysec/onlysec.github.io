

var end = new Date('11/26/2022 00:00:00 AM');
 
 

    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;

    function showRemaining() {
        var now = new Date();
        var distance = end - now;
        if (distance > 10000){
          document.getElementById('m').innerHTML = "Be here when it finishes please <br> It's really so important..."
        }
        
        if (distance < _day && distance > 12 * _hour){
          document.getElementById('m').innerHTML = "We are getting closer" + "</br>Be here when it finishes please <br> It's really so important..."
        }
        
        
        if (distance < 12 * _hour && distance > 10000){
          document.getElementById('m').innerHTML = "soon..."
        }
       
       
        if (distance > _day && distance < _day + 24*_hour){
          document.getElementById('m').innerHTML = "About to finish... </br> Don't forget about it pls <br> "
        }
  
        
        if (distance < 10000) {

            clearInterval(timer);
            document.getElementById('m').innerHTML = "Get Readyy" + "<br> I'm soo excited "
          
            return css(),soon();
        }
           
        var days = Math.floor(distance / _day);
        var hours = Math.floor((distance % _day) / _hour);
        var minutes = Math.floor((distance % _hour) / _minute);
        var seconds = Math.floor((distance % _minute) / _second);
        
        
        
    

        
        
        
        document.getElementById("days").innerHTML = days ;
        document.getElementById('hours').innerHTML = hours ;
        document.getElementById('minutes'). innerHTML = minutes;
        document.getElementById('seconds').innerHTML = seconds;
    }

    timer = setInterval(showRemaining, 1000);
    
    
    
    function soon () {
    var fiveMinutes = 10,
        display = document.querySelector('#time0');
    startTimer(fiveMinutes, display);
 
};
    
    
    
    function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
          if (seconds <10){
            seconds = seconds % 10;
          }
        display.textContent = seconds;

        if (--timer <= 0) {
              document.getElementById('m').innerHTML = "BOOMM!"
              return window.location.replace('bestie_bd.html');
        } 
    }, 959);
   
}



function css(){

    
   var elem = document.getElementById("countdown");
    elem.parentNode.removeChild(elem);
}

 
 
 /*
 for (i = 1; i < 5; i++ ){  
    elem = document.getElementById('time'+i);
    elem.parentNode.removeChild(elem)}
}*/