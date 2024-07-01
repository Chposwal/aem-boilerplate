// Function to convert heading to button
function convertHeadingToButton() {
    // Get the heading element by its ID
    const heading = document.getElementById('accept',);

    // Create a new button element
    const button = document.createElement('button');

    // Transfer the text content from heading to button
    button.textContent = heading.textContent;

    // Copy attributes from heading to button if necessary
    // For example, copy class, style, etc.
    button.className = heading.className;
    button.style.cssText = heading.style.cssText;

    // Replace the heading with the button
    heading.parentNode.replaceChild(button, heading);

    // Optional: Add event listener to the button
    button.addEventListener('click', function() {
        alert('Button clicked!');
    });
}

// Call the function to convert the heading to a button
convertHeadingToButton();

function convertHeadingToButton() {
    // Get the heading element by its ID
    const heading1 = document.getElementById('decline');

    // Create a new button element
    const button = document.createElement('button');

    // Transfer the text content from heading to button
    button.textContent = heading1.textContent;

    // Copy attributes from heading to button if necessary
    // For example, copy class, style, etc.
    button.className = heading1.className;
    button.style.cssText = heading1.style.cssText;

    // Replace the heading with the button
    heading1.parentNode.replaceChild(button, heading1);

    // Optional: Add event listener to the button
    button.addEventListener('click', function() {
        alert('Button clicked!');
    });
}

// Call the function to convert the heading to a button
convertHeadingToButton();
