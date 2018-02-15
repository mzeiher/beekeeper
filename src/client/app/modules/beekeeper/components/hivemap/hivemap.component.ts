import { Component, Input, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Hive } from "../../../../../../shared/model/hive";
import { Map, map, tileLayer } from "leaflet";

@Component({
    selector: 'beekeeper-hivemap',
    styleUrls: ['./hivemap.component.scss'],
    templateUrl: './hivemap.component.html'
})
export class HiveMapComponent implements OnInit {

    @Input() set hives(hives: Hive[]) {
        this.hiveList = hives;
    }

    @ViewChild('map') map: ElementRef;

    private hiveList: Hive[] = [];
    private leafletMap: Map = null;

    ngOnInit() {
        this.leafletMap = map(this.map.nativeElement, {
            center: [49,7],
            zoom: 19,
            dragging: false,
            zoomControl: false,
            doubleClickZoom: false,
            scrollWheelZoom: false
        });

        tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {minZoom: 8, maxZoom: 19, attribution: 'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'}).addTo(this.leafletMap);

    }

}