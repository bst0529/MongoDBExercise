//關閉資料庫 => net stop mongodb
//啟動資料庫 => net start mongodb

//npm install mongoose 第三方套件，操作mongodb
const mongoose = require('mongoose');

//mongodb： => mongodb的協議
//localhost => 資料庫在本地端
//playground => 資料庫名稱，不存時但會自動建立
mongoose.connect('mongodb://localhost/playground',
        //使用connect時需加入的必選條件
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
    //then => 成功時進入
    .then(() => { console.log('連結數據庫成功') })
    //catch => 失敗時進入
    .catch(err => { console.log('連結數據庫失敗', err) })