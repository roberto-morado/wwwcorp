import { create } from "https://deno.land/x/djwt@v2.9.1/mod.ts";
import { HandlerContext } from "$fresh/server.ts";

const key = await crypto.subtle.generateKey(
  { name: "HMAC", hash: "SHA-512" },
  true,
  ["sign", "verify"],
);

export const handler = async (
  _req: Request,
  _ctx: HandlerContext,
): Promise<Response> => {
  try {
    const { username, password } = await _req.json();

    // authenticate with database
    if (username === "user" && password === "password") {
      const jwt = await create(
        { alg: "HS512", typ: "JWT" },
        { payload: "@" },
        key,
      );
      return new Response(jwt, { status: 200 });
    } else {
      return new Response(JSON.stringify({ error: "Authentication failed" }), {
        status: 401,
      });
    }
  } catch (error) {
    return new Response(error, {
      status: 500,
    });
  }
};
