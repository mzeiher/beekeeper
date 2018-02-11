import { Hive, HiveSuper } from "./hive";
import { Frame } from "./frame";

export interface Warehouse {
    id:string;

    clipboard: Storage;
    archive: Storage;
}

export interface Storage {

    hives: Hive[];
    hiveSupers: HiveSuper[];
    frames: Frame
    
}