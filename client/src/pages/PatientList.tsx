import PatientRecords from "../components/patientRecords/PatientRecords"
import { usersData } from "../data/dummyPatientData"

const PatientList = () => {
  return (
    <section className="bg-white dark:bg-gray-900 mt-5 min-h-[83vh] flex  flex-col   ">

      <div className=" mx-2 my-4">
        <h2 className=" text-4xl font-bold">
        Hello Dr. Moses,
        </h2>
        <h3 className="text-xl font-thin ">Good to see you again.</h3>
      </div>
      
      
      <PatientRecords data={usersData} />
    </section>
  )
}

export default PatientList
