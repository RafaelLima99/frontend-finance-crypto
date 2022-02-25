import react from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Autocomplete from '@mui/material/Autocomplete';
import {useForm} from 'react-hook-form';

import NumberFormat from 'react-number-format';
import  {createCoinUser} from '../data/services/registerCoinUser'

import FormattedInputs from '../ui/components/CurrenceInput/CurrenceInput'


import NonLinearSlider from '../ui/components/Slider/Slider'


const top100Films = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: 'Pulp Fiction', year: 1994 },
    
  ];

export const Teste = ()=> {



    const { register, handleSubmit, watch, formState: { errors }  } = useForm();

    function handleRegister(data:any){
        //console.log(data)
        createCoinUser(data)
    }
    
    return (
<Container>
<Paper elevation={3} sx={{}}>
<Box sx={{ mt: "6rem" }} >
    <Grid container spacing={2} sx={{ pl: "2rem", pr:"2rem", pb:"2rem"}}>
        <Grid item xs={12} md={6}>
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={top100Films}
                renderInput={(params) => 
                <TextField {...params}

                    {...register('symbol', { 
                        required: {
                            value:true,
                            message:"O campo moeda é obrigatorio"
                        }
                        })
                    }
                    {...(errors.symbol && {error:true,  helperText:errors.symbol.message})}
                    
                label="Moeda" id='symbol' />}
            />

        </Grid>
        <Grid item xs={12} md={6}>
            <TextField
                {...register('price_purchase', {   
                    required: {
                        value:true,
                        message:"O campo preço de compra é obrigatorio"
                    }
                    })
                }
                {...(errors.price_purchase && {error:true,  helperText:errors.price_purchase.message})}
                
                fullWidth label="Preço de compra" id="price_purchase"
                />
        </Grid>
        <Grid item xs={12} md={6}>
            <TextField
                    {...register('investment', { 
                    required: {
                        value:true,
                        message:"O campo investimento é obrigatorio"
                    }
                    })
                }
                {...(errors.investment && {error:true,  helperText:errors.investment.message})}
                fullWidth label="Investimento" id="investment"
                />
        </Grid>
        <Grid item xs={12} md={6}>
            {/* Alavancagem <NonLinearSlider/> */}

                <FormattedInputs name="teste" id="teste" label="Preço"/>
            {/* 
                <TextField
                    
                fullWidth label="Alavancagem" id="leverage"
                /> */}

        </Grid> 
        <Grid item xs={12} md={6}>
            <Button variant="contained" onClick={handleSubmit(handleRegister)}>Cadastrar</Button>
        </Grid>
    </Grid>
</Box>
</Paper>
</Container>

)
}
export default Teste;