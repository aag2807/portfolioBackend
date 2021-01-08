import { Controller, Get, Param } from '@nestjs/common';
import { IAbout } from 'src/shared/ shared';
import { AboutService } from './about.service';


@Controller('about')
export class AboutController {
	constructor(private aboutService: AboutService) { }

	@Get()
	getInfo(): IAbout[] {
		return this.aboutService.getMyInfo();
	}

	@Get(':id')
	getSpecific(@Param() params): IAbout[] {
		return this.aboutService.getSpecific(params.id);
	}
}
