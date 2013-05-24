Ext.define('CartoonPlayer.view.MainView', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                title: 'Webtoon',
                iconCls: 'home',

                styleHtmlContent: true,
                scrollable: true,

                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: '미생'
                },

                html: [
                    "<img src='http://i1.cartoon.daumcdn.net/svc/image/U03/cartoon/4F1DFB580132240001' style='width:100%'>",
                    "<img src='http://i1.cartoon.daumcdn.net/svc/image/U03/cartoon/4F1DFB5A017CF50001' style='width:100%'>",
                    "<img src='http://i1.cartoon.daumcdn.net/svc/image/U03/cartoon/4F1DFB5C0169550001' style='width:100%'>"
                ].join("")
            },
            {
                title: 'Get Started',
                iconCls: 'action',

                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Getting Started'
                    }
                    // {
                    //     xtype: 'video',
                    //     url: 'http://av.vimeo.com/64284/137/87347327.mp4?token=1330978144_f9b698fea38cd408d52a2393240c896c',
                    //     posterUrl: 'http://b.vimeocdn.com/ts/261/062/261062119_640.jpg'
                    // }
                ]
            }
        ]
    }
});
