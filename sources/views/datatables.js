import rating		from "components/data_rating";
import treetable	from "components/data_treetable";
import progress		from "components/data_progress";
import spans		from "components/data_spans";
import pager		from "components/data_pager";

const layout = {
	type: "space",
	rows:[
		{
			type: "wide",
			cols:[
				{
					type:"wide",
					rows:[
						rating,
						treetable
					]
				},
				{
					type:"wide",
					gravity: 0.8,
					rows:[
						progress,
						spans
					]
				}

			]
		},
		pager
	]
};

export default layout;