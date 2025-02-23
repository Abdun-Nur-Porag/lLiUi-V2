/**
 * Converts components into global functions.
 * @param {Object} Components - An object containing component functions.
 */
function registerComponents(Components) {
  Object.keys(Components).forEach(name => {
    window[name] = Components[name]; // Now you can directly call `button()`, `container()`, etc.
  });
}

/**
 * Creates a DOM element with a fluent API for chaining.
 * @param {string} tagName - The HTML tag name.
 * @returns {Object} - A fluent API object for manipulating the element.
 */
function create(tagName) {
  const el = document.createElement(tagName);

  const api = {
    /**
     * Sets the text content of the element.
     * @param {string} txt - The text content.
     * @returns {Object} - The API object for chaining.
     */
    text(txt) {
      el.textContent = txt;
      return this;
    },

    /**
     * Adds classes to the element.
     * @param {string|string[]} classes - Class names to add.
     * @returns {Object} - The API object for chaining.
     */
    class(classes) {
      el.classList.add(...(Array.isArray(classes) ? classes : [classes]));
      return this;
    },

    /**
     * Sets the ID of the element.
     * @param {string} idVal - The ID value.
     * @returns {Object} - The API object for chaining.
     */
    id(idVal) {
      el.id = idVal;
      return this;
    },

    /**
     * Sets attributes on the element.
     * @param {Object} attributes - An object of key-value pairs for attributes.
     * @returns {Object} - The API object for chaining.
     */
    attrs(attributes) {
      Object.entries(attributes).forEach(([k, v]) => el.setAttribute(k, v));
      return this;
    },

    /**
     * Applies styles to the element.
     * @param {Object} styles - An object of key-value pairs for styles.
     * @returns {Object} - The API object for chaining.
     */
    style(styles) {
      Object.assign(el.style, styles);
      return this;
    },

    /**
     * Sets the inner HTML of the element.
     * @param {string} htmlContent - The HTML content.
     * @returns {Object} - The API object for chaining.
     */
    html(htmlContent) {
      el.innerHTML = htmlContent;
      return this;
    },

    /**
     * Adds an event listener to the element.
     * @param {string} eventName - The event name.
     * @param {Function} callback - The event handler.
     * @returns {Object} - The API object for chaining.
     */
    event(eventName, callback) {
      el.addEventListener(eventName, callback);
      return this;
    },

    /**
     * Adds a click event listener to the element.
     * @param {Function} callback - The click event handler.
     * @returns {Object} - The API object for chaining.
     */
    onClick(callback) {
      return this.event("click", callback);
    },

    /**
     * Adds a load event listener to the window.
     * @param {Function} callback - The load event handler.
     * @returns {Object} - The API object for chaining.
     */
    onLoad(callback) {
      window.addEventListener("load", () => callback.call(el));
      return this;
    },

    /**
     * Appends children to the element.
     * @param {Array|HTMLElement} childrenArray - The children to append.
     * @returns {Object} - The API object for chaining.
     */
    child(childrenArray) {
      (Array.isArray(childrenArray) ? childrenArray : [childrenArray]).forEach(child => {
        el.appendChild(child.el || child);
      });
      return this;
    },

    /**
     * Appends the element to a target parent.
     * @param {string|HTMLElement} target - The target parent element or selector.
     * @returns {Object} - The API object for chaining.
     */
    add(target) {
      const parent = typeof target === "string" ? document.querySelector(target) : target;
      parent?.appendChild(el);
      return this;
    },

    /**
     * Removes the element from the DOM.
     * @returns {Object} - The API object for chaining.
     */
    remove() {
      el.remove();
      return this;
    },

    /**
     * Replaces the element with another element.
     * @param {HTMLElement} newElement - The new element to replace with.
     * @returns {Object} - The API object for chaining.
     */
    replace(newElement) {
      el.replaceWith(newElement);
      return this;
    },

    /**
     * Clones the element.
     * @param {boolean} deep - Whether to clone deeply.
     * @returns {HTMLElement} - The cloned element.
     */
    clone(deep = true) {
      return el.cloneNode(deep);
    },

    /**
     * Edits a child element at a specific index.
     * @param {number} index - The index of the child element.
     * @param {Function} editFn - The function to modify the child element.
     * @returns {Object} - The API object for chaining.
     */
    editChild(index, editFn) {
      if (el.children[index]) {
        const childEl = el.children[index];
        const childAPI = {
          text: (txt) => { childEl.textContent = txt; return this; },
          class: (classes) => { childEl.classList.add(...(Array.isArray(classes) ? classes : [classes])); return this; },
          id: (idVal) => { childEl.id = idVal; return this; },
          attrs: (attributes) => { Object.entries(attributes).forEach(([k, v]) => childEl.setAttribute(k, v)); return this; },
          style: (styles) => { Object.assign(childEl.style, styles); return this; },
          html: (htmlContent) => { childEl.innerHTML = htmlContent; return this; },
          event: (eventName, callback) => { childEl.addEventListener(eventName, callback); return this; },
          onClick: (callback) => { childEl.addEventListener("click", callback); return this; },
          child: (childrenArray) => { (Array.isArray(childrenArray) ? childrenArray : [childrenArray]).forEach(child => { childEl.appendChild(child.el || child); }); return this; },
          el: childEl
        };
        editFn(childAPI); // Apply modifications
      }
      return this;
    },

    /**
     * The underlying DOM element.
     * @type {HTMLElement}
     */
    el
  };

  return api;
}

/**
 * Renders components from custom tags.
 */
function renderComponents() {
  const customTags = document.querySelectorAll('container, component[name]');
  customTags.forEach(tag => {
    const tagName = tag.tagName.toLowerCase();
    if (tagName === 'container') {
      const containerEl = container();
      applyAttributesFromTag(containerEl, tag);
      containerEl.add(tag);
    } else if (tagName === 'component' && tag.getAttribute('name')) {
      const componentName = tag.getAttribute('name');
      if (Components[componentName]) {
        const componentEl = Components[componentName]();
        applyAttributesFromTag(componentEl, tag);
        componentEl.add(tag);
      }
    }
  });
}

/**
 * Applies attributes from a custom tag to a component.
 * @param {Object} componentEl - The component API object.
 * @param {HTMLElement} tag - The custom tag element.
 */
function applyAttributesFromTag(componentEl, tag) {
  const attributes = tag.getAttributeNames();
  attributes.forEach(attr => {
    const value = tag.getAttribute(attr);
    switch (attr) {
      case 'text':
        componentEl.text(value);
        break;
      case 'class':
        componentEl.class(value.split(' '));
        break;
      case 'id':
        componentEl.id(value);
        break;
      case 'attrs':
        try {
          const parsedAttrs = JSON.parse(value);
          componentEl.attrs(parsedAttrs);
        } catch (e) {
          console.error('Invalid JSON in attrs attribute:', value);
        }
        break;
      case 'style':
        try {
          const parsedStyles = JSON.parse(value);
          componentEl.style(parsedStyles);
        } catch (e) {
          console.error('Invalid JSON in style attribute:', value);
        }
        break;
      case 'html':
        componentEl.html(value);
        break;
      default:
        // Handle other attributes if needed
        break;
    }
  });
}

// Render components on load
window.addEventListener('load', renderComponents);

// Example usage:

