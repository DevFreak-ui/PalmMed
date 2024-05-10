import { IoCloudUploadOutline, IoArrowBackOutline } from "react-icons/io5";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import axios from "axios";
import Alex from "../assets/images/alex.jpg";

const AccountSettings = () => {
  const [user, setUser] = useState<any>({});
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:6200/api/v1/users/find/me"
        );
        const userData = response.data.user;
        setFormData(userData);
        setUser(userData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      if (
        !formData.firstname ||
        !formData.lastname ||
        !formData.email ||
        !formData.password
      ) {
        throw new Error("All fields are required");
      }

      const response = await axios.put(
        "http://localhost:6200/api/v1/users/profile",
        formData
      );
      console.log(response);

      enqueueSnackbar("Profile updated successfully! 🤩 ", {
        variant: "success",
      });
    } catch (error) {
      enqueueSnackbar((error as Error).message, { variant: "error" });
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleGoBack = () => {
    navigate("/dashboard/patient");
  };

  return (
    <div className="container -mx-[10%] my-[10%] px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col items-center">
          <div
            style={{ marginTop: "-10%" }}
            onClick={handleGoBack}
            className="cursor-pointer"
          >
            <IoArrowBackOutline />
          </div>

          <h2 className="text-lg font-semibold mb-2">User Settings</h2>
          <div className="relative mb-2">
            <img
              src={Alex}
              alt="User"
              className="rounded-full w-32 h-32 mb-2"
            />
            <h2 className="text-lg font-semibold">
              {`${user.firstname}`} {`${user.lastname}`}
            </h2>
            <button
              type="button"
              className="text-white my-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <IoCloudUploadOutline />
              Change Picture
            </button>
          </div>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-4">General Information</h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="first_name" className="block mb-1 font-medium">
                  First Name
                </label>
                <input
                  type="text"
                  id="first_name"
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="last_name" className="block mb-1 font-medium">
                  Last Name
                </label>
                <input
                  type="text"
                  id="last_name"
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-1 font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="password" className="block mb-1 font-medium">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                />
              </div>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500"
            >
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
