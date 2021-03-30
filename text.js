<div>{{ total }} photos in total</div>
    

<div class="image-gallery__item">
        <a class="d-inline-block" href="img/kitten1.jpg">
          <img class="img-fluid" src="img/gallery-thumbnail/kitten1.jpg" width="150" height="150" alt="シェパード">
        </a>
      </div>
      
      <div class="image-gallery__item">
        <a class="d-inline-block" href="img/kitten2.jpg">
          <img class="img-fluid" src="img/gallery-thumbnail/kitten2.jpg" width="150" height="150" alt="レトリバー">
        </a>
      </div>
      <div class="image-gallery__item">
        <a class="d-inline-block" href="img/kitten3.jpg">
          <img class="img-fluid" src="img/gallery-thumbnail/kitten3.jpg" width="150" height="150" alt="プードル">
        </a>
      </div>
      <div class="image-gallery__item">
        <a class="d-inline-block" href="img/kitten4.jpg">
          <img class="img-fluid" src="img/gallery-thumbnail/kitten4.jpg" width="150" height="150" alt="ポメラニアン">
        </a>
      </div>
      <div class="image-gallery__item">
        <a class="d-inline-block" href="img/puppy1.jpg">
          <img class="img-fluid" src="img/gallery-thumbnail/puppy1.jpg" width="150" height="150" alt="アメリカンショートヘア">
        </a>
      </div>
      <div class="image-gallery__item">
        <a class="d-inline-block" href="img/puppy2.jpg">
          <img class="img-fluid" src="img/gallery-thumbnail/puppy2.jpg" width="150" height="150" alt="スコティッシュフォールド">
        </a>
      </div>
      <div class="image-gallery__item">
        <a class="d-inline-block" href="img/puppy3.jpg">
          <img class="img-fluid" src="img/gallery-thumbnail/puppy3.jpg" width="150" height="150" alt="ベンガル">
        </a>
      </div>
      <div class="image-gallery__item">
        <a class="d-inline-block" href="img/puppy4.jpg">
          <img class="img-fluid" src="img/gallery-thumbnail/puppy4.jpg" width="150" height="150" alt="ロシアンブルー">
        </a>
      </div>

methods: {
    fetchImagesFromFlickr(event) {
      const searchText = event.target.elements.search.value;

      // APIからデータを取得中で、なおかつ検索テキストが前回の検索時と同じ場合、再度リクエストしない
      if (this.isFetching && searchText === this.prevSearchText) {
        return;
      }

      // Vueインスタンスのデータとして、検索テキストを保持しておく
      this.prevSearchText = searchText;

      this.toFetching();

      const url = getRequestURL(searchText);
      $.getJSON(url, (data) => {
        if (data.stat !== 'ok') {
          this.toFailed();
          return;
        }

        const fetchedPhotos = data.photos.photo;

        // 検索テキストに該当する画像データがない場合
        if (fetchedPhotos.length === 0) {
          // TODO: メソッドを呼び出して、現在の状態を「検索テキストに該当する画像データがない状態」に変更する
          this. toNotFound();
          return;
        }

        this.photos = fetchedPhotos.map(photo => ({
          id: photo.id,
          imageURL: getFlickrImageURL(photo, 'q'),
          pageURL: getFlickrPageURL(photo),
          text: getFlickrText(photo),
        }));
        this.toFound();
      }).fail(() => {
        this.toFailed();
      });
    }
  }

const urlcat = `https://api.flickr.com/services/rest/?${parameters}`;
console.log(urlcat);

const urldog = `https://api.flickr.com/services/rest/?${parametersdog}`;
console.log(urldog);

 // 猫の画像を検索して表示
$.getJSON(urlcat, (data) => {
  console.log(data);

  // データが取得できなかった場合
  if (data.stat !== 'ok') {
    console.error('データの取得に失敗しました。');
    return;
  }
  
  // BootstrapのTooltipを適用
  $('[data-toggle="tooltip"]').tooltip();
});
 
$.getJSON(urldog, (data) => {
  console.log(data);

  // データが取得できなかった場合
  if (data.stat !== 'ok') {
    console.error('データの取得に失敗しました。');
    return;
  }

 // BootstrapのTooltipを適用
  $('[data-toggle="tooltip"]').tooltip();

});  
  },
});

 
 // 空の<div>を作る
  const $div = $('<div>');
  

  // ヒット件数
  $div.append(`<div>${data.photos.total} photos in total</div>`);
 
  // $divを#mainに追加する
  
  $div.appendTo('.image-gallery');

 // 空の<div>を作る
  const $div = $('<div>');
  

  // ヒット件数
  $div.append(`<div>${data.photos.total} photos in total</div>`);

  for (let i = 0; i < data.photos.photo.length; i++) {
    const photo = data.photos.photo[i];
    const photoText = getFlickrText(photo);
    
    // $divに <a href="..." ...><img src="..." ...></a> を追加する
   $div.append(
      $('<a>', {
        href: getFlickrPageURL(photo),
        class: 'd-inline-block',
        target: '_blank', // リンクを新規タブで開く
        'data-toggle': 'tooltip',
        'data-placement': 'bottom',
        title: photoText,
      }).append(
        $('<img>', {
          src: getFlickrImageURL(photo, 'q'),
          width: 150,
          height: 150,
          alt: photoText,
        }),
      ),
    );
  }
 
  // $divを#mainに追加する
  
  $div.appendTo('.image-gallery');
  


 const parameterscat = $.param({
  method: 'flickr.photos.search',
  api_key: apiKey,
  text: 'cat', // 検索テキスト
  sort: 'interestingness-desc', // 興味深さ順
  per_page: 4, // 取得件数
  license: '4', // Creative Commons Attributionのみ
  extras: 'owner_name,license', // 追加で取得する情報
  format: 'json', // レスポンスをJSON形式に
  nojsoncallback: 1, // レスポンスの先頭に関数呼び出しを含めない
});
 
  for (let i = 0; i < data.photos.photo.length; i++) {
    const photo = data.photos.photo[i];
    const photoText = getFlickrText(photo);
    
    // $divに <a href="..." ...><img src="..." ...></a> を追加する
   $div.append(
      $('<a>', {
        href: getFlickrPageURL(photo),
        class: 'd-inline-block',
        target: '_blank', // リンクを新規タブで開く
        'data-toggle': 'tooltip',
        'data-placement': 'bottom',
        title: photoText,
      }).append(
        $('<img>', {
          src: getFlickrImageURL(photo, 'q'),
          width: 150,
          height: 150,
          alt: photoText,
        }),
      ),
    );
  }
   
     Vue.directive('my-directive', {
  bind: function (el, binding) {
    // 準備のための作業をします
    // e.g. イベントリスナを追加したり、一回だけ実行が必要なコストのかかる処理を行う
     el.style.display = 'none';
  }
   



`#message-id-${messageId}`

`#favorite-message-id-${messageId}`
 $(`${messageId}__favorite-link`)

$(`.message__body-${messageID}`).change();

var messageId = favorites;
  var favorite = currentUID;
  var messageId = favorites;
  var favorite = currentUID;
 .then(() => {
      
    })
    .catch((error) => {
      console.error('ルーム作成に失敗:', error);
    })

 text: "お久しぶり";
          time: "1471308703269";
          uid: "NR4cv10zTbUACS23U01XRITdmy13";

var dbdata.favotites = {};
//3.4はコレを参考に書く
const tabsContainer = $(`a[href='#${tabName}']`).closest('.tabs');
  // .tabs__menu liのうちtabNameに該当するものにだけactiveクラスを付ける
  tabsContainer.find('.tabs__menu li').removeClass('active');
  tabsContainer
    .find(`.tabs__menu a[href='#${tabName}']`)
    .parent('li')
    .addClass('active');
 firebase
  .database()
  .ref(`dbdata.favorites/${messageId}`)
  .remove();

const dbdata.favorites = firebase
  .database()
  .ref(`favorites/${currentUID}`)
  .orderByChild('createdAt');

 $('.tabs-menu > div').removeClass('active');


  <!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/8.0.0/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/8.0.0/firebase-analytics.js"></script>
  

 var firebaseConfig = {
    apiKey: "AIzaSyCXOi67rSildUQjlX-s4mpnReUAkY9Mq88",
    authDomain: "realtime-chat-5b0c2.firebaseapp.com",
    databaseURL: "https://realtime-chat-5b0c2.firebaseio.com",
    projectId: "realtime-chat-5b0c2",
    storageBucket: "realtime-chat-5b0c2.appspot.com",
    messagingSenderId: "782773692391",
    appId: "1:782773692391:web:0426d81a645d625446bf42",
    measurementId: "G-T1KVJ76DW4"
  };
  // Initialize Firebase
  
        apiKey: "53d5bef78a6de4899137254d64610b01",
      authDomain: "realtime-chat-xxxxx.firebaseapp.com",
      databaseURL: "https://realtime-chat-xxxxx.firebaseio.com",
      projectId: 'realtime-chat-xxxx',
      storageBucket: "realtime-chat-xxxxx.appspot.com",

firebase.initializeApp(firebaseConfig);
  </script

 messagingSenderId: "782773692391",
    appId: "1:782773692391:web:0426d81a645d625446bf42",
    measurementId: "G-T1KVJ76DW4"
  const $divTag = createBookDiv(bookId, bookData);
  $(`$div{gallery} a img`)
  
   const gallery = $('.image-gallery');
    gallery.addEventListener.append('image-gallery-item');
 
 // Flickr API key
const apiKey = 'ここにAPIキーを入れてください';
   

// d-inline-blockクラスの付いた要素にMagnific Popupを適用
$('.d-inline-block').magnificPopup({
  type: 'image',
  gallery: { enabled: true },

  /**
   * ポップアップに適用されるクラス。
   * ここではフェードイン・アウト用のmfp-fadeクラスを適用。
   */
  mainClass: 'mfp-fade',

  // ポップアップが非表示になるまでの待ち時間
  removalDelay: 300,
});


 <div class="image-gallery__item">
        <a class="d-inline-block" href="img/kitten1.jpg">
          <img class="img-fluid" src="img/gallery-thumbnail/kitten1.jpg" width="150" height="150" alt="アメリカンショートヘア">
        </a>
      </div>
      <div class="image-gallery__item">
        <a class="d-inline-block" href="img/kitten2.jpg">
          <img class="img-fluid" src="img/gallery-thumbnail/kitten2.jpg" width="150" height="150" alt="スコティッシュフォールド">
        </a>
      </div>
      <div class="image-gallery__item">
        <a class="d-inline-block" href="img/kitten3.jpg">
          <img class="img-fluid" src="img/gallery-thumbnail/kitten3.jpg" width="150" height="150" alt="ベンガル">
        </a>
      </div>
      <div class="image-gallery__item">
        <a class="d-inline-block" href="img/kitten4.jpg">
          <img class="img-fluid" src="img/gallery-thumbnail/kitten4.jpg" width="150" height="150" alt="ロシアンブルー">
        </a>
      </div>
      <div class="image-gallery__item">
        <a class="d-inline-block" href="img/puppy1.jpg">
          <img class="img-fluid" src="img/gallery-thumbnail/puppy1.jpg" width="150" height="150" alt="シェパード">
        </a>
      </div>
      <div class="image-gallery__item">
        <a class="d-inline-block" href="img/puppy2.jpg">
          <img class="img-fluid" src="img/gallery-thumbnail/puppy2.jpg" width="150" height="150" alt="レトリバー">
        </a>
      </div>
      <div class="image-gallery__item">
        <a class="d-inline-block" href="img/puppy3.jpg">
          <img class="img-fluid" src="img/gallery-thumbnail/puppy3.jpg" width="150" height="150" alt="プードル">
        </a>
      </div>
      <div class="image-gallery__item">
        <a class="d-inline-block" href="img/puppy4.jpg">
          <img class="img-fluid" src="img/gallery-thumbnail/puppy4.jpg" width="150" height="150" alt="ポメラニアン">
        </a>
      </div>
   


// d-inline-blockクラスの付いた要素にMagnific Popupを適用
$('.d-inline-block').magnificPopup({
  type: 'image',
  gallery: { enabled: true },

  /**
   * ポップアップに適用されるクラス。
   * ここではフェードイン・アウト用のmfp-fadeクラスを適用。
   */
  mainClass: 'mfp-fade',

  // ポップアップが非表示になるまでの待ち時間
  removalDelay: 300,
});



$('.animated').on('click', (e) => {
   const fadeInUp = $(e.taget).attr('');
 });

$(`.tabs-menu [id = "${selector}"]`).addClass('active');
   if (selector === 'tab-menu-a') {
    $('#tabs-a').show();
   } else if (selector === 'tab-menu-b') {
    $('#tabs-b').show();
   } else  {
    $('#tabs-c').show();
   }
};


 
$('.animated').waypoint({
  handler(direction) {
    if (direction === 'down') {
      $(this.element).addClass('fadeInUp');
      this.destroy();
    } else(direction ==='up') {
      $(this.element).addClass('fadeOutUp');
      this.destroy();
    },
  
  /**
   * 要素の上端が画面のどの位置に来たときにhandlerメソッドを呼び出すか指定
   * 0%なら画面の一番上、100%なら画面の一番下に来たときに呼び出される
   */
  offset: '50%',
  }
});


   <!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">

    <title>お問い合わせ | サンプル株式会社</title>
</head>

<body>
    <header>
        <!-- 576px以上の画面幅のとき、メニューを表示する（それ未満なら折りたたむ）指定を追加 -->
        <nav class="navbar navbar-expand-sm navbar-light bg-light">
            <!-- 画面左上に表示するサイト名のリンクとして適切な表示をするための指定を追加 -->
            <a href="#" class="navber-brand">サンプル株式会社</a>

            <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#nav-bar">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="nav-bar">
                <ul class="navbar-nav">
                    <li class="nav-item"><a href="#" class="nav-link">会社情報</a></li>
                    <li class="nav-item"><a href="#" class="nav-link">ニュース</a></li>
                    <li class="nav-item"><a href="#" class="nav-link">採用情報</a></li>
                   <!-- お問い合わせページを表示していることをわかりやすくする設定を追加 -->
                    <li class="nav-item"><a href="#" class="nav-link active">お問い合わせ</a></li>
                </ul>
            </div>
        </nav>
    </header>
    <div class="container">
        <h1 class="mt-4 pb-4 border-bottom">お問い合わせ</h1>

    <!-- グリッドを使うための指定を追加 -->
        <div class="row mt-4">
           <!-- 576px以上の画面幅の���き、左側は3つ分のカラム幅で表示する指定を追加 -->
            <div class="col-sm-3">
                <!-- 電話に関するFont Awesomeのアイコンを追加 -->
                <i class="https://fontawesome.com/icons/phone?style=solid#"></i> <strong>お電話：</strong>
            
            <script src="https://fontawesome.com/icons/phone?style=solid#"></script>
            </div>
            <script defer src="https://use.fontawesome.com/releases/v5.7.2/js/all.js"></script>
            <!-- 576px以上の画面幅のとき、右側は9つ分のカラム幅で表示する指定を追加 -->
            <div class="col-sm-9">
                <p>該当する内容の電話番号におかけください。</p>
               <!-- テーブルの装飾を適用する指定を追加 -->
                <div class="form-group">
                <!-- さらにテーブルへ枠を追加する指定、行ごとの背景色が交互に変わる指定を追加 -->
                <table class="table table-striped table-borderd mt-4">
                    <thead>
                        <tr> 
                            <th>内容</th>
                            <th>電話番号</th>
                            <th>担当</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>サービスに関するお問い合わせ</td>
                            <td>03-0000-0000</td>
                            <td>煌木</td>
                        </tr>
                        <tr>
                            <td>採用に関するお問い合わせ</td>
                            <td>03-0000-0001</td>
                            <td>煌田</td>
                        </tr>
                        <tr>
                            <td>サービスに関するお問い合わせ</td>
                            <td>03-0000-0002</td>
                            <td>煌山</td>
                        </tr>
                    </tbody>
                </table>
                </div>
                <!-- カードの装飾を適用 -->
                <div class="card">
                   <!-- カードのタイトル部分として設定 -->
                    <div class="card-header">
                        <!-- 時間に関するFont Awesomeのアイコンを追加 -->
                        <i class="fas fa-jikann"></i> 営業時間
                       <script src="https://fontawesome.com/icons/clock?style=regular#"></script>
                    </div>
                      <script defer src="https://use.fontawesome.com/releases/v5.7.2/js/all.js"></script>
                    <!-- カードの本文部分として設定 -->
                   maru <div class="card-body">
                        平日10時〜19時（土日・祝日は対応しておりません）
                    </div>
                </div>
        
            </div>
        </div>
    </div>
    

       <!-- グリッドを使うための指定を追加 -->
    <div class="row mt-4">
            <!-- 576px以上の画面幅のとき、左側は3つ分のカラム幅で表示する指定を追加 -->
            <div class="col-sm-3">
                <!-- メールに関するFont Awesomeのアイコンを追加 -->
                <i class="https://fontawesome.com/icons/inbox-out?style=duotone#"></i> <strong>メール：</strong>
            </div>
            <script src="https://fontawesome.com/icons/envelope?style=regular#"></script>
        <script defer src="https://use.fontawesome.com/releases/v5.7.2/js/all.js"></script>
       <!-- 576px以上の画面幅のとき、右側は9つ分のカラム幅で表示する指定を追加 -->
            <div class="col-sm-9">
                <p>
                    プライバシーポリシーをご確認いただき、ご同意の上で、送信ボタンをクリックしてください。<br />
                    お問い合わせの内容は、受付日から3営業日以内をめどにご返信いたします。
                </p>
                <form action="complete.html">
                    <!-- ラベルとフォーム部品を並べるためにグリッドを使う指定を追加 -->
                    <div class="form-group row">
                        <!-- 576px以上の画面幅のとき、ラベルは3つ分のカラム幅で表示する指定を追加 -->
                        <label class="col-sm-3 col-form-label">会社名：</label>

                     <!-- 576px以上の画面幅のとき、フォーム部品は9つ分のカラム幅で表示する指定を追加 -->
                        <div class="col-sm-9">
                            <input type="text" class="form-control" name="company">
                        </div>
                    </div>

                    <!-- ラベルとフォーム部品を並べるためにグリッドを使う指定を追加 -->
                    <div class="form-group row">
                       <!-- 576px以上の画面幅のとき、ラベルは3つ分のカラム幅で表示する指定を追加 -->
                        <label class="col-sm-3 col-form-label">氏名：</label>

                       <!-- 576px以上の画面幅のとき、フォーム部品は9つ分のカラム幅で表示する指定を追加 -->
                        <div class="col-sm-9">
                            <input type="text" class="form-control" name="name">
                        </div>
                    </div>

                    <!-- ラベルとフォーム部品を並べるためにグリッドを使う指定を追加 -->
                    <div class="form-group row">
                        <!-- 576px以上の画面幅のとき、ラベルは3つ分のカラム幅で表示する指定を追加 -->
                        <label class="col-sm-3 col-form-label">メール：</label>

                        <!-- 576px以上の画面幅のとき、フォーム部品は9つ分のカラム幅で表示する指定を追加 -->
                        <div class="col-sm-9">
                            <input type="text" class="form-control" name="mail">
                        </div>
                    </div>

                    <!-- ラベルとフォーム部品を並べるためにグリッドを使う指定を追加 -->
                    <div class="form-group row">
                        <!-- 576px以上の画面幅のとき、ラベルは3つ分のカラム幅で表示する指定を追加 -->
                        <label class="col-sm-3 col-form-label">電話番号：</label>

                        <!-- 576px以上の画面幅のとき、フォーム部品は9つ分のカラム幅で表示する指定を追加 -->
                        <div class="col^sm-9">
                            <input type="text" class="form-control" name="tel">
                        </div>
                    </div>

                    <!-- ラベルとフォーム部品を並べるためにグリッドを使う指定を追加 -->
                   <div class="form-group row">
                   <!-- 576px以上の画面幅のとき、ラベルは3つ分のカラム幅で表示する指定を追加 -->
                        <label class="col-sm-3col-form-label">内容：</label>

                        <!-- 576px以上の画面幅のとき、フォーム部品は9つ分のカラム幅で表示する指定を追加 -->
                        <div class="col-sm-9">
                            <textarea class="form-control" name="content"></textarea>
                        </div>
                    </div>

                    <!-- ラベルとフォーム部品を並べるためにグリッドを使う指定を追加 -->
                    <div class="form-group row">
                        <!-- 576px以��の画面幅のとき、3つ分のカラム幅の隙間を表示する設定を追加 -->
                        <!-- さらに、576px以上の画面幅のとき、9つ分のカラム幅で送信ボタンの表示部分の設定を追加 -->
                        <div class="offset-sm-3 col-sm-9">
                            <!-- 送信ボタンを緑色にする設定を追加 -->
                            <!-- さらに、送信ボタンは、指定のカラム幅に対して100％の幅となる設定を追加 -->
                            <button type="submit" class="btn btn-success btn-block">お問い合わせ内容を送信する</button>
                        </div>
                    </div>
                </form>
            </div>
    </div>
    
    
    <footer class="text-center pt-3 border-top">
        &copy; 2018 SAMPLE Inc.
    </footer>

    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
    <script defer src="https://use.fontawesome.com/releases/v5.7.2/js/all.js"></script>
</body>

</html>
   
   
   
   
   
   
   
    $('#tabs-a')
    .addClass('active');
    $('#tabs-b')
    .addClass('active');
     $('#tabs-c')
    .addClass('active');
    
    .parent('div')
     .parent('div')
      .parent('div')
    .parent('div')
    .addClass('active');
 
  if (selector === #tabs-a) {
      console.log(selector);
    } else if (selector === #tabs-b) {
      console.log(selector);
    } else (selector === #tabs-c) {
      console.log(selector);
    }
  
  const getNum1 = Number.parseFloat(num1.value);
  const getNum2 = Number.parseFloat(num2.value);


 function getNum1 (num1) {
  // num1の数値を戻り値としてreturnする処理を書いてください
  return num1;
}
function getNum2 (num2) {
  // num2の数値を戻り値としてreturnする処理を書いてください
  return num2;
}

 const showResult = function(num1, num2) {
  // <div id="box">にnumを表示する処理を書いてください
  const box = document.getElementById('box');
  showResult(result);
};


function findTriangleArea(a, b) {
    return a * b / 2;
}

const area = findTriangleArea(5, 2);
console.log(area);


for (let i = 1; i <= 100; i++) {
    if (i % 15 == 0) {
        console.log('Fizzbuzz');
    } else if ( i % 3 == 0) {
        console.log('Fizz');
    } else if ( i % 5 == 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
}


const animal = {
    name: '犬',
    voice: 'ワン',
    bark() {
        console.log(`${this.name}は${this.voice}と鳴く`);
    },
};

animal.bark();
