<script lang="ts">
  import "iconify-icon";

  export let post;
</script>

<div class="block space-y-5 hover:cursor-default bg-white/20 rounded-3xl p-6 border-2 border-white/5 backdrop-blur-xl shadow-xl">
  <a href={`/projects/${post.slug}`}>
    <div
      class="bg-cover rounded-2xl bg-center h-48 w-full"
      style={`background-image: url('${post.data.cover}')`}
    ></div>
  </a>

  <div class="flex justify-between items-center mx-2">
    <a
      href={`/projects/${post.slug}`}
      class="font-jakarta font-bold text-2xl grow text-left tracking-[0em]"
    >
      {post.data.title}
    </a>

    <div class="flex items-center gap-2 text-xl">
      <a
        href={post.data.github}
        target="_blank"
        class="p-0 size-10 bg-white/10 rounded-full flex justify-center items-center"
      >
        <iconify-icon icon="mingcute:code-fill"></iconify-icon>
      </a>

      <a
        href={post.data.url}
        target="_blank"
        class="p-0 size-10 bg-white/10 rounded-full flex justify-center items-center"
      >
        <iconify-icon icon="iconamoon:link-external-bold"></iconify-icon>
      </a>
    </div>
  </div>
</div>
