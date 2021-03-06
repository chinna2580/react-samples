import React, { Component } from "react";

class Map extends Component {
  componentDidMount() {
    this.renderMap();
  }

  renderMap = () => {
    loadScript(
      "https://maps.googleapis.com/maps/api/js?key=API_KEY&libraries=drawing&callback=initMap"
    );
    window.initMap = this.initMap;
  };

  initMap = () => {
    const googleMaps = window.google.maps;

    //Below is the snipper for showing simple map
    var map = new googleMaps.Map(document.getElementById("map"), {
      zoom: 3,
      center: { lat: -28.024, lng: 140.887 }
    });
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
