Ext.define('DashboardExtJS.view.widgets.Widgets', {
    extend: 'Ext.container.Container',
    xtype: 'widgets',

    requires: [
        'DashboardExtJS.view.widgets.WidgetA',
        'DashboardExtJS.view.widgets.WidgetB',
        'DashboardExtJS.view.widgets.WidgetC',
        'DashboardExtJS.view.widgets.WidgetD',
        'DashboardExtJS.view.widgets.WidgetE',
        'DashboardExtJS.view.widgets.WidgetF',
        'Ext.slider.Single',
        'Ext.form.field.Display'
    ],

    layout: 'responsivecolumn',

    defaults: {
        xtype: 'container'
    },

    items: [
        {
            xtype: 'widget-a',
            userCls: 'big-50 small-100'
        },
        {
            xtype: 'widget-b',
            userCls: 'big-50 small-100'
        },
        {
            xtype: 'widget-c',
            userCls: 'big-50 small-100'
        },
        {
            xtype: 'widget-d',
            userCls: 'big-50 small-100'
        },
        {
            xtype: 'widget-e',
            containerColor: 'cornflower-blue',
            userCls: 'big-33 small-50',
            data: {
                amount: 840,
                type: 'Sales',
                icon: 'shopping-cart'
            }
        },
        {
            xtype: 'widget-e',
            containerColor: 'green',
            userCls: 'big-33 small-50',
            data: {
                amount: 611,
                type: 'Messages',
                icon: 'envelope'
            }
        },
        {
            xtype: 'widget-e',
            containerColor: 'magenta',
            userCls: 'big-33 small-50',
            data: {
                amount: 792,
                type: 'Lines of Code',
                icon: 'code'
            }
        },
        {
            xtype: 'widget-e',
            containerColor: 'orange',
            userCls: 'big-33 small-50',
            data: {
                amount: 637,
                type: 'Users',
                icon: 'plus-circle'
            }
        },
        {
            xtype: 'widget-e',
            containerColor: 'blue',
            userCls: 'big-33 small-50',
            data: {
                amount: 112,
                type: 'Servers',
                icon: 'tasks'
            }
        },
        {
            xtype: 'widget-e',
            containerColor: 'pink',
            userCls: 'big-33 small-50',
            data: {
                amount: 244,
                type: 'Files',
                icon: 'file-text'
            }
        },
        {
            xtype: 'widget-f',
            containerColor: 'cornflower-blue',
            userCls: 'big-50 small-100',
            data: {
                amount: 840,
                type: 'Sales',
                icon: 'shopping-cart'
            }
        },
        {
            xtype: 'widget-f',
            containerColor: 'green',
            userCls: 'big-50 small-100',
            data: {
                amount: 611,
                type: 'Messages',
                icon: 'envelope'
            }
        },
        {
            xtype: 'widget-f',
            containerColor: 'magenta',
            userCls: 'big-50 small-100',
            data: {
                amount: 792,
                type: 'Lines of Code',
                icon: 'code'
            }
        },
        {
            xtype: 'widget-f',
            containerColor: 'pink',
            userCls: 'big-50 small-100',
            data: {
                amount: 244,
                type: 'Files',
                icon: 'file-text'
            }
        }
    ]
});
