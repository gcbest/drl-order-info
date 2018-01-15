document.addEventListener('DOMContentLoaded', () => {

    var button = document.getElementById("populate");
    button.addEventListener("click", populate);

});

function generateFakeData() {
  return {
    PO_Number: '' + faker.random.number() + faker.random.number(),
    ProBill: faker.random.number(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    address1: faker.address.streetAddress(),
    phone1: faker.phone.phoneNumberFormat(),
    sku: faker.random.number(),
    itemName: faker.company.bsBuzz()
  }
}

function populate() {
  var fakeData = generateFakeData();
  var script = `
  var inputs = document.querySelectorAll("input");

  inputs[15].value = 100;
  inputs[15].dispatchEvent(new Event('input'));

  for (var i = 0; i < 18; i++) {
    switch(inputs[i].placeholder){
      case "PO Number (s)":
        inputs[i].value = "${fakeData.PO_Number}";
        inputs[i].dispatchEvent(new Event('input'));
        break;
      case "ProBill / Freight":
        inputs[i].value = "${fakeData.ProBill}";
        inputs[i].dispatchEvent(new Event('input'));
        break;
      case "First name":
        inputs[i].value = "${fakeData.firstName}";
        inputs[i].dispatchEvent(new Event('input'));
        break;
      case "Last name":
        inputs[i].value = "${fakeData.lastName}";
        inputs[i].dispatchEvent(new Event('input'));
        break;
      case "Address 1":
        inputs[i].value = "${fakeData.address1}";
        inputs[i].dispatchEvent(new Event('input'));
        break;
      case "Zip":
        inputs[i].value = "11201";
        inputs[i].dispatchEvent(new Event('input'));
        break;
      case "Phone 1":
        inputs[i].value = "${fakeData.phone1}";
        inputs[i].dispatchEvent(new Event('input'));
        break;
      case "SKU":
        inputs[i].value = "${fakeData.sku}";
        inputs[i].dispatchEvent(new Event('input'));
        break;
      case "Name":
        inputs[i].value = "${fakeData.itemName}";
        inputs[i].dispatchEvent(new Event('input'));
        break;
      case "Vendor name":
        inputs[i].value = "adouglas";
        inputs[i].dispatchEvent(new Event('input'));
        break;
    }
  }
  `;

  chrome.tabs.executeScript({
    code: script
  });
  window.close();
}
