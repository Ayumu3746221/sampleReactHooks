import React, { useActionState } from "react";
import { submitForm } from "../../lib/submit";

interface formState {
  userName: string;
  age: number;
  comment: string;
}

interface formActionProps {
  formState: formState;
  handleNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleAgeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCommentChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ActionForm = ({
  formState,
  handleNameChange,
  handleAgeChange,
  handleCommentChange,
}: formActionProps) => {
  const [message, formAction, isPending] = useActionState(submitForm, null);

  return (
    <form
      action={formAction}
      name="formData"
      className="max-w-lg mx-auto p-4 my-4 bg-white shadow-lg rounded-lg"
      id="useActionState"
    >
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Name:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          value={formState.userName}
          name="userName"
          onChange={(e) => handleNameChange(e)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Age:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="number"
          value={formState.age}
          name="age"
          onChange={(e) => handleAgeChange(e)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Comment:
        </label>
        <input
          type="text"
          value={formState.comment}
          name="comment"
          onChange={(e) => handleCommentChange(e)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4 text-center">
        {isPending && <p className="text-blue-500">Submmitting...</p>}
        {message?.state ? (
          <p className="text-green-500">{message.message}</p>
        ) : (
          <p className="text-red-500">{message?.message}</p>
        )}
      </div>
      <div className="flex items-center justify-center">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          submit
        </button>
      </div>
    </form>
  );
};

export default ActionForm;
