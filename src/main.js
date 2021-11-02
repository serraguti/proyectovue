import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import Home from './components/navegacion/Home.vue';
import Musica from './components/navegacion/Musica.vue';
import Cine from './components/navegacion/Cine.vue';
import Television from './components/navegacion/Television.vue';
import CicloVida from './components/CicloVida.vue';
import JuegosConmutados from './components/JuegosConmutados.vue';
import Directivas from './components/Directivas.vue';

Vue.config.productionTip = false

//DEBEMOS DAR DE ALTA LA TECNOLOGIA DENTRO
//DEL SERVIDOR
Vue.use(VueRouter);

//NECESITAMOS TENER UN ARRAY CON TODAS LAS 
//RUTAS DEL SERVIDOR
const routes = [
  {path: "/home", component: Home},
  {path: "/directivas", component: Directivas},
  {path: "/juegosconmutados", component: JuegosConmutados},
  {path: "/ciclovida", component: CicloVida},
  {path: "/cine", component: Cine},
  {path: "/musica", component: Musica},
  {path: "/television", component: Television},
  {path: "/", component: Home}
]

//DEBEMOS CREAR UN OBJETO router DE LA CLASE
//VueRouter QUE CONTIENE LAS RUTAS Y EL MODO DE NAVEGACION
const router = new VueRouter({
  routes,
  mode: "history"
});

//DEBEMOS DAR DE ALTA EL OBJETO ROUTER
//AL CREAR LA APP
new Vue({
  router, 
  render: h => h(App),
}).$mount('#app')
