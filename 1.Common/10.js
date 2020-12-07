const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => { console.log('連結數據庫成功') })
    .catch(err => { console.log('連結數據庫失敗', err) })

//用戶Schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    }
});

//文章Schema
const postSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

//用戶集合
const User = mongoose.model('User', userSchema);

//文章集合
const Post = mongoose.model('Post', postSchema);

//創建用戶
// User.create({ name: 'Robert' })
//     .then(res => console.log(res))
//     .catch(err => console.log(err));

//創建文章
// Post.create({ title: 'abc', author: '5fce391e71ca3f6e7c3b9bd4' })
//     .then(res => console.log(res))
//     .catch(err => console.log(err));

//連集，未指定欄位
Post.find().populate()
    .then(res => console.log(res))
    .catch(err => console.log(err));

//連集，指定欄位
Post.find().populate('author')
    .then(res => console.log(res))
    .catch(err => console.log(err));