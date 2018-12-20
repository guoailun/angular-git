import { Component, OnInit } from '@angular/core';
import { ApiManagementService } from './api-management.service';
import { NzNotificationService } from 'ng-cosmos-ui';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
    selector: 'app-api-management',
    templateUrl: './api-management.component.html',
    styleUrls: ['./api-management.component.css']
})
export class ApiManagementComponent implements OnInit {
    flag = false;                        // 分类的弹框
    selectedVersion: any;

    _interfaceDetailDate: any = {};      // 接口详情
    _requestHeadersTable: any = [];      // 请求header
    _requestQueryTable: any = [];
    _requestBodyTable: any = [];
    _responseHeadersTable: any = [];     // 返回header
    _responseSuccessTable: any = [];
    _responseFailTable: any = [];
    _codeTable: any = [];

    htmlRequestBody: any;                // 请求参数body
    htmlResponseSuccess: any;            // 成功返回body
    htmlResponseFail: any;               // 失败返回body

    parentItem: any = {};
    item: any = {};
    parmasStr: any;                     // 完整的请求地址
    id: any;

    constructor(
        private service: ApiManagementService,
        private notification: NzNotificationService,
        private activatedRoute: ActivatedRoute
    ) { }

    ngOnInit() {
        this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
            console.log(params);
            this.id = params.get('id');
            // this.getInterfaceDetail(this.id);
        });
    }

    change() {
        this.flag = !this.flag;
    }

    // 搜索值
    saveValue(value: any) {

    }

    // 获取当前接口的详情信息
    getInterfaceDetail(id: any) {
        this.service.getInterfaceDetail(id).subscribe((response: any) => {
            if (response.code === 200) {
                this._interfaceDetailDate = response.data;
            } else {
                this.notification.create('warning', '错误提示', response.message);
            }
        });
    }

}
