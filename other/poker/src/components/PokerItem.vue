<template>
    <div class="poker-item">
        <div class="top-name">
            {{ pokerName }}
        </div>
        <div class="colour">
            <ColourItem :order="colour" />
        </div>
        <div class="bottom-name">
            {{ pokerName }}
        </div>
    </div>
</template>

<script>
import { randomColour } from '@/util'
import ColourItem from '@/components/ColourItem'

export default {
    name: 'PokerItem',
    components: {
        ColourItem
    },
    props: {
        order: {
            type: Number,
            default: -1
        }
    },
    data () {
        return {
            colour: -1 // 0 - 红心 1 - 黑桃 2 - 方块 3 - 梅花
        }
    },
    computed: {
        pokerName() {
            const startIndex = 65
            const name = String.fromCharCode(startIndex + this.order)
            // 将扑克名统一为大写
            return name && name.toUpperCase()
        }
    },
    methods: {

    },
    created() {
        this.colour = randomColour()
    }
}
</script>

<style lang="scss" scoped>
.poker-item {
    position: relative;
    width: 150px;
    height: 200px;
    border: 1px solid #000;
    border-radius: 10px;
    background: #fff;
    .top-name {
        position: absolute;
        top: 5px;
        left: 10px;
    }
    .colour {
        position: absolute;
        width: 24px;
        height: 24px;
        top: calc(50% - 12px);
        left: calc(50%  - 12px);
    }
    .bottom-name {
        position: absolute;
        bottom: 5px;
        right: 10px;
    }
}
</style>