import ProfileCard from "../../src/lib/ProfileCard.svelte";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes
export default {
  title: 'Example/ProfileCard',
  component: ProfileCard,
  argTypes: {
    name: { control: 'text' },
    image: { control: 'text' },
    instagramName: { control: 'text' },
    imageAlt: { control: 'text' },
  },
};

// More on component templates: https://storybook.js.org/docs/svelte/writing-stories/introduction#using-args
const Template = (args) => ({
  props: args,
});

// More on args: https://storybook.js.org/docs/svelte/writing-stories/args
export const Primary = Template.bind({});
Primary.args = {
  name: 'John Doe',
  image: 'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-Cutout.png',
  instagramName: 'johndoe',
  imageAlt: 'John Doe',
};