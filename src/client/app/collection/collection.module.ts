import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CollectionsComponent } from "./components/collections/collections.component";
import { CollectionService } from "./service/collection.service";
import { CollectionComponent } from './components/collection/collection.component';

@NgModule({
    imports: [
      CommonModule
    ],
    declarations: [CollectionsComponent, CollectionComponent],
    providers: [CollectionService]
  })
  export class CollectionModule { }