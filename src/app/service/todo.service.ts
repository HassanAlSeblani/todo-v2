import { Injectable } from '@angular/core';
import { Todo } from '../model/todo';

// Dependency injection è un decorator che ci permette di utilizzare questa classe (service)
// è un pattern che ci permette togliere responsabilità dal componente
@Injectable({
  providedIn: 'root',
})
export class TodoService {
  // In Angular possiamo utilizzare dei service
  // questi si occupano di gestire i dati
  // precedentemente abbiamo gestito tutto tramite i singoli componenti
  // con i service centralizziamo il processo facendo si che si occupi della business logic

  // nel nostro caso gestirà la lista, l'inserimento, modifica e eliminazione
  dati: Todo[] = [
    {
      id: 1,
      descrizione: 'importare FormsModule',
      completato: true,
    },
    {
      id: 2,
      descrizione: 'completare todo-v2',
      completato: false,
    },
  ];

  lastId = 3;

  addNew(todo: string) {
    // Creo un nuovo todo usando i dati
    // che arrivano al metodo
    const newTodo: Todo = {
      // Ho usato 'lastId' che tiene
      // traccia dell'ultimo id generato
      id: this.lastId++,
      descrizione: todo,
      completato: false,
    };

    this.dati.push(newTodo);
  }

  delete(id: number) {
    // troviamo l'indice dell'id che dobbiamo trovare
    let index = this.dati.findIndex((x) => x.id === id);
    // rimuoviamo 1 elemento all'indice indicato
    if (index > -1) this.dati.splice(index, 1);
  }

  toggleCompletato(id: number) {
    const t = this.dati.find((x) => x.id === id);
    if (t) t.completato = !t.completato;
  }
}
