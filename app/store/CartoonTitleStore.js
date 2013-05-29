Ext.define('CartoonPlayer.store.CartoonTitleStore', {
    extend : 'Ext.data.Store'

    , config : {
        // model : 'CartoonPlayer.model.CartoonTitleModel'
        data : [
			{ text : '미생', store : 'CartoonMisengStore' }
			, { text : '노블레스', store : 'CartoonNoblessStore' }
        ]
    }
});