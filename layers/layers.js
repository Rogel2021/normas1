var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_LIMITES_LEY_WGS84_z19S_1 = new ol.format.GeoJSON();
var features_LIMITES_LEY_WGS84_z19S_1 = format_LIMITES_LEY_WGS84_z19S_1.readFeatures(json_LIMITES_LEY_WGS84_z19S_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LIMITES_LEY_WGS84_z19S_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LIMITES_LEY_WGS84_z19S_1.addFeatures(features_LIMITES_LEY_WGS84_z19S_1);
var lyr_LIMITES_LEY_WGS84_z19S_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LIMITES_LEY_WGS84_z19S_1, 
                style: style_LIMITES_LEY_WGS84_z19S_1,
                interactive: true,
                title: '<img src="styles/legend/LIMITES_LEY_WGS84_z19S_1.png" /> LIMITES_LEY_WGS84_z19S'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_LIMITES_LEY_WGS84_z19S_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_LIMITES_LEY_WGS84_z19S_1];
lyr_LIMITES_LEY_WGS84_z19S_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID_LIMITE': 'ID_LIMITE', 'ID_TRAMO': 'ID_TRAMO', 'DIST_KM': 'DIST_KM', 'ESTADO': 'ESTADO', 'Z_UTM': 'Z_UTM', 'N_LEY': 'N_LEY', 'FECHA_LEY': 'FECHA_LEY', 'ID_ARCHIVO': 'ID_ARCHIVO', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Le_1': 'SHAPE_Le_1', 'SHAPE_Le_2': 'SHAPE_Le_2', });
lyr_LIMITES_LEY_WGS84_z19S_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'ID_LIMITE': 'TextEdit', 'ID_TRAMO': 'TextEdit', 'DIST_KM': 'TextEdit', 'ESTADO': 'TextEdit', 'Z_UTM': 'TextEdit', 'N_LEY': 'TextEdit', 'FECHA_LEY': 'DateTime', 'ID_ARCHIVO': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Le_1': 'TextEdit', 'SHAPE_Le_2': 'TextEdit', });
lyr_LIMITES_LEY_WGS84_z19S_1.set('fieldLabels', {'OBJECTID': 'no label', 'ID_LIMITE': 'no label', 'ID_TRAMO': 'no label', 'DIST_KM': 'no label', 'ESTADO': 'no label', 'Z_UTM': 'no label', 'N_LEY': 'no label', 'FECHA_LEY': 'no label', 'ID_ARCHIVO': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Le_1': 'no label', 'SHAPE_Le_2': 'no label', });
lyr_LIMITES_LEY_WGS84_z19S_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});