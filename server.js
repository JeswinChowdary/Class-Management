const express = require('express');
const app = express();
const upload = require('express-fileupload');
const adminPassword = 'fearlessadminmk1232009';

app.use(upload());
app.use(express.json());
app.use('/', express.static('./public'));
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://Jeswin:Jeswin2009@cluster0.5nwhj.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

const port = process.env.PORT || 3000;

app.get('/api/get-notes', (req, res) => {
    client.connect(async err => {
        const collection = client.db('class-management').collection('notes');
        const notesDataArr = await collection.find().toArray();
        return await res.send({ notesDataArr: notesDataArr })
    })
})
app.get('/api/get-audio', (req, res) => {
    client.connect(async err => {
        const collection = client.db('class-management').collection('audio');
        const audioDataArr = await collection.find().toArray();
        return await res.send({ audioDataArr: audioDataArr })
    })
})
app.post('/api/add-notes', (req, res) => {
    const file = req.files.file;
    const filename = file.name;
    const adminPass = req.body.adminpass;

    if(adminPass !== adminPassword) {
        return res.redirect('/admin?msg=The admin password you have entered is incorrect!!!');
    }

    file.mv('./public/notes-data/' + filename);

    client.connect(async err => {
        const collection = client.db('class-management').collection('notes');
        const title = filename.split('.')[0] + ' - Text';
        await collection.insertOne({ title: title, link: '/notes-data/' + filename });
        res.redirect('/admin?msg=Notes Successfully Uploaded!');
    });
})
app.post('/api/add-audio', (req, res) => {
    const file = req.files.file;
    const filename = file.name;
    const adminPass = req.body.adminpass;

    if(adminPass !== adminPassword) {
        return res.redirect('/admin?msg=The admin password you have entered is incorrect!!!');
    }

    file.mv('./public/audio-data/' + filename);

    client.connect(async err => {
        const collection = client.db('class-management').collection('audio');
        const title = filename.split('.')[0] + ' - Audio';
        await collection.insertOne({ title: title, link: '/audio-data/' + filename });
        res.redirect('/admin?msg=Audio Successfully Uploaded!');
    });
})

app.listen(port, console.log(`Server: Running
PORT: ${port}
Success: True`))