Below is the complete documentation in Markdown format as a plain text file. You can save it as `doc.md`:

```markdown
# JavaScript Component Library Documentation

This document provides details about the functions, methods, and usage examples for the JavaScript component library. The library offers a fluent API to create and manipulate DOM elements, register global component functions, and render components from custom tags.

---

## Table of Contents

- [registerComponents](#registercomponents)
- [create](#create)
  - [Fluent API Methods](#fluent-api-methods)
  - [Usage Examples](#usage-examples)
- [renderComponents](#rendercomponents)
- [applyAttributesFromTag](#applyattributesfromtag)

---

## registerComponents

```javascript
/**
 * Converts components into global functions.
 * @param {Object} Components - An object containing component functions.
 */
function registerComponents(Components) {
  Object.keys(Components).forEach(name => {
    window[name] = Components[name]; // Now you can directly call `button()`, `container()`, etc.
  });
}
```

**Description:**  
`registerComponents` takes an object where each key is a component name and its value is a function. It registers these functions as global functions on the `window` object, so they can be called directly.

**Example:**

```javascript
registerComponents({
  button: function() {
    return create('button').text('Click Me');
  },
  container: function() {
    return create('div').class('container');
  }
});

// Now you can directly use `button()` and `container()` anywhere in your code.
```

---

## create

```javascript
/**
 * Creates a DOM element with a fluent API for chaining.
 * @param {string} tagName - The HTML tag name.
 * @returns {Object} - A fluent API object for manipulating the element.
 */
function create(tagName) {
  const el = document.createElement(tagName);

  const api = {
    // Methods defined below...

    /**
     * The underlying DOM element.
     * @type {HTMLElement}
     */
    el
  };

  // Method implementations...
  // (see below for the complete list of methods)
  
  return api;
}
```

**Description:**  
The `create` function constructs a new DOM element with the specified tag name and returns an API object that supports method chaining. This fluent API allows you to modify the element easily.

---

### Fluent API Methods

#### `text(txt)`
- **Description:** Sets the text content of the element.
- **Parameters:**  
  - `txt` (string): The text content.
- **Returns:** The API object (for chaining).

**Example:**

```javascript
create('div').text('Hello World');
```

---

#### `class(classes)`
- **Description:** Adds classes to the element.
- **Parameters:**  
  - `classes` (string|string[]): A class name or array of class names.
- **Returns:** The API object (for chaining).

**Example:**

```javascript
create('p').class(['highlight', 'lead']);
```

---

#### `id(idVal)`
- **Description:** Sets the ID of the element.
- **Parameters:**  
  - `idVal` (string): The ID value.
- **Returns:** The API object (for chaining).

**Example:**

```javascript
create('span').id('unique-id');
```

---

#### `attrs(attributes)`
- **Description:** Sets attributes on the element.
- **Parameters:**  
  - `attributes` (Object): An object of key-value pairs representing attributes.
- **Returns:** The API object (for chaining).

**Example:**

```javascript
create('img').attrs({ src: 'image.jpg', alt: 'A picture' });
```

---

#### `style(styles)`
- **Description:** Applies styles to the element.
- **Parameters:**  
  - `styles` (Object): An object of key-value pairs representing CSS styles.
- **Returns:** The API object (for chaining).

**Example:**

```javascript
create('div').style({ backgroundColor: 'blue', padding: '10px' });
```

---

#### `html(htmlContent)`
- **Description:** Sets the inner HTML of the element.
- **Parameters:**  
  - `htmlContent` (string): The HTML content.
- **Returns:** The API object (for chaining).

**Example:**

```javascript
create('div').html('<strong>Bold text</strong>');
```

---

#### `event(eventName, callback)`
- **Description:** Adds an event listener to the element.
- **Parameters:**  
  - `eventName` (string): The name of the event.
  - `callback` (Function): The event handler function.
- **Returns:** The API object (for chaining).

**Example:**

```javascript
create('div').event('mouseover', () => console.log('Hovered!'));
```

---

#### `onClick(callback)`
- **Description:** A shorthand for adding a click event listener.
- **Parameters:**  
  - `callback` (Function): The click event handler.
- **Returns:** The API object (for chaining).

**Example:**

```javascript
create('button').text('Click Me').onClick(() => alert('Button clicked!'));
```

---

#### `onLoad(callback)`
- **Description:** Adds a load event listener to the window.
- **Parameters:**  
  - `callback` (Function): The load event handler.
- **Returns:** The API object (for chaining).

**Example:**

```javascript
create('div').onLoad(function() {
  console.log('Window loaded, and callback called with element as context.');
});
```

---

#### `child(childrenArray)`
- **Description:** Appends children to the element.
- **Parameters:**  
  - `childrenArray` (Array|HTMLElement): An array of elements or a single element.
- **Returns:** The API object (for chaining).

**Example:**

```javascript
const childElement = create('span').text('Child');
create('div').child(childElement);
```

---

#### `add(target)`
- **Description:** Appends the element to a target parent.
- **Parameters:**  
  - `target` (string|HTMLElement): A selector string or an HTMLElement representing the target parent.
- **Returns:** The API object (for chaining).

**Example:**

```javascript
create('p').text('Appended paragraph').add('body');
```

---

#### `remove()`
- **Description:** Removes the element from the DOM.
- **Returns:** The API object (for chaining).

**Example:**

```javascript
const elem = create('div').text('Temporary').add('body');
// Later, to remove the element:
elem.remove();
```

---

#### `replace(newElement)`
- **Description:** Replaces the element with another element.
- **Parameters:**  
  - `newElement` (HTMLElement): The new element that will replace the existing one.
- **Returns:** The API object (for chaining).

**Example:**

```javascript
const oldElem = create('div').text('Old Element').add('body');
const newElem = document.createElement('span');
newElem.textContent = 'New Element';
oldElem.replace(newElem);
```

---

#### `clone(deep = true)`
- **Description:** Clones the element.
- **Parameters:**  
  - `deep` (boolean): If true, a deep clone is made (default is true).
- **Returns:** The cloned HTMLElement.

**Example:**

```javascript
const original = create('div').text('Clone me').add('body');
const cloneElem = original.clone();
```

---

#### `editChild(index, editFn)`
- **Description:** Edits a child element at a specified index by applying a provided function.
- **Parameters:**  
  - `index` (number): The index of the child element to modify.
  - `editFn` (Function): A function that receives an API object for the child element.
- **Returns:** The API object (for chaining).

**Example:**

```javascript
const parent = create('div').child(
  create('p').text('Child 1'),
  create('p').text('Child 2')
).add('body');

// Edit the second child (index 1)
parent.editChild(1, childAPI => {
  childAPI.text('Modified Child 2').class('modified');
});
```

---

### Usage Examples

#### Example 1: Creating an Element with Text, Class, and Event

```javascript
create('div')
  .text('Hello World')      // Sets the text content of the div
  .class('my-class')        // Adds a class to the div
  .onClick(() => console.log('Div clicked!')) // Adds a click event listener
  .add('body');             // Appends the div to the body
```

#### Example 2: Creating an Element with Multiple Classes and Styles

```javascript
create('p')
  .class(['class1', 'class2', 'class3'])  // Adds multiple classes
  .style({ color: 'green', fontSize: '18px' }) // Applies CSS styles
  .text('This is a styled paragraph with multiple classes.')
  .add('body');
```

#### Example 3: Creating an Element with Attributes and HTML Content

```javascript
create('div')
  .attrs({ 'data-id': '123', 'data-role': 'admin' })  // Sets custom attributes
  .html('<strong>Bold HTML Content</strong>')         // Sets inner HTML
  .add('body');
```

#### Example 4: Using onLoad to Execute Code After Window Loads

```javascript
create('div')
  .text('I will log a message after window loads')
  .onLoad(function() {
    console.log('Window has finished loading. This callback runs in the context of the element.');
  })
  .add('body');
```

---

## renderComponents

```javascript
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
```

**Description:**  
The `renderComponents` function scans the DOM for custom tags (`<container>` and `<component name="...">`) and renders them by creating the corresponding component elements. It also applies any attributes defined on the custom tag to the component.

**Usage:**  
This function is automatically called on window load using an event listener:

```javascript
window.addEventListener('load', renderComponents);
```

---

## applyAttributesFromTag

```javascript
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
```

**Description:**  
This function takes a component's API object and a custom tag element, then applies the tag’s attributes (such as `text`, `class`, `id`, `attrs`, `style`, and `html`) to the component using the corresponding fluent API methods.

---

## Conclusion

This JavaScript component library provides a simple, yet powerful, API for DOM manipulation. By using methods like `text()`, `class()`, `onClick()`, and many others, you can easily create, modify, and manage elements dynamically with clean and readable code.

Feel free to extend and customize the functionality as needed for your project.
```

This Markdown file includes detailed descriptions, code examples, and usage cases for all the functions and methods in the JavaScript code.