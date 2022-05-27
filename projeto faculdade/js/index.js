const iconServicos = document.getElementById('icon-servicos');

const handleClickMenuMobile = () => {
  const menuMobile = document.getElementById('header-menu');
  const buttonRightMenu = document.getElementById('button-menu');
  const iconMenuMobile = document.getElementById('menu-mobile');
  if (menuMobile.style.display === 'flex') {
      menuMobile.style.display = 'none';
      buttonRightMenu.display = 'flex';
      iconMenuMobile.src = 'img/icones/icon-hamburger.svg';
      iconServicos.src = 'img/icones/icon-arrow-light.svg';
  } else {
      menuMobile.style.display = 'flex';
      buttonRightMenu.display = 'none';
      iconMenuMobile.src = 'img/icones/icon-close.svg';
      iconServicos.src = 'img/icones/icon-arrow-dark.svg';
  }
}

const dropMenu = (opt) => {
  const menuServicos = document.getElementById('menu-servicos');

  switch (opt) {
      case 'servicos':
          if (menuServicos.style.display === 'flex') {
              menuServicos.style.display = 'none';
              iconServicos.classList.remove('rotate-icon');
          } else {
              menuServicos.style.display = 'flex';
              iconServicos.classList.add('rotate-icon');
          }
  }
}