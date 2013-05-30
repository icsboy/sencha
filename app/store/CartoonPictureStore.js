Ext.define('CartoonPlayer.store.CartoonPictureStore', {
    extend : 'Ext.data.Store'

    , config : {
        model : 'CartoonPlayer.model.CartoonPictureModel'
        , proxy : {
            type : 'ajax'
            , reader : {
                type : 'json'
                , rootProperty : 'images'
            }
        }
    }
});