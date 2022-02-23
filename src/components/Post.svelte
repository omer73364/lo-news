<script>
    export let index = 0
</script>

<div class={`w-full sm:h-60 flex flex-col ${index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'} p-4 my-4`}>
    
    <div class="h-52 sm:h-auto sm:flex-1 relative cursor-pointer">
        <img src={index % 2 === 0 ? "./imgs/1.jpg" : "./imgs/2.jpg"} class="w-full h-full z-10 relative object-cover object-top" alt="post img"/>
        <div class="w-full h-full absolute border-[1.66px] border-text-primary top-2 left-2 z-0"/>
    </div>

    <div class="sm:w-6 h-6 sm:h-0 w-0"/>
    
    <div class="flex-1 flex flex-col items-center justify-center">
        <h2 class="text-left text-text-primary uppercase relative px-4 cursor-pointer">
            Lorem ipsum dolor sit amet <span class="bg-highlight-yellow">consectetur.</span>
            <div class="absolute left-0 top-1 w-1 h-6 bg-highlight-pink mr-3"/>
        </h2>
        <div class="w-full h-[1.6px] bg-secondary my-4"/>
        <div class="px-4 flex w-full">
            <img src={index % 2 === 0 ? "./imgs/profile1.webp" : "./imgs/profile2.jpg"} class="w-12 h-12 mr-4 cursor-pointer" alt="profile"/>
            <div>
                <h4 class="text-left text-xs text-text-primary  cursor-pointer">Ali Mohammed</h4>
                <h6 class="text-left text-text-secondary mt-3.5">News Author</h6>
            </div>
        </div>
    </div>

</div>

<style>
    h2{
        line-height: 26px;
    }
    h6{
        font-size: 9px;
    }
</style>