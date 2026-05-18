import IconButton from "./IconButton";
import { FaEllipsisH } from "react-icons/fa";

export default function SectionHeader({ title, onMenuClick }) {
    return (
        <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-800">{title}</h2>
            {onMenuClick && <IconButton icon={FaEllipsisH} onClick={onMenuClick} />}
        </div>
    );
}
