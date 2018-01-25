import { Injectable } from '@angular/core';

import { Hive } from "../../../../shared/model/hive";

@Injectable()
export class HiveService {

  constructor() { }

  public getAllHives() : Promise<string[]> {
    return Promise.reject('not implemented');
  }

  public createHive(hive:Hive): Promise<Hive> {
    return Promise.reject('not implemented');
  }

  public getHive(id: string): Promise<Hive> {
    return Promise.reject('not implemented');
  }

  public updateHive(hive:Hive): Promise<Hive> {
    return Promise.reject('not implemented');
  }

  public deleteHive(hive:Hive): Promise<boolean> {
    return Promise.reject('not implemented');
  }
}
