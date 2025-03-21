import { LightningElement, track } from "lwc";

export default class SyntheticChild extends LightningElement {
  @track childInternalTarget = "";

  handleChildClick(event) {
    this.childInternalTarget = event.target.tagName;
    const customEvt = new CustomEvent("childclick", {
      detail: { message: "Synthetic Child Event from " + event.target.tagName },
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(customEvt);
  }
}
