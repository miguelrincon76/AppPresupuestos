import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import DashboardBudgetary from "../pages/private/DashboardBudgetary";
import { Error404 } from "../pages/public/Error/Error404";
import { Home } from "../components/Home";

import { MaterialList } from "../components/budgetary/Anteriores/Mat-list.component.jsx";
import { EditMaterial } from "../components/budgetary/Anteriores/Mat-edit.component.jsx";
import { CreateMaterial } from "../components/budgetary/Anteriores/Mat-create.component.jsx";

import { CotizacionList } from "../components/budgetary/Anteriores/Cot-list.component.jsx";
import { EditCotizacion } from "../components/budgetary/Anteriores/Cot-edit.component.jsx";
import { CreateCotizacion } from "../components/budgetary/Anteriores/Cot-create.component.jsx";
import { Quotes } from "../components/budgetary/Quotes/Quotes";

import ApuList from "../components/budgetary/Anteriores/Apu-list.component.jsx";
import EditApu from "../components/budgetary/Anteriores/Apu-edit.component.jsx";
import CreateApu from "../components/budgetary/Anteriores/Apu-create.component.jsx";

import PresupuestoList from "../components/budgetary/Anteriores/Pre-list.component ";
import EditPresupuesto from "../components/budgetary/Anteriores/Pre-edit.component.jsx";
import CreatePresupuesto from "../components/budgetary/Anteriores/Pre-create.component.jsx";

export const BudgetaryRoutes = () => {
  return (
    <>
      <DashboardBudgetary />
      <Routes>
        <Route path="/home" exact render={(props) => <Home {...props} />} />
        <Route path="/quotes" element={<Quotes />} />

        <Route path="/cotizacion-list" element={<CotizacionList />} />
        <Route path="/edit-cotizacion/:id" element={<EditCotizacion />} />
        <Route path="/create-cotizacion" element={<CreateCotizacion />} />

        <Route path="/presupuesto-list" element={<PresupuestoList />} />
        <Route path="/edit-presupuesto/:id" element={<EditPresupuesto />} />
        <Route path="/create-presupuesto" element={<CreatePresupuesto />} />

        <Route path="/apu-list" element={<ApuList />} />
        <Route path="/edit-apu/:id" element={<EditApu />} />
        <Route path="/create-apu" element={<CreateApu />} />

        <Route path="/material-list" element={<MaterialList />} />
        <Route path="/edit-material/:id" element={<EditMaterial />} />
        <Route path="/create-material" element={<CreateMaterial />} />

        <Route path="/" element={<Home />} />
        <Route path="/404-page" element={<Error404 />} />
        <Route path="/*" element={<Navigate to="/404-page" />} />
      </Routes>
    </>
  );
};
