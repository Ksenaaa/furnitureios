import { FilterShow } from "./filter";

export interface DataPage<dataInterface> {
    pageData: dataInterface,
    totalPages: number,
    currentPage: number,
    filterData?: FilterShow
}
