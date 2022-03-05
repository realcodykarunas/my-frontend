import { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_LINK } from "../mutations/mutations";

export const useShortner = () => {
  const [createLink, { data, loading, error }] = useMutation(CREATE_LINK);
  const [results] = useState("");
  const [formErrors, setFormErrors] = useState({});

  console.log(data);
  console.log(error);

  useEffect(() => {}, [results, formErrors, loading]);

  const handleSubmit = async (value) => {
    const { url: urlValue } = value;
    const res = urlValue.split("/");
    const url = `${res[0]}//${res[1]}${res[2]}`;
    const slug = res.slice(-2).join("/");
    const variables = { url, slug };
    console.log("payload => ", variables);
    try {
      // Handle response
      const res = await createLink({ variables });
      console.log("res: ", res);
    } catch (error) {
      console.log("Error adding link", error);
      setFormErrors(error);
    }
  };

  const handleError = (error) => {
    console.log("error submitting form: ", error);
  };

  return {
    handleSubmit,
    handleError,
    formErrors,
    results,
    loading
  };
};
