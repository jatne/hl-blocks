import { AiFillTag } from "react-icons/ai";

export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  icon: AiFillTag,
  fields: [
    {
      title: 'Category Name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
      }
    }
  ],
}