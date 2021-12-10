import react from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';




export const Teste = ()=> {
    return (
            <Container>
            <br />
            <br />
            <br />
            <br />
        
                <Paper elevation={3} sx={{}}>
                    <Box sx={{ mt: "6rem" }} >
                        <Grid container spacing={2} sx={{ pl: "2rem", pr:"2rem", pb:"2rem"}}>
                            <Grid item xs={12} md={6}>
                                <TextField fullWidth label="fullWidth" id="fullWidth" />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField fullWidth label="fullWidth" id="fullWidth" />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField fullWidth label="fullWidth" id="fullWidth" />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField fullWidth label="fullWidth" id="fullWidth" />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Button variant="contained">Contained</Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Paper>
            </Container>
       
    )
}
export default Teste;