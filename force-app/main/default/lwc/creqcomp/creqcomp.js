// import { LightningElement } from 'lwc';
import { LightningElement, wire, track, api } from 'lwc';
import getData from '@salesforce/apex/CertificationRequest.getCertificate';
// import delData from '@salesforce/apex/Employee.delEmployee';
import { deleteRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { refreshApex } from '@salesforce/apex';
import { NavigationMixin } from 'lightning/navigation';



export default class Creqcomp extends
  NavigationMixin(LightningElement) {


  // export default class creqcomp extends LightningElement {
  display = false;
  createcertreq = true;
  @track certreqs;
  @api recordId;
  // @api objectApiName;


  //   connectedCallback(){
  //    this.objectName = this.objectApiName;
  //   }
  

  //@api recordId;
  // @wire(getData)
  // getApexData({ error, data }) {
    
    // if (data) {
      //nothing
      // this.certreqs = data;
      //this.certreqs = JSON.parse(this.certreqs);

      // alert(this.data);
      // alert(this.certreqs);
      // console.log(data);
      // console.log("Local");
      // console.log()


      // this.numbers = data;
    
  //   if (error) {
  //     alert('Error in fetching data' + error);
  //   }
  // }
  handleSubmit(event) {
    console.log('onsubmit: ' + event.detail.fields);

  }

  handleSuccess(event) {    // alert(this.certreqs[0][0]);
    // const updrecord =event.detail.id;
    // alert("hi "+this.updrecord);
    //  const updatedRecord = event.detail.id;
    //  console.log('onsuccess: ', updatedRecord);

    // this.display = false;
    // this.createcertreq = true;
    //  alert(this.recordids);

    const toastmsg = new ShowToastEvent({
      title: 'Success !',
      message: 'Certification Request Raised Successfully',
      variant: 'success',
      mode: 'dissmissable'
    })
    this.dispatchEvent(toastmsg);
    // window.location.reload();

    this.recordId = event.detail.id;

    this[NavigationMixin.Navigate]({
      type: 'standard__recordPage',
      attributes: {
        "recordId": this.recordId,
        "objectApiName": "Certification_Requestt__c", // objectApiName is optional
        "actionName": "view"
      }
    });



  }

  navigatetorecentlist() {
    this[NavigationMixin.Navigate]({
      type: 'standard__objectPage',
      attributes: {
        objectApiName: 'Certification_Requestt__c',
        actionName: 'list'
      },
      state: {
        filterName: 'Recent'
      },
    });

  }



  create(event) {
    alert("create");
    this.display = true;
    this.createcertreq = false;
  }

  handleDelete(event) {
    //var ind = event.target.getAttribute("data-row-index");
    var ind = event.target.value;
    var id = this.certreqs[ind].Id;
    // alert(id);

    //delData({delid:id});
    // window.location.reload();
    // alert(id);
    // alert(JSON.stringify
    //     (this.certreqs[this.idx]));
    //     console.log(
    //         this.certreqs[this.idx]);

    const recordId = event.target.dataset.recordid;
    alert(id);
    deleteRecord(recordId)
      .then(() => {
        window.location.reload();
        this.dispatchEvent(
          new ShowToastEvent({
            title: 'Success',
            message: 'Certification Request deleted',
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
  updid;
  updname;
  updexp;
  updpskill;
  updsskill;
  updshow = false;
  re;

  handleEdit(event) {  //  this.updshow = true;
    //   this.createcertreq = false;
    var ind = event.target.value;
    this.recordId = this.certreqs[ind].Id;
    alert(this.certreqs[ind].Id);
    alert(this.recordId);
    //   this.updid = this.certreqs[ind].Employee_ID__c;
    //    this.updname =this.certreqs[ind].Name;

  }

  handleError(event) {
    const toastmsg = new ShowToastEvent({
      title: 'Error !',
      message: 'Error Occured',
      variant: 'error',
      mode: 'dissmissable'
    })
    this.dispatchEvent(toastmsg);
  }

  handleLoad(event) {
    const toastmsg = new ShowToastEvent({
      title: 'Loaded',
      message: 'Data Loaded',
      variant: 'info',
      mode: 'dissmissable'
    })
    this.dispatchEvent(toastmsg);

  }


}






