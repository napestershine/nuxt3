<template>
    <div v-for="n in 4" class="card mb-1" style="width: 18rem">
          <img
            src="https://picsum.photos/140"
            class="card-img-top"
            alt="some text"
          >
          <div class="card-img-overlay">
            recipe time
          </div>
          <div class="card-body">
            <p class="card-title">
              Recipe category
            </p>
            <h5>
              <NuxtLink to="#">
                Recipe Title
              </NuxtLink>
            </h5>
          </div>
        </div>
</template>