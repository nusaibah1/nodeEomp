import { userRouter, express } from './controller/UserController.js'
import { productRouter } from './controller/ProductsController.js'
import path from 'path'
import cors from 'cors';


//Express App
const app = express()
const port = +process.env.PORT || 4000

//Middleware
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Credentials", "true")
    res.header("Access-Control-Allow-Methods", "*")
    res.header("Access-Control-Request-Methods", "*")
    res.header("Access-Control-Allow-Headers", "*")
    res.header("Access-Control-Expose-Headers", "Authorization")
    next()
  })
app.use(
  express.static("./static"),
  express.json(),
  express.urlencoded({
    extended: true
    })
)
app.use('/users', userRouter)
app.use('/products', productRouter)
app.get('^/$|/petCo', (req, res) => {
        res.status(200).sendFile(path.resolve('./static/html/index.html'))
    })
app.listen(port, () => {
    console.log(`Server is running on ${port}`);
})
