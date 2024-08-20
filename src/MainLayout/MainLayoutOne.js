import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainApp from "../Components/MainApp";
import StateVariables from "../Components/StateVariables";
import Count from "../Components/Count";
import String from "../Components/String";
import Boolean from "../Components/Boolean";
import Array from "../Components/Array";
import Object from "../Components/Object";
import Calculator from "../Components/Calculator";
import Parent from "../Components/PropsAndCallback/Parent";
import ParentPage from "../Components/PropsAndCallback/ParentPage";
import ContextParent from "../Components/ContextApi/ContextParent";
import ContextParentArray from "../Components/ContextApi/ContextParentArray";
import MainLayout from "./MainLayout";
import ErrorPage from "./ErrorPage";
import ReactForm from "./ReactForm";
import ReactHookForm from "./ReactHookForm";
import ReactHookFormOne from "../LinkedinDemos/ReactHookFormOne";
import NewForm from "../LinkedinDemos/NewForm";
import LinkedinHome from "../LinkedinDemos/LinkedinHome";

function MainLayoutOne() {
  return (
    <div>
      {/* <div>MainLayoutOne</div> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainApp />} />
          <Route path="/statevariable" element={<StateVariables />} />
          <Route path="/count" element={<Count />} />
          <Route path="/string" element={<String />} />
          <Route path="/boolean" element={<Boolean />} />
          <Route path="/array" element={<Array />} />
          <Route path="/object" element={<Object />} />
          <Route path="/calcultor" element={<Calculator />} />
          <Route path="/parent" element={<Parent />} />
          <Route path="/parentpage" element={<ParentPage />} />
          <Route path="/contextparent" element={<ContextParent />} />
          <Route path="/contextparentarray" element={<ContextParentArray />} />
          <Route path="/mainlayout" element={<MainLayout />} />
          <Route path="/reactform" element={<ReactForm />} />
          <Route path="/reacthookform" element={<ReactHookForm />} />
          <Route path="/linkedinhome" element={<LinkedinHome />} />
          <Route path="/reacthookformone" element={<ReactHookFormOne />} />
          <Route path="newform" element={<NewForm />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default MainLayoutOne;
