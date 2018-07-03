const controls = [
	{ view: "button", type: "iconButton", icon: "plus", label: "Add order", width: 130, click: function(){
		this.$scope._form.show(this.$view);
	}},
	{ view: "button", type: "iconButton", icon: "external-link", label: "Export", width: 120, popup: exportwin },
	{},
	{view:"richselect", id:"order_filter", value: "all", maxWidth: 400, minWidth: 250, vertical: true, labelWidth: 100, options:[
		{id:"all", value:"All"},
		{id:"new", value:"Need Invoicing"},
		{id:"ready", value:"Ready to Ship"},
		{id:"completed", value:"Completed"},
		{id:"cancelled", value:"Cancelled"}
	],  label:"Filter orders", on:{
		onChange:function(){
			let val = this.getValue();
			if(val=="all")
				webix.$$("orderData").filter("#status#","");
			else
				webix.$$("orderData").filter("#status#", val);
		}
	}
	}
];

export default controls;