Ext.define('CartoonPlayer.view.MainView', {
    extend: 'Ext.Container'
    , xtype: 'main'
    , id : 'main'
    , requires: [
        // 'CartoonPlayer.view.CartoonChapterView'
    ]
    , config: {
        layout : {
            type : 'card'
        }
        , items: [
            {
                xtype : 'mainToolbar'
            }
            , {
                xtype : 'cartoonTitleView'
            }
            , {
                xtype : 'cartoonChapterView'
            }
            , {
                xtype : 'cartoonPictureView'
            }
        ]
    }
});
