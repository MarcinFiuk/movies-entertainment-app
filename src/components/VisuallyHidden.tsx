import { ComponentType, ReactNode } from 'react';
import styled from 'styled-components';

type VisuallyHiddenProps = {
    children: ReactNode;
    element?: string | ComponentType<any>;
};

const VisuallyHidden = ({ element, children }: VisuallyHiddenProps) => {
    return <VisuallyHiddenStyled as={element}>{children}</VisuallyHiddenStyled>;
};

export default VisuallyHidden;

const VisuallyHiddenStyled = styled.span`
    border: 0;
    clip-path: inset(50%);
    clip: rect(0, 0, 0, 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
`;
