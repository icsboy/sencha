Ext.define('CartoonPlayer.model.CartoonPictureModel', {
	extend:'Ext.data.Model'
    , config: {
        fields: [
         	'id'
         	, 'url'
         	, 'key'
         	, 'imageOrder'
         	, 'mediaType'
         	, 'width'
         	, 'height'
        ]
    }
});