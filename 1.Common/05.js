const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => { console.log('連結數據庫成功') })
    .catch(err => { console.log('連結數據庫失敗', err) })

const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    hobbies: [String],
    email: String,
    password: String
});

const User = mongoose.model('User', userSchema);

//使用find來查找資料 ==> 回傳陣列
User.find().then(result => console.log(result));

//使用find，加入對象做查詢條件 ==> 回傳陣列
User.find({ age: 32 }).then(result => console.log(result));

//使用findOne ==> 回傳物件，如果有多個則回傳第一個
User.findOne().then(result => console.log(result));

//使用findOne，加入對象做查詢條件 ==> 回傳物件，如果有多個則回傳第一個
User.findOne({ age: 14 }).then(result => console.log(result));