
Lampid = {
    jumlah_penduduk_per_kabupaten: function() {
        this.ajax({
            url:  'https://apiduk.jatimprov.go.id/solr/jumlah_penduduk_per_kabupaten/select?q=*&wt=json&indent=true&rows=40&sort=jumlah%20desc',
            method: 'GET',
            data: {},
            callback: function(data) {
                var json = data.response.docs;
                var label = [];
                var series = [];

                for(var i = 0 ; i<json.length ; i++){
                    label.push(json[i].nama_kab);
                    series.push(json[i].jumlah);
                }
                Highcharts.chart('jumlah_penduduk_per_kabupaten', {
                    chart: {
                        type: 'column'
                    },
                    title: {
                        text: 'Kepadatan Jumlah Penduduk per Kabupaten'
                    },

                    xAxis: {
                        categories: label,
                    },
                    yAxis: {

                      min: 0,
                      title: {
                            text: 'Jumlah'
                        }
                    },
                    plotOptions: {
                        area: {
                            pointStart: 1940,
                            marker: {
                                enabled: false,
                                symbol: 'circle',
                                radius: 2,
                                states: {
                                    hover: {
                                        enabled: true
                                    }
                                }
                            }
                        }
                    },
                    series: [
                        {
                            "name": "Penduduk",
                            "data": series
                        }
                    ]
                });
            }
        });
    },

    penduduk_0_14_tahun_jenis_kelamin_per_kab: function() {

        this.ajax({
            url:  'https://apiduk.jatimprov.go.id/solr/penduduk_0_14_tahun_jenis_kelamin_per_kab/select?q=*&wt=json&indent=true&rows=40&sort=jumlah_laki_laki%20desc',
            method: 'GET',
            data: {},
            callback: function(data) {
                var json = data.response.docs;
                var categories = [];
                var serieslaki = [];
                var seriesperem = [];

                for(var i = 0 ; i<json.length ; i++){
                    categories.push(json[i].nama_kab);
                    serieslaki.push(json[i].jumlah_laki_laki);
                    seriesperem.push(json[i].jumlah_perempuan * -1);
                }
                console.log(serieslaki);

                Highcharts.chart('penduduk_0_14_tahun_jenis_kelamin_per_kab', {
                    chart: {
                        type: 'bar'
                    },
                    title: {
                        text: 'Kepadatan Jumlah Penduduk Kurang dari 14 Tahun'
                    },
                    xAxis: [{
                        categories: categories,
                        reversed: false,
                        labels: {
                            step: 1
                        }
                    }, { // mirror axis on right side
                        opposite: true,
                        reversed: false,
                        categories: categories,
                        linkedTo: 0,
                        labels: {
                            step: 1
                        }
                    }],
                    yAxis: {
                        title: {
                            text: null
                        },
                        labels: {
                            formatter: function () {
                                return Math.abs(this.value) + '%';
                            }
                        }
                    },

                    plotOptions: {
                        series: {
                            stacking: 'normal'
                        }
                    },

                    tooltip: {
                        formatter: function () {
                            return '<b>' + this.series.name + ', ' + this.point.category + '</b><br/>' +
                                'Population: ' + Highcharts.numberFormat(Math.abs(this.point.y), 0);
                        }
                    },
                    series: [
                        {
                            "name": "Laki Laki",
                            "data": serieslaki
                        },{
                           "name": "Perempuan",
                            "data": seriesperem
                        }
                    ]
                });

            }
        });
    },

    penduduk_15_60_tahun_jenis_kelamin_per_kab: function() {
        this.ajax({
            url:  'https://apiduk.jatimprov.go.id/solr/penduduk_15_60_tahun_jenis_kelamin_per_kab/select?q=*&wt=json&indent=true&rows=40&sort=jumlah_laki_laki%20desc',
            method: 'GET',
            data: {},
            callback: function(data) {
                var json = data.response.docs;
                var categories = [];
                var serieslaki = [];
                var seriesperem = [];

                for(var i = 0 ; i<json.length ; i++){
                    categories.push(json[i].nama_kab);
                    serieslaki.push(json[i].jumlah_laki_laki);
                    seriesperem.push(json[i].jumlah_perempuan * -1);
                }
                Highcharts.chart('penduduk_15_60_tahun_jenis_kelamin_per_kab', {
                    chart: {
                        type: 'bar'
                    },
                    title: {
                        text: 'Kepadatan Jumlah Penduduk Umur 15 - 60 Tahun'
                    },
                    xAxis: [{
                        categories: categories,
                        reversed: false,
                        labels: {
                            step: 1
                        }
                    }, { // mirror axis on right side
                        opposite: true,
                        reversed: false,
                        categories: categories,
                        linkedTo: 0,
                        labels: {
                            step: 1
                        }
                    }],
                    yAxis: {
                        title: {
                            text: null
                        },
                        labels: {
                            formatter: function () {
                                return Math.abs(this.value) + '%';
                            }
                        }
                    },

                    plotOptions: {
                        series: {
                            stacking: 'normal'
                        }
                    },

                    tooltip: {
                        formatter: function () {
                            return '<b>' + this.series.name + ', ' + this.point.category + '</b><br/>' +
                                'Population: ' + Highcharts.numberFormat(Math.abs(this.point.y), 0);
                        }
                    },
                    series: [
                        {
                            "name": "Laki Laki",
                            "data": serieslaki
                        },{
                           "name": "Perempuan",
                            "data": seriesperem
                        }
                    ]
                });

            }
        });
    },
    persentasi_jenis_kelamin: function() {
        this.ajax({
            url:  'https://apiduk.jatimprov.go.id/solr/persentasi_jenis_kelamin/select?q=*&wt=json&indent=true&rows=2',
            method: 'GET',
            data: {},
            callback: function(data) {
                var json = data.response.docs;

                Highcharts.chart('persentasi_jenis_kelamin', {
                    chart: {
                        plotBackgroundColor: null,
                        plotBorderWidth: null,
                        plotShadow: false,
                        type: 'pie'
                    },
                    title: {
                        text: 'Persentasi Jenis Kelamin'
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
                                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                                style: {
                                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                                }
                            }
                        }
                    },
                    series: [{
                        name: 'Brands',
                        colorByPoint: true,
                        data: [{
                            name: 'Laki-laki',
                            y: json[0].jumlah
                        }, {
                            name: 'Perempuan',
                            y: json[1].jumlah
                        }]
                    }]
                });
              }
            });
    },
    maps: function() {
        this.ajax({
            url:  'https://apiduk.jatimprov.go.id/solr/jumlah_penduduk_per_kabupaten/select?q=*&wt=json&indent=true&rows=40&sort=jumlah%20desc',
            method: 'GET',
            data: {},
            callback: function(data) {
                var json = data.response.docs;
                var uluru = {lat: -7.2742, lng: 112.7278};
                var map = new google.maps.Map(document.getElementById('maps'), {
                  zoom: 4,
                  center: uluru
                });
                
                for(var i = 0 ; i<json.length ; i++){
                    
                    var marker = new google.maps.Marker({
                    position: {lat: json[i].latitude, lng: json[i].longitude},
                    map: map,
                    title: json[i].nama_kab
                    });

                    var content = json[i].label;     
                    
                    var infowindow = new google.maps.InfoWindow();
                    
                    google.maps.event.addListener(marker,'click', (function(marker,content,infowindow){ 
                        return function() {
                           infowindow.setContent(content);
                           infowindow.open(map,marker);
                        };
                    })(marker,content,infowindow));

                }
              }
            });
    },
    tables: function() {
        this.ajax({
            url:  'https://apiduk.jatimprov.go.id/solr/jumlah_penduduk_per_kabupaten/select?q=*&wt=json&indent=true&rows=40&sort=jumlah%20desc',
            method: 'GET',
            data: {},
            callback: function(data) {
                var json = data.response.docs;
                console.log(json)
                $('#example').DataTable( {
                    "data": json,
                    "columns": [
                        { "data": "nama_kab" },
                        { "data": "jumlah" },
                        { "data": "longitude" },
                        { "data": "latitude" },
                        { "data": "luas" },
                        { "data": "persen_luas" }
                    ]
                } );
            }
            });
    },
    ajax: function(option) {
            //this.showLoader();
            $.ajax({
                type: option.method,
                url: option.url,
                data: option.data,
                async: false,
                dataType: "json",
                success: function(data) {
                    $(option.output).html(data);
                    option.callback(data);
                    //Lampid.hideLoader();
                },
                error: function() {

                }
            });
        }
}

$(document).ready(function(){
    Highcharts.setOptions(Highcharts.darkUnika);
    Lampid.jumlah_penduduk_per_kabupaten();
    Lampid.penduduk_0_14_tahun_jenis_kelamin_per_kab();
    Lampid.penduduk_15_60_tahun_jenis_kelamin_per_kab();
    Lampid.persentasi_jenis_kelamin();
    Lampid.maps();
    Lampid.tables();
   
});
