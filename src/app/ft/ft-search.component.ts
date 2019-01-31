import { Component, Inject, Injector, Input, OnInit, PLATFORM_ID, ViewEncapsulation } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { IFund } from '../ft/shared/fund.model';
import {FundsService } from '../ft/shared/funds.service';
import { NgbActiveModal, NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { TradeScreenComponent } from './trade-screen/trade-screen.component';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-ft-search',
  templateUrl: './ft-search.component.html',
})

export class FtSearchComponent implements OnInit {
  // @Input() funds: IFund[];
  funds: IFund[];
  private modalService: NgbModal;

  constructor(private fundsService: FundsService, @Inject(PLATFORM_ID) private platformId: Object, private injector: Injector) {
    if ( isPlatformBrowser(this.platformId)) {
      this.modalService = this.injector.get(NgbModal);
    }
  }

  ngOnInit() {
    this.fundsService.getFunds().subscribe(funds => this.funds = funds);
  }

  openModal() {
    const ngbModalOptions: NgbModalOptions = {
      size: 'md',
      windowClass: 'myCustomModalClass'
    };

    const modalRef = this.modalService.open(TradeScreenComponent, ngbModalOptions);

    modalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }
}
