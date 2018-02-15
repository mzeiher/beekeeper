import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'leaflet';

import { HiveService } from '../../service/hive.service';
import { CollectionService } from '../../service/collection.service';

import { Hive } from '../../../../../../shared/model/hive';
import { Collection } from '../../../../../../shared/model/collection';

@Component({
    selector: 'beekeeper-hive',
    templateUrl: './hive.component.html',
    styleUrls: ['./hive.component.scss'],
    providers: [HiveService, CollectionService]
})
export class HiveComponent implements OnInit {

    @Input() hive: Hive;
    @Input() currentCollection: Collection = null;
    @Input() currentHiveEdit:Hive;

    constructor(private router: Router, private hiveService: HiveService, private collectionService: CollectionService, private activatedRoute: ActivatedRoute) { 
        
    }

    ngOnInit() {
        const hiveId = this.activatedRoute.snapshot.paramMap.get('hiveId');
        
        this.hiveService.getHive(hiveId).then((hive) => {
            this.hive = hive;
            const collectionId = this.activatedRoute.snapshot.paramMap.get('collectionId');
            if (collectionId && collectionId !== 'all' && collectionId !== 'uncollected') {
                this.collectionService.getAllCollections().then((collections) => {
                    for (let collection of collections) {
                        if (collection.id === collectionId) {
                            this.currentCollection = collection;
                            break;
                        }
                    }
                    if (this.currentCollection === null) {
                        this.currentCollection = this.collectionService.getAllCollection();
                    }
                });
            } else {
                if(collectionId === null || collectionId === 'all') {
                    this.currentCollection = this.collectionService.getAllCollection();
                } else if(collectionId === 'uncollected') {
                    this.currentCollection = this.collectionService.getUncollectedCollection();
                }
            }
        }).catch(() => {
            this.hive = null;
        });

    }

    editHive() {
        this.currentHiveEdit = JSON.parse(JSON.stringify(this.hive));
    }
    cancelEdit() {
        this.currentHiveEdit = null;
    }

    updateHive() {
        debugger;
        this.hiveService.updateHive(this.currentHiveEdit).then((hive) => {
            this.currentHiveEdit = null;
            this.hive = hive;
        });
    }
}
