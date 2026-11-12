// Grab form and table elements from the DOM
const studentForm = document.getElementById('studentForm');
const studentTableBody = document.getElementById('studentTableBody');

// Listen for form submission event
studentForm.addEventListener('submit', function(event) {
    // Prevent default page reload behavior
    event.preventDefault();

    // Get input values
    const id = document.getElementById('studentId').value;
    const name = document.getElementById('studentName').value;
    const year = document.getElementById('studentYear').value;

    // Create a new table row element
    const newRow = document.createElement('tr');

    // Populate the row with the user inputs
    newRow.innerHTML = `
        <td>${escapeHTML(id)}</td>
        <td>${escapeHTML(name)}</td>
        <td>${escapeHTML(year)}</td>
    `;

    // Append the new row to the table body dynamically
    studentTableBody.appendChild(newRow);

    // Reset the form fields
    studentForm.reset();
});

// Simple helper to avoid HTML injection
function escapeHTML(str) {
    return str.replace(/[&<>'"]/g,
        tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
    );
}