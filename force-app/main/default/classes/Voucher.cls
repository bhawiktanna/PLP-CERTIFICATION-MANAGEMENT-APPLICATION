public with sharing class Voucher {
   
    @AuraEnabled(cacheable=true)
    public static List<Voucherr__c> getVoucher()
    {
        return [SELECT Voucher_ID__c,Name,Voucher_Cost__c,Validity__c,
        Voucher_is_used_or_not__c,Certification__c
        FROM Voucherr__c];
    }

}
