(window.webpackJsonp=window.webpackJsonp||[]).push([[11,93],{Iptl:function(e,t,n){"use strict";var o=n("nS/B");t.a={components:{CommonNotice:function(){return n.e(107).then(n.bind(null,"mkLc"))},DocsExample:function(){return n.e(6).then(n.bind(null,"GD02"))},DocsComponentAPI:function(){return n.e(7).then(n.bind(null,"8txu"))}},computed:{doc:function(){var e=this.componentNamespace||"Components";return this.$store.getters.componentDoc[e][this.$options.name]||[]},summary:function(){return Object(o.b)(this.doc,"summary")},version:function(){return Object(o.b)(this.doc,"version")},description:function(){return Object(o.b)(this.doc,"description")},props:function(){return Object(o.a)(this.doc,"prop")},slots:function(){return Object(o.a)(this.doc,"slot")},events:function(){return Object(o.a)(this.doc,"event")},methods:function(){return Object(o.a)(this.doc,"method")}}}},TQwJ:function(e,t,n){"use strict";n.r(t);var o={name:"FormTextArea",props:{value:{type:[String,Number],note:"The value of the field."},name:{type:String},error:{type:String},label:{type:String},labelSrOnly:{type:Boolean,default:!1},required:{type:Boolean,default:!1},description:{type:String},size:{type:String},disabled:{type:Boolean,default:!1},hidden:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},plaintext:{type:Boolean,default:!1},autocomplete:{type:String},placeholder:{type:String},rows:{type:String},maxRows:{type:String},wrap:{type:String},noResize:{type:Boolean}},data:function(){return{localValue:this.value}},computed:{fieldId:function(){return"formTextArea-"+this._uid}},methods:{updateValue:function(e){this.localValue=e,this.$emit("input",e)}}},s=(n("iW/+"),n("psIG")),a=Object(s.a)(o,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-form-group",{directives:[{name:"show",rawName:"v-show",value:!e.hidden,expression:"!hidden"}],attrs:{state:Boolean(e.error)?"invalid":null,label:e._f("translate")(e.label),"label-for":e.fieldId,"label-class":e.required?"required":null,"label-sr-only":e.labelSrOnly,description:e._f("translate")(e.description),"invalid-feedback":e._f("translate")(e.error)}},[n("b-form-textarea",{attrs:{id:e.fieldId,name:e.name,value:e.localValue,size:e.size,disabled:e.disabled,state:Boolean(e.error)?"invalid":null,readonly:e.readonly,plaintext:e.plaintext,autocomplete:e.autocomplete,placeholder:e._f("translate")(e.placeholder),rows:e.rows,wrap:e.wrap,"max-rows":e.maxRows,"no-resize":e.noResize},on:{input:e.updateValue}})],1)},[],!1,null,"4099fd8c",null);t.default=a.exports},gd8M:function(e,t,n){},"iW/+":function(e,t,n){"use strict";var o=n("gd8M");n.n(o).a},yzJp:function(e,t,n){"use strict";n.r(t);var o=n("Iptl"),s=n("TQwJ"),a={name:"FormTextArea",mixins:[o.a],data:function(){return{docVersion:"1.0.1",componentNamespace:"Components",componentPath:"Components/Form/Field/FormTextArea",value:void 0,component:s.default,example:{error:{type:"input"},name:{type:"input"},label:{type:"input"},labelSrOnly:{type:"checkbox",default:!1},required:{type:"checkbox",default:!1},description:{type:"input"},size:{type:"select",options:[{value:void 0,text:"-"},{value:"sm",text:"sm"},{value:"md",text:"md"},{value:"lg",text:"lg"}]},disabled:{type:"checkbox",default:!1},readonly:{type:"checkbox",default:!1},plaintext:{type:"checkbox",default:!1},autocomplete:{type:"input"},placeholder:{type:"input"},rows:{type:"input"},maxRows:{type:"input"},noResize:{type:"checkbox",default:!1}}}}},i=n("psIG"),l=Object(i.a)(a,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main"},[n("h1",{staticClass:"design-system"},[e._v("\n        "+e._s(e.summary)+"\n        "),n("b-badge",{attrs:{variant:e.docVersion!==e.version?"warning":"info"}},[e._v(e._s(e.version))])],1),e._v(" "),n("p",[e._v("\n        "+e._s(e.description)+"\n    ")]),e._v(" "),e.docVersion!==e.version?[n("CommonNotice",{attrs:{text:"Please verify all changes to the component API have been properly documented\n                ("+e.docVersion+" !== "+e.version+").",title:"Documentation for this component is out of date!",type:"Warning"}})]:e._e(),e._v(" "),n("CommonNotice",{attrs:{type:"Warning",title:"Under construction",text:"Please be aware that the documentation of this component is currently under construction."}}),e._v(" "),n("b-tabs",{staticClass:"tab-content"},[n("b-tab",{staticClass:"tab-pane",attrs:{title:"Demo","title-link-class":"design-system",active:""}},[n("DocsExample",{attrs:{component:e.component,"component-path":e.componentPath,props:e.props,events:e.events,slots:e.slots,example:e.example},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1),e._v(" "),n("b-tab",{attrs:{title:"Usage","title-link-class":"design-system"}},[n("h2",{staticClass:"design-system"},[e._v("Header Level 2")]),e._v(" "),n("ol",{staticClass:"design-system"},[n("li",[e._v("Lorem ipsum dolor sit amet, consectetuer adipiscing elit.")]),e._v(" "),n("li",[e._v("Aliquam tincidunt mauris eu risus.")])]),e._v(" "),n("b-container",{staticClass:"dosdonts",attrs:{fluid:""}},[n("b-row",[n("b-col",{attrs:{sm:"6"}},[n("div",[n("h5",{staticClass:"design-system"},[e._v("Do")]),e._v(" "),n("p",[e._v("Lorem ipsum dolor sit amet, consectetuer adipiscing ept.")])])]),e._v(" "),n("b-col",{attrs:{sm:"6"}},[n("div",[n("h5",{staticClass:"design-system"},[e._v("Don't")]),e._v(" "),n("p",[e._v("Lorem ipsum dolor sit amet, consectetuer adipiscing ept.")])])])],1)],1),e._v(" "),n("h3",{staticClass:"design-system"},[e._v("Header Level 3")]),e._v(" "),n("ul",{staticClass:"design-system"},[n("li",[e._v("Lorem ipsum dolor sit amet, consectetuer adipiscing elit.")]),e._v(" "),n("li",[e._v("Aliquam tincidunt mauris eu risus.")])])],1),e._v(" "),n("b-tab",{staticClass:"tab-pane",attrs:{title:"API Documentation","title-link-class":"design-system"}},[n("DocsComponentAPI",{attrs:{props:e.props,events:e.events,slots:e.slots,methods:e.methods}})],1)],1)],2)},[],!1,null,null,null);t.default=l.exports}}]);