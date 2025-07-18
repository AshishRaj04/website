import {defineType, defineField} from 'sanity'
import {CodeIcon} from '@sanity/icons' 

export const codeType = defineType({
  name: 'code',
  title: 'Code Block',
  type: 'object',
  icon: CodeIcon, 
  fields: [
    defineField({
      name: 'language',
      title: 'Language',
      type: 'string',

      options: {
        list: [
          {title: 'JavaScript', value: 'javascript'},
          {title: 'HTML', value: 'html'},
          {title: 'CSS', value: 'css'},
          {title: 'Python', value: 'python'},
          {title: 'SQL', value: 'sql'},
          {title: 'JSON', value: 'json'},
          {title: 'Java', value: 'java'},
          {title: 'C#', value: 'csharp'},
          {title: 'C++', value: 'cpp'},
          {title: 'PHP', value: 'php'},
          {title: 'Ruby', value: 'ruby'},
          {title: 'Go', value: 'go'},
          {title: 'Swift', value: 'swift'},
          {title: 'TypeScript', value: 'typescript'},
          {title: 'Kotlin', value: 'kotlin'},
          {title: 'Shell', value: 'shell'},
          {title: 'Markdown', value: 'markdown'},
          {title: 'Plain Text', value: 'text'},
        ],
      },
    }),
    defineField({
      name: 'code',
      title: 'Code',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
  ],
})
