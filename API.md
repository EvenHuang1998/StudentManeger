数据：

### /statistical打开之后默认第一个系

向后端`/getDeparList`请求数据

```json
{
  "depart":[
    {
      "dep_name":"通信工程",
      "dep_no":"1603000"
    },{
      "dep_name":"电信工程",
      "dep_no":"1603000"
    },{
      "dep_name":"电信工程",
      "dep_no":"1603000"
    },{
      "dep_name":"电信工程",
      "dep_no":"1603000"
    }
  ]
}
```

向后端`/getDeparInfo`请求数据

~~~json
{
   "dep_name":"计算机科学与技术",
   "dep_loc":"行政楼111",
   "dep_no":"1603000",
   "dep_dorm":"丁香",
   "dep_num":11,
   "majorList":{
      "major":[
         {	
            "maj_name":"软件工程",
            "maj_no":"1603011"
         },
         {
            "maj_name":"软件工程",
            "maj_no":"1603011"
         },
         {
            "maj_name":"软件工程",
            "maj_no":"1603011"
         },
         {
            "maj_name":"软件工程",
            "maj_no":"1603011"
         }
		]
	}
}
~~~

向后端`/deleteMajor/{maj_no}`发送删除指令：

- major_no代表删除专业的专业号

后端返回状态码：200代表成功，400代表失败

~~~json
{
	"status":"200"
}
~~~

向后端`/addMajor`发送添加专业的指令,参数如下：

~~~json
{
      "maj_no":"1600000",
      "dep_no":"1602120",
      "maj_name":"计算机"
}
~~~

### 显示专业界面：

首先请求对应专业的相关信息

向后端`/getMajorInfo/{maj_no}`请求

- maj_no代表所查专业的专业号

~~~json
{
   "maj_no":"160200",
   "maj_name":"软件工程",
   "class_num":20,
   "classList":{
      "class":[
         {
         "cla_no":"1603022",
         "cla_year":2018,
         "cla_peo":20	
         },{
         "cla_no":"1603022",
         "cla_year":2018,
         "cla_peo":20	
         }
      ]
   }
}
~~~

添加班级：

向后端`/addClass`发送添加班级的指令，参数如下:

~~~json
{
           "maj_no":"1603000",
           "cla_no":"1603022",
           "cla_year":2018
}
~~~

删除班级：

向后端`/deleteClass/{cla_no}`发送删除班级的指令:

不能编辑班级信息



### 班级显示界面：

向后端`/getClassInfo/{cla_no}`请求班级信息

~~~json
{
        "dep_name":"计算机",
        "maj_name":"计算机",
        "cla_no":"1603022",
        "cla_year":2018,
        "cla_peo":20,
   		  "dep_dorm":"丁香",
      	"studentList":{
            "student":[
               {
                  "stu_no":"16040600000",
                  "stu_name":"liming",
                  "stu_age":18
               }
            ]
			}
}
~~~

向后端`/addStudent`发送一个增加指令。参数如下：

~~~json
{
   	"stu_name":"limign",
   	"cla_no":"1602001",
   	"stu_no":"16040610213",
   	"stu_age":"18"
}
~~~

向后端`/deleteStudent/{stu_no}`发送删除指令：

向后端`/updateStudent`发送更新学生信息指令，相见增加指令：

向后端`/checkStudent/{stu_no}`发送查看学生信息的指令：

~~~json
{
   	"stu_name":"limign",
   	"cla_no":"1602001",
   	"stu_no":"16040610213",
   	"maj_name":"软件工程",
   	"stu_age":"18",
   	"cla_year":2016,
   	"dep_dorm":"丁香",
   	"cluList":{
   		"club":[
            {"clu_name":"科协"},
            {"clu_name":"科协"},
            {"clu_name":"科协"},
            {"clu_name":"科协"}
   		]
   	}
}
~~~





### 学会信息页面：

向后端`/clubList`请求学会信息

~~~json
{
   "items":[
      {
         "clu_name":"java",
         "clu_no":1600000
      },{
         "clu_name":"java",
         "clu_no":1600000
      },{
         "clu_name":"java",
         "clu_no":1600000
      }
   ]
}

~~~

向后端`/deleteClub/{clu_no}`发送删除学会的指令：



### 查看学会的详细信息：
向后端`/checkClub/{clu_no}`发送查看学会信息的指令：

~~~
{
   "clu_name":"java",
   "clu_no":"1600000",
   "clu_year":2018，
   "clu_loc":"丁香11号楼",
   "clu_peo":"18",
   "stu_list":{
      "student":[
         {
            "stu_name":"limign",
            "stu_no":"16040610002",
            "cla_no":"1602011",
            "stu_age":18
         }
      ]
   }
}
~~~

增加`/addClueMem`学会成员,参数如下：

~~~json
{
            "stu_name":"limign",
            "stu_no":"16040610002",
            "cla_no":"1602011",
            "stu_age":18,
            "clu_no":"1600000"
}
~~~

增加`/deleteClueMem/{clu_no}/{stu_no}`学会成员















