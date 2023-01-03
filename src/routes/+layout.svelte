<script>
    import { page } from "$app/stores";

    let nav, float;
    $: {
        const path = $page.url.pathname;
        if (nav && float) {
            const ele = nav.querySelector(`a[href='${path}']`);
            float.style.left = `${ele.getBoundingClientRect().left - 20}px`;
            float.style.width = `${ele.getBoundingClientRect().width + 40}px`;
            float.style.visibility = "visible";
        }
    }
</script>

<div id="container">
    <header>
        <div bind:this={nav} id="nav">
            <a href="/">Home</a>
            <a href="/appointment">Appointment Scheduling</a>
            <a href="/pim">Patient Info Management</a>
            <a href="/emr">Medical Records</a>
            <a href="/inventory">Inventory</a>
            <a href="/sim">Staff Info Management</a>
        </div>
        <div bind:this={float} id="float" />
    </header>

    <slot />
    <div style="height: 200px;" />
    <footer>
        <div
            style="opacity:0.4;width: fit-content;margin:10px auto;font-family:'Courier New', Courier, monospace"
        >
            Powered By
        </div>
        <div id="names">
            <span>Bonny</span>
            <span>Basil_Rari</span>
            <span>Basil_Varghese</span>
            <span>Krishnesh</span>
            <span>Devananth</span>
            <span>Dhanya</span>
            <span>Edwin</span>
            <span>Eva</span>
            <span>Eldhose</span>
        </div>
    </footer>
</div>

<style>
    #container {
        position: relative;
        width: 100%;
        min-height: 100vh;
        user-select: none;
    }
    #nav a:hover {
        animation: zoom 0.2s forwards;
    }
    @keyframes zoom {
        0% {
            scale: 1;
        }

        80% {
            scale: 1.1;
        }

        100% {
            scale: 1.07;
        }
    }
    #names {
        display: flex;
        justify-content: space-around;
        margin: 20px 0;
        font-family: "Courier New", Courier, monospace;
        font-size: 14px;
        opacity: 0.6;
    }
    footer {
        width: 100%;
        box-shadow: rgba(17, 12, 46, 0.15) 0px -5px 100px 0px;
        border-radius: 50px 50px 0 0;
        height: 80px;
        position: absolute;
        bottom: 0;
    }
    header {
        position: sticky;
        z-index: 2;
        top: 0;
        background-color: white;
        width: 100%;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        border-radius: 30px;
        margin-bottom: 50px;
        overflow: hidden;
    }
    #float {
        position: absolute;
        height: 100%;
        top: 0%;
        border-radius: 30px;
        box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
        visibility: hidden;
        transition: 0.5s;
    }
    #nav {
        display: flex;
        justify-content: space-between;
        font-size: 20px;
        font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
            "Lucida Sans", Arial, sans-serif;
        height: 100%;
    }
    #nav a {
        all: unset;
        cursor: pointer;
        display: block;
        padding: 20px;
    }
</style>
