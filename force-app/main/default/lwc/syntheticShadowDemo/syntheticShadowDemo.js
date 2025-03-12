import { LightningElement } from "lwc";

export default class SyntheticShadowDemo extends LightningElement {
  items = [];
  renderTime = 0;
  measurePerformance = false;
  startTime;
  externalQueryResult = "";
  internalTarget = "";
  childEventTarget = "";

  handleChildClick(event) {
    // Record the event detail from the nested synthetic child.
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
    for (let i = 1; i <= 10000; i++) {
      this.items.push(`Item ${i}`);
    }
  }

  simulateExternalQuery() {
    const globalMarker = document.querySelector(".child-marker");
    const internalMarker = this.internalRoot.querySelector(".child-marker");

    const globalMsg = globalMarker
      ? `Global found marker: ${globalMarker.textContent}`
      : `Global did not find marker (expected)`;
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
