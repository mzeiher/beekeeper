import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Apiary } from "../../../../../../../../shared/model/apiary";
import { ApiaryService } from "../../../../service/apiary.service";

@Component({
    selector: 'beekeeper-editapiary',
    styleUrls: ['./editapiary.component.scss'],
    templateUrl: './editapiary.component.html',
    providers: []
})
export class EditApiaryComponent {

    @Input() apiary: Apiary;
    
    constructor() {}

}