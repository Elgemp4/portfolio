import { Link } from "react-router";

interface NavigationLinkProps {
  to: string;
  text: string;
}

export default function NavigationLink({ to, text }: NavigationLinkProps) {
  return (
    <li className="group border-b-2 hover:border-accent-500 pb-1 border-transparent ">
      <Link data-interact="true" to={to}>
        <span className="group-hover:text-accent-500 transition-colors">
          &lt;
        </span>
        {text}
        <span className="group-hover:text-accent-500 transition-colors">
          &gt;
        </span>
      </Link>
    </li>
  );
}
