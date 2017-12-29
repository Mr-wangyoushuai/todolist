new Vue({
    el:"#root",
    data:{
        all:localStorage.todo?JSON.parse(localStorage.todo):[],
        con:"",
        status:"all",
    },
    methods:{
        add(){
            if(!this.con){
                alert("请输入信息");
                return;
            }
            var obj = {};
            obj.id = Math.random() + new Date().getTime();
            obj.title = this.con;
            obj.state = 0;
            obj.edit=true;
            this.all.push(obj);
            this.con = "";
            localStorage.todo=JSON.stringify(this.all);
        },
        changeStatus(type){
            this.status = type;
        },
        changeState(obj){
            if(obj.state==0){
                obj.state=1
            }else{
                obj.state=0
            }
            localStorage.todo=JSON.stringify(this.all);
        },
        del(id){
            this.all = this.all.filter(function (a) {
                if(a.id!=id){
                    return a;
                }
            })
            localStorage.todo=JSON.stringify(this.all);
        },
        edit(obj){
            obj.edit=!obj.edit;
            localStorage.todo=JSON.stringify(this.all);
        }
    },
    mounted(){
        localStorage.todo=JSON.stringify(this.all);
    },
    computed: {
        datas: function () {
            var that = this;
            return this.all.filter(function (a) {
                if (that.status == "all") {
                    return a;
                } else {
                    if (a.state == that.status) {
                        return a;
                    }
                }
            })
        }
    }

})