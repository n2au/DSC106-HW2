var someVar = document.getElementById("comparePieChart");
Highcharts.chart(someVar, {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'McDonald\'s market basket in September, 2019'
    },
    subtitle: {
        text: 'Source: Daily Sales'
     },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            }
        }
    },
    series: [{
        name: 'Food',
        colorByPoint: true,
        data: [{
            name: 'Hamburger',
            y: 59.61,
            sliced: true,
            selected: true,
            color: '#da291c'
        }, {
            name: 'Chicken Fillet',
            y: 25.24,
            color: '#000000'
        }, {
            name: 'Fish Fillet',
            y: 15.15,
            color: '#ffc72c'
        }]
    }]
});