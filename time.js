// Set the date we're counting down to
var countDownDate = new Date("Nov 1, 2021 00:00:00").getTime();
var countDownDate2 = new Date("Nov 1, 2021 12:00:00").getTime();
var choice = 1;

// Update the count down every 1 second
var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();
    
    if(choice == 1) {
        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // If the count down is over, write some text 
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("time").innerHTML = "Released!";
        } else {
            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
                
            // Output the result in an element with id="demo"
            if(days <= 1)
                var dayString = "day"
            else
                var dayString = "days"

            if(hours <= 1)
                var hrString = "hour"
            else
                var hrString = "hours"
            
            if(minutes <= 1)
                var minString = "min"
            else
                var minString = "mins"

            if(seconds <= 1)
                var secString = "sec"
            else
                var secString = "secs"
        
            document.getElementById("time").innerHTML = days + " " + dayString + " " + hours + " " + hrString + " "
                + minutes + " " + minString + " " + seconds + " " + secString;
        }
    } else {
        // If the count down is over, write some text 
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("time2").innerHTML = "Released!";
        } else {
            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
                
            // Output the result in an element with id="demo"
            if(days <= 1)
                var dayString = "day"
            else
                var dayString = "days"

            if(hours <= 1)
                var hrString = "hour"
            else
                var hrString = "hours"
            
            if(minutes <= 1)
                var minString = "min"
            else
                var minString = "mins"

            if(seconds <= 1)
                var secString = "sec"
            else
                var secString = "secs"
        
            document.getElementById("time2").innerHTML = days + " " + dayString + " " + hours + " " + hrString + " "
                + minutes + " " + minString + " " + seconds + " " + secString;
        }
    }
}, 1000);