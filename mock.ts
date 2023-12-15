import fetch from "node-fetch";

export async function fetchEmployes() {
  try {
    const response = await fetch(
      "https://657aa1961acd268f9afb6388.mockapi.io/api/emplyee/all",
      { signal: AbortSignal.timeout(5000) }
    );
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}
