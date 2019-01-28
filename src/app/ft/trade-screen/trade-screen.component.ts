import { Component } from "@angular/core";
import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-trade-screen",
  templateUrl: './trade-screen.component.html'
})

export class TradeScreenComponent {
  private orderForm;

  constructor(public modal: NgbActiveModal) {}

  closeModal() {
    this.modal.close("Modal Closed");
  }

  subscribe(formValues) {

  }
}
