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
  const isValidUserName = (userName: string | null | undefined) => {
    if (!userName || typeof userName !== "string") {
      return false;
    }
    return true;
  };
  const isValidAge = (age: number | null | undefined) => {
    if (!age || typeof age !== "number") {
      return false;
    }
    return true;
  };
  const isValidComment = (comment: string | null | undefined) => {
    if (!comment || typeof comment !== "string") {
      return false;
    }
    return true;
  };

  await new Promise((resolve) => setTimeout(resolve, 1000));

  const userName = queryData?.get("userName");
  const age = queryData?.get("age");
  const comment = queryData?.get("comment");

  if (!isValidUserName(userName)) {
    return {
      state: false,
      message: "Please enter a valid name.",
    };
  }

  if (!isValidAge(Number(age))) {
    return {
      state: false,
      message: "Please enter a valid age.",
    };
  }

  if (!isValidComment(comment)) {
    return {
      state: false,
      message: "Please enter a valid comment.",
    };
  }

  return {
    state: true,
    message: "Form submitted successfully.",
  };
}
