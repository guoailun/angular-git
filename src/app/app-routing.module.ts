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
        data: { title: 'API接口管理' },
        loadChildren: './compontents/api-management/api-management.module#ApiManagementModule'
    },
    {
        path: 'api-search/:name',
        data: { title: 'API搜索详情' },
        loadChildren: './compontents/api-search/api-search.module#ApiSearchModule'
    },
    // {
    //     path: 'domainPrefixManagement',
    //     data: { title: '域名前缀管理' },
    //     loadChildren: './components/domainName/domain-name.module#DomainNameModule'
    // },
    // {
    //     path: 'responseCodeManagement',
    //     data: { title: '返回码管理' },
    //     loadChildren: './components/responseCode/response-code.module#ResponseCodeModule'
    // }
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
