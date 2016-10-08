$(document).ready(function(){
	var $number1 = "";
		console.log("Initial numarul 1 este:" + $number1);
	
	var $number2 = "";
		console.log("initial numarul 2 este:" + $number2);
	var $operator = "";
	
	var $numbers = $('.lines div').not('.operators');
	var $operators = $('div .operators');
	var $screen = $('#screen');
	var screenCanBeCleared = true;
	$screen.text("");
		
	$numbers.click(function(){
		
		 if($number1 !== ""){
			if (screenCanBeCleared) {					
				$screen.text("");
				console.log("screen cleared");
				screenCanBeCleared = false;
			}
		}
			
		var $divClicked= $(this);
		var $numberClicked = $divClicked.text();
			console.log("This is the number clicked " + $number1);
			
		$screen.text($screen.text()+$numberClicked);
	});
	
	$operators.click(function(){
			$operator= $(this).text();
			console.log("This is the $operator:" + $operator);	
			
			$number1 = $screen.text();
			$screen.text($screen.text()+ $operator);
	});
	
	
	
	$('.last-one').click(function(){	
		$number2=$screen.text();
		
		equals($number1, $number2);	
		
	});
	var equals = function(param1,param2){
		console.log("fndk" + $operator);
		switch($operator){
			case "+":
				$screen.text(parseFloat(param1) + parseFloat(param2));
				break;
			case "-" :
				$screen.text(parseFloat(param1) - parseFloat(param2));
				break;
			case "*" :
				$screen.text(parseFloat(param1) * parseFloat(param2));
				break;
			case "/" :
				$screen.text(parseFloat(param1) / parseFloat(param2));
				console.log($operator);
				break;
			default:
					console.log("Sorry, we are out of ");
		}		 
		console.log("This is param1" + param1);
		console.log("This is param2" + param2);
		
	}
	
});
