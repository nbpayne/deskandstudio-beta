// Get upcoming workshops from meetup
$(function() {
  meetup_url = 'https://api.meetup.com/2/events?group_urlname=Inner-West-Sydney-Photography-Group&page=6&key=64114e1a281f53367da687615f1215';
  $.ajax({
    type: 'GET',
    url: meetup_url,
    contentType: 'text/json', 
    success: function(data) {
      $('#workshops')[0].innerText = data;
    },
    error: function() {
      $('#workshops')[0].innerText = 'Failure';
    }
  })
});
