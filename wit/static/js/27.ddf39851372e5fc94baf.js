webpackJsonp([27],{"5xMt":function(e,t){},"6DVl":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("kWzz"),n={components:{RWaterMeter:a("Jlan").a,SelectBuilding:i.a},name:"r-watermeter-building",data:function(){return{name:"综合楼",buildingId:138,tableData:[],show:!1,value:!0,addDialog:!1,ruleForm:{watermeterid:"",isin:"",buildingid:""}}},created:function(){var e=this.$route.query;void 0!=e.buildingId&&(this.buildingId=e.buildingId,this.buildingValue=e.buildingId),this.refresh()},methods:{exportExcel:function(){var e=this.xlsx.utils.table_to_book(document.querySelector("#out-table")),t=this.xlsx.write(e,{bookType:"xlsx",bookSST:!0,type:"array"});try{this.fileSaver.saveAs(new Blob([t],{type:"application/octet-stream"}),"建筑计量水表信息.xlsx")}catch(e){"undefined"!=typeof console&&console.log(e,t)}return t},change:function(e){this.name=e.name,this.buildingId=e.id,this.refresh()},rowClick:function(e){this.ruleForm.watermeterid=e.waterMeterId},refresh:function(){var e=this,t={buildingid:this.buildingId};this.$api.buildingInf.findAllRelation(t).then(function(t){e.tableData=t})},changeIsIn:function(e){var t=this;this.$confirm("确定要修改水表计量关系？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var a={isin:e.isin?1:0,id:e.id,watermeterid:"",buildingid:e.buildingid};t.$api.buildingInf.updateRelation(a).then(function(e){"ok"==e.msg?(t.$message({type:"success",message:"修改成功！"}),t.refresh()):t.$message({type:"error",message:"您的账号权限不足！"}),t.refresh()}).catch(function(){t.$message({type:"info",message:"修改失败！"})})}).catch(function(){e.isin=!e.isin,t.$message({type:"info",message:"已取消修改"})})},addMessage:function(){this.addDialog=!0,this.ruleForm.watermeterid=""},submitForm:function(){var e=this;this.ruleForm.buildingid=this.buildingId,this.ruleForm.isin="1";var t=this.ruleForm;null==this.ruleForm.watermeterid||""==this.ruleForm.watermeterid?this.$alert("请从列表中选择水表","提示"):this.$api.buildingInf.addRelation(t).then(function(t){"ok"===t.msg?(e.addDialog=!1,e.$message({type:"success",message:"添加成功！"}),e.refresh()):e.$message({type:"error",message:"您的账号权限不足！"})})},handleDelete:function(e,t){var a=this;this.$confirm("此操作将永久删除该内容, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){a.$api.buildingInf.deleteRelation(t.id).then(function(e){"ok"==e.msg?(a.$message({type:"success",message:"删除成功！"}),a.refresh()):a.$message({type:"error",message:"您的账号权限不足！"})}).catch(function(){a.$message({type:"info",message:"删除失败！"})})}).catch(function(){a.$message({type:"info",message:"已取消删除"})})}}},l={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"flex"},[a("el-dialog",{attrs:{title:"添加建筑计量水表",visible:e.addDialog,width:"1200px",top:"5%","modal-append-to-body":!1},on:{"update:visible":function(t){e.addDialog=t}}},[a("r-water-meter",{on:{rowClick:e.rowClick}}),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.addDialog=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("确 定")])],1)],1),e._v(" "),a("div",{staticClass:"content"},[a("div",{staticClass:"box"},[a("div",{staticClass:"box-header bg-aqua"},[e._v("建筑计量水表管理")]),e._v(" "),a("div",{staticClass:"box-body"},[a("div",{staticStyle:{display:"inline-flex","flex-flow":"row","margin-bottom":"10px"}},[a("select-building",{attrs:{buildingId:e.buildingId},on:{change:e.change}}),e._v(" \n          "),a("el-button",{attrs:{size:"mini",type:"primary",icon:"el-icon-plus"},on:{click:function(t){return t.stopPropagation(),e.addMessage(t)}}},[e._v("添加水表")]),e._v(" "),a("el-button",{attrs:{size:"mini",type:"primary",icon:"el-icon-download"},on:{click:function(t){return t.stopPropagation(),e.exportExcel(t)}}},[e._v("报表导出")])],1),e._v(" "),a("el-table",{attrs:{data:e.tableData,size:"mini",stripe:"",id:"out-table","default-sort":{prop:"date",order:"descending"},border:""}},[a("el-table-column",{attrs:{width:"50",type:"index",label:"序号"}}),e._v(" "),e.show?a("el-table-column",{attrs:{prop:"buildingid",sortable:""}}):e._e(),e._v(" "),e.show?a("el-table-column",{attrs:{prop:"watermeterid",sortable:""}}):e._e(),e._v(" "),a("el-table-column",{attrs:{prop:"watermetername",label:"水表名称"}}),e._v(" "),a("el-table-column",{attrs:{prop:"buildingname",label:"建筑名称"}}),e._v(" "),a("el-table-column",{attrs:{prop:"",label:"流进/流出"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.isin?a("h6",[e._v("流进")]):a("h6",{staticStyle:{color:"deepskyblue"}},[e._v("流出")])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"操作",width:"300px"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-switch",{staticStyle:{"margin-right":"30px"},attrs:{"active-text":"","inactive-text":""},on:{change:function(a){return e.changeIsIn(t.row)}},model:{value:t.row.isin,callback:function(a){e.$set(t.row,"isin",a)},expression:"scope.row.isin"}}),e._v(" "),a("el-button",{attrs:{size:"mini",icon:"el-icon-delete",type:"danger"},on:{click:function(a){return e.handleDelete(t.$index,t.row)}}},[e._v("删除\n              ")])]}}])})],1)],1)])])],1)},staticRenderFns:[]};var r=a("VU/8")(n,l,!1,function(e){a("79lj")},"data-v-2b429302",null);t.default=r.exports},"79lj":function(e,t){},Jlan:function(e,t,a){"use strict";var i={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{"margin-bottom":"5px"}},[a("div",{staticStyle:{"margin-bottom":"10px","margin-top":"-20px"}},[a("el-input",{staticStyle:{width:"400px"},attrs:{placeholder:"请输入内容",autofocus:"true"},model:{value:e.input,callback:function(t){e.input=t},expression:"input"}},[a("el-select",{attrs:{slot:"prepend",placeholder:"查询水表"},slot:"prepend",model:{value:e.select,callback:function(t){e.select=t},expression:"select"}},[a("el-option",{attrs:{label:"名称",value:"name"}}),e._v(" "),a("el-option",{attrs:{label:"编号",value:"snumber"}}),e._v(" "),a("el-option",{attrs:{label:"通讯编号",value:"comno"}}),e._v(" "),a("el-option",{attrs:{label:"出厂编号",value:"productSN"}}),e._v(" "),a("el-option",{attrs:{label:"材质",value:"material"}}),e._v(" "),a("el-option",{attrs:{label:"规格",value:"dimension"}}),e._v(" "),a("el-option",{attrs:{label:"口径",value:"caliber"}}),e._v(" "),a("el-option",{attrs:{label:"等级标记",value:"level"}}),e._v(" "),a("el-option",{attrs:{label:"备注",value:"remark"}})],1),e._v(" "),a("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:function(t){return t.stopPropagation(),e.search(t)}},slot:"append"})],1),e._v(" "),a("el-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-menu"},on:{click:function(t){return t.stopPropagation(),e.refresh(t)}}},[e._v("显示所有水表")])],1),e._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,size:"mini","highlight-current-row":"",stripe:"",id:"out-table","default-sort":{prop:"date",order:"descending"},border:""},on:{"row-click":e.rowClick}},[a("el-table-column",{attrs:{type:"index",fixed:"",width:"50",label:"序号"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s((e.currentPage-1)*e.size+t.$index+1))])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"name",width:"150px",label:"名称"}}),e._v(" "),a("el-table-column",{attrs:{prop:"snumber",label:"编号"}}),e._v(" "),a("el-table-column",{attrs:{prop:"comno",width:"85px",label:"通讯编号"}}),e._v(" "),a("el-table-column",{attrs:{width:"85px",prop:"productsn",label:"出厂编号"}}),e._v(" "),a("el-table-column",{attrs:{prop:"category",label:"类型"}}),e._v(" "),a("el-table-column",{attrs:{prop:"material",label:"材质"}}),e._v(" "),a("el-table-column",{attrs:{prop:"dimension",label:"规格"}}),e._v(" "),a("el-table-column",{attrs:{prop:"caliber",label:"口径"}}),e._v(" "),a("el-table-column",{attrs:{prop:"level",label:"等级标记"}}),e._v(" "),a("el-table-column",{attrs:{prop:"remark",width:"150px",label:"备注"}})],1),e._v(" "),a("page",{attrs:{total:e.total},on:{changePage:e.changePage}})],1)},staticRenderFns:[]};var n=a("VU/8")({name:"r-water-meter",data:function(){return{flag:0,select:"",input:"",total:0,currentPage:1,size:10,tableData:[]}},created:function(){this.refresh()},methods:{search:function(){var e=this;this.currentPage=1;var t={pageNum:this.currentPage,pageSize:this.size,name:this.select,value:this.input};this.$api.waterMeterInf.searchWaterMeter(t).then(function(t){e.tableData=t.data.list,e.flag=1,e.total=t.data.total})},changePage:function(e){0==this.flag?(this.currentPage=e.currentPage,this.size=e.size,this.refresh()):(this.currentPage=e.currentPage,this.size=e.size,this.search())},refresh:function(){var e=this,t={pageNum:this.currentPage,pageSize:this.size};this.$api.waterMeterInf.findPage(t).then(function(t){t.list.forEach(function(e){1==e.isonline?e.states="在线":e.states="离线"}),e.tableData=t.list,e.total=t.total,e.flag=0})},rowClick:function(e){this.waterMeterId=e.id,this.waterMeterName=e.name,this.value=e.name;var t={waterMeterId:e.id};this.$emit("rowClick",t)}}},i,!1,function(e){a("5xMt")},"data-v-7facc85a",null);t.a=n.exports}});
//# sourceMappingURL=27.ddf39851372e5fc94baf.js.map