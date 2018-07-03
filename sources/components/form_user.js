const layout = {

	type: "clean",
	rows:[
		{
			view: "toolbar",
			css: "highlighted_header header1",
			paddingX:5,
			paddingY:5,
			height:40,
			cols:[
				{
					"template": "<span class='webix_icon fa-male'></span>User", "css": "sub_title2", borderless:true
				},
				{
					view: "button", css: "button_transparent", label: "Close", width: 80
				}
			]
		},
		{
			view: "form",
			id: "userForm",
			elementsConfig:{
				labelWidth: 120
			},
			elements:[
				{view: "text", placeholder: "Type here...", label: "First Name",name: "name1"},
				{view: "text", placeholder: "Type here...", label: "Last Name", name: "name2"},
				{view: "datepicker", label: "Date of Birth", placeholder: "Select here...", name: "date"},
			
				{view: "text", label: "Phone Number", placeholder: "Type here..."},
				{
					margin: 10,
					paddingX: 2,
					borderless: true,
					cols:[
						{},
						{view: "button", label: "Reset",  css: "button_danger",   align: "right"},
						{view: "button", label: "Save", css: "button_primary button_raised", type: "form", align: "right"}
					]
				}

			]

		}
	]
};

export default layout;