import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Collection } from "../../../../../../../../shared/model/collection";
import { CollectionService } from "../../../../service/collection.service";

@Component({
    selector: 'beekeeper-editcollection',
    styleUrls: ['./editcollection.component.scss'],
    templateUrl: './editcollection.component.html',
    providers: [CollectionService]
})
export class EditCollectionComponent {

    @Input() collection: Collection
    @Output() onAction: EventEmitter<string> = new EventEmitter<string>(true);

    constructor(private collectionService:CollectionService) {}

    cancelEdit() {
        this.onAction.emit('cancel');
    }

    updateCollection() {
        this.onAction.emit('update');
    }
}