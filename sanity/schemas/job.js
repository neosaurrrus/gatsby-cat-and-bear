export default {
  name: 'job',
  title: 'jobs',
  icon: () => '👷‍♂️', // Lets give it a cool icon!
  type: 'document', //
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The Job Title',
    },
    {
      name: 'hiring',
      title: 'Hiring?',
      type: 'boolean',
      description: 'Are you hiring for this role?',
    },
    {
      name: 'spec',
      title: 'Job Spec',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Job spec for this role',
    },
  ],
};
