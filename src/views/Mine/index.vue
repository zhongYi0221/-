<template>
    <div id="mine">
        <Header title="我的喵喵"/>
        <div id="content">
            <Login/>
        </div>
        <TabBar/>
    </div>
</template>

<script>
    import Header from "../../components/Header/index.vue";
    import TabBar from "../../components/TabBar/index.vue";
    import Login from "../../components/Login"
    export default {
        name: "Mine",
        components: {
            Header,
            TabBar,
            Login
        },
    }
</script>

<style scoped>

</style>