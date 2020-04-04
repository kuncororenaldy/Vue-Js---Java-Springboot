(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c82ec"],{5490:function(e,t,n){"use strict";n.r(t);var l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"extra-component-select-demo"}},[e._m(0),n("select-dropdown-options"),n("select-selecting-values")],1)},o=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{staticClass:"mb-4"},[n("a",{attrs:{href:"http://sagalbot.github.io/vue-select/",target:"_blank",rel:"nofollow"}},[e._v("vue-select")]),e._v(" is a native Vue.js select component that provides similar functionality to Select2. Read full documnetation "),n("a",{attrs:{href:"http://sagalbot.github.io/vue-select/docs/",target:"_blank",rel:"nofollow"}},[e._v("here")])])}],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("vx-card",{attrs:{title:"Dropdown Options"}},[n("p",[e._v("vue-select accepts arrays of strings or objects to use as options through the "),n("code",[e._v("options")]),e._v(" prop")]),n("div",{staticClass:"mt-5"},[n("dropdown-options-basic"),n("dropdown-options-option-labels")],1)])},a=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("vx-card",{attrs:{title:"Basic","code-toggler":"","no-shadow":"","card-border":""}},[n("div",[n("v-select",{attrs:{options:["foo","bar"]}}),n("p",{staticClass:"my-5"},[e._v("When provided an array of objects, "),n("code",[e._v("vue-select")]),e._v(" will display a single value of the object. By default, "),n("code",[e._v("vue-select")]),e._v(" will look for a key named "),n("code",[e._v("label")]),e._v(" on the object to use as display text")]),n("v-select",{attrs:{options:[{label:"Foo",value:"foo"}]}})],1),n("template",{slot:"codeContainer"},[e._v("\n<template>\n  <v-select :options=\"['foo','bar']\"></v-select>\n  <v-select :options=\"[{label: 'Foo', value: 'foo'}]\"></v-select>\n</template>\n\n<script>\nimport vSelect from 'vue-select'\n\nexport default{\n  components: {\n    'v-select': vSelect,\n  }\n}\n<\/script>\n        ")])],2)},r=[],i=n("4a7a"),u=n.n(i),p={components:{"v-select":u.a}},d=p,v=n("2877"),m=Object(v["a"])(d,c,r,!1,null,null,null),b=m.exports,g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("vx-card",{attrs:{title:"Option Labels","code-toggler":"","no-shadow":"","card-border":""}},[n("div",[n("p",{staticClass:"mb-3"},[e._v("When the options array contains objects, vue-select looks for the label key to display by default. You can set your own label to match your source data using the label prop")]),n("v-select",{attrs:{label:"countryName",options:e.countries}})],1),n("template",{slot:"codeContainer"},[e._v('\n<template>\n  <v-select label="countryName" :options="countries"></v-select>\n</template>\n\n<script>\nimport vSelect from \'vue-select\'\n\nexport default{\n  data() {\n    return {\n      countries: [\n        {\n          countryCode: "INR",\n          countryName: "India",\n        },\n        {\n          countryCode: "AUS",\n          countryName: "Australia",\n        },\n        {\n          countryCode: "CA",\n          countryName: "Canada",\n        },\n      ]\n    }\n  },\n  components: {\n    \'v-select\': vSelect,\n  }\n}\n<\/script>\n        ')])],2)},h=[],f=n("8d51"),_=n.n(f),y={data:function(){return{countries:[{countryCode:"INR",countryName:"India"},{countryCode:"AUS",countryName:"Australia"},{countryCode:"CA",countryName:"Canada"}]}},components:{"v-select":u.a,Prism:_.a}},w=y,C=Object(v["a"])(w,g,h,!1,null,null,null),S=C.exports,x={data:function(){return{}},components:{DropdownOptionsBasic:b,DropdownOptionsOptionLabels:S}},j=x,O=Object(v["a"])(j,s,a,!1,null,null,null),k=O.exports,T=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("vx-card",{attrs:{title:"Selecting Values"}},[n("div",{staticClass:"mt-5"},[n("selecting-values-default"),n("selecting-values-single-multiple-selection"),n("selecting-values-tagging")],1)])},V=[],N=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("vx-card",{attrs:{title:"Dafault","code-toggler":"","no-shadow":"","card-border":""}},[n("div",[n("p",{staticClass:"mb-3"},[e._v("The most common use case for vue-select is to have the chosen value synced with a parent component. vue-select takes advantage of the v-model syntax to sync values with a parent")]),n("v-select",{attrs:{options:e.options},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}),n("br"),n("p",[e._v("If you don't require the value to be synced, you can also pass the prop directly:")]),n("prism",{staticClass:"rounded-lg"},[e._v('          \n<v-select :value="selected"></v-select>\n            ')]),n("p",{staticClass:"mt-5"},[e._v("This method allows you to pre-select a value(s), without syncing any changes to the parent component. This is also very useful when using a state management tool, like Vuex")])],1),n("template",{slot:"codeContainer"},[e._v("\n<template>\n  <v-select v-model=\"selected\" :options=\"options\"></v-select><br>\n</template>\n\n<script>\nimport vSelect from 'vue-select'\n\nexport default{\n  data() {\n    return {\n      options: [\n        {id: 1, label: 'foo'},\n        {id: 3, label: 'bar'},\n        {id: 2, label: 'baz'},\n      ],\n      selected: {id: 3, label: 'bar'},\n    }\n  },\n  components: {\n    'v-select': vSelect,\n  }\n}\n<\/script>\n        ")])],2)},E=[],$={data:function(){return{options:[{id:1,label:"foo"},{id:3,label:"bar"},{id:2,label:"baz"}],selected:{id:3,label:"bar"}}},components:{"v-select":u.a,Prism:_.a}},I=$,A=Object(v["a"])(I,N,E,!1,null,null,null),D=A.exports,z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("vx-card",{attrs:{title:"Single/Multiple Selection","code-toggler":"","no-shadow":"","card-border":""}},[n("div",[n("p",{staticClass:"mb-3"},[e._v("By default, vue-select supports choosing a single value. If you need multiple values, use the multiple prop")]),n("v-select",{attrs:{multiple:"",options:e.options},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}),n("br")],1),n("template",{slot:"codeContainer"},[e._v("\n<template>\n  <v-select multiple v-model=\"selected\" :options=\"options\"></v-select><br>\n</template>\n\n<script>\nimport vSelect from 'vue-select'\n\nexport default{\n  data() {\n    return {\n      selected: ['foo','bar'],\n      options: ['foo','bar','baz']\n    }\n  },\n  components: {\n    'v-select': vSelect,\n  }\n}\n<\/script>\n        ")])],2)},B=[],P={data:function(){return{selected:["foo","bar"],options:["foo","bar","baz"]}},components:{"v-select":u.a}},R=P,F=Object(v["a"])(R,z,B,!1,null,null,null),J=F.exports,L=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("vx-card",{attrs:{title:"Tagging","code-toggler":"","no-shadow":"","card-border":""}},[n("div",[n("p",{staticClass:"mb-3"},[e._v("To allow input that's not present within the options, set the taggable prop to true. If you want new tags to be pushed to the options list, set push-tags to true")]),n("br"),n("h6",{staticClass:"mb-2"},[e._v("Vue Select - Taggable")]),n("v-select",{attrs:{taggable:""}}),n("br"),n("h6",{staticClass:"mb-2"},[e._v("Vue Select - Taggable & Push-Tags")]),n("v-select",{attrs:{taggable:"","push-tags":""}}),n("small",{staticClass:"muted"},[e._v("Try adding a tag and removing it. It'll still be present within the options list.")])],1),n("template",{slot:"codeContainer"},[e._v("\n<template>\n  <h6>Vue Select - Taggable</h6>\n  <v-select taggable></v-select>\n\n  <h6>Vue Select - Taggable &amp; Push-Tags</h6>\n  <v-select taggable push-tags></v-select>\n</template>\n\n<script>\nimport vSelect from 'vue-select'\n\nexport default{\n  data() {\n    return {\n      options: []\n    }\n  },\n  components: {\n    'v-select': vSelect,\n  }\n}\n<\/script>\n        ")])],2)},M=[],U={data:function(){return{options:[]}},components:{"v-select":u.a}},W=U,q=Object(v["a"])(W,L,M,!1,null,null,null),Y=q.exports,G={components:{SelectingValuesDefault:D,SelectingValuesSingleMultipleSelection:J,SelectingValuesTagging:Y}},H=G,K=Object(v["a"])(H,T,V,!1,null,null,null),Q=K.exports,X={components:{SelectDropdownOptions:k,SelectSelectingValues:Q}},Z=X,ee=Object(v["a"])(Z,l,o,!1,null,null,null);t["default"]=ee.exports}}]);
//# sourceMappingURL=chunk-2d0c82ec.714f57cb.js.map