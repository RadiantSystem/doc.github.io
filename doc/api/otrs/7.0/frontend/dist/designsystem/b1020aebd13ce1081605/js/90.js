(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{CJfq:function(e,t,l){"use strict";l.r(t);var a={name:"FormInput",props:{value:{type:[String,Number],note:"The value of the field."},error:{type:String},label:{type:String},labelSrOnly:{type:Boolean,default:!1},required:{type:Boolean,default:!1},description:{type:String},name:{type:String},size:{type:String},disabled:{type:Boolean,default:!1},hidden:{type:Boolean,default:!1},type:{type:String,default:"text"},readonly:{type:Boolean,default:!1},plaintext:{type:Boolean,default:!1},autocomplete:{type:String},placeholder:{type:String,default:"Placeholder Text"},fieldClasses:{type:Object}},computed:{hasInputSlot:function(){return void 0!==this.$slots["input-group-append"]},fieldId:function(){return"formInput-"+this._uid},localValue:{get:function(){return this.value},set:function(e,t){this.$emit("input",e,t)}}},methods:{focus:function(){this.$refs.input.$el.focus()},onChange:function(e){this.$emit("change",e)}}},n=l("psIG"),o=Object(n.a)(a,function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("b-form-group",{directives:[{name:"show",rawName:"v-show",value:!e.hidden,expression:"!hidden"}],attrs:{state:Boolean(e.error)?"invalid":null,label:e._f("translate")(e.label),"label-for":e.fieldId,"label-class":e.required?"required":null,"label-sr-only":e.labelSrOnly,description:e._f("translate")(e.description),"invalid-feedback":e._f("translate")(e.error)}},[e.hasInputSlot?l("b-input-group",[l("b-form-input",{ref:"input",staticClass:"Form__Input",class:e.fieldClasses,attrs:{id:e.fieldId,name:e.name,size:e.size,disabled:e.disabled,state:Boolean(e.error)?"invalid":null,type:e.type,readonly:e.readonly,plaintext:e.plaintext,autocomplete:e.autocomplete,placeholder:e._f("translate")(e.placeholder)},on:{change:e.onChange},model:{value:e.localValue,callback:function(t){e.localValue=t},expression:"localValue"}}),e._v(" "),l("b-input-group-append",{staticClass:"pt-2"},[e._t("input-group-append")],2)],1):l("b-form-input",{ref:"input",staticClass:"Form__Input",class:e.fieldClasses,attrs:{id:e.fieldId,name:e.name,size:e.size,disabled:e.disabled,state:Boolean(e.error)?"invalid":null,type:e.type,readonly:e.readonly,plaintext:e.plaintext,autocomplete:e.autocomplete,placeholder:e._f("translate")(e.placeholder)},model:{value:e.localValue,callback:function(t){e.localValue=t},expression:"localValue"}})],1)},[],!1,null,null,null);t.default=o.exports}}]);