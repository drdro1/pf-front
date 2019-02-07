export interface IFundShort {
  id: number;
  isin: string;
  fundName: string;
  subFundName: string;
  assetManager: string;
  category: string;
  oneYearPerf: number;
  oneYearVol: number;
}

export interface IFundLong {
  id: number;
  isin: string;
  fundName: string;
  lastNav: number;
  lastNavDate: Date;
  legalEntity: string;
  cutoffTime: number;
  minimumSubscription: number;
  subscriptionFee: number;
  currency: string;
  subFundName: string;
  assetManager: string;
  category: string;
  oneYearPerf: number;
  oneYearVol: number;
}
