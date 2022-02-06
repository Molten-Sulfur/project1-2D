require(["esri/Map", "esri/views/MapView", "esri/layers/FeatureLayer"], (Map, MapView, FeatureLayer) => {
  const map = new Map({
    basemap: "topo-vector"
  });
  
  // The MapView sets the extent.
  const view = new MapView({
    container: "washMap2",
    map: map,
    zoom: 15,
    center: [-90.691, 38.0832]
  });
  
  //Add the trails
  const featureLayer1 = new FeatureLayer({
  url: "https://services2.arcgis.com/bB9Y1bGKerz1PTl5/arcgis/rest/services/Washington_State_Park_trails/FeatureServer",
    renderer: {
      type: "simple",
      symbol: {
        type: "simple-fill",
        color: [ 0,0,0,0 ], 
        outline: { 
          width: 2,
          color: [ 132, 0, 0, 0.6 ]
        }
      }
    }
  });
  map.add(featureLayer1);
  
  //Add the sites
  const featureLayer2 = new FeatureLayer({
  url: "https://services2.arcgis.com/bB9Y1bGKerz1PTl5/arcgis/rest/services/WASH_sites/FeatureServer",
    renderer: {
      type: "simple",
      symbol: {
        type: "simple-marker",
        size: 8
      },
      visualVariables: [{
        type: "color",
        field: "SYMBOLOGY",
        stops: [{ value: 1, color: "#FF2644" },
                { value: 2, color: "#2b96e6" },
                { value: 3, color: "#E6982b" }]
      }]
    }
  });
  map.add(featureLayer2);

});
