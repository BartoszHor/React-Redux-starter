export const settings = {
  columnCreatorText: 'Add new column',
  cardCreatorText: 'Add new card',
  creator: {
    buttonOK: 'OK',
    buttonCancel: 'Cancel',
    defaultText: 'Add new item',
  },
  defaultListDescription: '<p>I can do all the things!!!</p>',
  defaultColumnIcon: 'list-alt',
};

export const pageContents = {
  title: 'TO-DO',
  subtitle: '',
};

export const listData = {
  title: 'Things to do <sup>soon!</sup>',
  description: 'Lets keep it organised!',
  link: "https://images.pexels.com/photos/3785927/pexels-photo-3785927.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  columns: [
    {
      key: 0,
      title: 'Job duties',
      icon: 'building',
      cards: [
        {
          key: 0,
          title: 'Arrange team meeting',
        },
        {
          key: 1,
          title: 'Do sales presentation',
        },
      ],
    },
    {
      key: 1,
      title: 'Home duties',
      icon: 'home',
      cards: [
        {
          key: 0,
          title: 'Cook Pizza',
        },
        {
          key: 1,
          title: 'Buy dogs food',
        },
      ],
    },
    {
      key: 2,
      title: 'Others',
      icon: 'gamepad',
      cards: [
        {
          key: 0,
          title: 'Play new game',
        },
        {
          key: 1,
          title: 'Read book',
        },
      ],
    },
  ],
};
