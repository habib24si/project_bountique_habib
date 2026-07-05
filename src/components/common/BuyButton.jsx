// BuyButton.jsx
// Komponen tombol beli yang reusable

export default function BuyButton({ onClick, disabled = false, text = "Beli Sekarang", fullWidth = false, size = "md" }) {
    // Size variants
    const sizeClasses = {
        sm: "px-3 py-2 text-sm",
        md: "px-4 py-3 text-base",
        lg: "px-6 py-4 text-lg"
    };

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`
                ${fullWidth ? 'w-full' : ''} 
                ${sizeClasses[size]}
                bg-purple-600 hover:bg-purple-700 
                text-white rounded-lg font-semibold 
                transition shadow-md hover:shadow-lg
                disabled:bg-gray-400 disabled:cursor-not-allowed
                flex items-center justify-center gap-2
            `}
        >
            {text}
        </button>
    );
}
