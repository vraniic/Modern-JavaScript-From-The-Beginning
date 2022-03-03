document.getElementById('button').addEventListener('click', loadCustomer);

document.getElementById('button').addEventListener('click', loadCustomers);


function loadData() {
  // Create an XHR Object
  const xhr = new XMLHttpRequest();

  // OPEN
  xhr.open('GET', 'customer.json', true);



  // Optional used for spinners
  xhr.onprogress = function(){
    console.log('READYSTATE', xhr.readyState);
  }

  xhr.onload = function(){
    console.log('READYSTATE', xhr.readyState);
    if(this.status === 200) {
      document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
    }
  }


  xhr.onerror = function() {
    console.log('Request error...');
  }}
  
  xhr.send

// READY STATE VALUES  
// 0 - req not initialized
// 1 - sever connection establdihed
// 2 - req received
// 3 - processing req

// 4- req finished and response is ready 