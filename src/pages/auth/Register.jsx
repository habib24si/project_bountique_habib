import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { userAPI } from "../../services/notesAPI";

export default function Register() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);
    const [form, setForm] = useState({ name: "", password: "", confirmPassword: "" });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        setSuccess(false);

        if (form.password !== form.confirmPassword) {
            setError("Password tidak cocok!");
            setLoading(false);
            return;
        }

        if (form.password.length < 6) {
            setError("Password minimal 6 karakter!");
            setLoading(false);
            return;
        }

        try {
            await userAPI.register(form.name, form.password);
            setSuccess(true);
            setTimeout(() => navigate("/login"), 2000);
        } catch (err) {
            setError(err.message || "Registrasi gagal");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#f3f3f3] p-9">
            <h1 className="text-gray-400 text-2xl mb-4">Sign up</h1>

            <div className="bg-white rounded-3xl overflow-hidden flex min-h-[700px]">
                <div className="w-1/2 flex items-center justify-center px-20">
                    <div className="w-full max-w-sm">
                        <h2 className="text-3xl font-semibold mb-10">Get Started Now</h2>

                        {success && <div className="bg-green-100 text-green-600 p-3 rounded-xl mb-5 text-sm">Registrasi berhasil! Redirecting...</div>}
                        {error && <div className="bg-red-100 text-red-600 p-3 rounded-xl mb-5 text-sm">{error}</div>}

                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="text-sm text-gray-500 block mb-2">Name</label>
                                <input
                                    type="text"
                                    value={form.name}
                                    onChange={(e) => setForm({...form, name: e.target.value})}
                                    placeholder="John Doe"
                                    required
                                    className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-green-500"
                                />
                            </div>

                            <div className="mb-4">
                                <label className="text-sm text-gray-500 block mb-2">Password</label>
                                <input
                                    type="password"
                                    value={form.password}
                                    onChange={(e) => setForm({...form, password: e.target.value})}
                                    placeholder="••••••••"
                                    required
                                    className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-green-500"
                                />
                            </div>

                            <div className="mb-6">
                                <label className="text-sm text-gray-500 block mb-2">Confirm Password</label>
                                <input
                                    type="password"
                                    value={form.confirmPassword}
                                    onChange={(e) => setForm({...form, confirmPassword: e.target.value})}
                                    placeholder="••••••••"
                                    required
                                    className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-green-500"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-[#3f6b2a] hover:bg-[#345922] text-white py-3 rounded-lg font-medium disabled:opacity-50"
                            >
                                {loading ? "Loading..." : "Sign Up"}
                            </button>
                        </form>

                        <p className="text-center text-gray-500 text-sm mt-8">
                            Have an account?{" "}
                            <span className="text-blue-600 cursor-pointer hover:underline" onClick={() => navigate("/login")}>
                                Sign in
                            </span>
                        </p>
                    </div>
                </div>

                <div className="w-1/2 bg-[#f4f1ec]">
                    <img src="public/img/bountique.jpg" alt="Boutique" className="w-full h-full object-cover" />
                </div>
            </div>
        </div>
    );
}
