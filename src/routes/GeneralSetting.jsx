import React, { useState } from "react";
export default function GeneralSetting() {
  const [formData, setFormData] = useState({
    name: "",
    emailaddress: "",
    photo: "",
  });
  const [img, setImg] = useState(null);
  const [imgname, setImgname] = useState("");
  const infos = [
    {
      name: "System Name",
      placeholder: "Kyauk Taw Gyi",
      fieldName: "name",
      type: "text",
    },
    {
      name: "Email Address",
      placeholder: "kyauktawgyi@gmail.com",
      fieldName: "emailaddress",
      type: "email",
    },
    {
      name: "System Logo",
      placeholder: "photo.jpg",
      fieldName: "photo",
      type: "text",
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };
  const handleImageChange = (e) => {
    const { name } = e.target;
    console.log(name);
    const reader = new FileReader(),
      files = e.target.files;
    reader.onload = function () {
      setImg(reader.result);
    };
    reader.readAsDataURL(files[0]);
    setImgname(files[0].name);
    setFormData((prevInputs) => ({
      ...prevInputs,
      [name]: imgname,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div
      className="flex flex-col h-screen pt-5 gap-y-8"
      style={{ width: "538px" }}
    >
      <h1 className="text-2xl font-bold ">General Setting</h1>
      <form
        className="flex flex-col w-full h-full gap-y-4"
        onSubmit={handleSubmit}
      >
        {infos.map((info) => (
          <div
            className="grid items-center w-full gap-x-2"
            style={{ gridTemplateColumns: "120px 300px 1fr" }}
          >
            <span className="text-base font-medium">{info.name}</span>
            {info.fieldName === "photo" ? (
              <div className="flex items-center justify-start col-span-2 gap-x-2">
                <input
                  className="px-2 text-sm font-medium bg-white border border-none rounded-md outline-none h-11 hover:cursor-pointer"
                  style={{ width: "300px" }}
                  type={info.type}
                  name={info.fieldName}
                  placeholder={imgname}
                  readOnly
                />
                <label className="flex items-center justify-center w-auto h-10 px-5 text-sm font-medium bg-yellow-500 rounded-md hover:cursor-pointer hover:shadow-lg">
                  Browse
                  <input
                    type="file"
                    id="file"
                    name="photo"
                    accept="image/*"
                    onChange={handleImageChange}
                    style={{ display: "none" }}
                  />
                </label>
              </div>
            ) : info.fieldName === "emailaddress" ? (
              <input
                className="px-2 text-sm font-medium bg-white rounded-md outline-none borderborder-none h-11"
                type={info.type}
                name={info.fieldName}
                value={formData[info.fieldName]}
                placeholder={info.placeholder}
                onChange={handleChange}
                pattern="[a-zA-Z0-9._%+-]+@somemail\.com"
                required
              />
            ) : (
              <input
                className="px-2 text-sm font-medium bg-white border-none rounded-md outline-none h-11"
                type={info.type}
                name={info.fieldName}
                value={formData[info.fieldName]}
                placeholder={info.placeholder}
                onChange={handleChange}
              />
            )}
          </div>
        ))}
        <div
          className="grid w-auto h-auto gap-x-2"
          style={{ gridTemplateColumns: "120px 300px 1fr" }}
        >
          <span></span>
          {img ? (
            <img src={img} alt="Profile" className="h-auto w-60" />
          ) : (
            <span className="h-40 bg-gray-300 w-60"></span>
          )}
          <span></span>
        </div>
        <div
          className="flex flex-col h-auto pl-32 gap-y-5"
          style={{ width: "466px" }}
        >
          <input
            type="submit"
            name="Update"
            className="w-1/3 h-10 text-sm font-medium bg-yellow-500 rounded-md shadow-md hover:cursor-pointer"
            value="Update"
          />
        </div>
      </form>
    </div>
  );
}
