import * as React from "react";
import * as ReactDOM from "react-dom";
import * as retargetEvents from "react-shadow-dom-retarget-events";
import List from "../components/List";

export default class ListEl extends HTMLElement {
  static get observedAttributes() {
    return ["title"];
  }

  createElement(label) {
    return React.createElement(List, { label }, React.createElement("slot"));
  }

  connectedCallback() {
    this.mountPoint = document.createElement("span");
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(this.mountPoint);

    const title = this.getAttribute("title");
    ReactDOM.render(this.createElement(title), this.mountPoint);
    retargetEvents(shadowRoot);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "label") {
      ReactDOM.render(this.createElement(newValue), this.mountPoint);
    }
  }
}

window.customElements.define("list-el", ListEl);
