"use server";

interface QueryData {
  get(key: string): string | null;
}

interface response {
  state: boolean;
  message: string;
}
interface response {
  state: boolean;
  message: string;
}

export async function submitForm(
  // @ts-ignore
  state: response | null,
  queryData?: QueryData
): Promise<response> {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const userName = queryData?.get("userName");
  const age = queryData?.get("age");
  const comment = queryData?.get("comment");

  if (!userName || !age || !comment) {
    return {
      state: false,
      message: "Please fill in all fields.",
    };
  }

  return {
    state: true,
    message: "Form submitted successfully.",
  };
}
