import Alt from 'alt';
import makeFinalStore from 'alt-utils/lib/makeFinalStore';

// NOTE: Dispatching in Alt
// To log everything just use:  alt.dispatcher.register(console.log.bind(console));
// Alternatively: trigger this.dispatcher.register(...)  at a store constructor.

class Flux extends Alt {
	constructor(config) {
		super(config);

		this.FinalStore = makeFinalStore(this);
	}
}

const flux = new Flux();

export default flux;
