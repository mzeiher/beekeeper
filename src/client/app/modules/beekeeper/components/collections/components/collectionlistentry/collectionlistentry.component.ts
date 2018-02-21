import { Component, Input, ViewChild, ElementRef, EventEmitter, Output} from "@angular/core";

import { ApiaryService } from "../../../../service/apiary.service";
import { UiService } from "../../../../../utils/services/uiservice.service";
import { Apiary } from "../../../../../../../../shared/model/apiary";


@Component({
    selector: 'beekeeper-collectionlistentry',
    templateUrl: './collectionlistentry.component.html',
    styleUrls: ['./collectionlistentry.component.scss'],
    providers: [ApiaryService, UiService],
})
export class CollectionListEntryComponent {

    @Input() apiary: Apiary;
    @Output() onEdit: EventEmitter<Apiary> = new EventEmitter<Apiary>(true);

    constructor(private collectionService: ApiaryService, private uiService:UiService) {
    }
    
    editClick():void {
        this.onEdit.emit(this.apiary);
    }

}