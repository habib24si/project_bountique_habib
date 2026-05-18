export default function Button({ type = "primary", children, onClick, fullWidth = false, size = "md" }) {
    const styles = {
        primary: "bg-gray-800 text-white hover:bg-gray-900",
        success: "bg-green-500 text-white hover:bg-green-600",
        danger: "bg-red-500 text-white hover:bg-red-600",
    };

    const sizes = {
        sm: "px-3 py-2 text-xs",
        md: "px-4 py-3 text-sm",
        lg: "px-6 py-4 text-base",
    };

    return (
        <button
            onClick={onClick}
            className={`rounded-xl font-semibold transition-all hover:shadow-lg ${styles[type]} ${sizes[size]} ${
                fullWidth ? "w-full" : ""
            }`}
        >
            {children}
        </button>
    );
}
