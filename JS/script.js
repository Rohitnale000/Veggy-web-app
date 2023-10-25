//add data into localstorage 
let array = JSON.parse(localStorage.getItem('veggy')) || [
    {
        id: 1,
        img: 'https://www.jiomart.com/images/product/original/590003517/tomato-1-kg-product-images-o590003517-p590003517-0-202203170629.jpg?im=Resize=(360,360)',
        name: "Tomato -1kg",
        price: 16,
        count: 1
    },
    {
        id: 2,
        img: 'https://www.jiomart.com/images/product/original/590003546/carrot-orange-500-g-product-images-o590003546-p590003546-0-202203151011.jpg?im=Resize=(360,360)',
        name: "Carrot -1kg",
        price: 56,
        count: 1
    },
    {
        id: 3,
        img: 'https://www.jiomart.com/images/product/original/590003547/cluster-beans-500-g-product-images-o590003547-p590003547-0-202203151354.jpg?im=Resize=(360,360)',
        name: "Beans -1kg",
        price: 82,
        count: 1
    },
    {
        id: 4,
        img: 'https://www.jiomart.com/images/product/original/590003545/brinjal-nagpure-500-g-product-images-o590003545-p590003545-0-202203152230.jpg?im=Resize=(360,360)',
        name: "brinjal -1kg",
        price: 35,
        count: 1
    },
    {
        id: 5,
        img: 'https://www.jiomart.com/images/product/original/590003662/green-capsicum-500-g-product-images-o590003662-p590003662-0-202203151617.jpg?im=Resize=(360,360)',
        name: "Capsicum -1kg",
        price: 55,
        count: 1
    },
    {
        id: 6,
        img: 'https://www.jiomart.com/images/product/original/590003475/red-capsicum-200-g-product-images-o590003475-p590003475-0-202203170158.jpg?im=Resize=(360,360)',
        name: "Red Capsicum -1kg",
        price: 75,
        count: 1
    },
    {
        id: 7,
        img: 'https://www.jiomart.com/images/product/original/590004487/apple-indian-6-pcs-pack-approx-750-g-950-g-product-images-o590004487-p590004487-0-202203170227.jpg?im=Resize=(360,360)',
        name: "Apple -1kg",
        price: 130,
        count: 1
    },
    {
        id: 8,
        img: 'https://www.jiomart.com/images/product/original/590003533/green-chilli-200-g-product-images-o590003533-p590003533-0-202203150435.jpg?im=Resize=(360,360)',
        name: "Green Chilli -200g",
        price: 24,
        count: 1
    },
    {
        id: 9,
        img: 'https://www.jiomart.com/images/product/original/590003550/bhendi-okra-500-g-product-images-o590003550-p590003550-0-202203170339.jpg?im=Resize=(360,360)',
        name: "Okra -1kg",
        price: 40,
        count: 1
    },
    {
        id: 10,
        img: 'https://www.jiomart.com/images/product/original/590003538/cabbage-per-pc-approx-600-g-1000-g-product-images-o590003538-p590003538-0-202203170436.jpg?im=Resize=(360,360)',
        name: "Cabbage -1kg",
        price: 29,
        count: 1
    },
    {
        id: 11,
        img: 'https://www.jiomart.com/images/product/original/590003537/cauliflower-1-pc-approx-600-g-1000-g-product-images-o590003537-p590003537-0-202203170515.jpg?im=Resize=(360,360)',
        name: "Cauliflower 1 pc",
        price: 48,
        count: 1
    },
    {
        id: 12,
        img: 'https://www.jiomart.com/images/product/original/590003515/onion-1-kg-product-images-o590003515-p590003515-0-202203170724.jpg?im=Resize=(360,360)',
        name: "Onion -1kg",
        price: 30,
        count: 1
    },
    {
        id: 13,
        img: 'https://www.jiomart.com/images/product/original/590003532/indian-garlic-200-g-product-images-o590003532-p590003532-0-202203141952.jpg?im=Resize=(360,360)',
        name: "Garlic -200g",
        price: 44,
        count: 1
    }


];
localStorage.setItem('veggy', JSON.stringify(array));

//pagination logic
const itemsPerPage = 4; // Number of items to show on each page
let currentPage = 1; // Current page number
let data = JSON.parse(localStorage.getItem('veggy')); // Assuming you have your data loaded

const getItemsData = () => {
    const data = JSON.parse(localStorage.getItem('veggy'));
    const container = document.querySelector('.container .row');
    container.innerHTML = ''; // Clear the container before adding new items
    // Calculate the start and end indices for the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    for (let i = startIndex; i < endIndex && i < data.length; i++) {
        const item = data[i];
        // Create a card element
        const card = document.createElement('div');
        card.className = 'col-lg-3 col-md-4 col-sm-12 pt-4';
        card.innerHTML = `
        <div class="card border-0 shadow pb-4">
        <a href="javascript:;" onclick="openPopup('${item.id}')">
        <img class="img-fluid" src="${item.img}" alt="Card image cap" id='img-click'>
        </a>
            <div class="card-body p-3">
                <h5 class="card-title text-center ">${item.name}</h5>
                <h4 class="text-center fw-bold ">Rs. ${item.price}</h4>
                <div class="d-flex justify-content-evenly pt-3 pb-4">
                    <button class="btn btn-link btn-link-pos-neg"
                        onclick="stepDown('${item.id}')">
                        <i class="fas fa-minus"></i>
                    </button>
                    <input id="form1" min="0" name="quantity" type="text" value="${item.count}" class="adcol text-center fw-bold w-25" disabled  />
                    <button class="btn btn-link btn-link-pos-neg"        
                        onclick="stepUp('${item.id}')">
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
                <div class="align-items-center pt-4 text-center">
                    <button type="button" class="btn btn-success btn-lg btn-block rounded-0  px-5" onclick="addToCart('${item.id}')">Add to Cart</button>
                </div>
            </div> 
            </div>
        `;
        // Append the card to the container
        container.appendChild(card);
    }
    let total = JSON.parse(localStorage.getItem('cart')).length;
    document.getElementById('total').innerHTML = '';
    document.getElementById('total').innerHTML = total;
    let subTotal = 0;
    cartArray.forEach(element => {
        subTotal = subTotal + element.count * element.price;
        document.getElementById('sub').innerHTML = subTotal;
    });
}

const onbtnPrev = () => {
    if (currentPage > 1) {
        changePage(currentPage - 1);
    }
}

const onbtnNext = () => {
    const totalPages = Math.ceil(data.length / itemsPerPage);
    if (currentPage < totalPages) {
        changePage(currentPage + 1);
    }
}

function generatePageNumbers(totalPages) {
    const pagination = document.querySelector('.pagination');
    pagination.innerHTML = '';
    const maxVisiblePages = 10;
    for (let page = 1; page <= totalPages; page++) {
        if (
            page === 1 ||
            page === totalPages ||
            (page >= currentPage - Math.floor(maxVisiblePages / 2) &&
                page <= currentPage + Math.floor(maxVisiblePages / 2))
        ) {
            const li = document.createElement('li');
            li.className = 'page-item';
            const a = document.createElement('a');
            a.className = 'page-link fs-4';
            a.href = 'javascript:';
            a.textContent = page;
            a.onclick = () => changePage(page);
            li.appendChild(a);
            pagination.appendChild(li);
        }
    }
}

function changePage(newPage) {
    const totalPages = Math.ceil(data.length / itemsPerPage);
    currentPage = newPage;
    getItemsData();
    generatePageNumbers(totalPages);
}

//open popup after click on image 
function openPopup(id) {
    id = Number(id);
    let data = JSON.parse(localStorage.getItem('veggy'));
    for (let i = 0; i < data.length; i++) {
        if (data[i].id === id) {
            const modal = document.createElement('div');
            modal.className = 'modal fade';
            modal.id = 'myModal';
            modal.innerHTML = `
            <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header text-center">
                    <h5 class="modal-title " id="exampleModalLongTitle">${data[i].name}</h5>   
                </div>
                <div class="modal-body text-center">
                    <img class="img-fluid" src="${data[i].img}" alt="Image">
                </div>
                <div class="ps-4 pb-4 text-center">
                    <h5 class="modal-title" id="exampleModalLongTitle">Rs.${data[i].price}</h5>
                </div>
            </div>
        </div>
            `;
            document.body.appendChild(modal);
            $(modal).modal('show');
        }
    }
}

//add to cart
let cartArray = JSON.parse(localStorage.getItem('cart')) || [];
const addToCart = (id) => {
    id = Number(id);
    let data = JSON.parse(localStorage.getItem('veggy'));
    data.forEach(element => {
        if (element.id === id) {
            const recordExists = cartArray.some(record => record.id === element.id);
            if (!recordExists) {
                cartArray.push(element)
                localStorage.setItem('cart', JSON.stringify(cartArray));
                let a = 0
                cartArray.forEach(element => {
                    a = a + element.count * element.price
                    document.getElementById('sub').innerHTML = a
                });
            } else {
                const cartData = JSON.parse(localStorage.getItem('cart'));
                for (const product of cartData) {
                    if (product.id == element.id)
                        product.count = product.count + element.count
                }
                localStorage.setItem("cart", JSON.stringify(cartData))
                showCartData();
                let a = 0;
                cartData.forEach(element => {
                    a = a + element.count * element.price
                    document.getElementById('sub').innerHTML = a
                });
            }
        }
    });
    let total = JSON.parse(localStorage.getItem('cart'))
    document.getElementById('total').innerHTML = ''
    document.getElementById('total').innerHTML = total.length
}

//this function show cart data in the cart
const showCartData = () => {
    document.getElementById('offcanvasId').innerHTML = '';
    let cartData = JSON.parse(localStorage.getItem('cart'));
    cartData.forEach((element) => {
        document.getElementById('offcanvasId').innerHTML += `
                <div class="row">
                    <div class="d-flex justify-content-between align-items-center" >
                <img src="${element.img}" class="circle-img img-fluid" alt="...">
                <span class="fs-5 fw-bold">${element.name}</span>
                <button class="btn btn-link btn-link-pos-neg border"
                    onclick="stepDownCart('${element.id}')">
                    <i class="fas fa-minus"></i>
                </button>
                <input id="form1" min="0" name="quantity" value="${element.count}" type="number"
                    class="text-center fw-bold " disabled />
                <button class="btn btn-link btn-link-pos-neg border"
                onclick="stepUpCart('${element.id}')">
                    <i class="fas fa-plus"></i>
                </button>
                <button type="button" class="btn-close" aria-label="Close" onclick="removeCardItem('${element.id}')"></button>
               </div>
                </div>
                 `;
    });
}

//to remove item from cart
const removeCardItem = (id) => {
    let cartData = JSON.parse(localStorage.getItem('cart'));
    cartData.forEach((element, index) => {
        if (element.id == id) {
            const r = cartData.splice(index, 1);
            cartData = JSON.stringify(cartData);
            localStorage.setItem("cart", cartData);
            //to show cart immediatly after remove item from cart that's why call that method again
            showCartData();
            let total = JSON.parse(localStorage.getItem('cart')).length;
            document.getElementById('total').innerHTML = '';
            document.getElementById('total').innerHTML = total;    
        }
    })

}

//this function gives search result from localstorage
const onSearch = (e) => {
    let filterVal = document.getElementById("searchIn").value.toUpperCase();
    if (filterVal == '') {
        location.reload();
    }
    const container = document.querySelector('.container .row');
    container.innerHTML = '';
    const data = JSON.parse(localStorage.getItem('veggy'));
    let flag = false;
    for (let i = 0; i < data.length; i++) {
        const element = data[i];
        if (element.name.toUpperCase().indexOf(filterVal) > -1) {
            const card = document.createElement('div');
            card.className = 'col-lg-3 col-md-4 col-sm-12 pt-4';
            card.innerHTML = `
                <div class="card border-0 shadow pb-4">
                <a href="javascript:;" onclick="openPopup('${element.id}')">
                <img class="img-fluid" src="${element.img}" alt="Card image cap" id='img-click'>
                </a>
                    <div class="card-body p-3">
                        <h5 class="card-title text-center ">${element.name}</h5>
                        <h4 class="text-center fw-bold ">Rs. ${element.price}</h4>
                        <div class="d-flex justify-content-evenly pt-3 pb-4 ">
                            <button class="btn btn-link btn-link-pos-neg"
                            onclick="searchStepDown('${element.id}')">
                                <i class="fas fa-minus"></i>
                            </button>
                            <input id="form1" min="0" name="quantity" value="${element.count}"  type="text" class="text-center fw-bold w-25" disabled />
                            <button class="btn btn-link btn-link-pos-neg"
                                onclick="searchStepUp('${element.id}')">
                                <i class="fas fa-plus"></i>
                            </button>
                        </div>
                        <div class="align-items-center pt-4 text-center">
                            <button type="button" class="btn btn-success btn-lg btn-block rounded-0  px-5" onclick="addToCart('${element.id}')">Add to Cart</button>
                        </div>
                    </div> 
                    </div>
                `;
            container.appendChild(card);
            flag = true;
        }
    }

    if (!flag) {
        const notFoundMessage = document.createElement('div');
        notFoundMessage.className = 'col-12 text-center';
        notFoundMessage.innerHTML = `
            <img src="https://img.freepik.com/free-vector/hand-drawn-no-data-illustration_23-2150544949.jpg?w=826&t=st=1698142721~exp=1698143321~hmac=4cda997b788eef74638ddddf7d1e53b098024aae43fa1ad4bad440739629b413" class="img-fluid" alt="...">
            `;
        container.appendChild(notFoundMessage);
    }

    generatePageNumbers(0);
}

const stepUp = (id) => {
    id = Number(id);
    const data = JSON.parse(localStorage.getItem('veggy'));
    for (const product of data) {
        if (product.id === id) {
            product.count = product.count + 1;
        }
    }
    localStorage.setItem("veggy", JSON.stringify(data));
    getItemsData();
}

const stepUpCart = (id) => {
    id = Number(id);
    const cartData = JSON.parse(localStorage.getItem('cart'));
    for (const product of cartData) {
        if (product.id === id) {
            product.count = product.count + 1;
        }
    }
    localStorage.setItem("cart", JSON.stringify(cartData));
    showCartData();
}

const searchStepUp = (id) => {
    id = Number(id);
    const mainData = JSON.parse(localStorage.getItem('veggy'));
    for (const product of mainData) {
        if (product.id === id) {
            product.count = product.count + 1;
        }
    }
    localStorage.setItem("veggy", JSON.stringify(mainData));
    onSearch();
}

const stepDown = (id) => {
    id = Number(id);
    const data = JSON.parse(localStorage.getItem('veggy'));
    for (const product of data) {
        if (product.id === id) {
            if (product.count > 1) {
                product.count = product.count - 1;
            }
        }
    }
    localStorage.setItem("veggy", JSON.stringify(data));
    getItemsData();
}

const stepDownCart = (id) => {
    id = Number(id);
    const cartData = JSON.parse(localStorage.getItem('cart'));
    for (const product of cartData) {
        if (product.id === id) {
            if (product.count > 1) {
                product.count = product.count - 1;
            }
        }
    }
    localStorage.setItem("cart", JSON.stringify(cartData));
    showCartData();
}

const searchStepDown = (id) => {
    id = Number(id);
    const mainData = JSON.parse(localStorage.getItem('veggy'));
    for (const product of mainData) {
        if (product.id === id) {
            if (product.count > 1) {
                product.count = product.count - 1;
            }
        }
    }
    localStorage.setItem("veggy", JSON.stringify(mainData));
    onSearch();
}

const onCloseFun = () => {
    location.reload();
}
