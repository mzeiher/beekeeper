import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HiveModule } from './modules/beekeeper/beekeeper.module';
import { CollectionComponent } from './modules/beekeeper/components/collection/collection.component';
import { HiveComponent } from './modules/beekeeper/components/hive/hive.component';
import { ApiariesComponent } from './modules/beekeeper/components/apiaries/apiaries.component';

const appRoutes: Routes = [
    {
        path: 'apiaries',
        component: ApiariesComponent
    },
    {
        path: 'apiary/:apiaryId',
        component: CollectionComponent
    },
    {
        path: 'apiary/:apiaryId/hive/:hiveId',
        component: HiveComponent
    },
    {
        path: 'hive/:hiveId',
        component: HiveComponent
    },
    {
        path: '**',
        component: ApiariesComponent
    }
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
