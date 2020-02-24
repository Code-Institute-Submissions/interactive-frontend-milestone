function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 11,
        center: {
            lat: 25.132115,
            lng: 55.276106
            }
    });

    var infoWindow = new google.maps.InfoWindow();
    var latlngbounds = new google.maps.LatLngBounds();

    var locations = [
    {lat: 25.197440, 
    lng: 55.274409,
    "title": "Burj Khalifa",
    "name": "Burj Khalifa: ",
    "description": "At 2,711 feet, the Burj Khalifa is the tallest building in the world, and the UAE’s most iconic building. Visitors can head to At The Top, an outdoor observation deck on the 124th floor, to check out the view. Up on the 148th floor is the SKY Lounge, which is one of the world’s highest observation decks.",
    "image": "assets/images/BurjKhalifa.jpg"
    },
    {lat: 25.141404, 
    lng: 55.185354,
    "title": "Burj Al Arab",
    "name": "Burj Al Arab: ",
    "description": "Dubai’s most iconic hotel, the Burj Al Arab first opened in 1999. It’s built on a manmade island, and was designed to look like the sail of a ship. As well as being one of the tallest hotels in the world, it’s also one of the most luxurious – and most expensive.",
    "image": "assets/images/BurjAlArab.jpg"
    },
    {lat: 25.235764, 
    lng: 55.300364,
    "title": "Dubai Frame",
    "name": "Dubai Frame: ",
    "description": "The Dubai Frame is exactly what the name implies, and holds the record for the largest frame in the world. It’s 150 metres tall, with an observation deck up at the top. Seen from one side, it frames the skyline of old Dubai, while from the other side, you can see the more modern landmarks of the city.",
    "image": "assets/images/DubaiFrame.jpg"
    },
    {lat: 25.117398, 
    lng: 55.198322,
    "title": "Ski Dubai",
    "name": "Ski Dubai: ",
    "description": "Ski Dubai is an indoor ski slope in the heart of one of Dubai’s largest malls, the Mall of the Emirates. The slope is the same height as a 25-storey building, and there are five slopes of varying difficulty on it. There’s also a snow park at the foot of the slope, with slides and snowballs, and a chance to interact with penguins.",
    "image": "assets/images/SkiDubai.jpg"
    },
    {lat: 25.141822, 
    lng: 55.226122,
    "title": "Alserkal Avenue",
    "name": "Alserkal Avenue: ",
    "description": "Alserkal Avenue is a collection of warehouses that has become the heart of Dubai’s arts and culture scene. It’s home to more than 20 different art galleries, as well as design studios, exhibition spaces, cafes, shops, theatres, and more. It regularly hosts cultural events throughout the year.",
    "image": "assets/images/AlserkalAvenue.jpg"
    },
    {lat: 25.228941, 
    lng: 55.258228,
    "title": "La Mer",
    "name": "La Mer: ",
    "description": "La Mer is a beachfront destination close to the heart of the city. Head to the beach for a spot of sunbathing, or some retail therapy, or dine at one of La Mer’s many restaurants and cafés. It’s even got it’s own waterpark, and plenty of street art murals to admire. ",
    "image": "assets/images/LaMer.jpg"
    },
    {lat: 25.133709, 
    lng: 55.120036,
    "title": "Aquaventure",
    "name": "Aquaventure: ",
    "description": "One of Dubai’s largest waterparks, Aquaventure can be found at the top of the Palm Jumeirah. The waterpark’s full of rides, beaches, swimming pools, and play areas, as well as chances to get up close and personal with marine animals such as sharks, dolphins, sea lions, and rays.",
    "image": "assets/images/aquaslide.jpg"
    },
    {lat: 25.060124, 
    lng: 55.244465,
    "title": "Dubai Miracle Garden",
    "name": "Dubai Miracle Garden: ",
    "description": "With over 50 million flowers, Dubai Miracle Garden is the world’s largest natural flower garden. It’s full of flower sculptures and displays, including a replica of an Airbus A380 aeroplane. It’s also home to an indoor butterfly garden, which houses over 15,000 butterflies.",
    "image": "assets/images/DubaiMiracleGarden.jpg"
    },
    {lat: 25.195733, 
    lng: 55.271890,
    "title": "Dubai Opera",
    "name": "Dubai Opera: ",
    "description": "Dubai Opera is the first theatre of its kind to open in Dubai, and was designed to resemble a traditional dhow. It first opened in 2016, with a performance by Placido Domingo. It has 2,000 seats, and has hosted everything from operas and musicals to stand-up comedy gigs and squash tournaments.",
    "image": "assets/images/DubaiOpera.jpg"
    },
    {lat: 25.082261, 
    lng: 55.318071,
    "title": "IMG Worlds of Adventure",
    "name": "IMG Worlds of Adventure: ",
    "description": "One of the world’s largest indoor theme parks, IMG Worlds of Adventure is spread out over 1.5 million square feet. The park first opened in 2016, and is split up into five separate zones, with rides, restaurants and shops based on characters from Marvel, Cartoon Network, and more.",
    "image": "assets/images/imgworld.jpg"
    }
]
            
 
    for (var i = 0; i < locations.length; i++) {
        var data = locations[i]
        var myLatlng = new google.maps.LatLng(data.lat, data.lng);
        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            title: data.title
            });
        (function (marker, data) {
            google.maps.event.addListener(marker, "click", function (e) {
                infoWindow.setContent("<div style = 'width:250px;height:260px'>" + data.name + data.description + "<div style = 'width:250px;height:250px'>" + "<img src="+data.image+">" + "</div>" + "</div>");
                infoWindow.open(map, marker);
                });
            })(marker, data);
            latlngbounds.extend(marker.position);
        }
        var bounds = new google.maps.LatLngBounds();
        map.setCenter(latlngbounds.getCenter());
        map.fitBounds(latlngbounds);

    }