import { Component, OnInit } from '@angular/core';
import { ApiSearchService } from './api-search.service';
import { NzNotificationService } from 'ng-cosmos-ui';

@Component({
    selector: 'app-api-search',
    templateUrl: './api-search.component.html',
    styleUrls: ['./api-search.component.css']
})
export class ApiSearchComponent implements OnInit {
    pageIndex = 1;
    pageSize = 10;
    loading = true;
    queryParams: any;
    catalogId: any;
    interfaceData = [];
    total: any = 1;
    constructor(
        private service: ApiSearchService,
        private notification: NzNotificationService
    ) { }

    ngOnInit() {
    }

    // 查询接口列表
    refreshData(reset = false) {
        if (reset) {
            this.pageIndex = 1;
        }
        this.loading = true;
        const params = this.queryParams || {};
        if (this.catalogId) {
            params['catalogId'] = this.catalogId;
        }

        params.page = this.pageIndex;
        params.pageSize = this.pageSize;

        this.service.getInterfaceList(params).subscribe((response) => {
            if (response.code === 200) {
                this.loading = false;
                this.interfaceData = response.data.data;
                this.total = response.data.total;
            } else {
                this.notification.create('warning', '错误提示', response.message);

            }
        });
    }

}
