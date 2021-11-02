<template>
    <div>
        <h1>Ejemplo ciclo vida Hooks</h1>
        <button @click="cambiarSaludo()">
            Cambiar saludo
        </button>
        <h3 style="color:blue">{{saludo}}</h3>
    </div>
</template>

<script>
export default {
    name: "CicloVida",
    methods: {
        //AQUI PONDREMOS TODOS LOS METODOS DE 
        //LA PAGINA
        cambiarSaludo() {
            this.saludo = "He cambiado!???!??!!";
        }
    },
    data() {
        return {
            saludo: "Hola Hooks!!!",
        }
    }, mounted(){
        console.log("Componente montado");
    }, created() {
        console.log("Componente creado");
    }, destroyed() {
        console.log("Componente eliminado");
    }, updated() {
        console.log("Dibujo modificado en TEMPLATE");
    }
}
</script>