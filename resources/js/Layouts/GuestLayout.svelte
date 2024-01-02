<script>
    import { Link } from "@inertiajs/svelte";
    import ApplicationLogo from "../Components/ApplicationLogo.svelte";
</script>

<div
    class="min-h-screen flex justify-center flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-Neutral/30 dark:bg-[#181f29]"
>
    <!-- <div>
        <Link href="/">
            <ApplicationLogo
                classes="w-20 h-20 fill-current text-gray-500 dark:text-gray-300 p-3 dark:rounded-xl dark:bg-slate-600"
            />
        </Link>
    </div> -->

    <div
        class="w-full sm:max-w-lg p-10 bg-Neutral/10 shadow-md overflow-hidden sm:rounded-lg dark:bg-[#1F2937] dark:text-white"
    >
        <slot />
    </div>
</div>
