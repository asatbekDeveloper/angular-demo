export interface FinancialYear {
  id: number;
  year: string;
  default: boolean
}



export interface FinancialYearUpdateDTO {
  id: number;
  yearFrom: string;
  yearTo: string;
  default: boolean
}
