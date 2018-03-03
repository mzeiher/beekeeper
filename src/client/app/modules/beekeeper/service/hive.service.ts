import { Injectable } from '@angular/core';

import { Hive, HiveSuper } from "../../../../../shared/model/hive";
import { Apiary } from '../../../../../shared/model/apiary';

import { hiveDataBase } from "./hivedb.test";

@Injectable()
export class HiveService {

    constructor() { }

    public getAllHives(): Promise<Hive[]> {
        return Promise.resolve(hiveDataBase.hives);
    }

    public getAllHivesForApiary(apiary: Apiary): Promise<Hive[]> {
        return Promise.all<Hive>(apiary.hives.map((value) => {
            return this.getHive(value);
        }));
    }

    public addHive(newHive: Hive): Promise<Hive> {
        const hive = <Hive>JSON.parse(JSON.stringify(newHive));
        hive.id = Math.random().toString();
        hive.hiveSupers.forEach((hiveSuper) => {
            if (!hiveSuper.id) {
                hiveSuper.id = Math.random().toString();
            }
            if (hiveSuper.type === 'brood-super') {
                (<HiveSuper<'brood-super'>>hiveSuper).options.frames.forEach((frame) => {
                    if (!frame.id) {
                        frame.id = Math.random().toString();
                    }
                });
            }
        });
        hiveDataBase.hives.push(hive);
        window.localStorage.setItem('hiveDataBase', JSON.stringify(hiveDataBase));
        return Promise.resolve(hive);
    }

    public getHive(id: string): Promise<Hive> {
        let hive: Hive = null;
        for (const hiveEntry of hiveDataBase.hives) {
            if (hiveEntry.id === id) {
                hive = hiveEntry;
                break;
            }
        }
        if (hive) {
            return Promise.resolve(hive);
        }
        return Promise.reject('not found');
    }

    public updateHive(hive: Hive): Promise<Hive> {
        for (let i = 0; i < hiveDataBase.hives.length; i++) {
            if (hive.id === hiveDataBase.hives[i].id) {
                hiveDataBase.hives[i] = hive;
                window.localStorage.setItem('hiveDataBase', JSON.stringify(hiveDataBase));
                return Promise.resolve(hive);
            }
        }
        return Promise.reject('no hive found');
    }

    public deleteHive(hive: Hive): Promise<boolean> {
        window.localStorage.setItem('hiveDataBase', JSON.stringify(hiveDataBase));
        return Promise.reject('not implemented');
    }

    public addTemplate(hive: Hive): Promise<boolean> {
        const clone = <Hive>JSON.parse(JSON.stringify(hive));
        clone.history = [];
        clone.id = '';
        clone.created = new Date().getTime();
        clone.lastChanged = new Date().getTime();
        clone.hiveSupers.forEach((hiveSuper) => {
            hiveSuper.id = '';
            hiveSuper.created = new Date().getTime();
            hiveSuper.lastChanged = new Date().getTime();
            if (hiveSuper.type === 'brood-super' || hiveSuper.type === 'honey-super') {
                (<HiveSuper<'brood-super'>>hiveSuper).options.frames.forEach((frame) => {
                    frame.id = null
                    frame.history = [];
                });
            }
        });
        hiveDataBase.templates.push(hive);
        window.localStorage.setItem('hiveDataBase', JSON.stringify(hiveDataBase));
        return Promise.resolve(true);
    }

    public getTemplates(): Promise<string[]> {
        return Promise.resolve(hiveDataBase.templates.map((value) => {
            return value.name
        }));
    }

    public getTemplate(id: string): Promise<Hive> {
        return Promise.resolve(hiveDataBase.templates[0]);
    }
}