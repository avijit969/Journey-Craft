import React from "react";
import { Input } from "@material-tailwind/react";

const InputBtn = React.forwardRef(function InputBtn(
  { placeholder, type },
  ref
) {
  return (
    <div className="w-72">
      <Input
        type={type}
        placeholder={placeholder}
        ref={ref}
        className="!border !border-grey-300 bg-white text-grey-900 shadow-lg shadow-grey-900/5 ring-4 ring-transparent placeholder:text-grey-500 placeholder:opacity-100 focus:!border-grey-900 focus:!border-t-blue-900 focus:ring-blue-900/10"
        labelProps={{
          className: "hidden",
        }}
        containerProps={{ className: "min-w-[100px]" }}
      />
    </div>
  );
});

export default InputBtn;
