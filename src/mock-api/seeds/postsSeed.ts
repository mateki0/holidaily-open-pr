import { subDays } from 'date-fns'
import { Server } from 'miragejs'
import { Comment, FeedPost, Reaction, Schema } from 'mockApi/models'
import { sourcePeter } from './notificationSources'

export const postsSeed = (context: Server<Schema>) => {
  const reactions = reactionsMock.map((reaction) => context.create('reaction', reaction))
  const comments = commentsMock.map((comment) => context.create('comment', comment))
  context.create('post', { ...postsMock[0], reactions: [reactions[3], reactions[7]] })
  context.create('post', {
    ...postsMock[1],
    comments: [comments[0], comments[1]],
    reactions: [reactions[0], reactions[1], reactions[2]],
  })
  context.create('post', { ...postsMock[2], comments: [comments[2]], reactions: [reactions[3]] })
  context.create('post', {
    ...postsMock[3],
    comments: [comments[3], comments[4]],
    reactions: [reactions[4], reactions[5], reactions[6]],
  })
}

export const postsMock: FeedPost[] = [
  {
    id: '1',
    text: '',
    author: {
      id: '01',
      occupation: 'React Native Dev',
      name: 'Bart Widlarz',
      pictureUrl: 'https://ca.slack-edge.com/TRT69R5EV-US2VDHVDJ-0ea07eeb5689-512',
    },
    data: [
      {
        type: 'image',
        uri: 'https://i.ibb.co/7N719BN/pic22.png',
        id: '1',
      },
      {
        type: 'image',
        uri: 'https://i.ibb.co/xJFJ6SB/Projekt-bez-tytu-u-2.png',
        id: '1',
      },
    ],
    createdAt: new Date().getTime(),
    location: {
      city: 'Krakow',
      country: 'Poland',
      district: '',
      isoCountryCode: '',
      name: '',
      postalCode: '',
      region: 'Krakow',
      street: 'Krakow',
      subregion: 'Krakow',
      timezone: 'Europe',
      streetNumber: '1',
    },
    comments: [],
    reactions: [],
  },

  {
    id: '3',
    author: {
      id: '1',
      occupation: 'Project Manager',
      name: 'Lena Morrison',
      pictureUrl: 'https://randomuser.me/api/portraits/women/35.jpg',
    },
    createdAt: subDays(new Date(), 2).getTime(),
    location: {
      city: 'Porto',
      country: 'Portugal',
      district:
        'União das freguesias de Cedofeita, Santo Ildefonso, Sé, Miragaia, São Nicolau e Vitória',
      isoCountryCode: 'PT',
      name: 'Praça do Gen Humberto Delgado 266',
      postalCode: '4049-001',
      region: 'Norte',
      street: 'Praça do Gen Humberto Delgado',
      subregion: 'District Porto',
      timezone: 'Europe/Lisbon',
      streetNumber: '2',
    },

    text: 'Hope it will make you hungry guys! :D Greetings from Porto!',
    data: [
      {
        type: 'image',
        uri: 'https://images.unsplash.com/photo-1653343325659-98c7fde4ef11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2864&q=80',
        id: '1',
      },
      {
        type: 'image',
        uri: 'https://images.unsplash.com/photo-1562250883-5b8fa0be26ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        id: '2',
      },
      {
        type: 'image',
        uri: 'https://images.unsplash.com/photo-1536663815808-535e2280d2c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80',
        id: '3',
      },
      {
        type: 'image',
        uri: 'https://images.unsplash.com/photo-1503075131240-fe4b3a7fa473?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
        id: '4',
      },
      {
        type: 'image',
        uri: 'https://images.unsplash.com/photo-1535911062411-3280a2af5b51?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
        id: '5',
      },
    ],
    reactions: [],
    comments: [],
  },
  {
    id: '4',
    author: {
      id: '1',
      occupation: 'UI/UX Designer',
      name: 'Dolores King',
      pictureUrl: 'https://randomuser.me/api/portraits/women/5.jpg',
    },
    createdAt: subDays(new Date(), 4).getTime(),
    location: {
      city: 'Venice',
      country: 'Italy',
      district: 'Venezia Murano Burano (Venezia Insulare)',
      isoCountryCode: 'IT',
      name: 'Santa Croce 1882, Salizada Carminati',
      postalCode: '30135',
      region: 'Venice',
      street: 'Santa Croce',
      subregion: 'Venice',
      timezone: 'Europe/Rome',
      streetNumber: '3',
    },

    text: 'Ahhh… city of lurrve!! Romance on every corner, a picture on every cobbled street and alley way. The light was just superb for photos and I had a great time getting lost in all the twisting and turning alley ways. I’ve always prided myself on my sense of direction and being able to nose my way in and around an area – not in Venice. ',
    data: [
      {
        type: 'image',
        uri: 'https://images.unsplash.com/photo-1527631746610-bca00a040d60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        id: '6',
      },
    ],
    reactions: [],
    comments: [],
  },
  {
    id: '5',
    author: {
      id: '1',
      occupation: 'Software Engineer',
      name: 'Ramon Wheeler',
      pictureUrl: 'https://randomuser.me/api/portraits/men/3.jpg',
    },
    createdAt: subDays(new Date(), 9).getTime(),
    text: 'Chill :)',
    data: [
      {
        type: 'image',
        uri: 'https://images.unsplash.com/photo-1533929702053-9986939ea193?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
        id: '7',
      },
    ],
    reactions: [],
    comments: [],
  },
]

export const commentsMock: Comment[] = [
  {
    id: '1',
    author: {
      id: '1',
      occupation: 'QA Tester',
      name: 'Brent Morris',
      pictureUrl: 'https://randomuser.me/api/portraits/men/11.jpg',
    },
    createdAt: new Date().getTime(),
    text: 'Cool',
  },
  {
    id: '2',
    author: {
      id: '4',
      occupation: 'QA Tester',
      name: 'Jeff Perry',
      pictureUrl: 'https://randomuser.me/api/portraits/men/44.jpg',
    },
    createdAt: new Date().getTime(),
    text: 'Porto is an interesting place to see. Is a quiet old city with nice architecture. On the river shores are few terraces with a lovely view over the other shore where are a lot of Porto wine shops. On some of them you can see how the wine is kept and processed and also you cat taste it.',
  },
  {
    id: '3',
    author: {
      id: '1',
      occupation: 'Software Engineer',
      name: 'Melanie Holt',
      pictureUrl: 'https://randomuser.me/api/portraits/women/8.jpg',
    },
    createdAt: new Date().getTime(),
    text: 'Venice is awesome!!',
  },
  {
    id: '4',
    author: {
      id: '1',
      occupation: 'QA Tester',
      name: 'Frances Hawkins',
      pictureUrl: 'https://randomuser.me/api/portraits/men/15.jpg',
    },
    createdAt: new Date().getTime(),
    text: 'Nice flowers',
  },
  {
    id: '5',
    author: {
      id: sourcePeter.id,
      occupation: sourcePeter.occupation,
      name: `${sourcePeter.firstName} ${sourcePeter.lastName}`,
      pictureUrl: sourcePeter.photo,
    },
    createdAt: new Date().getTime(),
    text: "Oh boy, that's what I call relax",
  },
]

export const reactionsMock: Reaction[] = [
  {
    type: '😍',
    users: ['1', '2', '3', '4'],
  },
  {
    type: '😙',
    users: ['1'],
  },
  {
    type: '🥂',
    users: ['1', '2', '3'],
  },
  {
    type: '😲',
    users: ['1', '2', '3'],
  },
  {
    type: '😍',
    users: ['1', '2'],
  },
  {
    type: '🌿',
    users: ['1', '2'],
  },
  {
    type: '🎵',
    users: ['1'],
  },
  {
    type: '👏',
    users: ['1', '2', '3', '4'],
  },
]
