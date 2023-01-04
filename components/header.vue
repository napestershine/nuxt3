<template>
  <div class="container">
    <header class="blog-header lh-1 py-3">
      <div class="row flex-nowrap justify-content-between align-items-center">
        <div class="col-4 pt-1">
          <NuxtLink class="link-secondary" to="#"> Subscribe </NuxtLink>
        </div>
        <div class="col-4 text-center">
          <NuxtLink class="blog-header-logo text-dark" to="/">
            Recipies Archives
          </NuxtLink>
        </div>
        <div class="col-4 d-flex justify-content-end align-items-center">
          <NuxtLink class="link-secondary" to="#" aria-label="Search">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="mx-3"
              role="img"
              viewBox="0 0 24 24"
            >
              <title>Search</title>
              <circle cx="10.5" cy="10.5" r="7.5" />
              <path d="M21 21l-5.2-5.2" />
            </svg>
          </NuxtLink>
          <NuxtLink class="btn btn-sm btn-outline-secondary" to="#"
            >Sign up</NuxtLink
          >
        </div>
      </div>
    </header>

    <div class="nav-scroller py-1 mb-2">
      <nav class="nav d-flex justify-content-between">
        <NuxtLink class="p-2 link-secondary" to="#">World</NuxtLink>
        <NuxtLink class="p-2 link-secondary" to="#">U.S.</NuxtLink>
        <NuxtLink class="p-2 link-secondary" to="#">Technology</NuxtLink>
        <NuxtLink class="p-2 link-secondary" to="#">Design</NuxtLink>
        <NuxtLink class="p-2 link-secondary" to="#">Culture</NuxtLink>
        <NuxtLink class="p-2 link-secondary" to="#">Business</NuxtLink>
        <NuxtLink class="p-2 link-secondary" to="#">Politics</NuxtLink>
        <NuxtLink class="p-2 link-secondary" to="#">Opinion</NuxtLink>
        <NuxtLink class="p-2 link-secondary" to="#">Science</NuxtLink>
        <NuxtLink class="p-2 link-secondary" to="#">Health</NuxtLink>
        <NuxtLink class="p-2 link-secondary" to="#">Style</NuxtLink>
        <NuxtLink class="p-2 link-secondary" to="#">Travel</NuxtLink>
      </nav>
    </div>
  </div>
</template>
