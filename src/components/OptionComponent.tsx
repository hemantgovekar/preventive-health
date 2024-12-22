import React from 'react';
import { useController, useFormContext } from 'react-hook-form';
import { Checkbox, FormControl, FormControlLabel, Radio, RadioGroup, TextField } from '@mui/material';

interface OptionProps {
  question: any;
}

const OptionComponent: React.FC<OptionProps> = ({ question }) => {
  const { control } = useFormContext();
  const { field } = useController({
    name: question.headings,
    control,
    defaultValue: question.answer
  });

  switch (question.type) {
    case 'ScreeningCheckbox':
      return <FormControlLabel control={<Checkbox {...field} />} label={question.headings} />;
    case 'yesNo':
      return (
        <FormControl component="fieldset">
          {/* <FormLabel component="legend">{question.headings}</FormLabel> */}
          <RadioGroup {...field} row>
            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="No" control={<Radio />} label="No" />
          </RadioGroup>
        </FormControl>
      );
    case 'radio':
      return (
        <FormControl component="fieldset">
          {/* <FormLabel component="legend">{question.headings}</FormLabel> */}
          <RadioGroup {...field}>
            {question.options.map((option: any, index: number) => (
              <FormControlLabel key={index} value={option.value} control={<Radio />} label={option.label} />
            ))}
          </RadioGroup>
        </FormControl>
      );
    case 'text':
      return <TextField {...field} variant="outlined" fullWidth />;
    default:
      return null;
  }
};

export default OptionComponent;
