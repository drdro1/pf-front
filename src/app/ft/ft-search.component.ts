import { Component, Inject, Injector, Input, OnInit, PLATFORM_ID, ViewEncapsulation } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { IFundShort, IFundLong } from '../ft/shared/fund.model';
import {FundsService } from '../ft/shared/funds.service';
import { NgbActiveModal, NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { TradeScreenComponent } from './trade-screen/trade-screen.component';
import { RestService } from './shared/rest.service';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-ft-search',
  templateUrl: './ft-search.component.html',
})

export class FtSearchComponent implements OnInit {
  funds: IFundShort[];
  private modalService: NgbModal;


  constructor(private fundsService: FundsService,
    private restService: RestService,
    @Inject(PLATFORM_ID) private platformId: Object,
     private injector: Injector) {
    if ( isPlatformBrowser(this.platformId)) {
      this.modalService = this.injector.get(NgbModal);
    }
  }

  ngOnInit() {
    this.restService.getFundSearch().subscribe((data: IFundShort[]) => {
       console.log('ngInit received data = ' + data[0]['fundName']);
        this.funds = data;
    });
  }

  subscribe(fundId: number) {
    this.restService.getFundInfoForOrder(fundId).subscribe((data: IFundLong) => {
      console.log('received data = ' + data['fundName']);
      this.openModal(data);
    });
  }

  openModal(fundInfo: IFundLong) {
    const ngbModalOptions: NgbModalOptions = {
      size: 'lg',
      windowClass: 'myCustomModalClass'
    };

    const modalRef = this.modalService.open(TradeScreenComponent, ngbModalOptions);
    modalRef.componentInstance.fundInfo = fundInfo;

    modalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }
}
