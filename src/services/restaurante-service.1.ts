import { Con, DBConnection } from './db-connection';
import { Collection, ObjectID } from 'mongodb';
import { Restaurante } from './common/restaurante';

export class RestauranteService {

    get db(): Collection<Restaurante> {
        return this.con.db.collection("restaurantes");
    }

    constructor(private con: DBConnection) { }

    getAll(id: string) {
        return this.db.find({
            idDueno: id
        })
            .toArray();
    }

    insert( rest: Restaurante) {
        return this.db.insertOne(rest);
    }

    delete(id: string) {
        return this.db.deleteOne({ _id: new ObjectID(id) })
    }

    update(id: string, rest: Restaurante) {
        return this.db.updateOne(
            { _id: new ObjectID(id) },
            { $set: rest }
        );
    }

}

export const restauranteService = new RestauranteService(Con);