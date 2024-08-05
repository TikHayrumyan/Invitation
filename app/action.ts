"use server";
export async function sendMail(formData: FormData) {
  "use server";

  const res = await fetch("https://m1.weflex.am/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: formData.get("Name") }),
  });
  
}
