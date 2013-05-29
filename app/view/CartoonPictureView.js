Ext.define('CartoonPlayer.view.CartoonPictureView', {
    extend: 'Ext.List'
    , xtype : 'cartoonPictureView'
    , id : 'cartoonPictureView'
    , config: {
		height : '100%'
		, store : 'CartoonPictureStore'
		, emptyText : '<div class="y-mainFontColor">There is no data</div>'
		// , itemTpl : Ext.create('Ext.XTemplate',
				// '<div>{text}</div>'
		// )
    }
});