<template>
    <header>
        <nav>
            <NuxtLink to="/">Dojo</NuxtLink>
            <ul>
                <li><NuxtLink to="/products">Products</NuxtLink></li>
                <li><NuxtLink to="/about">About Us</NuxtLink></li>
            </ul>
        </nav>
    </header>

    <main>
        <slot />
    </main>
</template>