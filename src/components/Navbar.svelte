<script>
    const links = ['Home','Reviews','Daily News','Features']
    const positions = [157,276,420,570]
    let active = links[2]
</script>

<nav class="w-full flex items-center"><h1 class="text-text-primary font-bold md:text-2xl  pr-6 border-r border-secondary">Lo.News</h1>
    <ul class="flex-1 flex items-center px-4 md:px-12 relative">
        <li class="lg:px-10 cursor-pointer"><img src="./icons/menu.svg" class="w-6" alt="menu"/></li>
        {#each links as link}
            <li on:click={()=>active=link} class={`${active === link ? 'text-text-primary font-bold' : 'text-text-secondary '} hidden lg:block whitespace-nowrap mx-8 z-10 hover:text-text-primary duration-150 text-xs cursor-pointer uppercase`}>
                { link }
            </li>
        {/each}
        <div style:left={positions[links.indexOf(active)] + 'px'} class={`absolute duration-500 w-16 h-full bg-highlight-pink -top-0.5 hidden lg:block z-0`}/>
    </ul>
    <button class="contact uppercase whitespace-nowrap text-text-primary px-3 py-3 bg-primary border-2 shadow border-text-primary duration-100 hover:-translate-x-0.5 hover:-translate-y-0.5 text-xs">
        Contact
    </button>
</nav>
<style>
    @media(max-width: 480px){
        .contact{
            font-size: 8px !important;
        }
    }
</style>