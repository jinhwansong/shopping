export interface IBestSearch {
    id:number;
    name:string;
}
export interface ICategory {
  id: number;
  name: string;
  depth:{
    id: number;
    name: string;
    depth2?: {
        id: number;
        name: string;
    }[];
  }[];
}