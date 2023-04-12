//factory function

function createAddress(street,city, zipCode) {
return {
    street,
    city,
    zipCode
}
}
 let address = createAddress("a","b","c", "d");
console.log(address)



//constructor function

function CreateAddress(street,city, zipCode) {

    this.street=street;
    this.city=city;
    this.zipCode=zipCode;
}
 let Address = new CreateAddress("a","b","c");
  console.log(Address)