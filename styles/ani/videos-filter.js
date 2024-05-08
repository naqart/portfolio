$(window).load(function () {

var button = 1;
var button_class = "filter-current";
var $container = $('#gallery-content');
    
$container.isotope({itemSelector : '.view' });


function check_button(){
	$('.filter').removeClass(button_class);
	if(button==1){
		$("#all").addClass(button_class);
		}
	if(button==2){
		$("#group1").addClass(button_class);
		}
	if(button==3){
		$("#group2").addClass(button_class);
		}	
	if(button==4){
		$("#group3").addClass(button_class);
		}	
	if(button==5){
		$("#group4").addClass(button_class);
		}	
	if(button==6){
		$("#group5").addClass(button_class);
		}	
	if(button==7){
		$("#group6").addClass(button_class);
		}	
}

$("#all").click(function() { $container.isotope({ filter: '.all' }); button = 1; check_button(); });
$("#group1").click(function() {  $container.isotope({ filter: '.group1' }); button = 2; check_button();  });
$("#group2").click(function() {  $container.isotope({ filter: '.group2' }); button = 3; check_button();  });
$("#group3").click(function() {  $container.isotope({ filter: '.group3' }); button = 4; check_button();  });
$("#group4").click(function() {  $container.isotope({ filter: '.group4' }); button = 5; check_button();  });
$("#group5").click(function() {  $container.isotope({ filter: '.group5' }); button = 6; check_button();  });
$("#group6").click(function() {  $container.isotope({ filter: '.group6' }); button = 7; check_button();  });

check_button();
});