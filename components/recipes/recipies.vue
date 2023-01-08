<template>
    <div class="section-1">
      <RecipeHeader />
      <div v-for="n in 4" class="row justify-content-evenly">
        <Recipie />
      </div>
    </div>
</template>