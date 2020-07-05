import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { SetLanguage, SetRemember, SetTenant, ModifyOpenedTabCount, } from '../actions/session.actions';
import { SessionState } from '../states';
import * as i0 from "@angular/core";
import * as i1 from "@ngxs/store";
let SessionStateService = class SessionStateService {
    constructor(store) {
        this.store = store;
    }
    getLanguage() {
        return this.store.selectSnapshot(SessionState.getLanguage);
    }
    getTenant() {
        return this.store.selectSnapshot(SessionState.getTenant);
    }
    getSessionDetail() {
        return this.store.selectSnapshot(SessionState.getSessionDetail);
    }
    dispatchSetLanguage(...args) {
        return this.store.dispatch(new SetLanguage(...args));
    }
    dispatchSetTenant(...args) {
        return this.store.dispatch(new SetTenant(...args));
    }
    dispatchSetRemember(...args) {
        return this.store.dispatch(new SetRemember(...args));
    }
    dispatchModifyOpenedTabCount(...args) {
        return this.store.dispatch(new ModifyOpenedTabCount(...args));
    }
};
SessionStateService.ɵprov = i0.ɵɵdefineInjectable({ factory: function SessionStateService_Factory() { return new SessionStateService(i0.ɵɵinject(i1.Store)); }, token: SessionStateService, providedIn: "root" });
SessionStateService = __decorate([
    Injectable({
        providedIn: 'root',
    }),
    __metadata("design:paramtypes", [Store])
], SessionStateService);
export { SessionStateService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vzc2lvbi1zdGF0ZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29yZS9zcmMvbGliL3NlcnZpY2VzL3Nlc3Npb24tc3RhdGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3BDLE9BQU8sRUFDTCxXQUFXLEVBQ1gsV0FBVyxFQUNYLFNBQVMsRUFDVCxvQkFBb0IsR0FDckIsTUFBTSw0QkFBNEIsQ0FBQztBQUNwQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sV0FBVyxDQUFDOzs7QUFLekMsSUFBYSxtQkFBbUIsR0FBaEMsTUFBYSxtQkFBbUI7SUFDOUIsWUFBb0IsS0FBWTtRQUFaLFVBQUssR0FBTCxLQUFLLENBQU87SUFBRyxDQUFDO0lBRXBDLFdBQVc7UUFDVCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRUQsU0FBUztRQUNQLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFRCxnQkFBZ0I7UUFDZCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFFRCxtQkFBbUIsQ0FBQyxHQUFHLElBQStDO1FBQ3BFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxXQUFXLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxHQUFHLElBQTZDO1FBQ2hFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxTQUFTLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFRCxtQkFBbUIsQ0FBQyxHQUFHLElBQStDO1FBQ3BFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxXQUFXLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFFRCw0QkFBNEIsQ0FBQyxHQUFHLElBQXdEO1FBQ3RGLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxvQkFBb0IsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDaEUsQ0FBQztDQUNGLENBQUE7O0FBOUJZLG1CQUFtQjtJQUgvQixVQUFVLENBQUM7UUFDVixVQUFVLEVBQUUsTUFBTTtLQUNuQixDQUFDO3FDQUUyQixLQUFLO0dBRHJCLG1CQUFtQixDQThCL0I7U0E5QlksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3hzL3N0b3JlJztcclxuaW1wb3J0IHtcclxuICBTZXRMYW5ndWFnZSxcclxuICBTZXRSZW1lbWJlcixcclxuICBTZXRUZW5hbnQsXHJcbiAgTW9kaWZ5T3BlbmVkVGFiQ291bnQsXHJcbn0gZnJvbSAnLi4vYWN0aW9ucy9zZXNzaW9uLmFjdGlvbnMnO1xyXG5pbXBvcnQgeyBTZXNzaW9uU3RhdGUgfSBmcm9tICcuLi9zdGF0ZXMnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290JyxcclxufSlcclxuZXhwb3J0IGNsYXNzIFNlc3Npb25TdGF0ZVNlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmU6IFN0b3JlKSB7fVxyXG5cclxuICBnZXRMYW5ndWFnZSgpIHtcclxuICAgIHJldHVybiB0aGlzLnN0b3JlLnNlbGVjdFNuYXBzaG90KFNlc3Npb25TdGF0ZS5nZXRMYW5ndWFnZSk7XHJcbiAgfVxyXG5cclxuICBnZXRUZW5hbnQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5zZWxlY3RTbmFwc2hvdChTZXNzaW9uU3RhdGUuZ2V0VGVuYW50KTtcclxuICB9XHJcblxyXG4gIGdldFNlc3Npb25EZXRhaWwoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5zZWxlY3RTbmFwc2hvdChTZXNzaW9uU3RhdGUuZ2V0U2Vzc2lvbkRldGFpbCk7XHJcbiAgfVxyXG5cclxuICBkaXNwYXRjaFNldExhbmd1YWdlKC4uLmFyZ3M6IENvbnN0cnVjdG9yUGFyYW1ldGVyczx0eXBlb2YgU2V0TGFuZ3VhZ2U+KSB7XHJcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgU2V0TGFuZ3VhZ2UoLi4uYXJncykpO1xyXG4gIH1cclxuXHJcbiAgZGlzcGF0Y2hTZXRUZW5hbnQoLi4uYXJnczogQ29uc3RydWN0b3JQYXJhbWV0ZXJzPHR5cGVvZiBTZXRUZW5hbnQ+KSB7XHJcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgU2V0VGVuYW50KC4uLmFyZ3MpKTtcclxuICB9XHJcblxyXG4gIGRpc3BhdGNoU2V0UmVtZW1iZXIoLi4uYXJnczogQ29uc3RydWN0b3JQYXJhbWV0ZXJzPHR5cGVvZiBTZXRSZW1lbWJlcj4pIHtcclxuICAgIHJldHVybiB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBTZXRSZW1lbWJlciguLi5hcmdzKSk7XHJcbiAgfVxyXG5cclxuICBkaXNwYXRjaE1vZGlmeU9wZW5lZFRhYkNvdW50KC4uLmFyZ3M6IENvbnN0cnVjdG9yUGFyYW1ldGVyczx0eXBlb2YgTW9kaWZ5T3BlbmVkVGFiQ291bnQ+KSB7XHJcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgTW9kaWZ5T3BlbmVkVGFiQ291bnQoLi4uYXJncykpO1xyXG4gIH1cclxufVxyXG4iXX0=