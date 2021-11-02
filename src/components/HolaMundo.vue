<template>
    <div>
        <h1>Primer componente de VUE</h1>
        <h2>{{saludo}}</h2>
        <h2>Hola, {{nombre}}</h2>
        <img src="./../assets/images/batman.jpeg"/>
    </div>
</template>

<script>
export default {
    //AQUI DENTRO SE DECLARAN TODAS LAS ZONAS
    //DEL COMPONENTE
    name: "HolaMundo",
    data() {
        return {
            saludo: "Mi primer componente!!!",
            nombre: "Alumno VUE!!!"
        }
    }
}
</script>

<style scoped>
/* PARA ESTILOS SE UTILIZA @import */
@import './../assets/css/estilosvue.css';
</style>
