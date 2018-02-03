import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Router } from '@angular/router';

import { CollectionService } from '../../service/collection.service';

import { Collection } from '../../../../../../shared/model/collection';
import { Hive } from '../../../../../../shared/model/hive';
import { CollatedCollection } from "./model/collatedmodel.model";

import { HiveService } from '../../service/hive.service';

type CollatedCollections = CollatedCollection[];

@Component({
    selector: 'beekeeper-collections',
    templateUrl: './collections.component.html',
    styleUrls: ['./collections.component.css'],
    providers: [CollectionService, HiveService]
})
export class CollectionsComponent implements OnInit {

    @Input() collections: CollatedCollections;

    constructor(private router: Router, private collectionService: CollectionService, private hiveService: HiveService) { }

    ngOnInit() {
        this.collectionService.getAllCollections().then((collections) => {
            return new Promise<{ collections: Collection[], hives: Hive[]}>((resolve, reject) => {
                this.hiveService.getAllHives().then((hives) => {
                    resolve({collections: collections, hives: hives});
                });
            });
        }).then((value) => {
            const all: CollatedCollection = {
                name: 'All',
                read: [],
                write: [],
                description: 'All Hives',
                id: 'all',
                owner: '',
                hives: [],
                image: null,
                targetCollection: null
            };
            const uncollected: CollatedCollection = {
                name: 'Uncollected',
                read: [],
                write: [],
                description: 'All hives not in a collection',
                id: 'uncollected',
                owner: '',
                hives: [],
                image: null,
                targetCollection: null
            };

            const hivesInCollection = value.collections.reduce<string[]>((prevValue, currentValue) => {
                const arr =  [...prevValue, ...currentValue.hives];
                return arr;
            }, []).filter((value, idx, arr) => {
                return arr.indexOf(value) === idx;
            });
            all.hives = value.hives;
            uncollected.hives = value.hives.reduce<Hive[]>((prevValue, currentValue) => {
                if(hivesInCollection.indexOf(currentValue.id) < 0) {
                    prevValue.push(currentValue);
                }
                return prevValue;
            }, []);

            const collatedCollections:CollatedCollections = [];
            collatedCollections.push(all, uncollected);

            value.collections.reduce((prevValue, currentValue) => {
                const collection:CollatedCollection = {
                    id: currentValue.id,
                    description: currentValue.description,
                    read: currentValue.read,
                    write: currentValue.write,
                    owner: currentValue.owner,
                    name: currentValue.name,
                    position: currentValue.position,
                    image: null,
                    hives: currentValue.hives.map<Hive>((currentValue, index) => {
                        for(let i = 0; i < value.hives.length; i++) {
                            if(value.hives[i].id === currentValue) {
                                return value.hives[i];
                            }
                        }
                        return null;
                    }).filter((value) => {
                        return value !== null;
                    }),
                    targetCollection: currentValue
                }
                prevValue.push(collection);

                return prevValue;
            }, collatedCollections);

            this.collections = collatedCollections;
        });
    }

    addCollection() {
        this.collectionService.addCollection({
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
        }).then(() => { return this.collectionService.getAllCollections() }).then((value) => {
            
        });
    }

}
