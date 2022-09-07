export interface KeywordBaseCreateDTO{
  genericName:string;
  countryId:number;
  wiseName:string;
}

export interface KeywordBaseUpdateDTO{
  id:number;
  genericName:string;
  countryId:number;
  wiseName:string;
}

export interface KeywordBaseDTO{
  id:number;
  genericName:string;
  country:string;
  wiseName:string;
}
