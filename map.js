
function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 2,
        scrollwheel: false,
        mapTypeControl: false,
        mapTypeId: 'terrain',
        center:{lat: 38.5, lng: -110.5} 
    });

    for(var uname in campuses) {
        var campus = campuses[uname];

        //create university marker
        campus.m = new google.maps.Marker({
            position: {lat: campus.lat, lng: campus.lng},
            //icon: "/images/marker.teamwork.png",
            map: map
        });
        
        /*
        //info
        var content = "<div class=\"markerinfo\"><h2>"+campus.name+"</h2>";
        content += "<h3>"+campus.topics+"</h3>";
        campus.members.forEach(function(member) {
            content += "<p><b>"+member.name+"</b></p>";
        });
        content += "</div>";
        campus.minfo = new google.maps.InfoWindow({
            content: content
        });
        campus.m.addListener('click', function() {
            campus.minfo.open(map, campus.m);
        });
        */
    }
}

//show collaborators
//var div = document.getElementById('collaborators');
var topics = [];
var univs = [];
for(var uname in campuses) {
    var campus = campuses[uname];
    //document.write("<h2>"+uname+"</h2>");

    /*
    //show people's name and topics
    var block = "";//<blockquote>";
    campus.members.forEach(function(member) {
        block += "<b>"+member.name+"</b> <small>"+member.topic+"</small> ";
    });
    */

    //show topics (dedupes)
    //var block = "";

    if(!~univs.indexOf(uname)) univs.push(uname);
    campus.members.forEach(function(member) {
        var topic = member.topic.replace(/"/g, '')
        if(!~topics.indexOf(topic)) topics.push(topic);
    });
    //document.write(block);
}

document.write("<h3>Partners and Collaborators</h3>");
var block = "<blockquote style='opacity: 1;'>";
univs.forEach(function(univ) {
    block+=univ+" <span style='opacity: 0.3'>|</span> ";
});
block += "</blockquote>";
document.write(block);

document.write("<h3>Research Areas and Applications</h3>");
var block = "<blockquote style='opacity: 1;'>";
topics.forEach(function(topic) {
    block+=topic+" <span style='opacity: 0.5'>|</span> ";
});
block += "</blockquote>";
document.write(block);


