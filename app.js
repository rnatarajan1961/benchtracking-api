const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv') // to save environment variables
const morgan = require('morgan')  // logging http requests
const connectDB = require('./config/db') // database connection

// Load config
dotenv.config({path: './config/config.env'})

connectDB()

const app = express()

var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // For legacy browser support
}
app.use(cors(corsOptions));
// For parsing application/json
app.use(express.json())
  
// For parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
  

if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

// // Handlebars
//app.engine('.hbs', exphbs.engine({ defaultLayout: 'main', extname: '.hbs'}));
//app.set('view engine', '.hbs');

// Link Routes
const consultantsRoute = require('./routes/consultant.route')
const clientsRoute = require('./routes/client.route')
const placementsRoute = require('./routes/placement.route')

app.use('/consultants', consultantsRoute)
app.use('/clients', clientsRoute)
app.use('/placements', placementsRoute)


const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server is running on ${PORT}`))
