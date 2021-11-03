<template>
    <div>
        <h1>Tabla multiplicar</h1>
        <label>Introduzca un número</label>
        <input type="text" v-model="numero"/>
        <button v-on:click="mostrarTabla()">
            Mostrar tabla
        </button>
        <hr/>
        <table border="1" style="margin: 0 auto;">
            <thead>
                <tr>
                    <th>OPERACION</th>
                    <th>RESULTADO</th>
                </tr>
            </thead>
            <tbody v-html="datos">{{datos}}</tbody>
        </table>
        <hr/>
    </div>
</template>

<script>
export default {
    name: "TablaMultiplicar",
    methods: {
        mostrarTabla() {
            this.datos = "";
            for (var i = 1; i<= 10; i++){
                var operacion = this.numero * i;
                this.datos += "<tr>";
                this.datos += "<td>" + this.numero + " * " + i + "</td>";
                this.datos += "<td>" + operacion + "</td>";
                this.datos += "</tr>";
            }
        },
    },
    data() {
        return {
            numero: 0,
            datos: "",
        }
    }
}
</script>
