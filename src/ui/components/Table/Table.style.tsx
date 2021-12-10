import {styled} from "@mui/material";

export const Table = styled('table')`
    
    border-collapse: collapse;
    color:  ${props => props.theme.palette.text.primary};
    background: ${props => props.theme.palette.background.paper};
    margin: 0 auto;
    margin-top: 50px;

    ${props => props.theme.breakpoints.up('xs') } {
       width: 100%;
       font-size: 0.7rem;
       font-weight: 500;
    };

    ${props => props.theme.breakpoints.up('sm') } {
        width: 100%;
        font-size: 0.8rem;
        font-weight: 500;
    };

    ${props => props.theme.breakpoints.up('md') } {
        width: 100%;
        font-size: 0.8rem;
        font-weight: 500;
    };

    ${props => props.theme.breakpoints.up('lg') } {
        min-width: 1200px;
        font-size: 18px;
        font-weight: 500;
    }; 
`;


export const Thead = styled('thead')`
    height: 2.5rem;
    border-top: 1px solid ${props => props.theme.palette.divider};
    border-bottom: 1px solid  ${props => props.theme.palette.divider};
    padding: 5rem;
`;


export const TbodyTr = styled('tr')`
    height: 2.3rem;
    border-bottom: 0.6px solid ${props => props.theme.palette.divider}; 
    &:hover {
    background-color: ${props => props.theme.palette.action.hover};
    }
    > td {
        padding: 0.5rem; 
    }
`;