import { LightningElement,track } from 'lwc';
import getCases from '@salesforce/apex/casePaginationController.getCases';
import totalCount from '@salesforce/apex/casePaginationController.totalCount';

export default class CasePagination extends LightningElement {
    @track cases=[];
    pageSize=8;
    pageNumber=1;
    totalRecords;
    totalPages;
    columns=[{label:'Case Number',fieldName:'CaseNumber'},
        {label:'Subject',fieldName:'Subject'},
        {label:'Priority',fieldName:'Priority'},
        {label:'Case Origin',fieldName:'Origin'},
        {label:'Case Reason',fieldName:'Reason'}
    ];
    connectedCallback(){
        this.pageLoads();
    }
    async pageLoads(){
        this.totalRecords=await totalCount();
        this.totalPages=Math.ceil(this.totalRecords/this.pageSize);
        const offsetVal=(this.pageNumber-1)*this.pageSize;
        this.cases=await getCases({pageSize:this.pageSize,offsetVal:offsetVal});


    }
    handleNext(){
        this.pageNumber++;
        this.pageLoads();
    }
    handlePrevious(){
        this.pageNumber--;
        this.pageLoads();
    }
    get isPrevDisabled(){
        return this.pageNumber===1;
    }
    get isNextDisabled(){
        return this.pageNumber===this.totalPages;
    }
}