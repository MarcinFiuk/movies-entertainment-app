import { NavLink } from 'react-router-dom';
import VisuallyHidden from './VisuallyHidden';

type IconLinkProps = {
    Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    title?: string;
    to: string;
    type?: string;
};

const IconLink = ({ Icon, ...props }: IconLinkProps) => {
    const { to, title } = props;

    return (
        <NavLink to={to}>
            <Icon aria-hidden='true' focusable='false' />
            <VisuallyHidden>{title}</VisuallyHidden>
        </NavLink>
    );
};

export default IconLink;
