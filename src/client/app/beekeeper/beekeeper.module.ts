import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HivelistComponent } from './components/hivelist/hivelist.component';
import { HiveComponent } from './components/hive/hive.component';
import { HiveService } from './service/hive.service';
import { CollectionService } from './service/collection.service';
import { CollectionsComponent } from './components/collections/collections.component';

@NgModule({
  imports: [
    CommonModule, RouterModule
  ],
  declarations: [HivelistComponent, HiveComponent, CollectionsComponent],
  providers: [HiveService, CollectionService]
})
export class HiveModule { }
