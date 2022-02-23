<script>
    export let center = false;
</script>

<div class="w-full flex items-center px-2">
    <div hidden={!center} class="flex-1 h-[1.6px] bg-secondary mr-12"/>
        <slot></slot>
    <div class="flex-1 h-[1.6px] bg-secondary ml-12"/>
</div>