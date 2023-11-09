import React, { useState } from "react";
import { FormField } from "../components";
import { useDropzone } from "react-dropzone";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { toast } from "react-hot-toast";

import upload2 from "../assets/upload2.png";
import secure from "../assets/secure.png";

const AddCar = () => {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("currentUser"));
  const [form, setForm] = useState({
    title: "",
    brand: "",
    price: "",
    capacity: "",
    type: "",
    location: "",
    photo: "",
    photoPreview: "",
    rented: false,
    userOwner: user._id,
  });
  const [loading, setLoading] = useState(false);

  const onChangeFile = (e) => {
    const { files } = e.target;
    setSelectedFile(files[0]);
    setDisplayFile(URL.createObjectURL(files[0]));
  };

  const handleSubmit = async (e) => {};

  const handleChange = (e) => {
    setForm((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  const { acceptedFiles, getRootProps, getInputProps, isDragActive } =
    useDropzone({
      accept: "image/*",
      onDrop: (acceptedFiles) => {
        const file = acceptedFiles[0];
        const imageUrl = URL.createObjectURL(file);
        console.log(form.photo);

        const data = new FormData();
        data.append("file", file);
        data.append("upload_preset", "aowex17c");
        data.append("cloud_name", "dlsvcai7e");
        fetch("https://api.cloudinary.com/v1_1/dlsvcai7e/upload", {
          method: "post",
          body: data,
        })
          .then((resp) => resp.json())
          .then((data) => {
            setForm((prevState) => ({
              ...prevState,
              photo: data.url,
              photoPreview: imageUrl,
            }));
          })
          .catch((err) => console.log(err));
      },
    });

  const submitCar = async (e) => {
    e.preventDefault();
    console.log("here");
    if (form.title && form.photo) {
      setLoading(true);
      try {
        const response = await fetch(
          "http://localhost:5000/api/v1/addCarRoutes",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(form),
          }
        );
        await response.json();
        navigate("/");
        toast.success("You have added a car for rent.");
      } catch (error) {
        alert("Please enter all fields");
        console.log(error);
      }
    }
  };

  const submitRent = (e) => {};

  return (
    <div className="bg-[#F6F7F9] items-center justify-center flex flex-col">
      <div className="bg-[#FFFFFF] mt-10 rounded-lg max-w-[852px] w-full h-full p-8">
        <h1 className="font-extrabold text-[#222328] text-[20px]">
          Add a Car for Rent
        </h1>
        <p className="mt-2 text-[#666e75] text-[14px] max-w-[500px]">
          Please enter your car info
        </p>
        <h1 className="font-extrabold text-[#3563E9] text-[20px] mt-4">
          Car Info
        </h1>
        <form className="mt-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              labelName="Car Title"
              type="text"
              name="title"
              placeholder="Your Car Title"
              value={form.title}
              handleChange={handleChange}
            />
            <FormField
              labelName="Car Brand"
              type="text"
              name="brand"
              placeholder="Brand Name"
              value={form.brand}
              handleChange={handleChange}
            />
            <FormField
              labelName="Rent Price"
              type="string"
              name="price"
              placeholder="Price in dollars"
              value={form.price}
              handleChange={handleChange}
            />
            <FormField
              labelName="Capacity"
              type="string"
              name="capacity"
              placeholder="Capacity in people (number)"
              value={form.capacity}
              handleChange={handleChange}
            />
            <FormField
              labelName="Car Type"
              type="text"
              name="type"
              placeholder="Car Type"
              value={form.type}
              handleChange={handleChange}
            />
            <FormField
              labelName="Location"
              type="text"
              name="location"
              placeholder="Name the location"
              value={form.location}
              handleChange={handleChange}
            />
          </div>
          <div>
            <h1 className="font-extrabold text-[#222328] text-[16px] mt-6">
              Upload Images
            </h1>
            <div
              {...getRootProps()}
              className="mt-6 w-full h-[183px] border-2 border-dotted border-gray-400 p-4 rounded-lg"
            >
              <input {...getInputProps()} onChange={onChangeFile} />
              {isDragActive ? (
                <div className="my-12 w-full flex flex-col justify-center items-center">
                  <img
                    src={upload2}
                    width={20}
                    height={20}
                    // objectFit="contain"
                    alt="file upload"
                  />
                  <p className="mt-6">Drop the image here</p>
                </div>
              ) : (
                <div className="my-12 w-full flex flex-col justify-center items-center">
                  <img
                    src={upload2}
                    width={20}
                    height={20}
                    // objectFit="contain"
                    alt="file upload"
                  />
                  <p className="mt-6">
                    Drag 'n' drop an image here, or click to select an image
                  </p>
                </div>
              )}
            </div>
            <div className="flex items-center justify-center w-full mt-8">
            <img src={form.photoPreview} />
            </div>
            <div className="flex justify-end mt-10">
              <button
                className="bg-[#3563E9] w-[148px] h-[56px] rounded-lg text-white"
                onClick={submitCar}
              >
                Register Car
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCar;
