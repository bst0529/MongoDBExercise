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

//大於($gt)、小於($lt)
// User.find({ age: { $gt: 20, $lt: 40 } })
//     .then(result => console.log(result))
//     .catch(err => console.log(err));

//包含($in)
//User.find({ hobbies: { $in: ['足球'] } })
//    .then(result => console.log(result))
//    .catch(err => console.log(err));

//選定欄位
// User.find().select('name age email')
//     .then(result => console.log(result))
//     .catch(err => console.log(err));


//強制不要預設欄位，於欄位名加-符號
// User.find().select('name age email -_id')
//     .then(result => console.log(result))
//     .catch(err => console.log(err));


//排序 => 升序
// User.find().sort('age')
//     .then(result => console.log(result))
//     .catch(err => console.log(err));

//排序 => 降序 => 欄位前加-符號
// User.find().sort('-age')
//     .then(result => console.log(result))
//     .catch(err => console.log(err));

//跳過(skip)與限制數量(limit)
User.find().skip(2).limit(3)
    .then(result => console.log(result))
    .catch(err => console.log(err));