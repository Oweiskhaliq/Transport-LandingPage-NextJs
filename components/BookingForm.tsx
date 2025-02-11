"use client";
import BookingTextSection from "./BookingTextSection";
import { useState, useEffect } from "react";

const BookingForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    pickup: "",
    destination: "",
    pickupDate: "",
    pickupTime: "0",
    returnTrip: true,
    returnDate: "",
    returnTime: "0",
    smallSuitcases: "0",
    largeSuitcases: "0",
    passengers: "0",
    additionalDetails: "",
    name: "",
    email: "",
    phone: "",
  });

  const [submitted, setSubmitted] = useState(false);
  // next btn validation
  const handleNext = () => {
    if (step === 1) {
      if (!formData.pickup || !formData.destination) {
        alert("Please fill in all required fields.");
        return;
      }
    }

    setStep(step + 1);
  };
  // Load previous data from local storage

  // Handle input changes
  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Handle form submission
  const handleSubmit = (e: any) => {
    e.preventDefault();
    localStorage.setItem("bookingForm", JSON.stringify(formData));
    setSubmitted(true);
  };

  return (
    <section className="flex flex-col font-serif md:flex-row items-center  justify-between px-12 py-16 bg-[#f5f5f5]">
      {/* Left Column - Text Section */}
      <BookingTextSection />
      {/* Right Column - Booking Form */}
      <div id="booking-from" className="md:w-1/2 p-8 shadow-lg rounded-lg ">
        {submitted ? (
          <div className="text-center p-6 bg-green-100 text-green-800 rounded-md">
            <h3 className="text-lg font-semibold">Thank You!</h3>
            <p>Your booking details have been saved successfully.</p>
          </div>
        ) : (
          <form
            className="flex flex-col space-y-6 px-6 "
            onSubmit={handleSubmit}
          >
            {step === 1 && (
              <>
                <input
                  type="text"
                  name="pickup"
                  placeholder="Pickup From"
                  className="input"
                  required
                  value={formData.pickup}
                  onChange={handleChange}
                />

                <input
                  type="text"
                  name="destination"
                  placeholder="Destination"
                  className="input"
                  required
                  value={formData.destination}
                  onChange={handleChange}
                />

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <input
                      type="date"
                      name="pickupDate"
                      className="input-border-non"
                      value={formData.pickupDate}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <select
                      name="pickupTime"
                      className="input"
                      value={formData.pickupTime}
                      onChange={handleChange}
                    >
                      <option className="option-style" value="">
                        Return Time
                      </option>
                      {Array.from({ length: 24 }, (_, i) => (
                        <option className="option-style" key={i} value={i}>
                          {i}:00
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="returnTrip"
                    checked={formData.returnTrip}
                    onChange={handleChange}
                    className="w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label className="ml-2 text-gray-700 text-xs">Return</label>
                </div>

                {formData.returnTrip && (
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <input
                        type="date"
                        name="returnDate"
                        className="input-border-non"
                        value={formData.returnDate}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <select
                        name="returnTime"
                        className="input"
                        value={formData.returnTime}
                        onChange={handleChange}
                      >
                        <option className="option-style" value="">
                          Pickup Time
                        </option>
                        {Array.from({ length: 24 }, (_, i) => (
                          <option className="option-style" key={i} value={i}>
                            {i}:00
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                )}
              </>
            )}

            {step === 2 && (
              <>
                <select
                  name="smallSuitcases"
                  className="input"
                  value={formData.smallSuitcases}
                  onChange={handleChange}
                >
                  <option className="option-style" value="">
                    Number of small suitcases
                  </option>
                  {Array.from({ length: 11 }, (_, i) => (
                    <option className="option-style" key={i} value={i}>
                      {i}
                    </option>
                  ))}
                </select>

                <select
                  name="largeSuitcases"
                  className="input"
                  value={formData.largeSuitcases}
                  onChange={handleChange}
                >
                  <option className="option-style" value="">
                    Number of large suitcases
                  </option>
                  {Array.from({ length: 11 }, (_, i) => (
                    <option className="option-style" key={i} value={i}>
                      {i}
                    </option>
                  ))}
                </select>

                <select
                  name="passengers"
                  className="input"
                  value={formData.passengers}
                  onChange={handleChange}
                >
                  <option className="option-style" value="">
                    Number of passengers
                  </option>
                  {Array.from({ length: 51 }, (_, i) => (
                    <option className="option-style" key={i} value={i}>
                      {i}
                    </option>
                  ))}
                </select>

                <input
                  type="text"
                  name="additionalDetails"
                  placeholder="Additional details"
                  className="input"
                  value={formData.additionalDetails}
                  onChange={handleChange}
                />
              </>
            )}

            {step === 3 && (
              <>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="e-Mail address"
                  className="input"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  className="input"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                />
              </>
            )}

            <div className="flex justify-between space-x-4">
              {step > 1 && (
                <button
                  type="button"
                  className="bg-[#363f5e] form-btn hover:bg-[#373f5b] "
                  onClick={() => setStep(step - 1)}
                >
                  PREVIOUS
                </button>
              )}
              {step < 3 ? (
                <button
                  type="button"
                  className="bg-[#363f5e] form-btn hover:bg-[#373f5b]  "
                  onClick={handleNext}
                >
                  Next
                </button>
              ) : (
                <button type="submit" className="bg-[#c09550] form-btn">
                  Submit
                </button>
              )}
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default BookingForm;
