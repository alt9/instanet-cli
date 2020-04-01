<template>
  <div>
     <header>
        <div class="header-container">
            <div class="logo"><a href="index.html"><img src=" require('../../src/assets/img/insta.png') " width="205" height="50" alt="Instanet"></a></div>
            <div class="header-search"><input class="header-search__input" type="text" name="search" value="" placeholder="Поиск"></div>
            <div class="header-nav">
                <nav class="head-nav">
                    <ul>
                        <li><a class="head-nav__ahome" href="index" aria-label="Домой"></a></li>
                        <li><a class="head-nav__apop" href="interest" aria-label="Интересное"></a></li>
                        <li><a class="head-nav__amy" href="profile" aria-label="Моя страница"></a></li>
                    </ul>
                </nav>
                <div class="head-nav__button">
                    <button class="visually-hidden" type="button" aria-label="Мои записи понравились"></button>
                    <span></span>
                </div>
            </div>
        </div>
    </header>
  </div>
</template>

<script>
import Home from '../../src/components/Home'
import Interest from '../../src/components/Interest'
import Post from '../../src/components/Post'
import Profile from '../../src/components/Profile'

  export default {
    name: 'Header',
    components: {
      Home,
      Interest,
      Post,
      Profile
    }
  }


</script>



<style>

/*html {
    
  }
 */ 
  *, *::before, *::after {
    box-sizing: inherit;
  }
  
body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "PT Sans", Arial, sans-serif;
    font-size: 14px;
    line-height: 16px;
    font-weight: 400;
    color: #000000;
    background-color: #f2f2f2;
  }
  
a {
    text-decoration: none;
  }
  
img {
    max-width: 100%;
    height: auto;
  }
  
.visually-hidden:not(:focus):not(:active),
  input[type="checkbox"].visually-hidden,
  input[type="radio"].visually-hidden {
    position: absolute;
  
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
  
    white-space: nowrap;
  
    -webkit-clip-path: inset(100%);
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
  }
  
h1, h2, p {
    margin: 0;
  }

header {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 5;
    background-color: rgba(255,255,255,0.8);
  }

.logo img {
    display: block;
    opacity: 0.5;
}

.logo a {
    display: block;
}

.logo img:hover {
    opacity: 1;
}

.logo img:active {
    opacity: 0.7;
}

.header-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    max-width: 1200px;
    margin: 0 auto;
  }

.header-search {
    justify-self: center;
    align-self: center;
}

.header-search__input {
    box-sizing: border-box;
    width: 250px;
    height: 30px;
    padding: 3px 3px 3px 10px;
    font: inherit;
    font-size: 14px;
    line-height: 20px;
    color: #000000;
    background-color: #ffffff;
    border: 1px solid #bdbdbd;
    border-radius: 6px;
}

.header-search__input:hover {
    border: 2px solid #808080;
}

.header-search__input:focus {
    border: 2px solid #808080;
}

.header-nav {
    justify-self: end;
    align-self: center;
}

.head-nav ul {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 150px;
    margin: 0;
    padding: 0;
    list-style: none;
    
}

.head-nav a::before {
    position: absolute;
    content: "";
    width: 24px;
    height: 24px;
    background-repeat: no-repeat;
    opacity: 0.3;
}

.head-nav__ahome::before {
    top: -14px;
    left: 0;
    background-image: url("../../src/assets/img/house.svg");
}

.head-nav__apop::before {
    top: -14px;
    left: 35px;
    background-image: url("../../src/assets/img/pop.svg");
}

.head-nav__amy::before {
    top: -14px;
    left: 70px;
    background-image: url("../../src/assets/img/user.svg");
}

.head-nav__ahome:hover::before,
.head-nav__apop:hover::before,
.head-nav__amy:hover::before {
    opacity: 1;
}

.head-nav__ahome:active::before,
.head-nav__apop:active::before,
.head-nav__amy:active::before {
    opacity: 0.7;
}

.head-nav__button {
    position: relative;
    width: 24px;
}

.head-nav__button span::after {
    position: absolute;
    content: "";
    width: 24px;
    height: 24px;
    top: -14px;
    left: 125px;
    background-repeat: no-repeat;
    background-image: url("../../src/assets/img/8.svg");
    opacity: 0.3;
    cursor: pointer;
}

.head-nav__button span:hover::after {
    opacity: 1;
}

.head-nav__button span:active::after {
    opacity: 0.7;
}


</style>