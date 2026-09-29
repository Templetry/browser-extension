<script lang="ts">
  import { visits } from "../../lib/settings";

  let count = $state(0);
  visits.getValue().then((stored) => (count = stored));

  async function reset() {
    await visits.setValue(0);
    count = 0;
  }
</script>

<main>
  <h1>Template App options</h1>
  <p>The popup has been opened {count} {count === 1 ? "time" : "times"}.</p>
  <button onclick={reset}>Reset counter</button>
</main>
