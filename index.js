const  express = require('express');
const path = require('path')
const app = express()


app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/urdu', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'index-urdu.html'))
})

app.listen(process.env.PORT || 3000, () => {
    console.log('App is running on port 3000')
});
