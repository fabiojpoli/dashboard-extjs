Ext.define('DashboardExtJS.profile.Tablet', {
    extend: 'Ext.app.Profile',

    requires: [
        'DashboardExtJS.view.tablet.*'
    ],

    // Map tablet/desktop profile views to generic xtype aliases:
    //
    views: {
        email: 'DashboardExtJS.view.tablet.email.Email',
        inbox: 'DashboardExtJS.view.tablet.email.Inbox',
        compose: 'DashboardExtJS.view.tablet.email.Compose',

        searchusers: 'DashboardExtJS.view.tablet.search.Users'
    },

    isActive: function () {
        return !Ext.platformTags.phone;
    }
});
