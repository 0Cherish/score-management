<template>
    <div class="s-canvas">
        <canvas id="s-canvas" :width="contentWidth" :height="contentHeight"></canvas>
    </div>
</template>

<script>
export default {
    name: 'identify-code',
    //接受父组件的传值
    props: {
        //验证码
        identifyCode: {
            type: String,
            default: '1234'
        },
        //字体最小值
        fontSizeMin: {
            type: Number,
            default: 40
        },
        //字体最大值
        fontSizeMax: {
            type: Number,
            default: 50
        },
        //验证码图片背景色最小值
        backgroundColorMin: {
            type: Number,
            default: 180
        },
        //验证码图片背景色最大值
        backgroundColorMax: {
            type: Number,
            default: 240
        },
        //字体颜色最小值
        colorMin: {
            type: Number,
            default: 50
        },
        //字体颜色最大值
        colorMax: {
            type: Number,
            default: 160
        },
        //干扰线颜色最小值
        lineColorMin: {
            type: Number,
            default: 40
        },
        //干扰线颜色最大值
        lineColorMax: {
            type: Number,
            default: 180
        },
        //干扰点颜色最小值
        dotColorMin: {
            type: Number,
            default: 0
        },
        //干扰点颜色最大值
        dotColorMax: {
            type: Number,
            default: 255
        },
        //容器宽度
        contentWidth: {
            type: Number,
            default: 100
        },
        //容器高度
        contentHeight: {
            type: Number,
            default: 40
        }
    },
    methods: {
        // 生成一个随机数
        randomNum(min, max) {
            return Math.floor(Math.random() * (max - min) + min)
        },
        // 生成一个随机的颜色
        randomColor(min, max) {
            let r = this.randomNum(min, max)
            let g = this.randomNum(min, max)
            let b = this.randomNum(min, max)
            return 'rgb(' + r + ',' + g + ',' + b + ')'
        },
        //利用canvas生成图片验证码
        drawPic() {
            let canvas = document.getElementById('s-canvas')
            let ctx = canvas.getContext('2d')
            ctx.textBaseline = 'bottom'
            // 绘制背景
            ctx.fillStyle = this.randomColor(this.backgroundColorMin, this.backgroundColorMax)
            ctx.fillRect(0, 0, this.contentWidth, this.contentHeight)
            // 绘制文字
            for (let i = 0; i < this.identifyCode.length; i++) {
                this.drawText(ctx, this.identifyCode[i], i)
            }
            this.drawLine(ctx)
            this.drawDot(ctx)
        },
        //画验证码
        drawText(ctx, txt, i) {
            ctx.fillStyle = this.randomColor(this.colorMin, this.colorMax)
            ctx.font = this.randomNum(this.fontSizeMin, this.fontSizeMax) + 'px SimHei'
            let x = (i+0.5) * (this.contentWidth / (this.identifyCode.length + 1))
            let y = this.randomNum(this.fontSizeMax, this.contentHeight - 5)
            // 修改坐标原点
            ctx.translate(x, y)
            ctx.fillText(txt, 0, 0)
            // 恢复坐标原点
            ctx.translate(-x, -y)
        },
        // 绘制干扰线
        drawLine(ctx) {
            for (let i = 0; i < 4; i++) {
                ctx.strokeStyle = this.randomColor(this.lineColorMin, this.lineColorMax)
                ctx.beginPath()
                ctx.moveTo(this.randomNum(0, this.contentWidth), this.randomNum(0, this.contentHeight))
                ctx.lineTo(this.randomNum(0, this.contentWidth), this.randomNum(0, this.contentHeight))
                ctx.stroke()
            }
        },
        // 绘制干扰点
        drawDot(ctx) {
            for (let i = 0; i < 100; i++) {
                ctx.fillStyle = this.randomColor(0, 255)
                ctx.beginPath()
                ctx.arc(this.randomNum(0, this.contentWidth), this.randomNum(0, this.contentHeight), 1, 0, 2 * Math.PI)
                ctx.fill()
            }
        }
    },
    watch: {
        identifyCode() {
            this.drawPic()
        }
    },
    //生成初始验证码
    mounted() {
        this.drawPic()
    }
}
</script>

<style scoped>

</style>