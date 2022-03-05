export const useShortner = () => {
  // const handleSubmit = useMemo((value) => {
  //   alert(value);
  // }, []);

  const handleSubmit = (value) => {
    console.log("value: ", value);
  };

  const handleError = (error) => {
    console.log("error submitting form: ", error);
  };

  return {
    handleSubmit,
    handleError
  };
};
