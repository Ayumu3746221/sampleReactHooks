import React, { useState } from "react";
import ActionForm from "./actionForm";

interface pageProps {
  userName: string;
  age: number;
  comment: string;
}

const useActionStatePage: React.FC<pageProps> = (props: pageProps) => {
  const [formState, setFormState] = useState<pageProps>(props);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    return setFormState({ ...formState, userName: e.target.value });
  };

  const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    return setFormState({ ...formState, age: parseInt(e.target.value) });
  };

  const handleCommentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    return setFormState({ ...formState, comment: e.target.value });
  };

  return (
    <ActionForm
      formState={formState}
      handleAgeChange={handleAgeChange}
      handleCommentChange={handleCommentChange}
      handleNameChange={handleNameChange}
    />
  );
};

export default useActionStatePage;
