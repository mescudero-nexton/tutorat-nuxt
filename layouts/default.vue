<template>
  <header class="fixed top-0 w-full bg-zinc-300 py-4">
    <div class="container flex items-center gap-x-32">
      <p class="font-bold text-2xl">
        My App
      </p>
      <nav>
        <ul class="flex items-center gap-x-4">
          <li class="hover:scale-110 transition">
            <NuxtLink to="/">
              Home
            </NuxtLink>
          </li>
          <li class="hover:scale-110 transition">
            <NuxtLink to="/about-me">
              About Me
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
  <main class="container mt-16 py-6 min-h-[calc(100vh_-_120px)]">
    <slot />
  </main>
  <footer>
    <p class="w-full text-center py-4 bg-zinc-800 text-white">
      &copy; {{ new Date().getFullYear() }}
    </p>
  </footer>
</template>