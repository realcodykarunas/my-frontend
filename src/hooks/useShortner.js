import { useMutation } from "@apollo/client";
import { ADD_LINK } from "../mutations/mutations";

export const useShortner = () => {
  const [addLink, { data, loading, error }] = useMutation(ADD_LINK);

  const handleSubmit = (value) => {
    const { url: urlValue } = value;
    const res = urlValue.split("/");
    const url = `${res[0]}//${res[1]}${res[2]}`;
    const slug = res.slice(-2).join("/");
    console.log("url :", url);
    console.log("slug: ", slug);
    // addLink({ variables: { url, slug } });
  };

  const handleError = (error) => {
    console.log("error submitting form: ", error);
  };

  return {
    handleSubmit,
    handleError
  };
};
