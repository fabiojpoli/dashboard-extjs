Ext.define('DashboardExtJS.view.charts.Gauge', {
    extend: 'DashboardExtJS.view.charts.ChartBase',
    xtype: 'chartsgaugepanel',

    requires: [
        'Ext.chart.PolarChart',
        'Ext.chart.series.Gauge'
    ],

    title: 'Gauge Chart',
    iconCls: 'x-fa fa-wifi',

    items: [{
        xtype: 'polar',
        colors: [
            '#6aa5db',
            '#aed581'
        ],
        bind: '',
        series: [{
            type: 'gauge',
            angleField: 'position',
            needleLength: 100
        }],
        platformConfig: {
            phone: {
                // On a phone the whole view becomes a vertical strip of charts,
                // which makes it impossible to scroll the view if touch action
                // started on a chart. So we use a custom touchAction config.
                touchAction: {
                    panX: true,
                    panY: true
                }
            }
        }
    }]

});
