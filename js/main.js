// "use strict";


// // ハンバーガーメニュー
const blockMenu = document.getElementById('block-menu')
const ham = document.getElementById('ham')

ham.addEventListener('click', () => {
    ham.classList.toggle('active');
})

ham.addEventListener('click', () => {
    blockMenu.classList.toggle('active');
})

// // スライドショー
// // let images = ['img/salonBeppu.png', 'img/codevillage.png', 'img/myblog.png', 'img/premil.png'];
// // let current = 0;
// // let prev = document.getElementById('prev');
// // let next = document.getElementById('next');
// // let main_image = document.getElementById('main_image');


// // prev.addEventListener('click', function () {
// //     current = current === 0 ? images.length - 1 : current - 1;
// //     console.log(current);
// //     main_image.src = images[current];
// // });

// // next.addEventListener('click', function () {
// //     current = current === images.length - 1 ? 0 : current + 1;
// //     main_image.src = images[current];
// // });

// // スクロール表示
var scrollAnimationElm = document.querySelectorAll('.sa');
var scrollAnimationFunc = function () {
    for (var i = 0; i < scrollAnimationElm.length; i++) {
        var triggerMargin = 300;
        if (window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin) {
            scrollAnimationElm[i].classList.add('show');
        }
    }
}
window.addEventListener('load', scrollAnimationFunc);
window.addEventListener('scroll', scrollAnimationFunc);


// // header
function init() {
    //     // スクロールして何ピクセルでアニメーションさせるか
    var px_change = 500;

    //     // スクロールのイベントハンドラを登録
    window.addEventListener('scroll', function (e) {
        //         // 変化するポイントまでスクロールしたらクラスを追加
        if ($(window).scrollTop() > px_change) {
            $("header").addClass("smaller");

            //             // 変化するポイント以前であればクラスを削除
        } else if ($("header").hasClass("smaller")) {
            $("header").removeClass("smaller");
        }
    });
}
window.onload = init();

// // テキストランダム表示

// // (function () {

// //     var node = document.querySelector('#letter');
// //     var str = node.textContent.split('');
// //     var types = [];
// //     var step = 8;
// //     var fps = 24;

// //     for (var i = 0; i < str.length; i++) {
// //         var ch = str[i];
// //         if (ch === ' ') {
// //             types[i] = 'space';
// //         } else {
// //             types[i] = 'symbol';
// //         }
// //     }

// //     node.textContent = '';

// // ランダム文字を織り交ぜながら一文字ずつ表示させる

// // var ticker = function (start) {
// //     var strClone = str.slice(0);
// //     if (start > str.length) {
// //         // 全ての文字を表示したので終了
// //         return;
// //     }
// //     for (var i = Math.max(start, 0); i < str.length; i++) {
// //         if (i < start + step) {
// //             strClone[i] = randomChar(types[i]);
// //         } else {
// //             strClone[i] = '';
// //         }
// //     }
// //     node.textContent = strClone.join('');
// //     return setTimeout(function () {
// //         ticker(start + 1);
// //     }, 1000 / fps);
// // };

// // ランダム文字を生成して返す
// // 表示する文字がスペースの時は何も返さない
// //     var randomChar = function (type) {
// //         var pool;
// //         switch (type) {
// //             case 'symbol':
// //                 pool = ',.?/\\(^)![]{}*&^%$#\'"';
// //                 break;
// //             default:
// //                 pool = '';
// //         }
// //         var arr = pool.split('');
// //         return arr[Math.floor(Math.random() * arr.length)];
// //     };

// //     ticker(step * -1);

// // }).call(this);
// // [/javascript]

// //     < ol >
// //     <li>表示したい文章を一文字単位の配列にします <em>(※ 4行目)</em></li>
// //     <li>その配列をループ処理にかけて格納されてる文字が半角スペースか否かをもう一つの配列で管理します。 <em>(※ 9 ~ 16行目)</em></li>
// // </ol >
// // <p>ここまでで下準備が出来ました。</p>

// // <p>ランダムな文字列を織り交ぜながら一文字ずつ正しい文字を表示していきます。表示する文章の内容は <tt>str</tt> という変数に格納されていますが、実際に画面上に表示するのは22行目で作成した <tt>strClone</tt> という str を複製して作られた変数の中身です。strClone には画面に表示したい文章が一文字単位の配列として格納されています。この配列の一部分を対してランダムな文字列で上書きしていき、ランダム文字から後ろは空欄で消し、最後にその内容を画面に表示します。</p>
// // <p>ランダム文字での上書きは配列の先頭から行いますが、 <tt>ticker</tt>メソッドを再帰的に呼び出す度に上書き開始位置をひとつずつ後ろにずらしていくことで、あたかも一文字ずつ画面に表示されていくように見せることが出来ます。</p>

// // <h3>Step.2 |  プラグイン（クラス）化してみる</h3>
// // <p>基本ロジックは出来たので、クラス化してオプションパラメータを渡せるようにしてみます。</p>

// // <h5>LetterTicker.js</h5>

// // <p>ランダム表示する文字列の長さと FPS だけではつまらないので、表示する文章をターゲットとなるDOMに予め記述されたものだけでなく、任意の文章で上書きできるように <tt>text</tt> を渡せるようにしました。さらによりプラグインらしくするために表示終了後に実行させたいコールバック関数も渡せるようにしました。</p>
// // <p>使い方は以下のとおりです。</p>

// // letterTicker = new LetterTicker('.letter', {
// //     callback: function () {
// //         return console.log(txt);
// //     },
// //     step: 8,
// //     fps: 60,
// //     text: 'Hello, world!!!'

$(function () {
    //     // ナビゲーションのリンクを指定
    var navLink = $('#gnav li a');

    //     // 各コンテンツのページ上部からの開始位置と終了位置を配列に格納しておく
    var contentsArr = new Array();
    for (var i = 0; i < navLink.length; i++) {
        //         // コンテンツのIDを取得
        var targetContents = navLink.eq(i).attr('href');
        //         // ページ内リンクでないナビゲーションが含まれている場合は除外する
        if (targetContents.charAt(0) == '#') {
            //             // ページ上部からコンテンツの開始位置までの距離を取得
            var targetContentsTop = $(targetContents).offset().top;
            //             // ページ上部からコンテンツの終了位置までの距離を取得
            var targetContentsBottom = targetContentsTop + $(targetContents).outerHeight(true) - 1;
            //             // 配列に格納
            contentsArr[i] = [targetContentsTop, targetContentsBottom]
        }
    };

    //     // 現在地をチェックする
    function currentCheck() {
        //         // 現在のスクロール位置を取得
        var windowScrolltop = $(window).scrollTop();
        for (var i = 0; i < contentsArr.length; i++) {
            //             // 現在のスクロール位置が、配列に格納した開始位置と終了位置の間にあるものを調べる
            if (contentsArr[i][0] <= windowScrolltop && contentsArr[i][1] >= windowScrolltop) {
                //                 // 開始位置と終了位置の間にある場合、ナビゲーションにclass="current"をつける
                navLink.removeClass('current');
                navLink.eq(i).addClass('current');
                i == contentsArr.length;
            }
        };
    }

    //     // ページ読み込み時とスクロール時に、現在地をチェックする
    $(window).on('load scroll', function () {
        currentCheck();
    });

    //     // ナビゲーションをクリックした時のスムーズスクロール
    navLink.click(function () {
        $('html,body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 300);
        return false;
    })
});

$(function () {
    $('a[href^="#"]').click(function () {
        var speed = 500;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({ scrollTop: position }, speed, "swing");
        return false;
    });
});

jQuery(function () {
    var appear = false;
    var pagetop = $('#page_top');
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {  //100pxスクロールしたら
            if (appear == false) {
                appear = true;
                pagetop.stop().animate({
                    'bottom': '300px' //下から50pxの位置に
                }, 300); //0.3秒かけて現れる
            }
        } else {
            if (appear) {
                appear = false;
                pagetop.stop().animate({
                    'bottom': '-50px' //下から-50pxの位置に
                }, 300); //0.3秒かけて隠れる
            }
        }
    });
    pagetop.click(function () {
        $('body, html').animate({ scrollTop: 0 }, 500); //0.5秒かけてトップへ戻る
        return false;
    });
});

