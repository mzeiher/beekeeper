import { Component, Input } from "@angular/core";
import { Collection } from "../../../../../../../../shared/model/collection";

@Component({
    selector: 'beekeeper-collectioninfo',
    styleUrls: ['./collectioninfo.component.scss'],
    templateUrl: './collectioninfo.component.html'
})
export class CollectionInfoComponent {
    @Input() collection: Collection;
}