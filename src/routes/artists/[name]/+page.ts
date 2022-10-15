/** @type {import('./$types').PageLoad} */
export function load({ name }) {
  console.log(name); // 'blog/[slug]'
}