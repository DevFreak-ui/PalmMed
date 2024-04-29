import axios from "axios";
import PatientRecords from "../components/patientRecords/PatientRecords";
import { usersData } from "../data/dummyPatientData";
import { useEffect, useState } from "react";
import { baseURL } from "../services/baseURL";

const PatientList = () => {
const [user, setUser] = useState<any>()
  const fetchData = async () => {
    const res = await axios.get(`${baseURL}/users/find/me`);
    setUser(res.data.user)
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="bg-white dark:bg-gray-900 mt-5 min-h-[83vh] flex  flex-col   ">
      <div className=" mx-2 my-4">
        <h2 className=" text-4xl font-bold">Hello Dr. {user?.firstname},</h2>
        <h3 className="text-xl font-thin ">Good to see you again.</h3>
      </div>

      <PatientRecords />
    </section>
  );
};

export default PatientList;
