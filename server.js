const express = require('express');
const app = express();
const upload = require('express-fileupload');
const adminPassword = 'jeswinchowdary123';

app.use(upload());
app.use(express.json());
app.use('/', express.static('./public'));
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://Jeswin:Jeswin2009@cluster0.5nwhj.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

const PORT = process.env.PORT || 3000;

app.get('/api/get-notes', (req, res) => {
    client.connect(async err => {
        const collection = client.db('class-management').collection('notes');
        const notesDataArr = await collection.find().toArray();
        return await res.send({ notesDataArr: notesDataArr })
    })
})
app.post('/api/add-note', (req, res) => {
    const file = req.files.file;
    const filename = file.name;
    const adminPass = req.body.adminpass;

    if(adminPass !== adminPassword) {
        return res.redirect('/admin?msg=The admin password you have entered is incorrect!!!');
    }

    file.mv('./public/notes-data/' + filename);

    client.connect(async err => {
        const collection = client.db('class-management').collection('notes');
        const title = filename.split('.')[0] + ' - Notes';
        await collection.insertOne({ title: title, link: '/notes-data/' + filename });
        res.redirect('/admin?msg=Notes Successfully Uploaded!');

    });
})






// Reminders







app.get('/api/add-reminders', async (req, res) => {
    const content = req.query.content;
    const adminPass = req.query.adminpass;

    if(adminPass !== adminPassword) {
        return res.redirect('/admin?msg=The admin password you have entered is incorrect.');
    }

    try { 
        const collection = await client.db('class-management').collection('reminders');

        await collection.insertOne({
            content: content
        });
    } finally {
        await res.redirect('/admin?msg=Reminder successfully uploaded');
    }
})

app.get('/api/get-reminders', async(req, res) => {
  try {
    const collection = await client.db('class-management').collection('reminders');
    const remindersArray = await collection.find().toArray();
    return await res.send({ remindersArray: remindersArray });
  } catch {
    console.log('There was an error');
  }
})





app.listen(PORT, console.log(`Server is running on port ${PORT}...`))