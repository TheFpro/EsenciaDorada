import server from "../dist/server/index.js";

export const config = {
  runtime: "nodejs18.x",
};

function createRequest(req: any) {
  const host = req.headers?.host || "localhost";
  const url = new URL(req.url, `http://${host}`);
  const headers = new Headers();

  for (const [name, value] of Object.entries(req.headers ?? {})) {
    if (value === undefined) continue;
    const headerValue = value as string | string[];
    if (Array.isArray(headerValue)) {
      for (const item of headerValue) {
        headers.append(name, item);
      }
    } else if (typeof headerValue === "string") {
      headers.set(name, headerValue);
    }
  }

  const init: RequestInit = {
    method: req.method,
    headers,
  };

  if (req.method !== "GET" && req.method !== "HEAD") {
    init.body = req;
  }

  return new Request(url.toString(), init);
}

export default async function handler(req: any, res: any) {
  const request = createRequest(req);
  const response = await server.fetch(request, undefined, undefined);

  res.statusCode = response.status;
  response.headers.forEach((value, key) => res.setHeader(key, value));

  const body = await response.arrayBuffer();
  res.end(Buffer.from(body));
}
