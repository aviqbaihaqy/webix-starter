webix.protoUI({
	name: "controlView",
	defaults: {
		dataSource: "datatable", // untuk id datatable
		filterColumn:"#status#",
		filterOptions:[{id:"all", value:"All"}],
		buttonAddLabel:"Add Data",
		buttonExportLabel:"Export"
	},
	$init: function (config) {
		let conf = webix.extend(this.defaults, config, true);
		webix.extend(conf, this._getControlView(conf), true);
	},

	_getControlView: function(config){
		let configUi = {
			rows:[{height:40,cols:[
				{id:"add", view: "button", css: "button_primary button_raised", type: "iconButton", icon: "plus", label: config.buttonAddLabel, width: 150, click: config.onBtAddClick},
				{id:"export", view: "button", css: "button_primary button_raised", type: "iconButton", icon: "external-link", label: config.buttonExportLabel, width: 150, popup:{
					view: "submenu",
					id: "exportPopup",
					width: 200,
					padding:0,
					data: [
						{id: 1, icon: "file-excel-o", value: "Export To Excel"},
						{id: 2, icon: "file-pdf-o", value: "Export To PDF"}
					],
					on:{
						onItemClick:function(id){
							if(id==1){
								webix.toExcel(webix.$$(config.dataSource));
							}
							else if(id==2)
								webix.toPDF(webix.$$(config.dataSource));
						}
					}
				} },
				{},
				{view:"richselect", id:"order_filter", value: "all", maxWidth: 400, minWidth: 250, 
					vertical: true, labelWidth: 100, options: config.filterOptions,  label:"Filter", on:{
						onChange:function(){
							let val = this.getValue();
							if(val=="all")
								webix.$$(config.dataSource).filter(config.filterColumn, "");
							else
								webix.$$(config.dataSource).filter(config.filterColumn, val);
						}
					}
				}
			]
			}]
		};

		return configUi;
	}
}, webix.ui.layout, webix.ActiveContent, webix.EventSystem);
