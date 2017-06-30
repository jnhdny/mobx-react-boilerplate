import {observable, autorun} from 'mobx';
import uuid from 'uuid/v1';

export class FacilitiesStore {
	@observable facilities = [];
	@observable isLoading = true;

	constructor(db) {
		this.backend = db;
		this.loadFacilities();
	}

	loadFacilities() {
		var self = this;
		this.isLoading = true;
		this.backend.allDocs({include_docs: true}).then(function(results){
			self.facilities = results.rows.map(a => a.doc);
			self.isLoading = false;
		}).catch(function(err){
			console.log(err);
		});
	}

	createFacility(facility) {
		facility._id = String(uuid());
		facility.type = 'facility';
		var self = this;
		this.backend.put(facility).then(function(result){
			self.loadFacilities();

		}).catch(function(err){
			console.log(err);
		});
	}
}