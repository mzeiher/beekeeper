import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CollectionComponent } from './components/collection/collection.component';
import { HiveComponent } from './components/hive/hive.component';
import { CollectionsComponent } from './components/collections/collections.component';

import { CollectionService } from './service/collection.service';
import { HiveService } from './service/hive.service';

@NgModule({
  imports: [
    CommonModule, RouterModule
  ],
  declarations: [CollectionComponent, HiveComponent, CollectionsComponent],
  providers: [HiveService, CollectionService]
})
export class HiveModule { }
