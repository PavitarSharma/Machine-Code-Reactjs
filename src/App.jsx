import React, { useEffect, useState } from "react";
import CustomSelectBox from "./components/customselect/CustomSelectBox";
import DynamicInput from "./components/DynamicInput";
import Search from "./components/filters/Search";
import MultipleCheckbox from "./components/MultipleCheckbox";
import Pagination from "./components/pagination/Pagination";
import Todo from "./components/todo/Todo";

const App = () => {
  return (
    <>
      {/* <Search /> */}
      {/* <MultipleCheckbox /> */}
      {/* <DynamicInput /> */}
      {/* <CustomSelectBox /> */}
      {/* <Todo /> */}
      <Pagination />
    </>
  );
};

export default App;
