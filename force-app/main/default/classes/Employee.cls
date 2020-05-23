public with sharing class Employee {
   
    @AuraEnabled(cacheable=true)
    public static List<EMPLOYEEE__c> getEmployee()
    {
        return [SELECT Employee_ID__c,Name,Experience__c,Primary_Skill__c,
        Secondary_Skill__c FROM EMPLOYEEE__c];
    }

    @AuraEnabled(cacheable=true)
    public static void delEmployee(Id delid)
    {
        
        EMPLOYEEE__c emp = [SELECT Employee_ID__c,
        Name,Experience__c,Primary_Skill__c,
        Secondary_Skill__c FROM EMPLOYEEE__c WHERE Id=:delid];
        // try{
        delete emp;
      //  }
        // catch(DmlException e){
        //     System.debug('DmlException Error in delete');
        //     return e.getMessage();
        // }
        // return 'Success';
    }



    // @AuraEnabled(cacheable=true)
    // public static List<EMPLOYEEE__c> getEmployee_Search
    // (String id,String name,String exp,String pskill,String sskill)
    // {
    //     String key_id = '%' + id + '%';
    //     String key_name = '%' + name + '%';
    //     String key_exp = '%' + exp + '%';
    //     String key_pskill = '%' + pskill + '%';
    //     String key_sskill = '%' + sskill + '%';

    //     return [SELECT Employee_ID__c,Name,Experience__c,
    //     Primary_Skill__c,Secondary_Skill__c FROM EMPLOYEEE__c WHERE
    //     Employee_ID__c LIKE :key_id AND 
    //     Name LIKE :key_name AND
    //     Experience__c LIKE :key_exp AND 
    //     Primary_Skill__c LIKE :key_pskill AND
    //     Secondary_Skill__c LIKE :key_sskill];
    // }






    // @AuraEnabled(cacheable=true)

    // public static List<EMPLOYEEE__c> sortIDcol()
    // {
    //     return [SELECT Employee_ID__c FROM EMPLOYEEE__c];
    // }
    // @AuraEnabled(cacheable=true)

    // public static List<EMPLOYEEE__c> sortNamecol()
    // {
    //     return [SELECT Name FROM EMPLOYEEE__c];

    // }

    // @AuraEnabled(cacheable=true)
    // public static List<EMPLOYEEE__c> sortExpcol()
    //         {return [SELECT Experience__c FROM EMPLOYEEE__c];}
       
    // @AuraEnabled(cacheable=true)
    // public static List<EMPLOYEEE__c> sortPskillcol()
    //     {return [SELECT Primary_Skill__c FROM EMPLOYEEE__c];}

    // @AuraEnabled(cacheable=true)
    // public static List<EMPLOYEEE__c> sortSskillcol()
    //     {return [SELECT Secondary_Skill__c FROM EMPLOYEEE__c];}
}
