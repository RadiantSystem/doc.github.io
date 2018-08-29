(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{"433n":function(e,l,t){"use strict";t.r(l);var a=t("tZmG"),i=t.n(a),s={name:"FormUpload",props:{name:{type:String},formId:{type:String,required:!0},uploadPath:{type:String,required:!0},error:{type:String},label:{type:String},labelSrOnly:{type:Boolean,default:!1},required:{type:Boolean,default:!1},description:{type:String},hidden:{type:Boolean,default:!1},placeholder:{type:String,default:"Select or drop files here."},multiple:{type:Boolean,default:!0},testMode:{type:Boolean,default:!1},fileIcon:{type:String,default:"file"},displayValue:{type:Object}},data:function(){return{files:[],uploads:{},localValue:{}}},computed:{fieldId:function(){return"formUpload-"+this._uid},hasUploadError:function(){var e=this,l=!1;return i()(this.uploads).forEach(function(t){"danger"===e.uploads[t].variant&&(l=!0)}),l}},watch:{localValue:function(e){this.$emit("input",e)},displayValue:function(){this.uploads={}}},methods:{uploadFiles:function(){var e=this,l=this.files;Array.isArray(l)||(l=[],null!==this.files&&l.push(this.files)),l.length&&(this.multiple||i()(this.uploads).forEach(function(l){var t=e.uploads[l];e.deleteFile(t.fieldId,t.filename)}),l.forEach(function(l){if(e.$set(e.uploads,l.name,{filename:l.name,fileId:null,progress:0,variant:""}),e.testMode)return e.$nextTick(function(){e.uploads[l.name].progress=100}),Math.floor(2*Math.random())?e.uploadFileDisplay(i()(e.uploads).length+1,l.name):(e.$refs.uploadFile.reset(),e.uploads[l.name].variant="danger"),void(e.files=[]);var t=new FormData;t.append("Upload",l),t.append("Disposition","attachment"),e.clientSendRequest({Path:e.uploadPath+"/"+e.formId,Method:"post",Body:t},{xhr:!0,responseType:"json",responseTimeout:0,onUploadProgress:function(t){t.lengthComputable?e.uploads[l.name].progress=100*t.loaded/t.total:e.uploads[l.name].variant="warning"}}).then(function(t){e.uploadFileDisplay(t.Body.FileID,l.name),e.files=[]}).catch(function(t){e.$log.error(t),e.$refs.uploadFile.reset(),e.uploads[l.name].variant="danger",e.files=[]})}))},uploadFileDisplay:function(e,l){this.$refs.uploadFile.reset(),this.$set(this.uploads[l],"fileId",e),this.$set(this.uploads[l],"variant","success"),this.$set(this.localValue,e,l),this.$emit("input",this.localValue)},deleteFile:function(e,l){var t=this;if(e&&!this.testMode)this.clientSendRequest({Path:this.uploadPath+"/"+this.formId+"/"+e,Method:"delete"}).then(function(){t.$delete(t.uploads,l),t.$delete(t.localValue,e)}).catch(function(e){t.$log.error(e),t.uploads[l].variant="danger"});else if(e)this.$delete(this.uploads,l),this.$delete(this.localValue,e);else{var a=this.uploads[l].fileId;this.$delete(this.uploads,l),this.localValue[a]&&this.$delete(this.localValue,a)}},reset:function(){this.files=[],this.$refs.uploadFile.reset(),this.uploads={},this.localValue={}}}},o=t("psIG"),n=Object(o.a)(s,function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("b-form-group",{directives:[{name:"show",rawName:"v-show",value:!e.hidden,expression:"!hidden"}],attrs:{state:Boolean(e.error)?"invalid":null,label:e._f("translate")(e.label),"label-for":e.fieldId,"label-class":e.required?"required":null,"label-sr-only":e.labelSrOnly,description:e._f("translate")(e.description),"invalid-feedback":e._f("translate")(e.error)}},[t("b-form-file",{ref:"uploadFile",attrs:{id:e.fieldId,name:e.name,placeholder:e._f("translate")(e.placeholder),multiple:e.multiple},on:{input:function(l){e.uploadFiles()}},model:{value:e.files,callback:function(l){e.files=l},expression:"files"}}),e._v(" "),t("div",{staticClass:"container-fluid"},[e.hasUploadError?t("small",{staticClass:"form-text Form--Danger Form__Help"},[t("CommonIcon",{attrs:{icon:"exclamation-circle"}}),e._v("\n            "+e._s(e._f("translate")("Something went wrong, please try again later."))+"\n        ")],1):e._e(),e._v(" "),e.displayValue?t("b-row",[t("b-col",{staticClass:"FormUpload__CurrentValue"},e._l(e.displayValue,function(l,a){return t("div",{key:"file-"+a},[t("CommonIcon",{attrs:{icon:e.fileIcon}}),e._v(" "+e._s(l)+"\n                ")],1)}))],1):e._e(),e._v(" "),e._l(e.uploads,function(l){return t("b-row",{key:l.filename,staticClass:"mt-2",attrs:{"align-v":"center"}},[t("b-col",[t("b-progress",{staticClass:"Form__Progress",attrs:{max:100}},[t("b-progress-bar",{staticClass:"Form__ProgressBar",attrs:{value:l.progress,variant:l.variant,label:l.filename}})],1)],1),e._v(" "),t("b-col",{attrs:{cols:"0"}},[t("CommonLink",{staticClass:"Form__UploadDelete",on:{click:function(t){e.deleteFile(l.fileId,l.filename)}}},[t("CommonIcon",{attrs:{icon:"times",size:"md"}})],1)],1)],1)})],2)],1)},[],!1,null,null,null);l.default=n.exports}}]);