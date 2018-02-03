import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { HiveService } from '../../service/hive.service';
import { CollectionService } from '../../service/collection.service';

import { Hive } from '../../../../../../shared/model/hive';
import { Collection } from '../../../../../../shared/model/collection';

@Component({
    selector: 'beekeeper-collection',
    templateUrl: './collection.component.html',
    styleUrls: ['./collection.component.css'],
    providers: [CollectionService, HiveService]
})
export class CollectionComponent implements OnInit {

    constructor(private router: Router,
        private activatedRoute: ActivatedRoute,
        private hiveService: HiveService,
        private collectionService: CollectionService) { }

    @Input() hiveList: Hive[] = [];
    @Input() currentCollection: Collection;

    ngOnInit() {
        const collectionId = this.activatedRoute.snapshot.paramMap.get('collectionId');
        if (collectionId === 'uncollected') {
            this.currentCollection = this.collectionService.getUncollectedCollection();
            this.collectionService.getAllCollections().then((collections) => {
                const hiveIds = collections.reduce((prevValue, currentValue) => {
                    return currentValue.hives.concat(prevValue);
                }, []).filter((value, index, self) => {
                    return self.indexOf(value) === index;
                });
                this.currentCollection.hives = hiveIds;
                this.reloadList();
            });
        } else if (collectionId === 'all') {
            this.currentCollection = this.collectionService.getAllCollection();
            this.reloadList();
        } else if (typeof collectionId === 'string') {
            this.collectionService.getCollection(collectionId).then(
                (collection) => {
                    this.currentCollection = collection;
                    this.reloadList();
                }
            ).catch((error) => {
                this.currentCollection = null;
                this.reloadList();
            });
        } else {
            this.currentCollection = null;
        }
    }

    public addHive() {
        this.hiveService.getTemplate("").then((hive) => {
            if(this.currentCollection && this.currentCollection.id !== 'all' && this.currentCollection.id !== 'uncollected') {
                hive.collections.push(this.currentCollection.id);
            }
            return this.hiveService.addHive(hive);
        }).then((hive) => {
            if (this.currentCollection && (this.currentCollection.id === 'all' || this.currentCollection.id === 'uncollected')) {
                return Promise.resolve(this.currentCollection);
            } else if (this.currentCollection) {
                this.currentCollection.hives.push(hive.id);
                return this.collectionService.updateCollection(this.currentCollection);
            } else {
                return Promise.resolve(null);
            }
        }).then((collection) => {
            if (collection) {
                this.currentCollection = collection;
            }
            this.reloadList();
        });

    }

    public navigateTo(hive: Hive) {
        if (this.currentCollection) {
            this.router.navigate(['/collection', this.currentCollection.id, 'hive', hive.id]);
        } else {
            this.router.navigate(['/hive', hive.id]);
        }
    }

    private reloadList() {
        if (this.currentCollection !== null) {
            if (this.currentCollection.id === 'all') {
                this.hiveService.getAllHives().then((hiveList) => {
                    this.hiveList = hiveList;
                });
            } else if (this.currentCollection.id === 'uncollected') {
                this.hiveService.getAllHivesNotInCollection(this.currentCollection).then((hiveList) => {
                    this.hiveList = hiveList;
                });
            } else {
                this.hiveService.getAllHivesForCollection(this.currentCollection).then((hiveList) => {
                    this.hiveList = hiveList;
                });
            }
        } else {
            this.hiveList = null;
        }
    }
}
