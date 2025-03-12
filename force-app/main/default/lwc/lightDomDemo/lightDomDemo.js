import { LightningElement } from "lwc";

export default class LightDomDemo extends LightningElement {
  static renderMode = "light";

  items = [];
  renderTime = 0;
  measurePerformance = false;
  startTime;
  externalQueryResult = "";
  internalTarget = "";
  childEventTarget = "";

  handleLocalClick(event) {
    this.internalTarget = event.target.tagName;
    const customEvt = new CustomEvent("customdemo", {
      detail: { message: "Light DOM Event from " + event.target.tagName },
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(customEvt);
  }

  handleChildClick(event) {
    this.childEventTarget =
      event.detail.message +
      " (Parent sees target: " +
      event.target.tagName +
      ")";
  }

  renderLargeList() {
    this.measurePerformance = true;
    this.startTime = performance.now();
    this.items = [];
    for (let i = 1; i <= 1000000; i++) {
      this.items.push(`Item ${i}`);
    }
  }

  simulateExternalQuery() {
    const globalMarker = document.querySelector(".child-marker");
    const internalMarker = this.internalRoot.querySelector(".child-marker");

    const globalMsg = globalMarker
      ? `Global found marker: ${globalMarker.textContent}`
      : `Global did not find marker (unexpected)`;
    const internalMsg = internalMarker
      ? `Internal found marker: ${internalMarker.textContent}`
      : `Internal did not find marker (unexpected)`;

    this.externalQueryResult = `Global: ${globalMsg} | Internal: ${internalMsg}`;
  }

  renderedCallback() {
    if (this.measurePerformance) {
      requestAnimationFrame(() => {
        const endTime = performance.now();
        this.renderTime = Math.round(endTime - this.startTime);
        this.measurePerformance = false;
      });
    }
  }

  get internalRoot() {
    return this.template ? this.template : this;
  }
}
