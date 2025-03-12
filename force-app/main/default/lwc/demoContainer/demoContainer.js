import { LightningElement, track } from "lwc";
import { loadStyle } from "lightning/platformResourceLoader";
import GLOBAL_STYLES from "@salesforce/resourceUrl/globalStyles";

export default class DemoContainer extends LightningElement {
  @track eventLogs = [];
  @track queryResultMessage = "";

  connectedCallback() {
    // Load the global stylesheet as a truly global style.
    loadStyle(this, GLOBAL_STYLES)
      .then(() => console.log("Global styles loaded."))
      .catch((error) => console.error("Error loading global styles", error));
  }

  // This handler receives events bubbled from child demo components.
  handleEvent(event) {
    // Even if the event originates deep inside a shadow tree,
    // LWC retargets it to the host. (So you'll see the host element here.)
    this.eventLogs = [
      ...this.eventLogs,
      `Event: ${event.detail.message} | Parent sees target: ${event.target.tagName}`
    ];
  }

  // Query each child for its hidden marker element.
  handleParentQueryInner() {
    const synthetic = this.template.querySelector("c-synthetic-shadow-demo");
    let syntheticInner =
      synthetic && synthetic.shadowRoot
        ? synthetic.shadowRoot.querySelector(".child-marker")
        : null;
    const syntheticMsg = syntheticInner
      ? `Synthetic: Found marker: ${syntheticInner.textContent}`
      : `Synthetic: Marker not accessible (expected)`;

    const light = this.template.querySelector("c-light-dom-demo");
    let lightInner = light ? light.querySelector(".child-marker") : null;
    const lightMsg = lightInner
      ? `Light DOM: Found marker: ${lightInner.textContent}`
      : `Light DOM: Marker not found (unexpected)`;

    const native = this.template.querySelector("c-native-shadow-demo");
    let nativeInner =
      native && native.shadowRoot
        ? native.shadowRoot.querySelector(".child-marker")
        : null;
    const nativeMsg = nativeInner
      ? `Native: Found marker: ${nativeInner.textContent}`
      : `Native: Marker not accessible (expected)`;

    this.queryResultMessage = `${syntheticMsg}\n${lightMsg}\n${nativeMsg}`;
  }
}
