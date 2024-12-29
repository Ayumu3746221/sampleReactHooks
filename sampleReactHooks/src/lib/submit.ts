"use server";

interface QueryData {
  get(key: string): string | null;
}

interface prevState {
  state: boolean;
  message: string;
}

interface response {
  state: boolean;
  message: string;
}

export async function submitForm(
  prevState?: prevState | null,
  queryData?: QueryData
): Promise<response> {
  console.log("submitForm", prevState);
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const userName = queryData?.get("userName");
  const age = queryData?.get("age");
  const comment = queryData?.get("comment");

  if (!userName || !age || !comment) {
    prevState = {
      state: false,
      message: "Please fill in all fields.",
    };

    return prevState;
  }

  prevState = {
    state: true,
    message: "Form submitted successfully.",
  };

  return prevState;
}
