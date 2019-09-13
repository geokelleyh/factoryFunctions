// Lightning Exercise 1: Write a factory function that creates an object that represents a doctor. The function should accept three arguments.
//     Doctor's name
//     Specialty (Oncologist, pediatrician, etc...)
//     Address of practice

const createDoctorObject = (name, specialty, addressOfPractice) => {
    return {
        name,
        specialty,
        addressOfPractice,

    }
}

const newDoctor = createDoctorObject("Rosemary", "Pediatrics", "Vanderbilt Monroe Carroll Children's Hospital")

console.log(newDoctor)

// Lightning Exercise 2: Write a factory function that creates an object that represents a pet. The function should accept two arguments.

// Pet name
// Pet breed
// Invoke the factory function 3 times and place each animal in an array stored in a variable named BowWowKennels

const createPet = (petName, petBreed) => {
    return {
        petName,
        petBreed,
    }





}

        const fluffy = createPet("Fluffy", "Rat Terrier")
         
        const BowWowKennels = []
                 BowWowKennels.push(fluffy)
             console.log(fluffy)


        const groucho = createPet("Groucho", "Rat Terrier")
            console.log(groucho)
                 BowWowKennels.push(groucho)

        const poohBear = createPet("PoohBear", "Rat Terrier")
            console.log(poohBear)
                BowWowKennels.push(poohBear)
            console.log(BowWowKennels)

//             Practice: Music Row
// Your job is to sign each of these promising young music stars to the appropriate label.

// JumpStop Records works with Funk and Rap artists.
// Chatten Records works with Country and Bluegrass artists.
// Polar Records works with Pop artists.
// Create an array for each of these record labels.

// Create a factory function for each possible genre (e.g. createBluegrassArtist()). Then invoke the appropriate function for each of the following artists and place the resulting object in the corresponding label array.

// Bruce Atikins is a Country artist and is 23 years old
// Jensen Brown is a Pop artist and is 20 years old
// Dre Funkz is a Funk artist and is 25 years old
// Dusta Grimes is a Rap artist and is 21 years old
// Bartholomew Danielson is a Bluegrass artist and is 23 years old
// Avilee Dallas is a Country artist and is 19 years old
// Austin Kinkaid is a Pop artist and is 22 years old
// Loyoncé Branis is a Rap artist and is 27 years ol

const createArtistProfile= {
    name,
    genre,
    age,

}
const jumpStopRecords = [];
const chattenRecords = [];
const polarRecords = [];

const artistsArray = []

const bruceAtikins = createArtistProfile( "Bruce Atikins","Country", 23)
console.log(bruceAtikins)

const jensenBrown = createArtistProfile("Jensen Brown","Pop", 20)
console.log(jensenBrown)

const dreFunkz = createArtistProfile("DreFunkz", "Rap", 25)
console.log(dreFunkz)

const dustaGrimes = createArtistProfile("Dusta Grimes", "Rap", 21)
console.log(dustaGrimes)

const