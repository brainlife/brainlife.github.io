function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 2,
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
        campus.m.addListener('click', function() {
            new google.maps.InfoWindow({
                content: content
            }).open(map, campus.m);
        });
        */
    }
}

//show collaborators
//var div = document.getElementById('collaborators');
for(var uname in campuses) {
    var campus = campuses[uname];
    document.write("<h2>"+uname+"</h2>");
    var block = "";//<blockquote>";
    campus.members.forEach(function(member) {
        block += "<b>"+member.name+"</b> <small>"+member.topic+"</small> ";
    });
    block += "";//</blockquote>";
    //div.innerHTML = div.innerHTML + content;
    document.write(block);
}

