<script lang="ts">
  import { greet } from "../../lib/greet";
  import { visits } from "../../lib/settings";

  let count = $state(0);
  let name = $state("world");

  // Read once when the popup opens, then bump it: the popup is a fresh page
  // every time, so anything that must survive lives in storage.
  visits.getValue().then(async (stored) => {
    count = stored + 1;
    await visits.setValue(count);
  });
</script>

<main>
  <h1>Template App</h1>
  <p>{greet(name)}</p>
  <input aria-label="Name" bind:value={name} />
  <p class="muted">Opened {count} {count === 1 ? "time" : "times"}.</p>
</main>
