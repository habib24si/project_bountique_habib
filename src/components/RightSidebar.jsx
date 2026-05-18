export default function RightSidebar({ children, className = "" }) {
    return (
        <div className={`w-96 ${className}`}>
            <div className="bg-white rounded-r-3xl shadow-sm p-6 min-h-screen flex flex-col">
                {children}
            </div>
        </div>
    );
}
