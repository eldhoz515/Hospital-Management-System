<script>
    import { onMount } from "svelte";
    let title = "",
        idx = 0;
    onMount(() => {
        typewriter("Hospital Management System");
    });
    function animate() {
        let strings = [
            "Hospital Management System",
            "ആശുപത്രി മാനേജ്മെന്റ് സിസ്റ്റം",
            "மருத்துவமனை மேலாண்மை அமைப்பு",
            "ఆసుపత్రి నిర్వహణ వ్యవస్థ",
            "अस्पताल प्रबंधन प्रणाली",
            "sistema de gestion hospitalaria",
            "医院管理系统",
            "Krankenhausmanagementsystem",
            "रुग्णालय व्यवस्थापन प्रणाली",
            "병원 관리 시스템",
        ];
        if (idx >= strings.length) idx = 0;
        typewriter(strings[idx]);
    }
    function typewriter(str) {
        idx++;
        const len = str.length;
        let i = 0,
            interval;
        interval = setInterval(() => {
            if (i >= len) {
                clearInterval(interval);
                setTimeout(() => {
                    destroy();
                }, 500);
                return;
            }
            title += str[i];
            i++;
        }, 50);
    }
    function destroy() {
        const interval = setInterval(() => {
            title = title.slice(0, -1);
            if (title.length == 0) {
                clearInterval(interval);
                animate();
            }
        }, 20);
    }
</script>
<svelte:head>
    <title>Home | HMS</title>
</svelte:head>

<div id="welcome">{title}</div>

<style>
    #welcome {
        width: fit-content;
        text-align: center;
        margin: 150px auto 0 auto;
        font-size: 80px;
        font-weight: 800;
        font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
    }
</style>
