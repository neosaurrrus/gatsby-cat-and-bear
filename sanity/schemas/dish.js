export default {
  name: 'dish',
  title: 'Dishes',
  icon: () => '🥣', // Lets give it a cool icon!
  type: 'document', //
  fields: [
    {
      name: 'name',
      title: 'Dish Name',
      type: 'string',
      description: 'Name of the Dish',
    },
    {
      name: 'vegetarian',
      title: 'Vegetarian',
      type: 'boolean',
      description: 'Is it Vegetarian?',
      options: {
        layout: 'checkbox',
      },
    },
    {
      name: 'vegan',
      title: 'Vegan',
      type: 'boolean',
      description: 'Is it Vegan?',
      options: {
        layout: 'checkbox',
      },
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      description: 'Price of dish in pence',
      validation: (Rule) => Rule.min(99).max(10000), // Limits what can be entered for price
    },
    {
      name: 'image',
      title: 'Dish Image',
      type: 'image',
      options: {
        hotspot: true, // clever thing that lets us edit where to focus the picture when resizing
      },
    },
    {
      // Add a slug to deal with pesky spaces in names
      name: 'slug',
      title: 'slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 50,
      },
    },

    {
      name: 'Intolerences',
      title: 'Contains',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'intolerance' }] }],
    },
  ],
  preview: {
    // This changes what we see in the content column of sanity
    select: {
      name: 'name',
      vegetarian: 'vegetarian',
      vegan: 'vegan',
    },
    prepare: (fields) => ({
      title: `${fields.name} ${
        fields.vegan ? '- 🌱  Ve' : fields.vegetarian ? '-🍆  Veg' : ''
      }`,
    }),
  },
};
