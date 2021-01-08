import { Injectable } from '@nestjs/common';
import { projects } from 'src/shared/ shared';

@Injectable()
export class ProjectsService {

	_project = projects

	getProjects() {
		return this._project;
	}

	getFrontendProjects() {
		let front =	[]
		this._project.forEach(p => {
			if(p.category == 'front') {
				front.push({...p})
			}
		});
		return front
	}

	getBackedProjects() {
		let back =	[]
		this._project.forEach(p => {
			if(p.category == 'back') {
				back.push({...p})
			}
		});
		return back
	}


	createProjects(project) {
		this._project = [...this._project, project]
	}

	updateProject(project) {
		this._project =  this._project.map((p) => {
			if (p.id == project.id) return { ...project };

			return p;
		});
	}

	deleteProject(id) {
		this._project =  this._project.filter((p) => p.id != id);
	}
}
