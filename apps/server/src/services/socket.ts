import { Server } from 'socket.io';

class SocketService{
    private _io: Server;

    constructor(){
        console.log(`Init socket server ...`)
        this._io = new Server();
    }

    get io(){
        return this._io;
    }

    public initListeners(){
        const io = this._io;
        console.log('Init socket listener');
        io.on('connect', (socket)=>{
            console.log(`New socket connected`, socket.id);

            socket.on('event:messsage', async ({message}: {message: string})=>{
                console.log('New message receive: ', message);                
            })
        })
    }


}

export default SocketService;