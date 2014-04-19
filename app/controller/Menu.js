/* To be implemented: Ability to swipe between menu */

Ext.define('WTF.controller.Menu', {
    extend: 'Ext.app.Controller',    
    config: {
        refs: {
            menuView: 'menuView',
            lunchMenuTab: 'menucard list[name=breakfastMenuList]'
        },
        control: {
            'breakfastMenuTab': {
                tab: 'onBreakFastMenuTab'
            }
        }
    },

    
    onBreakFastMenuTab: function() {
        console.log("You tapped on breakfast menu");
    }


});
