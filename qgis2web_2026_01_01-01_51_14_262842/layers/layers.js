ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32636").setExtent([283791.111336, 3393565.783400, 338368.939175, 3425059.460636]);
var wms_layers = [];

var format___0 = new ol.format.GeoJSON();
var features___0 = format___0.readFeatures(json___0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32636'});
var jsonSource___0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___0.addFeatures(features___0);
var lyr___0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource___0, 
                style: style___0,
                popuplayertitle: 'مركز_طنطا',
                interactive: false,
                title: '<img src="styles/legend/__0.png" /> مركز_طنطا'
            });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32636'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__1, 
                style: style__1,
                popuplayertitle: 'مكاتب البريد',
                interactive: true,
                title: '<img src="styles/legend/_1.png" /> مكاتب البريد'
            });

lyr___0.setVisible(true);lyr__1.setVisible(true);
var layersList = [lyr___0,lyr__1];
lyr___0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'ID': 'ID', 'Railway': 'Railway', 'TotalRoads': 'TotalRoads', 'RoadsUnPav': 'RoadsUnPav', 'RoadsPaved': 'RoadsPaved', 'PavedRoads': 'PavedRoads', 'Population': 'Population', 'DensityKmF': 'DensityKmF', 'Factories': 'Factories', 'Workers': 'Workers', 'AreasOfInd': 'AreasOfInd', 'Investment': 'Investment', 'FactoryF0T': 'FactoryF0T', 'FactoryF10': 'FactoryF10', 'FactoryF50': 'FactoryF50', 'FactoryF20': 'FactoryF20', 'FactoryF_1': 'FactoryF_1', 'RelativeIm': 'RelativeIm', 'besRoute_F': 'besRoute_F', 'UnPvedRoad': 'UnPvedRoad', 'أعداد': 'أعداد', 'إجمال': 'إجمال', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr__1.set('fieldAliases', {'Name': 'Name', 'تصنيف': 'تصنيف', 'Atm': 'Atm', 'الخدم': 'الخدم', });
lyr___0.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'ID': 'TextEdit', 'Railway': 'TextEdit', 'TotalRoads': 'TextEdit', 'RoadsUnPav': 'TextEdit', 'RoadsPaved': 'TextEdit', 'PavedRoads': 'TextEdit', 'Population': 'TextEdit', 'DensityKmF': 'TextEdit', 'Factories': 'TextEdit', 'Workers': 'TextEdit', 'AreasOfInd': 'TextEdit', 'Investment': 'TextEdit', 'FactoryF0T': 'TextEdit', 'FactoryF10': 'TextEdit', 'FactoryF50': 'TextEdit', 'FactoryF20': 'TextEdit', 'FactoryF_1': 'TextEdit', 'RelativeIm': 'TextEdit', 'besRoute_F': 'TextEdit', 'UnPvedRoad': 'TextEdit', 'أعداد': 'TextEdit', 'إجمال': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr__1.set('fieldImages', {'Name': 'TextEdit', 'تصنيف': '', 'Atm': '', 'الخدم': '', });
lyr___0.set('fieldLabels', {'OBJECTID': 'no label', 'Name': 'inline label - always visible', 'ID': 'no label', 'Railway': 'no label', 'TotalRoads': 'no label', 'RoadsUnPav': 'no label', 'RoadsPaved': 'no label', 'PavedRoads': 'no label', 'Population': 'no label', 'DensityKmF': 'no label', 'Factories': 'no label', 'Workers': 'no label', 'AreasOfInd': 'no label', 'Investment': 'no label', 'FactoryF0T': 'no label', 'FactoryF10': 'no label', 'FactoryF50': 'no label', 'FactoryF20': 'no label', 'FactoryF_1': 'no label', 'RelativeIm': 'no label', 'besRoute_F': 'no label', 'UnPvedRoad': 'no label', 'أعداد': 'no label', 'إجمال': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr__1.set('fieldLabels', {'Name': 'inline label - always visible', 'تصنيف': 'inline label - always visible', 'Atm': 'inline label - always visible', 'الخدم': 'inline label - always visible', });
lyr__1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});