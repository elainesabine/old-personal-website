$( function() {
  $( "#tabs" ).tabs();
} );


$('#clickme').click(function() {
  $('#book').fadeOut('slow', function() {
    // Animation complete.
  });
});

$(document).ready(function(){
  initTabs();
});

function initTabs() {
  $('#tabMenu a').bind('click',function(e) {
  e.preventDefault();
  var thref = $(this).attr("href").replace(/#/, '');
  $('#tabMenu a').removeClass('active');
  $(this).addClass('active');
  $('#tabContent div.content[id!='+thref+']').fadeOut('slow', function(){
    $('#'+thref).fadeIn('slow');
  });
  });
}