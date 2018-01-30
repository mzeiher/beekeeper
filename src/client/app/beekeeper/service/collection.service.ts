import { Injectable } from "@angular/core";
import { Collection } from "../../../../shared/model/collection";


@Injectable()
export class CollectionService {

    public getAllCollections() : Promise<Collection> {
        return Promise.reject('not yet implemented');
    }

    public addCollection(collection:Collection): Promise<Collection> {
        return Promise.reject('not yet implmeneted');
    }

    public updateCollection(collection:Collection): Promise<Collection> {
        return Promise.reject('not yet implmeneted');
    }

    public removeCollection(collection:Collection): Promise<boolean> {
        return Promise.reject('not yet implmeneted');
    }

    public getCollection(id:string): Promise<Collection> {
        return Promise.reject('not yet implmeneted');
    }


}