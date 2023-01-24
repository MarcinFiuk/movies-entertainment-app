import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

type IconLinkProps = {
    Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    title?: string;
    to: string;
    type?: string;
};

const IconLink = ({ Icon, ...props }: IconLinkProps) => {
    if (props.type === 'navLink') {
        return (
            <NavLink to={props.to}>
                <Icon aria-hidden='true' focusable='false' />
                <VisuallyHidden>{props.title}</VisuallyHidden>
            </NavLink>
        );
    }

    return (
        <Link to={props.to}>
            <Icon aria-hidden='true' focusable='false' />
            <VisuallyHidden>{props.title}</VisuallyHidden>
        </Link>
    );
};

export default IconLink;

const VisuallyHidden = styled.span`
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    clip-path: inset(50%);
    white-space: nowrap;
    border: 0;
`;
