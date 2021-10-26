import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/internal/Observable";

export interface canComponentDeactivate {
    canDeactivate: ()=> Observable<boolean> | Promise<boolean> | boolean;
}

export class canDeactivateGuard implements CanDeactivate<canComponentDeactivate>{
    canDeactivate(component: canComponentDeactivate, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?:RouterStateSnapshot)
    :Observable<boolean> | Promise<boolean> | boolean {
        return component.canDeactivate();
    }
}