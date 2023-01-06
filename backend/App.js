const express =require('express')
const dotenv=require('dotenv')
const app = express() 
const db = require('./database/connection')
const userRouter=require('./routes/userRouter')
const adminRouter = require('./routes/adminRouter')
const driverRouter=require('./routes/DriverRouter')
const cookieParser = require('cookie-parser')
const fileUpload = require('express-fileUpload')
const cors = require('cors')
dotenv.config({path:"config.env"})
const PORT =process.env.PORT 

//middleware
app.use(express.json())
app.use(cors())
app.use(cookieParser())
app.use(fileUpload({useTempFiles:true}))
app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})
db.connectToDb((err)=>{
    if(!err){
        app.listen(PORT,()=>{
            console.log(`listening to port ${PORT}`);
        })
    }
})
// app.use('/api/workouts',workoutRoutes)                                  
app.use('/api/user',userRouter)
app.use('/api/admin',adminRouter)   
app.use('/api/Driver',driverRouter)
app.listen(PORT,()=>{
    console.log('listening to port',PORT);
})
