import { Injectable } from "@angular/core";

import { Collection } from "../../../../../shared/model/collection";

import { collectionDataBase } from "./collectiondb.test";

@Injectable()
export class CollectionService {

    public getAllCollections(): Promise<Collection[]> {
        return Promise.resolve(collectionDataBase.collections);
    }

    public getAllCollection(): Collection {
        return {
            id: 'all',
            description: '',
            history: [],
            hives: [],
            name: 'all',
            owner: '',
            read: [],
            write: [],
            position: {
                lat: 0,
                lon: 0
            }
        }
    }

    public getUncollectedCollection(): Collection {
        return {
            id: 'uncollected',
            description: '',
            history: [],
            hives: [],
            name: 'uncollected',
            owner: '',
            read: [],
            write: [],
            position: {
                lat: 0,
                lon: 0
            }
        }
    }

    public addCollection(collection: Collection): Promise<Collection> {
        const clone = <Collection>JSON.parse(JSON.stringify(collection));
        clone.id = new Date().getTime().toString();
        collectionDataBase.collections.push(clone);
        window.localStorage.setItem('collectionDataBase', JSON.stringify(collectionDataBase));
        return Promise.resolve(clone);
    }

    public updateCollection(collection: Collection): Promise<Collection> {
        for (let index in collectionDataBase.collections) {
            if (collectionDataBase.collections[index].id === collection.id) {
                collectionDataBase.collections[index] = JSON.parse(JSON.stringify(collection));
                window.localStorage.setItem('collectionDataBase', JSON.stringify(collectionDataBase));
                return Promise.resolve(collectionDataBase.collections[index]);
            }
        }
        return Promise.reject('no collection found');
    }

    public removeCollection(collection: Collection): Promise<boolean> {
        window.localStorage.setItem('collectionDataBase', JSON.stringify(collectionDataBase));
        return Promise.reject('not yet implmeneted');
    }

    public getCollection(id: string): Promise<Collection> {
        for (let index in collectionDataBase.collections) {
            if (collectionDataBase.collections[index].id === id) {
                return Promise.resolve(collectionDataBase.collections[index]);
            }
        }
        return Promise.reject('no collection found');
    }

}