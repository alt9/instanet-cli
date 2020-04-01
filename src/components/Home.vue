<template>
  <div class="v-home">
    <body>
    <header>
        <div class="header-container">
            <div class="logo"><a href="/"><img src="img/insta.png" width="205" height="50" alt="Instanet"></a></div>
            <div class="header-search"><input class="header-search__input" type="text" name="search" value="" placeholder="Поиск"></div>
            <div class="header-nav">
                <nav class="head-nav">
                    <ul>
                        <li><a class="head-nav__ahome" href="/" aria-label="Домой"></a></li>
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
    <main>
        <div class="content">
            <h1 class="visually-hidden">Instanet - Лента новостей на главной</h1>
            <div class="page-posts">
                <article class="post">
                    <div class="post__head">
                        <div class="post__akkaunt"><a href="anpost">blogger</a></div>
                        <div class="post__submenu">
                            <!--Здесь живут точки для субменю--><div class="post__submenu-items"><span class="post__submenu-item"></span><span class="post__submenu-item2"></span><span class="post__submenu-item3"></span></div>
                        </div>
                    </div>
                    <div class="post__image">
                        <img class="post__image-item" src="img/book.jpg" width="800" height="600" alt="Book">
                        <!-- Кнопки переключают изображения, если их несколько -->
                        <button class="post__image-button-left visually-hidden" type="button"></button>
                        <button class="post__image-button-right visually-hidden" type="button"></button>
                    </div>
                    <div class="post__marks">
                        <ul class="post__icons">
                            <li>
                                <button class="post__icons-item" type="button">
                                    <svg aria-label="Понравилось" fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path clip-rule="evenodd" d="M34.3 3.5C27.2 3.5 24 8.8 24 8.8s-3.2-5.3-10.3-5.3C6.4 3.5.5 9.9.5 17.8s6.1 12.4 12.2 17.8c9.2 8.2 9.8 8.9 11.3 8.9s2.1-.7 11.3-8.9c6.2-5.5 12.2-10 12.2-17.8 0-7.9-5.9-14.3-13.2-14.3zm-1 29.8c-5.4 4.8-8.3 7.5-9.3 8.1-1-.7-4.6-3.9-9.3-8.1-5.5-4.9-11.2-9-11.2-15.6 0-6.2 4.6-11.3 10.2-11.3 4.1 0 6.3 2 7.9 4.2 3.6 5.1 1.2 5.1 4.8 0 1.6-2.2 3.8-4.2 7.9-4.2 5.6 0 10.2 5.1 10.2 11.3 0 6.7-5.7 10.8-11.2 15.6z" fill-rule="evenodd"></path></svg>
                                </button>
                            </li>
                            <li>
                                <button class="post__icons-item" type="button">
                                    <svg aria-label="Страница поста" fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path clip-rule="evenodd" d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z" fill-rule="evenodd"></path></svg>
                                </button>
                            </li>
                            <li>
                                <button class="post__icons-item" type="button">
                                    <svg aria-label="Поделиться" fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M46.5 3.5h-45C.6 3.5.2 4.6.8 5.2l16 15.8 5.5 22.8c.2.9 1.4 1 1.8.3L47.4 5c.4-.7-.1-1.5-.9-1.5zm-40.1 3h33.5L19.1 18c-.4.2-.9.1-1.2-.2L6.4 6.5zm17.7 31.8l-4-16.6c-.1-.4.1-.9.5-1.1L41.5 9 24.1 38.3z"></path><path d="M14.7 48.4l2.9-.7"></path></svg>
                                </button>
                            </li>
                        </ul>
                        <p class="post__like-count">Понравилось 444 раз</p>
                    </div>
                    <div class="post__text">
                        <a class="post__text-blogger" href="anpost">blogger</a>
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia vel ut ratione eius incidunt vitae, id, fuga sed obcaecati explicabo rem quam! </p>
                        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere eaque fuga aliquam ipsam rerum, exercitationem voluptates nostrum modi, dolor quos distinctio, dolore deleniti et quia neque quae ut sint asperiores sit? Atque dicta sed nobis eum sequi. Possimus ad optio, natus eum magnam voluptates quis minus, dolor dolore recusandae tempora totam eaque unde ipsam voluptas iure placeat. Dolores id cumque harum expedita, ad at incidunt aspernatur. Sint expedita provident ex error similique aspernatur, ab commodi dolore? Optio.</p>
                    </div>
                    <div class="post__time"><p>10 часов назад</p></div>
                    <div class="post__comment">
                        <form  class="post__form" method="post">
                            <textarea class="post__write-comment" placeholder="Добавить комментарий"></textarea>
                            <button class="post__send-comment" type="submit">Опубликовать</button>
                        </form>
                    </div>
                </article>

                <article class="post">
                    <div class="post__head">
                        <div class="post__akkaunt"><a href="#" target="_blank">BlondieCode</a></div>
                        <div class="post__submenu">
                            <!--Здесь живут точки для субменю--><div class="post__submenu-items"><span class="post__submenu-item"></span><span class="post__submenu-item2"></span><span class="post__submenu-item3"></span></div>
                        </div>
                    </div>
                    <div class="post__image">
                        <img class="post__image-item" src="img/book.jpg" width="800" height="600" alt="Book">
                        <!-- Кнопки переключают изображения, если их несколько -->
                        <button class="post__image-button-left visually-hidden" type="button"></button>
                        <button class="post__image-button-right visually-hidden" type="button"></button>
                    </div>
                    <div class="post__marks">
                        <ul class="post__icons">
                            <li>
                                <button class="post__icons-item" type="button" aria-label="Понравилось">
                                    <svg fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path clip-rule="evenodd" d="M34.3 3.5C27.2 3.5 24 8.8 24 8.8s-3.2-5.3-10.3-5.3C6.4 3.5.5 9.9.5 17.8s6.1 12.4 12.2 17.8c9.2 8.2 9.8 8.9 11.3 8.9s2.1-.7 11.3-8.9c6.2-5.5 12.2-10 12.2-17.8 0-7.9-5.9-14.3-13.2-14.3zm-1 29.8c-5.4 4.8-8.3 7.5-9.3 8.1-1-.7-4.6-3.9-9.3-8.1-5.5-4.9-11.2-9-11.2-15.6 0-6.2 4.6-11.3 10.2-11.3 4.1 0 6.3 2 7.9 4.2 3.6 5.1 1.2 5.1 4.8 0 1.6-2.2 3.8-4.2 7.9-4.2 5.6 0 10.2 5.1 10.2 11.3 0 6.7-5.7 10.8-11.2 15.6z" fill-rule="evenodd"></path></svg>
                                </button>
                            </li>
                            <li>
                                <button class="post__icons-item" type="button" aria-label="Страница поста">
                                    <svg fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path clip-rule="evenodd" d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z" fill-rule="evenodd"></path></svg>
                                </button>
                            </li>
                            <li>
                                <button class="post__icons-item" type="button" aria-label="Поделиться">
                                    <svg fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M46.5 3.5h-45C.6 3.5.2 4.6.8 5.2l16 15.8 5.5 22.8c.2.9 1.4 1 1.8.3L47.4 5c.4-.7-.1-1.5-.9-1.5zm-40.1 3h33.5L19.1 18c-.4.2-.9.1-1.2-.2L6.4 6.5zm17.7 31.8l-4-16.6c-.1-.4.1-.9.5-1.1L41.5 9 24.1 38.3z"></path><path d="M14.7 48.4l2.9-.7"></path></svg>
                                </button>
                            </li>
                        </ul>
                        <p class="post__like-count">Понравилось 111 раз</p>
                    </div>
                    <div class="post__text">
                        <a class="post__text-blogger" href="#" target="_blank">BlondieCode</a>
                        <p>Создаем на html-странице кастомное меню по правому клику мыши, только ванильный.</p>
                    </div>
                    <div class="post__time"><p>11 часов назад</p></div>
                    <div class="post__comment">
                        <form class="post__form" method="post">
                            <textarea class="post__write-comment" placeholder="Добавить комментарий"></textarea>
                            <button class="post__send-comment" type="submit">Опубликовать</button>
                        </form>
                    </div>
                </article>
            </div>

            <aside class="page-sidebar">
                <section class="sidebar-login">
                    <!--Иконка пользователя-->
                    <div class="sidebar-login__icon"><a href="#">tillmykingdomcome</a></div>
                    <span class="sidebar-login__name">theking</span>
                </section>
                <section class="sidebar-section">
                    <div class="sidebar-section__head">
                        <span>Истории</span>
                        <a href="#">Все подряд</a>
                    </div>
                    <div class="sidebar-section__all">
                        <div class="sidebar-section__item">
                            <!--Иконка историка - изначально планировались, но не стилизованы-->
                            <a href="#"><div class="sidebar-section__icon"></div></a>
                            <a class="sidebar-section__blog" href="#">kt_team.ru</a>
                        </div>
                        <div class="sidebar-section__item">
                            <!--Иконка историка-->
                            <a href="#"><div class="sidebar-section__icon"></div></a>
                            <a class="sidebar-section__blog" href="#">geekbrains.ru</a>
                        </div>
                        <div class="sidebar-section__item">
                            <!--Иконка историка-->
                            <a href="#"><div class="sidebar-section__icon"></div></a>
                            <a class="sidebar-section__blog" href="#">itmozg</a>
                        </div>
                        <div class="sidebar-section__item">
                            <!--Иконка историка-->
                            <a href="#"><div class="sidebar-section__icon"></div></a>
                            <a class="sidebar-section__blog" href="#">htmlacademy</a>
                        </div>
                    </div>
                </section>
                <section class="sidebar-section">
                    <div class="sidebar-section__head">
                        <span>Рекомендовано</span>
                        <a href="#">Все подряд</a>
                    </div>
                    <div class="sidebar-section__all">
                        <div class="sidebar-section__item">
                            <!--Иконка рекомендации-->
                            <a href="#"><div class="sidebar-section__icon"></div></a>
                            <a class="sidebar-section__blog" href="#">instagram</a>
                        </div>
                        <div class="sidebar-section__item">
                            <!--Иконка рекомендации-->
                            <a href="#"><div class="sidebar-section__icon"></div></a>
                            <a class="sidebar-section__blog" href="#">kekstagram</a>
                        </div>
                        <div class="sidebar-section__item">
                            <!--Иконка рекомендации-->
                            <a href="#"><div class="sidebar-section__icon"></div></a>
                            <a class="sidebar-section__blog" href="#">geekgirl</a>
                        </div>
                    </div>
                </section>
                <section class="sidebar-nav">
                    <nav>
                        <ul>
                            <a href="#"><li class="sidebar-nav__li">О нас</li></a>
                            <a href="#"><li class="sidebar-nav__li">Помощь</li></a>
                            <a href="#"><li class="sidebar-nav__li">Пресса</li></a>
                            <a href="#"><li class="sidebar-nav__li">Вакансии</li></a>
                            <a href="#"><li class="sidebar-nav__li">API</li></a>
                            <a href="#"><li class="sidebar-nav__li">Конфиденциальность</li></a>
                        </ul>
                    </nav>
                    <div class="sidebar-nav__copyright">
                        <p>© Instanet bez BOM, 2020</p>
                    </div>
                </section>
            </aside>
        </div>
    </main>
</body>
    
  </div>
</template>

<script>
  export default {
    name: 'v-home'
  }


</script>
