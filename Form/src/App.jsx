import React, { useState } from "react";

const App = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    age: "",
    dob: "",
    gender: "",
    course: "",
    skills: [],
    country: "",
    address: "",
    website: "",
    preferredTime: "",
    favoriteColor: "#000000",
    experience: 0,
    photo: null,
    terms: false,
  });

  const [submittedData, setSubmittedData] = useState(null);

  // Handle normal inputs
  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    setFormData({
      ...formData,
      [name]:
        type === "checkbox"
          ? checked
          : type === "file"
          ? files[0]
          : value,
    });
  };

  // Handle skills
  const handleSkillChange = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setFormData({
        ...formData,
        skills: [...formData.skills, value],
      });
    } else {
      setFormData({
        ...formData,
        skills: formData.skills.filter(
          (skill) => skill !== value
        ),
      });
    }
  };

  // Submit form
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.terms) {
      alert("Please agree with the Terms and Conditions.");
      return;
    }

    // Save entered data
    setSubmittedData(formData);
  };

  // Reset form
  const handleReset = () => {
    setFormData({
      fullName: "",
      email: "",
      password: "",
      age: "",
      dob: "",
      gender: "",
      course: "",
      skills: [],
      country: "",
      address: "",
      website: "",
      preferredTime: "",
      favoriteColor: "#000000",
      experience: 0,
      photo: null,
      terms: false,
    });

    setSubmittedData(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 px-3 py-6 sm:px-5">

      <div className="mx-auto w-full max-w-4xl border border-gray-300 bg-white p-4 sm:p-6">

        {/* Heading */}
        <h1 className="mb-6 bg-orange-400 py-2 text-center text-2xl font-semibold text-black sm:text-3xl">
          Registration Form
        </h1>

        <form onSubmit={handleSubmit}>

          {/* Full Name */}
          <div className="mb-5">
            <label className="mb-2 block text-sm font-medium text-gray-800">
              Full Name
            </label>

            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your name"
              required
              className="w-full border border-gray-300 bg-white px-3 py-2 text-sm text-black outline-none focus:border-blue-500"
            />
          </div>

          {/* Email */}
          <div className="mb-5">
            <label className="mb-2 block text-sm font-medium text-gray-800">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="w-full border border-gray-300 bg-white px-3 py-2 text-sm text-black outline-none focus:border-blue-500"
            />
          </div>

          {/* Password */}
          <div className="mb-5">
            <label className="mb-2 block text-sm font-medium text-gray-800">
              Password
            </label>

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter password"
              required
              className="w-full border border-gray-300 bg-white px-3 py-2 text-sm text-black outline-none focus:border-blue-500"
            />
          </div>

          {/* Age */}
          <div className="mb-5">
            <label className="mb-2 block text-sm font-medium text-gray-800">
              Age
            </label>

            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              placeholder="Enter your age"
              min="1"
              max="100"
              required
              className="w-full border border-gray-300 bg-white px-3 py-2 text-sm text-black outline-none focus:border-blue-500"
            />
          </div>

          {/* Date of Birth */}
          <div className="mb-5">
            <label className="mb-2 block text-sm font-medium text-gray-800">
              Date of Birth
            </label>

            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 bg-white px-3 py-2 text-sm text-black outline-none focus:border-blue-500"
            />
          </div>

          {/* Gender */}
          <div className="mb-5">
            <label className="mb-2 block text-sm font-medium text-gray-800">
              Gender
            </label>

            <div className="flex flex-wrap gap-6">

              <label className="flex items-center gap-2 text-sm text-gray-800">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={formData.gender === "Male"}
                  onChange={handleChange}
                  required
                />
                Male
              </label>

              <label className="flex items-center gap-2 text-sm text-gray-800">
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={formData.gender === "Female"}
                  onChange={handleChange}
                />
                Female
              </label>

              <label className="flex items-center gap-2 text-sm text-gray-800">
                <input
                  type="radio"
                  name="gender"
                  value="Other"
                  checked={formData.gender === "Other"}
                  onChange={handleChange}
                />
                Other
              </label>

            </div>
          </div>

          {/* Select Course */}
          <div className="mb-5">
            <label className="mb-2 block text-sm font-medium text-gray-800">
              Select Course
            </label>

            <select
              name="course"
              value={formData.course}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 bg-white px-3 py-2 text-sm text-black outline-none focus:border-blue-500"
            >
              <option value="">Select course</option>
              <option value="BCA">BCA</option>
              <option value="MCA">MCA</option>
              <option value="B.Tech">B.Tech</option>
              <option value="M.Tech">M.Tech</option>
              <option value="B.Sc">B.Sc</option>
              <option value="M.Sc">M.Sc</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Skills */}
          <div className="mb-5">
            <label className="mb-2 block text-sm font-medium text-gray-800">
              Skills
            </label>

            <div className="flex flex-nowrap gap-6 overflow-x-auto">

              <label className="flex shrink-0 items-center gap-2 text-sm text-gray-800">
                <input
                  type="checkbox"
                  value="Java"
                  checked={formData.skills.includes("Java")}
                  onChange={handleSkillChange}
                />
                Java
              </label>

              <label className="flex shrink-0 items-center gap-2 text-sm text-gray-800">
                <input
                  type="checkbox"
                  value="React"
                  checked={formData.skills.includes("React")}
                  onChange={handleSkillChange}
                />
                React
              </label>

              <label className="flex shrink-0 items-center gap-2 text-sm text-gray-800">
                <input
                  type="checkbox"
                  value="Python"
                  checked={formData.skills.includes("Python")}
                  onChange={handleSkillChange}
                />
                Python
              </label>

              <label className="flex shrink-0 items-center gap-2 text-sm text-gray-800">
                <input
                  type="checkbox"
                  value="Flutter"
                  checked={formData.skills.includes("Flutter")}
                  onChange={handleSkillChange}
                />
                Flutter
              </label>

            </div>
          </div>

          {/* Country */}
          <div className="mb-5">
            <label className="mb-2 block text-sm font-medium text-gray-800">
              Country
            </label>

            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 bg-white px-3 py-2 text-sm text-black outline-none focus:border-blue-500"
            >
              <option value="">Select country</option>
              <option value="India">India</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
              <option value="Canada">Canada</option>
              <option value="Australia">Australia</option>
              <option value="Germany">Germany</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Address */}
          <div className="mb-5">
            <label className="mb-2 block text-sm font-medium text-gray-800">
              Address
            </label>

            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter your address"
              rows="4"
              required
              className="w-full resize-none border border-gray-300 bg-white px-3 py-2 text-sm text-black outline-none focus:border-blue-500"
            />
          </div>

          {/* Website */}
          <div className="mb-5">
            <label className="mb-2 block text-sm font-medium text-gray-800">
              Website
            </label>

            <input
              type="url"
              name="website"
              value={formData.website}
              onChange={handleChange}
              placeholder="https://example.com"
              className="w-full border border-gray-300 bg-white px-3 py-2 text-sm text-black outline-none focus:border-blue-500"
            />
          </div>

          {/* Preferred Time */}
          <div className="mb-5">
            <label className="mb-2 block text-sm font-medium text-gray-800">
              Preferred Time
            </label>

            <input
              type="time"
              name="preferredTime"
              value={formData.preferredTime}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 bg-white px-3 py-2 text-sm text-black outline-none focus:border-blue-500"
            />
          </div>

          {/* Favorite Color */}
          <div className="mb-5">
            <label className="mb-2 block text-sm font-medium text-gray-800">
              Favorite Color
            </label>

            <input
              type="color"
              name="favoriteColor"
              value={formData.favoriteColor}
              onChange={handleChange}
              className="h-10 w-20 cursor-pointer border border-gray-300 bg-white p-1"
            />
          </div>

          {/* Experience */}
          <div className="mb-5">

            <label className="mb-2 block text-sm font-medium text-gray-800">
              Experience : {formData.experience} Years
            </label>

            <div className="w-full overflow-x-auto">
              <input
                type="range"
                name="experience"
                min="0"
                max="20"
                step="1"
                value={formData.experience}
                onChange={handleChange}
                className="w-full min-w-[400px] cursor-pointer accent-blue-500"
              />
            </div>

          </div>

          {/* Upload Photo */}
          <div className="mb-5">
            <label className="mb-2 block text-sm font-medium text-gray-800">
              Upload Photo
            </label>

            <input
              type="file"
              name="photo"
              accept="image/*"
              onChange={handleChange}
              required
              className="w-full border border-gray-300 bg-white text-sm"
            />
          </div>

          {/* Terms */}
          <div className="mb-6">

            <label className="flex items-center gap-2 text-sm text-gray-700">

              <input
                type="checkbox"
                name="terms"
                checked={formData.terms}
                onChange={handleChange}
                required
              />

              I agree with the Terms and Conditions

            </label>

          </div>

          {/* Buttons */}
          <div className="flex justify-center gap-3">

            <button
              type="submit"
              className="bg-blue-500 px-8 py-2 text-sm font-medium text-white hover:bg-blue-600"
            >
              Register
            </button>

            <button
              type="button"
              onClick={handleReset}
              className="border border-gray-400 bg-gray-100 px-8 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200"
            >
              Reset
            </button>

          </div>

        </form>

        {/* ========================= */}
        {/* Submitted Data */}
        {/* ========================= */}

        {submittedData && (
          <div className="mt-8 border-t border-gray-300 pt-6">

            <h2 className="mb-5 bg-gray-200 px-3 py-2 text-xl font-semibold text-gray-800">
              Registered Details
            </h2>

            <div className="overflow-x-auto">

              <table className="w-full border-collapse border border-gray-300 text-sm">

                <tbody>

                  <tr>
                    <td className="w-1/3 border border-gray-300 bg-gray-100 px-3 py-2 font-semibold">
                      Full Name
                    </td>

                    <td className="border border-gray-300 px-3 py-2">
                      {submittedData.fullName}
                    </td>
                  </tr>

                  <tr>
                    <td className="border border-gray-300 bg-gray-100 px-3 py-2 font-semibold">
                      Email
                    </td>

                    <td className="border border-gray-300 px-3 py-2">
                      {submittedData.email}
                    </td>
                  </tr>

                  <tr>
                    <td className="border border-gray-300 bg-gray-100 px-3 py-2 font-semibold">
                      Password
                    </td>

                    <td className="border border-gray-300 px-3 py-2">
                      {submittedData.password}
                    </td>
                  </tr>

                  <tr>
                    <td className="border border-gray-300 bg-gray-100 px-3 py-2 font-semibold">
                      Age
                    </td>

                    <td className="border border-gray-300 px-3 py-2">
                      {submittedData.age}
                    </td>
                  </tr>

                  <tr>
                    <td className="border border-gray-300 bg-gray-100 px-3 py-2 font-semibold">
                      Date of Birth
                    </td>

                    <td className="border border-gray-300 px-3 py-2">
                      {submittedData.dob}
                    </td>
                  </tr>

                  <tr>
                    <td className="border border-gray-300 bg-gray-100 px-3 py-2 font-semibold">
                      Gender
                    </td>

                    <td className="border border-gray-300 px-3 py-2">
                      {submittedData.gender}
                    </td>
                  </tr>

                  <tr>
                    <td className="border border-gray-300 bg-gray-100 px-3 py-2 font-semibold">
                      Course
                    </td>

                    <td className="border border-gray-300 px-3 py-2">
                      {submittedData.course}
                    </td>
                  </tr>

                  <tr>
                    <td className="border border-gray-300 bg-gray-100 px-3 py-2 font-semibold">
                      Skills
                    </td>

                    <td className="border border-gray-300 px-3 py-2">
                      {submittedData.skills.length > 0
                        ? submittedData.skills.join(", ")
                        : "None"}
                    </td>
                  </tr>

                  <tr>
                    <td className="border border-gray-300 bg-gray-100 px-3 py-2 font-semibold">
                      Country
                    </td>

                    <td className="border border-gray-300 px-3 py-2">
                      {submittedData.country}
                    </td>
                  </tr>

                  <tr>
                    <td className="border border-gray-300 bg-gray-100 px-3 py-2 font-semibold">
                      Address
                    </td>

                    <td className="border border-gray-300 px-3 py-2">
                      {submittedData.address}
                    </td>
                  </tr>

                  <tr>
                    <td className="border border-gray-300 bg-gray-100 px-3 py-2 font-semibold">
                      Website
                    </td>

                    <td className="border border-gray-300 px-3 py-2">
                      {submittedData.website || "Not provided"}
                    </td>
                  </tr>

                  <tr>
                    <td className="border border-gray-300 bg-gray-100 px-3 py-2 font-semibold">
                      Preferred Time
                    </td>

                    <td className="border border-gray-300 px-3 py-2">
                      {submittedData.preferredTime}
                    </td>
                  </tr>

                  <tr>
                    <td className="border border-gray-300 bg-gray-100 px-3 py-2 font-semibold">
                      Favorite Color
                    </td>

                    <td className="border border-gray-300 px-3 py-2">
                      <div className="flex items-center gap-3">
                        <div
                          className="h-6 w-6 border border-gray-400"
                          style={{
                            backgroundColor:
                              submittedData.favoriteColor,
                          }}
                        ></div>

                        {submittedData.favoriteColor}
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td className="border border-gray-300 bg-gray-100 px-3 py-2 font-semibold">
                      Experience
                    </td>

                    <td className="border border-gray-300 px-3 py-2">
                      {submittedData.experience} Years
                    </td>
                  </tr>

                  <tr>
                    <td className="border border-gray-300 bg-gray-100 px-3 py-2 font-semibold">
                      Photo
                    </td>

                    <td className="border border-gray-300 px-3 py-2">
                      {submittedData.photo
                        ? submittedData.photo.name
                        : "No photo"}
                    </td>
                  </tr>

                  <tr>
                    <td className="border border-gray-300 bg-gray-100 px-3 py-2 font-semibold">
                      Terms & Conditions
                    </td>

                    <td className="border border-gray-300 px-3 py-2">
                      {submittedData.terms ? "Agreed" : "Not Agreed"}
                    </td>
                  </tr>

                </tbody>

              </table>

            </div>

          </div>
        )}

      </div>
    </div>
  );
};

export default App;