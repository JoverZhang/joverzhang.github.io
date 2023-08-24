(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{289:function(s,t,a){"use strict";a.r(t);var e=a(14),n=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"frontmatter-title"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[s._v("#")]),s._v(" "+s._s(s.$frontmatter.title))]),s._v(" "),t("h2",{attrs:{id:"get-started"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#get-started"}},[s._v("#")]),s._v(" Get Started")]),s._v(" "),t("p",[s._v("Create network:")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" network create "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" bridge bigdata "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--subnet")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.10")]),s._v(".0.0/16\n")])])]),t("p",[s._v("Create compose file:")]),s._v(" "),t("div",{staticClass:"language-yaml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("version")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'2'")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("networks")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("bigdata")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("external")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("true")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("services")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("zookeeper")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'bitnami/zookeeper:latest'")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("environment")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" ALLOW_ANONYMOUS_LOGIN=yes\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("networks")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("bigdata")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ipv4_address")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 10.10.2.1\n\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("kafka")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'bitnami/kafka:latest'")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("environment")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" ALLOW_PLAINTEXT_LISTENER=yes\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" KAFKA_CFG_ZOOKEEPER_CONNECT=zookeeper"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2181")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("networks")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("bigdata")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ipv4_address")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 10.10.2.2\n")])])]),t("h2",{attrs:{id:"tools"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tools"}},[s._v("#")]),s._v(" Tools")]),s._v(" "),t("h3",{attrs:{id:"create-topic"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-topic"}},[s._v("#")]),s._v(" Create Topic")]),s._v(" "),t("blockquote",[t("p",[s._v("topic: test"),t("br"),s._v("\npartitions: 9"),t("br"),s._v("\nreplication-factor: 3")])]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("kafka-topics.sh --bootstrap-server "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.10")]),s._v(".2.1:9092,10.10.2.2:9092,10.10.2.3:9092 "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--topic")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--create")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--partitions")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v(" --replication-factor "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n")])])]),t("p",[s._v("topic describe:")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("kafka-topics.sh --bootstrap-server "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.10")]),s._v(".2.1:9092,10.10.2.2:9092,10.10.2.3:9092 "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--topic")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--describe")]),s._v("\n\nTopic: "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\tTopicId: 3jstEOR0Rc2cqyAJoUtTtA\tPartitionCount: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v("\tReplicationFactor: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\tConfigs:\n\tTopic: "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\tPartition: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\tLeader: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1003")]),s._v("\tReplicas: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1003,1002")]),s._v(",1001\tIsr: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1003,1002")]),s._v(",1001\n\tTopic: "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\tPartition: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\tLeader: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1002")]),s._v("\tReplicas: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1002,1001")]),s._v(",1003\tIsr: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1002,1001")]),s._v(",1003\n\tTopic: "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\tPartition: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\tLeader: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1001")]),s._v("\tReplicas: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1001,1003")]),s._v(",1002\tIsr: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1001,1003")]),s._v(",1002\n\tTopic: "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\tPartition: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\tLeader: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1003")]),s._v("\tReplicas: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1003,1001")]),s._v(",1002\tIsr: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1003,1001")]),s._v(",1002\n\tTopic: "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\tPartition: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("\tLeader: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1002")]),s._v("\tReplicas: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1002,1003")]),s._v(",1001\tIsr: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1002,1003")]),s._v(",1001\n\tTopic: "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\tPartition: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("\tLeader: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1001")]),s._v("\tReplicas: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1001,1002")]),s._v(",1003\tIsr: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1001,1002")]),s._v(",1003\n\tTopic: "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\tPartition: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v("\tLeader: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1003")]),s._v("\tReplicas: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1003,1002")]),s._v(",1001\tIsr: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1003,1002")]),s._v(",1001\n\tTopic: "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\tPartition: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v("\tLeader: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1002")]),s._v("\tReplicas: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1002,1001")]),s._v(",1003\tIsr: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1002,1001")]),s._v(",1003\n\tTopic: "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\tPartition: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v("\tLeader: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1001")]),s._v("\tReplicas: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1001,1003")]),s._v(",1002\tIsr: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1001,1003")]),s._v(",1002\n")])])]),t("h3",{attrs:{id:"producer-console"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#producer-console"}},[s._v("#")]),s._v(" Producer Console")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("kafka-console-producer.sh --bootstrap-server "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.10")]),s._v(".2.1:9092,10.10.2.2:9092,10.10.2.3:9092 "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--topic")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\n")])])]),t("h3",{attrs:{id:"consumer-console"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#consumer-console"}},[s._v("#")]),s._v(" Consumer Console")]),s._v(" "),t("blockquote",[t("p",[s._v("group: test1")])]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("kafka-console-consumer.sh --bootstrap-server "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.10")]),s._v(".2.1:9092,10.10.2.2:9092,10.10.2.3:9092 "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--topic")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--group")]),s._v(" test1\n")])])]),t("h3",{attrs:{id:"consumer-group-describe"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#consumer-group-describe"}},[s._v("#")]),s._v(" Consumer Group Describe")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("kafka-consumer-groups.sh --bootstrap-server "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.10")]),s._v(".2.1:9092,10.10.2.2:9092,10.10.2.3:9092 "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--describe")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--group")]),s._v(" test1\n\nGROUP           TOPIC           PARTITION  CURRENT-OFFSET  LOG-END-OFFSET  LAG             CONSUMER-ID                                           HOST            CLIENT-ID\ntest1           "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("            "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v("          "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v("              "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v("              "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("               console-consumer-a4b78ca7-b16f-4466-ae94-4f03c95cf5ce /10.10.2.1      console-consumer\ntest1           "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("            "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("               "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("               "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("               console-consumer-a4b78ca7-b16f-4466-ae94-4f03c95cf5ce /10.10.2.1      console-consumer\ntest1           "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("            "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v("          "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("               "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("               "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("               console-consumer-a4b78ca7-b16f-4466-ae94-4f03c95cf5ce /10.10.2.1      console-consumer\ntest1           "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("            "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("          "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("               "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("               "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("               console-consumer-a4b78ca7-b16f-4466-ae94-4f03c95cf5ce /10.10.2.1      console-consumer\ntest1           "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("            "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v("          "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("               "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("               "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("               console-consumer-a4b78ca7-b16f-4466-ae94-4f03c95cf5ce /10.10.2.1      console-consumer\ntest1           "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("            "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("          "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("               "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("               "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("               console-consumer-a4b78ca7-b16f-4466-ae94-4f03c95cf5ce /10.10.2.1      console-consumer\ntest1           "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("            "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("          "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("               "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("               "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("               console-consumer-a4b78ca7-b16f-4466-ae94-4f03c95cf5ce /10.10.2.1      console-consumer\ntest1           "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("            "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("          "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("               "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("               "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("               console-consumer-a4b78ca7-b16f-4466-ae94-4f03c95cf5ce /10.10.2.1      console-consumer\ntest1           "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("            "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("          "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("               "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("               "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("               console-consumer-a4b78ca7-b16f-4466-ae94-4f03c95cf5ce /10.10.2.1      console-consumer\n")])])]),t("h2",{attrs:{id:"bibliography"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bibliography"}},[s._v("#")]),s._v(" Bibliography")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://www.conduktor.io/kafka/kafka-topics-choosing-the-replication-factor-and-partitions-count/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Kafka Topics Choosing the Replication Factor and Partition Count"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://developer20.com/when-you-can-nose-messages-in-kafka/#:~:text=Kafka%20is%20speedy%20and%20fault,and%20how%20to%20prevent%20it.",target:"_blank",rel:"noopener noreferrer"}},[s._v("When you can lose messages in Kafka"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=n.exports}}]);