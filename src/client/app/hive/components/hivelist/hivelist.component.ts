import { Component, OnInit } from '@angular/core';
import { HiveService } from '../../service/hive.service';
import { Hive } from '../../../../../shared/model/hive';
import { ActivatedRoute, Router } from '@angular/router';
import { Input } from '@angular/core';

@Component({
    selector: 'app-hivelist',
    templateUrl: './hivelist.component.html',
    styleUrls: ['./hivelist.component.css']
})
export class HivelistComponent implements OnInit {

    constructor(private router: Router, private activatedRoute: ActivatedRoute, private hiveService: HiveService) { }

    @Input() hiveList: Hive[];

    private currentCollections: string;

    ngOnInit() {
        if (this.activatedRoute.snapshot.paramMap.get('collection')) {
            this.currentCollections = this.activatedRoute.snapshot.paramMap.get('collection');
        } else {
            this.currentCollections = null;
        }
        this.reloadList();
    }

    public addHive() {
        this.hiveService.getTemplate("").then((hive) => {
            return this.hiveService.addHive(hive);
        }).then((hive) => {
            this.reloadList();
        });

    }

    public navigateTo(hive:Hive) {
        this.hiveService.currentHive = hive;
        this.router.navigate(['/hive', hive.id]);
    }

    private reloadList() {
        if (this.currentCollections !== null) {
            this.hiveService.getAllHivesForCollection(this.currentCollections).then((hiveList) => {
                this.hiveList = hiveList;
            });
        } else {
            this.hiveService.getAllHives().then((hiveList) => {
                this.hiveList = hiveList;
            });
        }
    }
}
