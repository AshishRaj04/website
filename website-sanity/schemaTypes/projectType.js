import {defineType, defineField} from 'sanity'

const projectType = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      description: 'e.g. Foundation Models, Scientific AI, Production AI',
    }),
    defineField({
      name: 'headline',
      title: 'Headline',
      type: 'string',
      description: 'Short impactful summary line',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'metrics',
      title: 'Metrics / Highlights',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Key quantifiable metrics or feature highlights',
    }),
    defineField({
      name: 'tags',
      title: 'Tags / Tech Stack',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      initialValue: 0,
    }),
    defineField({
      name: 'link',
      title: 'Project Link / GitHub',
      type: 'url',
    }),
    defineField({
      name: 'liveDemo',
      title: 'Live Demo Link',
      type: 'url',
    }),
    defineField({
      name: 'image',
      title: 'Project Image',
      type: 'image',
    }),
  ],
})

export {projectType}

