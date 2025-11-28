public with sharing class casePaginationController {
    @AuraEnabled(cacheable=true)
 public static List<case> getCases(integer pageSize,integer offsetVal) {
        return [SELECT Id, CaseNumber, Subject, Status, Origin, Priority FROM Case ORDER BY
        CreatedDate DESC LIMIT :pageSize OFFSET :offsetVal];

    }
    @AuraEnabled(cacheable=true)
    public static integer totalCount(){
        return [select count() from case];

     
    }
}