(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@abp/ng.core'), require('@abp/ng.theme.shared'), require('@angular/core'), require('@ngxs/store'), require('rxjs'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('@abp/ng.permission-management', ['exports', '@abp/ng.core', '@abp/ng.theme.shared', '@angular/core', '@ngxs/store', 'rxjs', 'rxjs/operators'], factory) :
    (global = global || self, factory((global.abp = global.abp || {}, global.abp.ng = global.abp.ng || {}, global.abp.ng['permission-management'] = {}), global.i1, global.ng_theme_shared, global.ng.core, global.i1$1, global.rxjs, global.rxjs.operators));
}(this, (function (exports, i1, ng_theme_shared, i0, i1$1, rxjs, operators) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    function __createBinding(o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    }
    function __exportStar(m, exports) {
        for (var p in m)
            if (p !== "default" && !exports.hasOwnProperty(p))
                exports[p] = m[p];
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    ;
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (Object.hasOwnProperty.call(mod, k))
                    result[k] = mod[k];
        result.default = mod;
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }
    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    var GetPermissions = /** @class */ (function () {
        function GetPermissions(payload) {
            this.payload = payload;
        }
        return GetPermissions;
    }());
    GetPermissions.type = '[PermissionManagement] Get Permissions';
    var UpdatePermissions = /** @class */ (function () {
        function UpdatePermissions(payload) {
            this.payload = payload;
        }
        return UpdatePermissions;
    }());
    UpdatePermissions.type = '[PermissionManagement] Update Permissions';

    exports.ɵc = /** @class */ (function () {
        function PermissionManagementService(rest) {
            this.rest = rest;
            this.apiName = 'AbpPermissionManagement';
        }
        PermissionManagementService.prototype.getPermissions = function (params) {
            var request = {
                method: 'GET',
                url: '/api/permission-management/permissions',
                params: params,
            };
            return this.rest.request(request, { apiName: this.apiName });
        };
        PermissionManagementService.prototype.updatePermissions = function (_a) {
            var permissions = _a.permissions, providerKey = _a.providerKey, providerName = _a.providerName;
            var request = {
                method: 'PUT',
                url: '/api/permission-management/permissions',
                body: { permissions: permissions },
                params: { providerKey: providerKey, providerName: providerName },
            };
            return this.rest.request(request, {
                apiName: this.apiName,
            });
        };
        return PermissionManagementService;
    }());
    exports.ɵc.ɵprov = i0.ɵɵdefineInjectable({ factory: function PermissionManagementService_Factory() { return new exports.ɵc(i0.ɵɵinject(i1.RestService)); }, token: exports.ɵc, providedIn: "root" });
    exports.ɵc = __decorate([
        i0.Injectable({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [i1.RestService])
    ], exports.ɵc);

    exports.ɵb = /** @class */ (function () {
        function PermissionManagementState(permissionManagementService) {
            this.permissionManagementService = permissionManagementService;
        }
        PermissionManagementState.getPermissionGroups = function (_a) {
            var permissionRes = _a.permissionRes;
            return permissionRes.groups || [];
        };
        PermissionManagementState.getEntityDisplayName = function (_a) {
            var permissionRes = _a.permissionRes;
            return permissionRes.entityDisplayName;
        };
        PermissionManagementState.prototype.permissionManagementGet = function (_a, _b) {
            var patchState = _a.patchState;
            var payload = _b.payload;
            return this.permissionManagementService.getPermissions(payload).pipe(operators.tap(function (permissionResponse) { return patchState({
                permissionRes: permissionResponse,
            }); }));
        };
        PermissionManagementState.prototype.permissionManagementUpdate = function (_, _a) {
            var payload = _a.payload;
            return this.permissionManagementService.updatePermissions(payload);
        };
        return PermissionManagementState;
    }());
    __decorate([
        i1$1.Action(GetPermissions),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, GetPermissions]),
        __metadata("design:returntype", void 0)
    ], exports.ɵb.prototype, "permissionManagementGet", null);
    __decorate([
        i1$1.Action(UpdatePermissions),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, UpdatePermissions]),
        __metadata("design:returntype", void 0)
    ], exports.ɵb.prototype, "permissionManagementUpdate", null);
    __decorate([
        i1$1.Selector(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], exports.ɵb, "getPermissionGroups", null);
    __decorate([
        i1$1.Selector(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", String)
    ], exports.ɵb, "getEntityDisplayName", null);
    exports.ɵb = __decorate([
        i1$1.State({
            name: 'PermissionManagementState',
            defaults: { permissionRes: {} },
        }),
        i0.Injectable(),
        __metadata("design:paramtypes", [exports.ɵc])
    ], exports.ɵb);

    exports.ɵa = /** @class */ (function () {
        function PermissionManagementComponent(store, renderer) {
            this.store = store;
            this.renderer = renderer;
            this.hideBadges = false;
            this._visible = false;
            this.visibleChange = new i0.EventEmitter();
            this.permissions = [];
            this.selectThisTab = false;
            this.selectAllTab = false;
            this.modalBusy = false;
            this.trackByFn = function (_, item) { return item.name; };
        }
        Object.defineProperty(PermissionManagementComponent.prototype, "visible", {
            get: function () {
                return this._visible;
            },
            set: function (value) {
                var _this = this;
                if (value === this._visible)
                    return;
                if (value) {
                    this.openModal().subscribe(function () {
                        _this._visible = true;
                        _this.visibleChange.emit(true);
                    });
                }
                else {
                    this.selectedGroup = null;
                    this._visible = false;
                    this.visibleChange.emit(false);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PermissionManagementComponent.prototype, "selectedGroupPermissions$", {
            get: function () {
                var _this = this;
                return this.groups$.pipe(operators.map(function (groups) { return _this.selectedGroup
                    ? groups.find(function (group) { return group.name === _this.selectedGroup.name; }).permissions
                    : []; }), operators.map(function (permissions) { return permissions.map(function (permission) { return (Object.assign(Object.assign({}, permission), { margin: findMargin(permissions, permission), isGranted: _this.permissions.find(function (per) { return per.name === permission.name; }).isGranted })); }); }));
            },
            enumerable: true,
            configurable: true
        });
        PermissionManagementComponent.prototype.getChecked = function (name) {
            return (this.permissions.find(function (per) { return per.name === name; }) || { isGranted: false }).isGranted;
        };
        PermissionManagementComponent.prototype.isGrantedByOtherProviderName = function (grantedProviders) {
            var _this = this;
            if (grantedProviders.length) {
                return grantedProviders.findIndex(function (p) { return p.providerName !== _this.providerName; }) > -1;
            }
            return false;
        };
        PermissionManagementComponent.prototype.onClickCheckbox = function (clickedPermission, value) {
            var _this = this;
            if (clickedPermission.isGranted &&
                this.isGrantedByOtherProviderName(clickedPermission.grantedProviders))
                return;
            setTimeout(function () {
                _this.permissions = _this.permissions.map(function (per) {
                    if (clickedPermission.name === per.name) {
                        return Object.assign(Object.assign({}, per), { isGranted: !per.isGranted });
                    }
                    else if (clickedPermission.name === per.parentName && clickedPermission.isGranted) {
                        return Object.assign(Object.assign({}, per), { isGranted: false });
                    }
                    else if (clickedPermission.parentName === per.name && !clickedPermission.isGranted) {
                        return Object.assign(Object.assign({}, per), { isGranted: true });
                    }
                    return per;
                });
                _this.setTabCheckboxState();
                _this.setGrantCheckboxState();
            }, 0);
        };
        PermissionManagementComponent.prototype.setTabCheckboxState = function () {
            var _this = this;
            this.selectedGroupPermissions$.pipe(operators.take(1)).subscribe(function (permissions) {
                var selectedPermissions = permissions.filter(function (per) { return per.isGranted; });
                var element = document.querySelector('#select-all-in-this-tabs');
                if (selectedPermissions.length === permissions.length) {
                    element.indeterminate = false;
                    _this.selectThisTab = true;
                }
                else if (selectedPermissions.length === 0) {
                    element.indeterminate = false;
                    _this.selectThisTab = false;
                }
                else {
                    element.indeterminate = true;
                }
            });
        };
        PermissionManagementComponent.prototype.setGrantCheckboxState = function () {
            var selectedAllPermissions = this.permissions.filter(function (per) { return per.isGranted; });
            var checkboxElement = document.querySelector('#select-all-in-all-tabs');
            if (selectedAllPermissions.length === this.permissions.length) {
                checkboxElement.indeterminate = false;
                this.selectAllTab = true;
            }
            else if (selectedAllPermissions.length === 0) {
                checkboxElement.indeterminate = false;
                this.selectAllTab = false;
            }
            else {
                checkboxElement.indeterminate = true;
            }
        };
        PermissionManagementComponent.prototype.onClickSelectThisTab = function () {
            var _this = this;
            this.selectedGroupPermissions$.pipe(operators.take(1)).subscribe(function (permissions) {
                permissions.forEach(function (permission) {
                    if (permission.isGranted && _this.isGrantedByOtherProviderName(permission.grantedProviders))
                        return;
                    var index = _this.permissions.findIndex(function (per) { return per.name === permission.name; });
                    _this.permissions = __spread(_this.permissions.slice(0, index), [
                        Object.assign(Object.assign({}, _this.permissions[index]), { isGranted: !_this.selectThisTab })
                    ], _this.permissions.slice(index + 1));
                });
            });
            this.setGrantCheckboxState();
        };
        PermissionManagementComponent.prototype.onClickSelectAll = function () {
            var _this = this;
            this.permissions = this.permissions.map(function (permission) { return (Object.assign(Object.assign({}, permission), { isGranted: _this.isGrantedByOtherProviderName(permission.grantedProviders) || !_this.selectAllTab })); });
            this.selectThisTab = !this.selectAllTab;
        };
        PermissionManagementComponent.prototype.onChangeGroup = function (group) {
            this.selectedGroup = group;
            this.setTabCheckboxState();
        };
        PermissionManagementComponent.prototype.submit = function () {
            var _this = this;
            this.modalBusy = true;
            var unchangedPermissions = getPermissions(this.store.selectSnapshot(exports.ɵb.getPermissionGroups));
            var changedPermissions = this.permissions
                .filter(function (per) { return unchangedPermissions.find(function (unchanged) { return unchanged.name === per.name; }).isGranted ===
                per.isGranted
                ? false
                : true; })
                .map(function (_a) {
                var name = _a.name, isGranted = _a.isGranted;
                return ({ name: name, isGranted: isGranted });
            });
            if (changedPermissions.length) {
                this.store
                    .dispatch(new UpdatePermissions({
                    providerKey: this.providerKey,
                    providerName: this.providerName,
                    permissions: changedPermissions,
                }))
                    .pipe(operators.finalize(function () { return (_this.modalBusy = false); }))
                    .subscribe(function () {
                    _this.visible = false;
                });
            }
            else {
                this.modalBusy = false;
                this.visible = false;
            }
        };
        PermissionManagementComponent.prototype.openModal = function () {
            var _this = this;
            if (!this.providerKey || !this.providerName) {
                throw new Error('Provider Key and Provider Name are required.');
            }
            return this.store
                .dispatch(new GetPermissions({
                providerKey: this.providerKey,
                providerName: this.providerName,
            }))
                .pipe(operators.pluck('PermissionManagementState', 'permissionRes'), operators.tap(function (permissionRes) {
                _this.selectedGroup = permissionRes.groups[0];
                _this.permissions = getPermissions(permissionRes.groups);
            }));
        };
        PermissionManagementComponent.prototype.initModal = function () {
            this.setTabCheckboxState();
            this.setGrantCheckboxState();
        };
        PermissionManagementComponent.prototype.getAssignedCount = function (groupName) {
            return this.permissions.reduce(function (acc, val) { return (val.name.split('.')[0] === groupName && val.isGranted ? acc + 1 : acc); }, 0);
        };
        return PermissionManagementComponent;
    }());
    __decorate([
        i0.Input(),
        __metadata("design:type", String)
    ], exports.ɵa.prototype, "providerName", void 0);
    __decorate([
        i0.Input(),
        __metadata("design:type", String)
    ], exports.ɵa.prototype, "providerKey", void 0);
    __decorate([
        i0.Input(),
        __metadata("design:type", Object)
    ], exports.ɵa.prototype, "hideBadges", void 0);
    __decorate([
        i0.Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], exports.ɵa.prototype, "visible", null);
    __decorate([
        i0.Output(),
        __metadata("design:type", Object)
    ], exports.ɵa.prototype, "visibleChange", void 0);
    __decorate([
        i1$1.Select(exports.ɵb.getPermissionGroups),
        __metadata("design:type", rxjs.Observable)
    ], exports.ɵa.prototype, "groups$", void 0);
    __decorate([
        i1$1.Select(exports.ɵb.getEntityDisplayName),
        __metadata("design:type", rxjs.Observable)
    ], exports.ɵa.prototype, "entityName$", void 0);
    exports.ɵa = __decorate([
        i0.Component({
            selector: 'abp-permission-management',
            template: "<abp-modal [(visible)]=\"visible\" (init)=\"initModal()\" [busy]=\"modalBusy\">\r\n  <ng-container *ngIf=\"{ entityName: entityName$ | async } as data\">\r\n    <ng-template #abpHeader>\r\n      <h4>\r\n        {{ 'AbpPermissionManagement::Permissions' | abpLocalization }} - {{ data.entityName }}\r\n      </h4>\r\n    </ng-template>\r\n    <ng-template #abpBody>\r\n      <div class=\"custom-checkbox custom-control mb-2\">\r\n        <input\r\n          type=\"checkbox\"\r\n          id=\"select-all-in-all-tabs\"\r\n          name=\"select-all-in-all-tabs\"\r\n          class=\"custom-control-input\"\r\n          [(ngModel)]=\"selectAllTab\"\r\n          (click)=\"onClickSelectAll()\"\r\n        />\r\n        <label class=\"custom-control-label\" for=\"select-all-in-all-tabs\">{{\r\n          'AbpPermissionManagement::SelectAllInAllTabs' | abpLocalization\r\n        }}</label>\r\n      </div>\r\n\r\n      <hr class=\"mt-2 mb-2\" />\r\n      <div class=\"row\">\r\n        <div class=\"overflow-scroll col-md-4\">\r\n          <ul class=\"nav nav-pills flex-column\">\r\n            <li *ngFor=\"let group of groups$ | async; trackBy: trackByFn\" class=\"nav-item\">\r\n              <a\r\n                *ngIf=\"{ assignedCount: getAssignedCount(group.name) } as data\"\r\n                class=\"nav-link pointer\"\r\n                [class.active]=\"selectedGroup?.name === group?.name\"\r\n                (click)=\"onChangeGroup(group)\"\r\n              >\r\n                <div [class.font-weight-bold]=\"data.assignedCount\">\r\n                  {{ group?.displayName }}\r\n                  <span>({{ data.assignedCount }})</span>\r\n                </div>\r\n              </a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n        <div class=\"col-md-8 overflow-scroll\">\r\n          <h4>{{ selectedGroup?.displayName }}</h4>\r\n          <hr class=\"mt-2 mb-3\" />\r\n          <div class=\"pl-1 pt-1\">\r\n            <div class=\"custom-checkbox custom-control mb-2\">\r\n              <input\r\n                type=\"checkbox\"\r\n                id=\"select-all-in-this-tabs\"\r\n                name=\"select-all-in-this-tabs\"\r\n                class=\"custom-control-input\"\r\n                [(ngModel)]=\"selectThisTab\"\r\n                (click)=\"onClickSelectThisTab()\"\r\n              />\r\n              <label class=\"custom-control-label\" for=\"select-all-in-this-tabs\">{{\r\n                'AbpPermissionManagement::SelectAllInThisTab' | abpLocalization\r\n              }}</label>\r\n            </div>\r\n            <hr class=\"mb-3\" />\r\n            <div\r\n              *ngFor=\"\r\n                let permission of selectedGroupPermissions$ | async;\r\n                let i = index;\r\n                trackBy: trackByFn\r\n              \"\r\n              [style.margin-left]=\"permission.margin + 'px'\"\r\n              class=\"custom-checkbox custom-control mb-2\"\r\n            >\r\n              <input\r\n                #permissionCheckbox\r\n                type=\"checkbox\"\r\n                [checked]=\"getChecked(permission.name)\"\r\n                [value]=\"getChecked(permission.name)\"\r\n                [attr.id]=\"permission.name\"\r\n                class=\"custom-control-input\"\r\n                [disabled]=\"isGrantedByOtherProviderName(permission.grantedProviders)\"\r\n              />\r\n              <label\r\n                class=\"custom-control-label\"\r\n                [attr.for]=\"permission.name\"\r\n                (click)=\"onClickCheckbox(permission, permissionCheckbox.value)\"\r\n                >{{ permission.displayName }}\r\n                <ng-container *ngIf=\"!hideBadges\">\r\n                  <span\r\n                    *ngFor=\"let provider of permission.grantedProviders\"\r\n                    class=\"badge badge-light\"\r\n                    >{{ provider.providerName }}: {{ provider.providerKey }}</span\r\n                  >\r\n                </ng-container>\r\n              </label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </ng-template>\r\n    <ng-template #abpFooter>\r\n      <button type=\"button\" class=\"btn btn-secondary\" #abpClose>\r\n        {{ 'AbpIdentity::Cancel' | abpLocalization }}\r\n      </button>\r\n      <abp-button iconClass=\"fa fa-check\" (click)=\"submit()\">{{\r\n        'AbpIdentity::Save' | abpLocalization\r\n      }}</abp-button>\r\n    </ng-template>\r\n  </ng-container>\r\n</abp-modal>\r\n",
            exportAs: 'abpPermissionManagement',
            styles: ["\n      .overflow-scroll {\n        max-height: 70vh;\n        overflow-y: scroll;\n      }\n    "]
        }),
        __metadata("design:paramtypes", [i1$1.Store, i0.Renderer2])
    ], exports.ɵa);
    function findMargin(permissions, permission) {
        var parentPermission = permissions.find(function (per) { return per.name === permission.parentName; });
        if (parentPermission && parentPermission.parentName) {
            var margin = 20;
            return (margin += findMargin(permissions, parentPermission));
        }
        return parentPermission ? 20 : 0;
    }
    function getPermissions(groups) {
        return groups.reduce(function (acc, val) { return __spread(acc, val.permissions); }, []);
    }

    exports.PermissionManagementModule = /** @class */ (function () {
        function PermissionManagementModule() {
        }
        return PermissionManagementModule;
    }());
    exports.PermissionManagementModule = __decorate([
        i0.NgModule({
            declarations: [exports.ɵa],
            imports: [i1.CoreModule, ng_theme_shared.ThemeSharedModule, i1$1.NgxsModule.forFeature([exports.ɵb])],
            exports: [exports.ɵa],
        })
    ], exports.PermissionManagementModule);

    exports.PermissionManagementStateService = /** @class */ (function () {
        function PermissionManagementStateService(store) {
            this.store = store;
        }
        PermissionManagementStateService.prototype.getPermissionGroups = function () {
            return this.store.selectSnapshot(exports.ɵb.getPermissionGroups);
        };
        PermissionManagementStateService.prototype.getEntityDisplayName = function () {
            return this.store.selectSnapshot(exports.ɵb.getEntityDisplayName);
        };
        PermissionManagementStateService.prototype.dispatchGetPermissions = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return this.store.dispatch(new (GetPermissions.bind.apply(GetPermissions, __spread([void 0], args)))());
        };
        PermissionManagementStateService.prototype.dispatchUpdatePermissions = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return this.store.dispatch(new (UpdatePermissions.bind.apply(UpdatePermissions, __spread([void 0], args)))());
        };
        return PermissionManagementStateService;
    }());
    exports.PermissionManagementStateService.ɵprov = i0.ɵɵdefineInjectable({ factory: function PermissionManagementStateService_Factory() { return new exports.PermissionManagementStateService(i0.ɵɵinject(i1$1.Store)); }, token: exports.PermissionManagementStateService, providedIn: "root" });
    exports.PermissionManagementStateService = __decorate([
        i0.Injectable({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [i1$1.Store])
    ], exports.PermissionManagementStateService);

    /*
     * Public API Surface of permission-management
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.GetPermissions = GetPermissions;
    exports.PermissionManagementComponent = exports.ɵa;
    exports.PermissionManagementService = exports.ɵc;
    exports.PermissionManagementState = exports.ɵb;
    exports.UpdatePermissions = UpdatePermissions;
    exports.ɵd = GetPermissions;
    exports.ɵe = UpdatePermissions;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=abp-ng.permission-management.umd.js.map