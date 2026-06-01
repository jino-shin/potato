// Function to save data from the form
function saveAndPublish() {
    const name = document.getElementById('cropName').value;
    const qty = document.getElementById('cropQty').value;
    
    if (name && qty) {
        localStorage.setItem('newCrop', name);
        localStorage.setItem('newQty', qty);
        window.location.href = "index.html"; // Redirect to dashboard
    } else {
        alert("Please fill in the Crop Name and Quantity!");
    }
}

// Function to check and load data onto the dashboard
function loadSavedCrop() {
    const savedCrop = localStorage.getItem('newCrop');
    const savedQty = localStorage.getItem('newQty');
    const listDiv = document.getElementById('dynamic-list');
    
    if (savedCrop && savedQty && listDiv) {
        listDiv.innerHTML = `
            <div class="item-row" style="background-color: #e8f5e9; padding: 12px 8px; border-radius: 8px; margin-bottom: 12px; border: 1px dashed #2e7d32;">
                <span>📦 ${savedCrop} (${savedQty}kg)</span>
                <span class="status status-success" style="background-color:#2e7d32; color:white;">Just Added</span>
            </div>
        `;
    }
}
// Function to handle the Buyer Search Bar filtering
function filterCrops() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toLowerCase();
    const cards = document.getElementsByClassName('searchable-card');

    // Loop through all product cards and hide those that don't match the search input
    for (let i = 0; i < cards.length; i++) {
        const detailsText = cards[i].getElementsByClassName('product-details')[0].innerText.toLowerCase();
        
        if (detailsText.includes(filter)) {
            cards[i].style.display = ""; // Show the card
        } else {
            cards[i].style.display = "none"; // Hide the card
        }
    }
}