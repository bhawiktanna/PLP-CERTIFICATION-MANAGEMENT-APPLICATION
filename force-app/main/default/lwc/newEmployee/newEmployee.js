import { LightningElement, wire ,track,api} from 'lwc';
import getData from '@salesforce/apex/Employee.getEmployee';
import delData from '@salesforce/apex/Employee.delEmployee';
import { deleteRecord } from 'lightning/uiRecordApi';
 import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { refreshApex } from '@salesforce/apex';
import { NavigationMixin } from 'lightning/navigation';



export default class NewEmployee extends 
NavigationMixin(LightningElement) {

    // @track employees = [];
  @api  recordId;
//   @api objectApiName;


//   connectedCallback(){
//    this.objectName = this.objectApiName;
//   }

//@api recordId;
// @wire(getData)
// getApexData({error,data}){

//     if(getData){
//         this.employees = data;
//      // this.numbers = data;
//     }
//     if(error){
//         alert('Error in fetching data'+error);
//     }
// }
handleSubmit(event) {
    console.log('onsubmit: '+ event.detail.fields);
   

}

handleSuccess(event)
{    // alert(this.employees[0][0]);
    // const updrecord =event.detail.id;
    // alert("hi "+this.updrecord);
  //  const updatedRecord = event.detail.id;
  //  console.log('onsuccess: ', updatedRecord);
  
    // this.display = false;
    // this.createemp = true;
  //  alert(this.recordids);

  const toastmsg = new ShowToastEvent({
    title : 'Success !',
    message : 'Employee Created Successfully',
    variant : 'success',
    mode : 'dissmissable'
  })
  this.dispatchEvent(toastmsg);
  // window.location.reload();

 // alert("hi");
  // var ind = event.target.value.Id;
  // var id = event.target.dataset.recordid;
  // alert(ind);
  // alert(id);
  // alert(recordId);
  // this[NavigationMixin.Navigate]({
  //     type: 'standard__recordPage',
  //     attributes: {
  //         "recordId": this.recordId,
  //         "objectApiName": "EMPLOYEEE__c", // objectApiName is optional
  //         "actionName": "view"
  //     }
  // });
  // alert(event.detail.id);
  // alert(event.target.value.id);
  this.recordId = event.detail.id;

  this[NavigationMixin.Navigate]({
    type: 'standard__recordPage',
    attributes: {
        "recordId": this.recordId,
        "objectApiName": "EMPLOYEEE__c", // objectApiName is optional
        "actionName": "view"
    }
});

//  this[NavigationMixin.Navigate]({
//   "type": "standard__webPage",
//   "attributes": {
//       "url": "https://plpprojectadmin-dev-ed.lightning.force.com/lightning/r/EMPLOYEEE__c/" + this.recordId + "/view"
//   }
// });

}



// display = false;
// createemp = true;
// create(event)
// {
//     this.display = true;
//     this.createemp = false;
// }

// handleDelete(event)
// {   
//      //var ind = event.target.getAttribute("data-row-index");
//      var ind = event.target.value;
//     var id = this.employees[ind].Id;
//     alert(id);
    
//     //delData({delid:id});
//     // window.location.reload();
//     // alert(id);
//     // alert(JSON.stringify
//     //     (this.employees[this.idx]));
//     //     console.log(
//     //         this.employees[this.idx]);

//    const recordId = event.target.dataset.recordid;
//    alert(recordId);
//         deleteRecord(recordId)
//             .then(() => {
//                 window.location.reload();
//                 this.dispatchEvent(
//                     new ShowToastEvent({
//                         title: 'Success',
//                         message: 'Employee deleted',
//                         variant: 'success'
//                     })
//                 );
                
               
               
//             })
//             .catch((error) => {
//                 this.dispatchEvent(
//                     new ShowToastEvent({
//                         title: 'Error deleting record',
//                         message: reduceErrors(error).join(', '),
//                         variant: 'error'
//                     })
//                 );
//             });
//     }
//   updid;
//   updname;
//   updexp;
//   updpskill;
//   updsskill;
//   updshow=false;
//   re;
 
//     handleEdit(event)
//     { this.updshow = true;
//       this.createemp = false;
//       var ind = event.target.value;
//       this.recordId = this.employees[ind].Id;
//        alert(this.employees[ind].Id);
//        alert(this.recordId);
//       //   this.updid = this.employees[ind].Employee_ID__c;
//      //    this.updname =this.employees[ind].Name;
           
//     }
    
//     handleError(event)
//   {
//     const toastmsg = new ShowToastEvent({
//       title : 'Error !',
//       message : 'Error Occured',
//       variant : 'error',
//       mode : 'dissmissable'
//     })
//     this.dispatchEvent(toastmsg);
//   } 

//   handleLoad(event)
//   {const toastmsg = new ShowToastEvent({
//     title : 'Loaded',
//     message : 'Data Loaded',
//     variant : 'info',
//     mode : 'dissmissable'
//   })
//   this.dispatchEvent(toastmsg);
    
//   }


//   navigateToRecordView() {
//     alert("hi");
//     var ind = event.target.value;
//     var id = event.target.dataset.recordid;
//     alert(ind);
//     alert(id);
//     this[NavigationMixin.Navigate]({
//         type: 'standard__recordPage',
//         attributes: {
//             recordId: {recordId},
//             objectApiName: 'EMPLOYEEE__c', // objectApiName is optional
//             actionName: 'view'
//         }
//     });
// }


navigatetorecentlist()
{
  this[NavigationMixin.Navigate]({
    type: 'standard__objectPage',
    attributes: {
        objectApiName: 'EMPLOYEEE__c',
        actionName: 'list'
    },
    state: {
        filterName: 'Recent'
    },
});

}

}