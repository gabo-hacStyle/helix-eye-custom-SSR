import express, {Express, Request, Response} from 'express'
import { config } from './config'
import { render } from './render/index'
import axios from 'axios'
import { url } from 'inspector'



const app: Express =  express()


//Middlewear to expose a folder to the client consuming it
app.use(express.static('dist'))

app.get('/galaxias', async (req:Request, res: Response) => {
    try{
        const { data } = await axios.get('https://images-api.nasa.gov/search?q=galaxies')
        const initialProps = {
            galaxies: data?.collection?.items
        }
        res.send(render(req.url, initialProps))
        
    } catch (error){
         throw new Error("An error ocurred in galaxies")
    }
})

app.get('*', (req: Request, res: Response) => {
    res.send(render(req.url))
})


app.listen(config.PORT, () => {
    console.log('Listening on port '+ config.PORT)
})