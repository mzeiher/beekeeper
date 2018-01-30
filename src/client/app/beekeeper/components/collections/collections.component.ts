import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Collection } from '../../../../../shared/model/collection';
import { CollectionService } from '../../service/collection.service';
import { Router } from '@angular/router';

@Component({
    selector: 'beekeeper-collections',
    templateUrl: './collections.component.html',
    styleUrls: ['./collections.component.css'],
    providers: [CollectionService]
})
export class CollectionsComponent implements OnInit {

    @Input() collections: Collection[];

    constructor(private router: Router, private collectionService: CollectionService) { }

    ngOnInit() {
        this.collectionService.getAllCollections().then((collections) => {
            this.collections = collections;
        });
    }

    selectCollection(collection: Collection) {
        this.router.navigate(['/collection', collection.id]);
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
            write: []
        }).then(() => { return this.collectionService.getAllCollections() }).then((value) => {
            this.collections = value;
        });
    }

}
