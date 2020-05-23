// trigger certtrigger on SOBJECT (before insert) {

// }

trigger certtrigger on Certification_Requestt__c 
(before insert) {
    
    if(Trigger.isBefore && Trigger.isInsert)
    {

    Certification_Requestt__c[] cr = [Select Employee__c,
                        Status__c,Voucher__c,Due_Date__c,
                        Comments__c,Name,Certification__c 
                        from
                        Certification_Requestt__c];                  



for(Certification_Requestt__c cnew : Trigger.new)
{
for(Certification_Requestt__c co:cr)
{
if(cnew.Employee__c == co.Employee__c)
{
    if((co.Status__c == 'Pending'))
    {
                cnew.Employee__c.AddError('There is some Pending Employee Voucher Request. The Employee cannot raise any Certification Request till it is Approved.');
    }
    if(cnew.Certification__c == co.Certification__c)
    {
                 cnew.Certification__c.AddError('Same Certification Request cannot be generated for the Employee');
    }
}
}
}
    }

   
}