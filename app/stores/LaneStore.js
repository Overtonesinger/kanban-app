import LaneActions from '../actions/LaneActions';

export default class LaneStore {
	constructor() {
		this.bindActions(LaneActions);
		this.lanes = [];
	}

	create(lane) {
		lane.notes = lane.notes || [];	// If no 'notes' provided, default to empty array.

		this.setState({
			lanes: this.lanes.concat(lane)
		});
	}

	update(updatedLane) {
		this.setState({
			lanes: this.lanes.map(lane => {
				if(lane.id === updatedLane.id) {
					return Object.assign({}, lane, updatedLane);
				}
				return lane;
			})
		});
	}

	delete(id) {
		this.setState({
			lanes: this.lanes.filter(lane => lane.id !== id)
		});
	}

	attachToLane({laneId, noteId}) {
		this.setState({
			lanes: this.lanes.map(lane => {
				if(lane.notes.includes(noteId)) {
					lane.notes = lane.notes.filter(note => note !== noteId);
				}
				if(lane.id === laneId) {
					lane.notes = lane.notes.concat([noteId]);
				}
				return lane;
			})
		});
	}

	detachFromLane({laneId, noteId}) {
		this.setState({
			lanes: this.lanes.map(lane => {
				if(lane.id === laneId) {
					lane.notes = lane.notes.filter(note => note !== noteId);
				}
				return lane;
			})
		});
	}
}
