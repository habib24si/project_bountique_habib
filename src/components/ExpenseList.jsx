import ExpenseItem from "./ExpenseItem";

export default function ExpenseList({ items = [] }) {
    return (
        <div className="space-y-3">
            {items.map((item, i) => (
                <ExpenseItem key={i} {...item} />
            ))}
        </div>
    );
}
