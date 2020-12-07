const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => { console.log('連結數據庫成功') })
    .catch(err => { console.log('連結數據庫失敗', err) })

const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    isPubliched: Boolean
});

const Cource = mongoose.model('Course', courseSchema);

//使用create新增資料 
Cource.create({ name: 'javascript', author: '劉德華', isPubliched: true }, (err, result) => {
    //建立失敗時err是個物件，成功時是null
    console.log(err);
    //建立失敗時result是null，成功時是物件(即新增的資料)
    console.log(result);
});

//另一種接收參數的方式
Cource.create({ name: 'PHP', author: '關之琳', isPubliched: true })
    .then(result => console.log(result))
    .catch(err => console.log(err));