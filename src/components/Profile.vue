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
        <div class="content-profile">
            <div class="profile-info">
                <div class="profile-info__photo">
                    <a href="profile.html"><img src="img/vader.png" width="" height="" alt="My Profile"></a>
                </div>
                <div class="profile-info__info">
                    <div class="profile-info__nik">
                        <b>tillmykingdomcome</b>
                        <button class="profile-info__button" type="button">Редактировать</button>
                    </div>
                    <div class="profile-info__publ">
                        <span>12 публикаций</span>
                        <span>12 подписчиков</span>
                        <span>12 подписок</span>
                    </div>
                    <div class="profile-info__name">
                        <span>theking</span>
                    </div>
                </div>
            </div>
            <div class="profile-include">
                <!--Вкладки-->
                <div class="profile-include__tab">
                    <ul>
                        <li><a class="profile-include__tab--active" href='#'>Публикации</a></li>
                        <li><a href='#'>Видео</a></li>
                        <li><a href='#'>Избранное</a></li>
                    </ul>
                </div>
                <div class="profile-include__posts">
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
            <footer class="profile-footer">
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
            </footer>
        </div>
    </main>
  </div>
</template>

<script>
  export default {
    name: 'Profile'
  }


</script>
