import React from 'react';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const RoundButton = styled(Button)(() => ({
  borderRadius: '50%',
  padding: '15px',
  minWidth: '0',
  width: '20px',
  height: '20px',
  borderColor: 'green',
  color: 'green',
}));

const MyBtnPlus = ({ handleCalc }) => {
  return (
    <Stack spacing={2} direction='row'>
      <RoundButton onClick={handleCalc} variant='outlined'>
        +
      </RoundButton>
    </Stack>
  );
};

const MyBtnMinus = ({ handleCalc }) => {
  return (
    <Stack spacing={2} direction='row'>
      <RoundButton onClick={handleCalc} variant='outlined'>
        -
      </RoundButton>
    </Stack>
  );
};

export { MyBtnPlus, MyBtnMinus };
