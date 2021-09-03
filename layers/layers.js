var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });

        var lyr_BingSatlite_1 = new ol.layer.Tile({
            'title': 'Bing Satélite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://ecn.t3.tiles.virtualearth.net/tiles/a{q}.jpeg?g=0&dir=dir_n’'
            })
        });

        var lyr_StamenTerrain_2 = new ol.layer.Tile({
            'title': 'Stamen Terrain',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://a.tile.stamen.com/terrain/{z}/{x}/{y}.png'
            })
        });
var format_Cuerpos_de_Agua_SENAMHI_z20s2_3 = new ol.format.GeoJSON();
var features_Cuerpos_de_Agua_SENAMHI_z20s2_3 = format_Cuerpos_de_Agua_SENAMHI_z20s2_3.readFeatures(json_Cuerpos_de_Agua_SENAMHI_z20s2_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cuerpos_de_Agua_SENAMHI_z20s2_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cuerpos_de_Agua_SENAMHI_z20s2_3.addFeatures(features_Cuerpos_de_Agua_SENAMHI_z20s2_3);
var lyr_Cuerpos_de_Agua_SENAMHI_z20s2_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Cuerpos_de_Agua_SENAMHI_z20s2_3, 
                style: style_Cuerpos_de_Agua_SENAMHI_z20s2_3,
                interactive: true,
                title: '<img src="styles/legend/Cuerpos_de_Agua_SENAMHI_z20s2_3.png" /> Cuerpos_de_Agua_SENAMHI_z20s2'
            });
var format_LIMITESLEY_4 = new ol.format.GeoJSON();
var features_LIMITESLEY_4 = format_LIMITESLEY_4.readFeatures(json_LIMITESLEY_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LIMITESLEY_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LIMITESLEY_4.addFeatures(features_LIMITESLEY_4);
var lyr_LIMITESLEY_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LIMITESLEY_4, 
                style: style_LIMITESLEY_4,
                interactive: true,
                title: '<img src="styles/legend/LIMITESLEY_4.png" /> LIMITES LEY'
            });
var format_ComunidadesLey24deSeptiembrede1938z20s_5 = new ol.format.GeoJSON();
var features_ComunidadesLey24deSeptiembrede1938z20s_5 = format_ComunidadesLey24deSeptiembrede1938z20s_5.readFeatures(json_ComunidadesLey24deSeptiembrede1938z20s_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ComunidadesLey24deSeptiembrede1938z20s_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ComunidadesLey24deSeptiembrede1938z20s_5.addFeatures(features_ComunidadesLey24deSeptiembrede1938z20s_5);
var lyr_ComunidadesLey24deSeptiembrede1938z20s_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ComunidadesLey24deSeptiembrede1938z20s_5, 
                style: style_ComunidadesLey24deSeptiembrede1938z20s_5,
                interactive: true,
                title: '<img src="styles/legend/ComunidadesLey24deSeptiembrede1938z20s_5.png" /> Comunidades Ley 24 de Septiembre de 1938 z20s'
            });
var format_Limites_Pando_6 = new ol.format.GeoJSON();
var features_Limites_Pando_6 = format_Limites_Pando_6.readFeatures(json_Limites_Pando_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Limites_Pando_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limites_Pando_6.addFeatures(features_Limites_Pando_6);
var lyr_Limites_Pando_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Limites_Pando_6, 
                style: style_Limites_Pando_6,
                interactive: true,
                title: '<img src="styles/legend/Limites_Pando_6.png" /> Limites_Pando'
            });
var format_PisoFirme_7 = new ol.format.GeoJSON();
var features_PisoFirme_7 = format_PisoFirme_7.readFeatures(json_PisoFirme_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PisoFirme_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PisoFirme_7.addFeatures(features_PisoFirme_7);
var lyr_PisoFirme_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PisoFirme_7, 
                style: style_PisoFirme_7,
                interactive: true,
                title: '<img src="styles/legend/PisoFirme_7.png" /> Piso Firme'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_BingSatlite_1.setVisible(true);lyr_StamenTerrain_2.setVisible(true);lyr_Cuerpos_de_Agua_SENAMHI_z20s2_3.setVisible(true);lyr_LIMITESLEY_4.setVisible(true);lyr_ComunidadesLey24deSeptiembrede1938z20s_5.setVisible(true);lyr_Limites_Pando_6.setVisible(true);lyr_PisoFirme_7.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_BingSatlite_1,lyr_StamenTerrain_2,lyr_Cuerpos_de_Agua_SENAMHI_z20s2_3,lyr_LIMITESLEY_4,lyr_ComunidadesLey24deSeptiembrede1938z20s_5,lyr_Limites_Pando_6,lyr_PisoFirme_7];
lyr_Cuerpos_de_Agua_SENAMHI_z20s2_3.set('fieldAliases', {'gml_id': 'gml_id', 'NBHIDROGRA': 'NBHIDROGRA', 'CATEG_DES': 'CATEG_DES', 'SUBCUENCA': 'SUBCUENCA', 'COCLASIFHI': 'COCLASIFHI', 'COESCALA': 'COESCALA', 'IDELEMENTO': 'IDELEMENTO', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_LIMITESLEY_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID_LIMITE': 'ID_LIMITE', 'ID_TRAMO': 'ID_TRAMO', 'DIST_KM': 'DIST_KM', 'ESTADO': 'ESTADO', 'Z_UTM': 'Z_UTM', 'N_LEY': 'N_LEY', 'FECHA_LEY': 'FECHA_LEY', 'ID_ARCHIVO': 'ID_ARCHIVO', });
lyr_ComunidadesLey24deSeptiembrede1938z20s_5.set('fieldAliases', {'Name': 'Name', 'ESTE_WGS84': 'ESTE_WGS84', 'NORTE_WGS8': 'NORTE_WGS8', 'LAT_WGS84': 'LAT_WGS84', 'LON_WGS84': 'LON_WGS84', });
lyr_Limites_Pando_6.set('fieldAliases', {'FID_Depart': 'FID_Depart', 'OBJECTID': 'OBJECTID', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'ID_UT_D': 'ID_UT_D', 'DEPARTAMEN': 'DEPARTAMEN', 'B_LEGAL_D': 'B_LEGAL_D', 'SUP_KM2': 'SUP_KM2', });
lyr_PisoFirme_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'COD_SIOT': 'COD_SIOT', 'ID_LIMITE': 'ID_LIMITE', 'ID_TRAMO': 'ID_TRAMO', 'DIST_KM': 'DIST_KM', 'FECHA_LEY': 'FECHA_LEY', 'ID_EXP': 'ID_EXP', 'LIMITE': 'LIMITE', 'ESTADO': 'ESTADO', 'TIPO_LIMIT': 'TIPO_LIMIT', 'Z_UTM': 'Z_UTM', 'LEY': 'LEY', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_Cuerpos_de_Agua_SENAMHI_z20s2_3.set('fieldImages', {'gml_id': 'TextEdit', 'NBHIDROGRA': 'TextEdit', 'CATEG_DES': 'TextEdit', 'SUBCUENCA': 'TextEdit', 'COCLASIFHI': 'TextEdit', 'COESCALA': 'TextEdit', 'IDELEMENTO': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_LIMITESLEY_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'ID_LIMITE': 'TextEdit', 'ID_TRAMO': 'TextEdit', 'DIST_KM': 'TextEdit', 'ESTADO': 'TextEdit', 'Z_UTM': 'TextEdit', 'N_LEY': 'TextEdit', 'FECHA_LEY': 'DateTime', 'ID_ARCHIVO': 'TextEdit', });
lyr_ComunidadesLey24deSeptiembrede1938z20s_5.set('fieldImages', {'Name': 'TextEdit', 'ESTE_WGS84': 'TextEdit', 'NORTE_WGS8': 'TextEdit', 'LAT_WGS84': 'TextEdit', 'LON_WGS84': 'TextEdit', });
lyr_Limites_Pando_6.set('fieldImages', {'FID_Depart': 'TextEdit', 'OBJECTID': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'ID_UT_D': 'TextEdit', 'DEPARTAMEN': 'TextEdit', 'B_LEGAL_D': 'TextEdit', 'SUP_KM2': 'TextEdit', });
lyr_PisoFirme_7.set('fieldImages', {'OBJECTID': 'TextEdit', 'COD_SIOT': 'TextEdit', 'ID_LIMITE': 'TextEdit', 'ID_TRAMO': 'TextEdit', 'DIST_KM': 'TextEdit', 'FECHA_LEY': 'DateTime', 'ID_EXP': 'TextEdit', 'LIMITE': 'TextEdit', 'ESTADO': 'TextEdit', 'TIPO_LIMIT': 'TextEdit', 'Z_UTM': 'TextEdit', 'LEY': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_Cuerpos_de_Agua_SENAMHI_z20s2_3.set('fieldLabels', {'gml_id': 'no label', 'NBHIDROGRA': 'no label', 'CATEG_DES': 'no label', 'SUBCUENCA': 'no label', 'COCLASIFHI': 'no label', 'COESCALA': 'no label', 'IDELEMENTO': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_LIMITESLEY_4.set('fieldLabels', {'OBJECTID': 'no label', 'ID_LIMITE': 'no label', 'ID_TRAMO': 'no label', 'DIST_KM': 'no label', 'ESTADO': 'no label', 'Z_UTM': 'no label', 'N_LEY': 'no label', 'FECHA_LEY': 'no label', 'ID_ARCHIVO': 'no label', });
lyr_ComunidadesLey24deSeptiembrede1938z20s_5.set('fieldLabels', {'Name': 'no label', 'ESTE_WGS84': 'no label', 'NORTE_WGS8': 'no label', 'LAT_WGS84': 'no label', 'LON_WGS84': 'no label', });
lyr_Limites_Pando_6.set('fieldLabels', {'FID_Depart': 'no label', 'OBJECTID': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'ID_UT_D': 'no label', 'DEPARTAMEN': 'no label', 'B_LEGAL_D': 'no label', 'SUP_KM2': 'no label', });
lyr_PisoFirme_7.set('fieldLabels', {'OBJECTID': 'no label', 'COD_SIOT': 'no label', 'ID_LIMITE': 'no label', 'ID_TRAMO': 'no label', 'DIST_KM': 'no label', 'FECHA_LEY': 'no label', 'ID_EXP': 'no label', 'LIMITE': 'no label', 'ESTADO': 'no label', 'TIPO_LIMIT': 'no label', 'Z_UTM': 'no label', 'LEY': 'no label', 'SHAPE_Leng': 'no label', });
lyr_PisoFirme_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});