import { __decorate, __metadata } from "tslib";
import { HttpErrorResponse, HttpResponseBase } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { DA_SERVICE_TOKEN } from '@delon/auth';
import { _HttpClient } from '@delon/theme';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { of, throwError } from 'rxjs';
import { catchError, mergeMap } from 'rxjs/operators';
const CODEMESSAGE = {
    200: '服务器成功返回请求的数据。',
    201: '新建或修改数据成功。',
    202: '一个请求已经进入后台排队（异步任务）。',
    204: '删除数据成功。',
    400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
    401: '用户没有权限（令牌、用户名、密码错误）。',
    403: '用户得到授权，但是访问是被禁止的。',
    404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
    406: '请求的格式不可得。',
    410: '请求的资源被永久删除，且不会再得到的。',
    422: '当创建一个对象时，发生一个验证错误。',
    500: '服务器发生错误，请检查服务器。',
    502: '网关错误。',
    503: '服务不可用，服务器暂时过载或维护。',
    504: '网关超时。',
};
/**
 * 默认HTTP拦截器，其注册细节见 `app.module.ts`
 */
let DefaultInterceptor = class DefaultInterceptor {
    constructor(injector) {
        this.injector = injector;
    }
    get notification() {
        return this.injector.get(NzNotificationService);
    }
    goTo(url) {
        setTimeout(() => this.injector.get(Router).navigateByUrl(url));
    }
    checkStatus(ev) {
        if ((ev.status >= 200 && ev.status < 300) || ev.status === 401) {
            return;
        }
        const errortext = CODEMESSAGE[ev.status] || ev.statusText;
        this.notification.error(`请求错误 ${ev.status}: ${ev.url}`, errortext);
    }
    handleData(ev) {
        // 可能会因为 `throw` 导出无法执行 `_HttpClient` 的 `end()` 操作
        if (ev.status > 0) {
            this.injector.get(_HttpClient).end();
        }
        this.checkStatus(ev);
        // 业务处理：一些通用操作
        switch (ev.status) {
            case 200:
                // 业务层级错误处理，以下是假定restful有一套统一输出格式（指不管成功与否都有相应的数据格式）情况下进行处理
                // 例如响应内容：
                //  错误内容：{ status: 1, msg: '非法参数' }
                //  正确内容：{ status: 0, response: {  } }
                // 则以下代码片断可直接适用
                // if (event instanceof HttpResponse) {
                //     const body: any = event.body;
                //     if (body && body.status !== 0) {
                //         this.msg.error(body.msg);
                //         // 继续抛出错误中断后续所有 Pipe、subscribe 操作，因此：
                //         // this.http.get('/').subscribe() 并不会触发
                //         return throwError({});
                //     } else {
                //         // 重新修改 `body` 内容为 `response` 内容，对于绝大多数场景已经无须再关心业务状态码
                //         return of(new HttpResponse(Object.assign(event, { body: body.response })));
                //         // 或者依然保持完整的格式
                //         return of(event);
                //     }
                // }
                break;
            case 401:
                this.notification.error(`未登录或登录已过期，请重新登录。`, ``);
                // 清空 token 信息
                this.injector.get(DA_SERVICE_TOKEN).clear();
                this.goTo('/passport/login');
                break;
            case 403:
            case 404:
            case 500:
                this.goTo(`/exception/${ev.status}`);
                break;
            default:
                if (ev instanceof HttpErrorResponse) {
                    console.warn('未可知错误，大部分是由于后端不支持CORS或无效配置引起', ev);
                }
                break;
        }
        if (ev instanceof HttpErrorResponse) {
            return throwError(ev);
        }
        else {
            return of(ev);
        }
    }
    intercept(req, next) {
        // 统一加上服务端前缀
        let url = req.url;
        if (!url.startsWith('https://') && !url.startsWith('http://')) {
            url = `./` + url;
        }
        const newReq = req.clone({ url });
        return next.handle(newReq).pipe(mergeMap((event) => {
            // 允许统一对请求错误处理
            if (event instanceof HttpResponseBase) {
                return this.handleData(event);
            }
            // 若一切都正常，则后续操作
            return of(event);
        }), catchError((err) => this.handleData(err)));
    }
};
DefaultInterceptor = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Injector])
], DefaultInterceptor);
export { DefaultInterceptor };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC5pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3RoZW1lcy9uZy1hbGFpbi9jb3JlL3NyYy9uZXQvZGVmYXVsdC5pbnRlcmNlcHRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUF3RCxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2pJLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQWlCLE1BQU0sYUFBYSxDQUFDO0FBQzlELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDM0MsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDbkUsT0FBTyxFQUFjLEVBQUUsRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV0RCxNQUFNLFdBQVcsR0FBRztJQUNsQixHQUFHLEVBQUUsZUFBZTtJQUNwQixHQUFHLEVBQUUsWUFBWTtJQUNqQixHQUFHLEVBQUUscUJBQXFCO0lBQzFCLEdBQUcsRUFBRSxTQUFTO0lBQ2QsR0FBRyxFQUFFLDZCQUE2QjtJQUNsQyxHQUFHLEVBQUUsc0JBQXNCO0lBQzNCLEdBQUcsRUFBRSxtQkFBbUI7SUFDeEIsR0FBRyxFQUFFLDRCQUE0QjtJQUNqQyxHQUFHLEVBQUUsV0FBVztJQUNoQixHQUFHLEVBQUUscUJBQXFCO0lBQzFCLEdBQUcsRUFBRSxvQkFBb0I7SUFDekIsR0FBRyxFQUFFLGlCQUFpQjtJQUN0QixHQUFHLEVBQUUsT0FBTztJQUNaLEdBQUcsRUFBRSxtQkFBbUI7SUFDeEIsR0FBRyxFQUFF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Q2hELFlBQVk7UUFDWixJQUFJLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUM3RCxHQUFHLEdBQUcsSUFBSSxHQUFHLEdBQUcsQ0FBQztTQUNsQjtRQUVELE1BQU0sTUFBTSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQ2xDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQzdCLFFBQVEsQ0FBQyxDQUFDLEtBQVUsRUFBRSxFQUFFO1lBQ3RCLGNBQWM7WUFDZCxJQUFJLEtBQUssWUFBWSxnQkFBZ0IsRUFBRTtnQkFDckMsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQy9CO1lBQ0QsZUFBZTtZQUNmLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25CLENBQUMsQ0FBQyxFQUNGLFVBQVUsQ0FBQyxDQUFDLEdBQXNCLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FDN0QsQ0FBQztJQUNKLENBQUM7Q0FDRixDQUFBO0FBN0ZZLGtCQUFrQjtJQUQ5QixVQUFVLEVBQUU7cUNBRW1CLFFBQVE7R0FEM0Isa0JBQWtCLENBNkY5QjtTQTdGWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwRXJyb3JSZXNwb25zZSwgSHR0cEV2ZW50LCBIdHRwSGFuZGxlciwgSHR0cEludGVyY2VwdG9yLCBIdHRwUmVxdWVzdCwgSHR0cFJlc3BvbnNlQmFzZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgREFfU0VSVklDRV9UT0tFTiwgSVRva2VuU2VydmljZSB9IGZyb20gJ0BkZWxvbi9hdXRoJztcclxuaW1wb3J0IHsgX0h0dHBDbGllbnQgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xyXG5pbXBvcnQgeyBOek5vdGlmaWNhdGlvblNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL25vdGlmaWNhdGlvbic7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mLCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGNhdGNoRXJyb3IsIG1lcmdlTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuY29uc3QgQ09ERU1FU1NBR0UgPSB7XHJcbiAgMjAwOiAn5pyN5Yqh5Zmo5oiQ5Yqf6L+U5Zue6K+35rGC55qE5pWw5o2u44CCJyxcclxuICAyMDE6ICfmlrDlu7rmiJbkv67mlLnmlbDmja7miJDlip/jgIInLFxyXG4gIDIwMjogJ+S4gOS4quivt+axguW3sue7j+i/m+WFpeWQjuWPsOaOkumYn++8iOW8guatpeS7u+WKoe+8ieOAgicsXHJcbiAgMjA0OiAn5Yig6Zmk5pWw5o2u5oiQ5Yqf44CCJyxcclxuICA0MDA6ICflj5Hlh7rnmoTor7fmsYLmnInplJnor6/vvIzmnI3liqHlmajmsqHmnInov5vooYzmlrDlu7rmiJbkv67mlLnmlbDmja7nmoTmk43kvZzjgIInLFxyXG4gIDQwMTogJ+eUqOaIt+ayoeacieadg+mZkO+8iOS7pOeJjOOAgeeUqOaIt+WQjeOAgeWvhueggemUmeivr++8ieOAgicsXHJcbiAgNDAzOiAn55So5oi35b6X5Yiw5o6I5p2D77yM5L2G5piv6K6/6Zeu5piv6KKr56aB5q2i55qE44CCJyxcclxuICA0MDQ6ICflj5Hlh7rnmoTor7fmsYLpkojlr7nnmoTmmK/kuI3lrZjlnKjnmoTorrDlvZXvvIzmnI3liqHlmajmsqHmnInov5vooYzmk43kvZzjgIInLFxyXG4gIDQwNjogJ+ivt+axgueahOagvOW8j+S4jeWPr+W+l+OAgicsXHJcbiAgNDEwOiAn6K+35rGC55qE6LWE5rqQ6KKr5rC45LmF5Yig6Zmk77yM5LiU5LiN5Lya5YaN5b6X5Yiw55qE44CCJyxcclxuICA0MjI6ICflvZPliJvlu7rkuIDkuKrlr7nosaHml7bvvIzlj5HnlJ/kuIDkuKrpqozor4HplJnor6/jgIInLFxyXG4gIDUwMDogJ+acjeWKoeWZqOWPkeeUn+mUmeivr++8jOivt+ajgOafpeacjeWKoeWZqOOAgicsXHJcbiAgNTAyOiAn572R5YWz6ZSZ6K+v44CCJyxcclxuICA1MDM6ICfmnI3liqHkuI3lj6/nlKjvvIzmnI3liqHlmajmmoLml7bov4fovb3miJbnu7TmiqTjgIInLFxyXG4gIDUwNDogJ+e9keWFs+i2heaXtuOAgicsXHJcbn07XHJcblxyXG4vKipcclxuICog6buY6K6kSFRUUOaLpuaIquWZqO+8jOWFtuazqOWGjOe7huiKguingSBgYXBwLm1vZHVsZS50c2BcclxuICovXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIERlZmF1bHRJbnRlcmNlcHRvciBpbXBsZW1lbnRzIEh0dHBJbnRlcmNlcHRvciB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IpIHt9XHJcblxyXG4gIHByaXZhdGUgZ2V0IG5vdGlmaWNhdGlvbigpOiBOek5vdGlmaWNhdGlvblNlcnZpY2Uge1xyXG4gICAgcmV0dXJuIHRoaXMuaW5qZWN0b3IuZ2V0KE56Tm90aWZpY2F0aW9uU2VydmljZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdvVG8odXJsOiBzdHJpbmcpIHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5pbmplY3Rvci5nZXQoUm91dGVyKS5uYXZpZ2F0ZUJ5VXJsKHVybCkpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjaGVja1N0YXR1cyhldjogSHR0cFJlc3BvbnNlQmFzZSkge1xyXG4gICAgaWYgKChldi5zdGF0dXMgPj0gMjAwICYmIGV2LnN0YXR1cyA8IDMwMCkgfHwgZXYuc3RhdHVzID09PSA0MDEpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGVycm9ydGV4dCA9IENPREVNRVNTQUdFW2V2LnN0YXR1c10gfHwgZXYuc3RhdHVzVGV4dDtcclxuICAgIHRoaXMubm90aWZpY2F0aW9uLmVycm9yKGDor7fmsYLplJnor68gJHtldi5zdGF0dXN9OiAke2V2LnVybH1gLCBlcnJvcnRleHQpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBoYW5kbGVEYXRhKGV2OiBIdHRwUmVzcG9uc2VCYXNlKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIC8vIOWPr+iDveS8muWboOS4uiBgdGhyb3dgIOWvvOWHuuaXoOazleaJp+ihjCBgX0h0dHBDbGllbnRgIOeahCBgZW5kKClgIOaTjeS9nFxyXG4gICAgaWYgKGV2LnN0YXR1cyA+IDApIHtcclxuICAgICAgdGhpcy5pbmplY3Rvci5nZXQoX0h0dHBDbGllbnQpLmVuZCgpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jaGVja1N0YXR1cyhldik7XHJcbiAgICAvLyDkuJrliqHlpITnkIbvvJrkuIDkupvpgJrnlKjmk43kvZxcclxuICAgIHN3aXRjaCAoZXYuc3RhdHVzKSB7XHJcbiAgICAgIGNhc2UgMjAwOlxyXG4gICAgICAgIC8vIOS4muWKoeWxgue6p+mUmeivr+WkhOeQhu+8jOS7peS4i+aYr+WBh+WumnJlc3RmdWzmnInkuIDlpZfnu5/kuIDovpPlh7rmoLzlvI/vvIjmjIfkuI3nrqHmiJDlip/kuI7lkKbpg73mnInnm7jlupTnmoTmlbDmja7moLzlvI/vvInmg4XlhrXkuIvov5vooYzlpITnkIZcclxuICAgICAgICAvLyDkvovlpoLlk43lupTlhoXlrrnvvJpcclxuICAgICAgICAvLyAg6ZSZ6K+v5YaF5a6577yaeyBzdGF0dXM6IDEsIG1zZzogJ+mdnuazleWPguaVsCcgfVxyXG4gICAgICAgIC8vICDmraPnoa7lhoXlrrnvvJp7IHN0YXR1czogMCwgcmVzcG9uc2U6IHsgIH0gfVxyXG4gICAgICAgIC8vIOWImeS7peS4i+S7o+eggeeJh+aWreWPr+ebtOaOpemAgueUqFxyXG4gICAgICAgIC8vIGlmIChldmVudCBpbnN0YW5jZW9mIEh0dHBSZXNwb25zZSkge1xyXG4gICAgICAgIC8vICAgICBjb25zdCBib2R5OiBhbnkgPSBldmVudC5ib2R5O1xyXG4gICAgICAgIC8vICAgICBpZiAoYm9keSAmJiBib2R5LnN0YXR1cyAhPT0gMCkge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5tc2cuZXJyb3IoYm9keS5tc2cpO1xyXG4gICAgICAgIC8vICAgICAgICAgLy8g57un57ut5oqb5Ye66ZSZ6K+v5Lit5pat5ZCO57ut5omA5pyJIFBpcGXjgIFzdWJzY3JpYmUg5pON5L2c77yM5Zug5q2k77yaXHJcbiAgICAgICAgLy8gICAgICAgICAvLyB0aGlzLmh0dHAuZ2V0KCcvJykuc3Vic2NyaWJlKCkg5bm25LiN5Lya6Kem5Y+RXHJcbiAgICAgICAgLy8gICAgICAgICByZXR1cm4gdGhyb3dFcnJvcih7fSk7XHJcbiAgICAgICAgLy8gICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgICAgICAvLyDph43mlrDkv67mlLkgYGJvZHlgIOWGheWuueS4uiBgcmVzcG9uc2VgIOWGheWuue+8jOWvueS6jue7neWkp+WkmuaVsOWcuuaZr+W3sue7j+aXoOmhu+WGjeWFs+W/g+S4muWKoeeKtuaAgeeggVxyXG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIG9mKG5ldyBIdHRwUmVzcG9uc2UoT2JqZWN0LmFzc2lnbihldmVudCwgeyBib2R5OiBib2R5LnJlc3BvbnNlIH0pKSk7XHJcbiAgICAgICAgLy8gICAgICAgICAvLyDmiJbogIXkvp3nhLbkv53mjIHlrozmlbTnmoTmoLzlvI9cclxuICAgICAgICAvLyAgICAgICAgIHJldHVybiBvZihldmVudCk7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgNDAxOlxyXG4gICAgICAgIHRoaXMubm90aWZpY2F0aW9uLmVycm9yKGDmnKrnmbvlvZXmiJbnmbvlvZXlt7Lov4fmnJ/vvIzor7fph43mlrDnmbvlvZXjgIJgLCBgYCk7XHJcbiAgICAgICAgLy8g5riF56m6IHRva2VuIOS/oeaBr1xyXG4gICAgICAgICh0aGlzLmluamVjdG9yLmdldChEQV9TRVJWSUNFX1RPS0VOKSBhcyBJVG9rZW5TZXJ2aWNlKS5jbGVhcigpO1xyXG4gICAgICAgIHRoaXMuZ29UbygnL3Bhc3Nwb3J0L2xvZ2luJyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgNDAzOlxyXG4gICAgICBjYXNlIDQwNDpcclxuICAgICAgY2FzZSA1MDA6XHJcbiAgICAgICAgdGhpcy5nb1RvKGAvZXhjZXB0aW9uLyR7ZXYuc3RhdHVzfWApO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGlmIChldiBpbnN0YW5jZW9mIEh0dHBFcnJvclJlc3BvbnNlKSB7XHJcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ+acquWPr+efpemUmeivr++8jOWkp+mDqOWIhuaYr+eUseS6juWQjuerr+S4jeaUr+aMgUNPUlPmiJbml6DmlYjphY3nva7lvJXotbcnLCBldik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgaWYgKGV2IGluc3RhbmNlb2YgSHR0cEVycm9yUmVzcG9uc2UpIHtcclxuICAgICAgcmV0dXJuIHRocm93RXJyb3IoZXYpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIG9mKGV2KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGludGVyY2VwdChyZXE6IEh0dHBSZXF1ZXN0PGFueT4sIG5leHQ6IEh0dHBIYW5kbGVyKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj4ge1xyXG4gICAgLy8g57uf5LiA5Yqg5LiK5pyN5Yqh56uv5YmN57yAXHJcbiAgICBsZXQgdXJsID0gcmVxLnVybDtcclxuICAgIGlmICghdXJsLnN0YXJ0c1dpdGgoJ2h0dHBzOi8vJykgJiYgIXVybC5zdGFydHNXaXRoKCdodHRwOi8vJykpIHtcclxuICAgICAgdXJsID0gYC4vYCArIHVybDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBuZXdSZXEgPSByZXEuY2xvbmUoeyB1cmwgfSk7XHJcbiAgICByZXR1cm4gbmV4dC5oYW5kbGUobmV3UmVxKS5waXBlKFxyXG4gICAgICBtZXJnZU1hcCgoZXZlbnQ6IGFueSkgPT4ge1xyXG4gICAgICAgIC8vIOWFgeiuuOe7n+S4gOWvueivt+axgumUmeivr+WkhOeQhlxyXG4gICAgICAgIGlmIChldmVudCBpbnN0YW5jZW9mIEh0dHBSZXNwb25zZUJhc2UpIHtcclxuICAgICAgICAgIHJldHVybiB0aGlzLmhhbmRsZURhdGEoZXZlbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDoi6XkuIDliIfpg73mraPluLjvvIzliJnlkI7nu63mk43kvZxcclxuICAgICAgICByZXR1cm4gb2YoZXZlbnQpO1xyXG4gICAgICB9KSxcclxuICAgICAgY2F0Y2hFcnJvcigoZXJyOiBIdHRwRXJyb3JSZXNwb25zZSkgPT4gdGhpcy5oYW5kbGVEYXRhKGVycikpLFxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl19