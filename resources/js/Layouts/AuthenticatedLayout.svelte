<script>
    import { Link, page } from "@inertiajs/svelte";

    import NavLink from "../Components/NavLink.svelte";
    import Dropdown from "../Components/Dropdown.svelte";
    import DropdownLink from "../Components/DropdownLink.svelte";
    import ApplicationLogo from "../Components/ApplicationLogo.svelte";
    import ResponsiveNavLink from "../Components/ResponsiveNavLink.svelte";

    import { changeTheme } from "../colorThemeVer";
    import ProfilePicture from "@/Components/ProfilePicture.svelte";

    import userPict from "../../../public/assets/imgs/user-octagon.png";
    import SideBarLink from "@/Components/SideBarLink.svelte";

    let showingNavigationDropdown = false;

    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
    };

    const currentDate = new Intl.DateTimeFormat("en-US", options)
        .format(Date.now())
        .split(" ");
</script>

<div class="bg-Neutral/20">
    <div class="min-h-screen bg-gray-100">
        <nav class="bg-white">
            <!-- Primary Navigation Menu -->
            <div class="w-full px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between h-fit">
                    <div class="flex">
                        <!-- Logo -->
                        <div class="shrink-0 flex">
                            <div class="shrink-0 flex items-center">
                                <Link href={route("dashboard")}>
                                    <ApplicationLogo
                                        classes="block h-11 w-12 fill-current text-gray-800"
                                    />
                                </Link>
                                <div class="ml-2">
                                    <span
                                        class="flex flex-col justify-center shrink-0 text-[#685E5E] not-italic font-normal leading-[normal]"
                                        >Kantin</span
                                    >
                                    <span
                                        class="flex flex-col justify-center shrink-0 text-[#685E5E] text-lg not-italic font-normal leading-[normal]"
                                        >Polinema</span
                                    >
                                </div>
                            </div>
                        </div>

                        <!-- Navigation Links -->
                        <!-- <div
                            class="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex"
                        > -->
                        <!-- TODO: work on favicon -->
                        <!-- <NavLink
                                href={route("dashboard")}
                                active={route().current("dashboard")}
                            >
                                Dashboard
                            </NavLink>
                        </div> -->
                        {#if $$slots.header}
                            <header class="bg-white ml-20">
                                <div
                                    class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8"
                                >
                                    <span class="w-32 h-[1.125rem] shrink-0">
                                        {`${currentDate[1].replace(",", "")} ${
                                            currentDate[0]
                                        } ${currentDate[2]}`}
                                    </span>
                                    <slot name="header" />
                                </div>
                            </header>
                        {/if}
                    </div>

                    <div class="hidden sm:flex sm:items-center sm:ml-6">
                        <!-- Settings Dropdown -->
                        <div class="ml-3 relative">
                            <Dropdown align="right" width="48">
                                <svelte:fragment slot="trigger">
                                    <span
                                        class="flex rounded-md items-center border border-Neutral/40 border-solid p-2"
                                    >
                                        <ProfilePicture
                                            classes="w-6 h-6 shrink-0 rounded-full"
                                            imgURL={userPict}
                                        />
                                        <button
                                            type="button"
                                            class="inline-flex items-center px-3 py-2 text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                        >
                                            {$page.props.auth.user.name}

                                            <svg
                                                class="ml-2 -mr-0.5 h-4 w-4"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                    clip-rule="evenodd"
                                                />
                                            </svg>
                                        </button>
                                    </span>
                                </svelte:fragment>

                                <svelte:fragment slot="content">
                                    <!-- content here -->
                                    <DropdownLink href={route("profile.edit")}>
                                        Profile
                                    </DropdownLink>
                                    <DropdownLink
                                        href={route("logout")}
                                        method="post"
                                        as="button"
                                    >
                                        Log Out
                                    </DropdownLink>
                                </svelte:fragment>
                            </Dropdown>
                        </div>
                    </div>

                    <!-- Hamburger -->
                    <div class="-mr-2 flex items-center sm:hidden">
                        <button
                            on:click={() => {
                                showingNavigationDropdown =
                                    !showingNavigationDropdown;
                            }}
                            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                        >
                            <svg
                                class="h-6 w-6"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    class={showingNavigationDropdown
                                        ? "hidden"
                                        : "inline-flex"}
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                                <path
                                    class={showingNavigationDropdown
                                        ? "hidden"
                                        : "inline-flex"}
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <!-- Responsive Navigation Menu -->
            <div
                class="{showingNavigationDropdown
                    ? 'block'
                    : 'hidden'} sm:hidden"
            >
                <div class="pt-2 pb-3 space-y-1">
                    <ResponsiveNavLink
                        href={route("dashboard")}
                        active={route().current("dashboard")}
                    >
                        Dashboard
                    </ResponsiveNavLink>
                </div>

                <!-- Responsive Settings Options -->
                <div class="pt-4 pb-1 border-t border-gray-200">
                    <div class="px-4">
                        <div class="font-medium text-base text-gray-800">
                            {$page.props.auth.user.name}
                        </div>
                        <div class="font-medium text-sm text-gray-500">
                            {$page.props.auth.user.email}
                        </div>
                    </div>

                    <div class="mt-3 space-y-1">
                        <ResponsiveNavLink href={route("profile.edit")}>
                            Profile
                        </ResponsiveNavLink>
                        <ResponsiveNavLink
                            href={route("logout")}
                            method="post"
                            as="button"
                        >
                            Log Out
                        </ResponsiveNavLink>
                    </div>
                </div>
            </div>
        </nav>
        <aside
            class="w-[14.9375rem] h-[56.9375rem] fixed items-start shrink-0 border-r-[color:var(--Neutral-20,#F6F6F6)] px-5 py-6 border-r border-solid bg-Neutral/20"
        >
            <SideBarLink
                href={route("dashboard")}
                active={route().current("dashboard")}
                cls="group"
            >
                <svg
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-7 h-7 {route().current('dashboard')
                        ? 'fill-Primary-Main'
                        : 'fill-Neutral/70 group-hover:fill-Neutral/80'}"
                >
                    <path
                        d="M9.99992 10.2083C9.63325 10.2083 9.26659 10.1167 8.93325 9.94166L3.50825 7.01666C3.01659 6.74999 2.70825 6.22499 2.70825 5.64166C2.70825 5.05832 3.01659 4.53332 3.50825 4.26666L8.93325 1.34166C9.59992 0.983323 10.3999 0.983323 11.0583 1.34166L16.4833 4.26666C16.9749 4.53332 17.2833 5.05832 17.2833 5.64166C17.2833 6.22499 16.9749 6.74999 16.4833 7.01666L11.0583 9.94166C10.7333 10.125 10.3666 10.2083 9.99992 10.2083ZM9.99992 2.31666C9.84159 2.31666 9.67492 2.35832 9.52492 2.44166L4.10825 5.35832C3.96659 5.43332 3.95825 5.59166 3.95825 5.64166C3.95825 5.69166 3.96659 5.84999 4.10825 5.91666L9.53325 8.84166C9.83325 8.99999 10.1749 8.99999 10.4749 8.84166L15.8999 5.91666C16.0333 5.84166 16.0499 5.68332 16.0499 5.64166C16.0499 5.59166 16.0416 5.43332 15.8999 5.36666L10.4749 2.44166C10.3249 2.35832 10.1583 2.31666 9.99992 2.31666Z"
                    />
                    <path
                        d="M8.15008 18.9333C7.91675 18.9333 7.67508 18.875 7.45842 18.7667L2.40841 16.25C1.56675 15.825 1.04175 14.975 1.04175 14.0333V9.26667C1.04175 8.725 1.31675 8.23333 1.77508 7.95C2.24175 7.66667 2.80008 7.64167 3.28341 7.88333L8.33342 10.4C9.17508 10.825 9.70008 11.6667 9.70008 12.6167V17.3833C9.70008 17.925 9.42508 18.4167 8.96675 18.7C8.71675 18.8583 8.43341 18.9333 8.15008 18.9333ZM2.59175 8.96667C2.52508 8.96667 2.46675 8.99167 2.43341 9.00833C2.38341 9.04167 2.29175 9.11667 2.29175 9.26667V14.0333C2.29175 14.5 2.55008 14.925 2.96675 15.1333L8.00841 17.6583C8.14175 17.725 8.25008 17.675 8.30008 17.65C8.35008 17.6167 8.44175 17.5417 8.44175 17.3917V12.625C8.44175 12.1583 8.18341 11.7333 7.76675 11.525L2.72508 9C2.67508 8.975 2.63341 8.96667 2.59175 8.96667Z"
                    />
                    <path
                        d="M11.85 18.9333C11.5667 18.9333 11.2834 18.8583 11.0334 18.7C10.575 18.4167 10.3 17.925 10.3 17.3833V12.6167C10.3 11.675 10.825 10.825 11.6667 10.4L16.7084 7.875C17.1917 7.63334 17.7584 7.65834 18.2167 7.94167C18.675 8.225 18.95 8.71667 18.95 9.25834V14.025C18.95 14.9667 18.425 15.8167 17.5834 16.2417L12.5417 18.7667C12.325 18.8833 12.0834 18.9333 11.85 18.9333ZM17.4084 8.96667C17.3667 8.96667 17.325 8.975 17.275 9L12.2334 11.525C11.8167 11.7333 11.5584 12.15 11.5584 12.625V17.3917C11.5584 17.5417 11.65 17.6167 11.7 17.65C11.75 17.6833 11.8584 17.725 11.9917 17.6583L17.0334 15.1333C17.45 14.925 17.7084 14.5 17.7084 14.0333V9.26667C17.7084 9.11667 17.6167 9.04167 17.5667 9.00834C17.5334 8.99167 17.475 8.96667 17.4084 8.96667Z"
                    />
                </svg>
                <span
                    class="text-xl
                {route().current('dashboard')
                        ? 'text-Primary-Main'
                        : 'text-Neutral/70 group-hover:text-Neutral/80'}"
                >
                    Dashboard
                </span>
            </SideBarLink>
            <SideBarLink
                href={route("karyawan")}
                active={route().current("karyawan")}
                cls="mt-3 group"
            >
                <svg
                    class="w-7 h-7 {route().current('karyawan')
                        ? 'fill-Primary-Main'
                        : 'fill-Neutral/70 group-hover:fill-Neutral/80'}"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M7.63289 9.68332C7.60789 9.68332 7.59123 9.68332 7.56623 9.68332C7.52456 9.67499 7.46623 9.67499 7.41623 9.68332C4.99956 9.60832 3.17456 7.70832 3.17456 5.36666C3.17456 2.98332 5.11623 1.04166 7.49956 1.04166C9.88289 1.04166 11.8246 2.98332 11.8246 5.36666C11.8162 7.70832 9.98289 9.60832 7.65789 9.68332C7.64956 9.68332 7.64123 9.68332 7.63289 9.68332ZM7.49956 2.29166C5.80789 2.29166 4.42456 3.67499 4.42456 5.36666C4.42456 7.03332 5.72456 8.37499 7.38289 8.43332C7.43289 8.42499 7.54123 8.42499 7.64956 8.43332C9.28289 8.35832 10.5662 7.01666 10.5746 5.36666C10.5746 3.67499 9.19123 2.29166 7.49956 2.29166Z"
                    />
                    <path
                        d="M13.783 9.79168C13.758 9.79168 13.733 9.79168 13.708 9.78334C13.3663 9.81668 13.0163 9.57501 12.983 9.23334C12.9496 8.89168 13.158 8.58334 13.4996 8.54168C13.5996 8.53334 13.708 8.53334 13.7996 8.53334C15.0163 8.46668 15.9663 7.46668 15.9663 6.24168C15.9663 4.97501 14.9413 3.95001 13.6746 3.95001C13.333 3.95834 13.0496 3.67501 13.0496 3.33334C13.0496 2.99168 13.333 2.70834 13.6746 2.70834C15.6246 2.70834 17.2163 4.30001 17.2163 6.25001C17.2163 8.16668 15.7163 9.71668 13.808 9.79168C13.7996 9.79168 13.7913 9.79168 13.783 9.79168Z"
                    />
                    <path
                        d="M7.64134 18.7917C6.00801 18.7917 4.36634 18.375 3.12467 17.5417C1.96634 16.775 1.33301 15.725 1.33301 14.5833C1.33301 13.4417 1.96634 12.3833 3.12467 11.6083C5.62467 9.95001 9.67467 9.95001 12.158 11.6083C13.308 12.375 13.9497 13.425 13.9497 14.5667C13.9497 15.7083 13.3163 16.7667 12.158 17.5417C10.908 18.375 9.27467 18.7917 7.64134 18.7917ZM3.81634 12.6583C3.01634 13.1917 2.58301 13.875 2.58301 14.5917C2.58301 15.3 3.02467 15.9833 3.81634 16.5083C5.89134 17.9 9.39134 17.9 11.4663 16.5083C12.2663 15.975 12.6997 15.2917 12.6997 14.575C12.6997 13.8667 12.258 13.1833 11.4663 12.6583C9.39134 11.275 5.89134 11.275 3.81634 12.6583Z"
                    />
                    <path
                        d="M15.283 17.2917C14.9913 17.2917 14.733 17.0917 14.6746 16.7917C14.608 16.45 14.8246 16.125 15.158 16.05C15.683 15.9417 16.1663 15.7333 16.5413 15.4417C17.0163 15.0833 17.2746 14.6333 17.2746 14.1583C17.2746 13.6833 17.0163 13.2333 16.5496 12.8833C16.183 12.6 15.7246 12.4 15.183 12.275C14.8496 12.2 14.633 11.8667 14.708 11.525C14.783 11.1917 15.1163 10.975 15.458 11.05C16.1746 11.2083 16.7996 11.4917 17.308 11.8833C18.083 12.4667 18.5246 13.2917 18.5246 14.1583C18.5246 15.025 18.0746 15.85 17.2996 16.4417C16.783 16.8417 16.133 17.1333 15.4163 17.275C15.3663 17.2917 15.3246 17.2917 15.283 17.2917Z"
                    />
                </svg>
                <span
                    class="text-xl
                {route().current('karyawan')
                        ? 'text-Primary-Main'
                        : 'text-Neutral/70 group-hover:text-Neutral/80'}"
                >
                    Karyawan
                </span>
            </SideBarLink>
            <SideBarLink
                href={route("karyawan")}
                active={route().current("karyawan")}
                cls="mt-3 group"
            >
                <svg
                    class="w-7 h-7 {route().current('karyawan')
                        ? 'fill-Primary-Main'
                        : 'fill-Neutral/70 group-hover:fill-Neutral/80'}"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M9.99979 11.0833C9.89146 11.0833 9.78312 11.0583 9.68312 11L2.3248 6.74169C2.0248 6.56669 1.92478 6.18333 2.09978 5.88333C2.27478 5.58333 2.64978 5.48331 2.95811 5.65831L9.99979 9.73332L16.9998 5.68334C17.2998 5.50834 17.6831 5.61669 17.8581 5.90835C18.0331 6.20835 17.9248 6.59166 17.6331 6.76666L10.3248 11C10.2165 11.05 10.1081 11.0833 9.99979 11.0833Z"
                    />
                    <path
                        d="M10 18.6334C9.65833 18.6334 9.375 18.35 9.375 18.0084V10.45C9.375 10.1083 9.65833 9.82501 10 9.82501C10.3417 9.82501 10.625 10.1083 10.625 10.45V18.0084C10.625 18.35 10.3417 18.6334 10 18.6334Z"
                    />
                    <path
                        d="M10 18.9583C9.26669 18.9583 8.54168 18.8 7.96668 18.4833L3.51669 16.0084C2.30835 15.3417 1.3667 13.7334 1.3667 12.35V7.64167C1.3667 6.25833 2.30835 4.65837 3.51669 3.98337L7.96668 1.51669C9.10835 0.883354 10.8917 0.883354 12.0334 1.51669L16.4834 3.99166C17.6917 4.65833 18.6333 6.26667 18.6333 7.65001V12.3584C18.6333 13.7417 17.6917 15.3417 16.4834 16.0167L12.0334 18.4833C11.4584 18.8 10.7334 18.9583 10 18.9583ZM10 2.29168C9.47502 2.29168 8.95836 2.40002 8.57503 2.60835L4.12503 5.08333C3.32503 5.53333 2.6167 6.72501 2.6167 7.65001V12.3584C2.6167 13.275 3.32503 14.475 4.12503 14.925L8.57503 17.4C9.33336 17.825 10.6667 17.825 11.425 17.4L15.875 14.925C16.675 14.475 17.3833 13.2834 17.3833 12.3584V7.65001C17.3833 6.73334 16.675 5.53333 15.875 5.08333L11.425 2.60835C11.0417 2.40002 10.525 2.29168 10 2.29168Z"
                    />
                    <path
                        d="M14.1667 11.6584C13.8251 11.6584 13.5417 11.3751 13.5417 11.0334V8.35008L5.94174 3.96674C5.64174 3.79174 5.54172 3.40839 5.71672 3.11673C5.89172 2.81673 6.26674 2.71671 6.56674 2.89171L14.4751 7.45841C14.6667 7.56674 14.7917 7.77505 14.7917 8.00005V11.0501C14.7917 11.3751 14.5084 11.6584 14.1667 11.6584Z"
                    />
                </svg>
                <span
                    class="text-xl
                {route().current('karyawan')
                        ? 'text-Primary-Main'
                        : 'text-Neutral/70 group-hover:text-Neutral/80'}"
                >
                    Data Barang
                </span>
            </SideBarLink>
            <SideBarLink
                href={route("karyawan")}
                active={route().current("karyawan")}
                cls="mt-3 group"
            >
                <svg
                    class="w-7 h-7 {route().current('karyawan')
                        ? 'fill-Primary-Main'
                        : 'fill-Neutral/70 group-hover:fill-Neutral/80'}"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M10.0001 18.9584C9.35008 18.9584 8.71675 18.625 8.28341 18.0417L7.44175 16.9167C7.26675 16.6834 7.03342 16.55 6.78342 16.5334C6.53342 16.525 6.28342 16.6334 6.08342 16.8417L5.60841 16.4167L6.06675 16.8417C4.86675 18.125 3.94175 18.025 3.50008 17.85C3.05008 17.675 2.29175 17.1 2.29175 15.25V5.86669C2.29175 2.16669 3.35841 1.04169 6.85008 1.04169H13.1501C16.6417 1.04169 17.7084 2.16669 17.7084 5.86669V15.25C17.7084 17.0917 16.9501 17.6667 16.5001 17.85C16.0584 18.025 15.1417 18.125 13.9334 16.8417C13.7334 16.625 13.4917 16.5084 13.2251 16.5334C12.9751 16.55 12.7334 16.6834 12.5584 16.9167L11.7167 18.0417C11.2834 18.625 10.6501 18.9584 10.0001 18.9584ZM6.73341 15.275C6.76675 15.275 6.80841 15.275 6.84175 15.275C7.45842 15.3084 8.04175 15.6334 8.43341 16.1584L9.27508 17.2834C9.68341 17.825 10.3084 17.825 10.7167 17.2834L11.5584 16.1584C11.9584 15.6334 12.5334 15.3084 13.1584 15.275C13.7751 15.2417 14.3917 15.5 14.8417 15.9834C15.4751 16.6584 15.8917 16.7417 16.0334 16.6834C16.2334 16.6 16.4501 16.1167 16.4501 15.25V5.86669C16.4501 2.85835 15.9251 2.29169 13.1417 2.29169H6.85008C4.06675 2.29169 3.54175 2.85835 3.54175 5.86669V15.25C3.54175 16.125 3.75841 16.6084 3.95841 16.6834C4.10008 16.7417 4.51675 16.6584 5.15008 15.9834C5.60008 15.525 6.15841 15.275 6.73341 15.275Z"
                    />
                    <path
                        d="M13.3334 6.45831H6.66675C6.32508 6.45831 6.04175 6.17498 6.04175 5.83331C6.04175 5.49165 6.32508 5.20831 6.66675 5.20831H13.3334C13.6751 5.20831 13.9584 5.49165 13.9584 5.83331C13.9584 6.17498 13.6751 6.45831 13.3334 6.45831Z"
                    />
                    <path
                        d="M12.5 9.79169H7.5C7.15833 9.79169 6.875 9.50835 6.875 9.16669C6.875 8.82502 7.15833 8.54169 7.5 8.54169H12.5C12.8417 8.54169 13.125 8.82502 13.125 9.16669C13.125 9.50835 12.8417 9.79169 12.5 9.79169Z"
                    />
                </svg>
                <span
                    class="text-xl
                {route().current('karyawan')
                        ? 'text-Primary-Main'
                        : 'text-Neutral/70 group-hover:text-Neutral/80'}"
                >
                    Laporan Harian
                </span>
            </SideBarLink>
            <SideBarLink
                href={route("karyawan")}
                active={route().current("karyawan")}
                cls="mt-3 group"
            >
                <svg
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-7 h-7 {route().current('karyawan')
                        ? 'fill-Primary-Main'
                        : 'fill-Neutral/70 group-hover:fill-Neutral/80'}"
                >
                    <path
                        d="M14.1667 18.125H5.83341C2.15841 18.125 1.04175 17.0083 1.04175 13.3333V6.66667C1.04175 2.99167 2.15841 1.875 5.83341 1.875H14.1667C17.8417 1.875 18.9584 2.99167 18.9584 6.66667V13.3333C18.9584 17.0083 17.8417 18.125 14.1667 18.125ZM5.83341 3.125C2.85008 3.125 2.29175 3.69167 2.29175 6.66667V13.3333C2.29175 16.3083 2.85008 16.875 5.83341 16.875H14.1667C17.1501 16.875 17.7084 16.3083 17.7084 13.3333V6.66667C17.7084 3.69167 17.1501 3.125 14.1667 3.125H5.83341Z"
                    />
                    <path
                        d="M15.8334 7.29169H11.6667C11.3251 7.29169 11.0417 7.00835 11.0417 6.66669C11.0417 6.32502 11.3251 6.04169 11.6667 6.04169H15.8334C16.1751 6.04169 16.4584 6.32502 16.4584 6.66669C16.4584 7.00835 16.1751 7.29169 15.8334 7.29169Z"
                    />
                    <path
                        d="M15.8333 10.625H12.5C12.1583 10.625 11.875 10.3417 11.875 10C11.875 9.65833 12.1583 9.375 12.5 9.375H15.8333C16.175 9.375 16.4583 9.65833 16.4583 10C16.4583 10.3417 16.175 10.625 15.8333 10.625Z"
                    />
                    <path
                        d="M15.8334 13.9583H14.1667C13.8251 13.9583 13.5417 13.675 13.5417 13.3333C13.5417 12.9916 13.8251 12.7083 14.1667 12.7083H15.8334C16.1751 12.7083 16.4584 12.9916 16.4584 13.3333C16.4584 13.675 16.1751 13.9583 15.8334 13.9583Z"
                    />
                    <path
                        d="M7.08328 10.0333C5.90828 10.0333 4.94995 9.075 4.94995 7.9C4.94995 6.725 5.90828 5.76666 7.08328 5.76666C8.25828 5.76666 9.21662 6.725 9.21662 7.9C9.21662 9.075 8.25828 10.0333 7.08328 10.0333ZM7.08328 7.01666C6.59995 7.01666 6.19995 7.41666 6.19995 7.9C6.19995 8.38333 6.59995 8.78333 7.08328 8.78333C7.56662 8.78333 7.96662 8.38333 7.96662 7.9C7.96662 7.41666 7.56662 7.01666 7.08328 7.01666Z"
                    />
                    <path
                        d="M9.99992 14.2333C9.68326 14.2333 9.40826 13.9917 9.37492 13.6667C9.28326 12.7667 8.55826 12.0417 7.64992 11.9583C7.26659 11.925 6.88326 11.925 6.49992 11.9583C5.59159 12.0417 4.86659 12.7583 4.77492 13.6667C4.74159 14.0083 4.43325 14.2667 4.09159 14.225C3.74992 14.1917 3.49992 13.8833 3.53325 13.5417C3.68325 12.0417 4.87492 10.85 6.38326 10.7167C6.84159 10.675 7.30825 10.675 7.76659 10.7167C9.26659 10.8583 10.4666 12.05 10.6166 13.5417C10.6499 13.8833 10.3999 14.1917 10.0583 14.225C10.0416 14.2333 10.0166 14.2333 9.99992 14.2333Z"
                    />
                </svg>
                <span
                    class="text-xl
                {route().current('karyawan')
                        ? 'text-Primary-Main'
                        : 'text-Neutral/70 group-hover:text-Neutral/80'}"
                >
                    Log Aktivitas
                </span>
            </SideBarLink>
        </aside>

        <!-- Page Content -->
        <main class="pl-60 bg-Neutral/40 w-[99%]">
            <slot />
        </main>
    </div>
</div>
