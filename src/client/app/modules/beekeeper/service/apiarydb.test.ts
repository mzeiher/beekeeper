import { Apiary } from "../../../../../shared/model/apiary";

interface DataBase {
    apiaries: Apiary[]
}

export const apiaryDataBase:DataBase = {
    apiaries: []
}

try {
    Object.assign(apiaryDataBase, JSON.parse(window.localStorage.getItem('apiaryDataBase')));
} catch(e) {}

window['apiaryDataBase'] = apiaryDataBase;