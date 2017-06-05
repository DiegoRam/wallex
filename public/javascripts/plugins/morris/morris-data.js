// Morris.js Charts sample data for SB Admin template

$(function() {

    // Area Chart
    Morris.Area({
        element: 'morris-area-chart',
        data: [{
            period: '2010 Q1',
            BTC: 2666,
            ETC: null,
            LTC: 2647
        }, {
            period: '2010 Q2',
            BTC: 2778,
            ETC: 2294,
            LTC: 2441
        }, {
            period: '2010 Q3',
            BTC: 4912,
            ETC: 1969,
            LTC: 2501
        }, {
            period: '2010 Q4',
            BTC: 3767,
            ETC: 3597,
            LTC: 5689
        }, {
            period: '2011 Q1',
            BTC: 6810,
            ETC: 1914,
            LTC: 2293
        }, {
            period: '2011 Q2',
            BTC: 5670,
            ETC: 4293,
            LTC: 1881
        }, {
            period: '2011 Q3',
            BTC: 4820,
            ETC: 3795,
            LTC: 1588
        }, {
            period: '2011 Q4',
            BTC: 15073,
            ETC: 5967,
            LTC: 5175
        }, {
            period: '2012 Q1',
            BTC: 10687,
            ETC: 4460,
            LTC: 2028
        }, {
            period: '2012 Q2',
            BTC: 8432,
            ETC: 5713,
            LTC: 1791
        }],
        xkey: 'period',
        ykeys: ['BTC', 'ETC', 'LTC'],
        labels: ['BTC', 'ETC', 'LTC'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true
    });

    // Donut Chart
    Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "Download Sales",
            value: 12
        }, {
            label: "In-Store Sales",
            value: 30
        }, {
            label: "Mail-Order Sales",
            value: 20
        }],
        resize: true
    });

    // Line Chart
    Morris.Line({
        // ID of the element in which to draw the chart.
        element: 'morris-line-chart',
        // Chart data records -- each entry in this array corresponds to a point on
        // the chart.
        data: [{
            d: '2012-10-01',
            visits: 802
        }, {
            d: '2012-10-02',
            visits: 783
        }, {
            d: '2012-10-03',
            visits: 820
        }, {
            d: '2012-10-04',
            visits: 839
        }, {
            d: '2012-10-05',
            visits: 792
        }, {
            d: '2012-10-06',
            visits: 859
        }, {
            d: '2012-10-07',
            visits: 790
        }, {
            d: '2012-10-08',
            visits: 1680
        }, {
            d: '2012-10-09',
            visits: 1592
        }, {
            d: '2012-10-10',
            visits: 1420
        }, {
            d: '2012-10-11',
            visits: 882
        }, {
            d: '2012-10-12',
            visits: 889
        }, {
            d: '2012-10-13',
            visits: 819
        }, {
            d: '2012-10-14',
            visits: 849
        }, {
            d: '2012-10-15',
            visits: 870
        }, {
            d: '2012-10-16',
            visits: 1063
        }, {
            d: '2012-10-17',
            visits: 1192
        }, {
            d: '2012-10-18',
            visits: 1224
        }, {
            d: '2012-10-19',
            visits: 1329
        }, {
            d: '2012-10-20',
            visits: 1329
        }, {
            d: '2012-10-21',
            visits: 1239
        }, {
            d: '2012-10-22',
            visits: 1190
        }, {
            d: '2012-10-23',
            visits: 1312
        }, {
            d: '2012-10-24',
            visits: 1293
        }, {
            d: '2012-10-25',
            visits: 1283
        }, {
            d: '2012-10-26',
            visits: 1248
        }, {
            d: '2012-10-27',
            visits: 1323
        }, {
            d: '2012-10-28',
            visits: 1390
        }, {
            d: '2012-10-29',
            visits: 1420
        }, {
            d: '2012-10-30',
            visits: 1529
        }, {
            d: '2012-10-31',
            visits: 1892
        }, ],
        // The name of the data record attribute that contains x-visitss.
        xkey: 'd',
        // A list of names of data record attributes that contain y-visitss.
        ykeys: ['visits'],
        // Labels for the ykeys -- will be displayed when you hover over the
        // chart.
        labels: ['Visits'],
        // Disables line smoothing
        smooth: false,
        resize: true
    });

    // Bar Chart
    Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            device: 'BTC',
            geekbench: 136
        }, {
            device: 'BTC 3G',
            geekbench: 137
        }, {
            device: 'BTC 3GS',
            geekbench: 275
        }, {
            device: 'BTC 4',
            geekbench: 380
        }, {
            device: 'BTC 4S',
            geekbench: 655
        }, {
            device: 'BTC 5',
            geekbench: 1571
        }],
        xkey: 'device',
        ykeys: ['geekbench'],
        labels: ['Geekbench'],
        barRatio: 0.4,
        xLabelAngle: 35,
        hideHover: 'auto',
        resize: true
    });


});
