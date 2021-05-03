Ext.define('DashboardExtJS.store.faq.FAQ', {
    extend: 'Ext.data.Store',
    alias: 'store.faq',

    model: 'DashboardExtJS.model.faq.Category',

    proxy: {
        type: 'api',
        url: '~api/faq/faq'
    }
});
