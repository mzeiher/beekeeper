import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { HiveService } from '../../service/hive.service';
import { ApiaryService } from '../../service/apiary.service';

import { Hive } from '../../../../../../shared/model/hive';
import { Apiary } from '../../../../../../shared/model/apiary';

@Component({
    selector: 'beekeeper-apiary',
    templateUrl: './apiary.component.html',
    styleUrls: ['./apiary.component.scss'],
    providers: [ApiaryService, HiveService]
})
export class ApiaryComponent implements OnInit {

    constructor(private router: Router,
        private activatedRoute: ActivatedRoute,
        private hiveService: HiveService,
        private apiaryService: ApiaryService) { }

    @Input() hiveList: Hive[] = [];
    @Input() currentApiary: Apiary;

    ngOnInit() {
        const apiaryId = this.activatedRoute.snapshot.paramMap.get('apiaryId');
        if (typeof apiaryId === 'string') {
            this.apiaryService.getApiary(apiaryId).then(
                (apiary) => {
                    this.currentApiary = apiary;
                    this.reloadList();
                }
            ).catch((error) => {
                this.currentApiary = null;
                this.reloadList();
            });
        } else {
            this.currentApiary = null;
        }
    }

    public addHive() {
        this.hiveService.getTemplate("").then((hive) => {
            hive.apiary = this.currentApiary.id;
            return this.hiveService.addHive(hive);
        }).then((hive) => {
            this.currentApiary.hives.push(hive.id);
            return this.apiaryService.updateApiary(this.currentApiary);
        }).then((apiary) => {
            if (apiary) {
                this.currentApiary = apiary;
            }
            this.reloadList();
        });

    }

    private reloadList() {
        if (this.currentApiary !== null) {
            this.hiveService.getAllHivesForApiary(this.currentApiary).then((hiveList) => {
                this.hiveList = hiveList;
            });

        } else {
            this.hiveList = null;
        }
    }
}
