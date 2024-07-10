"use server";

const errorState = {
  error: "Invalid username or password.",
};

export async function handleUsernamePasswordLogin(
  prevState: {
    error: string;
  },
  formData: FormData
) {
  return errorState;
}
