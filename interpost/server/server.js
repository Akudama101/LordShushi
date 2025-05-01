import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import cors from 'cors'
const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

app.use(express.static(path.join(__dirname, '../dist'), { maxAge: '1d' }))


app.get('*', (req, res)=>{
res.sendFile(path.join(__dirname,'../dist', 'index.html'))

})



app.listen(PORT, () => {
    console.log("Server is running on Port 3000... ")
})



