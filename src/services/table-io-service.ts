import * as socketIO from 'socket.io';
import { Server } from 'http';

export class TableIoService {

    tables: SocketIO.Namespace;

    init(server: Server) {
        let io = socketIO(server);
        this.tables = io.of("socket/tables")
        this.tables.on("connection", (socket) => {

            socket.on("subscribe", (id) => {
                socket.join(id);
            });
            socket.on("unsubscribe", (id) => {
                socket.leave(id);
            })


            // socket.emit("saludo",{hola:"hola como estas"});
            // socket.on("mensaje",(data)=>{
            //     console.log(JSON.stringify(data));
            //});
        });
        // setInterval(() => {
        //     available.to("mesas")
        //         .emit("disponibilidad", { mesa: 2, disponibilidad: true })
        // }, 1000)

        // setTimeout
        // setInterval(()=>{
        //     io.emit("molestar",{msg:"Te desesperare"})
        // },1000);
    }

    changeAvailable(id: string, table: number, available: boolean) {
        this.tables.to(id).emit("available", {
            mesa:table, 
            disponibilidad:available
        });
    }

}
export const tableIO = new TableIoService();