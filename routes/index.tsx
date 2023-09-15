import { useSignal } from "@preact/signals";
import Likes from "../islands/Likes.tsx";

// export const handler: Handlers = {
//   GET(_req, ctx) {
//     const addr = ctx.remoteAddr as Deno.NetAddr;
//     const ip = addr.hostname;
//     return ctx.render(ip);
//   },
// };

export default function Home() {
  const count = useSignal(1396);

  return (
    <>
      <Likes count={count} />
    </>
  );
}
