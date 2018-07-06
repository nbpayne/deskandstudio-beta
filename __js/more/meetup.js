// Get upcoming workshops from meetup
$(function() {
  meetup_url = 'https://api.meetup.com/Inner-West-Sydney-Photography-Group/events?page=6&callback=?';
  $.getJSON(meetup_url, function(response) {
    var tbody = $('#workshops tbody');
    for(var event in response.data) {
      var startDate = moment(response.data[event].local_date + ' ' + response.data[event].local_time);
      var endDate = moment(startDate);
      endDate.add(response.data[event].duration, 'ms');
      tbody.append(
        '<tr>' +
          '<td>' + 
            startDate.format('dddd, MMMM Do YYYY') + '<br>' +
            startDate.format('h:mmA') + ' - ' + endDate.format('h:mmA') +
          '</td>' +
          '<td>' + 
            '<dl>' +
              '<dt>' + response.data[event].name + '</dt>' +
              '<dd>' +
                '<a href="' + response.data[event].link + '" target="_blank">RSVP at Meetup</a>' +
              '</dd>' +
            '</dl>' +
          '</td>' +
        '</tr>'
      );
    }
  });
});
