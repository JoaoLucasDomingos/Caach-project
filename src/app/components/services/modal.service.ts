import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private modalSubject = new Subject<void>();
  private closeSubject = new Subject<void>();

  // Método para abrir o modal
  open() {
    this.modalSubject.next();
  }

  // Método para fechar o modal
  close() {
    this.closeSubject.next();
  }

  // Método para subscrever ao evento de abrir o modal
  onOpen() {
    return this.modalSubject.asObservable();
  }

  // Método para subscrever ao evento de fechar o modal
  onClose() {
    return this.closeSubject.asObservable();
  }
}
