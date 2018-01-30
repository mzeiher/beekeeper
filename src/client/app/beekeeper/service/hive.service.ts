import { Injectable } from '@angular/core';

import { Hive } from "../../../../shared/model/hive";
import { Collection } from '../../../../shared/model/collection';

import { dataBase } from "./hivedb.test";

@Injectable()
export class HiveService {

    constructor() { }

    public currentHive: Hive;
    public currentCollection: Collection;

    public getAllHives(): Promise<Hive[]> {
        return Promise.resolve(dataBase.hives);
    }

    public getAllHivesForCollection(collection: Collection): Promise<Hive[]> {
        return Promise.all<Hive>(collection.hives.map((value) => {
            return this.getHive(value);
        }));
    }

    public addHive(hive: Hive): Promise<Hive> {
        hive.id = Math.random().toString();
        hive.hiveSupers.forEach((hiveSuper) => {
            if (!hiveSuper.id) {
                hiveSuper.id = Math.random().toString();
            }
            hiveSuper.frames.forEach((frame) => {
                if (!frame.id) {
                    frame.id = Math.random().toString();
                }
            });
        });
        dataBase.hives.push(hive);
        return Promise.resolve(hive);
    }

    public getHive(id: string): Promise<Hive> {
        let hive: Hive = null;
        for (const hiveEntry of dataBase.hives) {
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
        return Promise.reject('not implemented');
    }

    public deleteHive(hive: Hive): Promise<boolean> {
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
        dataBase.templates.push(hive);
        return Promise.resolve(true);
    }

    public getTemplates(): Promise<string[]> {
        return Promise.resolve(dataBase.templates.map((value) => {
            return value.name
        }));
    }

    public getTemplate(id: string): Promise<Hive> {
        return Promise.resolve(dataBase.templates[0]);
    }
}