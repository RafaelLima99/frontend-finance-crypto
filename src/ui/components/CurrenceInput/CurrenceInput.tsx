import * as React from 'react';
import { IMaskInput } from 'react-imask'; // esse
import NumberFormat from 'react-number-format'; //esse
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';

interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

const NumberFormatCustom = React.forwardRef<NumberFormat<any>, CustomProps>(
  function NumberFormatCustom(props, ref) {
    const { onChange, ...other } = props;

    return (
      <NumberFormat
        {...other}
        getInputRef={ref}
        onValueChange={(values) => {
          onChange({
            target: {
              name: props.name,
              value: values.value,
            },
          });
        }}
        thousandSeparator ={true}
        isNumericString
        prefix="$ "
        suffix=",00"
      />
    );
  },
);

interface State {
  textmask: string;
  numberformat: string;
}

type Props = {
  name: string,
  id: string,
  label: string
};

export default function FormattedInputs(props: Props) {
  const [values, setValues] = React.useState<State>({
    textmask: '(100) 000-0000',
    numberformat: '132',
  });


  console.log(props)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Box
      sx={{
        '& > :not(style)': {
          m: 1,
        },
      }}
    >
      
      <TextField
      
        label={props.label}
        value={values.numberformat}
        onChange={handleChange}
        name={props.name}
        id={props.id}
        InputProps={{
          inputComponent: NumberFormatCustom as any,
        }}
        fullWidth
      />
    </Box>
  );
}
