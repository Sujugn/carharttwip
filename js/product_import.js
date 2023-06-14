import {products, best} from './products'

const goodsOuter = document.querySelector('.goods_area .goods_outer')
const prWrap = document.querySelector('.wrap_ex .pr_wrap')

console.log(goodsOuter)
console.log(prWrap)

products.forEach((product) => {
    let element = document.createElement('div')
    element.setAttribute('class', 'goods')

    element.innerHTML = `
            <div class="goods">
                <div class="goods_img">
                <img src="${product.image}">
                <img src="${product.hoverImage}">
                    <div class="goods_cart">
                        <i class="ri-shopping-cart-2-line"></i>
                    </div>
                </div>

                <div class="goods_info info_best">
                    <p>BEST</p>
                </div>
                <div class="goods_name">
                    <span>${product.name}</span>
                </div>
                <div class="goods_season">
                    <p>${product.engName}</p>
                </div>
                <div class="goods_price">
                    <span>₩${product.price}</span>
                </div>
        </div><!-- //goods -->
    `
    goodsOuter.appendChild(element);
});//TOP 상품목록


products.forEach((best)=>{
    let element = document.createElement('div')
    element.setAttribute('class','detail_goods')

    element.innerHTML = `
    <div class="pr_visual">
    <div class="pr_scode">
        <p>스타일코드</p>
        <span>${best.code}</span>
    </div>
    <div class="pr_img">
        ${best.mainImg}
    </div>
    <div class="pr_hoverimg">
        <ul>
            <li><a href="">${best.detailImg01}</a></li>
            <li><a href="">${best.detailImg02}</a></li>
            <li><a href="">${best.detailImg03}</a></li>
            <li><a href="">${best.detailImg04}</a></li>
            <li><a href="">${best.detailImg05}</a></li>
        </ul>
    </div><!-- //pr_hoverimg -->

    <div class="wear_product">
        <div class="wp_title">
            <p>함께 착용한 상품</p>
        </div>
        <div class="wp_img">
            ${best.relateImg}
        </div>
        <div class="wp_name">
            <p>${best.relateName}</p>
        </div>
        <div class="wp_color">
            <p>${best.relateColor}</p>
        </div>
        <div class="wp_price">
            <p>₩${best.relatePrice}</p>
        </div>
    </div><!-- //wear_product -->

    <div class="recently_product">
        <div class="rv">
            <div class="rv_title">
                <p>최근 본 상품</p>
            </div>
            <div class="rv_img">
                ${best.recentImg}
            </div>
            <div class="rv_name">
                <p> ${best.recentName}</p>
            </div>
            <div class="rv_color">
                <p${best.recentColor}</p>
            </div>
            <div class="rv_price">
                <p>${best.recentPrice}</p>
            </div>
        </div><!-- //rv -->
    </div><!-- //recently view -->
</div><!-- //pr_visual -->

<div class="pr_option">
    <div class="text_box">
        <div class="pr_name">
            <p>${best.name}</p>
        </div><!-- //pr_name -->

        <div class="pr_info pr_best">
            <p>BEST</p>
        </div><!-- //pr_best -->

        <div class="pr_sns">
            <div class="rating">
                <p><i class="fas fa-star"></i></p>
                <p><i class="fas fa-star"></i></p>
                <p><i class="fas fa-star"></i></p>
                <p><i class="fas fa-star"></i></p>
                <p><i class="fas fa-star"></i></p>
                <p>5.0</p>
                <span>/5</span>
            </div>
            <div class="sns">
                <div class="save">
                    <i class="far fa-heart"></i>
                </div>
                <div class="facebook">
                    <i class="fab fa-facebook-f"></i>
                </div>
                <div class="twitter">
                    <i class="fab fa-twitter"></i>
                </div>
            </div>
        </div><!-- //pr_sns-->

        <div class="pr_price">
            <div class="price_orgin">
                <p>${best.price}</p>
            </div>
            <div class="accumulate">
                <p>적립 ₩${best.accumulate}</p>
                <p>(${best.percent}%)</p>
            </div>
        </div><!-- //pr_price -->

        <div class="delivery_info">
            <div class="info_box">
                <div class="info_title">
                    <p>배송정보</p>
                </div>
                <div class="info_txt">
                    <p>10만원 이하 3,000원, 10만원 이상 무료배송
                        <a href=""><i class="far fa-question-circle"></i></a>
                    </p>
                    <p><span>2시 이전 주문시 내일(X)도착 예정</span>ㅣ대한통운</p>
                </div>
            </div>

            <div class="credit_box">
                <div class="credit_title">
                    <p>무이자할부</p>
                </div>
                <div class="credit_txt">
                    <p>최대 6개월<span>(단, 일시불 할인 및 법인 카드 사용 불가)</span></p>
                </div>
            </div>
        </div><!-- //delivery info -->

    </div><!-- //text_box -->

    <div class="pr_color">
        <div class="color_title">
            <p>색상</p>
        </div>
        <div class="color_wrapper">
            <div class="color">
                <input id="color_pr_01">
                <label for="color_pr_01">
                    ${best.colorImg01}
                </label>
            </div><!-- //color -->
            <div class="color">
                <input id="color_pr_02">
                <label for="color_pr_02">
                    ${best.colorImg02}
                </label>
            </div><!-- //size -->
            <div class="color">
                <input id="color_pr_03">
                <label for="color_pr_03">
                    ${best.colorImg03}
                </label>
            </div><!-- //color -->
        </div><!-- //color_wrapper -->
    </div><!-- //pr_color -->

    <div class="pr_size">
        <div class="size_title">
            <p>사이즈</p>
        </div>
        <div class="size_wrapper">
            <div class="size">
                <button class="size_btn">
                    <p>XS</p>
                </button>
            </div>
            <div class="size">
                <button class="size_btn">
                    <p>S</p>
                </button>
            </div>
            <div class="size">
                <button class="size_btn">
                    <p>M</p>
                </button>
            </div>
            <div class="size">
                <button class="size_btn">
                    <p>L</p>
                </button>
            </div>
            <div class="size">
                <button class="size_btn last_btn">
                    <p>XL</p>
                </button>
            </div>
        </div>
    </div><!-- //pr_size -->

    <div class="n_pay">
        <div class="n_pay_left_area">
            <div class="n_pay_img">
                <img src="./images/n_pay_logo.png" alt="네이버페이로고">
            </div>
            <p>네이버페이 포인트 혜택</p>
        </div>
        <span>최대 3%적립</span>
    </div>

    <div class="pr_buy">
        <div class="size_box">
            <button class="size_btn">
                <i class="ri-t-shirt-line"></i>
                <i class="fas fa-arrows-alt-v"></i>
                고객님 사이즈를 찾아보세요</button>
        </div>
        <div class="btn_box">
            <div class="cart_box">
                <button class="cart_btn">장바구니</button>
            </div>
            <div class="buy_box">
                <button class="buy_btn">구매하기</button>
            </div>
        </div>
        <p class="p_txt">*주문/배송/반품 등 일반 문의는 1:1문의를 이용해 주시기 바랍니다.</p>
    </div><!-- //pr_buy -->
</div><!-- //pr_option -->
    `
})//BEST 상품 디테일페이지

