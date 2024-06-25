<script lang="ts">
  import { cn, cssVar, shadeColor } from "$lib/utils";
  import type { HTMLButtonAttributes } from "svelte/elements";

  let className = "";
  export { className as class };

  interface $$Props extends HTMLButtonAttributes {
    class?: string;
    color?: string;
    borderWidth?: string;
    shadowSize?: string;
    element?: string;
    animation?: boolean;
  };

  export let color = "#ffffff";
  export let borderWidth = "2px";
  export let shadowSize = "4px";
  export let element = "button";
  export let animation = true;

  let button: HTMLElement;
</script>

<svelte:element
  this={element}
  role="button"
  id="button"
  tabindex="0"
  bind:this={button}
  on:click
  {...$$restProps}
  use:cssVar={{
    color,
    shadowSize,
    borderWidth,
    border: shadeColor(color, -35),
    activeTranslate: animation ? shadowSize : "0",
    activeShadowSize: animation ? "0" : shadowSize,
  }}
  class={cn(
    "p-6 rounded-2xl tracking-wider outline-none lowercase font-bold",
    className,
  )}
>
  <slot />
</svelte:element>

<style>
  #button {
    background-color: var(--color);
    border-width: var(--borderWidth);
    border-color: var(--border);
    box-shadow: var(--border) 0 var(--shadowSize);
  }

  #button:active {
    box-shadow: var(--border) 0 var(--activeShadowSize);
    translate: 0 var(--activeTranslate);
  }
</style>
