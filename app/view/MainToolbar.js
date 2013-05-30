Ext.define('CartoonPlayer.view.MainToolbar', {
	extend: 'Ext.Toolbar'
    , xtype : 'mainToolbar'
    , id    : 'mainToolbar'

    , config: {  
        docked: 'top'
        , itemId : 'topToolbar'
        , cls : 'top-toolbar'
        , title : 'CartoonViewer'
        , items : [
            {
   	        	xtype : 'button'
   	        	, itemId : 'backDocList'
   	        	, ui : 'back'
   	        	, text : '뒤로'
   	        }
   	        , {
   	        	xtype : 'spacer'
   	        }
	        , {
	           	xtype : 'button'
	           	, itemId : 'showRightBtn'
	           	, iconCls : 'list'
	           	, iconMask : true
	           	, hidden : true
	        }
        ]
    }
});