<script>
    const links = ['Acadimic','Human & Environment','Sports','Political','Music','Finincial Market','Other']
    const positions = [142,255,390,532]
    let active = links[1]
</script>

<div class="w-full flex items-center">
    
    <div class="flex flex-1 items-center">
        <img src="./icons/search.svg" class="w-24 cursor-pointer" alt="search"/>
        <input class="px-4 placeholder-text-secondary !outline-none text-xs placeholder:uppercase" type="search" placeholder="search.."/>
    </div>
    
    <ul class="flex-1 flex items-center justify-between">
        {#each links as link}
            <li on:click={()=>active=link} class={`${active === link ? 'text-text-primary font-bold' : 'text-text-secondary '} whitespace-nowrap mx-10 hover:text-text-primary duration-150 text-xs cursor-pointer uppercase relative hidden lg:flex items-center justify-center`}>
                <span class="z-10">
                    { link }
                </span>
                
                <div class={`${active === link ? 'opacity-100' : 'opacity-0'} absolute duration-500 w-12 h-2 top-6 hidden lg:flex items-center justify-center z-0`}>
                    <div class="w-2 h-full bg-highlight-pink -skew-x-[20deg] ml-0.5"/>
                    <div class="w-2 h-full bg-highlight-pink -skew-x-[20deg] ml-0.5"/>
                    <div class="w-2 h-full bg-highlight-pink -skew-x-[20deg] ml-0.5"/>
                </div>
                
            </li>
        {/each}
    </ul>
    <div class="lg:px-10 lg:hidden rotate-180 cursor-pointer"><img src="./icons/menu.svg" class="w-6" alt="menu"/></div>


</div>

<style>
    input{
        background: none;
    }
</style>