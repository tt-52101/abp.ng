(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[173], {
        /***/ "../../node_modules/@angular/common/locales/lv.js": 
        /*!**************************************************************************************************!*\
          !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/node_modules/@angular/common/locales/lv.js ***!
          \**************************************************************************************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__; /**
             * @license
             * Copyright Google Inc. All Rights Reserved.
             *
             * Use of this source code is governed by an MIT-style license that can be
             * found in the LICENSE file at https://angular.io/license
             */
            (function (factory) {
                if (true && typeof module.exports === "object") {
                    var v = factory(null, exports);
                    if (v !== undefined)
                        module.exports = v;
                }
                else if (true) {
                    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
                        __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
                            (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
                        __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
                }
            })(function (require, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: true });
                // THIS CODE IS GENERATED - DO NOT MODIFY
                // See angular/tools/gulp-tasks/cldr/extract.js
                var u = undefined;
                function plural(n) {
                    var v = n.toString().replace(/^[^.]*\.?/, '').length, f = parseInt(n.toString().replace(/^[^.]*\.?/, ''), 10) || 0;
                    if (n % 10 === 0 || n % 100 === Math.floor(n % 100) && n % 100 >= 11 && n % 100 <= 19 ||
                        v === 2 && f % 100 === Math.floor(f % 100) && f % 100 >= 11 && f % 100 <= 19)
                        return 0;
                    if (n % 10 === 1 && !(n % 100 === 11) || v === 2 && f % 10 === 1 && !(f % 100 === 11) ||
                        !(v === 2) && f % 10 === 1)
                        return 1;
                    return 5;
                }
                exports.default = [
                    'lv', [['priekšp.', 'pēcp.'], u, ['priekšpusdienā', 'pēcpusdienā']],
                    [['priekšp.', 'pēcpusd.'], u, ['priekšpusdiena', 'pēcpusdiena']],
                    [
                        ['S', 'P', 'O', 'T', 'C', 'P', 'S'],
                        ['svētd.', 'pirmd.', 'otrd.', 'trešd.', 'ceturtd.', 'piektd.', 'sestd.'],
                        ['svētdiena', 'pirmdiena', 'otrdiena', 'trešdiena', 'ceturtdiena', 'piektdiena', 'sestdiena'],
                        ['Sv', 'Pr', 'Ot', 'Tr', 'Ce', 'Pk', 'Se']
                    ],
                    [
                        ['S', 'P', 'O', 'T', 'C', 'P', 'S'],
                        ['Svētd.', 'Pirmd.', 'Otrd.', 'Trešd.', 'Ceturtd.', 'Piektd.', 'Sestd.'],
                        ['Svētdiena', 'Pirmdiena', 'Otrdiena', 'Trešdiena', 'Ceturtdiena', 'Piektdiena', 'Sestdiena'],
                        ['Sv', 'Pr', 'Ot', 'Tr', 'Ce', 'Pk', 'Se']
                    ],
                    [
                        ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
                        [
                            'janv.', 'febr.', 'marts', 'apr.', 'maijs', 'jūn.', 'jūl.', 'aug.', 'sept.', 'okt.', 'nov.',
                            'dec.'
                        ],
                        [
                            'janvāris', 'februāris', 'marts', 'aprīlis', 'maijs', 'jūnijs', 'jūlijs', 'augusts',
                            'septembris', 'oktobris', 'novembris', 'decembris'
                        ]
                    ],
                    u, [['p.m.ē.', 'm.ē.'], u, ['pirms mūsu ēras', 'mūsu ērā']], 1, [6, 0],
                    ['dd.MM.yy', 'y. \'gada\' d. MMM', 'y. \'gada\' d. MMMM', 'EEEE, y. \'gada\' d. MMMM'],
                    ['HH:mm', 'HH:mm:ss', 'HH:mm:ss z', 'HH:mm:ss zzzz'], ['{1} {0}', u, u, u],
                    [',', ' ', ';', '%', '+', '-', 'E', '×', '‰', '∞', 'NS', ':'],
                    ['#,##0.###', '#,##0%', '#,##0.00 ¤', '#E0'], '€', 'eiro',
                    { 'AUD': ['AU$', '$'], 'LVL': ['Ls'], 'THB': ['฿'], 'TWD': ['NT$'] }, plural
                ];
            });
            //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibHYuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21tb24vbG9jYWxlcy9sdi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7OztJQUVILHlDQUF5QztJQUN6QywrQ0FBK0M7SUFFL0MsSUFBTSxDQUFDLEdBQUcsU0FBUyxDQUFDO0lBRXBCLFNBQVMsTUFBTSxDQUFDLENBQVM7UUFDdkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUMsTUFBTSxFQUNoRCxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxFQUFFLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxFQUFFO1lBQ2pGLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLEVBQUUsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLEVBQUU7WUFDOUUsT0FBTyxDQUFDLENBQUM7UUFDWCxJQUFJLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FB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QUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQztRQUM3RCxDQUFDLFdBQVcsRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLEtBQUssQ0FBQyxFQUFFLEdBQUcsRUFBRSxNQUFNO1FBQ3pELEVBQUMsS0FBSyxFQUFFLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFDLEVBQUUsTUFBTTtLQUMzRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG4vLyBUSElTIENPREUgSVMgR0VORVJBVEVEIC0gRE8gTk9UIE1PRElGWVxuLy8gU2VlIGFuZ3VsYXIvdG9vbHMvZ3VscC10YXNrcy9jbGRyL2V4dHJhY3QuanNcblxuY29uc3QgdSA9IHVuZGVmaW5lZDtcblxuZnVuY3Rpb24gcGx1cmFsKG46IG51bWJlcik6IG51bWJlciB7XG4gIGxldCB2ID0gbi50b1N0cmluZygpLnJlcGxhY2UoL15bXi5dKlxcLj8vLCAnJykubGVuZ3RoLFxuICAgICAgZiA9IHBhcnNlSW50KG4udG9TdHJpbmcoKS5yZXBsYWNlKC9eW14uXSpcXC4/LywgJycpLCAxMCkgfHwgMDtcbiAgaWYgKG4gJSAxMCA9PT0gMCB8fCBuICUgMTAwID09PSBNYXRoLmZsb29yKG4gJSAxMDApICYmIG4gJSAxMDAgPj0gMTEgJiYgbiAlIDEwMCA8PSAxOSB8fFxuICAgICAgdiA9PT0gMiAmJiBmICUgMTAwID09PSBNYXRoLmZsb29yKGYgJSAxMDApICYmIGYgJSAxMDAgPj0gMTEgJiYgZiAlIDEwMCA8PSAxOSlcbiAgICByZXR1cm4gMDtcbiAgaWYgKG4gJSAxMCA9PT0gMSAmJiAhKG4gJSAxMDAgPT09IDExKSB8fCB2ID09PSAyICYmIGYgJSAxMCA9PT0gMSAmJiAhKGYgJSAxMDAgPT09IDExKSB8fFxuICAgICAgISh2ID09PSAyKSAmJiBmICUgMTAgPT09IDEpXG4gICAgcmV0dXJuIDE7XG4gIHJldHVybiA1O1xufVxuXG5leHBvcnQgZGVmYXVsdCBbXG4gICdsdicsIFtbJ3ByaWVrxaFwLicsICdwxJNjcC4nXSwgdSwgWydwcmlla8WhcHVzZGllbsSBJywgJ3DEk2NwdXNkaWVuxIEnXV0sXG4gIFtbJ3ByaWVrxaFwLicsICdwxJNjcHVzZC4nXSwgdSwgWydwcmlla8WhcHVzZGllbmEnLCAncMSTY3B1c2RpZW5hJ11dLFxuICBbXG4gICAgWydTJywgJ1AnLCAnTycsICdUJywgJ0MnLCAnUCcsICdTJ10sXG4gICAgWydzdsSTdGQuJywgJ3Bpcm1kLicsICdvdHJkLicsICd0cmXFoWQuJywgJ2NldHVydGQuJywgJ3BpZWt0ZC4nLCAnc2VzdGQuJ10sXG4gICAgWydzdsSTdGRpZW5hJywgJ3Bpcm1kaWVuYScsICdvdHJkaWVuYScsICd0cmXFoWRpZW5hJywgJ2NldHVydGRpZW5hJywgJ3BpZWt0ZGllbmEnLCAnc2VzdGRpZW5hJ10sXG4gICAgWydTdicsICdQcicsICdPdCcsICdUcicsICdDZScsICdQaycsICdTZSddXG4gIF0sXG4gIFtcbiAgICBbJ1MnLCAnUCcsICdPJywgJ1QnLCAnQycsICdQJywgJ1MnXSxcbiAgICBbJ1N2xJN0ZC4nLCAnUGlybWQuJywgJ090cmQuJywgJ1RyZcWhZC4nLCAnQ2V0dXJ0ZC4nLCAnUGlla3RkLicsICdTZXN0ZC4nXSxcbiAgICBbJ1N2xJN0ZGllbmEnLCAnUGlybWRpZW5hJywgJ090cmRpZW5hJywgJ1RyZcWhZGllbmEnLCAnQ2V0dXJ0ZGllbmEnLCAnUGlla3RkaWVuYScsICdTZXN0ZGllbmEnXSxcbiAgICBbJ1N2JywgJ1ByJywgJ090JywgJ1RyJywgJ0NlJywgJ1BrJywgJ1NlJ11cbiAgXSxcbiAgW1xuICAgIFsnSicsICdGJywgJ00nLCAnQScsICdNJywgJ0onLCAnSicsICdBJywgJ1MnLCAnTycsICdOJywgJ0QnXSxcbiAgICBbXG4gICAgICAnamFudi4nLCAnZmVici4nLCAnbWFydHMnLCAnYXByLicsICdtYWlqcycsICdqxatuLicsICdqxatsLicsICdhdWcuJywgJ3NlcHQuJywgJ29rdC4nLCAnbm92LicsXG4gICAgICAnZGVjLidcbiAgICBdLFxuICAgIFtcbiAgICAgICdqYW52xIFyaXMnLCAnZmVicnXEgXJpcycsICdtYXJ0cycsICdhcHLEq2xpcycsICdtYWlqcycsICdqxatuaWpzJywgJ2rFq2xpanMnLCAnYXVndXN0cycsXG4gICAgICAnc2VwdGVtYnJpcycsICdva3RvYnJpcycsICdub3ZlbWJyaXMnLCAnZGVjZW1icmlzJ1xuICAgIF1cbiAgXSxcbiAgdSwgW1sncC5tLsSTLicsICdtLsSTLiddLCB1LCBbJ3Bpcm1zIG3Fq3N1IMSTcmFzJywgJ23Fq3N1IMSTcsSBJ11dLCAxLCBbNiwgMF0sXG4gIFsnZGQuTU0ueXknLCAneS4gXFwnZ2FkYVxcJyBkLiBNTU0nLCAneS4gXFwnZ2FkYVxcJyBkLiBNTU1NJywgJ0VFRUUsIHkuIFxcJ2dhZGFcXCcgZC4gTU1NTSddLFxuICBbJ0hIOm1tJywgJ0hIOm1tOnNzJywgJ0hIOm1tOnNzIHonLCAnSEg6bW06c3Mgenp6eiddLCBbJ3sxfSB7MH0nLCB1LCB1LCB1XSxcbiAgWycsJywgJ8KgJywgJzsnLCAnJScsICcrJywgJy0nLCAnRScsICfDlycsICfigLAnLCAn4oieJywgJ05TJywgJzonXSxcbiAgWycjLCMjMC4jIyMnLCAnIywjIzAlJywgJyMsIyMwLjAwwqDCpCcsICcjRTAnXSwgJ+KCrCcsICdlaXJvJyxcbiAgeydBVUQnOiBbJ0FVJCcsICckJ10sICdMVkwnOiBbJ0xzJ10sICdUSEInOiBbJ+C4vyddLCAnVFdEJzogWydOVCQnXX0sIHBsdXJhbFxuXTtcbiJdfQ==
            /***/ 
        })
    }]);
//# sourceMappingURL=173-es2015.js.map
//# sourceMappingURL=173-es5.js.map
//# sourceMappingURL=173-es5.js.map