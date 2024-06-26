<script lang="ts">
  import p5 from "p5";
  import { onMount } from "svelte";

  let parent: HTMLElement;

  onMount(() => {
    const sketch = new p5(p => {
      const circleNum = 50;
      const circleSpeed = 0.001;

      let circles = [];

      p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight);
        p.colorMode(p.HSL);

        for (let i = 0; i < circleNum; i++) {
          circles.push({
            x: p.random(p.windowWidth),
            y: p.random(p.windowHeight),
            size: p.random(30, 50),
            color: p.color(p.random(200, 300), 84, 60),
          });
        }
      };

      p.draw = () => {
        p.background("#181818");

        p.noStroke();
        for (let i = 0; i < circles.length; i++) {
          const circle = circles[i];
          circle.x = p.windowWidth * p.noise(circleSpeed * p.frameCount + (10000 * i));
          circle.y = p.windowHeight * p.noise(circleSpeed * p.frameCount + 10000 + (10000 * i));

          p.fill(circle.color);
          p.ellipse(circle.x, circle.y, circle.size, circle.size);
        }
      };
    });

    return () => {
      sketch.remove();
    }
  }, parent);
</script>
