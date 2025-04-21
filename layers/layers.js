var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Arboles_1 = new ol.format.GeoJSON();
var features_Arboles_1 = format_Arboles_1.readFeatures(json_Arboles_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Arboles_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Arboles_1.addFeatures(features_Arboles_1);
var lyr_Arboles_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Arboles_1, 
                style: style_Arboles_1,
                popuplayertitle: 'Arboles',
                interactive: true,
                title: '<img src="styles/legend/Arboles_1.png" /> Arboles'
            });
var format_Bancas_2 = new ol.format.GeoJSON();
var features_Bancas_2 = format_Bancas_2.readFeatures(json_Bancas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bancas_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bancas_2.addFeatures(features_Bancas_2);
var lyr_Bancas_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bancas_2, 
                style: style_Bancas_2,
                popuplayertitle: 'Bancas',
                interactive: true,
                title: '<img src="styles/legend/Bancas_2.png" /> Bancas'
            });
var format_Monumentos_3 = new ol.format.GeoJSON();
var features_Monumentos_3 = format_Monumentos_3.readFeatures(json_Monumentos_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Monumentos_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Monumentos_3.addFeatures(features_Monumentos_3);
var lyr_Monumentos_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Monumentos_3, 
                style: style_Monumentos_3,
                popuplayertitle: 'Monumentos',
                interactive: true,
                title: '<img src="styles/legend/Monumentos_3.png" /> Monumentos'
            });
var format_Fuente_de_agua_4 = new ol.format.GeoJSON();
var features_Fuente_de_agua_4 = format_Fuente_de_agua_4.readFeatures(json_Fuente_de_agua_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fuente_de_agua_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fuente_de_agua_4.addFeatures(features_Fuente_de_agua_4);
var lyr_Fuente_de_agua_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Fuente_de_agua_4, 
                style: style_Fuente_de_agua_4,
                popuplayertitle: 'Fuente_de_agua',
                interactive: true,
                title: '<img src="styles/legend/Fuente_de_agua_4.png" /> Fuente_de_agua'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_Arboles_1.setVisible(true);lyr_Bancas_2.setVisible(true);lyr_Monumentos_3.setVisible(true);lyr_Fuente_de_agua_4.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_Arboles_1,lyr_Bancas_2,lyr_Monumentos_3,lyr_Fuente_de_agua_4];
lyr_Arboles_1.set('fieldAliases', {'title': 'title', '1_Tipo': '1_Tipo', '2_Nombre': '2_Nombre', '4_Altura': '4_Altura', 'lat_5_Loca': 'lat_5_Loca', 'long_5_Loc': 'long_5_Loc', 'accuracy_5': 'accuracy_5', 'UTM_Northi': 'UTM_Northi', 'UTM_Eastin': 'UTM_Eastin', 'UTM_Zone_5': 'UTM_Zone_5', '6_Foto': '6_Foto', });
lyr_Bancas_2.set('fieldAliases', {'Tipo': 'Tipo', 'Material': 'Material', });
lyr_Monumentos_3.set('fieldAliases', {'Nombre': 'Nombre', 'Material': 'Material', });
lyr_Fuente_de_agua_4.set('fieldAliases', {'Nombre': 'Nombre', 'Estado': 'Estado', });
lyr_Arboles_1.set('fieldImages', {'title': 'TextEdit', '1_Tipo': 'TextEdit', '2_Nombre': 'TextEdit', '4_Altura': 'TextEdit', 'lat_5_Loca': 'TextEdit', 'long_5_Loc': 'TextEdit', 'accuracy_5': 'TextEdit', 'UTM_Northi': 'TextEdit', 'UTM_Eastin': 'TextEdit', 'UTM_Zone_5': 'TextEdit', '6_Foto': 'TextEdit', });
lyr_Bancas_2.set('fieldImages', {'Tipo': 'TextEdit', 'Material': 'TextEdit', });
lyr_Monumentos_3.set('fieldImages', {'Nombre': 'TextEdit', 'Material': 'TextEdit', });
lyr_Fuente_de_agua_4.set('fieldImages', {'Nombre': 'TextEdit', 'Estado': 'TextEdit', });
lyr_Arboles_1.set('fieldLabels', {'title': 'inline label - always visible', '1_Tipo': 'inline label - always visible', '2_Nombre': 'inline label - always visible', '4_Altura': 'inline label - always visible', 'lat_5_Loca': 'hidden field', 'long_5_Loc': 'hidden field', 'accuracy_5': 'hidden field', 'UTM_Northi': 'hidden field', 'UTM_Eastin': 'hidden field', 'UTM_Zone_5': 'inline label - visible with data', '6_Foto': 'inline label - always visible', });
lyr_Bancas_2.set('fieldLabels', {'Tipo': 'inline label - always visible', 'Material': 'inline label - always visible', });
lyr_Monumentos_3.set('fieldLabels', {'Nombre': 'inline label - always visible', 'Material': 'inline label - always visible', });
lyr_Fuente_de_agua_4.set('fieldLabels', {'Nombre': 'inline label - always visible', 'Estado': 'inline label - always visible', });
lyr_Fuente_de_agua_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});