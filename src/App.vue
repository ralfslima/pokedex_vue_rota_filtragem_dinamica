<script setup>
  import { RouterLink, RouterView } from 'vue-router'

// Importação do Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// Importar estilo CSS
import './complementos/estilos.css';
</script>

<template>
  <!-- Cabeçalho -->
  <header>
    <!-- Barra de navegação -->
    <nav class="navbar navbar-expand bg-body-tertiary">
        <div class="container-fluid">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                      <RouterLink class="nav-link" :to="{ name: 'Listagem', params: { start: 1, finish: 151 }}">Geração 01</RouterLink>
                    </li>

                    <li class="nav-item">
                      <RouterLink class="nav-link" :to="{ name: 'Listagem', params: { start: 152, finish: 251 }}">Geração 02</RouterLink>
                    </li>

                    <li class="nav-item">
                      <RouterLink class="nav-link" :to="{ name: 'Listagem', params: { start: 252, finish: 386 }}">Geração 03</RouterLink>
                    </li>
                </ul>

            </div>
        </div>
    </nav>
  </header>

  <!-- Exibição das rotas -->
  <RouterView />
</template>
