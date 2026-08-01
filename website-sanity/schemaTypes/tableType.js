import { defineType, defineField } from 'sanity'

export const tableType = defineType({
  name: 'table',
  title: 'Table',
  type: 'object',
  fields: [
    defineField({
      name: 'rows',
      title: 'Rows',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'tableRow',
          title: 'Row',
          fields: [
            defineField({
              name: 'cells',
              title: 'Cells',
              type: 'array',
              of: [{ type: 'string' }],
            }),
          ],
          preview: {
            select: { cells: 'cells' },
            prepare({ cells }) {
              return {
                title: cells ? cells.join(' | ') : 'Empty row',
              }
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: { rows: 'rows' },
    prepare({ rows }) {
      const rowCount = rows ? rows.length : 0
      return {
        title: `Table (${rowCount} row${rowCount !== 1 ? 's' : ''})`,
      }
    },
  },
})
