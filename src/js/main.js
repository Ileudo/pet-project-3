import { $ } from './lib/lib';

$('#first').on('click', () => {
  $('div').eq(1).fadeOut(800);
});

$('[data-count="second"]').on('click', () => {
  $('div').eq(2).fadeOut(800);
});

$('button')
  .eq(2)
  .on('click', () => {
    $('.w-500').fadeOut(800);
  });

$('#trigger').click(() =>
  $('#trigger').createModal({
    text: {
      title: 'Modal Title',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum minus doloremque nesciunt',
    },
    btns: {
      count: 3,
      settings: [
        ['Close', ['btn-danger', 'mr-10'], true],
        [
          'Save changes',
          ['btn-success'],
          false,
          () => {
            alert('Данные сохранены');
          },
        ],
        ['Another btn', ['btn-warning', 'ml-10'], false, () => alert('Hello world!')],
      ],
    },
  })
);
