<script>
  import { onMount } from "svelte";

  let blurHeaderBg = false;

  onMount(() => {
    function handleScroll() {
      blurHeaderBg = window.scrollY > 0;
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
</script>

<header
  class="flex p-2 justify-center items-center text-center sticky inset-x-0 top-0 {blurHeaderBg
    ? 'backdrop-filter backdrop-blur-sm'
    : ''} bg-emerald-700 bg-opacity-50 z-50"
>
  <nav class="flex">
    <ul class="flex list-none text-white">
      <li class="px-2 sm:px-4">
        <a href="#sobre" class="hover:text-emerald-300 sm:text-2xl">Sobre</a>
      </li>
      <li class="px-2 sm:px-4">
        <a href="#projetos" class="hover:text-emerald-300 sm:text-2xl"
          >Projetos</a
        >
      </li>
      <li class="px-2 sm:px-4">
        <a href="#habilidades" class="hover:text-emerald-300 sm:text-2xl"
          >Habilidades</a
        >
      </li>
      <li class="px-2 sm:px-4">
        <a href="#contato" class="hover:text-emerald-300 sm:text-2xl">Contato</a
        >
      </li>
    </ul>
  </nav>
</header>
