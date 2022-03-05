export const useShortner = () => {
  const handleSubmit = (value) => {
    const { url } = value;
    console.log(url);
  };

  const handleError = (error) => {
    console.log("error submitting form: ", error);
  };

  return {
    handleSubmit,
    handleError
  };
};
