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

//更新一筆資料，條件之第一的物件為查詢條件，第二個物件為要修改的欄位與值，返回對象
// User.updateOne({ name: '狗蛋' }, { name: '狗蛋蛋不小' })
//     .then(result => console.log(result))
//     .catch(err => console.log(err));


//更新多筆資料，返回對象
User.updateMany({}, { age: 88 })
    .then(result => console.log(result))
    .catch(err => console.log(err));