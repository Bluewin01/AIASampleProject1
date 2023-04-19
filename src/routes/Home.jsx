import { Outlet } from "react-router-dom"
import PublicLayout from '../containers/PublicLayout'

function Home() {

    return (
        <PublicLayout>
            <Outlet />
        </PublicLayout>
    )

}

export default Home