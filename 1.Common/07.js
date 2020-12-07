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

//刪除一筆資料，如果多筆符合條件則刪除第一筆，返回被刪除的資料
User.findOneAndDelete({ _id: '5c09f267aeb04b22f8460968' })
    .then(result => console.log(result))
    .catch(err => console.log(err));


//刪除多筆資料，如果條件為空對象則刪除全部，返回對象
User.deleteMany({})
    .then(result => console.log(result))
    .catch(err => console.log(err));