import { Component, Input, ViewChild, ElementRef, EventEmitter, Output} from "@angular/core";

import { ApiaryService } from "../../../../service/apiary.service";
import { UiService } from "../../../../../utils/services/uiservice.service";
import { Apiary } from "../../../../../../../../shared/model/apiary";


@Component({
    selector: 'beekeeper-apiaryentry',
    templateUrl: './apiaryentry.component.html',
    styleUrls: ['./apiaryentry.component.scss'],
    providers: [ApiaryService, UiService],
})
export class ApiaryEntryComponent {

    @Input() apiary: Apiary;
    @Output() onEdit: EventEmitter<Apiary> = new EventEmitter<Apiary>(true);

    constructor(private apiaryService: ApiaryService, private uiService:UiService) {
    }
    
    editClick():void {
        this.onEdit.emit(this.apiary);
    }

}