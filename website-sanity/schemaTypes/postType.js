import { defineField, defineType } from 'sanity';

const postType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: function(rule) { return rule.required(); },
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: { source: 'title' },
      validation: function(rule) { return rule.required(); },
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Published', value: 'Published' },
          { title: 'Draft', value: 'Draft' },
        ],
        layout: 'radio',
      },
      initialValue: 'Published',
    }),
    defineField({
      name: 'excerpt',
      type: 'text',
      validation: function(rule) { return rule.required().min(20).max(200); },
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      initialValue: function() { return new Date().toISOString(); },
      validation: function(rule) { return rule.required(); },
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
    defineField({
      name: 'body',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image' }, { type: 'code' }],
    }),
  ],
});

export { postType };