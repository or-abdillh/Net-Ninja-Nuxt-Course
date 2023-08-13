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
    
    <section>
        <h2>Detail Product for {{ $route?.params?.id }}</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi accusamus est labore eligendi ipsum atque exercitationem, provident quae ex omnis!</p>
    </section>
</template>