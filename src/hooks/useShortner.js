import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_LINK } from "../mutations/mutations";

export const useShortner = () => {
  // const [addLink, { data, loading, error }] = useMutation(ADD_LINK);
  const [addLink] = useMutation(ADD_LINK);
  const [results, setResults] = useState("");

  const handleSubmit = async (value) => {
    const { url: urlValue } = value;
    const res = urlValue.split("/");
    const url = `${res[0]}//${res[1]}${res[2]}`;
    const slug = res.slice(-2).join("/");
    console.log("url :", url);
    console.log("slug: ", slug);
    try {
      // Handle response
      const res = await addLink({ variables: { url, slug } });
      console.log("res: ", res);
    } catch (error) {
      console.log("Error adding link", error);
    }
  };

  const handleError = (error) => {
    console.log("error submitting form: ", error);
  };

  return {
    handleSubmit,
    handleError
  };
};
