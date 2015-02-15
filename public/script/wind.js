  var map, rasterLayer;
  var canvasSupport

  require([
    "esri/map", "esri/layers/ArcGISTiledMapServiceLayer", 
    "esri/domUtils", "esri/request",
    "dojo/parser", "dojo/number", "dojo/json", "dojo/dom", 
    "dijit/registry", "plugins/RasterLayer","esri/layers/WebTiledLayer",
    "esri/config",
    "dojo/domReady!"
  ], function(
    Map, ArcGISTiledMapServiceLayer, 
    domUtils, esriRequest,
    parser, number, JSON, dom, 
    registry, RasterLayer, WebTiledLayer, esriConfig
  ){
    parser.parse();
    // does the browser support canvas? 
    canvasSupport = supports_canvas();
    
    // hook up elevation slider events
    esriConfig.defaults.map.basemaps.darkgray = {
      baseMapLayers: [
        { url: "http://tiles4.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/Landbase/MapServer" }
      ],
      title: "Dark Gray"
    };

    map = new Map("mapCanvas", {
      center: [270.076, -10.132],
      zoom: 5,
      basemap: "darkgray"
    });

    map.on("load", mapLoaded);

    function mapLoaded() {

      // Add raster layer
      if ( canvasSupport ) {
        rasterLayer = new RasterLayer(null, {
          opacity: 0.7
        });
        map.addLayer(rasterLayer);
        
        map.on("extent-change", redraw);
        map.on("resize", function(){});
        map.on("zoom-start", redraw);
        map.on("pan-start", redraw);

        var layersRequest = esriRequest({
          url: '/script/gfs.json',
          content: {},
          handleAs: "json"
        });
        layersRequest.then(
          function(response) {
            windy = new Windy({ canvas: rasterLayer._element, data: response });
            redraw();
        }, function(error) {
            console.log("Error: ", error.message);
        });

      } else {
        dom.byId("mapCanvas").innerHTML = "This browser doesn't support canvas. Visit <a target='_blank' href='http://www.caniuse.com/#search=canvas'>caniuse.com</a> for supported browsers";
      }
    }

    // does the browser support canvas? 
    function supports_canvas() {
      return !!document.createElement("canvas").getContext;
    }

    function redraw(){

      rasterLayer._element.width = map.width;
      rasterLayer._element.height = map.height;

      windy.stop();

      var extent = map.geographicExtent;
      setTimeout(function(){
        windy.start(
          [[0,0],[map.width, map.height]], 
          map.width, 
          map.height, 
          [[extent.xmin, extent.ymin],[extent.xmax, extent.ymax]]
        );
      },500);
    }
  });
