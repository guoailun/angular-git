import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-top',
    templateUrl: './top.component.html',
    styleUrls: ['./top.component.less']
})
export class TopComponent implements OnInit {
    @Output() saveValue = new EventEmitter<any>();
    @Input() set value(value: any) {
        console.log(value);
        if (value) {
            this.searchValue = value;
        }
    }
    index = 1;
    searchValue: any;
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
    constructor(
        private router: Router
    ) { }

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
                that.router.navigate(['/api-search', {'name': event}]);
            }
        } else {
            if (event.keyCode === 13) {
                if (that.searchValue) {
                    that.searchValue = that.searchValue.replace(/(^\s*)|(\s*$)/g, '');
                    that.router.navigate(['/api-search', {'name': that.searchValue}]);
                }
            }
        }
    }

}
