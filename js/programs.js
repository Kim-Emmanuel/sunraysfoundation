$(document).ready(function () {
  // Get the current page URL
  const currentUrl = window.location.href;


  $('.program-link').each(function () {
    const programUrl = $(this).attr('href');
    if (currentUrl.endsWith(programUrl) || (currentUrl.endsWith('/') && programUrl === 'education.html')) {  //Check if on the program page or the default (education)
      $(this).addClass('active');

      //Load the corresponding content:
      const programTarget = $(this).data('target');
      $('#program-content').load(programUrl + ' #' + programTarget); //Load content from specific ID

    } else {
      $(this).removeClass('active');
    }
  });



  if (!$('.program-button.active').length) {
  $('.program-link[data-target="education"]').addClass('active');

  $.ajax({
    url: 'education.html',
    dataType: 'html',
    success: function(data) {
      // Extract the content of the #education element from the loaded HTML
      const educationContent = $(data).find('#education').html();
      $('#program-content').html(educationContent); // Insert into the target element
    },
    error: function() {
      // Handle errors if the AJAX request fails
      console.error('Error loading education.html');
    }
  });
}

});