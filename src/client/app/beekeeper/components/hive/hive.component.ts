import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

import { HiveService } from '../../service/hive.service';
import { Input } from '@angular/core';
import { Hive } from '../../../../../shared/model/hive';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';

@Component({
    selector: 'beekeeper-hive',
    templateUrl: './hive.component.html',
    styleUrls: ['./hive.component.css']
})
export class HiveComponent implements OnInit {

    @Input() hive: Hive;
    @Input() currentCollection: string = null;
    
    constructor(private router: Router, private hiveService: HiveService, private activatedRoute: ActivatedRoute) { }

    ngOnInit() {
        this.currentCollection = this.activatedRoute.snapshot.paramMap.get('collectionId');
        this.hiveService.getHive(this.activatedRoute.snapshot.paramMap.get('hiveId')).then((hive) => {
            this.hive = hive;
        }).catch(() => {
            this.hive = null;
        });
    }
}

