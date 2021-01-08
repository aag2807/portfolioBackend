import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectsController } from './projects/projects.controller';
import { ProjectsService } from './projects/projects.service';
import { AboutController } from './about/about.controller';
import { AboutService } from './about/about.service';

@Module({
  imports: [],
  controllers: [AppController, ProjectsController, AboutController],
  providers: [AppService, ProjectsService, AboutService],
})
export class AppModule {}
