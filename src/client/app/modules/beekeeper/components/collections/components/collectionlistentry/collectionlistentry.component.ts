import { Component, Input, ViewChild, ElementRef, EventEmitter, Output} from "@angular/core";

import { CollatedCollection } from "../../model/collatedmodel.model";

import { CollectionService } from "../../../../service/collection.service";
import { UiService } from "../../../../../utils/services/uiservice.service";
import { Collection } from "../../../../../../../../shared/model/collection";


@Component({
    selector: 'beekeeper-collectionlistentry',
    templateUrl: './collectionlistentry.component.html',
    styleUrls: ['./collectionlistentry.component.scss'],
    providers: [CollectionService, UiService],
})
export class CollectionListEntryComponent {

    @Input() collatedCollection: CollatedCollection;
    @Output() onEdit: EventEmitter<Collection> = new EventEmitter<Collection>(true);

    constructor(private collectionService: CollectionService, private uiService:UiService) {
    }
    
    editClick():void {
        this.onEdit.emit(this.collatedCollection.targetCollection);
    }

}