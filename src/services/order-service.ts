import { Con, DBConnection } from './db-connection';
import { Collection, ObjectID, Db } from 'mongodb';
import { Plate } from './common/plate';
import { Orden } from './common/orden';

export class OrderService {

    get db(): Collection<Plate> {
        return this.con.db.collection("orders");
    }

    constructor(private con: DBConnection) { }

    getAll(id: string) {
        return this.db.find({
            idUsuario: id
        })
            .skip(0)
            .limit(30)
            .toArray();
    }

    getComplete(idUsuario: string) {
        return this.db.find(
            {
                "idUsuario": idUsuario,
                $or: [
                    { "estado": "completo" },
                    { "estado": "cancelado" }
                ],
            }
        )
            .sort({ fecha: -1 })
            .skip(0)
            .limit(30)
            .toArray();
    }

    getPending(idUsuario: string) {
        return this.db.find(
            {
                "idUsuario": idUsuario,
                "estado": "pendiente",
            }
        )
            .sort({ fecha: 1 })
            .skip(0)
            .limit(30)
            .toArray();
    }

    insert(order: Orden) {
        return this.db.insertOne(order);
    }

    delete(id: string) {
        return this.db.deleteOne({ _id: new ObjectID(id) })
    }

    update(id: string, order: Orden) {
        return this.db.updateOne(
            { _id: new ObjectID(id) },
            { $set: order }
        );
    }

}

export const orderService = new OrderService(Con);