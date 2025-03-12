import { LightningElement, track } from "lwc";

export default class NativeChild extends LightningElement {
  static shadowSupportMode = "native";
  @track childInternalTarget = "";

  handleChildClick(event) {
    this.childInternalTarget = event.target.tagName;
    const customEvt = new CustomEvent("childclick", {
      detail: { message: "Native Child Event from " + event.target.tagName },
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(customEvt);
  }
}
