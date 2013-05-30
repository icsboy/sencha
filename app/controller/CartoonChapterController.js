Ext.define('CartoonPlayer.controller.CartoonChapterController', {
    extend: 'Ext.app.Controller'

    , requires : [

    ]

    , config : {
        refs : {
            main : '#main'
        	, cartoonChapterView : '#cartoonChapterView'
        }

        , control : {
            cartoonChapterView : {
                activate : 'onActivate'
                , itemtap : 'tabListItem'
            }
        }
    }
    , onActivate : function() {
    	// console.log('hi');
    }

    , tabListItem : function(list, index, target, record, e, eOpts){
        var main = this.getMain();
        var store = Ext.getStore('CartoonPictureStore');
        store.setProxy({
            url: './' + record.getData().url + '.json'
        });
        store.load();
        console.log(store);
        main.setActiveItem('cartoonPictureView');
	}
    
});