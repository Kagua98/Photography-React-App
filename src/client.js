import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
    projectId: 'g5srqz19',
    dataset: 'production',
    apiVersion: '202-02-01',
    useCdn: true,
    token: 'skMiEu2GuHm434Ei49cizWhlRWZMfGFs2gniifaXkKNj1aasRKtzZ4duhNphUialqTWQ7xHGfS8s74r3IejMag1O6aPLhhHl7WHw7QOICpbS2gYrU3Wk1cJSIK5oF2gOBqRsdWXQkwCIs3l2kbeGaoG5v6zi6rfTNtq4Q6Yb2SVwCN2SkqJY',
});