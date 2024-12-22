import data from '../data/preventativehealth.json';


import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { Container, Button, Typography } from '@mui/material';
import RenderSectionComponent from './RenderSectionComponent';

const PreventiveHealthComponent: React.FC = () => {
  const methods = useForm();

  const onSubmit = (formData: any) => {
    console.table(formData);
  };

  return (
    <FormProvider {...methods}>
      <Container component="form" onSubmit={methods.handleSubmit(onSubmit)}>
        <Typography variant="h4" gutterBottom>
          Preventive Health
        </Typography>
        {data.map((section, index) => (
          <RenderSectionComponent key={index} section={section} />
        ))}
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </Container>
    </FormProvider>
  );
};

export default PreventiveHealthComponent;
