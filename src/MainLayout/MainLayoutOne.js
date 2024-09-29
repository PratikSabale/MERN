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
import StructureDemo from "../LinkedinDemos/StructureDemo";
import FinalForm from "../LinkedinDemos/FinalForm";
import PageOne from "../Redux/PageOne";
import PageTwo from "../Redux/PageTwo";
import PageThree from "../Redux/PageThree";
import ReduxHome from "../Redux/ReduxHome";
import FormDatabase from "../LinkedinDemos/FormDatabase";
import ParentFormData from "../LinkedinDemos/ParentFormData";
import ChildFormStructure from "../LinkedinDemos/ChildFormStructure";
import ContextFormParent from "../ContextForm/ContextFormParent";

function MainLayoutOne() {
  return (
    <div>
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
          <Route path="/structuredemo" element={<StructureDemo />} />
          <Route path="/finalform" element={<FinalForm />} />
          <Route path="/reduxhome" element={<ReduxHome />} />
          <Route path="/pageone" element={<PageOne />} />
          <Route path="/pagetwo" element={<PageTwo />} />
          <Route path="/pagethree" element={<PageThree />} />
          <Route path="/formdatabase" element={<FormDatabase />} />
          {/* <Route path="/formdatabase" element={<ContextFormParent />} /> */}
          <Route path="/parentformdata" element={<ParentFormData />} />
          <Route path="/childformstructure" element={<ChildFormStructure />} />
          <Route path="childformdatatable" el />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default MainLayoutOne;
