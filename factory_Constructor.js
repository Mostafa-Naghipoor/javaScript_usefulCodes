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

  // Check if a value is a valid postal code:
  const isPostalCode = (postalCode, countryCode) => {
  if (countryCode === 'US') {
    const regex = /[0-9]{5}(?:-[0-9]{4})?/;
    return regex.test(postalCode);
  } else if (countryCode === 'CA') {
    const regex = /[ABCEGHJKLMNPRSTVXY][0-9][ABCEGHJKLMNPRSTVWXYZ] [0-9][ABCEGHJKLMNPRSTVWXYZ][0-9]/;
    return regex.test(postalCode.toUpperCase());
  } else {
    // Add regex for other country codes as needed
    return false;
  }
}