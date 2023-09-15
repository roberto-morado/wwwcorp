import { type Signal, useSignal } from "@preact/signals";
import { Button } from "../components/Button.tsx";
import IconThumbUp from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/thumb-up.tsx";

interface CounterProps {
  count: Signal<number>;
}

export default function Likes(props: CounterProps) {
  const hasVote = useSignal<boolean>(false);
  return (
    <div class="flex gap-8 py-6">
      <Button
        onClick={() => {
          !hasVote.value ? props.count.value++ : props.count.value--;
          hasVote.value = !hasVote.value;
        }}
        class={`hover:bg-green-500 ${
          hasVote.value ? "bg-green-500 text-white font-bold" : "bg-gray-100"
        }`}
      >
        <IconThumbUp class="w-6 h-6" />
        <p class="text-xl">{props.count}</p>
      </Button>
    </div>
  );
}
