Ext.define('CartoonPlayer.view.CartoonTitleView', {
    extend: 'Ext.List'
    , xtype : 'cartoonTitleView'
    , id : 'cartoonTitleView'
    , config: {
		height : '100%'
		, store : 'CartoonTitleStore'
		, emptyText : '<div class="y-mainFontColor">There is no data</div>'
		, itemTpl : Ext.create('Ext.XTemplate',
				'<div>{text}</div>'
		)
    }
});