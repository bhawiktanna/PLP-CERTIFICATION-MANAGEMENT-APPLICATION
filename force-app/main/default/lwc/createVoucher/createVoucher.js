import { LightningElement,track,wire,api } from 'lwc';
import getData from '@salesforce/apex/Voucher.getVoucher';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { deleteRecord } from 'lightning/uiRecordApi';
import { NavigationMixin } from 'lightning/navigation';



export default class CreateVoucher extends 
NavigationMixin(LightningElement) {
// export default class CreateVoucher extends LightningElement {

    @track vouchers = [];
    @api recordId;
    @wire(getData)
    getApexData({error,data}){
    
        if(data){
            this.vouchers = data;
        }
        if(error){
            alert('Error in fetching data'+error);
        }
    }




    handleSuccess(event)
    {
        // const updrecord =event.detail.id;
        // alert("hi "+this.updrecord);
        
        const toastmsg = new ShowToastEvent({
            title : 'Success !',
            message : 'Data Loaded Successfully',
            variant : 'success',
            mode : 'dissmissable'
          })
          this.dispatchEvent(toastmsg);
        //   window.location.reload();
        //   this.display = false;
        // this.createvoucher = true;

        this.recordId = event.detail.id;
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                "recordId": this.recordId,
                "objectApiName": "Voucherr__c",
                "actionName": "view"
            },
        });

    }

    display = false;
    createvoucher = true;
create(event)
{
    this.display = true;
    this.createvoucher = false;
}
recordId;
handleEdit(event)
{ this.updshow = true;
  this.createvoucher = false;
  var ind = event.target.value;
  this.recordId = this.vouchers[ind].Id;
 // alert(this.recordId);
//   this.display = false;
}

handleDelete(event)
{   
     //var ind = event.target.getAttribute("data-row-index");
     var ind = event.target.value;
    var id = this.vouchers[ind].Id;
   // alert(id);
    
    //delData({delid:id});
    // window.location.reload();
    // alert(id);
    // alert(JSON.stringify
    //     (this.vouchers[this.idx]));
    //     console.log(
    //         this.vouchers[this.idx]);

//    const recordId = event.target.dataset.recordid;
//    alert(recordId);
        deleteRecord(id)
            .then(() => {
                window.location.reload();
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Success',
                        message: 'Voucher deleted',
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


    navigatetorecentlist()
    {
      this[NavigationMixin.Navigate]({
        type: 'standard__objectPage',
        attributes: {
            objectApiName: 'Voucherr__c',
            actionName: 'list'
        },
        state: {
            filterName: 'Recent'
        },
    });
    
    } 


}