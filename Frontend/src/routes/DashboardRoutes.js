import { AdminRoutes } from './AdminRoutes';
import { BudgetaryRoutes } from './BudgetaryRoutes';

export const DashboardRoutes = () => {
    //True is admin and false is budgetary
    let roleActivated = false;
    const role = sessionStorage.getItem('role')
    if (role === "admin") {
        roleActivated = true;
    } else {
        roleActivated = false;
    }
    return (
        <>
            {roleActivated ? <AdminRoutes /> : <BudgetaryRoutes />}
        </>
    )
}
