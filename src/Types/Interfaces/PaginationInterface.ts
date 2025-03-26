export default interface PaginationInterface {
    NUMBER_OF_PAGES:number;
    setPage:React.Dispatch<React.SetStateAction<number>>    ;
    page:number;
    arrayOfPages:number[]
  }
  