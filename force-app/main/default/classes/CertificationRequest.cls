public with sharing class CertificationRequest {
   

    @AuraEnabled(cacheable=true)
    public static List<Certification_Requestt__c> getCertificate()
    {



        List<Certification_Requestt__c> l = 
         [SELECT Name,Certification__c,
        Employee__c,Status__c,
        Voucher__c
        FROM Certification_Requestt__c];

        return l;
    }

}
