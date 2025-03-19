const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const router = require('./routes/authRoutes');
const cartrouter = require('./routes/cartRoutes');

const app = express();
const allowedOrigins =["ecomm-frontend-a4pq0cf62-k-vamshikrushanas-projects.vercel.app","ecomm-frontend-vert.vercel.app"]

app.use(
    cors({
        origin: "ecomm-frontend-vert.vercel.app"
    })
);


// m

// middleware
app.use(cors())
app.use(express.json())

connectDB()
// app.use("/auth",require('./routes/authRoutes'))
app.use("/auth",router)
app.use("/cart",cartrouter)
app.get('/',(req,res)=>{
    res.send('hello, world!')
})

const port = 5000

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3ZDdmYTdjYjZjYTcxMDQxZWZjNzRkZiIsImlhdCI6MTc0MjIwNzY2Mn0.3Y8GYuf3eIJuWXre-FLACsimvOz4S0UfO2j_pVt0_pw