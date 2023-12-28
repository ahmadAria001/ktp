<script setup>
    import { Link } from "@inertiajs/svelte";

    export let href = null,
        active = false,
        cls = null;

    const classes = active
        ? `w-full flex flex-col justify-center items-start gap-3 p-4 text-Primary-surface border border-Primary-surface rounded-[0.625rem] border-solid bg-Primary-surface ${cls}`
        : `w-full flex flex-col justify-center items-start gap-3 p-4 text-Neutral/70 rounded-[0.625rem] transition-all duration-200 ease-in hover:text-Neutral/20 hover:bg-Neutral/40 ${cls}`;
</script>

<Link {href} class={classes}>
    <slot />
</Link>
