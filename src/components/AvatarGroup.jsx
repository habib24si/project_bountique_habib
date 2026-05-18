import Avatar from "./Avatar";

export default function AvatarGroup({ avatars = [], max = 3 }) {
    const visible = avatars.slice(0, max);
    const remaining = avatars.length - max;

    return (
        <div className="flex -space-x-2">
            {visible.map((avatar, i) => (
                <Avatar key={i} src={avatar.src} alt={avatar.alt} />
            ))}
            {remaining > 0 && (
                <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center">
                    <span className="text-xs text-gray-600">+{remaining}</span>
                </div>
            )}
        </div>
    );
}
