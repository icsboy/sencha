Ext.define('CartoonPlayer.view.CartoonChapterView', {
    extend: 'Ext.List'
    , xtype : 'cartoonChapterView'
    , id : 'cartoonChapterView'
    , config: {
		height : '100%'
		, store : 'CartoonMisengStore'
		, emptyText : '<div class="y-mainFontColor">There is no data</div>'
		, itemTpl : Ext.create('Ext.XTemplate',
				'<div>{text}</div>'
		)
    }
});