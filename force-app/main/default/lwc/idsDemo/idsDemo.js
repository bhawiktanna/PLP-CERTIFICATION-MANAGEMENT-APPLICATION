import { LightningElement,api,track } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
export default class IdsDemo extends LightningElement {


  @api  recordId;
  @api objectApiName;


  connectedCallback(){
   this.objectName = this.objectApiName;
  }

  handleLoad(event)
  {const toastmsg = new ShowToastEvent({
    title : 'Loaded',
    message : 'Data Loaded',
    variant : 'info',
    mode : 'dissmissable'
  })
  this.dispatchEvent(toastmsg);
    
  }
  handleError(event)
  {
    const toastmsg = new ShowToastEvent({
      title : 'Error !',
      message : 'Error Occured',
      variant : 'error',
      mode : 'dissmissable'
    })
    this.dispatchEvent(toastmsg);
  } 
  

  
  handleSuccess(event)
  {
    const toastmsg = new ShowToastEvent({
      title : 'Success !',
      message : 'Data Loaded Successfully',
      variant : 'success',
      mode : 'dissmissable'
    })
    this.dispatchEvent(toastmsg);
  }
    
}