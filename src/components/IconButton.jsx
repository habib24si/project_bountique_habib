export default function IconButton({ icon: Icon, onClick, className = "" }) {
    return (
        <button
            onClick={onClick}
            className={`text-gray-400 hover:text-gray-600 transition-colors ${className}`}
        >
            <Icon />
        </button>
    );
}
