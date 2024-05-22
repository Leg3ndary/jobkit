<script>
    import "../app.css";
</script>

<nav
    class="flex text-white bg-black py-2 px-4 text-xl items-center justify-center"
>
    <div class="flex gap-5 items-center font-medium max-w-[1360px] w-full">
        <a href="/" class="text-yellow-400 font-black text-2xl mr-auto"
            >JobKit</a
        >
        <a href="/about">About</a>
        <a href="/pricing">Pricing</a>
        <a href="/dashboard">Dashboard</a>
    </div>
</nav>
<slot />
