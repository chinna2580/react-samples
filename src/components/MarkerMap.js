import React, { Component } from "react";

class Map extends Component {
  componentDidMount() {
    this.renderMap();
  }

  renderMap = () => {
    loadScript(
      "https://maps.googleapis.com/maps/api/js?key=API_KEY&callback=initMap"
    );
    window.initMap = this.initMap;
  };

  initMap = () => {
    const googleMaps = window.google.maps;

    //Below is the snipper for showing simple map
    // The location of Uluru
    var uluru = { lat: -25.344, lng: 131.036 };
    // The map, centered at Uluru
    var map = new googleMaps.Map(document.getElementById("map"), {
      zoom: 4,
      center: uluru
    });
    // The marker, positioned at Uluru
    var marker = new googleMaps.Marker({ position: uluru, map: map });
  };

  render() {
    return <div id="map" />;
  }
}

function loadScript(url) {
  var index = window.document.getElementsByTagName("script")[0];
  var script = window.document.createElement("script");
  script.src = url;
  script.async = true;
  script.defer = true;
  index.parentElement.insertBefore(script, index);
}

export default Map;
