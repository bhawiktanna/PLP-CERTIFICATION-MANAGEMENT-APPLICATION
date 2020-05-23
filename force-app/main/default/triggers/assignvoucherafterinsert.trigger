trigger assignvoucherafterinsert on Voucherr__c (after insert) {


    List<id> certlist = new List<id>();
    for(Voucherr__c vou:Trigger.new)
       {
       certlist.add(vou.Certification__c);
       }
       
       
    List<Certification_Requestt__c> reqlist=[SELECT id,Voucher__c,Certification__c FROM Certification_Requestt__c 
                WHERE Status__c = 'Approved' and Voucher__c='' ORDER BY CreatedDate ASC NULLS FIRST];
    List<Certification_Requestt__c> reqlistafterassign=new List<Certification_Requestt__c>();
    List<Voucherr__c> voulist=new List<Voucherr__c>();
    
    
    if(reqlist.size()>0)
       {
           for(Voucherr__c voucher:Trigger.new)
           {
             
               for(Certification_Requestt__c certreq:reqlist)
               {
                   if(voucher.Certification__c==certreq.Certification__c)
                   {
                      Voucherr__c v=new Voucherr__c(id=voucher.id,Voucher_is_used_or_not__c=false);
                       voulist.add(v);
                       certreq.Voucher__c=voucher.id;
                       certreq.Status__c='Assigned';
                       reqlistafterassign.add(certreq);
                   }
               }
           }
       }
       if(reqlistafterassign.size()>0)
       {
           update reqlistafterassign;
       }  
     if(voulist.size()>0){
           update voulist;
       }
    }