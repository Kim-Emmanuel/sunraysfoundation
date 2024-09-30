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


  // For initial load (especially the homepage or a non-program page):
  if (!$('.program-button.active').length) {
    $('.program-link[data-target="education"]').addClass('active');
    $('#program-content').load('education.html #education'); //Default to education
  }

});