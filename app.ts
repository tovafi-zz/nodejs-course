import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as http from 'http';
import * as socketIo from 'socket.io';
import {Message} from './models/message.model';
import {CharacterResponse} from './models/character-response';
import * as searchService from './services/search_services';

const app = express();
const httpd = http.createServer(app);
const ioServer = socketIo(httpd);
const search = new searchService();

app.use(body)
app.use('/', express.static('public'));

async function  getCharacterInfo(stringToSearch:string): CharacterResponse[]{
            searchService.
            return 
        }

ioServer.on('connection', (socket) =>{
    console.log('connected');
    socket.on('messageToServer', (message:Message)=>{
        socket.broadcast.emit('messageFromServer', message);
        if(message.content.trim().startsWith('!char')){
            let searchParam = message.content.split('!char')[1].trim();
            let characterInfo = getCharacterInfo(searchParam);
            ioServer.emit('messageFromServer', characterInfo);
        }
    });
});

app.use('/api', )
httpd.listen(3000, ()=> {console.log("Express app is listening on 3000 port!")});