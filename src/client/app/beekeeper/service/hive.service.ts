import { Injectable } from '@angular/core';

import { Hive } from "../../../../shared/model/hive";
import { Collection } from '../../../../shared/model/collection';

import { hiveDataBase } from "./hivedb.test";

@Injectable()
export class HiveService {

    constructor() { }

    public getAllHives(): Promise<Hive[]> {
        return Promise.resolve(hiveDataBase.hives);
    }

    public getAllHivesForCollection(collection: Collection): Promise<Hive[]> {
        return Promise.all<Hive>(collection.hives.map((value) => {
            return this.getHive(value);
        }));
    }

    public getAllHivesNotInCollection(collection: Collection): Promise<Hive[]> {
        return this.getAllHives().then((hiveList) => {
            const hives: Hive[] = [];
            hiveList.reduce((prevValue, currentValue) => {
                if(collection.hives.indexOf(currentValue.id) < 0) {
                    prevValue.push(currentValue);
                }
                return prevValue;
            }, hives);
            return Promise.resolve(hives);
        })
    }

    public addHive(newHive: Hive): Promise<Hive> {
        const hive = <Hive>JSON.parse(JSON.stringify(newHive));
        hive.id = new Date().getTime().toString();
        hive.hiveSupers.forEach((hiveSuper) => {
            if (!hiveSuper.id) {
                hiveSuper.id = new Date().getTime().toString();;
            }
            hiveSuper.frames.forEach((frame) => {
                if (!frame.id) {
                    frame.id = new Date().getTime().toString();;
                }
            });
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
        return Promise.reject('not implemented');
    }

    public updateHive(hive: Hive): Promise<Hive> {
        window.localStorage.setItem('hiveDataBase', JSON.stringify(hiveDataBase));
        return Promise.reject('not implemented');
    }

    public deleteHive(hive: Hive): Promise<boolean> {
        window.localStorage.setItem('hiveDataBase', JSON.stringify(hiveDataBase));
        return Promise.reject('not implemented');
    }

    public addTemplate(hive: Hive): Promise<boolean> {
        const clone = <Hive>JSON.parse(JSON.stringify(hive));
        clone.activity = [];
        clone.history = [];
        clone.id = '';
        clone.hiveSupers.forEach((hiveSuper) => {
            hiveSuper.id = '';
            hiveSuper.frames.forEach((frame) => {
                frame.id = ''
                frame.history = [];
            });
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