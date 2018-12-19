import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NzMessageService } from 'ng-cosmos-ui';

@Injectable()
export class CurdService {

    public static that: CurdService;
    public baseUrl: string;
    public productId: any;
    public urlParams: any;
    token: any;

    protected http: HttpClient;
    protected message: NzMessageService;

    constructor(private baseInjector: Injector) {
        this.http = this.baseInjector.get(HttpClient);
        this.message = this.baseInjector.get(NzMessageService);
        CurdService.that = this;
    }

    public handleGood = (response: any) => {
        if (response.code === 200) {
            this.message.create('success', '操作成功');
        }
        return response;
    }

    public handleBad = (response: any) => {
        if (response.code !== 200) {
            this.message.create('error', response.message);
        }
        return response;
    }

    /**
     * 错误处理
     * @param error
     */
    public handleError(error: any): Promise<any> {
        error = error.currentTarget;
        const errorCallback: any = {
            status: error.status,
            title: '错误',
            message: '错误'
        };
        return Promise.reject(errorCallback);
    }

    /**
     * 传参公共方法
     * @param params
     */
//    encodeURIComponent(params[name])
//    JSON.stringify(params[name])

    public getParams(params: any): string {
        const arr = [];
        for (const name in params) {
            if (params[name] != null) {
                arr.push(name + '=' + params[name]);
            }
        }
        return '?' + arr.join('&');
    }
}
