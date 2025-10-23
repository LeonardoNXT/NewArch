import fetch from "node-fetch";

export default async function handler(req, res) {
  const urls = ["https://newarch.studio/", "https://newarch.studio/pt-br/"];

  try {
    const response = await fetch("https://www.bing.com/indexnow", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({
        host: "newarch.studio",
        key: "3f5c9ad6c5424980ad089f9bca6fe570",
        keyLocation:
          "https://newarch.studio/3f5c9ad6c5424980ad089f9bca6fe570.txt",
        urlList: urls,
      }),
    });

    const text = await response.text();
    res.status(200).send(text);
  } catch (err) {
    res.status(500).send(err.toString());
  }
}
