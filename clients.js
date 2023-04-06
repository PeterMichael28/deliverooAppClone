import  {createClient} from '@sanity/client';
import ImageUrlBuilder from '@sanity/image-url'

export const client = createClient( {
    projectId: 'l63s8v09',
    dataset:  'production',
    apiVersion: '2023-03-22',
    useCdn: true
})

const builder = ImageUrlBuilder( client )

export const urlFor = (source) => builder.image(source)