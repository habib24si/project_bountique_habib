import { Routes, Route } from "react-router-dom";
import React, { Suspense } from "react";
const MainLayout = React.lazy(() => import("./layouts/MainLayout"))
const GuestLayout = React.lazy(() => import("./layouts/GuestLayout"))
const Dashboard = React.lazy(() => import("./pages/main/Dashboard"))
const TambahModel = React.lazy(() => import("./pages/main/TambahModel"))
const ModelTersedia = React.lazy(() => import("./pages/main/ModelTersedia"))
const Penjualan = React.lazy(() => import("./pages/main/Penjualan"))
const Laporan = React.lazy(() => import("./pages/main/Laporan"))
const ManajemenUser = React.lazy(() => import("./pages/main/ManajemenUser"))
const Produk = React.lazy(() => import("./pages/guest/Produk"))
const Pesanan = React.lazy(() => import("./pages/guest/Pesanan"))
const Histori = React.lazy(() => import("./pages/guest/Histori"))
const NotFound = React.lazy(() => import("./pages/main/NotFound"))
const ErrorPage = React.lazy(() => import("./components/ErrorPage"))
const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"))
const Login = React.lazy(() => import("./pages/auth/Login"))
const Register = React.lazy(() => import("./pages/auth/Register"))
const Forgot = React.lazy(() => import("./pages/auth/Forgot"))
const Loading = React.lazy(() => import("./components/Loading"))
function App() {
    return (
        <Suspense fallback={<Loading />}>
                    <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Dashboard />} />
                <Route path="tambah-model" element={<TambahModel />} />
                <Route path="model-tersedia" element={<ModelTersedia />} />
                <Route path="penjualan" element={<Penjualan />} />
                <Route path="laporan" element={<Laporan />} />
                <Route path="manajemen-user" element={<ManajemenUser />} />

                <Route path="error/400" element={<ErrorPage errorCode={400} />} />
                <Route path="error/401" element={<ErrorPage errorCode={401} />} />
                <Route path="error/403" element={<ErrorPage errorCode={403} />} />
            </Route>

            <Route path="/guest" element={<GuestLayout />}>
                <Route index element={<Produk />} />
                <Route path="produk" element={<Produk />} />
                <Route path="pesanan" element={<Pesanan />} />
                <Route path="histori" element={<Histori />} />
            </Route>

                <Route element={<AuthLayout/>}>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register/>} />
                <Route path="/forgot" element={<Forgot/>} />
                </Route>

            <Route path="*" element={<NotFound />} />
        </Routes>
        </Suspense>
    );
}

export default App;
