import { Component, OnInit } from '@angular/core';
import { HiveService } from '../../service/hive.service';
import { Input } from '@angular/core/src/metadata/directives';
import { Hive } from '../../../../../shared/model/hive';

@Component({
  selector: 'app-hive',
  templateUrl: './hive.component.html',
  styleUrls: ['./hive.component.css']
})
export class HiveComponent implements OnInit {

  @Input() hive: Hive;
  
  constructor(private hiveService: HiveService) { }

  ngOnInit() {
  }

}
