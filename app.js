/*
    This file is generated and updated by Sencha Cmd. You can edit this file as
    needed for your application, but these edits will have to be merged by
    Sencha Cmd when it performs code generation tasks such as generating new
    models, controllers or views and when running "sencha app upgrade".

    Ideally changes to this file would be limited and most work would be done
    in other places (such as Controllers). If Sencha Cmd cannot merge your
    changes and its generated code, it will produce a "merge conflict" that you
    will need to resolve manually.
*/

Ext.application({
    name: 'WTF',
    autoMaximize: true,
    requires: [
        'Ext.MessageBox',
        'Ext.plugin.PullRefresh',
        'WTF.utils.Functions',
        'Ext.device.Device'
    ],

    views: [
        'Main', 'Menu', 'About', 'Settings', 'Reminder', 'AddReminder'
    ],
    models: ['Meal', 'Date', 'Setting'],
    stores: ['BreakfastMenus', 'LunchMenus', 'DinnerMenus', 'Dates'],
    controllers: [
        'Main', 'Menu', 'CtrlAddReminder'
    ],

    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },

    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        // Initialize the main view
        Ext.Viewport.add(Ext.create('WTF.view.Main'));
        
        // Adjust toolbar height when running in iOS to fit with new iOS 7 style
        if (Ext.os.is.iOS && Ext.os.version.major >= 7) {
            console.log("App height adjusted to fit iOS7 devices")
            Ext.getCmp("ext-tabbar-1").setStyle("margin-top: 20px;");
            Ext.getCmp("ext-toolbar-1").setStyle("margin-top: 20px;");
            Ext.getCmp("ext-toolbar-2").setStyle("margin-top: 20px;");

        }
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
