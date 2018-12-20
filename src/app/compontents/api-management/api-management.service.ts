import { Injectable, Injector } from '@angular/core';
import { CurdService } from 'src/app/common/services/crud.service';
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ApiManagementService extends CurdService {
    constructor(private injector: Injector) {
        super(injector);
    }

    // 获取接口详情
    getInterfaceDetail(id: any) {
        return this.http.get(`${this.baseUrl}/meta/metas/${id}`).pipe(
            catchError(this.handleError)
        );
    }
}
