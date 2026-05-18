export default function Avatar({ src, alt = "User", size = "md" }) {
    const sizes = {
        sm: "w-6 h-6",
        md: "w-8 h-8",
        lg: "w-12 h-12",
    };

    return (
        <img
            src={src}
            alt={alt}
            className={`${sizes[size]} rounded-full border-2 border-white object-cover`}
        />
    );
}
