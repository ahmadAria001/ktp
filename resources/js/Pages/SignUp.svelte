<script>
    import GuestLayout from "../Layouts/GuestLayout.svelte";

    import { Link, useForm } from "@inertiajs/svelte";
    import InputLabel from "../Components/InputLabel.svelte";
    import TextInput from "../Components/TextInput.svelte";
    import InputError from "../Components/InputError.svelte";
    import PrimaryButton from "../Components/PrimaryButton.svelte";
    import Checkbox from "../Components/Checkbox.svelte";
    import ApplicationLogo from "../Components/ApplicationLogo.svelte";
    import { checkTheme } from "../colorThemeVer";

    export let status;

    const form = useForm({
        username: "",
        email: "",
        password: "",
        remember: false,
    });

    const submit = () => {
        $form.post(route("home"), {
            onFinish: () => $form.reset("password"),
        });
    };

    checkTheme();
</script>

<svelte:head>
    <title>Sign Up</title>
</svelte:head>

<GuestLayout>
    <div class="w-full grid grid-cols-3 grid-flow-row mb-20">
        <div class="w-full col-span-3 flex justify-center">
            <ApplicationLogo
                classes="w-[9rem] h-[9rem] fill-current text-Neutral/20 dark:text-Neutral/20 p-3 dark:rounded-xl no-repeat"
            />
        </div>
        <h3 class="w-full col-span-3 text-center font-sansJKTPlus">
            <span
                class="text-[#1B1B1B] text-[2rem] not-italic font-semibold leading-[normal] dark:text-[#E3E3E3]"
            >
                Kantin Polinema
            </span>
        </h3>
    </div>
    {#if status}
        <div class="mb-4 font-medium text-sm text-green-600 dark:text-white">
            {status}
        </div>
    {/if}

    <form on:submit|preventDefault={submit}>
        <div>
            <InputLabel
                for="username"
                value="Username"
                classes="dark:text-Neutral/20"
            />

            <TextInput
                id="username"
                type="text"
                bind:value={$form.username}
                required
                autofocus
                autocomplete="username"
                placeholder="Username"
                classes="dark:text-Neutral/80 dark:bg-Neutral/20 dark:border-transparent text-sm border-none font-sansJKTPlus bg-[#F6F6F6]"
            />

            <InputError message={$form.errors.username} />
        </div>
        <div class="mt-4">
            <InputLabel
                for="email"
                value="Email"
                classes="dark:text-Neutral/20"
            />

            <TextInput
                id="email"
                type="email"
                bind:value={$form.email}
                required
                autofocus
                autocomplete="username"
                placeholder="Email"
                classes="dark:text-Neutral/80 dark:bg-Neutral/20 dark:border-transparent text-sm border-none font-sansJKTPlus bg-[#F6F6F6]"
            />

            <InputError message={$form.errors.email} />
        </div>

        <div class="mt-4">
            <InputLabel
                for="password"
                value="Password"
                classes="dark:text-Neutral/20"
            />

            <TextInput
                id="password"
                type="password"
                bind:value={$form.password}
                required
                autocomplete="current-password"
                placeholder="Password"
                classes="dark:text-Neutral/80 dark:bg-Neutral/20 dark:border-transparent text-sm border-none font-sansJKTPlus bg-[#F6F6F6]"
            />

            <InputError message={$form.errors.password} />
        </div>

        <div class="mt-16">
            <PrimaryButton
                disabled={$form.processing}
                classes="w-full bg-[#5E51D9] h-10 rounded-full text-center border-none transition-all duration-200 ease-in hover:bg-[#756ae6]"
            >
                <span class="w-full flex justify-center text-Neutral/10">
                    Sign Up
                </span>
            </PrimaryButton>
        </div>
    </form>
</GuestLayout>
