<template>
  <div class="container border border-success my-2">
    <header class="mt-3 border-success">
      <nav class="nav nav-tabs border-success container px-3">
        <RouterLink class="btn btn-sm border-bottom-0 rounded-bottom-0 mx-1 border-success text-success"
                    to="/demon-calculator" :key="$route.fullPath">
          Demon calculator
        </RouterLink>
      </nav>
    </header>

    <main class="py-3">
      <RouterView/>
    </main>
  </div>
</template>
