import HomePage from './components/homePage/HomePage.vue';
import Login from './components/homePage/Login.vue';
import Register from './components/homePage/Register.vue';
import CoursePage from './components/coursePage/CoursePage.vue';
import GameCategories from './components/coursePage/GameCategories.vue';
import CourseSettings from './components/coursePage/CoursePageSettings.vue';
import Flashcards from './components/coursePage/Flashcards.vue';
import Game from './components/coursePage/Game.vue';

export default [
    { path: '/home', component: HomePage},
    { path: '/login', component: Login},
    { path: '/register', component: Register},
    { path: '/course', component: CoursePage},

    { path: '/game/:gameId/category', component: GameCategories},
    { path: '/game/:gameId/category/:categoryId', component: Game},
    { path: '/settings', component: CourseSettings},
    { path: '/flashcards', component: Flashcards},
//     { path: '/coursepage', component: CoursePage},
//     { path: '/coursepage', component: CoursePage},
//     { path: '/coursepage', component: CoursePage},
//     { path: '/coursepage', component: CoursePage}
]