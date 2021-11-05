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

$('.wrap').html(`
  <div class="dropdown">
    <button class="btn btn-primary dropdown-toggle" id="dropdownMenuButton">Dropdown menu</button>
    <div class="dropdown-menu" data-toggle-id="dropdownMenuButton">
      <a href="#" class="dropdown-item">Action1</a>
      <a href="#" class="dropdown-item">Action2</a>
      <a href="#" class="dropdown-item">Action3</a>
    </div>
  </div>
`);

$('.dropdown-toggle').dropdown();
