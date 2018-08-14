import { Subject } from "rxjs";

export class PaginationService {
  pageChanged = new Subject();
  allPagesSpecificData = [];

  loadData(data, filter) {
    if (data.length > 0) {
      this.allPagesSpecificData = this.getPageData(data, this.getPageSizes()[0]);
      this.pageChanged.next(0);
      return {
        "rawData": !filter ? data : null,
        "allPagesSpecificData": this.allPagesSpecificData,
        "pageData": this.allPagesSpecificData[0].pageData
      }
    }
  }

  changePageSize(data, selectedPageSize) {
    return this.getPageData(data, selectedPageSize);
  }

  getPageSizes() {
    return [5, 10, 20, 25, 50];
  }

  getPageData(data, size: number) {
    let pageNumber = 1;
    let pageData = [];
    let i = 0, j = data.length;
    let pageSpecificData = [];
    for (i = 0, j = data.length; i < j; i += size) {
      pageData = data.slice(i, i + size);
      pageSpecificData.push({
        "pageNumber": pageNumber++,
        "pageData": pageData
      });
    }
    return pageSpecificData;
  }
}