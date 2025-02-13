document.addEventListener('DOMContentLoaded', () => {
    console.log('Document loaded');
    // Add any JavaScript functionality here
});

function toggleDetails(id) {
    const element = document.getElementById(id);
    if (element.style.display === 'none' || element.style.display === '') {
        element.style.display = 'block';
    } else {
        element.style.display = 'none';
    }
}
