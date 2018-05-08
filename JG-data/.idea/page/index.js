//nav右侧时间
function time() {
//获取当前时间
        var myDate = new Date();
//获取当前年
        var year=myDate.getFullYear();
//获取当前月
        var month=myDate.getMonth()+1;
//获取当前日
        var date=myDate.getDate();
        var day=year+'/'+month+"/"+date ;
        var day1 = new Date(Date.parse(day));
        var today = new Array('星期日','星期一','星期二','星期三','星期四','星期五','星期六');
        var week = today[day1.getDay()];
        $("#date").text(day);
        $("#week").text(week);
}
//echarts图形

function drawEcharts(ec){
    drawScHost(ec);
    drawScCheck(ec);
    drawScCheckc(ec);
    drawScxk(ec);
    drawAjly(ec);
    drawScSpccS1(ec);
    drawScSpccS2(ec);
    drawScSpccS3(ec)
    drawScSpccS4(ec)
    drawScSpcc(ec);
    drawLtHost(ec);
    drawLtCheck(ec);
    drawLtCheckc(ec);
    drawLtjyxk(ec);
    drawLtAjly(ec);
    drawLtSpccS1(ec);
    drawLtSpccS2(ec);
    drawLtSpccS3(ec);
    drawLtSpccS4(ec);
    drawLtSpcc(ec)
    drawCyHost(ec);
    drawCyCheck(ec);
    drawCyCheckc(ec);
    drawCyjyxk(ec)
    drawCyAjly(ec)
    drawCySpccS1(ec)
    drawCySpccS2(ec)
    drawCySpccS3(ec)
    drawCySpccS4(ec)
    drawCySpcc(ec)
    changeSection()
    drawScMap()
}
//生产-全省食品生产许可证办证情况
function drawScxk() {
    var Chart = echarts.init(document.getElementById('produce-certnumber'));
    var  option = {
        color:['#1c7198','#1690d1','#1cb2d7','#97d3dd','#88b0ba'],
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {

            x: 'center',
            data:['新办','变更','补证','延续','注销'],
            textStyle: {
                color: '#ffffff'          // 图例文字颜色
            }
        },
        series : [
            {
                name:'办证情况',
                type:'pie',
                radius : ['50%', '70%'],
                itemStyle : {
                    normal : {
                        label : {
                            show : true,
                            formatter: "{b} :{d}%"
                        },
                        labelLine : {show : true},

                    },
                    emphasis : {
                        label : {
                            show : true,
                            formatter: "{b} :{d}%",
                            position : 'center',
                        },

                    }
                },
                data:[
                    {value:335, name:'新办'},
                    {value:310, name:'变更'},
                    {value:234, name:'补证'},
                    {value:135, name:'延续'},
                    {value:1548, name:'注销'}
                ]
            }
        ]
    };
    Chart.setOption(option);

    $(window).resize(function(){
        Chart.resize();
    });
}
//生产-案件来源分析
function drawAjly() {
    var Chart = echarts.init(document.getElementById('check-origion'));
    var  option = {
        color:['#5facfe','#3ed36d','#f99525','#3e78fe','#9b9b9d','#e65ced'],
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        series : [

            {
                name:'案件来源',
                type:'pie',
                radius : [10, 100],
                center : ['50%', '50%'],
                roseType : 'radius',
                label: {
                    normal: {
                        show: true,
                        formatter: "{b} :{d}%"
                    },
                    emphasis: {
                        show: true,
                        formatter: "{b} : {d}%"
                    }
                },
                data:[
                    {value:10, name:'监督抽检'},
                    {value:5, name:'投诉举报'},
                    {value:15, name:'其他部门'},
                    {value:25, name:'其他'},
                    {value:20, name:'执法检查'},
                    {value:35, name:'日常监管'},
                ]
            }
        ]
    }
    Chart.setOption(option);
    $(window).resize(function(){
        Chart.resize();
    });
}
//生产-食品监督抽检（圆环图）
function drawScSpccS1() {
    var Chart = echarts.init(document.getElementById('ScSpccS1'));
    var  option = {
        color:['#1a56e8','#0de497'],
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        graphic:{
            type:'text',
            left:'center',
            top:'center',
            z:2,
            zlevel:100,
            style:{
                text:'90%',
                x:100,
                y:100,
                textAlign:'center',
                fill:'#eee758',
                weight:30,
                height:30
            }

        },
        series : [
            {
                name:'抽检情况',
                type:'pie',
                radius : ['50%', '70%'],
                itemStyle : {
                    normal : {
                        label : {
                            show : false,
                            formatter: "{b} :{d}%"
                        },
                        labelLine : {show : false},

                    },

                },
                data:[
                    {value:90, name:'合格'},
                    {value:10, name:'不合格'},
                ]
            }
        ]
    };

    Chart.setOption(option);
    $(window).resize(function(){
        Chart.resize();
    });
}
function drawScSpccS2() {
    var Chart = echarts.init(document.getElementById('ScSpccS2'));
    var  option = {
        color:['#1a56e8','#0de497'],
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        graphic:{
            type:'text',
            left:'center',
            top:'center',
            z:2,
            zlevel:100,
            style:{
                text:'90%',
                x:100,
                y:100,
                textAlign:'center',
                fill:'#eee758',
                weight:30,
                height:30
            }

        },
        series : [
            {
                name:'抽检情况',
                type:'pie',
                radius : ['50%', '70%'],
                itemStyle : {
                    normal : {
                        label : {
                            show : false,
                            formatter: "{b} :{d}%"
                        },
                        labelLine : {show : false},

                    },

                },
                data:[
                    {value:90, name:'合格'},
                    {value:10, name:'不合格'},
                ]
            }
        ]
    };

    Chart.setOption(option);
    $(window).resize(function(){
        Chart.resize();
    });
}
function drawScSpccS3() {
    var Chart = echarts.init(document.getElementById('ScSpccS3'));
    var  option = {
        color:['#1a56e8','#0de497'],
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        graphic:{
            type:'text',
            left:'center',
            top:'center',
            z:2,
            zlevel:100,
            style:{
                text:'90%',
                x:100,
                y:100,
                textAlign:'center',
                fill:'#eee758',
                weight:30,
                height:30
            }

        },
        series : [
            {
                name:'抽检情况',
                type:'pie',
                radius : ['50%', '70%'],
                itemStyle : {
                    normal : {
                        label : {
                            show : false,
                            formatter: "{b} :{d}%"
                        },
                        labelLine : {show : false},

                    },

                },
                data:[
                    {value:90, name:'合格'},
                    {value:10, name:'不合格'},
                ]
            }
        ]
    };

    Chart.setOption(option);
    $(window).resize(function(){
        Chart.resize();
    });
}
function drawScSpccS4() {
    var Chart = echarts.init(document.getElementById('ScSpccS4'));
    var  option = {
        color:['#1a56e8','#0de497'],
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        graphic:{
            type:'text',
            left:'center',
            top:'center',
            z:2,
            zlevel:100,
            style:{
                text:'90%',
                x:100,
                y:100,
                textAlign:'center',
                fill:'#eee758',
                weight:30,
                height:30
            }

        },
        series : [
            {
                name:'抽检情况',
                type:'pie',
                radius : ['50%', '70%'],
                itemStyle : {
                    normal : {
                        label : {
                            show : false,
                            formatter: "{b} :{d}%"
                        },
                        labelLine : {show : false},

                    },

                },
                data:[
                    {value:90, name:'合格'},
                    {value:10, name:'不合格'},
                ]
            }
        ]
    };

    Chart.setOption(option);
    $(window).resize(function(){
        Chart.resize();
    });
}
//生产-食品监督抽检（柱状图）
function drawScSpcc() {
    var Chart = echarts.init(document.getElementById('ScSpcc'));
    var  option = {
        grid: {
            x: 50,
            y: 10,
            x2: 0,
            y2: 30,
        },
        legend: {
            textStyle: {
                color: '#ffffff'          // 图例文字颜色
            },
            data:['批次'],
            x: 'right',
        },
        xAxis: {
            // data: ["2016第一季度","2016第二季度","2016第三季度","2016第四季度"],
            data: ["2016第1季度","2016第2季度","2016第3季度","2016第4季度"],
            splitLine:{show: false},//去除网格线
            axisLine:{
                lineStyle:{
                    color:'#fff',
                    width:1,//这里是为了突出显示加上的
                }
            }
        },
        yAxis: {
            splitLine:{show: false},//去除网格线
            axisLine:{
                lineStyle:{
                    color:'#fff',
                    width:1,//这里是为了突出显示加上的
                }
            }

        },
        series: [{
            name: '批次',
            type: 'bar',
            barWidth : 20,
            data: [1500, 900, 4006, 2600 ],
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: '#09e696'},
                            {offset: 1, color: '#1657e5'}
                        ]
                    ),
                    label : {
                        show: true,
                        position:'top',
                        color:'#fff'
                    }
                }


            }
        }],

    }
    Chart.setOption(option);
    $(window).resize(function(){
        Chart.resize();
    });
}
//生产-全省获证企业数量
function drawScHost() {
    var produce_hEcharts=echarts.init(document.getElementById('produce-hostnumber'));
    var produce_hOptions={
        grid:{
            show:true,
            borderWidth:0
        },
        legend:{
            textStyle:{
                color:'white'
            },
            selected:{
                '企业总量':true,
                '食品生产企业':false,
                '食品生产加工小作坊':false
            },
            selectedMode:'single',
            data:['企业总量','食品生产企业','食品生产加工小作坊']
        },
        xAxis:{
            type:'category',
            data:['2016第一季度','2016第二季度','2016第三季度','2016第四季度'],
            splitLine:{
                show:false
            },
            axisTick:{
                show:false
            },
            axisLabel:{
                color:'white'
            }
        },
        yAxis:{
            splitLine:{
                show:false
            },
            splitNumber:5,
            axisTick:{
                show:false
            },
            axisLabel:{
                textStyle:{
                    color:function(){
                        return '#fff'
                    }
                }
            }
        },
        series:[
            {
                type:'line',
                name:'企业总量',
                data:[2200,2500,1500,3000],
                itemStyle:{
                    normal:{
                        color:'rgb(238,227,132)'
                    }
                }
            },{
                type:'line',
                name:'食品生产企业',
                data:[2200,2500,1500,3000],
                itemStyle:{
                    normal:{
                        color:'rgb(120,132,205)'
                    }
                }
            },
            {
                type:'line',
                name:'食品生产加工小作坊',
                data:[120,150,300,220],
                itemStyle:{
                    normal:{
                        color:'rgb(116,219,208)'
                    }
                    
                }
            }
        ]
    }
    produce_hEcharts.on('legendselectchanged',function(params){
        // alert(1);
        var text='';
        // console.log(params)
    })
    produce_hEcharts.setOption(produce_hOptions);
    $('.produce-hostnumber .data-title').html('全省获证企业数量');
    $(window).resize(function(){
        produce_hEcharts.resize();
    });
    
}
//生产-日常监管力度
function drawScCheck(){
    var checkdaily_hEcharts=echarts.init(document.getElementById('check-dailyno'));
    var checkdaily_hOptions={
        grid:{
            show:true,
            borderWidth:0
        },
        legend:{
            selectedMode:false,
            data:[{
                name:'检查生产主体次'
            },{
                name:'出动检查人次'
            }],
            textStyle:{
                color:'white'
            },
        },
        xAxis:{
            type:'category',
            data:['2016第一季度','2016第二季度','2016第三季度','2016第四季度'],
            splitLine:{
                show:false
            },
            axisTick:{
                show:false
            },
            axisLabel:{
                margin:10,
                rotate:-30,
                color:'white'
            }
        },
        yAxis:{
            name:'单位：次',
            nameTextStyle:{
                color:'white'
            },
            splitLine:{
                show:false
            },
            splitNumber:5,
            axisTick:{
                show:false
            },
            axisLabel:{
                textStyle:{
                    color:function(){
                        return '#fff'
                    }
                }
            }
        },
        series:[
            {
                type:'bar',
                name:'检查生产主体次',
                data:[200,250,100,300],
                itemStyle:{
                    normal:{
                        color:new echarts.graphic.LinearGradient(
                            0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgb(122,156,217)'
                            }, {
                                offset: 1,
                                color: 'rgb(108,52,176)'
                            }]
                        )
                    }
                }
            },
            {
                type:'bar',
                name:'出动检查人次',
                data:[220,250,150,300],
                itemStyle:{
                    normal:{
                        color:new echarts.graphic.LinearGradient(
                            0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgb(226,114,102)'
                            }, {
                                offset: 1,
                                color: 'rgb(224,178,55)'
                            }]
                        )
                    }
                }
            }
        ]
    }
    checkdaily_hEcharts.setOption(checkdaily_hOptions);
    $('.check-dailyno .data-title').html('日常监管力度');
    $(window).resize(function(){
        checkdaily_hEcharts.resize();
    });
}
//生产-日常监管企业情况
function drawScCheckc(){
    var checkdaily_cEcharts=echarts.init(document.getElementById('check-dailycompany'));
    var checkdaily_cOptions={
        grid:{
            show:true,
            borderWidth:0
        },
        legend:{
            selectedMode:false,
            data:[{
                name:'检查主体数'
            },{
                name:'违法违规主体数'
            },{
                name:'完成整改主体数'
            }],
            textStyle:{
                color:'white'
            }
        },
        xAxis:{
            type:'category',
            data:['2016第一季度','2016第二季度','2016第三季度','2016第四季度'],
            splitLine:{
                show:false
            },
            axisTick:{
                show:false
            },
            axisLabel:{
                margin:10,
                rotate:-30,
                color:'white'
            }
        },
        yAxis:{
            name:'单位：次',
            nameTextStyle:{
                color:'white'
            },
            axisTick:{
                show:false
            },
            splitLine:{
                show:false
            },
            splitNumber:5,
            axisLabel:{
                textStyle:{
                    color:function(){
                        return '#fff'
                    }
                }
            }
        },
        series:[
            {
                type:'line',
                name:'检查主体数',
                data:[300,270,180,300],
                itemStyle:{
                    normal:{
                        color:'rgb(122,156,217)'
                    }
                }
            },{
                type:'bar',
                name:'违法违规主体数',
                data:[220,250,150,300],
                itemStyle:{
                    normal:{
                        color:new echarts.graphic.LinearGradient(
                            0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgb(226,114,102)'
                            }, {
                                offset: 1,
                                color: 'rgb(224,178,55)'
                            }]
                        )
                    }
                }
            },{
                type:'bar',
                name:'完成整改主体数',
                data:[220,250,150,300],
                itemStyle:{
                    normal:{
                        color:(function (){
                            var zrColor = require('zrender/tool/color');
                            return zrColor.getLinearGradient(
                                0, 0,1000, 0,
                                [[0, 'rgb(226,114,102)'],[1, 'rgb(224,178,55)']]
                            )
                        })(),
                    }
                }
            }
        ]
    }
    checkdaily_cEcharts.setOption(checkdaily_cOptions);
    $('.check-dailycompany .data-title').html('日常监管企业情况');
    $(window).resize(function(){
        checkdaily_cEcharts.resize();
    });
}

//流通-全省食品经营许可证办证情况
function drawLtjyxk() {
    var Chart = echarts.init(document.getElementById('lt-produce-certnumber'));
    var  option = {
        color:['#1c7198','#1690d1','#1cb2d7','#97d3dd','#88b0ba'],
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {

            x: 'center',
            data:['新办','变更','补证','延续','注销'],
            textStyle: {
                color: '#ffffff'          // 图例文字颜色
            }
        },
        series : [
            {
                name:'办证情况',
                type:'pie',
                radius : ['50%', '70%'],
                itemStyle : {
                    normal : {
                        label : {
                            show : true,
                            formatter: "{b} :{d}%"
                        },
                        labelLine : {show : true},

                    },
                    emphasis : {
                        label : {
                            show : true,
                            formatter: "{b} :{d}%",
                            position : 'center',
                        },

                    }
                },
                data:[
                    {value:335, name:'新办'},
                    {value:310, name:'变更'},
                    {value:234, name:'补证'},
                    {value:135, name:'延续'},
                    {value:1548, name:'注销'}
                ]
            }
        ]
    };
    Chart.setOption(option);

    $(window).resize(function(){
        Chart.resize();
    });
}
//流通-案件来源分析
function drawLtAjly() {
    var Chart = echarts.init(document.getElementById('lt-check-origion'));
    var  option = {
        color:['#5facfe','#3ed36d','#f99525','#3e78fe','#9b9b9d','#e65ced'],
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        series : [

            {
                name:'案件来源',
                type:'pie',
                radius : [10, 100],
                center : ['50%', '50%'],
                roseType : 'radius',
                label: {
                    normal: {
                        show: true,
                        formatter: "{b} :{d}%"
                    },
                    emphasis: {
                        show: true,
                        formatter: "{b} : {d}%"
                    }
                },
                data:[
                    {value:10, name:'监督抽检'},
                    {value:5, name:'投诉举报'},
                    {value:15, name:'其他部门'},
                    {value:25, name:'其他'},
                    {value:20, name:'执法检查'},
                    {value:35, name:'日常监管'},
                ]
            }
        ]
    }
    Chart.setOption(option);
    $(window).resize(function(){
        Chart.resize();
    });
}
//流通-食品监督抽检（圆环图）
function drawLtSpccS1() {
    var Chart = echarts.init(document.getElementById('LtSpccS1'));
    var  option = {
        color:['#1a56e8','#0de497'],
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        graphic:{
            type:'text',
            left:'center',
            top:'center',
            z:2,
            zlevel:100,
            style:{
                text:'90%',
                x:100,
                y:100,
                textAlign:'center',
                fill:'#eee758',
                weight:30,
                height:30
            }

        },
        series : [
            {
                name:'抽检情况',
                type:'pie',
                radius : ['50%', '70%'],
                itemStyle : {
                    normal : {
                        label : {
                            show : false,
                            formatter: "{b} :{d}%"
                        },
                        labelLine : {show : false},

                    },

                },
                data:[
                    {value:90, name:'合格'},
                    {value:10, name:'不合格'},
                ]
            }
        ]
    };

    Chart.setOption(option);
    $(window).resize(function(){
        Chart.resize();
    });
}
function drawLtSpccS2() {
    var Chart = echarts.init(document.getElementById('LtSpccS2'));
    var  option = {
        color:['#1a56e8','#0de497'],
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        graphic:{
            type:'text',
            left:'center',
            top:'center',
            z:2,
            zlevel:100,
            style:{
                text:'90%',
                x:100,
                y:100,
                textAlign:'center',
                fill:'#eee758',
                weight:30,
                height:30
            }

        },
        series : [
            {
                name:'抽检情况',
                type:'pie',
                radius : ['50%', '70%'],
                itemStyle : {
                    normal : {
                        label : {
                            show : false,
                            formatter: "{b} :{d}%"
                        },
                        labelLine : {show : false},

                    },

                },
                data:[
                    {value:90, name:'合格'},
                    {value:10, name:'不合格'},
                ]
            }
        ]
    };

    Chart.setOption(option);
    $(window).resize(function(){
        Chart.resize();
    });
}
function drawLtSpccS3() {
    var Chart = echarts.init(document.getElementById('LtSpccS3'));
    var  option = {
        color:['#1a56e8','#0de497'],
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        graphic:{
            type:'text',
            left:'center',
            top:'center',
            z:2,
            zlevel:100,
            style:{
                text:'90%',
                x:100,
                y:100,
                textAlign:'center',
                fill:'#eee758',
                weight:30,
                height:30
            }

        },
        series : [
            {
                name:'抽检情况',
                type:'pie',
                radius : ['50%', '70%'],
                itemStyle : {
                    normal : {
                        label : {
                            show : false,
                            formatter: "{b} :{d}%"
                        },
                        labelLine : {show : false},

                    },

                },
                data:[
                    {value:90, name:'合格'},
                    {value:10, name:'不合格'},
                ]
            }
        ]
    };

    Chart.setOption(option);
    $(window).resize(function(){
        Chart.resize();
    });
}
function drawLtSpccS4() {
    var Chart = echarts.init(document.getElementById('LtSpccS4'));
    var  option = {
        color:['#1a56e8','#0de497'],
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        graphic:{
            type:'text',
            left:'center',
            top:'center',
            z:2,
            zlevel:100,
            style:{
                text:'90%',
                x:100,
                y:100,
                textAlign:'center',
                fill:'#eee758',
                weight:30,
                height:30
            }

        },
        series : [
            {
                name:'抽检情况',
                type:'pie',
                radius : ['50%', '70%'],
                itemStyle : {
                    normal : {
                        label : {
                            show : false,
                            formatter: "{b} :{d}%"
                        },
                        labelLine : {show : false},

                    },

                },
                data:[
                    {value:90, name:'合格'},
                    {value:10, name:'不合格'},
                ]
            }
        ]
    };

    Chart.setOption(option);
    $(window).resize(function(){
        Chart.resize();
    });
}
//流通-食品监督抽检（柱状图）
function drawLtSpcc() {
    var Chart = echarts.init(document.getElementById('LtSpcc'));
    var  option = {
        grid: {
            x: 50,
            y: 10,
            x2: 0,
            y2: 30,
        },
        legend: {
            textStyle: {
                color: '#ffffff'          // 图例文字颜色
            },
            data:['批次'],
            x: 'right',
        },
        xAxis: {
            // data: ["2016第一季度","2016第二季度","2016第三季度","2016第四季度"],
            data: ["2016第1季度","2016第2季度","2016第3季度","2016第4季度"],
            splitLine:{show: false},//去除网格线
            axisLine:{
                lineStyle:{
                    color:'#fff',
                    width:1,//这里是为了突出显示加上的
                }
            }
        },
        yAxis: {
            splitLine:{show: false},//去除网格线
            axisLine:{
                lineStyle:{
                    color:'#fff',
                    width:1,//这里是为了突出显示加上的
                }
            }

        },
        series: [{
            name: '批次',
            type: 'bar',
            barWidth : 20,
            data: [1500, 900, 4006, 2600 ],
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: '#09e696'},
                            {offset: 1, color: '#1657e5'}
                        ]
                    ),
                    label : {
                        show: true,
                        position:'top',
                        color:'#fff'
                    }
                }


            }
        }],

    }
    Chart.setOption(option);
    $(window).resize(function(){
        Chart.resize();
    });
}

//餐饮-全省食品经营许可证办证情况
function drawCyjyxk() {
    var Chart = echarts.init(document.getElementById('cy-produce-certnumber'));
    var  option = {
        color:['#1c7198','#1690d1','#1cb2d7','#97d3dd','#88b0ba'],
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            x: 'center',
            data:['新办','变更','补证','延续','注销'],
            textStyle: {
                color: '#ffffff'          // 图例文字颜色
            }
        },
        series : [
            {
                name:'办证情况',
                type:'pie',
                radius : ['50%', '70%'],
                itemStyle : {
                    normal : {
                        label : {
                            show : true,
                            formatter: "{b} :{d}%"
                        },
                        labelLine : {show : true},

                    },
                    emphasis : {
                        label : {
                            show : true,
                            formatter: "{b} :{d}%",
                            position : 'center',
                        },

                    }
                },
                data:[
                    {value:335, name:'新办'},
                    {value:310, name:'变更'},
                    {value:234, name:'补证'},
                    {value:135, name:'延续'},
                    {value:1548, name:'注销'}
                ]
            }
        ]
    };
    Chart.setOption(option);

    $(window).resize(function(){
        Chart.resize();
    });
}
//流通-全省获证企业数量
function drawLtHost() {
    var produce_hEcharts=echarts.init(document.getElementById('lt-produce-hostnumber'));
    var produce_hOptions={
        grid:{
          show:true,
            borderWidth:0
        },
        legend:{
            textStyle:{
                color:'white'
            },
            selected:{
                '企业总量':true,
                '食品生产企业':false,
                '食品生产加工小作坊':false
            },
            selectedMode:'single',
            data:['企业总量','食品生产企业','食品生产加工小作坊']
        },
        xAxis:{
            type:'category',
            data:['2016第一季度','2016第二季度','2016第三季度','2016第四季度'],
            splitLine:{
                show:false
            },
            axisTick:{
                show:false
            },
            axisLabel:{
                color:'white'
            }
        },
        yAxis:{
            splitLine:{
                show:false
            },
            splitNumber:5,
            axisTick:{
                show:false
            },
            axisLabel:{
                textStyle:{
                    color:function(){
                        return '#fff'
                    }
                }
            }
        },
        series:[
            {
                type:'line',
                name:'企业总量',
                data:[2200,2500,1500,3000],
                itemStyle:{
                    normal:{
                        color:'rgb(238,227,132)'
                    }
                }
            },{
                type:'line',
                name:'食品生产企业',
                data:[2200,2500,1500,3000],
                itemStyle:{
                    normal:{
                        color:'rgb(120,132,205)'
                    }
                }
            },
            {
                type:'line',
                name:'食品生产加工小作坊',
                data:[120,150,300,220],
                itemStyle:{
                    normal:{
                        color:'rgb(116,219,208)'
                    }
                    
                }
            }
        ]
    }
    produce_hEcharts.on('legendselectchanged',function(params){
        // alert(1);
        var text='';
        // console.log(params)
    })
    produce_hEcharts.setOption(produce_hOptions);
    $('.produce-hostnumber .data-title').html('全省获证企业数量');
    $(window).resize(function(){
        produce_hEcharts.resize();
    });
    
}
//流通-日常监管力度
function drawLtCheck(){
    var checkdaily_hEcharts=echarts.init(document.getElementById('lt-check-dailyno'));
    var checkdaily_hOptions={
        grid:{
            show:true,
            borderWidth:0
        },
        legend:{
            selectedMode:false,
            data:[{
                name:'检查生产主体次'
            },{
                name:'出动检查人次'
            }],
            textStyle:{
                color:'white'
            },
        },
        xAxis:{
            type:'category',
            data:['2016第一季度','2016第二季度','2016第三季度','2016第四季度'],
            splitLine:{
                show:false
            },
            axisTick:{
                show:false
            },
            axisLabel:{
                margin:10,
                rotate:-30,
                color:'white'
            }
        },
        yAxis:{
            name:'单位：次',
            nameTextStyle:{
                color:'white'
            },
            splitLine:{
                show:false
            },
            splitNumber:5,
            axisTick:{
                show:false
            },
            axisLabel:{
                textStyle:{
                    color:function(){
                        return '#fff'
                    }
                }
            }
        },
        series:[
            {
                type:'bar',
                name:'检查生产主体次',
                data:[200,250,100,300],
                itemStyle:{
                    normal:{
                        color:new echarts.graphic.LinearGradient(
                            0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgb(122,156,217)'
                            }, {
                                offset: 1,
                                color: 'rgb(108,52,176)'
                            }]
                        )
                    }
                }
            },
            {
                type:'bar',
                name:'出动检查人次',
                data:[220,250,150,300],
                itemStyle:{
                    normal:{
                        color:new echarts.graphic.LinearGradient(
                            0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgb(226,114,102)'
                            }, {
                                offset: 1,
                                color: 'rgb(224,178,55)'
                            }]
                        )
                    }
                }
            }
        ]
    }
    checkdaily_hEcharts.setOption(checkdaily_hOptions);
    $('.check-dailyno .data-title').html('日常监管力度');
    $(window).resize(function(){
        checkdaily_hEcharts.resize();
    });
}
//流通-日常监管企业情况
function drawLtCheckc(){
    var checkdaily_cEcharts=echarts.init(document.getElementById('lt-check-dailycompany'));
    var checkdaily_cOptions={
        grid:{
            show:true,
            borderWidth:0
        },
        legend:{
            selectedMode:false,
            data:[{
                name:'检查主体数'
            },{
                name:'违法违规主体数'
            },{
                name:'完成整改主体数'
            }],
            textStyle:{
                color:'white'
            }
        },
        xAxis:{
            type:'category',
            data:['2016第一季度','2016第二季度','2016第三季度','2016第四季度'],
            splitLine:{
                show:false
            },
            axisTick:{
                show:false
            },
            axisLabel:{
                margin:10,
                rotate:-30,
                color:'white'
            }
        },
        yAxis:{
            name:'单位：次',
            nameTextStyle:{
                color:'white'
            },
            axisTick:{
                show:false
            },
            splitLine:{
                show:false
            },
            splitNumber:5,
            axisLabel:{
                textStyle:{
                    color:function(){
                        return '#fff'
                    }
                }
            }
        },
        series:[
            {
                type:'line',
                name:'检查主体数',
                data:[300,270,180,300],
                itemStyle:{
                    normal:{
                        color:'rgb(122,156,217)'
                    }
                }
            },{
                type:'bar',
                name:'违法违规主体数',
                data:[220,250,150,300],
                itemStyle:{
                    normal:{
                        color:new echarts.graphic.LinearGradient(
                            0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgb(226,114,102)'
                            }, {
                                offset: 1,
                                color: 'rgb(224,178,55)'
                            }]
                        )
                    }
                }
            },{
                type:'bar',
                name:'完成整改主体数',
                data:[220,250,150,300],
                itemStyle:{
                    normal:{
                        color:(function (){
                            var zrColor = require('zrender/tool/color');
                            return zrColor.getLinearGradient(
                                0, 0,1000, 0,
                                [[0, 'rgb(226,114,102)'],[1, 'rgb(224,178,55)']]
                            )
                        })(),
                    }
                }
            }
        ]
    }
    checkdaily_cEcharts.setOption(checkdaily_cOptions);
    $('.check-dailycompany .data-title').html('日常监管企业情况');
    $(window).resize(function(){
        checkdaily_cEcharts.resize();
    });
}


//餐饮-案件来源分析
function drawCyAjly() {
    var Chart = echarts.init(document.getElementById('cy-check-origion'));
    var  option = {
        color:['#5facfe','#3ed36d','#f99525','#3e78fe','#9b9b9d','#e65ced'],
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        series : [

            {
                name:'案件来源',
                type:'pie',
                radius : [10, 100],
                center : ['50%', '50%'],
                roseType : 'radius',
                label: {
                    normal: {
                        show: true,
                        formatter: "{b} :{d}%"
                    },
                    emphasis: {
                        show: true,
                        formatter: "{b} : {d}%"
                    }
                },
                data:[
                    {value:10, name:'监督抽检'},
                    {value:5, name:'投诉举报'},
                    {value:15, name:'其他部门'},
                    {value:25, name:'其他'},
                    {value:20, name:'执法检查'},
                    {value:35, name:'日常监管'},
                ]
            }
        ]
    }
    Chart.setOption(option);
    $(window).resize(function(){
        Chart.resize();
    });
}
//餐饮-食品监督抽检（圆环图）
function drawCySpccS1() {
    var Chart = echarts.init(document.getElementById('CySpccS1'));
    var  option = {
        color:['#1a56e8','#0de497'],
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        graphic:{
            type:'text',
            left:'center',
            top:'center',
            z:2,
            zlevel:100,
            style:{
                text:'90%',
                x:100,
                y:100,
                textAlign:'center',
                fill:'#eee758',
                weight:30,
                height:30
            }

        },
        series : [
            {
                name:'抽检情况',
                type:'pie',
                radius : ['50%', '70%'],
                itemStyle : {
                    normal : {
                        label : {
                            show : false,
                            formatter: "{b} :{d}%"
                        },
                        labelLine : {show : false},

                    },

                },
                data:[
                    {value:90, name:'合格'},
                    {value:10, name:'不合格'},
                ]
            }
        ]
    };

    Chart.setOption(option);
    $(window).resize(function(){
        Chart.resize();
    });
}
function drawCySpccS2() {
    var Chart = echarts.init(document.getElementById('CySpccS2'));
    var  option = {
        color:['#1a56e8','#0de497'],
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        graphic:{
            type:'text',
            left:'center',
            top:'center',
            z:2,
            zlevel:100,
            style:{
                text:'90%',
                x:100,
                y:100,
                textAlign:'center',
                fill:'#eee758',
                weight:30,
                height:30
            }

        },
        series : [
            {
                name:'抽检情况',
                type:'pie',
                radius : ['50%', '70%'],
                itemStyle : {
                    normal : {
                        label : {
                            show : false,
                            formatter: "{b} :{d}%"
                        },
                        labelLine : {show : false},

                    },

                },
                data:[
                    {value:90, name:'合格'},
                    {value:10, name:'不合格'},
                ]
            }
        ]
    };

    Chart.setOption(option);
    $(window).resize(function(){
        Chart.resize();
    });
}
function drawCySpccS3() {
    var Chart = echarts.init(document.getElementById('CySpccS3'));
    var  option = {
        color:['#1a56e8','#0de497'],
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        graphic:{
            type:'text',
            left:'center',
            top:'center',
            z:2,
            zlevel:100,
            style:{
                text:'90%',
                x:100,
                y:100,
                textAlign:'center',
                fill:'#eee758',
                weight:30,
                height:30
            }

        },
        series : [
            {
                name:'抽检情况',
                type:'pie',
                radius : ['50%', '70%'],
                itemStyle : {
                    normal : {
                        label : {
                            show : false,
                            formatter: "{b} :{d}%"
                        },
                        labelLine : {show : false},

                    },

                },
                data:[
                    {value:90, name:'合格'},
                    {value:10, name:'不合格'},
                ]
            }
        ]
    };

    Chart.setOption(option);
    $(window).resize(function(){
        Chart.resize();
    });
}
function drawCySpccS4() {
    var Chart = echarts.init(document.getElementById('CySpccS4'));
    var  option = {
        color:['#1a56e8','#0de497'],
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        graphic:{
            type:'text',
            left:'center',
            top:'center',
            z:2,
            zlevel:100,
            style:{
                text:'90%',
                x:100,
                y:100,
                textAlign:'center',
                fill:'#eee758',
                weight:30,
                height:30
            }

        },
        series : [
            {
                name:'抽检情况',
                type:'pie',
                radius : ['50%', '70%'],
                itemStyle : {
                    normal : {
                        label : {
                            show : false,
                            formatter: "{b} :{d}%"
                        },
                        labelLine : {show : false},

                    },

                },
                data:[
                    {value:90, name:'合格'},
                    {value:10, name:'不合格'},
                ]
            }
        ]
    };

    Chart.setOption(option);
    $(window).resize(function(){
        Chart.resize();
    });
}
//餐饮-食品监督抽检（柱状图）
function drawCySpcc() {
    var Chart = echarts.init(document.getElementById('CySpcc'));
    var  option = {
        grid: {
            x: 50,
            y: 10,
            x2: 0,
            y2: 30,
        },
        legend: {
            textStyle: {
                color: '#ffffff'          // 图例文字颜色
            },
            data:['批次'],
            x: 'right',
        },
        xAxis: {
            // data: ["2016第一季度","2016第二季度","2016第三季度","2016第四季度"],
            data: ["2016第1季度","2016第2季度","2016第3季度","2016第4季度"],
            splitLine:{show: false},//去除网格线
            axisLine:{
                lineStyle:{
                    color:'#fff',
                    width:1,//这里是为了突出显示加上的
                }
            }
        },
        yAxis: {
            splitLine:{show: false},//去除网格线
            axisLine:{
                lineStyle:{
                    color:'#fff',
                    width:1,//这里是为了突出显示加上的
                }
            }

        },
        series: [{
            name: '批次',
            type: 'bar',
            barWidth : 20,
            data: [1500, 900, 4006, 2600 ],
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: '#09e696'},
                            {offset: 1, color: '#1657e5'}
                        ]
                    ),
                    label : {
                        show: true,
                        position:'top',
                        color:'#fff'
                    }
                }


            }
        }],

    }
    Chart.setOption(option);
    $(window).resize(function(){
        Chart.resize();
    });
}

//餐饮-全省获证企业数量
function drawCyHost() {
    var produce_hEcharts=echarts.init(document.getElementById('cy-produce-hostnumber'));
    var produce_hOptions={
        grid:{
            show:true,
            borderWidth:0
        },
        legend:{
            textStyle:{
                color:'white'
            },
            selected:{
                '企业总量':true,
                '食品生产企业':false,
                '食品生产加工小作坊':false
            },
            selectedMode:'single',
            data:['企业总量','食品生产企业','食品生产加工小作坊']
        },
        xAxis:{
            type:'category',
            data:['2016第一季度','2016第二季度','2016第三季度','2016第四季度'],
            splitLine:{
                show:false
            },
            axisTick:{
                show:false
            },
            axisLabel:{
                color:'white'
            }
        },
        yAxis:{
            splitLine:{
                show:false
            },
            splitNumber:5,
            axisTick:{
                show:false
            },
            axisLabel:{
                textStyle:{
                    color:function(){
                        return '#fff'
                    }
                }
            }
        },
        series:[
            {
                type:'line',
                name:'企业总量',
                data:[2200,2500,1500,3000],
                itemStyle:{
                    normal:{
                        color:'rgb(238,227,132)'
                    }
                }
            },{
                type:'line',
                name:'食品生产企业',
                data:[2200,2500,1500,3000],
                itemStyle:{
                    normal:{
                        color:'rgb(120,132,205)'
                    }
                }
            },
            {
                type:'line',
                name:'食品生产加工小作坊',
                data:[120,150,300,220],
                itemStyle:{
                    normal:{
                        color:'rgb(116,219,208)'
                    }
                    
                }
            }
        ]
    }
    produce_hEcharts.on('legendselectchanged',function(params){
        // alert(1);
        var text='';
        // console.log(params)
    })
    produce_hEcharts.setOption(produce_hOptions);
    $('.produce-hostnumber .data-title').html('全省获证企业数量');
    $(window).resize(function(){
        produce_hEcharts.resize();
    });
    
}
//餐饮-日常监管力度
function drawCyCheck(){
    var checkdaily_hEcharts=echarts.init(document.getElementById('cy-check-dailyno'));
    var checkdaily_hOptions={
        grid:{
            show:true,
            borderWidth:0
        },
        legend:{
            selectedMode:false,
            data:[{
                name:'检查生产主体次'
            },{
                name:'出动检查人次'
            }],
            textStyle:{
                color:'white'
            },
        },
        xAxis:{
            type:'category',
            data:['2016第一季度','2016第二季度','2016第三季度','2016第四季度'],
            splitLine:{
                show:false
            },
            axisTick:{
                show:false
            },
            axisLabel:{
                margin:10,
                rotate:-30,
                color:'white'
            }
        },
        yAxis:{
            name:'单位：次',
            nameTextStyle:{
                color:'white'
            },
            splitLine:{
                show:false
            },
            splitNumber:5,
            axisTick:{
                show:false
            },
            axisLabel:{
                textStyle:{
                    color:function(){
                        return '#fff'
                    }
                }
            }
        },
        series:[
            {
                type:'bar',
                name:'检查生产主体次',
                data:[200,250,100,300],
                itemStyle:{
                    normal:{
                        color:new echarts.graphic.LinearGradient(
                            0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgb(122,156,217)'
                            }, {
                                offset: 1,
                                color: 'rgb(108,52,176)'
                            }]
                        )
                    }
                }
            },
            {
                type:'bar',
                name:'出动检查人次',
                data:[220,250,150,300],
                itemStyle:{
                    normal:{
                        color:new echarts.graphic.LinearGradient(
                            0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgb(226,114,102)'
                            }, {
                                offset: 1,
                                color: 'rgb(224,178,55)'
                            }]
                        )
                    }
                }
            }
        ]
    }
    checkdaily_hEcharts.setOption(checkdaily_hOptions);
    $('.check-dailyno .data-title').html('日常监管力度');
    $(window).resize(function(){
        checkdaily_hEcharts.resize();
    });
}
//餐饮-日常监管企业情况
function drawCyCheckc(){
    var checkdaily_cEcharts=echarts.init(document.getElementById('cy-check-dailycompany'));
    var checkdaily_cOptions={
        grid:{
            show:true,
            borderWidth:0
        },
        legend:{
            selectedMode:false,
            data:[{
                name:'检查主体数'
            },{
                name:'违法违规主体数'
            },{
                name:'完成整改主体数'
            }],
            textStyle:{
                color:'white'
            }
        },
        xAxis:{
            type:'category',
            data:['2016第一季度','2016第二季度','2016第三季度','2016第四季度'],
            splitLine:{
                show:false
            },
            axisTick:{
                show:false
            },
            axisLabel:{
                margin:10,
                rotate:-30,
                color:'white'
            }
        },
        yAxis:{
            name:'单位：次',
            nameTextStyle:{
                color:'white'
            },
            axisTick:{
                show:false
            },
            splitLine:{
                show:false
            },
            splitNumber:5,
            axisLabel:{
                textStyle:{
                    color:function(){
                        return '#fff'
                    }
                }
            }
        },
        series:[
            {
                type:'line',
                name:'检查主体数',
                data:[300,270,180,300],
                itemStyle:{
                    normal:{
                        color:'rgb(122,156,217)'
                    }
                }
            },{
                type:'bar',
                name:'违法违规主体数',
                data:[220,250,150,300],
                itemStyle:{
                    normal:{
                        color:new echarts.graphic.LinearGradient(
                            0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgb(226,114,102)'
                            }, {
                                offset: 1,
                                color: 'rgb(224,178,55)'
                            }]
                        )
                    }
                }
            },{
                type:'bar',
                name:'完成整改主体数',
                data:[220,250,150,300],
                itemStyle:{
                    normal:{
                        color:(function (){
                            var zrColor = require('zrender/tool/color');
                            return zrColor.getLinearGradient(
                                0, 0,1000, 0,
                                [[0, 'rgb(226,114,102)'],[1, 'rgb(224,178,55)']]
                            )
                        })(),
                    }
                }
            }
        ]
    }
    checkdaily_cEcharts.setOption(checkdaily_cOptions);
    $('.check-dailycompany .data-title').html('日常监管企业情况');
    $(window).resize(function(){
        checkdaily_cEcharts.resize();
    });
}

//切换页面
function changeSection(){
    $('#tab-list li').on('click',function(e){
        var index=$(this).index();
        var section=$('.main')[index];
        if('.loadShoeSection'){
            $('.loadShoeSection').removeClass('loadShoeSection');
        }
        $('#tab-list .active').removeClass('active').addClass('border');
        $(this).addClass('active').removeClass('border');
        if($(section).hasClass('showSection')){
            return;
        }
        $('.showSection').removeClass('showSection');
        $(section).addClass('showSection');
    })
}

//生产-地图
function drawScMap() {
//     var mapChart = echarts.init(document.getElementById('sc-map'));
//     var option={
//         tooltip: {
// //                    show: false //不显示提示标签
//             formatter: '{b}' //提示标签格式
// //            backgroundColor:"#ff7f50",//提示标签背景颜色
// //            textStyle:{color:"#fff"} //提示标签字体颜色
//         },
//         layoutCenter: ['45%', '60%'],//地图位置
//         layoutSize: 700,//地图大小
//         series: [{
//             type: 'map',
//             mapType: '贵州',
//             label: {
//                 normal: {
//                     show: true,//显示省份标签
//                     textStyle:{color:"#535353"}//省份标签字体颜色
//                 },
//                 emphasis: {//对应的鼠标悬浮效果
//                     show: true,
//                     textStyle:{color:"#fff"}
//                 }
//             },
//             itemStyle: {
//                 normal: {
//                     borderWidth: 0.5,//区域边框宽度
//                     borderColor: '#fff',//区域边框颜色
//                     areaColor:"#dddbdb"//区域颜色
//                 },
//                 emphasis: {
//                     borderWidth: 0.5,
//                     borderColor: '#fff',
//                     areaColor:"#00243e"
//                 }
//             }
//             // data:[
//             //     {name:'北京', selected:true},
//             //     {name:'贵州', selected:true},
//             //     {name:'四川', selected:true},
//             //     {name:'新疆', selected:true},
//             //     {name:'山西', selected:true},
//             //     {name:'江西', selected:true},
//             //     {name:'吉林', selected:true},
//             //     {name:'广东', selected:true}
//             // ]
//         }]
//     };


    var mapChart = echarts.init(document.getElementById('sc-map'));
    var option = {

        tooltip : {
            trigger: 'item',
            formatter: function(a){
                return a[2];
            }
        },
        dataRange: {
            min: 0,
            max: 1000,
            color:['orange','yellow'],
            text:['高','低'],   // 文本，默认为数值文本
            calculable : true
        },
        series : [
            {
                name: '数据名称',
                type: 'map',
                mapType: '贵州',
                selectedMode : 'single',
                label: {
                    normal: {
                        show: true,//显示省份标签
                        textStyle:{color:"#fff"}//省份标签字体颜色
                    },
                    emphasis: {//对应的鼠标悬浮效果
                        show: true,
                        textStyle:{color:"#fff"}
                    }
                },
                itemStyle: {
                    normal: {
                        borderWidth: 2,//区域边框宽度
                        borderColor: '#3370af',//区域边框颜色
                        areaColor:"#080c25",//区域颜色
                    },
                    emphasis: {
                        borderWidth: 2,
                        borderColor: '#65ebd2',
                        areaColor:"#080c25"
                    },

                },
                data:[
                    {name: '贵阳',value: Math.round(Math.random()*1000)},

                ]
            }
        ]
    };
    mapChart.setOption(option);
    mapChart.setOption(option);
    $(window).resize(function(){
        mapChart.resize();
    });
}





