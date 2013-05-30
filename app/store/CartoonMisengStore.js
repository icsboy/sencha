Ext.define('CartoonPlayer.store.CartoonMisengStore', {
    extend : 'Ext.data.Store'

    , config : {
        // model : 'CartoonPlayer.model.CartoonTitleModel'
        data : [
			{ text : '130 수', url : 'm130' }
			, { text : '129 수', url : 'm129' }
        ]
    }
});