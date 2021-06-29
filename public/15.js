(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/Product/Repairpart/Index.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/view/Product/Repairpart/Index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      cards: [],
      repairpart: {},
      count: 1
    };
  },
  methods: {
    addCard: function addCard(item) {
      item.quentity -= 1;
      var index = this.cards.findIndex(function (c) {
        return c.id === item.id;
      });

      if (index > -1) {
        this.cards[index].count += 1;
      } else {
        item.count = 1;
        this.cards.push(item);
      }
    },
    resetPart: function resetPart() {
      this.cards = [];
      this.$store.dispatch("initParts", 2);
    },
    savePart: function savePart() {
      for (var i = 0; this.cards.length > i; i++) {
        this.$store.dispatch("addRepairpart", {
          name: this.cards[i].name,
          product_id: this.cards[i].id,
          quentity: this.cards[i].count,
          work_order_id: this.$route.params.workorderId
        });
        this.$store.dispatch("updateProduct", this.cards[i]);
      }

      this.cards = [];
    }
  },
  created: function created() {
    this.$store.dispatch('initParts', 2);
    this.$store.dispatch('initWorkorder', this.$route.params.workorderId);
    this.$store.dispatch("initRepairpartForWorkorder", this.$route.params.workorderId);
  },
  computed: {
    parts: function parts() {
      return this.$store.getters.parts;
    },
    workorder: function workorder() {
      return this.$store.getters.workorder;
    },
    repairparts: function repairparts() {
      return this.$store.getters.repairparts;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/Product/Repairpart/Index.vue?vue&type=template&id=1b36bf42&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/view/Product/Repairpart/Index.vue?vue&type=template&id=1b36bf42&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-4" }, [
        _c("div", { staticClass: "m-portlet " }, [
          _c("div", { staticClass: "m-portlet__head" }, [
            _c("div", { staticClass: "m-portlet__head-caption" }, [
              _c(
                "div",
                { staticClass: "m-portlet__head-title" },
                [
                  _c("spa", { staticClass: "m-portlet__head-text" }, [
                    _vm._v(
                      "\r\n                                FUJİTSU L22T-7 LED BİLGİSAYAR LCD MONİTÖRÜ (MODEL NO:W2112)\r\n                            "
                    )
                  ])
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "m-portlet__head-tools" })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "m-portlet__body" }, [
            _c("div", { staticClass: "m-card-profile" }, [
              _c("div", { staticClass: "m-card-profile__title m--hide" }, [
                _vm._v(
                  "\r\n                            Ürün Adı\r\n                        "
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "center" }, [
                _c(
                  "table",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.cards.length > 0,
                        expression: "cards.length>0"
                      }
                    ],
                    staticClass: "table"
                  },
                  [
                    _vm._m(0),
                    _vm._v(" "),
                    _c(
                      "transition-group",
                      {
                        tag: "tbody",
                        attrs: { name: "page", type: "transition" }
                      },
                      _vm._l(_vm.cards, function(item, index) {
                        return _c("tr", { key: index }, [
                          _c("td", [
                            _c(
                              "span",
                              { staticClass: "m-badge m-badge--danger " },
                              [_vm._v(_vm._s(item.id) + " ")]
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _c(
                              "span",
                              {
                                staticClass:
                                  "m-badge m-badge--wide alert alert-primary  "
                              },
                              [_vm._v(_vm._s(item.name) + " ")]
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _c("b", [
                              _vm._v(
                                "  " +
                                  _vm._s(item.count ? item.count : 1) +
                                  " Adet"
                              )
                            ])
                          ])
                        ])
                      }),
                      0
                    )
                  ],
                  1
                )
              ])
            ]),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "m-portlet__foot m-portlet__no-border m-portlet__foot--fit text-center "
              },
              [
                _c(
                  "div",
                  { staticClass: "m-form__actions m-form__actions--solid" },
                  [
                    _c("div", { staticClass: "row" }, [
                      _c(
                        "button",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.cards.length > 0,
                              expression: "cards.length>0"
                            }
                          ],
                          staticClass: "btn btn-primary",
                          on: {
                            click: function($event) {
                              return _vm.savePart()
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\r\n                                    Kaydet\r\n                                "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.cards.length > 0,
                              expression: "cards.length>0"
                            }
                          ],
                          staticClass: "btn btn-secondary",
                          on: {
                            click: function($event) {
                              return _vm.resetPart()
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\r\n                                    Sil\r\n                                "
                          )
                        ]
                      )
                    ])
                  ]
                )
              ]
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "center" }, [
        _c(
          "table",
          { staticClass: "table" },
          [
            _vm._m(1),
            _vm._v(" "),
            _c(
              "transition-group",
              { tag: "tbody", attrs: { name: "list", type: "transition" } },
              _vm._l(_vm.repairparts, function(item) {
                return _c("tr", { key: item.id }, [
                  _c("td", [
                    _c("span", { staticClass: "m-badge m-badge--danger " }, [
                      _vm._v(_vm._s(item.id) + " ")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c(
                      "span",
                      {
                        staticClass:
                          "m-badge m-badge--wide alert alert-primary  "
                      },
                      [
                        _vm._v(
                          _vm._s(_vm._f("formatShift")(item.service_date)) + " "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", { attrs: { width: "250px" } }, [
                    _c("span", { staticClass: "bold " }, [
                      _vm._v(_vm._s(item.deliverer) + " ")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("span", { staticClass: "bold " }, [
                      _vm._v(_vm._s(item.description) + " ")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("span", { staticClass: "bold " }, [
                      _vm._v(
                        _vm._s(item.repair_cost ? item.repair_cost : 0) + " "
                      )
                    ])
                  ])
                ])
              }),
              0
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-8" }, [
        _c("div", { staticClass: "m-portlet " }, [
          _vm._m(2),
          _vm._v(" "),
          _c("div", { staticClass: "m-portlet__body" }, [
            _c(
              "div",
              { staticClass: "row" },
              _vm._l(_vm.parts, function(item) {
                return _c("div", { staticClass: "col-md-3" }, [
                  _c("div", { staticClass: "bd-example " }, [
                    _c("div", { staticClass: "card-deck" }, [
                      _c("div", { staticClass: "card " }, [
                        _c("img", {
                          staticClass: "card-img-top mt-2",
                          attrs: {
                            src: "/assets/image/repair.png",
                            width: "75px",
                            height: "100px "
                          }
                        }),
                        _vm._v(" "),
                        _c("div", { staticClass: "card-body" }, [
                          _c("small", [_vm._v(_vm._s(item.name))]),
                          _vm._v(" "),
                          _c("p", [
                            _c("b", [
                              _vm._v(
                                _vm._s(
                                  item.quentity
                                    ? item.quentity + " Adet"
                                    : "Ürün Bitmiştir!"
                                ) + " "
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-primary btn-block ",
                              attrs: { disabled: item.quentity <= 0 },
                              on: {
                                click: function($event) {
                                  return _vm.addCard(item)
                                }
                              }
                            },
                            [
                              _c("i", { staticClass: "fa fa-plus" }),
                              _vm._v(" Kullan")
                            ]
                          )
                        ])
                      ])
                    ])
                  ])
                ])
              }),
              0
            )
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [
          _vm._v(
            "\r\n                                        #\r\n                                    "
          )
        ]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "250px" } }, [
          _vm._v(
            "\r\n                                        Yedek Parça\r\n                                    "
          )
        ]),
        _vm._v(" "),
        _c("th", [
          _vm._v(
            "\r\n                                        Adet\r\n                                    "
          )
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [
          _vm._v("\r\n                        #\r\n                    ")
        ]),
        _vm._v(" "),
        _c("th", [
          _vm._v("\r\n                        Tarih\r\n                    ")
        ]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "250px" } }, [
          _vm._v("\r\n                        Sahibi\r\n                    ")
        ]),
        _vm._v(" "),
        _c("th", [
          _vm._v("\r\n                        Açıklama\r\n                    ")
        ]),
        _vm._v(" "),
        _c("th", [
          _vm._v(
            "\r\n                        Servis Bedeli\r\n                    "
          )
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "m-portlet__head alert-accent alert" }, [
      _c("div", { staticClass: "m-portlet__head-caption" }, [
        _c("div", { staticClass: "m-portlet__head-title" }, [
          _c("h6", { staticClass: "m-portlet__head-text" }, [
            _c("div", { staticClass: "m-portlet__head" }, [
              _c("div", { staticClass: "m-portlet__head-caption" }, [
                _c("div", { staticClass: "m-portlet__head-title" }, [
                  _c("span", { staticClass: "m-portlet__head-text" }, [
                    _vm._v(
                      "\r\n                                                Yedek Parça Listesi\r\n                                            "
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "m-portlet__head-tools" })
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "m-portlet__head-tools" })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/view/Product/Repairpart/Index.vue":
/*!********************************************************!*\
  !*** ./resources/js/view/Product/Repairpart/Index.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_1b36bf42_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=1b36bf42&scoped=true& */ "./resources/js/view/Product/Repairpart/Index.vue?vue&type=template&id=1b36bf42&scoped=true&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/view/Product/Repairpart/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_1b36bf42_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_1b36bf42_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1b36bf42",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/view/Product/Repairpart/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/view/Product/Repairpart/Index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/view/Product/Repairpart/Index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/Product/Repairpart/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/view/Product/Repairpart/Index.vue?vue&type=template&id=1b36bf42&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/view/Product/Repairpart/Index.vue?vue&type=template&id=1b36bf42&scoped=true& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_1b36bf42_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=1b36bf42&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/Product/Repairpart/Index.vue?vue&type=template&id=1b36bf42&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_1b36bf42_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_1b36bf42_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);