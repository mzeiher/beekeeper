import { Component, Input, ViewChild, ElementRef} from "@angular/core";

import { CollatedCollection } from "../../model/collatedmodel.model";

import { CollectionService } from "../../../../service/collection.service";
import { UiService } from "../../../../../utils/services/uiservice.service";


@Component({
    selector: 'beekeeper-collectionlistentry',
    templateUrl: './collectionlistentry.component.html',
    styleUrls: ['./collectionlistentry.component.scss'],
    providers: [CollectionService, UiService],
})
export class CollectionListEntryComponent {

    @Input() collatedCollection: CollatedCollection;

    constructor(private collectionService: CollectionService, private uiService:UiService) {
    }
    
    changeName():void {
            
    }

}