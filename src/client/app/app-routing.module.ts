import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HiveModule } from './hive/hive.module';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router/src/config';
import { HivelistComponent } from './hive/components/hivelist/hivelist.component';
import { HiveComponent } from './hive/components/hive/hive.component';
import { CollectionsComponent } from './collection/components/collections/collections.component';
import { CollectionComponent } from './collection/components/collection/collection.component';

const appRoutes: Routes = [
    { path: 'collections', component: CollectionsComponent},
    { path: 'collections/:id', component: CollectionComponent},
    { path: 'hive/:id', component: HiveComponent },
    { path: '**', component: HivelistComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: true } // <-- debugging purposes only
        ), HiveModule
    ],
    exports: [
        RouterModule
    ]
})
export class AppRouting { }
