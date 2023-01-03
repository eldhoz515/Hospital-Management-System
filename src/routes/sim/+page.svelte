<script>
    import Table from "$lib/table.svelte";
    import { scale, fly } from "svelte/transition";

    export let form, data;
    console.log(data);

    let id = "s001";
    $: {
        if (data && data.rows.length > 0) {
            id = `s${data.rows.length < 9 ? "00" : "0"}${data.rows.length + 1}`;
        }
    }
</script>
<svelte:head>
    <title>Staffs | HMS</title>
</svelte:head>

{#if form?.success}
    <div id="success">Staff added/modified successfully !</div>
{:else if form}
    <div id="success">Failed to add staff !</div>
{/if}

<form in:scale method="post">
    <h2 class="heading">Add/Modify staff</h2>
    <div class="input">
        <label for="staff-name">Name:</label>
        <input required type="text" id="staff-name" name="staff_name" />
    </div>
    <div class="input">
        <label for="staff-id">ID:</label>
        <input required type="text" id="staff-id" name="staff_id" value={id} />
    </div>
    <div class="input">
        <label for="department">Dept:</label>
        <input required type="text" id="department" name="department" />
    </div>
    <div class="input">
        <label for="staff-dob">Date of Birth:</label>
        <input required type="date" id="staff-dob" name="staff_dob" />
    </div>
    <div class="input">
        <label for="staff-phone">Phone:</label>
        <input required type="text" id="staff-phone" name="staff_phone" />
    </div>
    <div class="input">
        <label for="staff-email">Email:</label>
        <input
            required
            type="email"
            id="staff-email"
            name="staff_email"
            value="{id}@hms.com"
        />
    </div>
    <div class="input">
        <label for="staff-address">Address:</label>
        <textarea required id="staff-address" name="staff_address" />
    </div>
    <div class="submit">
        <input required type="submit" />
    </div>
</form>

{#if data && data.rows.length > 0}
    <Table
        rows={data.rows.map((value) => {
            value.dob = new Date(value.dob).toLocaleDateString();
            return value;
        })}
        heading="Staffs List"
    />
{:else}
    <Table heading="No Staffs here, recruiting soon :)" />
{/if}
