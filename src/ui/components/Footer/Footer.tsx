import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {PaperFooter} from './Footer.style';

export const Footer = () => {
    return (
        <Box>
            <Grid container>
                <Grid item xs={12}>
                    <PaperFooter>
                        Todos os direitos reservados &copy;
                    </PaperFooter>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Footer;