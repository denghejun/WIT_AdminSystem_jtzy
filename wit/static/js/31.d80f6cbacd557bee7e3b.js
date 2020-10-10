webpackJsonp([31],{UtJR:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("pFYg"),i=a.n(n),r=a("Xxa5"),l=a.n(r),o=a("exGp"),s=a.n(o),d={name:"search-by-day",data:function(){return{valueOfDay:""}},created:function(){this.valueOfDay=this.time},props:{time:{type:String}},methods:{searchByDay:function(){var e={valueOfDay:this.valueOfDay};this.$emit("searchByDay",e)}}},c={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"block"},[a("b",[e._v("日期选择：")]),e._v(" "),a("el-date-picker",{attrs:{"value-format":"yyyy-MM-dd",type:"date",size:"small",placeholder:"选择日期"},model:{value:e.valueOfDay,callback:function(t){e.valueOfDay=t},expression:"valueOfDay"}}),e._v(" "),a("el-button",{staticStyle:{"background-color":"aliceblue"},attrs:{slot:"append",size:"small",icon:"el-icon-search"},on:{click:e.searchByDay},slot:"append"},[e._v("查询")])],1)},staticRenderFns:[]};var u=a("VU/8")(d,c,!1,function(e){a("nnUt")},"data-v-2005cffc",null).exports,p=a("mF0L"),b={components:{SearchByDay:u},name:"leakage-index",data:function(){return{meterFlag:!1,buildingFlag:!1,showTable:!1,time:"",radio:"1",tableData:[],titleName:"校区名称",tableColumn:[{name:"综合漏损指数",prop:"leakageIndex"},{name:"当日水量",prop:"total"},{name:"前周同期日水量",prop:"beforeTotal"},{name:"当日最小量",prop:"min"},{name:"前周同期日最小量",prop:"beforeMin"},{name:"日量周同比增量",prop:"addTotal"},{name:"日量周同比增幅",prop:"addRangeTotal"},{name:"最小量周同比增量",prop:"addMin"},{name:"最小量同比增幅",prop:"addRangeMin"}],columns:[{name:"序号",prop:"index"},{name:"校区名称",prop:"name"},{name:"综合漏损指数",prop:"leakageIndex"},{name:"当日水量",prop:"total"},{name:"前周同期日水量",prop:"beforeTotal"},{name:"当日最小量",prop:"min"},{name:"前周同期日最小量",prop:"beforeMin"},{name:"日量周同比增量",prop:"addTotal"},{name:"日量周同比增幅",prop:"addRangeTotal"},{name:"最小量周同比增量",prop:"addMin"},{name:"最小量同比增幅",prop:"addRangeMin"}],title:"校区漏损指数概况",url:"CampusWaterSupervision"}},created:function(){var e=new Date((new Date).getTime()-864e5),t=e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate();this.time=t},mounted:function(){this.changeRadio()},methods:{locateBuilding:function(e){var t=this,a=void 0,n=void 0,i=void 0;this.$api.buildingInf.findOne(e.id).then(function(e){a=e.name,n=e.tag.substring(1,e.tag.length-1).split(",")[0],i=e.tag.substring(1,e.tag.length-1).split(",")[1],t.$router.push({path:"/BmapGL",query:{marker:{lng:n,lat:i},info:a}})})},locateMeter:function(e){var t=this,a=void 0,n=void 0,i=void 0;this.$api.waterMeterInf.findOne(e.id).then(function(e){a=e.name,n=e.tag.substring(1,e.tag.length-1).split(",")[0],i=e.tag.substring(1,e.tag.length-1).split(",")[1],t.$router.push({path:"/BmapGL",query:{marker:{lng:n,lat:i},info:a}})})},searchByDay:function(e){this.time=e.valueOfDay,this.changeRadio()},changeRadio:function(){switch(this.showTable=!1,this.radio){case"1":this.titleName="校区名称",this.title="校区漏损指数概况",this.url="CampusWaterSupervision",this.tableData=[],this.regionInf(),this.meterFlag=!1,this.buildingFlag=!1;break;case"2":this.titleName="DMA名称",this.title="DMA漏损指数概况",this.url="DMAWaterSupervision",this.tableData=[],this.regionInf(),this.meterFlag=!1,this.buildingFlag=!1;break;case"3":this.titleName="建筑名称",this.title="建筑漏损指数概况",this.url="BuildingWaterSupervision",this.tableData=[],this.buildingLeakageIndex(),this.meterFlag=!1,this.buildingFlag=!0;break;default:this.titleName="水表名称",this.title="水表漏损指数概况",this.url="WaterUseSupervision",this.tableData=[],this.waterMeterLeakageIndex(),this.meterFlag=!0,this.buildingFlag=!1}},change:function(){this.changeRadio()},regionInf:function(){var e=this;return s()(l.a.mark(function t(){var a;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$api.regionInf.findAll();case 2:(a=t.sent)&&("1"==e.radio?e.campusLeakageIndex(a):e.dmaLeakageIndex(a));case 4:case"end":return t.stop()}},t,e)}))()},campusLeakageIndex:function(e){var t=this;if("object"==(void 0===e?"undefined":i()(e))&&e.length>0){var a,n,r=0,l=[];(e=e.filter(function(e){return"REGION"==e.statisticstype})).forEach(function(i,o){a={waterregionid:i.id,time:t.time},t.$api.regionData.findLeakageIndex(a).then(function(a){n=a.data,l=t.getTableData(i,o,l,n),++r==e.length&&(t.tableData=l.sort(t.compare("index")),t.showTable=!0)})})}},dmaLeakageIndex:function(e){var t=this;return s()(l.a.mark(function a(){var n,r,o,s;return l.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:"object"==(void 0===e?"undefined":i()(e))&&e.length>0&&(o=0,s=[],(e=e.filter(function(e){return"DMA"==e.statisticstype})).forEach(function(a,i){n={waterregionid:a.id,time:t.time},t.$api.regionData.findLeakageIndex(n).then(function(n){r=n.data,s=t.getTableData(a,i,s,r),++o==e.length&&(t.tableData=s.sort(t.compare("index")),t.showTable=!0)})}));case 1:case"end":return a.stop()}},a,t)}))()},buildingLeakageIndex:function(){var e=this;return s()(l.a.mark(function t(){var a,n,r,o,s;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$api.buildingInf.findALL();case 2:(a=t.sent)&&"object"==(void 0===a?"undefined":i()(a))&&a.length>0&&(o=0,s=[],a.forEach(function(t,i){n={buildingid:t.id,time:e.time},e.$api.buildingData.findLeakageIndex(n).then(function(n){r=n.data,s=e.getTableData(t,i,s,r),++o==a.length&&(e.tableData=s.sort(e.compare("index")),e.showTable=!0)})}));case 4:case"end":return t.stop()}},t,e)}))()},waterMeterLeakageIndex:function(){var e=this;return s()(l.a.mark(function t(){var a,n,r,o,s;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$api.waterMeterInf.findALL();case 2:(a=t.sent)&&"object"==(void 0===a?"undefined":i()(a))&&a.length>0&&(o=0,s=[],a.forEach(function(t,i){n={watermeterid:t.id,time:e.time},e.$api.waterMeterData.findLeakageIndex(n).then(function(n){r=n.data,s=e.getTableData(t,i,s,r),++o==a.length&&(e.tableData=s.sort(e.compare("index")),e.showTable=!0)})}));case 4:case"end":return t.stop()}},t,e)}))()},getTableData:function(e,t,a,n){return n&&a.push({index:t+1,name:e.name,id:e.id,leakageIndex:Number(n.leakageIndex.toFixed(1)),total:Number(n.total.toFixed(1)),beforeTotal:Number((n.total-n.addTotal).toFixed(1)),min:Number(n.min.toFixed(1)),beforeMin:Number((n.min-n.addMin).toFixed(1)),addTotal:Number(n.addTotal.toFixed(1)),addMin:Number(n.addMin.toFixed(1)),addRangeTotal:Number(parseFloat(n.addRangeTotal).toFixed(1)),addRangeMin:Number(parseFloat(n.addRangeMin).toFixed(1))}),a},toWaterSupervision:function(e){},refreshTable:function(){this.showTable=!0},compare:function(e){return function(t,a){return t[e]-a[e]}},exportData:function(){Object(p.a)(this.columns,this.tableData,this.title)},toSupervision:function(e){this.$router.push({name:this.url,params:{id:e.id}})}}},m={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"flex"},[a("div",{staticClass:"content body"},[a("div",{staticClass:"box box-solid"},[a("div",{staticClass:"box-header  bg-aqua"},[e._v("漏损指数概况")]),e._v(" "),a("div",{directives:[{name:"loading",rawName:"v-loading",value:!e.showTable,expression:"!showTable"}],staticClass:"box-body"},[a("div",{staticClass:"select-row"},[a("search-by-day",{attrs:{time:e.time},on:{searchByDay:e.searchByDay}}),e._v(" "),a("el-radio-group",{attrs:{fill:"#67C23A",size:"small"},on:{change:e.change},model:{value:e.radio,callback:function(t){e.radio=t},expression:"radio"}},[a("el-radio-button",{attrs:{label:"1"}},[e._v("校区漏损")]),e._v(" "),a("el-radio-button",{attrs:{label:"2"}},[e._v("DMA漏损")]),e._v(" "),a("el-radio-button",{attrs:{label:"3"}},[e._v("建筑漏损")]),e._v(" "),a("el-radio-button",{attrs:{label:"4"}},[e._v("水表漏损")])],1),e._v(" "),a("div",[a("el-button",{attrs:{size:"small",type:"success",icon:"el-icon-download"},on:{click:e.exportData}},[e._v("导出")])],1)],1),e._v(" "),a("div",{staticClass:"table-row"},[e.showTable?a("el-table",{attrs:{border:"",data:e.tableData,size:"mini",height:"100%","default-sort":{prop:"leakageIndex",order:"descending"}}},[a("el-table-column",{attrs:{type:"index",label:"序号"}}),e._v(" "),a("el-table-column",{attrs:{prop:"name",align:"center",label:e.titleName,"show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-link",{attrs:{type:"primary"},on:{click:function(a){return e.toSupervision(t.row)}}},[e._v("\n                  "+e._s(t.row.name)+"\n                ")])]}}],null,!1,2221485346)}),e._v(" "),a("el-table-column",{attrs:{align:"center",sortable:"",label:"综合漏损指数",prop:"leakageIndex"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",sortable:"",label:"当日水量",prop:"total"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",sortable:"",label:"前周同期日水量",prop:"beforeTotal"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",sortable:"",label:"当日最小量",prop:"min"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",sortable:"",label:"前周同期日最小量",prop:"beforeMin"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",sortable:"",label:"日量周同比增量",prop:"addTotal"}}),e._v(" "),a("el-table-column",{attrs:{width:"170",align:"center",sortable:"",label:"日量周同比增幅(%)",prop:"addRangeTotal"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",sortable:"",label:"最小量周同比增量",prop:"addMin"}}),e._v(" "),a("el-table-column",{attrs:{width:"170",align:"center",sortable:"",label:"最小量同比增幅(%)",prop:"addRangeMin"}}),e._v(" "),e.buildingFlag?a("el-table-column",{attrs:{align:"center",label:"地图定位"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary",size:"small",icon:"el-icon-location"},on:{click:function(a){return e.locateBuilding(t.row)}}})]}}],null,!1,1789703882)}):e._e(),e._v(" "),e.meterFlag?a("el-table-column",{attrs:{align:"center",label:"地图定位"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary",size:"small",icon:"el-icon-location"},on:{click:function(a){return e.locateMeter(t.row)}}})]}}],null,!1,121206839)}):e._e()],1):e._e()],1)])])])])},staticRenderFns:[]};var f=a("VU/8")(b,m,!1,function(e){a("cLFB")},"data-v-20de6f21",null);t.default=f.exports},cLFB:function(e,t){},nnUt:function(e,t){}});
//# sourceMappingURL=31.d80f6cbacd557bee7e3b.js.map