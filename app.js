//get search results
const searchPhones = () => {
    //get search field value
    const searchText = document.getElementById('searchField').value;
    // console.log(searchText);
    //delete searchField.value
    searchField.value = '';
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(phone => displaySearchResults(phone.data.slice(0, 20)));
}

//display search results of iphone
const displaySearchResults = phones => {
    const displaySearchResult = document.getElementById('displaySearchResult');
    displaySearchResult.textContent = '';
    phones.forEach(phone => {
        // console.log(phone);
        const div = document.createElement('div');
        div.classList.add('card');
        //div.style.height = ' 15rem';
        div.innerHTML = `
            <img src="${phone.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${phone.phone_name}</h5>
                <p class="card-text">Brand: ${phone.brand}</p>
                <button onclick="loadMealDetails('${phone.slug}')" class="btn btn-primary">Show Details</button>
            </div>
        `
        displaySearchResult.appendChild(div);
    })
}

// load phone details with slug id
const loadMealDetails = id => {
    const url = `https://openapi.programming-hero.com/api/phone/${id}`;
    fetch(url)
        .then(response => response.json())
        .then(phoneDetail => displayPhoneDEtails(phoneDetail.data));
}

const displayPhoneDEtails = phone => {
    // console.log(phone);
    const phoneDetails = document.getElementById('displayPhoneDetails');
    phoneDetails.textContent = ' ';
    const div = document.createElement('div');
    div.classList.add('card');

    div.style.width = '18rem';
    div.innerHTML =
        `
        <img src="${phone.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${phone.name}</h5>
            <p class="card-text">Brand: ${phone.brand}</p>
            <p class="card-text">storage: ${phone.mainFeatures.storage}</p>
            <p class="card-text">Sensor: ${phone.mainFeatures.sensors}</p>
            <p class="card-text">GPS: ${phone.others.GPS}</p>
            <p class="card-text">USB: ${phone.others.USB}</p>
            
        </div>
        `
    phoneDetails.appendChild(div);

}