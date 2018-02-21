import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'leaflet';

import { HiveService } from '../../service/hive.service';
import { ApiaryService } from '../../service/apiary.service';

import { Hive } from '../../../../../../shared/model/hive';
import { Apiary } from '../../../../../../shared/model/apiary';

@Component({
    selector: 'beekeeper-hive',
    templateUrl: './hive.component.html',
    styleUrls: ['./hive.component.scss'],
    providers: [HiveService, ApiaryService]
})
export class HiveComponent implements OnInit {

    @Input() hive: Hive;
    @Input() currentApiary: Apiary = null;
    @Input() currentHiveEdit:Hive;

    constructor(private router: Router, private hiveService: HiveService, private apiaryService: ApiaryService, private activatedRoute: ActivatedRoute) { 
        
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
        this.currentHiveEdit = JSON.parse(JSON.stringify(this.hive));
    }
    
}
