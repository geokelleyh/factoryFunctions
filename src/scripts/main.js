// Lightning Exercise 1: Write a factory function that creates an object that represents a doctor. The function should accept three arguments.
//     Doctor's name
//     Specialty (Oncologist, pediatrician, etc...)
//     Address of practice

const createDoctorObject = ({"name", specialty, addressOfPractice}) => {
    return {
        "name" : name,
       " specialty" : specialty,
        "addressOfPractice" : addressOfPractice,
      
    }
}

const newDoctor = createDoctorObject("Rosemary Hunter","Pediatrics","Vanderbilt Monroe Carroll Children's Hospital")

console.log(newDoctor)