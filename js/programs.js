$(document).ready(function () {
  $('.program-button').click(function () {
    // Remove active class from all buttons
    $('.program-button').removeClass('active');

    // Add active class to clicked button
    $(this).addClass('active');

    // Hide all program previews
    $('.program-preview').removeClass('show');

    // Get target preview ID from data-target attribute
    var targetPreview = $(this).data('target');

    // Show the target program preview with smooth transition
    $(targetPreview).addClass('show');
  });
});