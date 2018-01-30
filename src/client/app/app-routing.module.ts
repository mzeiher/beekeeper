import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HiveModule } from './beekeeper/beekeeper.module';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router/src/config';
import { HivelistComponent } from './beekeeper/components/hivelist/hivelist.component';
import { HiveComponent } from './beekeeper/components/hive/hive.component';
import { CollectionsComponent } from './beekeeper/components/collections/collections.component';
const appRoutes: Routes = [
    { path: 'collections', component: CollectionsComponent},
    { path: 'collection/:id', component: HivelistComponent},
    { path: 'hive/:id', component: HiveComponent },
    { path: '**', component: CollectionsComponent }
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
