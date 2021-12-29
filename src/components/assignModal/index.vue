<template>
    <transition name="dialog">
        <section class="ss-dialog-bg ss-assign-dialog" v-show="isShowDialog">
            <div class="ss-select-popup">
                <div class="ss-dialog-header">
                    {{title}}
                    <i class="ss-close-btn sense-icon-close" @click.stop="closeFunc()">
                    </i>
                </div>
                <div class="ss-dialog-content">
                    <div class="ss-mian-content">
                        <div class="ss-assign-menber-box">
                            <div class="ss-assign-menber-tree-wrapper">
                                <div class="ss-assign-search-menber">
                                    <i class="icon-icon_search font_family"></i>
                                    <input  :placeholder="placeholderText"
                                            prefix-icon="el-icon-search"
                                            v-model.trim="assignSearchContent"
                                            @input="searchDebounce"
                                            class="ss-assign-search-menber-input">
                                </div>
                                <div class="ss-assign-menber-tree" v-loading="isLoading">
				                    <div :style="{ height: memberTree.length * 40 + 'px' }" class="ss-treeTop" v-if='!assignSearchContent'></div>
                                    <div v-if='!assignSearchContent' ref='treeBox'>
                                        <div class="ss-bread-nav" v-if="navList.length&&start==0" ref='breadNav'>
                                            <span v-for='(navItem,navIndex) in navList' :key='navIndex'>
                                                <span @click="getDepartmentTree(navItem,navIndex)" class="ss-navItem" :class="{'active':topNodeUid==navItem.department_id}">
                                                     <name-replacer :id="navItem.department_id" type='1' :name="navItem.name"></name-replacer>
                                                </span>
                                                <span class="bread-separator" v-show='navIndex!=navList.length-1'>/</span>
                                            </span>
                                        </div>
                                        <div class="ss-org-tree">
                                            <div class="ss-org-tree-item ss-allchecked" v-if='start==0'>
                                                <input class="ss-filled-in"  type="checkbox" :id="`checkbox`" ref="treeinput" v-model='allChecked' @change="changeAllChecked(allChecked)"/>
                                                <label :for="`checkbox`" class="ss-firstIndexLabel">全部</label>
                                            </div>
                                            <div class="ss-org-tree-item" v-for="(item,index) in visiableTree" :key='index' ref='treeItem'>
                                                <div class="ss-item-box">
                                                    <div class="ss-org-tree-item-name">
                                                        <input class="ss-filled-in"  type="checkbox" :id="`checkbox${item.uid}`" ref="treeinput" :value='item.cid' v-model="checkedMap[item.cid]" @change="changeChecked(item,false)"/>
                                                        <label :for="`checkbox${item.uid}`" class="ss-firstIndexLabel">
                                                            <span v-if="item.type=='user'">
                                                                <name-replacer :id="item.employee_id" type='0' :name="item.name"></name-replacer>
                                                            </span>
                                                            <span v-else>
                                                                <name-replacer :id="item.department_id" type='1' :name="item.name"></name-replacer>
                                                            </span>
                                                            <span v-if="item.type=='department'">({{item.user_num}})</span>
                                                        </label>
                                                    </div>
                                                    <div class="ss-next-level" v-if="item.type=='department'">
                                                        <span class="sense-icon_distribute" :class="{'active':!checkedMap[item.cid]}"></span>
                                                        <span @click='clickToNextLevel(item)' :class="{'ss-levelDisabled':checkedMap[item.cid]}" class="ss-levelIcon">下级</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="ss-org-tree ss-search-tree" v-if='assignSearchContent' ref='searchBox'>
                                        <div class="ss-org-tree-item" v-for="(item,index) in serachTreeResult" :key='index'>
                                            <div class="ss-item-box">
                                                <div class="ss-org-tree-item-name">
                                                    <input class="ss-filled-in"  type="checkbox" :id="`checkbox${item.cid}`" ref="treeinput" :value='item.cid' v-model="checkedMap[item.cid]" @change="changeChecked(item,false)"/>
                                                    <label :for="`checkbox${item.cid}`" class="ss-firstIndexLabel">
                                                            <span v-if="item.type=='user'">
                                                                <name-replacer :id="item.employee_id" type='0' :name="item.name"></name-replacer>
                                                            </span>
                                                            <span v-else>
                                                                <name-replacer :id="item.department_id" type='1' :name="item.name"></name-replacer>
                                                            </span>
                                                        <span v-if="item.type=='department'">({{item.user_num}})</span>
                                                    </label>
                                                </div>
                                            </div>
                                            <!-- <div class="ss-org-tree-item-name" @click="changeChecked(item,true)"> -->
                                                <!-- <input class="ss-filled-in"  type="checkbox" :id="`checkbox${item.user_id}`" ref="treeinput" v-model="item.value" @change="changeChecked(item)"/> -->
                                                <!-- <label :for="`checkbox${item.user_id}`" class="ss-firstIndexLabel" v-if="item.type=='department'">{{item.name}}({{item.user_num}})</label>
                                                <label :for="`checkbox${item.user_id}`" class="ss-firstIndexLabel" v-else >{{item.name}}</label>
                                            </div> -->
                                        </div>
                                    </div>
                                </div>
                                <!-- 智慧校园,非搜索状态且不是根部门下展示 -->
                                <div class="ss-smartCampSync" v-if="isShowSmartCampSync">
                                    <span>没有找到用户？</span>
                                    <span @click="syncAccountSmartCapm">更新当前组织架构</span>
                                </div>
                            </div>
                            <div class="ss-assign-menber-list-wrapper">
                                <div class="ss-assign-menber-list">
                                    <div class="ss-assign-choice-wrapper" v-for="(item,index) in choseList" :key="index">
                                        <span v-if="item.type=='user'">
                                            <name-replacer :id="item.employee_id" type='0' :name="item.name"></name-replacer>
                                        </span>
                                        <span v-else>
                                            <name-replacer :id="item.department_id" type='1' :name="item.name"></name-replacer>
                                        </span>
                                        <span v-if="item.type=='department'">({{item.user_num}})</span>
                                        <span class="ss-delete-item-icon sense-icon-close"
                                             @click="deleteChoice(item,index)">
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="ss-dialog-footer">
                    <button class="ss-cancel-btn" @click="cancleFunc">{{leftButtonText}}</button>
                    <button class="ss-confirm-btn" @click="confirmFunc" :class="{'ss-is-disabled':hasClicked}">{{rightButtonText}}</button>
                </div>
            </div>
        </section>
    </transition>
</template>
<script>
    import loading from '@/components/loading';
    import message from '@/components/message'
    import { get,post} from '@/utils/http';
    import NameReplacer from '@/components/nameReplacer'
    export default {
        name:'SsAssignMemberBox',
        props:{
            //搜索方式 all-全部，employee-成员，department-部门，默认全部搜索
            searchType: {
                type: String,
                default: 'all'
            },
            //指派类型，课程 course, 培训计划 training ,修改成员所属部门 department ,人员授权 employee
            assignType:{
                type: String,
                default: 'course'
            },
            //弹出框的标题
            title: {
                type: String,
                default: '指派设置'
            },
            //搜索框的文案
            placeholderText: {
                type: String,
                default: '请输入部门或者人员'
            },
            //左边按钮文案
            leftButtonText:{
               type: String,
               default: '取消' 
            },
            //右边按钮文案
            rightButtonText:{
               type: String,
               default: '确定' 
            },
            //是否展示学员
            isShowUsers:{
               type: Boolean,
               default: true
            },
            //是否为智慧校园
            isSmartCamp:{
               type: Boolean,
               default: false
            },
            //是否缓存每个部门下面的组织结构
            isCacheTree:{
               type: Boolean,
               default: true
            },
        },
        data() {
            return {
                assignSearchContent:'',//搜索人员字段
                memberTree:[{}],//左边的组织结构列表
                choseList:[],//选中的人员列表
                topNodeUid:'1',//当前展示的部门的id
                navList:[],//面包屑列表
                allDepartmentTreeMap:{},//所有的部门下面对应的树结构的保存，避免每次都要请求，保证只请求一次
                checkedArr:[],//选中的人的cid集合，用于checkbox的绑定
                allChecked:false,//全选框的按钮状态
                isShowDialog:false,//默认展示弹出框
                courseAuthorizeUrl:'/training_api/v2/privilege/resource/auth',//最终授权课程的api路径
                trainingAuthorizeUrl:'/training_api/v2/privilege/resource/assign',//最终授权训练营的api路径
                courseAssignedUrl:'/training_api/v2/privilege/resource/auth',//获取课程已经指派人员的api路径
                examAssignedUrl:'/evaluation_work/examination/get_training_participate_user', //获取之前的考试已经考过考生的api路径
                trainingAssignedUrl:'/training_api/v2/privilege/resource/assign',//获取训练营已经指派人员的api路径
                departmentAssignedUrl:'/training_api/v2/employee/info.department',//获取训练营已经指派人员的api路径
                employeeAssignedUrl:'/training_api/v2/privilege/employee/auth',
                isLoading:false,//loading
                assignedUserList:[],//已经分配的人员列表
                serachTreeResult:[],//搜索列表
                //新加的
                visiableTree:[],//可见的组织架构树
                start:0,//可见范围内组织架构的开始下标
                end:null,//可见范围内组织架构的结束下标
                visibleCount: 0,//可见范围内展示多少条数据
                visibleData: [],//可见范围内组织架构list
                treeIds:[],//当前部门下的所有部门和人员的cid集合
                checkedMap:{},//保存组织架构的勾选状态
                treeItemHeight:40,
                spareHeight:92,//breadNav 52 + treeItemHeight 40
                treeHeight:400,
                asyncSmartCampUrl:'/smart_campus/campus/sync_task',//智慧校园同步操作路径
                isRootDepartMap:{},//是否为根部门的缓存
                hasClicked:false  //是否已经点击了最终的确认按钮
            };
        },
        watch:{
            assignSearchContent(newVal,oldVal){
                if(!newVal){
                    this.$nextTick(function(){
                        this.start=0;
                        this.$refs.treeBox.style.webkitTransform = `translate3d(0, 0px, 0)`;
                        this.end = this.start + this.visibleCount;
                        this.visiableTree = this.memberTree.slice(this.start, this.end); 
                    })
                    
                }
                if(!oldVal&&newVal){
                    this.serachTreeResult=[];
                }
            }
        },
        created() {
            let that=this;
            that.initFunction();
        },
        mounted(){
            this.$nextTick(function(){
                this.scrollEvent();
            })
        },
        components: {
            loading,
            message,
            NameReplacer
        },
        computed: {
            //智慧校园,非搜索状态且不是根部门下展示更新组织架构操作
            isShowSmartCampSync(){
                return this.isSmartCamp&&!this.assignSearchContent&&!this.isRootDepart
            },
            //是否为根部门
            isRootDepart(){
                return this.isRootDepartMap[this.topNodeUid]
            }

        },
        methods: {
            //组织架构区绑定滚动事件
            scrollEvent(){
                let that=this;
                let scrollItem=document.getElementsByClassName('ss-assign-menber-tree')[0];
                let scrollFunc=that.debounce(function(){
                    let that=this;
                    let scrollTop=scrollItem.scrollTop;
                    let fixedScrollTop=0;
                    if(!that.assignSearchContent){
                        if(that.memberTree.length>that.visibleCount){
                            fixedScrollTop = scrollTop - scrollTop % that.treeItemHeight;//保证偏移量是每一项的整数
                            that.start = Math.floor(scrollTop/ that.treeItemHeight);
                            that.$refs.treeBox.style.webkitTransform = `translate3d(0, ${fixedScrollTop}px, 0)`;
                            that.end = that.start + that.visibleCount;
                            that.visiableTree = that.memberTree.slice(this.start, this.end); 
                        }
                    } 
                },10)
                scrollItem.addEventListener('scroll',scrollFunc)
            },
            //手动处理左边组织架构treeBox向上滚动的距离 height为纯数字
            treeBoxScrollFunc(height){
                if(Object.prototype.toString.call(height)=="[object Number]"){
                    let that=this;
                    let scrollItem=document.getElementsByClassName('ss-assign-menber-tree')[0];
                    let scrollTop=scrollItem.scrollTop=height;//height为具体的数字
                    let fixedScrollTop = scrollTop - scrollTop % that.treeItemHeight;//保证偏移量是每一项的整数
                    that.$refs.treeBox.style.webkitTransform = `translate3d(0, ${fixedScrollTop}px, 0)`;
                }
            },
            //防抖操作
            debounce(func, wait, immediate) {
                var timeout;
                let that=this;
                return function() {
                    var context = that, args = arguments;
                    var later = function() {
                        timeout = null;
                        if (!immediate) func.apply(context, args);
                    };
                    var callNow = immediate && !timeout;
                    clearTimeout(timeout);
                    timeout = setTimeout(later, wait);
                    if (callNow) func.apply(context, args);
                };
            },
            //初始化函数
            initFunction(){
                let that=this;
                that.assignSearchContent='';//搜索字段置空
                that.memberTree=[{}];//左边的组织结构
                that.choseList=[];//右边选中的人员列表
                that.topNodeUid='';//当前展示的组织架构的部门id
                that.visibleCount = Math.ceil(that.treeHeight / that.treeItemHeight)+2;//+2 为了弥补部门标题和全部的占位  
                that.searchDebounce=that.debounce(that.searchMember,300);
            },
            getTreeStruct(){
                let that=this;
                let departParams={
                    department_id:1,
                    app_id:window.__app_id
                };
                that.isLoading = true;
                
                get('/training_api/address_book/direct/index', departParams).then(function(treeStructResponse){
                
                    if(treeStructResponse.code===0){
                        let data=treeStructResponse.data;
                        let nav={};
                        nav.name=data.current.name;
                        nav.department_id=data.current.department_id; 
                        that.navList.push(nav);

                        //组装数据
                        that.handleConstructData(data);
                        that.$emit('getTreeSuccessEvent');
                    }else{
                        that.$message.error(treeStructResponse.msg);
                    }
                    that.isLoading = false;

                });
                
            },
            //点击进入下一级部分的组织结构
            clickToNextLevel(item,isNavClick){
                let that=this;
                //将组织架构区域的滚动高度重置为0
                that.treeBoxScrollFunc(0);
                //非面包屑点击
                if(!isNavClick){
                    if(that.checkedMap[item.cid]){
                        return;
                    }
                    let nav={};
                    nav.name=item.name;
                    nav.department_id=item.department_id;
                    that.navList.push(nav);
                }
                //先判断allDepartmentTreeMap是否有缓存当前部门的树结构，特殊场景isCacheTree=false需要每次拉取
                if(!that.allDepartmentTreeMap[item.department_id]||!that.isCacheTree){
                    //重新获取
                    let departParams={
                        department_id:item.department_id,
                        app_id:window.__app_id
                    };
                    that.isLoading = true;
                    get('/training_api/address_book/direct/index', departParams).then(function(treeResponse){
                        if(treeResponse.code === 0){
                        //组装数据
                            that.handleConstructData(treeResponse.data);
                        }else{
                            that.$message.error(treeResponse.msg);
                        }
                        that.isLoading = false;
                    });
                }else{
                    that.topNodeUid=item.department_id;
                    //对于可视框内的数据处理
                    that.memberTree = that.allDepartmentTreeMap[item.department_id];
                    that.start = 0;
                    that.end = that.start + that.visibleCount;
                    that.visiableTree = that.memberTree.slice(that.start, that.end);
                    //判断全选按钮的勾选状态
                    that.allCheckedStateFunc();
                }
            },
            //数据处理
            handleConstructData(newData){
                let that=this;
                let data=newData;
                //左边展示结构树(该部门下的子部门加上人)
                if(that.isShowUsers){
                    that.memberTree = data.dept.concat(data.users);
                }else{
                    that.memberTree = data.dept;
                }
                
                that.topNodeUid = data.current.department_id;

                ///对于可视框内的数据处理
                that.start = 0;
                that.end = that.start + that.visibleCount;
                that.visiableTree = that.memberTree.slice(that.start, that.end);

                //保存当前部门下面的人员架构，同时也保存勾选状态
                that.allDepartmentTreeMap[data.current.department_id]=that.memberTree;
                that.isRootDepartMap[data.current.department_id]=data.current.parent_id==0?true:false;
                //判断全选按钮的勾选状态
                that.allCheckedStateFunc();
            },
            //暴露出的获取已经指派的人员的列表
            getAssignedUserList(params){
                let that=this,url="",successMsg="";
                if(that.assignType=='course'){
                    url=that.courseAssignedUrl;
                    console.log(params,"examparams")
                    if(params.exam_id){
                     url=that.examAssignedUrl;
                    }
                    console.log("url====",url)
                    successMsg='获取可见范围成功'
                }else if(that.assignType=='training'){
                    url=that.trainingAssignedUrl;
                    successMsg='获取指派人员成功'
                }else if(that.assignType=='department'){
                    url=that.departmentAssignedUrl;
                }else if(that.assignType=='employee'){
                    url=that.employeeAssignedUrl;
                }
                that.isLoading = true;
                get(url, params).then(function(res){
                    if(res.code==0){
                        that.isLoading = false;
                        let is_all=false;
                        if(that.assignType=='department'){
                            let depts=[];
                            for(var key in res.data){
                                depts=depts.concat(res.data[key])
                            }
                            //取出相同的部门（选取两个人及以上）
                            if(depts.length>1&&params.user_ids.length>1){
                               that.assignedUserList=that.getSame(depts);
                            }else{
                               that.assignedUserList=depts; 
                            }
                            that.choseList=that.assignedUserList.splice(0);
                            //同步勾选状态
                            that.choseList.forEach(function(item){
                                item.type='department';
                                that.checkedMap[item.cid]=true;
                            })
                        }else{
                            //放入已经指派的所有人员的cid，同步左边组织结构的勾选状态
                            let assignedIds=res.data.ids;
                            //同步左边勾选状态
                            assignedIds.forEach(function(item){
                                that.checkedMap[item]=true;
                            })
                            console.log(that.choseList,"判断是否需要去重")
                            //同步到右边列表中
                             if(res.data&&res.data.is_all){
                                is_all=true;
                                that.assignedUserList=[];
                            }else{
                                is_all=false;
                                that.assignedUserList=res.data.list;
                            }
                            that.choseList=that.choseList.concat(that.assignedUserList);
                        }
                        that.$emit('getAssignedSuccessEvent',that.choseList,is_all);

                        //需要根据当前勾选的值判断全选是否高亮
                        if(that.choseList.length>0){
                            //判断全选按钮的勾选状态
                            that.allCheckedStateFunc();
                        }
                    }else{
                        that.isLoading = false;
                        that.$message.error(res.msg);
                        that.$emit('getAssignedFailEvent',res.msg); 
                    }
                    that.isLoading = false;
                });
            },
            //去重
            unique(arr){
                for(var i=0, temp={}, result=[], ci; ci=arr[i++];){
                    var ordid = ci.cid;
                    if(temp[ordid]){
                        continue;
                    }
                    temp[ordid] = true;
                    result.push(ci);
                }
                return result;
            },
            //取出相同的
            getSame(arr){
                for(var i=0, temp={}, result=[], ci; ci=arr[i++];){
                    var ordid = ci.cid;
                    if(temp[ordid]){
                        result.push(ci);
                        continue;
                    }
                    temp[ordid] = true;
                }
                return result;
            },
            closeFunc(){
                this.isShowDialog=false;
                this.$emit('closeEvent');
            },
            //左边底部按钮点击函数
            cancleFunc(){
                this.isShowDialog=false;
                this.$emit('cancleEvent');
            },
            //右边底部确定按钮点击函数
            confirmFunc(){
                if(!this.hasClicked){
                    this.hasClicked=true;
                    this.$emit('confirmEvent',this.choseList);
                }
                
            },
            //搜索部门或者人员
            searchMember(){
                let that=this;
                if(!this.assignSearchContent){
                    return;
                }
                let params={
                    name:that.assignSearchContent,
                    type:that.searchType
                };
                that.isLoading = true;
                get('/training_api/address_book/search', params).then(function(res){
                    if(res.code==0){
                        let data=res.data;
                        if(data.department&&data.user){
                            that.serachTreeResult=data.department.list.concat(data.user.list);
                        }
                    }else{
                       that.$message.error(res.msg); 
                    }
                    that.isLoading = false;
                });
            },
            //点击回到上一个部门
            getDepartmentTree(navItem,navIndex){
                let that=this;
                //将全选状态置为false
                that.allChecked=false;
                that.navList=that.navList.slice(0,navIndex+1);
                that.clickToNextLevel(navItem,true);
            },
            //右边去掉人 左边原树先同步，再生成搜索树
            deleteChoice(item,index){
                this.choseList.splice(index,1);
                //勾选状态发生改变(true表示需要手动更新勾选状态)
                this.changeChecked(item,true)
                this.$emit('deleteEvent',item);
            },
            //提供给外部的删除接口（删除单个）
            deleteSingle(params){
                this.changeChecked(params,true)
            },
            //提供给外部的删除接口（删除所有）
            deleteAll(){
                this.choseList=[];
                this.allChecked=false;
                for(var key in this.checkedMap){
                    this.checkedMap[key]=false;
                }
            },
            //判断全选按钮的勾选状态
            allCheckedStateFunc(){
                let that=this;
                //需要根据当前勾选的值判断全选是否高亮
                let selectedItems=that.memberTree.filter(function(menberItem){
                    return that.checkedMap[menberItem.cid];
                });
                if(that.memberTree.length&&selectedItems.length==that.memberTree.length){
                    that.allChecked=true;
                }else{
                    that.allChecked=false;
                }
            },
             //全部的勾选状态改变
            changeAllChecked(value){
                let that=this;
                //同步全选按钮下面组织结构的勾选状态
                if(value){
                    let deleteItem=[];
                    //全选按钮勾选  department_id  parent_id(同步右边选中人员状态)
                    that.choseList.forEach(function(choseItem){
                        //后来从左边tree中选中的人
                        if(choseItem.parent_id){
                            if(choseItem.parent_id==that.topNodeUid){
                                deleteItem.push(choseItem.cid);
                            }
                        //上一次指派的人  depts为标识
                        }else if(choseItem.depts&&choseItem.depts.length){
                            if(choseItem.depts.join("-").split("-").indexOf(that.topNodeUid)>-1){
                                deleteItem.push(choseItem.cid);
                            }
                        }
                        
                    });
                    //右边选中人员的更新
                    //1.掉子部门和子人员(先删掉原来单选的user或者子department(包括上一次指派和后来从左边tree选中的))
                    //2.将当前左边的组织移入右边
                    that.choseList=that.choseList.filter(function(cItem){
                        return deleteItem.indexOf(cItem.cid)==-1;
                    });
                    that.choseList=that.choseList.concat(that.memberTree);
                    
                    //同步左边勾选状态
                    that.treeIds=[];
                    that.memberTree.forEach(function(item){
                        that.treeIds.push(item.cid)
                        that.checkedMap[item.cid]=true;
                    });
                    console.timeEnd("test");
                }else{
                    //右边选中人员的更新
                    that.choseList=that.choseList.filter(function(choseItem){
                        return that.treeIds.indexOf(choseItem.cid)==-1;
                    });
                    //同步左边勾选状态
                    that.memberTree.forEach(function(item){
                        that.checkedMap[item.cid]=false;
                    })
                }
            },
            //改变选择状态  isSearchChecked表示是否为搜索结果中的点击事件
            changeChecked(item,isSearchChecked){
                let that=this;
                let deleteItem=[];
                //搜索列表中的点击事件，外部的删除事件，that.checkedMap需要手动更新
                if(isSearchChecked){
                    that.checkedMap[item.cid]=that.checkedMap[item.cid]?false:true;
                }

                if(that.checkedMap[item.cid]){
                    //选中部门时，需要判断左边是否有单个的人存在这个部门下，如果有，需要选中部门，删掉单独选中的人
                    if(item.type=='department'){  
                        that.choseList.forEach(function(currentItem,index){
                            //表示不是上一次指派的
                            if(currentItem.uid){
                                //部门链中包含当前勾选的部门，需要从右边删除
                                if(currentItem.uid.split("-").indexOf(item.department_id)>-1){
                                    deleteItem.push(currentItem.cid);
                                    that.checkedMap[currentItem.cid]=false;//同时取消左边的勾选状态
                                }
                            }else if(currentItem.depts){
                                //上一次指派的人属于当前勾选的部门
                                if(currentItem.depts.join("-").split("-").indexOf(item.department_id)>-1){
                                    deleteItem.push(currentItem.cid);
                                    that.checkedMap[currentItem.cid]=false;//同时取消左边的勾选状态
                                }
                            }
                        });
                    }
                    if(deleteItem.length){
                        //右边数据更新，删掉子部门和子人员
                        that.choseList=that.choseList.filter(function(choseItem){
                            return deleteItem.indexOf(choseItem.cid)==-1;
                        });

                    }
                    //勾选的数据放入右边展示
                    that.choseList.push(item);
                }else{
                    that.choseList.forEach(function(choseItem,index){
                        if(choseItem.cid==item.cid){
                            that.choseList.splice(index,1);
                        }
                    });
                }
                //同步是否全选的勾选框状态
                that.allCheckedStateFunc();
            },
            //最终下发授权的操作,params为最终的传参
            authorizeEvent(params){
                let url="",successMsg="",
                    that=this,users=[],departments=[];
                that.choseList.forEach(function(item){
                    if(item.type=='department'){
                        departments.push(item.cid)
                    }else if(item.type=='user'){
                        users.push(item.cid)
                    }
                })
                //课程授权
                if(that.assignType=="course"){
                    url=that.courseAuthorizeUrl;
                    successMsg='设置可见范围成功';
                    params.auth_type=0;//0 普通授权  1 全体授权
                    params.auth_users=users;
                    params.auth_departments=departments;
                //训练营授权
                }else if(that.assignType=="training"){
                    url=that.trainingAuthorizeUrl;
                    successMsg='设置可见范围成功';
                    params.assign_users=users;
                    params.assign_departments=departments;
                } 
                post(url, params).then(function(res){
                    if(res.code==0){
                        that.$emit('authorizedSuccessEvent',successMsg);
                    }else{
                        that.$emit('authorizedFailEvent',res.msg);
                    }
                });  
            },
            //课程课件范围的全部可见授权操作
            allAuthorizeEvent(params){
                let that=this,successMsg='设置可见范围成功';
                let url=that.courseAuthorizeUrl;
                params.auth_type=1;
                post(url, params).then(function(res){
                    if(res.code==0){
                        that.$emit('authorizedSuccessEvent',successMsg);
                    }else{
                        that.$emit('authorizedFailEvent',res.msg);
                    }
                });  
            },
            //课程不授权的操作，页面无选项
            noneAuthorizeEvent(params){
                let that=this,successMsg='设置可见范围成功';
                let url=that.courseAuthorizeUrl;
                params.auth_type=0;
                params.auth_users=[];
                params.auth_departments=[];
                post(url, params).then(function(res){
                    if(res.code==0){
                        that.$emit('authorizedSuccessEvent',successMsg);
                    }else{
                        that.$emit('authorizedFailEvent',res.msg);
                    }
                });  
            },
            //该组件的展示
            show(){
                let that=this;
                that.isShowDialog=true;
                //再次进入弹框可以进行确认操作
                that.hasClicked=false;
                if(!that.allDepartmentTreeMap[that.topNodeUid]){
                    //获取最外面一层的组织结构
                    that.getTreeStruct();
                }
            },
            //该组件的隐藏
            hide(){
               let that=this;
               that.isShowDialog=false; 
            },
            //获取某个部门下面的组织结构
            getSpecificDepetTree(departParams){
                let that=this;
                that.isLoading = true;
                //将组织架构区域的滚动高度重置为0,回到起点状态
                that.treeBoxScrollFunc(0);
                get('/training_api/address_book/direct/index', departParams).then(function(treeResponse){
                    if(treeResponse.code === 0){
                    //组装数据
                        that.handleConstructData(treeResponse.data);
                    }else{
                        that.$message.error(treeResponse.msg);
                    }
                    that.isLoading = false;
                });
            },
            //智慧校园同步账号
            syncAccountSmartCapm(){
                let that=this;
                let params={
                    "department_id":that.topNodeUid
                }
                that.isLoading = true;
                get(that.asyncSmartCampUrl, params).then(function(res){
                    //等于0要刷新当前组织架构列表
                    if(res.code===0){
                        that.$message.info(res.msg);
                        let departParams={
                            department_id:that.topNodeUid,
                            app_id:window.__app_id
                        };
                        that.getSpecificDepetTree(departParams);
                    //其他情况下进行提示即可
                    }else{
                        that.$message.warning(res.msg);
                    }
                    that.isLoading = false;

                }); 
            }
        }
    };
</script>
<style lang="scss">
    .ss-dialog-bg{
        &.ss-assign-dialog{
            :after, :before {
                box-sizing: border-box;
            }
            // .ss-bread-nav > span:last-child .bread-separator {
            //     display: none;
            // }
            .ss-bread-nav{
                margin-right: 18px;
                overflow: hidden;
                >span{
                    min-width:12%;
                    float: left;
                }
                .ss-navItem{
                    cursor: pointer;
                    display: inline-block;
                    max-width: 100px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    vertical-align: middle;
                    &:hover{
                        color:#2a75ed;
                    }
                    &.active{
                        color:#2a75ed;
                    }
                }
                .bread-separator{
                    padding-right: 5px;
                    display: inline-block;
                    vertical-align: middle;
                }
                >span{
                    display:inline-block;
                }
            }
            .ss-org-tree{
                margin-right:24px;
                &.ss-search-tree{
                    padding-top:16px;
                    .ss-org-tree-item{
                        padding-bottom:10px;
                        .ss-org-tree-item-name{
                            max-width:100%;
                            label{
                                overflow: hidden;
                                text-overflow: ellipsis;
                                white-space: nowrap;
                                margin-bottom: 0px;
                                cursor: pointer;
                                font-size: 14px;
                                color: #353535;
                            }
                        }
                    }
                }
            }
            .ss-org-tree-item{
                padding-bottom:20px;
                &.ss-allchecked{
                    height:40px;
                }
                .ss-item-box{
                    &:after{
                        content:"";
                        display:block;
                        clear:both;
                    }  
                }
                &:after{
                    content:"";
                    display:block;
                    clear:both;
                }
                .ss-org-tree-item-name{
                    max-width: 80%;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    float:left;
                    height:20px;
                }
                .ss-next-level{
                    float:right;
                    display:flex;
                    .sense-icon_distribute{
                        line-height: 20px;
                        margin-right: 5px;
                        color:#ddd;
                        &.active{
                            color:#105cfb;
                        }
                    }
                    .ss-levelIcon{
                        color:#105CFB;
                        cursor:pointer;
                        &.ss-levelDisabled{
                            color:#ddd;
                        }
                    }
                }
            }
            .ss-assign-menber-box{
                height:480px;
                font-size:0px;
                .ss-assign-search-menber{
                    margin-right:24px;
                    display: flex;
                    align-items: center;
                    width: 95%;
                    height: 36px;
                    border: 1px solid #eee;
                    border-radius: 2px;
                    line-height: 36px;
                    .icon-icon_search{
                        height: 100%;
                        padding: 0 10px;
                        color: #b2b2b2;
                        font-size: 14px;
                        line-height: 34px;
                    }
                    .ss-assign-search-menber-input{
                        padding-right: 10px;
                        border: none;
                        width: 100%;
                        height: 100%;
                        outline: 0!important;
                    }
                }
                .ss-assign-menber-tree-wrapper{
                    display: inline-block;
                    position:relative;
                    width:360px;
                    height:100%;
                    border-right:1px solid #EEEEEE;
                    vertical-align: top;
                    padding: 20px 0 20px;
                    font-size:14px;
                    .ss-bread-nav{
                        padding:16px 0;
                    }
                    .ss-smartCampSync{
                        position:absolute;
                        background:#fff;
                        color:#999;
                        bottom:0;
                        width: 100%;
                        height: 36px;
                        text-align: center;
                        line-height: 36px;
                        >span:last-child{
                            color:#105CFB;
                            margin-left:10px;
                            cursor: pointer;
                        }
                    }
                    .ss-assign-menber-tree{
                        height:400px;
                        overflow-y: auto;
                        position:relative;
                        .assign-menber-tree-node{
                            display: flex;
                            align-items: center;
                            .assign-department-img{
                                width:18px;
                                height:16px;
                                margin-right:8px;
                            }
                            .assign-menber-img{
                                width:20px;
                                height:20px;
                                border-radius: 50%;
                                margin-right:8px;
                            }
                        }
                    }
                    &.singleTree{
                        .el-tree{
                            overflow-y: auto;
                            height:298px;
                        }
                    }
                }
                .ss-assign-menber-list-wrapper{
                    width:440px;
                    display: inline-block;
                    vertical-align: top;
                    padding-top:20px;
                    font-size:14px;
                    .ss-assign-menber-list{
                        height:436px;
                        overflow-y: auto;
                        padding: 0 24px;
                        white-space: pre-wrap;
                        .ss-assign-choice-wrapper{
                            padding:4px;
                            height: 30px;
                            border:1px solid #eee;
                            border-radius:4px;
                            display:inline-block;
                            margin-right: 10px;
                            margin-bottom: 10px;
                            max-width:100%;
                            >span{
                                overflow: hidden;
                                text-overflow: ellipsis;
                                white-space: nowrap;
                                max-width: 90%;
                                display: inline-block;
                                vertical-align: middle;
                            }
                            .ss-delete-item-icon{
                                margin-left:5px;
                                width:18px;
                                height:18px;
                                cursor: pointer;
                                vertical-align: middle;
                                display: inline-block;
                                &.sense-icon-close{
                                    &:before{
                                        font-size:16px;
                                    }
                                }
                            }
                        }
                        .assign-choice-menber-wrapper{
                            display: flex;
                            height:40px;
                            align-items: center;
                            justify-content: space-between;
                            color:#353535;
                            padding:0 24px;
                            .assign-choice-menber-item{
                                display: inline-flex;
                                align-items: center;
                            }
                            .assign-choice-menber-img{
                                width:20px;
                                height:20px;
                                border-radius: 50%;
                                margin-right:8px;
                            }
                        }
                        .assign-choice-menber-wrapper:hover{
                            background-color:#f9f9f9;
                        }
                    }
                    .assign-choice-title{
                        color:#888888;
                        display: block;
                        padding:0 24px;
                    }
                }
            }
            .ss-dialog-footer{
                .el-button{
                    width:88px;
                }
                .el-button +.el-button{
                    margin-left:16px;
                }
            }
            .dialog-enter, .dialog-leave-to {
                opacity: 0;
            }
            .dialog-enter-active, .dialog-leave-active {
                transition: all 0.2s;
            }
            .dialog-enter-to, .dialog-leave {
                opacity: 1;
            }
            .loading-more .global-widget-loading .loading-content {
                height: 45px;
                margin-top: -22px;
            }
            .loading-more .global-widget-loading .circular {
                width: 22px;
                height: 22px;
            }
            .loading-more .global-widget-loading .loadingText {
                margin: 0;
                font-size: 12px;
            }
            .ss-treeTop{
                position: absolute;
                left: 0;
                top: 0;
                right: 0;
                z-index: -1;
            }
        }
    }
    /*checkbox样式*/
    .ss-dialog-bg{
        &.ss-assign-dialog{
            .ss-select-popup{
                [type=checkbox].ss-filled-in{
                    display: none;
                }
                [type=checkbox]+label {
                    position: relative;
                    padding-left: 22px;
                    cursor: pointer;
                    display: inline-block;
                    font-size: 14px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    -webkit-user-select: none;
                    -moz-user-select: none;
                    -khtml-user-select: none;
                    -ms-user-select: none;
                    color: #353535 !important;
                    height: 18px !important;
                    line-height: 18px !important;
                }

            [type=checkbox]+label:before,
            [type=checkbox]:not(.ss-filled-in)+label:after {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 12px;
                height: 12px;
                z-index: 0;
                border: 1px solid #b2b2b2;
                border-radius: 1px;
                margin-top: 2px;
                transition: .2s
            }

            [type=checkbox]:not(.ss-filled-in)+label:after {
                border: 0;
                -webkit-transform: scale(0);
                -ms-transform: scale(0);
                transform: scale(0)
            }

            [type=checkbox]:not(:checked):disabled+label:before {
                border: none;
                background-color: rgba(0, 0, 0, .26)
            }

            [type=checkbox].tabbed:focus+label:after {
                -webkit-transform: scale(1);
                -ms-transform: scale(1);
                transform: scale(1);
                border: 0;
                border-radius: 50%;
                box-shadow: 0 0 0 10px rgba(0, 0, 0, .1);
                background-color: rgba(0, 0, 0, .1)
            }

            [type=checkbox]:checked+label:before {
                top: -4px;
                left: -5px;
                width: 7px;
                height: 15px;
                border-top: 1px solid transparent;
                border-left: 1px solid transparent;
                border-right: 1px solid #26a69a;
                border-bottom: 1px solid #26a69a;
                -webkit-transform: rotate(40deg);
                -ms-transform: rotate(40deg);
                transform: rotate(40deg);
                -webkit-backface-visibility: hidden;
                backface-visibility: hidden;
                -webkit-transform-origin: 100% 100%;
                -ms-transform-origin: 100% 100%;
                transform-origin: 100% 100%
            }

            [type=checkbox]:checked:disabled+label:before {
                border-right: 1px solid rgba(0, 0, 0, .26);
                border-bottom: 1px solid rgba(0, 0, 0, .26)
            }
            [type=checkbox].ss-filled-in+label:after {
                border-radius: 2px;
                transform: scale(1)!important;
                margin-top:0px;
            }

            [type=checkbox].ss-filled-in+label:after,
            [type=checkbox].ss-filled-in+label:before {
                content: '';
                left: 0;
                position: absolute;
                transition: border .25s, background-color .25s, width .2s .1s, height .2s .1s, top .2s .1s, left .2s .1s;
                z-index: 1
            }

            [type=checkbox].ss-filled-in:not(:checked)+label:before {
                width: 0;
                height: 0;
                border: 3px solid transparent;
                left: 6px;
                top: 3px;
                -webkit-transform: rotateZ(37deg);
                -ms-transform: rotate(37deg);
                transform: rotateZ(37deg);
                -webkit-transform-origin: 20% 40%;
                -ms-transform-origin: 100% 100%;
                transform-origin: 100% 100%
            }

            [type=checkbox].ss-filled-in:not(:checked)+label:after {
                height: 12px;
                width: 12px;
                background-color: transparent;
                border: 1px solid #b2b2b2;
                top: 3px;
                z-index: 0
            }

            [type=checkbox].ss-filled-in:checked+label:before {
                top: 3px;
                left: 0px;
                width: 6px;
                height: 9px;
                border-top: 2px solid transparent;
                border-left: 2px solid transparent;
                border-right: 2px solid #fff;
                border-bottom: 2px solid #fff;
                -webkit-transform: rotateZ(37deg);
                -ms-transform: rotate(37deg);
                transform: rotateZ(37deg);
                -webkit-transform-origin: 100% 100%;
                -ms-transform-origin: 100% 100%;
                transform-origin: 100% 100%;
                box-sizing: border-box;
            }

            [type=checkbox].ss-filled-in:checked+label:after {
                top: 3px;
                width: 12px;
                height: 12px;
                border: 1px solid #2a75ed;
                background-color: #2a75ed;
                z-index: 0
            }
            [type=checkbox].ss-filled-in.tabbed:focus+label:after {
                border-radius: 2px;
                border-color: #5a5a5a;
                background-color: rgba(0, 0, 0, .1)
            }

            [type=checkbox].ss-filled-in.tabbed:checked:focus+label:after {
                border-radius: 2px;
                background-color: #26a69a;
                border-color: #26a69a
            }

            [type=checkbox].ss-filled-in:disabled:not(:checked)+label:before {
                background-color: transparent;
                border: 2px solid transparent;
            }

            [type=checkbox].ss-filled-in:disabled:not(:checked)+label:after {
                border-color: transparent;
                background-color: #EEEEEE;
                border-color: #BFC4CB;
            }

            [type=checkbox].ss-filled-in:disabled:checked+label:before {
                background-color: transparent;
                border-right: 2px solid #BFC4CB;
                border-bottom: 2px solid #BFC4CB;
            }

                [type=checkbox].ss-filled-in:disabled:checked+label:after {
                    background-color: #EEEEEE;
                    border-color: #BFC4CB;
                }
            }
        }
    }
        
</style>
<style scoped lang="scss">
  .ss-dialog-bg {
      &.ss-assign-dialog{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1000;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        .ss-select-popup {
        width: 850px;
        height: 600px;
        margin: 30px 0;
        border-radius: 2px;
        background-color: #fff;
        position: relative;
        text-align: left;
        .ss-dialog-header {
            // width: 100%;
            height: 56px;
            line-height: 56px;
            background: #FAFBFC;
            border-radius: 2px 2px 0px 0px;
            padding-left: 24px;
            font-size: 16px;
            .ss-close-btn {
                width: 24px;
                height: 24px;
                float: right;
                cursor: pointer;
                margin: 16px 16px 0 0;
                display: flex;
                align-items:center;
                justify-content:center;
                font-size: 20px;
                color: #999;
            }
        }
        .ss-dialog-content {
            padding: 0px 20px;

            .ss-mian-content {
            position: relative;
            .operate-line {
                margin-bottom: 12px;
                display: flex;
                align-items: center;
                height: 36px;
                position: relative;
                .input-entity {
                width: 240px;
                height: 36px;
                padding: 8px 20px 8px 36px;
                border: 1px solid #EEEEEE;
                border-radius: 2px;
                background: #ffffff;
                cursor: text;
                margin-left: 375px;
                &::placeholder {
                    color: #B2B2B2;
                }
                &:hover {
                    border-color: #c0c4cc;
                }
                &:focus {
                    border-color: #2a75ed;
                }
                }
                .search-icon {
                position: absolute;
                top: 10px;
                right: 220px;
                width: 16px;
                height: 16px;
                img {
                    width: 100%;
                    height: 100%;
                    float:left;
                }
                }

                .add {
                width:86px;
                height:36px;
                line-height:36px;
                background:rgba(250,251,252,1);
                border-radius:2px;
                border:1px solid rgba(229,231,235,1);
                text-align: center;
                margin-right: 16px;
                cursor: pointer;
                }
                .reflesh {
                width:28px;
                height:36px;
                color:rgba(42,117,237,1);
                line-height:36px;
                cursor: pointer;
                }
            }
            .table-header {
                width: 100%;
                height: 40px;
                line-height: 40px;
                font-weight: bold;
                background: #FAFAFA;
                padding: 0 32px 0 12px;
                display: flex;
                justify-content: space-between;
                span + span {
                text-align: right;
                }
            }
            .table-body {
                width: 100%;
                height: 376px;
                overflow-y: scroll;
                /*侧边滑动*/
                &::-webkit-scrollbar {
                width: 8px;
                height: 10px;
                background-color: rgba(0, 0, 0, 0);
                }
                &::-webkit-scrollbar-track {
                background-color: rgba(0, 0, 0, 0.1);
                }
                &::-webkit-scrollbar-thumb {
                border-radius: 6px;
                background-color: rgba(0, 0, 0, 0.2);
                transition: all 0.4s ease;
                -moz-transition: all 0.4s ease;
                /* Firefox 4 */
                -webkit-transition: all 0.4s ease;
                /* Safari 和 Chrome */
                -o-transition: all 0.4s ease;
                /* Opera */
                }
                &::-webkit-scrollbar-thumb:hover {
                border-radius: 6px;
                background-color: rgba(0, 0, 0, 0.4);
                transition: all 0.4s ease;
                -moz-transition: all 0.4s ease;
                /* Firefox 4 */
                -webkit-transition: all 0.4s ease;
                /* Safari 和 Chrome */
                -o-transition: all 0.4s ease;
                /* Opera */
                }

                .empty-text {
                width: 100%;
                margin-top: 70px;
                text-align: center;
                font-size: 16px;
                img {
                    width: 110px;
                    height: 110px;
                }
                p {
                    margin-top: 10px;
                    text-align: center;
                }
                }
                .loading-more {
                position: relative;
                width: 100%;
                height: 45px;
                margin: 8px 0;
                }
                .information-item-wrapper {
                display: flex;
                align-items:center;
                height:72px;
                border-bottom:1px solid #EEEEEE;
                padding: 0 24px 0 12px;
                cursor: pointer;
                .item-name {
                    width: 65%;
                }
                .item-status {
                    width: 30%;
                    text-align: right;
                    .ing-disc,
                    .Uning-disc,
                    .end-disc {
                    width: 6px;
                    height: 6px;
                    border-radius: 50%;
                    display: inline-block;
                    margin-right: 10px;
                    }

                    .ing-disc {
                    background-color: #2FCE63;
                    }

                    .Uning-disc {
                    background-color: #FB6161;
                    }

                    .end-disc {
                    background-color: #B2B2B2;
                    }
                }
                .item-pointer {
                    width: 5%;
                    img {
                    width: 16px;
                    height: 16px;
                    }
                }
                }
            }

            }
        }
        .ss-dialog-footer {
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 66px;
            background: #FAFBFC;
            border-radius: 0px 0px 2px 2px;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 11000;
            button {
            width: 86px;
            height: 36px;
            line-height: 36px;
            text-align: center;
            border-radius: 2px;
            border: 1px solid #E5E7EB;
            outline: none;
            }
            .ss-cancel-btn {
            margin-right: 10px;
            background: #FAFBFC;
            color: #666666;
            }
            .ss-confirm-btn {
            margin-left: 10px;
            background: #2A75ED;
            color: #FFFFFF;
            border: none;
            &.ss-is-disabled{
                color: #fff;
                background-color: #95baf6;
                border-color: #95baf6;
                cursor: not-allowed;
            }
            }
            .unavailable {
            opacity: 0.3;
            cursor: not-allowed;
            }
        }
        }
      }
  }
</style>
