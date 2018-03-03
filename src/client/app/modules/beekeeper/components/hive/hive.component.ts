import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'leaflet';

import { HiveService } from '../../service/hive.service';
import { ApiaryService } from '../../service/apiary.service';

import { Hive } from '../../../../../../shared/model/hive';
import { Apiary } from '../../../../../../shared/model/apiary';
import { DialogService } from '../../../ui/components/dialog/service/dialog.service';
import { EditHiveComponent } from './components/edithive/edithive.component';

@Component({
    selector: 'beekeeper-hive',
    templateUrl: './hive.component.html',
    styleUrls: ['./hive.component.scss'],
    providers: [HiveService, ApiaryService, DialogService]
})
export class HiveComponent implements OnInit {

    @Input() hive: Hive;
    @Input() currentApiary: Apiary = null;

    constructor(private dialogService: DialogService, 
                private hiveService: HiveService, 
                private apiaryService: ApiaryService, 
                private activatedRoute: ActivatedRoute) { 
        
    }

    ngOnInit() {
        const hiveId = this.activatedRoute.snapshot.paramMap.get('hiveId');
        
        this.hiveService.getHive(hiveId).then((hive) => {
            this.hive = hive;
            const apiaryId = this.activatedRoute.snapshot.paramMap.get('apiaryId');
            this.apiaryService.getApiary(apiaryId).then((value) => {
                this.currentApiary = value;
            });
        }).catch(() => {
            this.hive = null;
        });

    }

    editHive() {
        const currentHiveEdit = JSON.parse(JSON.stringify(this.hive));
        const dialog = this.dialogService.createDialog(EditHiveComponent, [{id: 'cancel', label: 'Cancel'},{id: 'save', label: 'Save'}]);
        dialog.getComponent().hive = currentHiveEdit;
        dialog.addClickListener((id, dialog) => {
            if(id === 'save') {
                this.hiveService.updateHive(currentHiveEdit).then((value) => {
                    this.hive = value;
                });
            }
            dialog.close();
        });
        this
        dialog.open();
    }
    
}
