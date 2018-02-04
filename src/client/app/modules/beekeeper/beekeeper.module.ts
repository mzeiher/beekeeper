import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UtilsModule } from '../utils/utils.module';

import { CollectionComponent } from './components/collection/collection.component';
import { HiveComponent } from './components/hive/hive.component';
import { CollectionsComponent } from './components/collections/collections.component';
import { CollectionListEntryComponent } from './components/collections/components/collectionlistentry/collectionlistentry.component';

import { CollectionService } from './service/collection.service';
import { HiveService } from './service/hive.service';
import { UiService } from '../utils/services/uiservice.service';
import { UIModule } from '../ui/ui.module';

@NgModule({
  imports: [
    CommonModule, RouterModule, UtilsModule, UIModule
  ],
  declarations: [CollectionComponent, HiveComponent, CollectionsComponent, CollectionListEntryComponent],
  providers: [HiveService, CollectionService, UiService],
  entryComponents: []
})
export class HiveModule { }
