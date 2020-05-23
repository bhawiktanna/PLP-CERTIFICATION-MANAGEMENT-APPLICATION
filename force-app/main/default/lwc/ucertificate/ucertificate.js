import { LightningElement,api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { NavigationMixin } from 'lightning/navigation';




export default class Ucertificate extends 
NavigationMixin(LightningElement){

// export default class Ucertificate extends LightningElement {

    @api recordId;
    // handleEdit(event)
    // {  //  this.updshow = true;
    //   //   this.createcertreq = false;
    //     var ind = event.target.value;
    //     this.recordId = this.certreqs[ind].Id;
    //      alert(this.certreqs[ind].Id);
    //      alert(this.recordId);
    //     //   this.updid = this.certreqs[ind].Employee_ID__c;
    //    //    this.updname =this.certreqs[ind].Name;
             
    //   }
    handleSubmit(event) {
        console.log('onsubmit: '+ event.detail.fields);
        console.log('recordId: '+this.recordId);
    
    }

    handleSuccess(event)
{    // alert(this.certreqs[0][0]);
    // const updrecord =event.detail.id;
    // alert("hi "+this.updrecord);
  const updatedRecord = event.detail.id;
  console.log('onsuccess: ', updatedRecord);
  
    // this.display = false;
    // this.createcertreq = true;
  //  alert(this.recordids);


  const toastmsg = new ShowToastEvent({
    title : 'Success !',
    message : 'Certificate Updated Successfully',
    variant : 'success',
    mode : 'dissmissable'
  })
  this.dispatchEvent(toastmsg);
  
  // window.location.reload();

  this[NavigationMixin.Navigate]({
    type: 'standard__recordPage',
    attributes: {
        "recordId": this.recordId,
        "objectApiName": "Certificationn__c", // objectApiName is optional
        "actionName": "view"
    }
});

}


navigateToRecordPage() {
  // this[NavigationMixin.Navigate]({
  //     type: 'standard__objectPage',
  //     attributes: {
  //         objectApiName: 'Certification_Requestt__c',
  //         actionName: 'list'
  //     },
  //     state: {
  //         filterName: 'Recent'
  //     }
  // });

  this[NavigationMixin.Navigate]({
    type: 'standard__recordPage',
    attributes: {
        "recordId": this.recordId,
        "objectApiName": "Certificationn__c", // objectApiName is optional
        "actionName": "view"
    }
});
  
}


}