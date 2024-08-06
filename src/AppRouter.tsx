import { Route, Routes } from "react-router-dom";

export default function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<h1 className="text-red-600">Hey</h1>} />
        </Routes>
    )
}