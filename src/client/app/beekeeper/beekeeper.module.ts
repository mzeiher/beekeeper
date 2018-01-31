import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CollectionComponent } from './components/collection/collection.component';
import { HiveComponent } from './components/hive/hive.component';
import { HiveService } from './service/hive.service';
import { CollectionService } from './service/collection.service';
import { CollectionsComponent } from './components/collections/collections.component';

@NgModule({
  imports: [
    CommonModule, RouterModule
  ],
  declarations: [CollectionComponent, HiveComponent, CollectionsComponent],
  providers: [HiveService, CollectionService]
})
export class HiveModule { }
