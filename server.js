let express =require('express');
const errorhandler = require('./middleware/errorhandler');
let dotenv = require('dotenv').config();

let app = express();
const port = process.env.PORT;

// app.get('/', (req, res) =>{
//     res.send('nayan')
// });
app.use(express.json()); // for parse data which we recieve from req (string to json object)
app.use("/api/contacts",require('./Routes/ContactRout'));
app.use(errorhandler);

app.listen(port,() => {
    console.log(port);
} );