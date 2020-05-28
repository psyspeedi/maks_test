module.exports = () => {
  const faker = require('faker')
  const _ = require('lodash')

  faker.locale = 'ru'

  return {
    slider: _.times(5, () => ({
      id: faker.random.uuid(),
      image: _.sample([
        'https://images.unsplash.com/photo-1590087950153-9061df8c9126?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80',
        'https://images.unsplash.com/photo-1590212137432-75d202d38f7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
        'https://images.unsplash.com/photo-1590180152085-cbae128c5235?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
        'https://images.unsplash.com/photo-1524157399923-bb07eea8c944?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
        'https://images.unsplash.com/photo-1589988587487-e7064b68f2f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
      ]),
      likes: 0
    })),
    news: _.times(12, () => ({
      id: faker.random.uuid(),
      title: faker.lorem.words(),
      briefInformation: faker.lorem.paragraph(),
      fullInformation: faker.lorem.paragraphs()
    })),
    trainer: _.times(20, () => ({
      id: faker.random.uuid(),
      name: {
        firstName: faker.name.firstName(),
        secondName: faker.name.lastName()
      },
      age: _.random(18, 55),
      avatar: faker.image.avatar(),
      location: {
        city: faker.address.city(),
        region: faker.address.county(),
        country:faker.address.country(),
      },
      role: _.sample(['Смешанные единоборства', 'Бокс', 'Качалка', 'Муай Тай', 'Гребля'])
    }))
  }
}