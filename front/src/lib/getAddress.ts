export default async function getAddress({queryKey}: {queryKey: [string, number, number]}) {
    const [_1, lat, lon] = queryKey;
    const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/map?lat=${lat}&lon=${lon}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-cache",
      credentials: "include",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
