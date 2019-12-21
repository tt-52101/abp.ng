/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@core/mock/security-cameras.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { of as observableOf } from 'rxjs';
import { SecurityCamerasData } from '../data/security-cameras';
export class SecurityCamerasService extends SecurityCamerasData {
    constructor() {
        super(...arguments);
        this.cameras = [
            {
                title: 'Camera #1',
                source: 'assets/images/camera1.jpg',
            },
            {
                title: 'Camera #2',
                source: 'assets/images/camera2.jpg',
            },
            {
                title: 'Camera #3',
                source: 'assets/images/camera3.jpg',
            },
            {
                title: 'Camera #4',
                source: 'assets/images/camera4.jpg',
            },
        ];
    }
    /**
     * @return {?}
     */
    getCamerasData() {
        return observableOf(this.cameras);
    }
}
SecurityCamerasService.decorators = [
    { type: Injectable }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SecurityCamerasService.prototype.cameras;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VjdXJpdHktY2FtZXJhcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZzL25neC1hZG1pbi8iLCJzb3VyY2VzIjpbImxpYi9AY29yZS9tb2NrL3NlY3VyaXR5LWNhbWVyYXMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLEVBQUUsSUFBSSxZQUFZLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDdEQsT0FBTyxFQUFVLG1CQUFtQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFHdkUsTUFBTSxPQUFPLHNCQUF1QixTQUFRLG1CQUFtQjtJQUQvRDs7UUFHVSxZQUFPLEdBQWE7WUFDMUI7Z0JBQ0UsS0FBSyxFQUFFLFdBQVc7Z0JBQ2xCLE1BQU0sRUFBRSwyQkFBMkI7YUFDcEM7WUFDRDtnQkFDRSxLQUFLLEVBQUUsV0FBVztnQkFDbEIsTUFBTSxFQUFFLDJCQUEyQjthQUNwQztZQUNEO2dCQUNFLEtBQUssRUFBRSxXQUFXO2dCQUNsQixNQUFNLEVBQUUsMkJBQTJCO2FBQ3BDO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLFdBQVc7Z0JBQ2xCLE1BQU0sRUFBRSwyQkFBMkI7YUFDcEM7U0FDRixDQUFDO0lBS0osQ0FBQzs7OztJQUhDLGNBQWM7UUFDWixPQUFPLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7O1lBeEJGLFVBQVU7Ozs7Ozs7SUFHVCx5Q0FpQkUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IG9mIGFzIG9ic2VydmFibGVPZiwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBDYW1lcmEsIFNlY3VyaXR5Q2FtZXJhc0RhdGEgfSBmcm9tICcuLi9kYXRhL3NlY3VyaXR5LWNhbWVyYXMnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU2VjdXJpdHlDYW1lcmFzU2VydmljZSBleHRlbmRzIFNlY3VyaXR5Q2FtZXJhc0RhdGEge1xyXG5cclxuICBwcml2YXRlIGNhbWVyYXM6IENhbWVyYVtdID0gW1xyXG4gICAge1xyXG4gICAgICB0aXRsZTogJ0NhbWVyYSAjMScsXHJcbiAgICAgIHNvdXJjZTogJ2Fzc2V0cy9pbWFnZXMvY2FtZXJhMS5qcGcnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6ICdDYW1lcmEgIzInLFxyXG4gICAgICBzb3VyY2U6ICdhc3NldHMvaW1hZ2VzL2NhbWVyYTIuanBnJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiAnQ2FtZXJhICMzJyxcclxuICAgICAgc291cmNlOiAnYXNzZXRzL2ltYWdlcy9jYW1lcmEzLmpwZycsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogJ0NhbWVyYSAjNCcsXHJcbiAgICAgIHNvdXJjZTogJ2Fzc2V0cy9pbWFnZXMvY2FtZXJhNC5qcGcnLFxyXG4gICAgfSxcclxuICBdO1xyXG5cclxuICBnZXRDYW1lcmFzRGF0YSgpOiBPYnNlcnZhYmxlPENhbWVyYVtdPiB7XHJcbiAgICByZXR1cm4gb2JzZXJ2YWJsZU9mKHRoaXMuY2FtZXJhcyk7XHJcbiAgfVxyXG59XHJcbiJdfQ==