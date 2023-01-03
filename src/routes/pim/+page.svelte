<script>
    import Table from "$lib/table.svelte";
    import { scale, fly } from "svelte/transition";

    export let form, data;
    console.log(data);

    let id = "p00000001";
    $: {
        if (data && data.rows.length > 0) {
            id = `${data.rows.length + 1}`;
            id=`p${'00000000'.slice(id.length)}${id}`;
        }
    }
</script>
<svelte:head>
    <title>Patients | HMS</title>
</svelte:head>

{#if form?.success}
    <div id="success">Patient added/modified successfully !</div>
{:else if form}
    <div id="success">Failed to add patient !</div>
{/if}

<form in:fly={{ x: -500 }} method="post">
    <h2 class="heading">Add/Modify patient</h2>
    <div class="input">
        <label for="patient-name">Name:</label>
        <input required type="text" id="patient-name" name="patient_name" />
    </div>
    <div class="input">
        <label for="patient-id">ID:</label>
        <input
            required
            type="text"
            id="patient-id"
            name="patient_id"
            value={id}
        />
    </div>
    <div class="input">
        <label for="patient-dob">Date of Birth:</label>
        <input required type="date" id="patient-dob" name="patient_dob" />
    </div>
    <div class="input">
        <label for="patient-phone">Phone:</label>
        <input required type="text" id="patient-phone" name="patient_phone" />
    </div>
    <div class="input">
        <label for="patient-email">Email:</label>
        <input
            required
            type="email"
            id="patient-email"
            name="patient_email"
        />
    </div>
    <div class="input">
        <label for="patient-address">Address:</label>
        <textarea required id="patient-address" name="patient_address" />
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
        heading="Patients List"
    />
{:else}
    <Table heading="No Patients, New Hospital, Duh?!" />
{/if}

<style>
</style>
