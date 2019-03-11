import { Con, DBConnection } from './db-connection';
import { Collection, ObjectID } from 'mongodb';
import { Plate } from './common/plate';

export class PlatesService {

    get db(): Collection<Plate> {
        return this.con.db.collection("plates");
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

    insert(plate: Plate) {
        return this.db.insertOne(plate);
    }

    delete(id: string) {
        return this.db.deleteOne({ _id: new ObjectID(id) })
    }

    update(id: string, plate: Plate) {
        return this.db.updateOne(
            { _id: new ObjectID(id) },
            { $set: plate }
        );
    }

}

export const platesService = new PlatesService(Con);