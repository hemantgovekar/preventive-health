import React from 'react';
import { Box, Typography } from '@mui/material';
import OptionComponent from './OptionComponent';

interface QuestionProps {
  question: any;
}

const QuestionComponent: React.FC<QuestionProps> = ({ question }) => {
  return (
    <Box mb={3} className={question['css-class']}>
      <Typography variant="subtitle1">{question.headings}</Typography>
      <OptionComponent question={question} />
      {question.questions?.map((subQuestion: any, index: number) => (
        <QuestionComponent key={index} question={subQuestion} />
      ))}
    </Box>
  );
};

export default QuestionComponent;
