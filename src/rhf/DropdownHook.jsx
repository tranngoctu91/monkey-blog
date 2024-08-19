import React, { useState } from "react";
import useDropdown from "./hooks/useDropdown";
import { set, useWatch } from "react-hook-form";

const DropdownHook = ({ control, setValue, name }) => {
  const { show, setShow } = useDropdown();
  const [label, setLabel] = useState("");
  const jobValue = useWatch({
    control,
    name: "job",
    defaultValue: "",
  });

  const handleDrp = (e) => {
    setValue(name, e.target.dataset.value);
    setShow(false);
    setLabel(e.target.textContent);
  };

  return (
    <div className=" relative">
      <div
        onClick={() => setShow(!show)}
        className="p-5 rounded-lg border border-gray-100 bg-white flex-items-center justify-between"
      >
        <span className="cursor-pointer">{label || "Select your job"}</span>
      </div>
      {show && (
        <div className="absolute top-full leff-0 w-full bg-white">
          <div
            className="p-5 cursor-pointer hover:bg-gray-100"
            onClick={handleDrp}
            data-value="teacher"
          >
            Im Teacher
          </div>

          <div
            className="p-5 cursor-pointer hover:bg-gray-100"
            onClick={handleDrp}
            data-value="student"
          >
            Im Student
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownHook;
