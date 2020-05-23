import { LightningElement,api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { NavigationMixin } from 'lightning/navigation';

export default class Updcertreq extends 
NavigationMixin(LightningElement){



    @api recordId;

    handleSubmit(event) {
        console.log('onsubmit: '+ event.detail.fields);
    
    }

    handleSuccess(event)

 {  // alert("1");
  const toastmsg = new ShowToastEvent({
    title : 'Success !',
    message : 'Certification Request Updated Successfully',
    variant : 'success',
    mode : 'dissmissable'
  })
  this.dispatchEvent(toastmsg);

  
  // alert("2");
  this[NavigationMixin.Navigate]({
    type: 'standard__recordPage',
    attributes: {
        "recordId": this.recordId,
        "objectApiName": "Certification_Requestt__c", 
        "actionName": "view"
    }
});
// alert("3");

}


navigateToRecordPage() {

  this[NavigationMixin.Navigate]({
    type: 'standard__recordPage',
    attributes: {
        "recordId": this.recordId,
        "objectApiName": "Certification_Requestt__c",
        "actionName": "view"
    }
});
  
}


}