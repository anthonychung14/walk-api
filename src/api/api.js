import resource from 'resource-router-middleware';
let steps = []
export default ({ db }) => resource({

	/** Property name to store preloaded entity on `request`. */
	id : 'dailySteps',

	/** For requests with an `id`, you can auto-load the entity.
	 *  Errors terminate the request, success sets `req[id] = data`.
	 */
	load(req, id, callback) {
		let step = steps.find( step => step.id===id ),
			err = step ? null : 'Not found';
		callback(err, step);
	},

	/** GET / - List all entities */
	index({ params }, res) {
		res.json(steps);
	},

	/** POST / - Create a new entity */
	create({ body }, res) {
		body.id = steps.length.toString(36);
		steps.push(body);
		res.json(body);
	},

	/** GET /:id - Return a given entity */
	read({ step }, res) {
		res.json(step);
	},

	/** PUT /:id - Update a given entity */
	update({ step, body }, res) {
		for (let key in body) {
			if (key!=='id') {
				step[key] = body[key];
			}
		}
		res.sendStatus(204);
	},

	/** DELETE /:id - Delete a given entity */
	delete({ step }, res) {
		steps.splice(steps.indexOf(step), 1);
		res.sendStatus(204);
	}
});
