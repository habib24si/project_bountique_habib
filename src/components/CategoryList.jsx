import ProgressBar from "./ProgressBar";

export default function CategoryList({ categories = [] }) {
    return (
        <div className="space-y-4">
            {categories.map((cat, i) => (
                <ProgressBar
                    key={i}
                    label={cat.name}
                    amount={cat.amount}
                    color={cat.color}
                    width={cat.width}
                />
            ))}
        </div>
    );
}
