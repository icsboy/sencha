Ext.define('CartoonPlayer.controller.CartoonTitleController', {
    extend: 'Ext.app.Controller'

    , requires : [

    ]

    , config : {
        refs : {
            main : '#main'
        	, cartoonTitleView : '#cartoonTitleView'
        }

        , control : {
            cartoonTitleView : {
                activate : 'onActivate'
                , itemtap : 'tabListItem'
            }
        }
    }
    , onActivate : function() {
    	// console.log('hi');
    }

    , tabListItem : function(list, index, target, record, e, eOpts){
    	// console.log(list);
    	// console.log(index);
    	// console.log(record);
        var main = this.getMain();
        main.setActiveItem('cartoonChapterView');
	}
    
});