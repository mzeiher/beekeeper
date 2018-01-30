import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

import { HiveService } from '../../service/hive.service';
import { Input } from '@angular/core';
import { Hive } from '../../../../../shared/model/hive';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';

@Component({
    selector: 'app-hive',
    templateUrl: './hive.component.html',
    styleUrls: ['./hive.component.css']
})
export class HiveComponent implements OnInit {

    @Input() hive: Hive;
    @ViewChild('hiveinfo') hiveInfo: ElementRef

    constructor(private router: Router, private hiveService: HiveService, private activatedRoute: ActivatedRoute) { }

    ngOnInit() {
        let hive = this.hiveService.currentHive;
        if (hive && (hive.id !== this.activatedRoute.snapshot.paramMap.get('id'))) {
            this.hiveService.getHive(this.activatedRoute.snapshot.paramMap.get('id')).then((hive) => {
                this.hive = hive;
                this.hiveInfo.nativeElement.value = JSON.stringify(this.hive);
            });
        } else {
            this.hive = hive;
            this.hiveInfo.nativeElement.value = JSON.stringify(this.hive);
        }
    }

}
