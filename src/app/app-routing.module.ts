import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'api-management',
        pathMatch: 'full'
    },
    {
        path: 'api-management',
        data: { title: 'API接口分类查看' },
        loadChildren: './compontents/api-management/api-management.module#ApiManagementModule'
    },
    {
        path: 'api-search/:name',
        data: { title: 'API搜索详情' },
        loadChildren: './compontents/api-search/api-search.module#ApiSearchModule'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            { useHash: true }
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
