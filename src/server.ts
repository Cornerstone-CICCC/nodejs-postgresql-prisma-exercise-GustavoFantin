import express, { Request, Response } from 'express';
import dotenv from 'dotenv'
import productRouter from './routes/product.routes';
dotenv.config()

//Create server
const app = express()

//Middleware
app.use(express.json())

//Routes
app.use('/products', productRouter )
app.use('/', productRouter)

//fallback
app.use((req: Request, res: Response) => {
    res.status(404).send('Error 404. Page not Found!')
})

//Start server
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})