// import { useMutation } from "@apollo/client";

export const useShortner = () => {
  // const [addLink, { data, loading, error }] = useMutation();

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
