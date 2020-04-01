<template>
  <div>
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
        <div class="content-interest">
            <div class="similar-people">
                <div class="similar-people__heading">
                    <h2 class="similar-people__h2">Интересные люди</h2>
                    <a href="#">Все</a>
                </div>
                <ul class="similar-people__ul">
                    <li class="similar-people__li">
                        <div class="similar-people__wrapper">
                            <!--Иконка пользователя-->
                            <div class="similar-people__icon"></div>
                            <div class="similar-people__blogger">
                                <a href="#" class="similar-people__blogger-item">theguru</a>
                                <span class="similar-people__blogger-desc">Рекомендованый гуру</span>
                            </div>
                            <button type="button" class="similar-people__button">Подписаться</button>
                        </div>
                    </li>
                    <li class="similar-people__li">    
                        <div class="similar-people__wrapper">
                            <!--Иконка пользователя-->
                            <div class="similar-people__icon"></div>
                            <div class="similar-people__blogger">
                                <a href="#" class="similar-people__blogger-item">theguru</a>
                                <span class="similar-people__blogger-desc">Рекомендованый гуру</span>
                            </div>
                            <button type="button" class="similar-people__button">Подписаться</button>
                        </div>
                    </li>
                    <li class="similar-people__li">
                        <div class="similar-people__wrapper">
                            <!--Иконка пользователя-->
                            <div class="similar-people__icon"></div>
                            <div class="similar-people__blogger">
                                <a href="#" class="similar-people__blogger-item">theguru</a>
                                <span class="similar-people__blogger-desc">Рекомендованый гуру</span>
                            </div>
                            <button type="button" class="similar-people__button">Подписаться</button>
                        </div>
                    </li>
                    <li class="similar-people__li">
                        <div class="similar-people__wrapper">
                            <!--Иконка пользователя-->
                            <div class="similar-people__icon"></div>
                            <div class="similar-people__blogger">
                                <a href="#" class="similar-people__blogger-item">theguru</a>
                                <span class="similar-people__blogger-desc">Рекомендованый гуру</span>
                            </div>
                            <button type="button" class="similar-people__button">Подписаться</button>
                        </div>
                    </li>
                    <li class="similar-people__li">
                        <div class="similar-people__wrapper">
                            <!--Иконка пользователя-->
                            <div class="similar-people__icon"></div>
                            <div class="similar-people__blogger">
                                <a href="#" class="similar-people__blogger-item">theguru</a>
                                <span class="similar-people__blogger-desc">Рекомендованый гуру</span>
                            </div>
                            <button type="button" class="similar-people__button">Подписаться</button>
                        </div>
                    </li>
                </ul>
            </div>

            <h2 class="similar-people__h2">Интересные записи</h2>
            <div class="interest-posts">
                <div class="post-promo">
                    <a href=""><img class="post-promo__img" src="img/90.png" width="" height="" alt="Book"></a>
                    <div class="post-promo__wrapper">
                        <span class="post-promo__span">4 тыс.</span>
                        <span class="post-promo__span1">25</span>
                    </div>
                </div>
                <div class="post-promo">
                    <a href=""><img class="post-promo__img" src="img/90.png" width="" height="" alt="Book"></a>
                    <div class="post-promo__wrapper">
                        <span class="post-promo__span">4 тыс.</span>
                        <span class="post-promo__span1">25</span>
                    </div>
                </div>
                <div class="post-promo">
                    <a href=""><img class="post-promo__img" src="img/90.png" width="" height="" alt="Book"></a>
                    <div class="post-promo__wrapper">
                        <span class="post-promo__span">4 тыс.</span>
                        <span class="post-promo__span1">25</span>
                    </div>
                </div>
                <div class="post-promo">
                    <a href=""><img class="post-promo__img" src="img/90.png" width="" height="" alt="Book"></a>
                    <div class="post-promo__wrapper">
                        <span class="post-promo__span">4 тыс.</span>
                        <span class="post-promo__span1">25</span>
                    </div>
                </div>
                <div class="post-promo">
                    <a href=""><img class="post-promo__img" src="img/90.png" width="" height="" alt="Book"></a>
                    <div class="post-promo__wrapper">
                        <span class="post-promo__span">4 тыс.</span>
                        <span class="post-promo__span1">25</span>
                    </div>
                </div>
                <div class="post-promo">
                    <a href=""><img class="post-promo__img" src="img/90.png" width="" height="" alt="Book"></a>
                    <div class="post-promo__wrapper">
                        <span class="post-promo__span">4 тыс.</span>
                        <span class="post-promo__span1">25</span>
                    </div>
                </div>
                <div class="post-promo">
                    <a href=""><img class="post-promo__img" src="img/90.png" width="" height="" alt="Book"></a>
                    <div class="post-promo__wrapper">
                        <span class="post-promo__span">4 тыс.</span>
                        <span class="post-promo__span1">25</span>
                    </div>
                </div>
            </div>
        </div>
    </main>
  </div>
</template>

<script>
  export default {
    name: 'Interest'
  }


</script>
