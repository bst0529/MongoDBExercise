const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => { console.log('連結數據庫成功') })
    .catch(err => { console.log('連結數據庫失敗', err) })

const postSchema = new mongoose.Schema({
    //最簡單的定義欄位方式
    title: String,
    //使用物件定義欄位
    article: {
        type: String
    },
    content: {
        type: String,
        //必填欄位
        require: true
    },
    author: {
        type: String,
        //陣列中的第二個值是自訂義錯誤訊息
        require: [true, "author是必填欄位"]
    },
    factory: {
        type: String,
        require: true,
        //去除左右邊空格
        trim: true
    },
    name: {
        type: String,
        //最字串最小長度
        minlength: 2,
        //最字串最大長度
        maxlength: 50
    },
    age: {
        type: Number,
        //最小值
        min: 18,
        //最大值
        max: 40
    },
    publishDate: {
        type: Date,
        //預設值
        default: Date.now
    },
    category: {
        type: String,
        //列舉，即白名單
        enum: {
            values: ['html', 'javascript', 'css'],
            //自訂義錯誤訊息
            message: 'category欄位值不在清單中'
        }
    },
    production: {
        type: String,
        //自訂義驗證
        validate: {
            //驗證需求，是個函數，回傳Boolean值，v即為production欄位值
            validator: v => {
                return v && v.length >= 3;
            },
            //自訂義錯誤訊息
            message: '輸入的production長度不符合要求'
        }
    }
});

const Post = mongoose.model('Post', postSchema);

// Post.create({
//         title: 10,
//         article: 20,
//         content: "",
//         author: "",
//         factory: "    CCC    ",
//         name: "A",
//         age: 17,
//         publishDate: "",
//         category: "java",
//         production: "BB"
//     })
//     .then(res => console.log(res))
//     .catch(err => console.log(err));

//建立一筆符合條件的資料
// Post.create({
//         title: '標調',
//         article: '文章',
//         content: "內容",
//         author: "作者",
//         factory: "    CCC    ",
//         name: "姓名",
//         age: 18,
//         //publishDate: "",
//         category: "html",
//         production: "產品名稱"
//     })
//     .then(res => console.log(res))
//     .catch(err => console.log(err));

//獲得錯誤訊息
Post.create({
        title: 10,
        article: 20,
        content: "",
        author: "",
        factory: "    CCC    ",
        name: "A",
        age: 17,
        publishDate: "",
        category: "java",
        production: "BB"
    })
    .then(res => console.log(res))
    .catch(err => {
        const error = err.errors;
        for (var m in error) {
            console.log(m + '：' + error[m]);
        }
    });