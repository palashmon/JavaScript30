
// Get all the links on the page
// Create a dynamic span for highlighting the anchor text
// Add a class highlight to the dynamic span and add the new element to DOM
const triggers = document.querySelectorAll('a');
const highlight = document.createElement('span');
highlight.classList.add('highlight');
document.body.append(highlight);

// This function is used to highlight the link on mouse enter
function highlightLink() {

  console.log(`Link text is: %c${this.text || ''}`, 'color:green;font-weight:bold');

  // Get the size of an element and its position relative to the viewport.
  // Element.getBoundingClientRect()
  // https://developer.mozilla.org/en/docs/Web/API/Element/getBoundingClientRect
  // linkCoords is a DOMRect object with 6 properties: left, top, right, bottom, width, height
  const linkCoords = this.getBoundingClientRect();
  console.log(linkCoords);

  // Create a new coords variable for setting the values
  const coords = {
    width: linkCoords.width,
    height: linkCoords.height,
    top: linkCoords.top + window.scrollY,
    left: linkCoords.left + window.scrollX
  };

  // Set the dynamic span's width, height & transform values
  highlight.style.width = `${coords.width}px`;
  highlight.style.height = `${coords.height}px`;
  highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;

}

// Attach a mouseenter event listener to all of the links on the page
triggers.forEach(a => a.addEventListener('mouseenter', highlightLink));