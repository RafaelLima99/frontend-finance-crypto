import {styled} from "@mui/material";
import { ThemeContext } from "@mui/styled-engine";
import Paper from '@mui/material/Paper';

export const PaperFooter = styled(Paper)`
    height: 4rem;
    position: fixed;
    width: 100vw;
    bottom: 0;
    text-align: center;
    vertical-align: middle; 
    //deixa texto alinhado verticalmente
    line-height: 50px;
   
    /* background-color: ${props => props.theme.palette.primary.main}; */
   
`;

