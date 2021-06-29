(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/Product/Credit.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/view/Product/Credit.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
  components: {},
  data: function data() {
    return {
      product: {}
    };
  },
  methods: {
    onSubmit: function onSubmit() {
      var _this = this;

      if (!this.product.id) {
        this.$store.dispatch("addProduct", this.product).then(function () {
          _this.$router.go(-1);
        });
      } else {
        this.$store.dispatch("updateProduct", this.product).then(function () {
          _this.$router.go(-1);
        });
      }
    }
  },
  created: function created() {
    this.product = _objectSpread({}, this.$route.params.product);
    this.product.type = 1;
  },
  computed: {
    cities: function cities() {
      return this.$store.getters.cities;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/Product/Credit.vue?vue&type=template&id=bb38eb16&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/view/Product/Credit.vue?vue&type=template&id=bb38eb16& ***!
  \***********************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "m-content" }, [
      _c("div", { staticClass: "m-portlet m-portlet--tabs" }, [
        _c(
          "div",
          {
            staticClass: "m-portlet__head",
            class: { "alert-accent alert": _vm.product.id }
          },
          [
            _c("div", { staticClass: "m-portlet__head-caption" }, [
              _c("div", { staticClass: "m-portlet__head-title" }, [
                _c("h3", { staticClass: "m-portlet__head-text" }, [
                  _c("i", {
                    staticClass: "fa fa-gears  fa-2x",
                    staticStyle: { "font-size": "30px", "margin-right": "5px" }
                  }),
                  _vm._v(
                    "   Cihaz " +
                      _vm._s(_vm.product.id ? "Güncelle" : "Ekle") +
                      "\r\n                        "
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _vm._m(0)
          ]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "m-portlet__body" }, [
          _c(
            "form",
            {
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.onSubmit($event)
                }
              }
            },
            [
              _c("div", { staticClass: "tab-content" }, [
                _c("div", { staticClass: "form-group m-form__group row" }, [
                  _c("div", { staticClass: "col-lg-4" }, [
                    _c("label", {}, [
                      _vm._v(
                        "\r\n                                        Cihaz Adı\r\n                                    "
                      )
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.product.name,
                          expression: "product.name"
                        }
                      ],
                      staticClass: "form-control m-input--air m-input",
                      attrs: { type: "text", placeholder: "Cihaz Adı" },
                      domProps: { value: _vm.product.name },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.product, "name", $event.target.value)
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-lg-4" }, [
                    _c("label", {}, [
                      _vm._v(
                        "\r\n                                  Seri Numarası\r\n                                "
                      )
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.product.serial,
                          expression: "product.serial"
                        }
                      ],
                      staticClass: "form-control m-input--air m-input",
                      attrs: { required: "required", placeholder: "Seri" },
                      domProps: { value: _vm.product.serial },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.product, "serial", $event.target.value)
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-lg-4" }, [
                    _c("label", {}, [
                      _vm._v(
                        "\r\n                                     Marka\r\n                                    "
                      )
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.product.brand,
                          expression: "product.brand"
                        }
                      ],
                      staticClass: "form-control m-input--air m-input",
                      attrs: { placeholder: "Marka" },
                      domProps: { value: _vm.product.brand },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.product, "brand", $event.target.value)
                        }
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group m-form__group row" }, [
                  _c("div", { staticClass: "col-lg-4" }, [
                    _c("label", {}, [
                      _vm._v(
                        "\r\n                                Cihaz Modeli\r\n                            "
                      )
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.product.model,
                          expression: "product.model"
                        }
                      ],
                      staticClass: "form-control m-input--air m-input",
                      attrs: { type: "text", placeholder: "Cihaz Modeli" },
                      domProps: { value: _vm.product.model },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.product, "model", $event.target.value)
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-lg-4" }, [
                    _c("label", {}, [
                      _vm._v("Künye\r\n                            ")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.product.tag,
                          expression: "product.tag"
                        }
                      ],
                      staticClass: "form-control m-input--air m-input",
                      attrs: { placeholder: "Künye" },
                      domProps: { value: _vm.product.tag },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.product, "tag", $event.target.value)
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-lg-4" }, [
                    _c("label", {}, [
                      _vm._v(
                        "\r\n                               Açıklama\r\n                            "
                      )
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.product.description,
                          expression: "product.description"
                        }
                      ],
                      staticClass: "form-control m-input--air m-input",
                      attrs: { placeholder: "Açıklama" },
                      domProps: { value: _vm.product.description },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.product,
                            "description",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("hr"),
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
                            staticClass: "btn btn-primary",
                            attrs: { type: "submit" }
                          },
                          [
                            _vm._v(
                              "\r\n                                Kaydet\r\n                            "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "a",
                          {
                            staticClass: "btn btn-secondary",
                            on: {
                              click: function($event) {
                                return _vm.$router.go(-1)
                              }
                            }
                          },
                          [
                            _vm._v(
                              "\r\n                                Vazgeç\r\n                            "
                            )
                          ]
                        )
                      ])
                    ]
                  )
                ]
              )
            ]
          )
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
    return _c("div", { staticClass: "m-portlet__head-tools" }, [
      _c(
        "ul",
        {
          staticClass: "nav nav-tabs m-tabs-line m-tabs-line--right",
          attrs: { role: "tablist" }
        },
        [
          _c("li", { staticClass: "nav-item m-tabs__item" }, [
            _c(
              "a",
              {
                staticClass: "nav-link m-tabs__link active",
                attrs: {
                  "data-toggle": "tab",
                  href: "#information",
                  role: "tab"
                }
              },
              [
                _c("i", { staticClass: "fa fa-clipboard" }),
                _vm._v(
                  "\r\n                                Ürün  Bilgileri\r\n                            "
                )
              ]
            )
          ])
        ]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/view/Product/Credit.vue":
/*!**********************************************!*\
  !*** ./resources/js/view/Product/Credit.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Credit_vue_vue_type_template_id_bb38eb16___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Credit.vue?vue&type=template&id=bb38eb16& */ "./resources/js/view/Product/Credit.vue?vue&type=template&id=bb38eb16&");
/* harmony import */ var _Credit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Credit.vue?vue&type=script&lang=js& */ "./resources/js/view/Product/Credit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Credit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Credit_vue_vue_type_template_id_bb38eb16___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Credit_vue_vue_type_template_id_bb38eb16___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/view/Product/Credit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/view/Product/Credit.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/view/Product/Credit.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Credit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Credit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/Product/Credit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Credit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/view/Product/Credit.vue?vue&type=template&id=bb38eb16&":
/*!*****************************************************************************!*\
  !*** ./resources/js/view/Product/Credit.vue?vue&type=template&id=bb38eb16& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Credit_vue_vue_type_template_id_bb38eb16___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Credit.vue?vue&type=template&id=bb38eb16& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/Product/Credit.vue?vue&type=template&id=bb38eb16&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Credit_vue_vue_type_template_id_bb38eb16___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Credit_vue_vue_type_template_id_bb38eb16___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);