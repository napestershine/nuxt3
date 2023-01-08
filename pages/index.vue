<template>
  <main class="container">
    <Recipies />
    <div class="section-2">
      <h3>Get my secrets to Great vegan recipes</h3>
      <p>Sign up for my free newsletter</p>
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Name</label>
          <input
            id="exampleInputName"
            type="text"
            class="form-control"
            aria-describedby="nameHelp"
          >
        </div>
        <div class="mb-3">
          <label
            for="exampleInputEmail1"
            class="form-label"
          >Email Address</label>
          <input
            id="exampleInputEmail1"
            type="email"
            class="form-control"
            aria-describedby="emailHelp"
          >
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>

        <button type="submit" class="btn btn-primary">
          Sign up
        </button>
      </form>
    </div>
    <div class="section-3">
      <h2>Latest Recipies</h2>
      <p>
        Get the latest and new vegan recipes together with recently updated
        existing recipes.
      </p>
      <div v-for="n in 2" class="row justify-content-evenly">
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
      </div>
    </div>
    <div class="section-4">
      <div class="card mb-6">
        <div class="row g-0">
          <div class="col-md-6">
            <img
              src="https://picsum.photos/600/340"
              class="img-fluid rounded-start"
              alt="..."
            >
          </div>
          <div class="col-md-6">
            <div class="card-body">
              <h5 class="card-title">
                Card title
              </h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section-5">
      <div
        class="btn-group"
        role="group"
        aria-label="Basic mixed styles example"
      >
        <button type="button" class="btn btn-danger">
          Left
        </button>
        <button type="button" class="btn btn-warning">
          Middle
        </button>
        <button type="button" class="btn btn-success">
          Right
        </button>
      </div>
    </div>
    <div class="section-6">
      <h2>Popular categories</h2>
      <p>
        Browse through our popular categories to find the vegan recipes you
        want.
      </p>
      <div class="row row-cols-1 row-cols-md-4 g-4">
        <div v-for="n in 4" class="col">
          <div class="card">
            <img
              src="https://picsum.photos/140"
              class="card-img-top"
              alt="..."
            >
            <div class="card-body">
              <h5 class="card-title">
                Card title
              </h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section-7">
      <h2>Breakfast Recipes</h2>
      <p>
        Find some popular Indian breakfast recipes that are both a comfort food
        and favored by many of us.
      </p>
      <div v-for="n in 2" class="row row-cols-1 row-cols-md-4 g-4">
        <div v-for="n in 4" class="col">
          <div class="card">
            <img
              src="https://picsum.photos/140"
              class="card-img-top"
              alt="..."
            >
            <div class="card-body">
              <h5 class="card-title">
                Card title
              </h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section-8">
      <div class="card mb-6">
        <div class="row g-0">
          <div class="col-md-6">
            <img
              src="https://picsum.photos/600/340"
              class="img-fluid rounded-start"
              alt="..."
            >
          </div>
          <div class="col-md-6">
            <div class="card-body">
              <h5 class="card-title">
                Card title
              </h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section-9">
      <h2>Paneer Recipes</h2>
      <p>
        Find some popular Indian breakfast recipes that are both a comfort food
        and favored by many of us.
      </p>
      <div v-for="n in 2" class="row row-cols-1 row-cols-md-4 g-4">
        <div v-for="n in 4" class="col">
          <div class="card">
            <img
              src="https://picsum.photos/140"
              class="card-img-top"
              alt="..."
            >
            <div class="card-body">
              <h5 class="card-title">
                Card title
              </h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section-10">
      <h2>Lentils and Legumes</h2>
      <p>
        Find some popular Indian breakfast recipes that are both a comfort food
        and favored by many of us.
      </p>
      <div v-for="n in 2" class="row row-cols-1 row-cols-md-4 g-4">
        <div v-for="n in 4" class="col">
          <div class="card">
            <img
              src="https://picsum.photos/140"
              class="card-img-top"
              alt="..."
            >
            <div class="card-body">
              <h5 class="card-title">
                Card title
              </h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section-11">
      <h2>Street Food</h2>
      <p>
        Find some popular Indian breakfast recipes that are both a comfort food
        and favored by many of us.
      </p>
      <div v-for="n in 2" class="row row-cols-1 row-cols-md-4 g-4">
        <div v-for="n in 4" class="col">
          <div class="card">
            <img
              src="https://picsum.photos/140"
              class="card-img-top"
              alt="..."
            >
            <div class="card-body">
              <h5 class="card-title">
                Card title
              </h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section-12">
      <h2>Rice Recipies</h2>
      <p>
        Find some popular Indian breakfast recipes that are both a comfort food
        and favored by many of us.
      </p>
      <div v-for="n in 2" class="row row-cols-1 row-cols-md-4 g-4">
        <div v-for="n in 4" class="col">
          <div class="card">
            <img
              src="https://picsum.photos/140"
              class="card-img-top"
              alt="..."
            >
            <div class="card-body">
              <h5 class="card-title">
                Card title
              </h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section-13">
      <h2>Eggless Cakes & Desserts</h2>
      <p>
        Find some popular Indian breakfast recipes that are both a comfort food
        and favored by many of us.
      </p>
      <div v-for="n in 2" class="row row-cols-1 row-cols-md-4 g-4">
        <div v-for="n in 4" class="col">
          <div class="card">
            <img
              src="https://picsum.photos/140"
              class="card-img-top"
              alt="..."
            >
            <div class="card-body">
              <h5 class="card-title">
                Card title
              </h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section-14">
      <h2>Indian Sweets</h2>
      <p>
        Find some popular Indian breakfast recipes that are both a comfort food
        and favored by many of us.
      </p>
      <div v-for="n in 2" class="row row-cols-1 row-cols-md-4 g-4">
        <div v-for="n in 4" class="col">
          <div class="card">
            <img
              src="https://picsum.photos/140"
              class="card-img-top"
              alt="..."
            >
            <div class="card-body">
              <h5 class="card-title">
                Card title
              </h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section-15">
      <h2>Sides & Condiments</h2>
      <p>
        Find some popular Indian breakfast recipes that are both a comfort food
        and favored by many of us.
      </p>
      <div v-for="n in 2" class="row row-cols-1 row-cols-md-4 g-4">
        <div v-for="n in 4" class="col">
          <div class="card">
            <img
              src="https://picsum.photos/140"
              class="card-img-top"
              alt="..."
            >
            <div class="card-body">
              <h5 class="card-title">
                Card title
              </h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section-16">
      <h2>Soup Recipes</h2>
      <p>
        Find some popular Indian breakfast recipes that are both a comfort food
        and favored by many of us.
      </p>
      <div v-for="n in 2" class="row row-cols-1 row-cols-md-4 g-4">
        <div v-for="n in 4" class="col">
          <div class="card">
            <img
              src="https://picsum.photos/140"
              class="card-img-top"
              alt="..."
            >
            <div class="card-body">
              <h5 class="card-title">
                Card title
              </h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section-17">
      <h2>From World Cuisine</h2>
      <p>
        Find some popular Indian breakfast recipes that are both a comfort food
        and favored by many of us.
      </p>
      <div v-for="n in 2" class="row row-cols-1 row-cols-md-4 g-4">
        <div v-for="n in 4" class="col">
          <div class="card">
            <img
              src="https://picsum.photos/140"
              class="card-img-top"
              alt="..."
            >
            <div class="card-body">
              <h5 class="card-title">
                Card title
              </h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section-18">
      <h2>Curry Recipes</h2>
      <p>
        Find some popular Indian breakfast recipes that are both a comfort food
        and favored by many of us.
      </p>
      <div v-for="n in 2" class="row row-cols-1 row-cols-md-4 g-4">
        <div v-for="n in 4" class="col">
          <div class="card">
            <img
              src="https://picsum.photos/140"
              class="card-img-top"
              alt="..."
            >
            <div class="card-body">
              <h5 class="card-title">
                Card title
              </h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section-19">
      <h2>Dry Vegetable Recipes</h2>
      <p>
        Find some popular Indian breakfast recipes that are both a comfort food
        and favored by many of us.
      </p>
      <div v-for="n in 2" class="row row-cols-1 row-cols-md-4 g-4">
        <div v-for="n in 4" class="col">
          <div class="card">
            <img
              src="https://picsum.photos/140"
              class="card-img-top"
              alt="..."
            >
            <div class="card-body">
              <h5 class="card-title">
                Card title
              </h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section-20">
      <h2>Pasta Recipes</h2>
      <p>
        Find some popular Indian breakfast recipes that are both a comfort food
        and favored by many of us.
      </p>
      <div v-for="n in 2" class="row row-cols-1 row-cols-md-4 g-4">
        <div v-for="n in 4" class="col">
          <div class="card">
            <img
              src="https://picsum.photos/140"
              class="card-img-top"
              alt="..."
            >
            <div class="card-body">
              <h5 class="card-title">
                Card title
              </h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section-21">
      <h2>Popular Video Recipes</h2>
      <p>
        Find some popular Indian breakfast recipes that are both a comfort food
        and favored by many of us.
      </p>
      <div v-for="n in 2" class="row row-cols-1 row-cols-md-4 g-4">
        <div v-for="n in 4" class="col">
          <div class="card">
            <img
              src="https://picsum.photos/140"
              class="card-img-top"
              alt="..."
            >
            <div class="card-body">
              <h5 class="card-title">
                Card title
              </h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
