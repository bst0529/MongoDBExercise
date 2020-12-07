const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => { console.log('連結數據庫成功') })
    .catch(err => { console.log('連結數據庫失敗', err) })

//創建表格的建立規則
const courseSchema = new mongoose.Schema({
    //欄位名稱：資料類型
    name: String,
    author: String,
    isPubliched: Boolean
});

//以Course(開頭大寫)作為表格名稱，以courseSchema為規則創建表格 => 實際產出得表格名稱為 courses
const Cource = mongoose.model('Course', courseSchema);

//使用表格名稱以Course創建一筆Course資料
const cource = new Cource({
    name: 'node.js基礎',
    author: '尤達大師',
    isPubliched: true
});

//將創建的資料寫入資料庫中
cource.save();