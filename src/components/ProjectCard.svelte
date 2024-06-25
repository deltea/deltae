<script lang="ts">
  import "iconify-icon";
  import Button from "$components/Button.svelte";

  export let post;
</script>

<Button animation={false} class="block space-y-5 text-black hover:cursor-default">
  <a href={`/projects/${post.slug}`}>
    <div
      class="bg-cover rounded-2xl bg-center h-48 w-full"
      style={`background-image: url('${post.data.cover}')`}
    ></div>
  </a>

  <div class="flex justify-between items-center mx-2">
    <a
      href={`/projects/${post.slug}`}
      class="font-nunito font-bold text-2xl grow text-left"
    >
      {post.data.title}
    </a>

    <div class="flex items-center gap-3 text-xl">
      <Button
        element="a"
        target="_blank"
        href={post.data.github}
        class="p-0 size-10 rounded-full flex justify-center items-center"
      >
        <iconify-icon icon="mingcute:code-fill"></iconify-icon>
      </Button>

      <Button
        element="a"
        target="_blank"
        href={post.data.url}
        class="p-0 size-10 rounded-full flex justify-center items-center"
      >
        <iconify-icon icon="iconamoon:link-external-bold"></iconify-icon>
      </Button>
    </div>
  </div>
</Button>
