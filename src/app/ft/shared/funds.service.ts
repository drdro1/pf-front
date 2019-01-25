import { Injectable, EventEmitter } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { IFund } from './fund.model';

@Injectable()
export class FundsService {
  getFunds(): Observable<IFund[]> {
    const subject = new Subject<IFund[]>();
    setTimeout(() => {subject.next(FUNDS); subject.complete(); }, 100);
    return subject;
  }
}

const FUNDS: IFund[] = [
  {
    isin: 'FRA3718193742',
    fundName: 'Carmignac European Titans Equity',
    subFundName: 'CETE Sub Fund Name',
    assetManager: 'Carmignac Capital',
    category: 'Equities',
    oneYearPerf: 0.145,
    oneYearVol: 0.234
  },
  {
    isin: 'FRA558430132',
    fundName: 'Carmignac High Yield Navigators',
    subFundName: 'CHYN Sub Fund Name',
    assetManager: 'Carmignac Capital',
    category: 'Fixed Income',
    oneYearPerf: 0.073,
    oneYearVol: 0.088
  },
  {
    isin: 'FRA229482025',
    fundName: 'Carmignac Balanced Dynamic Blend',
    subFundName: 'CBDB Sub Fund Name',
    assetManager: 'Carmignac Capital',
    category: 'Hybrid',
    oneYearPerf: 0.113,
    oneYearVol: 0.109
  },
];
