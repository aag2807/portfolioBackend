import {
    Controller,
    Get,
    Param,
    Post,
    Body,
    Put,
    Delete,
  } from '@nestjs/common';
import { IProject } from 'src/shared/ shared';
import { ProjectsService } from './projects.service';

@Controller('projects')
export class ProjectsController {
    constructor(private projectsService: ProjectsService) {}

  @Get()
  getProjects(): IProject[] {
    return this.projectsService.getProjects();
  }

  @Get('front')
  getFrontProjects(){
      return this.projectsService.getFrontendProjects()
  }

  @Get('back')
  getBackProjects(){
      return this.projectsService.getBackedProjects()
  }



  @Get(':id')
  getProject(@Param() params): IProject[] {
    console.log('get a single project', params.id);
    return this.projectsService.getProjects().filter((p) => p.id == params.id);
  }



  @Post()
  createProduct(@Body() project: IProject) {
    console.log('create project');
    this.projectsService.createProjects(project);
  }

  @Put()
  updateProject(@Body() project: IProject) {
    console.log('update project', project);
    this.projectsService.updateProject(project);
  }

  @Delete()
  deleteProject(@Body() project: IProject) {
    console.log('delete project', project);
    this.projectsService.deleteProject(project.id);
  }
}
