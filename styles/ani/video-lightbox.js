/*
|-------------------------------------------
|	Simple Lightbox Video jQuery
|-------------------------------------------
|
|
|	Author: Pedro Marcelo
|	Author URI: https://github.com/pedromarcelojava
|	Plugin URI: https://github.com/pedromarcelojava/Simple-Lightbox-Video-jQuery
|	Version: 2.0
*/

(function($)
{
	$.extend($.fn, {
		simpleLightboxVideo : function()
		{
			var defaults = {
				delayAnimation: 0,
				keyCodeClose: 27
			};

			$.simpleLightboxVideo.vars = $.extend({}, defaults);

			var video = this;

			video.click(function()
			{
				if (window.innerHeight > 540)
				{
					var margintop = (window.innerHeight - 540) / 2;
				}
				else
				{
					var margintop = 0;
				}

				var ifr = '<iframe src="" width="960" height="540" id="video-embed" style="border:0;" allowfullscreen></iframe>';
				var lightbox = '<div class="lightbox" style="margin-top:' + margintop + 'px">';
				var back = '<div id="back-lightbox">';
				var bclo = '<div id="background-close"></div>';
				var win = '<div id="lightbox-window">';
				var end = '</div></div></div>';

				$('body').append(win + bclo + back + lightbox + ifr + end);
				$('#lightbox-window').hide();

				if ($(this).data('videosite') == "youtube") {
					var url = 'https://www.youtube.com/embed/' + $(this).data('videoid') + '?autoplay=1';
				} else if($(this).data('videosite') == "vimeo") {
					var url = 'https://player.vimeo.com/video/' + $(this).data('videoid') + '?autoplay=1';
				}

				$('#lightbox-window').fadeIn(100);
				$('#video-embed').attr('src', url);

				$('#background-close').click(function()
				{
					$('#lightbox-window').fadeOut($.simpleLightboxVideo.vars.delayAnimation, function()
					{
						$(this).remove();
					});
				});

				return false;
			});

			$(document).keyup(function(e)
			{
				if (e.keyCode == 27)
				{
					$('#lightbox-window').fadeOut($.simpleLightboxVideo.vars.delayAnimation, function()
					{
						$(this).remove();
					});
				}
			});

			$(window).resize(function()
			{
				if (window.innerHeight > 540)
				{
					var margintop = (window.innerHeight - 540) / 2;
				}
				else
				{
					var margintop = 0;
				}

				$('.lightbox').css({
					marginTop: margintop + 'px'
				});
			});

			return false;
		}
	});
})(jQuery);

(function($)
{
	$.simpleLightboxVideo = function(options, video)
	{
		return $(video).simpleLightboxVideo();
	}
})(jQuery);
