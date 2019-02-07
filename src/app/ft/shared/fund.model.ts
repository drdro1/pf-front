export interface IFund {
  id: number;
  isin: string;
  fundName: string;
  subFundName: string;
  assetManager: string;
  category: string;
  oneYearPerf: number;
  oneYearVol: number;
}
