import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Router } from '@angular/router';

import { ApiaryService } from '../../service/apiary.service';

import { Apiary } from '../../../../../../shared/model/apiary';
import { Hive } from '../../../../../../shared/model/hive';

import { HiveService } from '../../service/hive.service';
import { UiService } from '../../../utils/services/uiservice.service';
import { EditCollectionComponent } from '../collection/components/editcollection/editcollection.component';
import { DialogService } from '../../../ui/components/dialog/service/dialog.service';

@Component({
    selector: 'beekeeper-collections',
    templateUrl: './collections.component.html',
    styleUrls: ['./collections.component.scss'],
    providers: [ApiaryService, HiveService, UiService]
})
export class CollectionsComponent implements OnInit {

    @Input() apiaries: Apiary[];

    constructor(private router: Router, 
                private apiaryService: ApiaryService, 
                private hiveService: HiveService, 
                private uiService: UiService,
                private dialogService: DialogService) { }

    ngOnInit() {
        this.apiaryService.getAllApiaries().then((apiaries) => {
            this.apiaries = apiaries;
        });
    }

    editApiary(apiary:Apiary) {
        const dialog = this.dialogService.createDialog(EditCollectionComponent, [{id: 'ok', label: 'OK'},{id: 'cancel', label: 'CANCEL'}]);
        dialog.getComponent().apiary = JSON.parse(JSON.stringify(apiary));
        dialog.open();
        dialog.addClickListener((id, dlg) => {
            if(id === 'ok') {
                this.apiaryService.updateApiary(dialog.getComponent().apiary);
                this.ngOnInit();
            }
            dialog.close();
        });
    }

    addApiary() {
        this.apiaryService.addApiary({
            id: "",
            description: "new",
            history: [],
            hives: [],
            name: "new",
            owner: "",
            read: [],
            write: [],
            position: {
                lat: 0,
                lon: 0
            }
        }).then(() => { return this.apiaryService.getAllApiaries() }).then((value) => {
            this.apiaries = value;
        });
    }

}
