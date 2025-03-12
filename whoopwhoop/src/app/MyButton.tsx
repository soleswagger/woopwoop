import Link from "next/link";

const MyButton: React.FC = () => {
    return (
        <Link href = "/about">
            <button>homepage</button>
        </Link>
    );
};

export default MyButton;