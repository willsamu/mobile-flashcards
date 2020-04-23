/* eslint-disable import/prefer-default-export */
export const calculateResults = (correct, amountQuestions) => {
  const result = Math.round(100 * (correct / amountQuestions + Number.EPSILON) * 100) / 100;
  return Number.isFinite(result) ? result : 0;
};
