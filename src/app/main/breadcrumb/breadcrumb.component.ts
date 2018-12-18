import { Component, OnInit } from '@angular/core';
import { Params, Router, ActivatedRoute, NavigationEnd, PRIMARY_OUTLET } from '@angular/router';
import { BreadcrumbService } from './breadcrumb.service';
interface IBreadcrumb {
    label: string;
    params: Params;
    url: string;
}
@Component({
    selector: 'app-breadcrumb',
    templateUrl: './breadcrumb.component.html',
    styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {
    public breadcrumbs: IBreadcrumb[];
    private appName = '';
    index: number;
    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private service: BreadcrumbService) {
        this.breadcrumbs = [];
    }

    listenerRouterChange() {
        this.router.events.subscribe(Event => {
            if (Event instanceof NavigationEnd) {
                const root: ActivatedRoute = this.activatedRoute.root;
                this.breadcrumbs = this.getBreadcrumbs(root);
                this.breadcrumbs = this.breadcrumbs.reduce((x, y) => x.findIndex(e => e.label === y.label) < 0 ? [...x, y] : x, []);
            }
        });
    }

    ngOnInit() {
        this.listenerRouterChange();
    }

    getBreadcrumbs(route: ActivatedRoute, url: string = '', breadcrumbs: IBreadcrumb[] = []): IBreadcrumb[] {
        const ROUTE_DATA_BREADCRUMB = 'title';
        const children: ActivatedRoute[] = route.children;
        if (children.length === 0) {
            return breadcrumbs;
        }

        for (const child of children) {
            if (child.outlet !== PRIMARY_OUTLET) {
                continue;
            }
            if (!child.snapshot.data.hasOwnProperty(ROUTE_DATA_BREADCRUMB)) {
                return this.getBreadcrumbs(child, url, breadcrumbs);
            }
            const routeURL: string = child.snapshot.url.map(segment => segment.path).join('/');
            url += `/${routeURL}`;
            const breadcrumb: IBreadcrumb = {
                label: child.snapshot.data[ROUTE_DATA_BREADCRUMB],
                params: child.snapshot.params,
                url: url
            };
            breadcrumbs.push(breadcrumb);
            return this.getBreadcrumbs(child, url, breadcrumbs);
        }
        return breadcrumbs;
    }

}
