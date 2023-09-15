import IconBuildingCastle from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/building-castle.tsx";
import env from "../utils/env.ts";

const { APP_NAME, APP_VERSION } = env;

export default function Header() {
  return (
    <div class="w-full flex flex-col md:flex-row">
      <div>
        <IconBuildingCastle />
        <span class="text-xl">{APP_NAME}</span>
        <span class="text-sm text-gray-300 mx-1">{APP_VERSION}</span>
      </div>
    </div>
  );
}
