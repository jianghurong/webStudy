<template>
    <div class="colour-item">
        <div v-if="order === 0" class="red-heart">
            <div class="circle red">
            </div>
            <div class="triangle">
            </div>
            <div class="circle red">
            </div>
        </div>
        <div v-if="order === 1">

        </div>
        <div v-if="order === 2" class="diamond red">

        </div>
        <div v-if="order === 3">

        </div>
    </div>
</template>

<script>
export default {
    name: 'ColourItem',
    props: {
        order: {
            type: Number,
            default: -1
        }
    }
}
</script>

<style lang="scss" scoped>
.colour-item,
.diamond,
.red-heart {
    width: 100%;
    height: 100%;
}
.diamond {
    transform: rotate(45deg) skew(10deg, 10deg);
    transition: 0.2s all ease-out;
}
.red-heart {
    position: relative;
    .circle {
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        &:first-child {
            top: 0;
            left: -40%;
        }
        &:last-child {
            top: 0;
            right: -40%;
        }
    }
    .triangle {
        position: absolute;
        left: -8px;
        bottom: -144%;
        width: 0;
        height: 0;
        border-top: 20px solid rgb(241, 52, 52);
        border-right: 20px solid transparent;
        border-bottom: 20px solid transparent;
        border-left: 20px solid transparent;
    }
}
.red {
    background: rgb(241, 52, 52);
}
</style>