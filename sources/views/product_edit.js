import {JetView} from "webix-jet";

import search	from "components/product_search";
import editor	from "components/editor";
import upload	from "components/product_upload";
import meta 	from "components/product_meta";


export default class ProductEditView extends JetView{
	config(){
		return layout;
	}
	ready(){
		webix.$$("mainView").bind(webix.$$("list"));
	}
}

const buttons = [
	{ view: "button", type: "form", icon: "plus", label: "Save", width: 90},
	{ view: "button", css: "button2", icon: "angle-left", label: "Reset", width: 90},
	{},
	{ view: "button", css: "button0", icon: "times", label: "Delete", width: 90}
];

const layout = {
	type: "space",
	rows:[{
		type: "wide",
		cols:[
			search,
			{
				gravity: 2.2,
				rows:[
					{view: "tabbar", multiview: true,optionWidth: 130,
						options:[
							{id: "mainView", value: "Main"},
							{id: "imagesView", value: "Images"},
							{id: "metaView", value: "Meta"}
						]
					},
					{
						cells:[
							editor,
							upload,
							meta
						]
					},
					{

						view: "form",
						css: "highlighted_header header6",
						paddingX:5,
						paddingY:5,
						height:40,
						cols:buttons
					}
				]
			}
		]}
	]
};