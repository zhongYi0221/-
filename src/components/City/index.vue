<template>
    <div class="city_body">
        <div class="city_list err">
                    <div class="city_hot">
                        <h2>热门城市</h2>
                        <ul class="clearfix">
                            <li v-for="item in hotList" :key="item.id">{{ item.nm }}</li>
                        </ul>
                    </div>
<!--            ref可以是标签名字-->
                  <div class="city_sort" ref="city_sort">
				<div v-for="item in cityList" :key="item.id">
                     <h2>{{item.index}}</h2>
					<ul>
						<li v-for="itemList in item.list" :key="itemList.id" >{{itemList.nm}}</li>
					</ul>
				</div>
			</div>
         </div>
        <div class="city_index">
            <ul>
<!--                @touchstart移动端点击事件-->
<!--                <li v-for="(item,index) in cityList" :key="item.index" @touchstart="handleToIndex(index)">{{item.index}}</li>-->
            </ul>
        </div>
    </div>    
</template>

<script>
 
   export default {
       name: 'City',
       data() {
           return {
               err:[],
               cityList: [],
               hotList: [],
               isLoading: true
           }
       },
       mounted() {
           // var cityList = window.localStorage.getItem('cityList');
           // var hotList = window.localStorage.getItem('hotList');
           // if (cityList && hotList) {
           //     this.cityList = JSON.parse(cityList);
           //     this.hotList = JSON.parse(hotList);
           //     this.isLoading = false;
           // } else {
               this.axios.get('/api/cityList').then((res) => {
                   var msg = res.data.msg;
                   if (msg === 'ok') {
                       // this.isLoading = false;
                       var cities = res.data.data.cities;
                       // console.log(cities);
                       //[ { index : 'A' , list : [{ nm : '阿城' , id : 123 }] } ]
                // return {
                // cityList,
                // hotList
                // };
                       var {cityList,hotList}=this.formatCityList(cities);
                       this.cityList=cityList;
                       this.hotList=hotList;
                   }
               });
          //}
       },
   //     methods: {
   //         formatCityList(cities) {
   //             var cityList = [];
   //             var hotList = [];
   //
   //             for (var i = 0; i < cities.length; i++) {
   //                 if (cities[i].isHot === 1) {
   //                     hotList.push(cities[i]);
   //                 }
   //             }
   //             for (var i = 0; i < cities.length; i++) {
   //                 var firstLetter = cities[i].py.substring(0, 1).toUpperCase();
   //                 if (toCom(firstLetter)) {  //新添加index
   //                     cityList.push({index: firstLetter, list: [{nm: cities[i].nm, id: cities[i].id}]});
   //                 } else {   //累加到已有index中
   //                     for(var j= 0;j<cityList.length;j++){
   //                         if(cityList[j].index===firstLetter){
   //                              cityList[j].list.push( { nm : cities[i].nm , id : cities[i].id } );
   //                         }
   //                     }
   //                 }
   //             }
   //        
   //                      //排序26字母
   //                      //arrayObject.sort(sortby)方法用于对数组的元素进行排序。
   //                      // sortby:可选。规定排序顺序。必须是函数。数组在原数组上进行排序，不生成副本。
   //                      // 若 a 小于 b，在排序后的数组中 a 应该出现在 b 之前，则返回一个小于 0 的值。
   //                      // 若 a 等于 b，则返回 0。
   //                      // 若 a 大于 b，则返回一个大于 0 的值。
   //             cityList.sort((n1,n2)=>{
   //                 if( n1.index > n2.index ){
   //                     return 1;
   //                 }
   //                 else if(n1.index < n2.index){
   //                     return -1;
   //                 }
   //                 else{
   //                     return 0;
   //                 }
   //             });
   //
   //             function toCom(firstLetter){
   //                 for(let i = 0;i<hotList.length;i++){
   //                     if(cityList[i].index===firstLetter){
   //                         return false;
   //                 }
   //             }
   //                
   //                 return true;//这里返回的都是ture
   //                     // for (var j = 0; j < cityList.length; j++) {
   //                     //     if (cityList[j].index === firstLetter) {
   //                     //         cityList[j].list.push({nm: cities[i].nm, id: cities[i].id});
   //                     //     }
   //                     }
   //             console.log(cityList);
   //             console.log(hotList);
   //          }
   //     }
   // }
     methods: {
           formatCityList(cities) {
               let cityList = [];
               let hotList = [];

               for (let i = 0; i < cities.length; i++) {
                   if (cities[i].isHot === 1) {
                       hotList.push(cities[i]);
                   }
               }
               for (let i = 0; i < cities.length; i++) {
                   let firstLetter = cities[i].py.substring(0, 1).toUpperCase();
                   if (toCom()) {  //新添加index
                       cityList.push({index: firstLetter, list: [{nm: cities[i].nm, id: cities[i].id}]});
                   } else {   //累加到已有index中
                       for(let j= 0;j<cityList.length;j++){
                           if(cityList[j].index===firstLetter){
                                cityList[j].list.push( { nm : cities[i].nm , id : cities[i].id } );
                           }
                       }
                   }
               }

                        //排序26字母
                        //arrayObject.sort(sortby)方法用于对数组的元素进行排序。
                        // sortby:可选。规定排序顺序。必须是函数。数组在原数组上进行排序，不生成副本。
                        // 若 a 小于 b，在排序后的数组中 a 应该出现在 b 之前，则返回一个小于 0 的值。
                        // 若 a 等于 b，则返回 0。
                        // 若 a 大于 b，则返回一个大于 0 的值。
               cityList.sort((n1,n2)=>{
                   if( n1.index > n2.index ){
                       return 1;
                   }
                   else if(n1.index < n2.index){
                       return -1;
                   }
                   else{
                       return 0;
                   }
               });

               function toCom(){
                   // for(let i = 0;i<hotList.length;i++){
                   //     if(cityList[i].index===firstLetter){
                   //         return false;
                   // }
               //}

                   return true;//这里返回的都是ture
                       // for (var j = 0; j < cityList.length; j++) {
                       //     if (cityList[j].index === firstLetter) {
                       //         cityList[j].list.push({nm: cities[i].nm, id: cities[i].id});
                       //     }
                       }
               return {
                cityList,
                hotList
                };

               // console.log(cityList);
               // console.log(hotList);
            },
           // handleToInde(index){
                    // var h2 = this.$refs.city_sort.getElementsByTagName('h2');
                    // this.$refs.city_sort.parentElement.scrollTop = h2[index].offsetTop;
           // }
         
    
       }
   }
   
</script>

<style scoped>
    .city_body .city_hot{ margin-top: 20px;}
    .city_body .city_hot h2{ padding-left: 15px; line-height: 30px; font-size: 14px; background:#F0F0F0; font-weight: normal;}
    /*.city_body .city_hot ul{}*/
    .city_body .city_hot ul li{ float: left; background: #fff; width: 29%; height: 33px; margin-top: 15px; margin-left: 3%; padding: 0 4px; border: 1px solid #e6e6e6; border-radius: 3px; line-height: 33px; text-align: center; box-sizing: border-box;}
    /*.city_body .city_sort{}*/
    .city_body .city_sort div{ margin-top: 20px;}
    .city_body .city_sort h2{ padding-left: 15px; line-height: 30px; font-size: 14px; background:#F0F0F0; font-weight: normal;}
    .city_body .city_sort ul{ padding-left: 10px; margin-top: 10px;}
    .city_body .city_sort ul li{ line-height: 30px; line-height: 30px;}
    .city_body .city_index{ width:20px; display: flex; flex-direction:column; justify-content:center; text-align: center; border-left:1px #e6e6e6 solid;}

</style>