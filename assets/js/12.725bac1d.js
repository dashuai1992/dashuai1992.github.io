(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{336:function(v,_,t){"use strict";t.r(_);var a=t(4),r=Object(a.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h2",{attrs:{id:"关系型数据库遵循acid规则"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#关系型数据库遵循acid规则"}},[v._v("#")]),v._v(" 关系型数据库遵循ACID规则")]),v._v(" "),_("p",[v._v("事务在英文中是transaction，和现实世界中的交易很类似，它有如下四个特性：")]),v._v(" "),_("p",[v._v("1、A (Atomicity) 原子性")]),v._v(" "),_("p",[v._v("原子性很容易理解，也就是说事务里的所有操作要么全部做完，要么都不做，事务成功的条件是事务里的所有操作都成功，只要有一个操作失败，整个事务就失败，需要回滚。")]),v._v(" "),_("p",[v._v("比如银行转账，从A账户转100元至B账户，分为两个步骤：1）从A账户取100元；2）存入100元至B账户。这两步要么一起完成，要么一起不完成，如果只完成第一步，第二步失败，钱会莫名其妙少了100元。")]),v._v(" "),_("p",[v._v("2、C (Consistency) 一致性")]),v._v(" "),_("p",[v._v("一致性也比较容易理解，也就是说数据库要一直处于一致的状态，事务的运行不会改变数据库原本的一致性约束。")]),v._v(" "),_("p",[v._v("例如现有完整性约束a+b=10，如果一个事务改变了a，那么必须得改变b，使得事务结束后依然满足a+b=10，否则事务失败。")]),v._v(" "),_("p",[v._v("3、I (Isolation) 独立性")]),v._v(" "),_("p",[v._v("所谓的独立性是指并发的事务之间不会互相影响，如果一个事务要访问的数据正在被另外一个事务修改，只要另外一个事务未提交，它所访问的数据就不受未提交事务的影响。")]),v._v(" "),_("p",[v._v("比如现在有个交易是从A账户转100元至B账户，在这个交易还未完成的情况下，如果此时B查询自己的账户，是看不到新增加的100元的。")]),v._v(" "),_("p",[v._v("4、D (Durability) 持久性")]),v._v(" "),_("p",[v._v("持久性是指一旦事务提交后，它所做的修改将会永久的保存在数据库上，即使出现宕机也不会丢失。")]),v._v(" "),_("h2",{attrs:{id:"分布式计算的优点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#分布式计算的优点"}},[v._v("#")]),v._v(" 分布式计算的优点")]),v._v(" "),_("p",[_("strong",[v._v("可靠性（容错） ：")])]),v._v(" "),_("p",[v._v("分布式计算系统中的一个重要的优点是可靠性。一台服务器的系统崩溃并不影响到其余的服务器。")]),v._v(" "),_("p",[_("strong",[v._v("可扩展性：")])]),v._v(" "),_("p",[v._v("在分布式计算系统可以根据需要增加更多的机器。")]),v._v(" "),_("p",[_("strong",[v._v("资源共享：")])]),v._v(" "),_("p",[v._v("共享数据是必不可少的应用，如银行，预订系统。")]),v._v(" "),_("p",[_("strong",[v._v("灵活性：")])]),v._v(" "),_("p",[v._v("由于该系统是非常灵活的，它很容易安装，实施和调试新的服务。")]),v._v(" "),_("p",[_("strong",[v._v("更快的速度：")])]),v._v(" "),_("p",[v._v("分布式计算系统可以有多台计算机的计算能力，使得它比其他系统有更快的处理速度。")]),v._v(" "),_("p",[_("strong",[v._v("开放系统：")])]),v._v(" "),_("p",[v._v("由于它是开放的系统，本地或者远程都可以访问到该服务。")]),v._v(" "),_("p",[_("strong",[v._v("更高的性能：")])]),v._v(" "),_("p",[v._v("相较于集中式计算机网络集群可以提供更高的性能（及更好的性价比）。")]),v._v(" "),_("h2",{attrs:{id:"rdbms-vs-nosql"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#rdbms-vs-nosql"}},[v._v("#")]),v._v(" RDBMS vs NoSQL")]),v._v(" "),_("p",[_("strong",[v._v("RDBMS")])]),v._v(" "),_("ul",[_("li",[v._v("高度组织化结构化数据")]),v._v(" "),_("li",[v._v("结构化查询语言（SQL） (SQL)")]),v._v(" "),_("li",[v._v("数据和关系都存储在单独的表中。")]),v._v(" "),_("li",[v._v("数据操纵语言，数据定义语言")]),v._v(" "),_("li",[v._v("严格的一致性")]),v._v(" "),_("li",[v._v("基础事务")])]),v._v(" "),_("p",[_("strong",[v._v("NoSQL")])]),v._v(" "),_("ul",[_("li",[v._v("代表着不仅仅是SQL")]),v._v(" "),_("li",[v._v("没有声明性查询语言")]),v._v(" "),_("li",[v._v("没有预定义的模式")])]),v._v(" "),_("p",[v._v("-键 - 值对存储，列存储，文档存储，图形数据库")]),v._v(" "),_("ul",[_("li",[v._v("最终一致性，而非ACID属性")]),v._v(" "),_("li",[v._v("非结构化和不可预知的数据")]),v._v(" "),_("li",[v._v("CAP定理")]),v._v(" "),_("li",[v._v("高性能，高可用性和可伸缩性")])]),v._v(" "),_("h2",{attrs:{id:"cap定理-cap-theorem"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#cap定理-cap-theorem"}},[v._v("#")]),v._v(" CAP定理（CAP theorem）")]),v._v(" "),_("p",[v._v("在计算机科学中, CAP定理（CAP theorem）, 又被称作 布鲁尔定理（Brewer's theorem）, 它指出对于一个分布式计算系统来说，不可能同时满足以下三点:")]),v._v(" "),_("ul",[_("li",[_("strong",[v._v("一致性(Consistency)")]),v._v(" (所有节点在同一时间具有相同的数据)")]),v._v(" "),_("li",[_("strong",[v._v("可用性(Availability)")]),v._v(" (保证每个请求不管成功或者失败都有响应)")]),v._v(" "),_("li",[_("strong",[v._v("分隔容忍(Partition tolerance)")]),v._v(" (系统中任意信息的丢失或失败不会影响系统的继续运作)")])]),v._v(" "),_("p",[v._v("CAP理论的核心是：一个分布式系统不可能同时很好的满足一致性，可用性和分区容错性这三个需求，最多只能同时较好的满足两个。")]),v._v(" "),_("p",[v._v("因此，根据 CAP 原理将 NoSQL 数据库分成了满足 CA 原则、满足 CP 原则和满足 AP 原则三 大类：")]),v._v(" "),_("ul",[_("li",[v._v("CA - 单点集群，满足一致性，可用性的系统，通常在可扩展性上不太强大。")]),v._v(" "),_("li",[v._v("CP - 满足一致性，分区容忍性的系统，通常性能不是特别高。")]),v._v(" "),_("li",[v._v("AP - 满足可用性，分区容忍性的系统，通常可能对一致性要求低一些。")])]),v._v(" "),_("h2",{attrs:{id:"nosql的优点-缺点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#nosql的优点-缺点"}},[v._v("#")]),v._v(" NoSQL的优点/缺点")]),v._v(" "),_("p",[v._v("优点:")]),v._v(" "),_("ul",[_("li",[v._v("高可扩展性")]),v._v(" "),_("li",[v._v("分布式计算")]),v._v(" "),_("li",[v._v("低成本")]),v._v(" "),_("li",[v._v("架构的灵活性，半结构化数据")]),v._v(" "),_("li",[v._v("没有复杂的关系")])]),v._v(" "),_("p",[v._v("缺点:")]),v._v(" "),_("ul",[_("li",[v._v("没有标准化")]),v._v(" "),_("li",[v._v("有限的查询功能（到目前为止）")]),v._v(" "),_("li",[v._v("最终一致是不直观的程序")])]),v._v(" "),_("p",[v._v("NoSQL 数据库分类：")]),v._v(" "),_("table",[_("thead",[_("tr",[_("th",[v._v("类型")]),v._v(" "),_("th",[v._v("部分特点")]),v._v(" "),_("th",[v._v("代表")])])]),v._v(" "),_("tbody",[_("tr",[_("td",[v._v("列存储")]),v._v(" "),_("td",[v._v("Hbase   Cassandra   Hypertable")]),v._v(" "),_("td",[v._v("顾名思义，是按列存储数据的。最大的特点是方便存储结构化和半结构化数据，方便做数据压缩，对针对某一列或者某几列的查询有非常大的IO优势。")])]),v._v(" "),_("tr",[_("td",[v._v("文档存储")]),v._v(" "),_("td",[v._v("MongoDB   CouchDB")]),v._v(" "),_("td",[v._v("文档存储一般用类似json的格式存储，存储的内容是文档型的。这样也就有机会对某些字段建立索引，实现关系数据库的某些功能。")])]),v._v(" "),_("tr",[_("td",[v._v("key-value存储")]),v._v(" "),_("td",[v._v("Tokyo Cabinet / Tyrant   Berkeley DB   MemcacheDB   Redis")]),v._v(" "),_("td",[v._v("可以通过key快速查询到其value。一般来说，存储不管value的格式，照单全收。（Redis包含了其他功能）")])]),v._v(" "),_("tr",[_("td",[v._v("图存储")]),v._v(" "),_("td",[v._v("Neo4J   FlockDB")]),v._v(" "),_("td",[v._v("图形关系的最佳存储。使用传统关系数据库来解决的话性能低下，而且设计使用不方便。")])]),v._v(" "),_("tr",[_("td",[v._v("对象存储")]),v._v(" "),_("td",[v._v("db4o   Versant")]),v._v(" "),_("td",[v._v("通过类似面向对象语言的语法操作数据库，通过对象的方式存取数据。")])]),v._v(" "),_("tr",[_("td",[v._v("xml数据库")]),v._v(" "),_("td",[v._v("Berkeley DB XML   BaseX")]),v._v(" "),_("td",[v._v("高效的存储XML数据，并支持XML的内部查询语法，比如XQuery,Xpath。")])])])])])}),[],!1,null,null,null);_.default=r.exports}}]);