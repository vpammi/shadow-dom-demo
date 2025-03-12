import { LightningElement, track } from "lwc";

export default class LightDomChild extends LightningElement {
  static renderMode = "light";

  @track childTarget = "";

  handleChildClick(event) {
    this.childTarget = event.target.tagName;
    const customEvt = new CustomEvent("childclick", {
      detail: { message: "Light DOM Child Event from " + event.target.tagName },
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(customEvt);
  }
}
