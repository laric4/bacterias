import { ModalComponent } from './../modal.component';
import { ApplicationRef, ComponentRef, Injectable, Type } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  modals: ComponentRef<any>[] = [];
  constructor(private appRef: ApplicationRef) {
    document.addEventListener('click', (ev: MouseEvent) => {
      if ((ev.target as HTMLElement).className == 'modal-background')
        this.close();
    });
  }

  saveModal(modal: ComponentRef<ModalComponent<any>>) {
    this.modals.push(modal);
  }

  open<T>(
    component: Type<T>,
    data?: Partial<T>
  ): Observable<ModalComponent<T>> {
    return new Observable<ModalComponent<T>>((subscriber) => {
      let root = document.querySelector('app-root');
      let modalDiv = document.createElement('div');
      modalDiv.id = 'modal-injector-' + this.modals.length;
      root?.appendChild(modalDiv);

      const modalRef: ComponentRef<ModalComponent<T>> = this.appRef.bootstrap(
        ModalComponent,
        `#${modalDiv.id}`
      ) as ComponentRef<ModalComponent<T>>;
      modalRef.instance.open(component, data);
      this.saveModal(modalRef);
      subscriber.next(modalRef.instance);
    });
  }

  close() {
    let ref = this.modals[this.modals.length - 1];
    if (!ref.instance['closed']) {
      ref.instance.close();
      ref.destroy();
    }
    ref.instance['closed'] = true;
    this.modals.pop();
  }
}
