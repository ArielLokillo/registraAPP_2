import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IUsuario } from 'src/app/interfaces/iusuario';
import { IUsuarios } from 'src/app/interfaces/iusuarios';


@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: AngularFirestore) { }

  getCollection(nombreColeccion: string) {
    return this.firestore.collection<IUsuario>(nombreColeccion).valueChanges({idField: 'id'});
  }

  createDocument(nombreColeccion: string, data: IUsuario) {
    return this.firestore.collection<IUsuario>(nombreColeccion).add(data);
  }

  updateDocument(nombreColeccion: string, documentId: string ,data: IUsuario) {
    return this.firestore.collection<IUsuario>(nombreColeccion).doc(documentId).update(data);
  }

  deleteDocument(nombreColeccion: string, documentId: string) {
    return this.firestore.collection<IUsuario>(nombreColeccion).doc(documentId).delete();
  }

  getUsuario(nombreColeccion: string, documentId: string) {
    return this.firestore.collection<IUsuario>(nombreColeccion).valueChanges;
  }

  getUsuarioById(nombreColeccion: string, documentId: string) {
    return this.firestore.collection<IUsuario>(nombreColeccion).doc(documentId).valueChanges;
  }

  getLatestUserId(): Observable<number> {
    return this.firestore
      .collection<IUsuario>('usuarios', (ref) =>
        ref.orderBy('id', 'desc').limit(1)
      )
      .valueChanges()
      .pipe(
        map((usuarios) => {
          if (usuarios.length > 0) {
            // Devuelve el último ID almacenado + 1
            return (usuarios[0].id as number) + 1;
          } else {
            // No hay usuarios almacenados, devuelve el primer ID posible
            return 1;
          }
        })
      );
  }
}
