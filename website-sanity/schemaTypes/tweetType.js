import { defineField, defineType } from 'sanity'

export const tweetType = defineType({
  name: 'tweet',
  title: 'Tweet/Note',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category / Topic',
      type: 'string',
      description: 'Optional category tag (e.g. Systems, Deep Learning, ML Engineering)',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'text',
      description: 'The main text of your note/tweet (supports Markdown formatting)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'string',
      description: 'Your name or handle to display',
      initialValue: 'Ashish Raj',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'link',
      title: 'External Link',
      type: 'url',
      description: 'Optional URL if this note references something external',
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      content: 'content',
      media: 'image',
      subtitle: 'publishedAt',
    },
    prepare({ title, content, media, subtitle }) {
      return {
        title: title || (content ? content.substring(0, 40) + '...' : 'New Note'),
        media,
        subtitle: subtitle ? new Date(subtitle).toLocaleDateString() : 'Draft',
      }
    },
  },
})

