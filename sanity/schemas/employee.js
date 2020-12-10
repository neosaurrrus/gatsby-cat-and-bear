export default {
  name: 'employee',
  title: 'Employees',
  icon: () => '🔗', // Lets give it a cool icon!
  type: 'document', //
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Name of Employee, first name will do',
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'text',
      description: 'A little about them',
    },
    {
      name: 'image',
      title: 'Photo',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'title',
      title: 'Job Title',
      type: 'reference',
      to: [{ type: 'job' }],
    },
  ],
};
