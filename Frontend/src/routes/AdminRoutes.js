import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import DashboardAdmin from '../pages/private/DashboardAdmin'
import { Error404 } from '../pages/public/Error/Error404'
import { Home } from '../components/Home'
import { AddUser } from '../components/admin/AddUser'
import { ViewUser } from '../components/admin/ViewUser'


export const AdminRoutes = () => {
    return (
        <>
            <DashboardAdmin />
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/add" element={<AddUser />} />
                <Route path="/view" element={<ViewUser />} />
                <Route path="/" element={<Home />} />
                <Route path="/404-page" element={<Error404 />} />
                <Route path="/*" element={<Navigate to="/404-page" />} />
            </Routes>
        </>
    )
}
