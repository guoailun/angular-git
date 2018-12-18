import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-top',
    templateUrl: './top.component.html',
    styleUrls: ['./top.component.less']
})
export class TopComponent implements OnInit {
    menuList: any = [
        {
            label: 'API接口管理',
            url: '/apiManagement',
            params: {}
        }, {
            label: '公用返回码管理',
            url: '/responseCodeManagement',
            params: {}
        }, {
            label: '域名前缀管理',
            url: '/domainPrefixManagement',
            params: {}
        }
    ];

    tabs: any = [
        {
            name: 'API文档',
            id: 1,
            icon: 'anticon anticon-file'
        },
        {
            name: 'SDK下载',
            id: 2,
            icon: 'anticon anticon-calendar'
        }
    ];

    index = 1;
    searchValue: any;
    queryParams: any = {};
    constructor() { }

    ngOnInit() {
    }

    change(data: any) {
        this.index = data.id;
    }

    // 根据版本模糊搜索
    onSearch(event: any, type: any) {
        const that = this;
        if (type === 'click') {
            if (event) {
                event = event.replace(/(^\s*)|(\s*$)/g, '');
            }
            that.queryParams = { version: event };
            // that.refreshData(true);
        } else {
            if (event.keyCode === 13) {
                if (that.searchValue) {
                    that.searchValue = that.searchValue.replace(/(^\s*)|(\s*$)/g, '');
                }
                that.queryParams = { version: that.searchValue };
                // that.refreshData(true);
            }
        }
    }

}
