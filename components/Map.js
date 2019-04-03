import React, { Component } from "react";
// import { default as MarkerClusterer } from "react-google-maps/lib/components/addons/MarkerClusterer";

class Map extends Component {
  state = {
    locations: [
      { lat: -31.56391, lng: 147.154312 },
      { lat: -33.718234, lng: 150.363181 },
      { lat: -33.727111, lng: 150.371124 },
      { lat: -33.848588, lng: 151.209834 },
      { lat: -33.851702, lng: 151.216968 },
      { lat: -34.671264, lng: 150.863657 },
      { lat: -35.304724, lng: 148.662905 },
      { lat: -36.817685, lng: 175.699196 },
      { lat: -36.828611, lng: 175.790222 },
      { lat: -37.75, lng: 145.116667 },
      { lat: -37.759859, lng: 145.128708 },
      { lat: -37.765015, lng: 145.133858 },
      { lat: -37.770104, lng: 145.143299 },
      { lat: -37.7737, lng: 145.145187 },
      { lat: -37.774785, lng: 145.137978 },
      { lat: -37.819616, lng: 144.968119 },
      { lat: -38.330766, lng: 144.695692 },
      { lat: -39.927193, lng: 175.053218 },
      { lat: -41.330162, lng: 174.865694 },
      { lat: -42.734358, lng: 147.439506 },
      { lat: -42.734358, lng: 147.501315 },
      { lat: -42.735258, lng: 147.438 },
      { lat: -43.999792, lng: 170.463352 }
    ]
  };

  componentDidMount() {
    this.renderMap();
  }

  renderMap = () => {
    loadScript(
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyC0Ihrl2V6nAHzYMxQc_CeJEtd9sW5AA6Q&callback=initMap"
    );
    window.initMap = this.initMap;
  };

  initMap = () => {
    const googleMaps = window.google.maps;
    // Below is the snipper for Simple map with no data
    // const map = new window.google.maps.Map(document.getElementById("map"), {
    //   center: { lat: -34.397, lng: 150.644 },
    //   zoom: 8
    // });
    // Below is the code Map with a single marker
    // const googleMaps = window.google.maps;
    // // The location of Uluru
    // var uluru = { lat: -25.344, lng: 131.036 };
    // // The map, centered at Uluru
    // var map = new googleMaps.Map(document.getElementById("map"), {
    //   zoom: 4,
    //   center: uluru
    // });
    // // The marker, positioned at Uluru
    // var marker = new googleMaps.Marker({ position: uluru, map: map });

    //Below is the snipper for showing multiple markers on the map with clustering example
    var map = new googleMaps.Map(document.getElementById("map"), {
      zoom: 3,
      center: { lat: -28.024, lng: 140.887 }
    });

    // Create an array of alphabetical characters used to label the markers.
    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    // Add some markers to the map.
    // Note: The code uses the JavaScript Array.prototype.map() method to
    // create an array of markers based on a given "locations" array.
    // The map() method here has nothing to do with the Google Maps API.
    var markers = this.state.locations.map(function(location, i) {
      return new googleMaps.Marker({
        position: location,
        label: labels[i % labels.length]
      });
    });

    // Add a marker clusterer to manage the markers.
    var markerCluster = new window.MarkerClusterer(map, markers, {
      imagePath:
        "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m"
    });
  };

  render() {
    return <div id="map" />;
  }
}

function loadScript(url) {
  var index = window.document.getElementsByTagName("script")[0];
  console.log("inside loadScript:::::::::::::::::::;");
  console.log(window.document.getElementsByTagName("script"));
  var script = window.document.createElement("script");
  script.src = url;
  script.async = true;
  script.defer = true;
  index.parentElement.insertBefore(script, index);
}

export default Map;
