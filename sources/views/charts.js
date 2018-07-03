import visitors 	from "components/visitors";
import orders 		from "components/orders";
import chart_diff 	from "components/chart_diff";
import revenue 		from "components/revenue";
import tasks	 	from "components/taskschart";
import diffchart 	from "components/diffchart";

const layout = {
	type: "clean",
	rows:[
		{
			type: "space",
			rows:[

				{
					type: "wide",
					minHeight: 250,
					cols: [
						{
							gravity: 4,
							type: "clean",
							rows:[
								{
									"template": "<span class='webix_icon fa-area-chart'></span>Different charts in one", "css": "sub_title", "height": 30
								},
								chart_diff
							]
						},
						diffchart
					]
				},
				{

					type: "wide",
					cols: [
						{

							type: "clean",
							rows:[
								{
									"template": "<span class='webix_icon fa-line-chart'></span>Sales", "css": "sub_title", "height": 30
								},
								revenue
							]
						},
						{
							"type": "clean",
							"rows":[
								{
									"template": "<span class='webix_icon fa-tasks'></span>Tasks", "css": "sub_title", "height": 30
								},
								tasks,
								{template: " "}
							]

						}
					]
				},
				{
					height: 220,
					type: "wide",
					cols: [

						orders,
						visitors
					]
				}
			]

		}
	]
};

export default layout;