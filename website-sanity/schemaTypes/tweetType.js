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
      name: 'content',
      title: 'Content',
      type: 'text',
      description: 'The main text of your note/tweet',
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
  ],
  preview: {
    select: {
      title: 'content',
      media: 'image',
      subtitle: 'publishedAt',
    },
    prepare({ title, media, subtitle }) {
      return {
        title: title ? (title.substring(0, 40) + (title.length > 40 ? '...' : '')) : 'New Note',
        media,
        subtitle: subtitle ? new Date(subtitle).toLocaleDateString() : 'Draft',
      }
    },
  },
})
