// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/products.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.products = exports.best = void 0;
var products = [{
  name: "반팔 켄웨이 니트 폴로 블랙",
  engName: "S/S KENWAY KNIT POLO",
  price: "148,000",
  image: "./images/Top_01.jpg",
  hoverImage: "./images/Top_01_hover.jpg"
}, {
  name: "반팔 켄웨이 니트 폴로 네이비",
  engName: "S/S KENWAY KNIT POLO",
  price: "148,000",
  image: "./images/Top_02.jpg",
  hoverImage: "./images/Top_02_hover.jpg"
}, {
  name: "반팔 켄웨이 니트 폴로 키위",
  engName: "S/S KENWAY KNIT POLO",
  price: "148,000",
  image: "./images/Top_03.jpg",
  hoverImage: "./images/Top_03_hover.jpg"
}, {
  name: "반팔 켄웨이 니트 폴로 화이트 스완",
  engName: "S/S KENWAY KNIT POLO",
  price: "148,000",
  image: "./images/Top_04.jpg",
  hoverImage: "./images/Top_04_hover.jpg"
}, {
  name: "반팔 이노베이션 포켓 티셔츠 블랙",
  engName: "S/S INNOVATION POCKET T-SHIRT",
  price: "85,000",
  image: "./images/Top_05.jpg",
  hoverImage: "./images/Top_05_hover.jpg"
}, {
  name: "반팔 이노베이션 포켓 티셔츠 테이데",
  engName: "S/S INNOVATION POCKET T-SHIRT",
  price: "85,000",
  image: "./images/Top_06.jpg",
  hoverImage: "./images/Top_06_hover.jpg"
}, {
  name: "반팔 이노베이션 포켓 티셔츠 화이트",
  engName: "S/S INNOVATION POCKET T-SHIRT",
  price: "85,000",
  image: "./images/Top_07.jpg",
  hoverImage: "./images/Top_07_hover.jpg"
}, {
  name: "반팔 라이프가즈 티셔츠 블랙",
  engName: "S/S LIFEGUARDS T-SHIRT",
  price: "75,000",
  image: "./images/Top_08.jpg",
  hoverImage: "./images/Top_08_hover.jpg"
}, {
  name: "반팔 타마스 포켓 티셔츠 블랙",
  engName: "S/S TAMAS POCKET T-SHIRT",
  price: "88,000",
  image: "./images/Top_09.jpg",
  hoverImage: "./images/Top_09_hover.jpg"
}, {
  name: "반팔 크래프트 셔츠 제우스 린스드",
  engName: "S/S CRAFT SHIRT",
  price: "123,000",
  image: "./images/Top_10.jpg",
  hoverImage: "./images/Top_10_hover.jpg"
}, {
  name: "반팔 크래프트 셔츠 쥐라 린스드",
  engName: "S/S WYNTON SHIRT",
  price: "123,000",
  image: "./images/Top_11.jpg",
  hoverImage: "./images/Top_11_hover.jpg"
}, {
  name: "반팔 윈튼 셔츠 타마린드/더스티 H",
  engName: "S/S WYNTON SHIRT",
  price: "153,000",
  image: "./images/Top_12.jpg",
  hoverImage: "./images/Top_12_hover.jpg"
}, {
  name: "반팔 유니티 티셔츠 화이트",
  engName: "S/S UNITY T-SHIRT",
  price: "83,000",
  image: "./images/Top_13.jpg",
  hoverImage: "./images/Top_13_hover.jpg"
}, {
  name: "반팔 유니티 티셔츠 블랙",
  engName: "S/S UNITY T-SHIRT",
  price: "83,000",
  image: "./images/Top_14.jpg",
  hoverImage: "./images/Top_14_hover.jpg"
}, {
  name: "반팔 바칸제 티셔츠 피신",
  engName: "S/S VACANZE T-SHIRT",
  price: "78,000",
  image: "./images/Top_15.jpg",
  hoverImage: "./images/Top_15_hover.jpg"
}, {
  name: "반팔 바칸제 티셔츠 시트론",
  engName: "S/S VACANZE T-SHIRT",
  price: "78,000",
  image: "./images/Top_16.jpg",
  hoverImage: "./images/Top_16_hover.jpg"
}, {
  name: "반팔 말린 티셔츠 화이트",
  engName: "S/S MARLIN T-SHIRT",
  price: "78,000",
  image: "./images/Top_17.jpg",
  hoverImage: "./images/Top_17_hover.jpg"
}, {
  name: "반팔 말린 티셔츠 라주라이트",
  engName: "S/S MARLIN T-SHIRT",
  price: "78,000",
  image: "./images/Top_18.jpg",
  hoverImage: "./images/Top_18_hover.jpg"
}, {
  name: "반팔 로커 티셔츠 애쉬 헤더/브라운",
  engName: "S/S LOCKER T-SHIRT",
  price: "62,400",
  image: "./images/Top_19.jpg",
  hoverImage: "./images/Top_19_hover.jpg"
}, {
  name: "반팔 로커 티셔츠 블랙/화이트",
  engName: "S/S LOCKER T-SHIRT",
  price: "62,400",
  image: "./images/Top_20.jpg",
  hoverImage: "./images/Top_20_hover.jpg"
}, {
  name: "반팔 크로모 티셔츠 블랙 크로모",
  engName: "S/S CHROMO T-SHIRT",
  price: "70,400",
  image: "./images/Top_21.jpg",
  hoverImage: "./images/Top_21_hover.jpg"
}, {
  name: "반팔 크로모 티셔츠 아말피 크로모",
  engName: "S/S CHROMO T-SHIRT",
  price: "70,400",
  image: "./images/Top_22.jpg",
  hoverImage: "./images/Top_22_hover.jpg"
}, {
  name: "반팔 크로모 티셔츠 트리하우스 크로모",
  engName: "S/S CHROMO T-SHIRT",
  price: "70,400",
  image: "./images/Top_23.jpg",
  hoverImage: "./images/Top_23_hover.jpg"
}, {
  name: "반팔 넬슨 티셔츠 피신 가먼트 다이드",
  engName: "S/S NELSON T-SHIRT",
  price: "78,000",
  image: "./images/Top_24.jpg",
  hoverImage: "./images/Top_24_hover.jpg"
}, {
  name: "반팔 넬슨 티셔츠 왁스 가먼트 다이드",
  engName: "S/S NELSON T-SHIRT",
  price: "78,000",
  image: "./images/Top_25.jpg",
  hoverImage: "./images/Top_25_hover.jpg"
}, {
  name: "반팔 마스터 셔츠 블랙",
  engName: "S/S MASTER SHIRT",
  price: "113,000",
  image: "./images/Top_26.jpg",
  hoverImage: "./images/Top_26_hover.jpg"
}, {
  name: "반팔 마스터 셔츠 테이데",
  engName: "S/S MASTER nSHIRT",
  price: "113,000",
  image: "./images/Top_27.jpg",
  hoverImage: "./images/Top_27_hover.jpg"
}, {
  name: "디트로이트 자켓 블랙/블랙 린스드",
  engName: "DETROIT JACKET",
  price: "288,000",
  image: "./images/Top_28.jpg",
  hoverImage: "./images/Top_28_hover.jpg"
}, {
  name: "몬트레이 셔츠 자켓 키위 원 워시드",
  engName: "MONTEREY SHIRT JAC",
  price: "218,000",
  image: "./images/Top_29.jpg",
  hoverImage: "./images/Top_29_hover.jpg"
}, {
  name: "타일러 자켓 블랙",
  engName: "TYLER JACKET",
  price: "254,400",
  image: "./images/Top_30.jpg",
  hoverImage: "./images/Top_30_hover.jpg"
}, {
  name: "타일러 자켓 유카",
  engName: "TYLER JACKET",
  price: "254,400",
  image: "./images/Top_31.jpg",
  hoverImage: "./images/Top_31_hover.jpg"
}, {
  name: "바유 스웻셔츠 블랙 가먼트 다이드",
  engName: "BAYOU SWEATSHIRT",
  price: "158,400",
  image: "./images/Top_32.jpg",
  hoverImage: "./images/Top_32_hover.jpg"
}, {
  name: "로커 스웻셔츠 블랙/화이트",
  engName: "LOCKER SWEATSHIRT",
  price: "110,400",
  image: "./images/Top_33.jpg",
  hoverImage: "./images/Top_33_hover.jpg"
}, {
  name: "로커 스웻셔츠 애쉬 헤더/브라운",
  engName: "LOCKER SWEATSHIRT",
  price: "110,400",
  image: "./images/Top_34.jpg",
  hoverImage: "./images/Top_34_hover.jpg"
}, {
  name: "로커 스웻셔츠 트리하우스/옐로우",
  engName: "LOCKER SWEATSHIRT",
  price: "110,400",
  image: "./images/Top_35.jpg",
  hoverImage: "./images/Top_35_hover.jpg"
}, {
  name: "후디드 크로모 스웻셔츠 블랙 ",
  engName: "HOODED CHROMO SWEATSHIRT",
  price: "166,400",
  image: "./images/Top_36.jpg",
  hoverImage: "./images/Top_36_hover.jpg"
}, {
  name: "후디드 크로모 스웻셔츠 트리하우스",
  engName: "HOODED CHROMO SWEATSHIRT",
  price: "166,400",
  image: "./images/Top_37.jpg",
  hoverImage: "./images/Top_37_hover.jpg"
}, {
  name: "후디드 듀얼 스웻셔츠 애쉬 헤더",
  engName: "HOODED DUEL SWEATSHIRT",
  price: "150,400",
  image: "./images/Top_38.jpg",
  hoverImage: "./images/Top_38_hover.jpg"
}, {
  name: "후디드 듀얼 스웻셔츠 아가베",
  engName: "HOODED DUEL SWEATSHIRT",
  price: " 150,400",
  image: "./images/Top_39.jpg",
  hoverImage: "./images/Top_39_hover.jpg"
}, {
  name: "후디드 엘지 스웻셔츠 블랙/왁스",
  engName: "HOODED ELZY SWEATSHIRT",
  price: "172,000",
  image: "./images/Top_40.jpg",
  hoverImage: "./images/Top_40_hover.jpg"
}, {
  name: "후디드 엘지 스웻셔츠 해밀턴 브라운/토바코",
  engName: "HOODED ELZY SWEATSHIRT",
  price: "172,000",
  image: "./images/Top_41.jpg",
  hoverImage: "./images/Top_41_hover.jpg"
}, {
  name: "알링 자켓 블랙 페이디드",
  engName: "ARLING JACKET",
  price: "368,000",
  image: "./images/Top_42.jpg",
  hoverImage: "./images/Top_42_hover.jpg"
}, {
  name: "스카일러 셔츠 자켓 블랙 가먼트 다이드",
  engName: "SKYLER SHIRT JAC",
  price: "212,000",
  image: "./images/Top_43.jpg",
  hoverImage: "./images/Top_43_hover.jpg"
}, {
  name: "스카일러 셔츠 자켓 스톰 블루 가먼트 다이드",
  engName: "STORM BLUE GARMENT DYED",
  price: "212,000",
  image: "./images/Top_44.jpg",
  hoverImage: "./images/Top_44_hover.jpg"
}, {
  name: "미시건 코트 블랙 가먼트 다이드",
  engName: "BLACK GARMENT DYED",
  price: " 198,000",
  image: "./images/Top_45.jpg",
  hoverImage: "./images/Top_45_hover.jpg"
}, {
  name: "미시건 코트 오프-화이트 린스드",
  engName: "MICHIGAN COAT",
  price: "198,000",
  image: "./images/Top_46.jpg",
  hoverImage: "./images/Top_46_hover.jpg"
}, {
  name: "미시건 코트 라주라이트/블랙 린스드",
  engName: "MICHIGAN COAT",
  price: "228,000",
  image: "./images/Top_47.jpg",
  hoverImage: "./images/Top_47_hover.jpg"
}, {
  name: "어웨이크 뉴욕 어웨이크 뉴욕 블랙 린스드",
  engName: "AWAKE NY OG ACTIVE JACKET",
  price: "388,000",
  image: "./images/Top_48.jpg",
  hoverImage: "./images/Top_48_hover.jpg"
}, {
  name: "몬트레이 셔츠 자켓 블랙 스톤 워시드",
  engName: "MONTEREY SHIRT JAC",
  price: " 170,400",
  image: "./images/Top_49.jpg",
  hoverImage: "./images/Top_49_hover.jpg"
}, {
  name: "몬트레이 셔츠 자켓 블루 스톤 워시드",
  engName: "MONTEREY SHIRT JAC",
  price: "170,400",
  image: "./images/Top_50.jpg",
  hoverImage: "./images/Top_50_hover.jpg"
}, {
  name: "아버 베스트 블랙 페이디드",
  engName: "ARBOR VEST",
  price: "202,400",
  image: "./images/Top_51.jpg",
  hoverImage: "./images/Top_51_hover.jpg"
}, {
  name: "아버 베스트 타마린드 페이디드",
  engName: "ARBOR VEST",
  price: "202,400",
  image: "./images/Top_52.jpg",
  hoverImage: "./images/Top_52_hover.jpg"
}, {
  name: "코스탈 자켓 블랙/화이트",
  engName: "COASTAL JACKET",
  price: "248,000",
  image: "./images/Top_53.jpg",
  hoverImage: "./images/Top_53_hover.jpg"
}, {
  name: "코스탈 자켓 화이트/블랙",
  engName: "COASTAL JACKET",
  price: "248,000",
  image: "./images/Top_54.jpg",
  hoverImage: "./images/Top_54_hover.jpg"
}, {
  name: "살레도 자켓 블랙 라이트 유즈드 워시",
  engName: "BLACK LIGHT USED WASH",
  price: "245,000",
  image: "./images/Top_55.jpg",
  hoverImage: "./images/Top_55_hover.jpg"
}, {
  name: "살레도 자켓 블루 스톤 워시드",
  engName: "BLUE STONE WASHED",
  price: "208,000",
  image: "./images/Top_56.jpg",
  hoverImage: "./images/Top_56_hover.jpg"
}, {
  name: "코스트 스테이트 스웻셔츠 애쉬 헤더",
  engName: "COAST STATE SWEATSHIRT",
  price: "145,000",
  image: "./images/Top_57.jpg",
  hoverImage: "./images/Top_57_hover.jpg"
}, {
  name: "넬슨 스웻셔츠 피신 가먼트 다이드",
  engName: "NELSON SWEATSHIRT",
  price: "130,400",
  image: "./images/Top_58.jpg",
  hoverImage: "./images/Top_58_hover.jpg"
}, {
  name: "칼하트 스웨트셔츠 블랙/화이트",
  engName: "CARHARTT SWEATSHIRT",
  price: "138,000",
  image: "./images/Top_59.jpg",
  hoverImage: "./images/Top_59_hover.jpg"
}, {
  name: "칼하트 스웻셔츠 그레이 헤더/블랙",
  engName: "CARHARTT SWEATSHIRT",
  price: "138,000",
  image: "./images/Top_60.jpg",
  hoverImage: "./images/Top_60_hover.jpg"
}, {
  name: "후디드 칼하트 스웻셔츠 제우스/비올란다",
  engName: "HOODED CARHARTT SWEATSHIRT",
  price: "118,400",
  image: "./images/Top_61.jpg",
  hoverImage: "./images/Top_61_hover.jpg"
}, {
  name: "후디드 스퀘어 라벨 자켓 블랙",
  engName: "HOODED SQUARE LABEL JACKET",
  price: "153,000",
  image: "./images/Top_62.jpg",
  hoverImage: "./images/Top_62_hover.jpg"
}, {
  name: "후디드 스퀘어 라벨 자켓 그레이 헤더",
  engName: "HOODED SQUARE LABEL JACKET",
  price: "153,000",
  image: "./images/Top_63.jpg",
  hoverImage: "./images/Top_63_hover.jpg"
}, {
  name: "후디드 스퀘어 라벨 자켓 해밀턴 브라운",
  engName: "HOODED SQUARE LABEL JACKET",
  price: "153,000",
  image: "./images/Top_64.jpg",
  hoverImage: "./images/Top_64_hover.jpg"
}, {
  name: "후디드 매디슨 자켓 블랙/왁스",
  engName: "HOODED MADISON JACKET",
  price: " 153,000",
  image: "./images/Top_65.jpg",
  hoverImage: "./images/Top_65_hover.jpg"
}, {
  name: "알토 자켓 라주라이트",
  engName: "ALTO JACKET",
  price: "286,400",
  image: "./images/Top_66.jpg",
  hoverImage: "./images/Top_66_hover.jpg"
}];
exports.products = products;
var best = [{
  id: "best_01",
  name: "반팔 타마스 포켓 티셔츠 블랙",
  price: "88,000",
  code: "CA23SSTSSS00002019",
  accumulate: "",
  percent: "",
  mainImg: "./images/best_01.jpg",
  detailImg01: "./images/detail01_1.jpg",
  detailImg02: "./images/detail01_2.jpg",
  detailImg03: "./images/detail01_3.jpg",
  detailImg04: "./images/detail01_4.jpg",
  detailImg05: "./images/detail01_5.jpg",
  colorImg01: "./images/best_02.jpg",
  colorImg02: "",
  colorImg03: "",
  relateImg: "./images/relateimg_01.jpg",
  relateImghover: "./images/relateimghover_01.jpg",
  relateName: "SINGLE KNEE CHROMO PANT DEARBORN",
  relateColor: "BLACK CHROMO",
  relatePrice: "156,000",
  recentImg: "",
  recentName: "",
  recentColor: "",
  recentPrice: "",
  description: "S/S TAMAS POCKET T-SHIRT는 오가닉 코튼100% 싱글 저지 소재의 반팔 티셔츠입니다. 루즈 핏이며, 가슴 포켓이 있습니다. 후면에 그래픽 프린트가 있습니다.- 세탁 및 다림 시 그래픽의 손상 및 변형이 생길 수 있으므로, 뒤집어 세탁 및 다림을 권장합니다."
}, {
  id: "best_02",
  name: "반팔 타마스 포켓 티셔츠 화이트",
  price: "88,000",
  code: "CA23SSTSSS00040025",
  accumulate: "",
  percent: "",
  mainImg: "./images/best_02.jpg",
  detailImg01: "./images/detail02_1.jpg",
  detailImg02: "./images/detail02_2.jpg",
  detailImg03: "./images/detail02_3.jpg",
  detailImg04: "./images/detail02_4.jpg",
  detailImg05: "./images/detail02_5.jpg",
  colorImg01: "./images/best_01.jpg",
  colorImg02: "",
  colorImg03: "",
  relateImg: "./images/relateimg_02.jpg",
  relateImghover: "./images/relateimghover_02.jpg",
  relateName: "DOUBLE KNEE PANT FAIRFIELD",
  relateColor: "BLUE HEAVY STONE WASH",
  relatePrice: "173,000",
  recentImg: "",
  recentName: "",
  recentColor: "",
  recentPrice: "",
  description: "DOUBLE KNEE PANT는 오가닉 코튼 100% 'FAIRFIELD' 데님 소재의 워크 팬츠입니다. 릴렉스드 스트레이트 핏에 밑위는 레귤러 웨이스트입니다. 전체적으로 트리플 스티칭 되있으며, 지퍼 플라이 형식입니다. 무릎 부분은 이중으로 덧대어져 있습니다. 제품 측면에는 툴 포켓, 해머 루프가 있으며, 후면 포켓에 스퀘어 라벨이 부착되어 있습니다."
}, {
  id: "best_03",
  name: "싱글 니 쇼츠 스미스 블루 스톤 워시드",
  price: "135,000",
  code: "CA23SSSTWO00760001",
  accumulate: "",
  percent: "",
  mainImg: "./images/mainimg_03.jpg",
  detailImg01: "./images/detail03_1.jpg",
  detailImg02: "./images/detail03_2.jpg",
  detailImg03: "./images/detail03_3.jpg",
  detailImg04: "./images/detail03_4.jpg",
  detailImg05: "./images/detail03_5.jpg",
  colorImg01: "./images/best_04.jpg",
  colorImg02: "",
  colorImg03: "",
  relateImg: "./images/relateimg_03.jpg",
  relateImghover: "./images/relateimghover_03.jpg",
  relateName: "S/S BLACK JACK SHIRT",
  relateColor: "BLACK JACK, BLACK",
  relatePrice: " 143,000",
  recentImg: "",
  recentName: "",
  recentColor: "",
  recentPrice: "",
  description: "SINGLE KNEE SHORT는 면100% 'SMITH' 데님 소재의 워크 쇼츠입니다. 릴렉스드 핏에 밑위는 레귤러 웨이스트입니다. 전체적으로 트리플 스티칭 되있으며, 지퍼 플라이 형식입니다. 제품 측면에는 툴 포켓, 해머 루프가 있으며, 후면 포켓에 스퀘어 라벨이 부착되어 있습니다."
}, {
  id: "best_04",
  name: "싱글 니 쇼츠 스미스 블루 스톤 블리치드",
  price: "148,000",
  code: "CA23SSSTWO00759001",
  accumulate: "",
  percent: "",
  mainImg: "./images/best_04.jpg",
  detailImg01: "./images/detail04_1.jpg",
  detailImg02: "./images/detail04_2.jpg",
  detailImg03: "./images/detail04_3.jpg",
  detailImg04: "./images/detail04_4.jpg",
  detailImg05: "./images/detail04_5.jpg",
  colorImg01: "./images/best_03.jpg",
  colorImg02: "",
  colorImg03: "",
  relateImg: "./images/relateimg_04.jpg",
  relateImghover: "./images/relateimghover_04.jpg",
  relateName: "S/S COAST STATE T-SHIRT",
  relateColor: "WHITE",
  relatePrice: "98,000",
  recentImg: "",
  recentName: "",
  recentColor: "",
  recentPrice: "",
  description: "SINGLE KNEE SHORT는 면100% 'SMITH' 데님 소재의 워크 쇼츠입니다. 릴렉스드 핏에 밑위는 레귤러 웨이스트입니다. 전체적으로 트리플 스티칭 되있으며, 지퍼 플라이 형식입니다. 제품 측면에는 툴 포켓, 해머 루프가 있으며, 후면 포켓에 스퀘어 라벨이 부착되어 있습니다."
}, {
  id: "best_05",
  name: "코스탈 자켓 블랙/화이트",
  price: "248,000",
  code: "CA23SSJAJL00358002",
  accumulate: "",
  percent: "",
  mainImg: "./images/best_05.jpg",
  detailImg01: "./images/detail05_1.jpg",
  detailImg02: "./images/detail05_2.jpg",
  detailImg03: "./images/detail05_3.jpg",
  detailImg04: "./images/detail05_4.jpg",
  detailImg05: "./images/detail05_5.jpg",
  colorImg01: "./images/best_07.jpg",
  relateImg: "./images/relateimg_05.jpg",
  relateImghover: "./images/relateimghover_05.jpg",
  relateName: "ISLAND SWIM TRUNKS",
  relateColor: "KIWI/BLACK",
  relatePrice: "108,000",
  recentImg: "",
  recentName: "",
  recentColor: "",
  recentPrice: "",
  description: "COASTAL JACKET은 면100% 포플린 소재의 자켓입니다. 안감은 면 포플린 소재로 이루어져 있습니다. 후드는 팩커블 형태로 조절이 가능합니다. 정면은 지퍼와 스냅으로 여닫을 수 있습니다. 소매에 스크립트 자수가 있습니다."
}, {
  id: "best_06",
  name: "아일랜드 스윔 트렁크 마리나 프린트",
  price: "123,000",
  code: "CA23SSSMSS11208001",
  accumulate: "",
  percent: "",
  mainImg: "./images/best_06.jpg",
  detailImg01: "./images/detail06_1.jpg",
  detailImg02: "./images/detail06_2.jpg",
  detailImg03: "./images/detail06_3.jpg",
  detailImg04: "./images/detail06_4.jpg",
  detailImg05: "./images/detail06_5.jpg",
  relateImg: "./images/relateimg_06.jpg",
  relateImghover: "./images/relateimghover_06.jpg",
  relateName: "COAST STATE SWEATER",
  relateColor: "WHITE",
  relatePrice: "185,000",
  recentImg: "",
  recentName: "",
  recentColor: "",
  recentPrice: "",
  description: "COAST STATE SWEATER는 면100% 소재의 스웨터입니다. 솔기 부분들이 오픈되어 있는 디테일이 있으며, 그래픽 자카드가 있습니다."
},
//컬러추가
{
  id: "best_07",
  name: "코스탈 자켓 화이트/블랙",
  price: " 248,000",
  code: "CA23SSJAJL00266002",
  accumulate: "",
  percent: "",
  mainImg: "./images/best_07.jpg",
  detailImg01: "./images/detail07_1.jpg",
  detailImg02: "./images/detail07_2.jpg",
  detailImg03: "./images/detail07_3.jpg",
  detailImg04: "./images/detail07_4.jpg",
  detailImg05: "./images/detail07_5.jpg",
  relateImg: "./images/relateimg_07.jpg",
  relateImghover: "./images/relateimghover_07.jpg",
  relateName: "DOUBLE KNEE PANT FAIRFIELD",
  relateColor: "BLUE STONE WASHED",
  relatePrice: "158,000",
  recentImg: "",
  recentName: "",
  recentColor: "",
  recentPrice: "",
  description: "COASTAL JACKET은 면100% 포플린 소재의 자켓입니다. 안감은 면 포플린 소재로 이루어져 있습니다. 후드는 팩커블 형태로 조절이 가능합니다. 정면은 지퍼와 스냅으로 여닫을 수 있습니다. 소매에 스크립트 자수가 있습니다."
},
//컬러추가
{
  id: "best_08",
  name: "콜 카고 쇼츠 모라가 키위 가먼트 다이드",
  price: " 148,000",
  code: "CA23SSSTCA11139001",
  accumulate: "",
  percent: "",
  mainImg: "./images/best_08.jpg",
  detailImg01: "./images/detail08_1.jpg",
  detailImg02: "./images/detail08_2.jpg",
  detailImg03: "./images/detail08_3.jpg",
  detailImg04: "./images/detail08_4.jpg",
  detailImg05: "./images/detail08_5.jpg",
  relateImg: "./images/relateimg_07.jpg",
  relateImghover: "./images/relateimghover_07.jpg",
  relateName: "S/S SOUVENIR VALLEY T-SHIRT",
  relateColor: "NATURAL/BLACK",
  relatePrice: "95,000",
  recentImg: "",
  recentName: "",
  recentColor: "",
  recentPrice: "",
  description: "COASTAL JACKET은 면100% 포플린 소재의 자켓입니다. 안감은 면 포플린 소재로 이루어져 있습니다. 후드는 팩커블 형태로 조절이 가능합니다. 정면은 지퍼와 스냅으로 여닫을 수 있습니다. 소매에 스크립트 자수가 있습니다."
}
//컬러추가
];

//export default products
exports.best = best;
},{}],"js/product_import.js":[function(require,module,exports) {
"use strict";

var _products = require("./products");
var goodsOuter = document.querySelector('.goods_area .goods_outer');
var prWrap = document.querySelector('.wrap_ex .pr_wrap');
console.log(goodsOuter);
console.log(prWrap);
_products.products.forEach(function (product) {
  var element = document.createElement('div');
  element.setAttribute('class', 'goods');
  element.innerHTML = "\n            <div class=\"goods\">\n                <div class=\"goods_img\">\n                <img src=\"".concat(product.image, "\">\n                <img src=\"").concat(product.hoverImage, "\">\n                    <div class=\"goods_cart\">\n                        <i class=\"ri-shopping-cart-2-line\"></i>\n                    </div>\n                </div>\n\n                <div class=\"goods_info info_best\">\n                    <p>BEST</p>\n                </div>\n                <div class=\"goods_name\">\n                    <span>").concat(product.name, "</span>\n                </div>\n                <div class=\"goods_season\">\n                    <p>").concat(product.engName, "</p>\n                </div>\n                <div class=\"goods_price\">\n                    <span>\u20A9").concat(product.price, "</span>\n                </div>\n        </div><!-- //goods -->\n    ");
  goodsOuter.appendChild(element);
}); //TOP 상품목록

_products.products.forEach(function (best) {
  var element = document.createElement('div');
  element.setAttribute('class', 'detail_goods');
  element.innerHTML = "\n    <div class=\"pr_visual\">\n    <div class=\"pr_scode\">\n        <p>\uC2A4\uD0C0\uC77C\uCF54\uB4DC</p>\n        <span>".concat(best.code, "</span>\n    </div>\n    <div class=\"pr_img\">\n        ").concat(best.mainImg, "\n    </div>\n    <div class=\"pr_hoverimg\">\n        <ul>\n            <li><a href=\"\">").concat(best.detailImg01, "</a></li>\n            <li><a href=\"\">").concat(best.detailImg02, "</a></li>\n            <li><a href=\"\">").concat(best.detailImg03, "</a></li>\n            <li><a href=\"\">").concat(best.detailImg04, "</a></li>\n            <li><a href=\"\">").concat(best.detailImg05, "</a></li>\n        </ul>\n    </div><!-- //pr_hoverimg -->\n\n    <div class=\"wear_product\">\n        <div class=\"wp_title\">\n            <p>\uD568\uAED8 \uCC29\uC6A9\uD55C \uC0C1\uD488</p>\n        </div>\n        <div class=\"wp_img\">\n            ").concat(best.relateImg, "\n        </div>\n        <div class=\"wp_name\">\n            <p>").concat(best.relateName, "</p>\n        </div>\n        <div class=\"wp_color\">\n            <p>").concat(best.relateColor, "</p>\n        </div>\n        <div class=\"wp_price\">\n            <p>\u20A9").concat(best.relatePrice, "</p>\n        </div>\n    </div><!-- //wear_product -->\n\n    <div class=\"recently_product\">\n        <div class=\"rv\">\n            <div class=\"rv_title\">\n                <p>\uCD5C\uADFC \uBCF8 \uC0C1\uD488</p>\n            </div>\n            <div class=\"rv_img\">\n                ").concat(best.recentImg, "\n            </div>\n            <div class=\"rv_name\">\n                <p> ").concat(best.recentName, "</p>\n            </div>\n            <div class=\"rv_color\">\n                <p").concat(best.recentColor, "</p>\n            </div>\n            <div class=\"rv_price\">\n                <p>").concat(best.recentPrice, "</p>\n            </div>\n        </div><!-- //rv -->\n    </div><!-- //recently view -->\n</div><!-- //pr_visual -->\n\n<div class=\"pr_option\">\n    <div class=\"text_box\">\n        <div class=\"pr_name\">\n            <p>").concat(best.name, "</p>\n        </div><!-- //pr_name -->\n\n        <div class=\"pr_info pr_best\">\n            <p>BEST</p>\n        </div><!-- //pr_best -->\n\n        <div class=\"pr_sns\">\n            <div class=\"rating\">\n                <p><i class=\"fas fa-star\"></i></p>\n                <p><i class=\"fas fa-star\"></i></p>\n                <p><i class=\"fas fa-star\"></i></p>\n                <p><i class=\"fas fa-star\"></i></p>\n                <p><i class=\"fas fa-star\"></i></p>\n                <p>5.0</p>\n                <span>/5</span>\n            </div>\n            <div class=\"sns\">\n                <div class=\"save\">\n                    <i class=\"far fa-heart\"></i>\n                </div>\n                <div class=\"facebook\">\n                    <i class=\"fab fa-facebook-f\"></i>\n                </div>\n                <div class=\"twitter\">\n                    <i class=\"fab fa-twitter\"></i>\n                </div>\n            </div>\n        </div><!-- //pr_sns-->\n\n        <div class=\"pr_price\">\n            <div class=\"price_orgin\">\n                <p>").concat(best.price, "</p>\n            </div>\n            <div class=\"accumulate\">\n                <p>\uC801\uB9BD \u20A9").concat(best.accumulate, "</p>\n                <p>(").concat(best.percent, "%)</p>\n            </div>\n        </div><!-- //pr_price -->\n\n        <div class=\"delivery_info\">\n            <div class=\"info_box\">\n                <div class=\"info_title\">\n                    <p>\uBC30\uC1A1\uC815\uBCF4</p>\n                </div>\n                <div class=\"info_txt\">\n                    <p>10\uB9CC\uC6D0 \uC774\uD558 3,000\uC6D0, 10\uB9CC\uC6D0 \uC774\uC0C1 \uBB34\uB8CC\uBC30\uC1A1\n                        <a href=\"\"><i class=\"far fa-question-circle\"></i></a>\n                    </p>\n                    <p><span>2\uC2DC \uC774\uC804 \uC8FC\uBB38\uC2DC \uB0B4\uC77C(X)\uB3C4\uCC29 \uC608\uC815</span>\u3163\uB300\uD55C\uD1B5\uC6B4</p>\n                </div>\n            </div>\n\n            <div class=\"credit_box\">\n                <div class=\"credit_title\">\n                    <p>\uBB34\uC774\uC790\uD560\uBD80</p>\n                </div>\n                <div class=\"credit_txt\">\n                    <p>\uCD5C\uB300 6\uAC1C\uC6D4<span>(\uB2E8, \uC77C\uC2DC\uBD88 \uD560\uC778 \uBC0F \uBC95\uC778 \uCE74\uB4DC \uC0AC\uC6A9 \uBD88\uAC00)</span></p>\n                </div>\n            </div>\n        </div><!-- //delivery info -->\n\n    </div><!-- //text_box -->\n\n    <div class=\"pr_color\">\n        <div class=\"color_title\">\n            <p>\uC0C9\uC0C1</p>\n        </div>\n        <div class=\"color_wrapper\">\n            <div class=\"color\">\n                <input id=\"color_pr_01\">\n                <label for=\"color_pr_01\">\n                    ").concat(best.colorImg01, "\n                </label>\n            </div><!-- //color -->\n            <div class=\"color\">\n                <input id=\"color_pr_02\">\n                <label for=\"color_pr_02\">\n                    ").concat(best.colorImg02, "\n                </label>\n            </div><!-- //size -->\n            <div class=\"color\">\n                <input id=\"color_pr_03\">\n                <label for=\"color_pr_03\">\n                    ").concat(best.colorImg03, "\n                </label>\n            </div><!-- //color -->\n        </div><!-- //color_wrapper -->\n    </div><!-- //pr_color -->\n\n    <div class=\"pr_size\">\n        <div class=\"size_title\">\n            <p>\uC0AC\uC774\uC988</p>\n        </div>\n        <div class=\"size_wrapper\">\n            <div class=\"size\">\n                <button class=\"size_btn\">\n                    <p>XS</p>\n                </button>\n            </div>\n            <div class=\"size\">\n                <button class=\"size_btn\">\n                    <p>S</p>\n                </button>\n            </div>\n            <div class=\"size\">\n                <button class=\"size_btn\">\n                    <p>M</p>\n                </button>\n            </div>\n            <div class=\"size\">\n                <button class=\"size_btn\">\n                    <p>L</p>\n                </button>\n            </div>\n            <div class=\"size\">\n                <button class=\"size_btn last_btn\">\n                    <p>XL</p>\n                </button>\n            </div>\n        </div>\n    </div><!-- //pr_size -->\n\n    <div class=\"n_pay\">\n        <div class=\"n_pay_left_area\">\n            <div class=\"n_pay_img\">\n                <img src=\"./images/n_pay_logo.png\" alt=\"\uB124\uC774\uBC84\uD398\uC774\uB85C\uACE0\">\n            </div>\n            <p>\uB124\uC774\uBC84\uD398\uC774 \uD3EC\uC778\uD2B8 \uD61C\uD0DD</p>\n        </div>\n        <span>\uCD5C\uB300 3%\uC801\uB9BD</span>\n    </div>\n\n    <div class=\"pr_buy\">\n        <div class=\"size_box\">\n            <button class=\"size_btn\">\n                <i class=\"ri-t-shirt-line\"></i>\n                <i class=\"fas fa-arrows-alt-v\"></i>\n                \uACE0\uAC1D\uB2D8 \uC0AC\uC774\uC988\uB97C \uCC3E\uC544\uBCF4\uC138\uC694</button>\n        </div>\n        <div class=\"btn_box\">\n            <div class=\"cart_box\">\n                <button class=\"cart_btn\">\uC7A5\uBC14\uAD6C\uB2C8</button>\n            </div>\n            <div class=\"buy_box\">\n                <button class=\"buy_btn\">\uAD6C\uB9E4\uD558\uAE30</button>\n            </div>\n        </div>\n        <p class=\"p_txt\">*\uC8FC\uBB38/\uBC30\uC1A1/\uBC18\uD488 \uB4F1 \uC77C\uBC18 \uBB38\uC758\uB294 1:1\uBB38\uC758\uB97C \uC774\uC6A9\uD574 \uC8FC\uC2DC\uAE30 \uBC14\uB78D\uB2C8\uB2E4.</p>\n    </div><!-- //pr_buy -->\n</div><!-- //pr_option -->\n    ");
}); //BEST 상품 디테일페이지
},{"./products":"js/products.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "52699" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/product_import.js"], null)
//# sourceMappingURL=/product_import.1dcff1fc.js.map