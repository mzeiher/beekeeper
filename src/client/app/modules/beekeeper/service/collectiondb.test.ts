import { Collection } from "../../../../../shared/model/collection";

interface DataBase {
    collections: Collection[]
}

export const collectionDataBase:DataBase = {
    collections: []
}

try {
    Object.assign(collectionDataBase, JSON.parse(window.localStorage.getItem('collectionDataBase')));
} catch(e) {}

window['collectionDataBase'] = collectionDataBase;