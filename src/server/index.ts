import express, {Express, Request, Response} from 'express'
import { config } from './config'
const app: Express =  express()

app.get('*', (req: Request, res: Response) => {
    res.send(`
        <h1>Hola, ruta ${req.url} </h1>
    `)
})


app.listen(config.PORT, () => {
    console.log('Listening on port '+ config.PORT)
})