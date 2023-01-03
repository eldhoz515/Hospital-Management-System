<script>
    import Table from "$lib/table.svelte";
    import { scale, fly } from "svelte/transition";

    export let form, data;
    console.log(data);
</script>
<svelte:head>
    <title>Inventory | HMS</title>
</svelte:head>
{#if form?.success}
    <div id="success">Item added/modified successfully !</div>
{:else if form}
    <div id="success">Failed to add item !</div>
{/if}

<form in:fly={{ y: 500 }} method="post">
    <h2 class="heading">Add/Modify item</h2>
    <div class="input">
        <label for="item-name">Item Name:</label>
        <input required type="text" id="item-name" name="item_name" />
    </div>
    <div class="input">
        <label for="quantity">Quantity:</label>
        <input required type="number" id="quantity" name="quantity" />
    </div>
    <div class="input">
        <label for="supplier">supplier:</label>
        <input required type="text" id="supplier" name="supplier" />
    </div>
    <div class="input">
        <label for="cost">Cost:</label>
        <input required type="number" id="cost" name="cost" />
    </div>
    <div class="submit">
        <input required type="submit" />
    </div>
</form>

{#if data && data.rows.length > 0}
    <Table rows={data.rows} heading="Inventory Items" />
{:else}
    <Table heading="Empty Inventory !" />
{/if}
