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
        // var store = Ext.getStore('CartoonPictureStore');
        // store.setProxy({
        //     url: 'http://cartoon.media.daum.net/webtoon/viewer_images.js?webtoon_episode_id=21005'
        // });
        // store.load();
        // console.log(store);
        Ext.Ajax.request({
            url : 'http://cartoon.media.daum.net/webtoon/viewer_images.js'
            , method : 'GET' 
            , params : { 
                webtoon_episode_id : 21005
            }

            , success : function(response) {
                console.log(response);
            }

            , failure : function(response) {

            }
        })
        main.setActiveItem('cartoonPictureView');
	}
    
});