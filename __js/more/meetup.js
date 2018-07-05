// Get upcoming workshops from meetup
$(function() {
  meetup_url = 'https://api.meetup.com/2/events?group_urlname=Inner-West-Sydney-Photography-Group&limited_events=true&callback=?';
  $.getJSON(meetup_url, function(data) {
    var tbody = $('#workshops tbody');
    // console.log(tbody);
    for(event in data.results) {
      // var row = document.createElement('tr');
      // var date = document.createElement('td');
      // var name = document.createElement('td');
      // date.innerText = data.results[event].time;
      // name.append(document.createTextNode(data.results[event].name));
      // row.append(date, name)
      tbody.append(
        '<tr>' +
        '<td>' + moment(data.results[event].time).format('dddd, MMMM Do YYYY, h:mm a') + '</td>' +
        '<td>' + 
        '<h4>' + data.results[event].name + '</h4>' +
        data.results[event].description + 
        '<p><strong>RSVP</strong> ' +
        '<a href="' + data.results[event].event_url + '" target="_blank">' + data.results[event].event_url + '</a>' +
        '</p>' +
        '</td>' +
        '</tr>'
      )
    }
  })
});
