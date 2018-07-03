import user		from "components/form_user";
import project	from "components/form_project";
import event	from "components/form_event";
import style	from "components/form_style";

var layout = {
	cols:[
		{type: "material",
			rows: [
				user,
				event
			]
		},
		{type: "material",
			rows: [
				style,
				project
			]
		}
	]

};

export default layout;