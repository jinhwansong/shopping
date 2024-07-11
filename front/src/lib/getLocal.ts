export default async function getLocal({ queryKey }: { queryKey: [string, string] }) {
  const [_1, address] = queryKey;
  const encodedAddress = encodeURIComponent(address);
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/map/address?address=${encodedAddress}`,
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
