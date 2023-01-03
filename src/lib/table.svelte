<script>
    import { onMount } from "svelte";

    export let rows, heading;
    let header;
    console.log(rows);

    function toTitle(value) {
        return value.charAt(0).toUpperCase() + value.slice(1);
    }
    onMount(() => {
        const ele = document.getElementsByTagName("header")[0];
        header.style.top = `${ele.getBoundingClientRect().bottom}px`;
    });
</script>

{#if rows}
    <div bind:this={header} id="heading">{heading}</div>
    <table>
        {#each rows as row, i}
            {#if i == 0}
                <tr id="header">
                    <th>No.</th>
                    {#each Object.entries(row) as [key, value]}
                        <th>{toTitle(key)}</th>
                    {/each}
                </tr>
            {/if}
            <tr id="trow">
                <td>{i + 1}</td>
                {#each Object.entries(row) as [key, value]}
                    <td>{value}</td>
                {/each}
            </tr>
        {/each}
    </table>
{:else}
    <div bind:this={header} id="heading">{heading}</div>
{/if}

<style>
    #heading {
        width: fit-content;
        padding: 30px;
        font-size: 50px;
        border-radius: 50px;
        box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
        font-family: "Courier New", Courier, monospace;
        margin: 100px auto 40px auto;
        position: sticky;
        z-index: 1;
        background-color: white;
    }
    table {
        /* border: 1px solid black; */
        box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
        border-radius: 10px;
        min-width: 90%;
        margin-left: auto;
        margin-right: auto;
        margin-top: 20px;
        margin-bottom: 50px;
        overflow: hidden;
    }
    th {
        padding: 10px;
        border-right: 2px solid rgba(0, 0, 0, 0.075);
        font-family: "Courier New", Courier, monospace;
        font-weight: 100;
        font-size: 20px;
    }
    td {
        font-weight: 300;
        padding: 15px;
        text-align: center;
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        border-right: 2px solid rgba(0, 0, 0, 0.034);
    }
</style>
