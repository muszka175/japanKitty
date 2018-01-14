import HomePage from './components/homePage/HomePage.vue';
import Login from './components/homePage/Login.vue';
import Register from './components/homePage/Register.vue';
import CoursePage from './components/coursePage/CoursePage.vue';
import FlashcardsCategory from './components/coursePage/FlashcardsCategory.vue';
import CourseSettings from './components/coursePage/CoursePageSettings.vue';
import Flashcards from './components/coursePage/Flashcards.vue';

export default [
    { path: '/home', component: HomePage},
    { path: '/login', component: Login},
    { path: '/register', component: Register},
    { path: '/course', component: CoursePage},
    { path: '/category', component: FlashcardsCategory},
    { path: '/settings', component: CourseSettings},
    { path: '/flashcards', component: Flashcards},
//     { path: '/coursepage', component: CoursePage},
//     { path: '/coursepage', component: CoursePage},
//     { path: '/coursepage', component: CoursePage},
//     { path: '/coursepage', component: CoursePage}
 ]