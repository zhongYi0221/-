<template>
    <div class="cinema_body">
        <ul>
<!--            <li>-->
<!--                <div>-->
<!--                    <span>大地影院(澳东世纪店)</span>-->
<!--                    <span class="q"><span class="price">22.9</span> 元起</span>-->
<!--                </div>-->
<!--                <div class="address">-->
<!--                    <span>金州区大连经济技术开发区澳东世纪3层</span>-->
<!--                    <span>1763.5km</span>-->
<!--                </div>-->
<!--                <div class="card">-->
<!--                    <div>小吃</div>-->
<!--                    <div>折扣卡</div>-->
<!--                </div>-->
<!--            </li>-->

            <li v-for="item in cinemaList" :key="item.id">
                <div>
                    <span>{{item.nm}}</span>
                    <span class="q"><span class="price">{{item.sellPrice}}</span> 元起</span>
                </div>
                <div class="address">
                    <span>{{item.addr}}</span>
                    <span>{{item.distance}}</span>
                </div>
<!--                //v-for="(数组房间号/属性,下标/值) in 数组/对象"-->
<!--                <div v-for="(num,key) in item.tag" :key="key" class="card">-->
<!--                    <div v-if="num===''">折扣卡</div>-->
<!--                </div>-->

<!--                <div class="card">-->
<!--                    <div v-if="resw===1">小吃</div>-->
<!--                    <div v-if="resw===1">折扣卡</div>-->
<!--                </div>-->
                <div class="card">
<!--                     <div v-for="(num,key) in item.tag" :key="key" class="card">{{key|formatCard}}</div>-->
                    <div v-if="resw===1">小吃</div>
                     <div v-if="resw===1">折扣卡</div>
                   
                </div>
            </li>

        </ul>
    </div>
</template>

<script>
    export default {
        name: "CiList",
        data() {
            return {
                cinemaList: [],
                resw: 1,
            }
        },
        mounted() {
            this.axios.get('/api/cinemaList?cityId=10').then((res) => {
                var msg = res.data.msg;
                if (msg === 'ok') {
                    this.cinemaList = res.data.data.cinemas;
                    // console.log(this.cinemaList)
                }
            });
        },
        // methods: {},
        filter:{
            formatCard(key){
                var card=[
                    {key:'allowRefund',value:'改签'},
                    {key:'endorse',value:'退'},
                    {key:'sell',value:'折扣卡'},
                    {key:'snack',value:'小吃'}
                ];
                for(var i=0; i<card.length;i++){
                    if (card[i].key===key){
                        return card[i].value;
                    }
                }
            },
        }
    }
</script>

<style scoped>
    #content .cinema_body {
        flex: 1;
        overflow: auto;
    }

    .cinema_body ul {
        padding: 20px;
    }

    .cinema_body li {
        border-bottom: 1px solid #e6e6e6;
        margin-bottom: 20px;
    }

    .cinema_body div {
        margin-bottom: 10px;
    }

    .cinema_body .q {
        font-size: 11px;
        color: #f03d37;
    }

    .cinema_body .price {
        font-size: 18px;
    }

    .cinema_body .address {
        font-size: 13px;
        color: #666;
    }

    .cinema_body .address span:nth-of-type(2) {
        float: right;
    }

    .cinema_body .card {
        display: flex;
    }

    .cinema_body .card div {
        padding: 0 3px;
        height: 15px;
        line-height: 15px;
        border-radius: 2px;
        color: #f90;
        border: 1px solid #f90;
        font-size: 13px;
        margin-right: 5px;
    }

    .cinema_body .card div.or {
        color: #f90;
        border: 1px solid #f90;
    }

    .cinema_body .card div.bl {
        color: #589daf;
        border: 1px solid #589daf;
    }
</style>