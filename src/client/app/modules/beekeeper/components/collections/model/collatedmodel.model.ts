import { Hive } from "../../../../../../../shared/model/hive";
import { Collection } from "../../../../../../../shared/model/collection";

export interface CollatedCollection {
    id: string;
    name: string;
    description: string;
    targetCollection: Collection; 
    image: string;
    
    position?: {
        lon: number;
        lat: number;
    }

    owner: string;
    write: string[];
    read: string[];
    hives: Hive[];
};