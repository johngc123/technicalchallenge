/**
 * Main JS file for caculator
 */

/* globals jQuery, document */
(function ($, undefined) {
	"use strict";

    var $document = $(document);

    $document.ready(function () {
		//get the calculator object defined
		var objcal = Main.Calculator;
		objcal.number1 = 0;
		objcal.number2 = 0;
		objcal.operation = '';
		var tocalculate = false; // check if to call the calculate method
		
		//events binded to number buttons
		$('.column.num').click(function(){
			//remove highlight of the selected operation and start entering the second number.
			if($('.column.operation.selected').length){
				$('.display').text('');
				$('.column.operation').removeClass('selected');
				tocalculate = true;
			}
			if($('.column.equal.selected').length){
				$('.column.reset').trigger('click');
			}
			if($('.display').text()=='0'){
				$('.display').text('');
			}
			if($('.display').text().length<12){ 
				$('.display').append($(this).text());
			}
		})
		
		//events binded to decimal sign button
		$('.column.dot').click(function(){
			//remove highlight of the selected operation and start entering the second number.
			if($('.column.operation.selected').length){
				$('.display').text('');
				$('.column.operation').removeClass('selected');
				tocalculate = true;
			}
			if($('.column.equal.selected').length){
				$('.column.reset').trigger('click');
			}
			//add 0 before decimal sign if no number has been entered
			if(!$('.display').text()){
				$('.display').append('0.');
			}
			//only add decimal sign to a integer number, and ignore the others
			else if($('.display').text().indexOf('.')==-1){ 
				$('.display').append('.');
			}
		})
		
		//events binded to operation buttons
		$('.column.operation').click(function(){
			//highlight current operation sign
			$('.column.operation').removeClass('selected');
			$(this).addClass('selected');
			$('.column.equal').removeClass('selected');
			
			//calculate the inputs
			if(tocalculate){
				tocalculate = false;
				objcal.number2 = parseFloat($('.display').text());
				//call the api to calculate and return the result
				objcal.calculate(function(rst){
					callback(rst, function(){
						objcal.operation = $('.column.operation.selected').attr('rel');	
					});
					
				});	
			}else{
				objcal.number1 = parseFloat($('.display').text());
				objcal.operation = $(this).attr('rel');
			}
		})
		
		//events binded to equal button
		$('.column.equal').click(function(){
			//skip if there is operation selected
			if(!objcal.operation){return false;}
			tocalculate = false;
			objcal.number2 = parseFloat($('.display').text());
			$('.column.operation').removeClass('selected');
			$('.column.equal').addClass('selected');
			//call the api to calculate and return the result
			objcal.calculate(function(rst){
				callback(rst);
			});
		})
		
		//events binded to reset button -- reset all
		$('.column.reset').click(function(){
			//rest all
			$('.display').text('0');
			$('.column.operation').removeClass('selected');
			$('.column.equal').removeClass('selected');
			objcal.operation='';
			objcal.number1=0;
			objcal.number2=0;
			tocalculate = false;
		})
		
		//callback function to deal with return result
		var callback = function(rst, func){
			//display the result
			if(rst){
				$('.display').text(rst.result);	
				objcal.number1 = parseFloat(rst.result);
				
				//excute attached function if required
				if(func){ func();}
			}
		}
        /**/

    });
	
})(jQuery);	