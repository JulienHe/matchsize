function alert(title, message){
  var app = [NSApplication sharedApplication];
  [app displayDialog:message withTitle:title];
}

function setShapesWidth(selectedCount, selectedLayers, shapeSize){
  for (var i = 0; i < selectedCount; i++) {
    var layer = selectedLayers[i];
    var layerFrame = layer.frame();
    layerFrame.setWidth(shapeSize);
  }
}

function setShapesHeight(selectedCount, selectedLayers, shapeSize){
  for (var i = 0; i < selectedCount; i++) {
    var layer = selectedLayers[i];
    var layerFrame = layer.frame();
    layerFrame.setHeight(shapeSize);
  }
}

function minArray(array) {
  return Math.min.apply(null, array);
}

function maxArray(array) {
  return Math.max.apply(null, array);
}

function createWidthArray(selectedCount, selectedLayers){
  var arraySize = [];
  for (var i = 0; i < selectedCount; i++) {
    for (var i = 0; i < selectedCount; i++) {
      var layer = selectedLayers[i];
      var layerFrame = layer.frame();
      arraySize.push(layerFrame.width())
    }
  }
  return arraySize;
}

function createHeightArray(selectedCount, selectedLayers){
  var arraySize = [];
  for (var i = 0; i < selectedCount; i++) {
    for (var i = 0; i < selectedCount; i++) {
      var layer = selectedLayers[i];
      var layerFrame = layer.frame();
      arraySize.push(layerFrame.height())
    }
  }
  return arraySize;
}
