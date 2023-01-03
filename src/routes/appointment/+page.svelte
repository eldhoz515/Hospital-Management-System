<script>
    import Table from "$lib/table.svelte";
    import { scale, fly } from "svelte/transition";

    export let form, data;
    console.log(data);

    const now = new Date();
    let month = now.getMonth() + 1;
    let day = now.getDate();
    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;
    const today = now.getFullYear() + "-" + month + "-" + day;
</script>
<svelte:head>
    <title>Appointments | HMS</title>
</svelte:head>

{#if form?.success}
    <div id="success">New appointment added successfully !</div>
{:else if form}
    <div id="success">Failed to add appointment !</div>
{/if}

<form in:fly={{ x: 500 }} method="post">
    <h2 class="heading">Appointment Scheduling</h2>
    <div class="input">
        <label for="patient-id">Patient Id:</label>
        <input required type="text" id="patient-id" name="patient_id" />
    </div>
    <div class="input">
        <label for="appointment-date">Date:</label>
        <input
            required
            type="date"
            id="appointment-date"
            name="appointment_date"
            value={today}
        />
    </div>
    <div class="input">
        <label for="appointment-time">Time:</label>
        <input
            required
            type="time"
            id="appointment-time"
            name="appointment_time"
        />
    </div>
    <div class="input">
        <label for="doctor-id">Doctor Id:</label>
        <input required type="text" id="doctor-id" name="doctor_id" />
    </div>
    <div class="input">
        <label for="appointment-reason">Reason for Appointment:</label>
        <textarea required id="appointment-reason" name="appointment_reason" />
    </div>
    <div class="submit">
        <input required type="submit" />
    </div>
</form>

{#if data && data.rows.length > 0}
    <Table
        rows={data.rows.map((value) => {
            delete value.appointment_date;
            return value;
        })}
        heading="Today's Appointments"
    />
{:else}
    <Table heading="No Appointments for Today !" />
{/if}
