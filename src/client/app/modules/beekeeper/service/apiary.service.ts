import { Injectable } from "@angular/core";

import { Apiary } from "../../../../../shared/model/apiary";

import { apiaryDataBase } from "./apiarydb.test";

@Injectable()
export class ApiaryService {

    public getAllApiaries(): Promise<Apiary[]> {
        return Promise.resolve(apiaryDataBase.apiaries);
    }

    public addApiary(apiary: Apiary): Promise<Apiary> {
        const clone = <Apiary>JSON.parse(JSON.stringify(apiary));
        clone.id = Math.random().toString();
        apiaryDataBase.apiaries.push(clone);
        window.localStorage.setItem('apiaryDataBase', JSON.stringify(apiaryDataBase));
        return Promise.resolve(clone);
    }

    public updateApiary(apiary: Apiary): Promise<Apiary> {
        for (let index in apiaryDataBase.apiaries) {
            if (apiaryDataBase.apiaries[index].id === apiary.id) {
                apiaryDataBase.apiaries[index] = JSON.parse(JSON.stringify(apiary));
                window.localStorage.setItem('apiaryDataBase', JSON.stringify(apiaryDataBase));
                return Promise.resolve(apiaryDataBase.apiaries[index]);
            }
        }
        return Promise.reject('no apiary found');
    }

    public removeApiary(apiary: Apiary): Promise<boolean> {
        window.localStorage.setItem('apiaryDataBase', JSON.stringify(apiaryDataBase));
        return Promise.reject('not yet implmeneted');
    }

    public getApiary(id: string): Promise<Apiary> {
        for (let index in apiaryDataBase.apiaries) {
            if (apiaryDataBase.apiaries[index].id === id) {
                return Promise.resolve(apiaryDataBase.apiaries[index]);
            }
        }
        return Promise.reject('no apiary found');
    }

}