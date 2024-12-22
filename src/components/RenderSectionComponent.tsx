import React from 'react';
import { Box, Typography } from '@mui/material';
import QuestionComponent from './QuestionComponent';

interface SectionProps {
  section: any;
}

const RenderSectionComponent: React.FC<SectionProps> = ({ section }) => {
  return (
    <Box mb={4}>
      <Typography variant="h5">{section.heading}</Typography>
      {section.sections?.questions?.map((question: any, index: number) => (
        <QuestionComponent key={index} question={question} />
      ))}
      {section.questions?.map((question: any, index: number) => (
        <QuestionComponent key={index} question={question} />
      ))}
    </Box>
  );
};

export default RenderSectionComponent;
