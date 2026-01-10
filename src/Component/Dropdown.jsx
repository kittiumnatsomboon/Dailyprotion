import { Link } from "lucide-react"
import { Dropdownmenu } from "../data/Dropdownmenu"

export default function Dropdown({ closeDropdown }) {
    return (
        <>
            {Dropdownmenu.map((item) => (
                <li key={item.id}>
                    <Link
                        to={item.link}
                        onClick={closeDropdown}
                        className="block px-4 py-2 text-sm text-gray-700
                       transition"
                    >
                        {item.label}
                    </Link>
                </li>
            ))}
        </>
    )
}