<!-- SCRIPT -->
<script setup>
    // Importar onMounted e onUnmounted
    import { onMounted, onUnmounted, watch, ref } from 'vue';
    
    // Importar o vue-router para ter acesso ao parâmetro via rota
    import { useRoute } from 'vue-router';

    // Variável para exibir o carregamento
    let carregamento = ref(true);

    // Vetor contendo os Pokémons
    let vetor = ref([]);

    // Geração - START e FINISH
    let startRef = ref();
    let finishRef = ref();

    // Objeto rota
    const rota = useRoute();  

    // Método onMounted
    onMounted(async () => {
        startRef.value = rota.params.start;
        finishRef.value = rota.params.finish;

        await listarPokemons();
    });

    // Watcher para observar as mudanças no parâmetro
    const watcher = watch([() => rota.params.start, () => rota.params.finish], ([start, finish], [oldStart, oldFinish]) => {
        startRef.value = start;
        finishRef.value = finish;

        listarPokemons();
    });

    // Função para listar os Pokémons
    async function listarPokemons(){
        vetor.value = [];
        carregamento.value = true;

        for(let indice = startRef.value; indice <= finishRef.value; indice++){
            await fetchPokemon(indice);
        }

        carregamento.value = false;
    }

    // Função para fazer a requisição de um Pokémon específico
    async function fetchPokemon(indice){
        let requisicao = await fetch('https://pokeapi.co/api/v2/pokemon/'+indice);
        let pokemon = await requisicao.json();
        vetor.value.push(pokemon);
    }

    // Limpar o watcher ao sair do componente
    onUnmounted(() => {
        watcher();
    });
</script>

<!-- HTML -->
<template>
    <div>
        <div class="carregamento" v-if="carregamento">
            <img src="../complementos/carregamento.gif">
        </div>
        
        <main class="container" v-if="!carregamento">

            <!-- Listagem -->
            <div class="row">
                <div class="col-12 col-sm-6 col-md-4 col-lg-3" v-for="(pokemon, index) in vetor" :key="index">
                    <div class="card" :class="pokemon.types[0].type.name">
                        <img :src="pokemon.sprites.other.home.front_default">
                        <p>{{ pokemon.name }}</p>
                    </div>
                </div>
            </div>

        </main>
    </div>
</template>
