/**
divTextResize
-------------
This Jquery Pugin can be used to resize text Font Size inside a Div .

To use the plugin follow the steps:-
	1.-> Create a CLASS for the DIV in CSS(ex .definedclass{  }) and use it in the DIV defination.   E.g showed in 		         step 2.Define the CLASS as this class name has to be used in function calling , and DIV defination in BODY.  
	
	2.->Inside this DIV use a SPAN to see the magic.
			e.g.  <div class="definedclass">
          				<span>Praveen Singh </span>
        			</div>
	
	3->Calling The Function
			a.)First include the plugin,and jquery 1.7.2 min
			b.)Call the function as shown in below e.g.
			   U must Define maxFontSize ,the HEIGHT and WIDTH of the DIV to be used ,if not defined the default 	                value is   HEIGHT: 100, 
			      		   WIDTH: 200,
			   			   maxFontSize: 40 , Pixels
			   e.g
					<script type="text/javascript">
    					$(window).load(function() {
      						$('.definedclass').divTextResize({ 
	  							maxFontSize: 70,
								height: 200,
								width: 300
	  							});
    						});
  					</script>

Developed By: Praveen Singh
*/
; (function($) {
  
  $.fn.divTextResize = function(options) {
    var defaults = {
      maxFontSize: 40,
      minFontSize: 4,
	  height:100,
	  width:200,
	  innerTag: 'span',
      widthOnly: false,
    };
    var Opts = jQuery.extend(defaults, options);
	//changing the width and height of div class as specified
    $(this).css("height",Opts.height);
	$(this).css("width",Opts.width);
	
    this.each(function() {
      var ourText = $(Opts.innerTag + ':visible:first', this);
      var maxHeight = $(this).height();
      var maxWidth = $(this).width();
      var fontSize;
      
      var minFontSize = Opts.minFontSize;
      var maxFontSize = Opts.maxFontSize;
      var HfontSize = undefined;
      if (!Opts.widthOnly) {
        while (minFontSize < maxFontSize - 1) {
          fontSize = Math.floor((minFontSize + maxFontSize) / 2)
          ourText.css('font-size', fontSize);
          if (ourText.height() < maxHeight)
            minFontSize = fontSize;
          else
            maxFontSize = fontSize;
        }
        HfontSize = minFontSize;
        }

      minFontSize = Opts.minFontSize;
      maxFontSize = Opts.maxFontSize;
      while (minFontSize < maxFontSize - 1) {
        fontSize = Math.floor((minFontSize + maxFontSize) / 2)
        ourText.css('font-size', fontSize);
        if (ourText.width() < maxWidth)
          minFontSize = fontSize;
        else
          maxFontSize = fontSize;
      }
      var WidthfontSize = minFontSize

      if (Opts.widthOnly)
        ourText.css('font-size', WidthfontSize);
      else
        ourText.css('font-size', Math.min(HfontSize, WidthfontSize));
   
    });
        
    return this;
  };
})(jQuery);