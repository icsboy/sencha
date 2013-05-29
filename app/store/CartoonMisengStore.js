Ext.define('CartoonPlayer.store.CartoonMisengStore', {
    extend : 'Ext.data.Store'

    , config : {
        // model : 'CartoonPlayer.model.CartoonTitleModel'
        data : [
			{ text : '착수 0' }
			, { text : '착수 1' }
			, { text : '2 수' }
			, { text : '3 수' }
			, { text : '4 수' }
			, { text : '5 수' }
        ]
    }
});