import { Component, Input } from "@angular/core";

import { CollatedCollection } from "../../model/collatedmodel.model";

import { CollectionService } from "../../../../service/collection.service";

@Component({
    selector: 'beekeeper-collectionlistentry',
    templateUrl: './collectionlistentry.component.html',
    styleUrls: ['./collectionlistentry.component.css'],
    providers: [CollectionService],
})
export class CollectionListEntryComponent {

    @Input() collatedCollection: CollatedCollection;

    constructor(private collectionService: CollectionService) {}

    changeName():void {

    }
}