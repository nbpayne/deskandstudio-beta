$(function(){meetup_url="https://api.meetup.com/Inner-West-Sydney-Photography-Group/events?page=6&callback=?",$.getJSON(meetup_url,function(t){var a=$("#workshops tbody");for(var d in t.data){var e=moment(t.data[d].local_date+" "+t.data[d].local_time),o=moment(e);o.add(t.data[d].duration,"ms"),a.append("<tr><td>"+e.format("dddd, MMMM Do YYYY")+"<br>"+e.format("h:mmA")+" - "+o.format("h:mmA")+"</td><td><dl><dt>"+t.data[d].name+'</dt><dd><a href="'+t.data[d].link+'" target="_blank">RSVP at Meetup</a></dd></dl></td></tr>')}})});
//# sourceMappingURL=meetup.js.map
