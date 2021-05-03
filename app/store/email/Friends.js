Ext.define('DashboardExtJS.store.email.Friends', {
    extend: 'Ext.data.Store',

    alias: 'store.emailfriends',

    model: 'DashboardExtJS.model.email.Friend',

    autoLoad: true,

    proxy: {
        type: 'api',
        url: '~api/email/friends'
    },

    sorters: {
        direction: 'DESC',
        property: 'online'
    }
});
