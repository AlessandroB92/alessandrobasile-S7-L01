class Pet {
    constructor(petName, ownerName, species, breed) {
        this.petName = petName;
        this.ownerName = ownerName;
        this.species = species;
        this.breed = breed;
    }

    hasSameOwner(anotherPet) {
        return this.ownerName.toLowerCase() === anotherPet.ownerName.toLowerCase();
    }
}

function addPet() {
    const petName = document.getElementById('petName').value;
    const ownerName = document.getElementById('ownerName').value;
    const species = document.getElementById('species').value;
    const breed = document.getElementById('breed').value;

    const newPet = new Pet(petName, ownerName, species, breed);
    displayPet(newPet);

    // Clear the form fields
    document.getElementById('petForm').reset();
}

function displayPet(pet) {
    const petList = document.getElementById('petList');
    const li = document.createElement('li');
    li.innerText = `Pet: ${pet.petName}, Owner: ${pet.ownerName}, Species: ${pet.species}, Breed: ${pet.breed}`;
    petList.appendChild(li);

    // Check if the new pet shares the same owner with any existing pets
    const pets = petList.getElementsByTagName('li');
    for (let i = 0; i < pets.length - 1; i++) {
        const existingPet = pets[i].innerText.split(', ');
        const existingOwner = existingPet[1].split(': ')[1];
        if (pet.hasSameOwner({ ownerName: existingOwner })) {
            showWarning(`${pet.petName} and ${existingPet[0].split(': ')[1]} share the same owner!`);
        }
    }
}

function showWarning(message) {
    const warningDiv = document.getElementById('warning');
    warningDiv.textContent = message;
}