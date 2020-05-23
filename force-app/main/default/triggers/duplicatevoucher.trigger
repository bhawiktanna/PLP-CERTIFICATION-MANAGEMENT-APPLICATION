trigger duplicatevoucher on Voucherr__c (before insert,before update) {

    Voucherr__c[] vnew;
    Voucherr__c[] vold = [SELECT Voucher_is_used_or_not__c,Certification__c,
    Validity__c,Voucher_Cost__c,Name FROM Voucherr__c];

    if(Trigger.isBefore && (Trigger.isInsert))
    {
        vnew = Trigger.new;

        for(Voucherr__c vnewitr:vnew)
        {
            for(Voucherr__c volditr:vold)
            {
                if(volditr.Name.toUpperCase() == 
                vnewitr.Name.toUpperCase())
                {
                    vnewitr.Name.AddError
                    ('Voucher Name already exist');
                }
            }
        }
    }






}