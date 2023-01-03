<script>
    import Table from "$lib/table.svelte";
    import { scale, fly } from "svelte/transition";

    export let form;
    let data;
    let id;
</script>
<svelte:head>
    <title>Medical records | HMS</title>
</svelte:head>

{#if form?.success}
    <div id="success">New medical record added successfully !</div>
{:else if form}
    <div id="success">Failed to add medical record !</div>
{/if}

<form in:scale method="post">
    <div class="input">
        <label for="patient-id">Patient Id:</label>
        <input
            required
            bind:value={id}
            type="text"
            id="patient-id"
            name="patient_id"
        />
    </div>
    <!-- svelte-ignore a11y-click-events-have-key-events -->

    <div
        id="getinfo"
        on:click={() => {
            fetch(`/emr?id=${id}`)
                .then((response) => response.json())
                .then((body) => {
                    data = body;
                    console.log(data);
                })
                .catch(() => {
                    console.log("error");
                });
        }}
    >
        View history
    </div>
    <h2 class="heading" style="margin-top: 50px;">Add medical record</h2>

    <div class="input">
        <label for="diagnosis">Diagnosis:</label>
        <textarea required id="diagnosis" name="diagnosis" />
    </div>
    <div class="input">
        <label for="treatment">Treatment:</label>
        <textarea required id="treatment" name="treatment" />
    </div>
    <div class="input">
        <label for="test-results">Test Results:</label>
        <textarea required id="test-results" name="test_results" />
    </div>
    <div class="submit">
        <input required type="submit" />
    </div>
</form>

{#if data && data.length > 0}
    <Table rows={data} heading="Patient history" />
{:else if data}
    <Table heading="No history for patient !"></Table>
{/if}

<style>
    #getinfo {
        width: fit-content;
        height: fit-content;
        margin: 0 15px 0 auto;
        padding: 5px;
        border-radius: 10px;
        border: 2px solid black;
        cursor: pointer;
    }
    #getinfo:hover {
        scale: 1.05;
    }
    #getinfo:active {
        background-color: black;
        color: white;
    }
</style>
