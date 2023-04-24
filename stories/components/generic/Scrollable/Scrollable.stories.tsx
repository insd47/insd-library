import type { Meta, StoryObj } from "@storybook/react";

import Scrollable from "./";
import { CSSProperties } from "react";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Scrollable> = {
  title: "generic/Scrollable",
  component: Scrollable,
  tags: ["autodocs"],

  args: {
    y: true,
    x: false,
    children: `
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In mollis nunc sed id semper. Suspendisse in est ante in nibh mauris cursus mattis. Elementum integer enim neque volutpat ac tincidunt vitae semper. Facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui. Congue mauris rhoncus aenean vel. Etiam erat velit scelerisque in dictum non consectetur. Lectus proin nibh nisl condimentum id venenatis a. Erat imperdiet sed euismod nisi porta lorem. Dui vivamus arcu felis bibendum ut tristique et.
Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Velit scelerisque in dictum non consectetur a. Pharetra diam sit amet nisl suscipit adipiscing bibendum est. Imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Diam ut venenatis tellus in metus vulputate. Ante in nibh mauris cursus mattis molestie a iaculis at. Diam in arcu cursus euismod quis viverra nibh. Sed id semper risus in. Vulputate ut pharetra sit amet aliquam id. Diam maecenas ultricies mi eget mauris pharetra. Orci porta non pulvinar neque laoreet suspendisse. Varius sit amet mattis vulputate enim nulla aliquet porttitor lacus. Ipsum dolor sit amet consectetur adipiscing elit duis tristique sollicitudin. Viverra ipsum nunc aliquet bibendum enim facilisis gravida neque. Pellentesque eu tincidunt tortor aliquam nulla facilisi cras. Lorem sed risus ultricies tristique nulla aliquet. Vitae purus faucibus ornare suspendisse sed nisi lacus sed viverra. Et odio pellentesque diam volutpat. Molestie a iaculis at erat pellentesque. Netus et malesuada fames ac.
Etiam tempor orci eu lobortis elementum. Felis donec et odio pellentesque diam volutpat commodo. Lectus proin nibh nisl condimentum id venenatis a condimentum vitae. Dolor morbi non arcu risus quis. Urna et pharetra pharetra massa. Morbi tincidunt ornare massa eget egestas purus viverra. Purus gravida quis blandit turpis cursus in hac habitasse platea. Nulla pellentesque dignissim enim sit. Enim diam vulputate ut pharetra. Sagittis vitae et leo duis ut diam quam nulla. Nulla pellentesque dignissim enim sit amet venenatis urna cursus. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida.
Aliquet eget sit amet tellus cras adipiscing enim eu turpis. Varius morbi enim nunc faucibus a. Quisque sagittis purus sit amet. Tristique nulla aliquet enim tortor at auctor. Et malesuada fames ac turpis egestas. Orci nulla pellentesque dignissim enim sit. Tortor pretium viverra suspendisse potenti nullam ac tortor vitae purus. Aliquam purus sit amet luctus venenatis. Eget sit amet tellus cras adipiscing enim eu. Nullam ac tortor vitae purus faucibus.
Malesuada fames ac turpis egestas. Sit amet venenatis urna cursus. Magnis dis parturient montes nascetur ridiculus mus mauris. Ut ornare lectus sit amet est placerat in egestas erat. Nunc consequat interdum varius sit. Porttitor massa id neque aliquam vestibulum. Interdum velit laoreet id donec ultrices tincidunt arcu non sodales. Vel turpis nunc eget lorem dolor sed viverra ipsum nunc. Tellus in metus vulputate eu scelerisque felis imperdiet. Sed risus ultricies tristique nulla aliquet enim tortor at auctor. Volutpat diam ut venenatis tellus in metus vulputate eu scelerisque. In arcu cursus euismod quis viverra nibh cras pulvinar mattis. Vel facilisis volutpat est velit egestas dui id ornare. Dictum sit amet justo donec. Id donec ultrices tincidunt arcu non sodales. Lobortis scelerisque fermentum dui faucibus in ornare quam. Nulla porttitor massa id neque aliquam. Suspendisse in est ante in nibh mauris cursus. Nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus.
`,
  },
};

export default meta;

type Story = StoryObj<typeof Scrollable>;

export const Y: Story = {
  args: {
    y: true,
    x: false,
    style: {
      width: "100%",
      height: 200,
    },
  },
};

export const X: Story = {
  args: {
    x: true,
    y: false,
    style: {
      wordBreak: "break-all",
      whiteSpace: "nowrap",
      width: "100%",
      height: 200,
    },
  },
};
