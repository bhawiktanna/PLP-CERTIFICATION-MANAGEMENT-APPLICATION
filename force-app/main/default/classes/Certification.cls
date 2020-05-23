public with sharing class Certification {
    @AuraEnabled(cacheable=true)
    public static List<Certificationn__c> getCertificate()
    {
        return [SELECT Certification_ID__c,Name,
        Comments__c,Certification_Cost__c
        FROM Certificationn__c];
    }


    @AuraEnabled(cacheable=true)
    public static List<Certificationn__c> sortIDcol()
    {
        return [SELECT Certification_ID__c  FROM Certificationn__c];
    }

}
