// Dummy data for organizations
const organizations = [
    {
        name: "Care for Seniors",
        location: "city 1",
        serviceType: "elderly care",
        price: 5000,
        rating: 4,
        duration: "2023-09-01",
        gender: "male",
        language: "hindi",
        description: "Providing top-quality elderly care services."
    },
    {
        name: "Helping Hands",
        location: "city2",
        serviceType: "disabled",
        price: 3000,
        rating: 3,
        duration: "2023-09-10",
        gender: "female",
        language: "english",
        description: "Specialized care for disabled individuals."
        
    },
    // Add more organization data as needed
];

// Function to display organizations
function displayOrganizations(orgs) {
    const organizationList = document.getElementById("organizationList");
    organizationList.innerHTML = ''; // Clear the list

    orgs.forEach(org => {
        const orgElement = document.createElement("div");
        orgElement.classList.add("organization");
        orgElement.innerHTML = `
            <h3>${org.name}</h3>
            <p><strong>Location:</strong> ${org.location}</p>
            <p><strong>Service:</strong> ${org.serviceType}</p>
            <p><strong>Price:</strong> ₹${org.price}</p>
            <p><strong>Rating:</strong> ${org.rating} stars</p>
            <p><strong>Gender:</strong> ${org.gender}</p>
            <p><strong>Language:</strong> ${org.language}</p>
            <p>${org.description}</p>
             <button>CONTACT US</button>
        `;
        organizationList.appendChild(orgElement);
    });
}

// Function to filter organizations based on selected criteria
function filterOrganizations() {
    const location = document.getElementById("location").value;
    const serviceType = document.getElementById("serviceType").value;
    const price = parseInt(document.getElementById("priceRange").value);
    const rating = parseInt(document.getElementById("rating").value);
   // const duration = document.getElementById("duration").value;
    const gender = document.querySelector('input[name="gender"]:checked')?.value;
    const language = document.getElementById("language").value;

    const filteredOrgs = organizations.filter(org => {
        return (location === 'all' || org.location === location) &&
               (serviceType === 'all' || org.serviceType === serviceType) &&
               (org.price <= price) &&
               (rating === 'all' || org.rating >= rating) &&
             //  (!duration || org.duration === duration) &&
               (!gender || org.gender === gender) &&
               (language === 'all' || org.language === language);
    });

    displayOrganizations(filteredOrgs);
}

// Initialize with all organizations
displayOrganizations(organizations);

// Attach event listener to filter button
document.getElementById("filterBtn").addEventListener("click", filterOrganizations);

// Update the price value display when the slider is moved
document.getElementById("priceRange").addEventListener("input", function() {
    document.getElementById("priceValue").textContent = this.value;
});
