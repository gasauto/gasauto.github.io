jQuery(document).ready(function($) {

function setEqualHeight(columns) {         
		var heightcolumn = 0; 
		columns.each( function() { 					 
			currentHeight = $(this).height(); 		
			if(currentHeight > heightcolumn) { heightcolumn = currentHeight; } } );  
			columns.height(heightcolumn); 							
		} 
		
		var screen = $(window).width();
		
			if (screen > 768) {
				setEqualHeight($(".row1"));
				setEqualHeight($(".row2"));
				setEqualHeight($(".row3"));
			}
			else  {
				setEqualHeight($(".row_1"));
				setEqualHeight($(".row_2"));
				setEqualHeight($(".row_3"));
				setEqualHeight($(".row_4"));
				setEqualHeight($(".row_5"));
				setEqualHeight($(".row_6"));
			};
});