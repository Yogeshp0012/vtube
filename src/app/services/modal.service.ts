import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private visible = false
  constructor() {}

  isModalVisible() {
    return this.visible
  }

  toggleModalVisibility() {
    this.visible = !this.visible
  }
}
