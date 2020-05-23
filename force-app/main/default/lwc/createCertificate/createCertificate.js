import { LightningElement, wire ,track,api } from 'lwc';
import getData from '@salesforce/apex/Certification.getCertificate';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { deleteRecord } from 'lightning/uiRecordApi';
import { NavigationMixin } from 'lightning/navigation';



export default class createCertificate extends 
NavigationMixin(LightningElement) {


// export default class createCertificate extends LightningElement {

@track certificates = [];
@api recordId;

@wire(getData)
getApexData({error,data}){

    if(data){
        this.certificates = data;
    }
    if(error){
        alert('Error in fetching data'+error);
    }
}

handleSubmit(event) {
    console.log('onsubmit: '+ event.detail.fields);

}


handleSuccess(event)
{
    
   // window.location.reload();
    this.display = false;
    this.createcert = true;
    const toastmsg = new ShowToastEvent({
        title : 'Success !',
        message : 'New Certificate Created Successfully',
        variant : 'success',
        mode : 'dissmissable'
      })
      this.dispatchEvent(toastmsg);
   
    //   window.location.reload();

    this.recordId = event.detail.id;
    this[NavigationMixin.Navigate]({
        type: 'standard__recordPage',
        attributes: {
            "recordId": this.recordId,
            "objectApiName": "Certificationn__c",
            "actionName": "view"
        },
    });
    
}

display = false;
createcert = true;
create(event)
{
    this.display = true;
    this.createcert = false;
}

handleDelete(event)
{   
     //var ind = event.target.getAttribute("data-row-index");
     var ind = event.target.value;
    var id = this.employees[ind].Id;
  //  alert(id);
    
    //delData({delid:id});
    // window.location.reload();
    // alert(id);
    // alert(JSON.stringify
    //     (this.employees[this.idx]));
    //     console.log(
    //         this.employees[this.idx]);

   const recordId = event.target.dataset.recordid;
   alert(recordId);
        deleteRecord(recordId)
            .then(() => {
                window.location.reload();
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Success',
                        message: 'Certificate deleted',
                        variant: 'success'
                    })
                );
                
               
               
            })
            .catch((error) => {
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Error deleting record',
                        message: reduceErrors(error).join(', '),
                        variant: 'error'
                    })
                );
            });
    }
    handleDelete(event)
{   
     //var ind = event.target.getAttribute("data-row-index");
     var ind = event.target.value;
    var id = this.employees[ind].Id;
    alert(id);
    
    //delData({delid:id});
    // window.location.reload();
    // alert(id);
    // alert(JSON.stringify
    //     (this.employees[this.idx]));
    //     console.log(
    //         this.employees[this.idx]);

   const recordId = event.target.dataset.recordid;
   alert(recordId);
        deleteRecord(recordId)
            .then(() => {
                window.location.reload();
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Success',
                        message: 'Certificate deleted',
                        variant: 'success'
                    })
                );
                
               
               
            })
            .catch((error) => {
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Error deleting record',
                        message: reduceErrors(error).join(', '),
                        variant: 'error'
                    })
                );
            });
    }

    handleEdit(event)
    { this.updshow = true;
      this.createcert = false;
      var ind = event.target.value;
      var recordId = this.employees[ind].Id;
      alert(recordId);
    //   this.display = false;
    }
    handleSubmit(event) {
        console.log('onsubmit: '+ event.detail.fields);
    
    }
  

      navigatetorecentlist()
      {
        this[NavigationMixin.Navigate]({
          type: 'standard__objectPage',
          attributes: {
              objectApiName: 'Certificationn__c',
              actionName: 'list'
          },
          state: {
              filterName: 'Recent'
          },
      });
      
      }      

}