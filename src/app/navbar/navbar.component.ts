import { Component, OnInit } from '@angular/core'
import { ModalService } from '../services/modal.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(public modal: ModalService) {}

  ngOnInit(): void {}

  openModal($event: Event) {
    $event.preventDefault()
    this.modal.toggleModalVisibility('auth')
  }
}
