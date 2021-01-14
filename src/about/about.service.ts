import { Injectable } from '@nestjs/common';
import { myInfo } from 'src/shared/ shared';

@Injectable()
export class AboutService {
  _myinfo = myInfo;

  getMyInfo() {
    return this._myinfo;
  }

  getSpecific(id) {
    return this._myinfo.filter((info) => info.id == id);
  }
}
