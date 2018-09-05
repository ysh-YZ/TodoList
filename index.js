window.onload=function () {
    let arr1,arr2;
    arr1=localStorage.arr1?localStorage.arr1.split(","):[];
    arr2=localStorage.arr2?localStorage.arr2.split(","):[];
    // let arr1=["js","java","python","css"];
    // let arr2=["js","java","python"];
    let con1=document.querySelector("#con1");
    let con2=document.querySelector("#con2");
    let input=document.querySelector("#input");
    let num1=document.querySelector("#num1");
    // console.log(num1);
    let num2=document.querySelector("#num2");
    // console.log(num2);
    function Update(){
        localStorage.arr1=arr1.join(",");
        localStorage.arr2=arr2.join(",");
        con1.innerHTML="";
        con2.innerHTML="";
        num1.innerHTML=`${arr1.length}`;
        num2.innerHTML=`${arr2.length}`;

    arr1.forEach((item,index)=>{
        let box=document.createElement("div");
        box.className="box";
        let str=`<input type="checkbox"><p>${item}</p><div class="del"></div>`;
        // console.log(str);
        box.innerHTML=str;
        // console.log(box);
        con1.appendChild(box);

        //arr1的值转向给arr2开始
        let input2=document.querySelectorAll("#con1 input")
        console.log(input2);
        input2[index].onclick=function () {
            arr1.splice(index,1);
            arr2.unshift(item);
            Update();
        }
        //arr1的值转向给arr2结束

    })
    arr2.forEach((item,index)=>{
        console.log(arr2);
        let box=document.createElement("div");
        box.className="box";

        let str=`<input type="checkbox" checked="checked"><p>${item}</p><div class="del"></div>`;
        //input的checked="checked"也就是给对勾选择框一个默认样式
        // console.log(str);
        box.innerHTML=str;
        // console.log(box);
        con2.appendChild(box);
        //arr2的值转向给arr1开始
        let input3=document.querySelectorAll("#con2 input")
        console.log(input3);
        input3[index].onclick=function () {
            arr2.splice(index,1);
            arr1.push(item);
            Update();
        }
        //arr2的值转向给arr1结束

    })
        //删除开始
        let del =document.querySelectorAll(".conbox .del");
        console.log(del);
        del.forEach((element,index)=>{
            element.onclick=function () {
                let father=element.parentNode;
                // 这个时候father便是删除按钮的父节点box
                father.parentNode.removeChild(father);
                //在box的父节点下删除box
                arr1.splice(index,1);
                //num的数字添加变化开始
                num1.innerHTML=`${arr1.length}`;
                //num的数字添加变化结束
                Update();
            }
        })
        //删除1结束
        //删除2开始
        let del1 =document.querySelectorAll(".conbox1 .del");
        console.log(del1);
        del1.forEach((element,index)=>{
            element.onclick=function () {
                let father=element.parentNode;
                // 这个时候father便是删除按钮的父节点box
                father.parentNode.removeChild(father);
                //在box的父节点下删除box
                arr2.splice(index,1);
                //num的数字添加变化开始
                num2.innerHTML=`${arr2.length}`;
                //num的数字添加变化结束
                Update();
            }
        })
        //删除2结束
    }
    //函数结束
    Update();

    input.onkeydown=function (e) {
        if(e.keyCode==13&&this.value!=""){
            arr1.unshift(this.value);
            this.value="";
            Update();
        }
    }

    //双击修改其中内容开始
    let p=document.querySelectorAll("p");
        console.log(p);
        //双击
        p.forEach((item,index)=>{
            item.ondblclick=function () {
                let input1=document.createElement("input");
                input1.style="width:400px;height:26px;float:left; outline: none;  border: 1px solid #676767;margin-top: 2px;   text-indent: 1em;"
                let text = item.innerText;
                item.innerText="";
                item.value=text;
                input1.onblur=function(){
                    value=this.value;
                    item.innerText=value;
                }
                item.appendChild(input1);
                input1.focus();
            }


        })
    //双击修改其中内容结束

}