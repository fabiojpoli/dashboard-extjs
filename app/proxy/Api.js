Ext.define('DashboardExtJS.proxy.API', {
    extend: 'Ext.data.proxy.Ajax',
    alias: 'proxy.api',

    reader: {
        type: 'json',
        rootProperty: 'data'
    }
});