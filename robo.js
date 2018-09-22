/*
This pen is created by Abhishek Bagul

Tutorial : https://www.youtube.com/watch?v=7MDJtw3ZF-4

*/

jQuery(function($) {


    var currentMousePos = { x: -1, y: -1};



    $(document).mousemove(function(event) {
        currentMousePos.x = event.pageX;
        currentMousePos.y = event.pageY;

		var width = Number($(window).width());
			var height = Number($(window).height());
			var half_w = width / 2 ;
			var half_h = height / 2;

        //let's check the position
        $('#location').html('x: ' + currentMousePos.x + " , " + ' y: ' + currentMousePos.y)
    
        //make the eyes move


        //if on the negative side
        	//determine the x_pos

        	var left_pos_l = ( ( currentMousePos.x / (width * 2) ) * 50 ) - 0;
        	var right_pos_r =  (( currentMousePos.x / (width * 2)  ) * 50) + 25;
        	var top_pos_l = ( currentMousePos.y / (height) ) * 40;
        	var top_pos_r = ( currentMousePos.y / (height) ) * 40;
                	
        	$('.eye_l').css('left',left_pos_l).css('top', top_pos_l);
        	$('.eye_r').css('left',right_pos_r).css('top',top_pos_r);

        	if((currentMousePos.x > half_w ) && (currentMousePos.y < half_h)){
        		//1st quadrent
        		$('.eye_r').addClass('focused');
        		$('.eye_l').removeClass('focused');
        	}else if((currentMousePos.x < half_w ) && (currentMousePos.y < half_h)){
        		//2nd quadrent
        		$('.eye_l').addClass('focused');
        		$('.eye_r').removeClass('focused');
        	}else if((currentMousePos.x < half_w ) && (currentMousePos.y > half_h)){
        		//3rd quadrent
        		$('.eye_r').addClass('focused');
        		$('.eye_l').removeClass('focused');
        	}else if((currentMousePos.x > half_w ) && (currentMousePos.y > half_h)){
        		//4th quadrent
        		$('.eye_l').addClass('focused');
        		$('.eye_r').removeClass('focused');
        	}


    });



    
});