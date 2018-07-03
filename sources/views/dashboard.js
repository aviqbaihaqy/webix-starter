import dashline 	from "components/dashline";
import visitors 	from "components/visitors";
import orders 		from "components/orders";
import messages 	from "components/messages";
import revenue 		from "components/revenue";
import tasks 		from "components/tasks";
import map 			from "components/map";

const layout = {
	type: "clean",
	rows:[
		dashline,
		{
			type: "space",
			rows:[
				{
					height: 220,
					type: "wide",
					cols: [
						visitors,
						orders
					]
				},
				{
					type: "wide",
					cols: [
						messages,
						revenue

					]
				},
				{
					type: "wide",
					cols: [
						tasks,
						map
					]
				}
			]

		}
	]
};

export default layout;