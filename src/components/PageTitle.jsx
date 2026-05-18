export default function PageTitle({ title, children }) {
    return (
        <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
            {children}
        </div>
    );
}
