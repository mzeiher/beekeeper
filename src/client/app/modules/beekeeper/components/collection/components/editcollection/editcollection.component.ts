import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Apiary } from "../../../../../../../../shared/model/apiary";
import { ApiaryService } from "../../../../service/apiary.service";

@Component({
    selector: 'beekeeper-editcollection',
    styleUrls: ['./editcollection.component.scss'],
    templateUrl: './editcollection.component.html',
    providers: []
})
export class EditCollectionComponent {

    @Input() apiary: Apiary;
    
    constructor() {}

}