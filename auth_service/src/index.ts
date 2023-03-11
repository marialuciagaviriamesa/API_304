/*console.log("HOLA")*/
import express, {Request,Response} from 'express';
const server = express();

server.get('/api', (req: Request, res:Response)=> {
    res.send({message:'Hello world!!'})
})
server.listen(80,()=>{console.log('App is up and running')});