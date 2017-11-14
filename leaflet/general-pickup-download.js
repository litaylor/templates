var pickupData = precinctsData;
var officialVotes = [{"precinct_name":101,"baker_total":574,"kriseman_total":753,"total":1327},
{"precinct_name":102,"baker_total":285,"kriseman_total":416,"total":701},
{"precinct_name":103,"baker_total":171,"kriseman_total":252,"total":423},
{"precinct_name":104,"baker_total":307,"kriseman_total":440,"total":747},
{"precinct_name":105,"baker_total":529,"kriseman_total":829,"total":1358},
{"precinct_name":106,"baker_total":216,"kriseman_total":293,"total":509},
{"precinct_name":107,"baker_total":360,"kriseman_total":450,"total":810},
{"precinct_name":108,"baker_total":525,"kriseman_total":566,"total":1091},
{"precinct_name":109,"baker_total":369,"kriseman_total":427,"total":796},
{"precinct_name":110,"baker_total":49,"kriseman_total":101,"total":150},
{"precinct_name":111,"baker_total":132,"kriseman_total":172,"total":304},
{"precinct_name":112,"baker_total":297,"kriseman_total":359,"total":656},
{"precinct_name":113,"baker_total":308,"kriseman_total":224,"total":532},
{"precinct_name":114,"baker_total":237,"kriseman_total":193,"total":430},
{"precinct_name":115,"baker_total":262,"kriseman_total":172,"total":434},
{"precinct_name":116,"baker_total":207,"kriseman_total":267,"total":474},
{"precinct_name":117,"baker_total":186,"kriseman_total":143,"total":329},
{"precinct_name":118,"baker_total":175,"kriseman_total":447,"total":622},
{"precinct_name":119,"baker_total":320,"kriseman_total":343,"total":663},
{"precinct_name":120,"baker_total":424,"kriseman_total":412,"total":836},
{"precinct_name":121,"baker_total":46,"kriseman_total":137,"total":183},
{"precinct_name":122,"baker_total":15,"kriseman_total":34,"total":49},
{"precinct_name":123,"baker_total":574,"kriseman_total":1108,"total":1682},
{"precinct_name":125,"baker_total":196,"kriseman_total":430,"total":626},
{"precinct_name":126,"baker_total":98,"kriseman_total":133,"total":231},
{"precinct_name":127,"baker_total":175,"kriseman_total":701,"total":876},
{"precinct_name":128,"baker_total":284,"kriseman_total":615,"total":899},
{"precinct_name":129,"baker_total":332,"kriseman_total":675,"total":1007},
{"precinct_name":130,"baker_total":750,"kriseman_total":856,"total":1606},
{"precinct_name":131,"baker_total":217,"kriseman_total":213,"total":430},
{"precinct_name":132,"baker_total":193,"kriseman_total":196,"total":389},
{"precinct_name":133,"baker_total":251,"kriseman_total":286,"total":537},
{"precinct_name":134,"baker_total":172,"kriseman_total":446,"total":618},
{"precinct_name":135,"baker_total":775,"kriseman_total":1157,"total":1932},
{"precinct_name":136,"baker_total":457,"kriseman_total":521,"total":978},
{"precinct_name":137,"baker_total":333,"kriseman_total":427,"total":760},
{"precinct_name":138,"baker_total":990,"kriseman_total":577,"total":1567},
{"precinct_name":139,"baker_total":282,"kriseman_total":280,"total":562},
{"precinct_name":140,"baker_total":936,"kriseman_total":939,"total":1875},
{"precinct_name":141,"baker_total":389,"kriseman_total":611,"total":1000},
{"precinct_name":142,"baker_total":639,"kriseman_total":480,"total":1119},
{"precinct_name":143,"baker_total":735,"kriseman_total":385,"total":1120},
{"precinct_name":144,"baker_total":1176,"kriseman_total":778,"total":1954},
{"precinct_name":145,"baker_total":651,"kriseman_total":497,"total":1148},
{"precinct_name":146,"baker_total":230,"kriseman_total":222,"total":452},
{"precinct_name":147,"baker_total":230,"kriseman_total":166,"total":396},
{"precinct_name":150,"baker_total":571,"kriseman_total":487,"total":1058},
{"precinct_name":151,"baker_total":298,"kriseman_total":252,"total":550},
{"precinct_name":152,"baker_total":328,"kriseman_total":292,"total":620},
{"precinct_name":153,"baker_total":889,"kriseman_total":676,"total":1565},
{"precinct_name":154,"baker_total":447,"kriseman_total":238,"total":685},
{"precinct_name":155,"baker_total":650,"kriseman_total":553,"total":1203},
{"precinct_name":156,"baker_total":539,"kriseman_total":479,"total":1018},
{"precinct_name":157,"baker_total":157,"kriseman_total":143,"total":300},
{"precinct_name":161,"baker_total":293,"kriseman_total":399,"total":692},
{"precinct_name":162,"baker_total":364,"kriseman_total":506,"total":870},
{"precinct_name":165,"baker_total":0,"kriseman_total":0,"total":0},
{"precinct_name":200,"baker_total":571,"kriseman_total":328,"total":899},
{"precinct_name":201,"baker_total":613,"kriseman_total":526,"total":1139},
{"precinct_name":202,"baker_total":669,"kriseman_total":484,"total":1153},
{"precinct_name":203,"baker_total":240,"kriseman_total":216,"total":456},
{"precinct_name":204,"baker_total":124,"kriseman_total":77,"total":201},
{"precinct_name":205,"baker_total":246,"kriseman_total":217,"total":463},
{"precinct_name":211,"baker_total":153,"kriseman_total":145,"total":298},
{"precinct_name":213,"baker_total":187,"kriseman_total":247,"total":434},
{"precinct_name":215,"baker_total":463,"kriseman_total":231,"total":694},
{"precinct_name":216,"baker_total":428,"kriseman_total":471,"total":899},
{"precinct_name":217,"baker_total":1,"kriseman_total":1,"total":2},
{"precinct_name":219,"baker_total":237,"kriseman_total":304,"total":541},
{"precinct_name":220,"baker_total":157,"kriseman_total":292,"total":449},
{"precinct_name":221,"baker_total":310,"kriseman_total":398,"total":708},
{"precinct_name":222,"baker_total":747,"kriseman_total":788,"total":1535},
{"precinct_name":223,"baker_total":15,"kriseman_total":35,"total":50},
{"precinct_name":224,"baker_total":190,"kriseman_total":196,"total":386},
{"precinct_name":225,"baker_total":249,"kriseman_total":435,"total":684},
{"precinct_name":226,"baker_total":150,"kriseman_total":158,"total":308},
{"precinct_name":227,"baker_total":291,"kriseman_total":344,"total":635},
{"precinct_name":228,"baker_total":102,"kriseman_total":232,"total":334},
{"precinct_name":229,"baker_total":407,"kriseman_total":401,"total":808},
{"precinct_name":230,"baker_total":455,"kriseman_total":313,"total":768},
{"precinct_name":231,"baker_total":577,"kriseman_total":557,"total":1134},
{"precinct_name":232,"baker_total":495,"kriseman_total":432,"total":927},
{"precinct_name":233,"baker_total":323,"kriseman_total":390,"total":713},
{"precinct_name":234,"baker_total":292,"kriseman_total":252,"total":544},
{"precinct_name":235,"baker_total":468,"kriseman_total":430,"total":898},
{"precinct_name":236,"baker_total":51,"kriseman_total":49,"total":100},
{"precinct_name":237,"baker_total":30,"kriseman_total":30,"total":60},
{"precinct_name":239,"baker_total":547,"kriseman_total":579,"total":1126},
{"precinct_name":240,"baker_total":358,"kriseman_total":275,"total":633},
{"precinct_name":241,"baker_total":454,"kriseman_total":408,"total":862},
{"precinct_name":275,"baker_total":146,"kriseman_total":136,"total":282}];

var primaryPrecinctVotes = [
  {"precinct_name":101,"precinct_registered":3646,"baker_total":464,"cates_total":14,"congemi_total":0,"kriseman_total":600,"lassiter_total":17,"nevel_total":30,"total":1125,"third_party":61,"kriseman_margin":136,"baker_margin":-136,"turnout_pct":0.31},
  {"precinct_name":102,"precinct_registered":1768,"baker_total":259,"cates_total":4,"congemi_total":0,"kriseman_total":322,"lassiter_total":8,"nevel_total":15,"total":608,"third_party":27,"kriseman_margin":63,"baker_margin":-63,"turnout_pct":0.34},
  {"precinct_name":103,"precinct_registered":691,"baker_total":149,"cates_total":3,"congemi_total":1,"kriseman_total":215,"lassiter_total":1,"nevel_total":5,"total":374,"third_party":10,"kriseman_margin":66,"baker_margin":-66,"turnout_pct":0.54},
  {"precinct_name":104,"precinct_registered":1700,"baker_total":257,"cates_total":12,"congemi_total":1,"kriseman_total":372,"lassiter_total":12,"nevel_total":9,"total":663,"third_party":34,"kriseman_margin":115,"baker_margin":-115,"turnout_pct":0.39},
  {"precinct_name":105,"precinct_registered":3529,"baker_total":478,"cates_total":11,"congemi_total":5,"kriseman_total":623,"lassiter_total":13,"nevel_total":27,"total":1157,"third_party":56,"kriseman_margin":145,"baker_margin":-145,"turnout_pct":0.33},
  {"precinct_name":106,"precinct_registered":769,"baker_total":183,"cates_total":1,"congemi_total":0,"kriseman_total":252,"lassiter_total":0,"nevel_total":2,"total":438,"third_party":3,"kriseman_margin":69,"baker_margin":-69,"turnout_pct":0.57},
  {"precinct_name":107,"precinct_registered":1842,"baker_total":310,"cates_total":7,"congemi_total":1,"kriseman_total":344,"lassiter_total":3,"nevel_total":10,"total":675,"third_party":21,"kriseman_margin":34,"baker_margin":-34,"turnout_pct":0.37},
  {"precinct_name":108,"precinct_registered":2736,"baker_total":390,"cates_total":13,"congemi_total":3,"kriseman_total":444,"lassiter_total":11,"nevel_total":30,"total":891,"third_party":57,"kriseman_margin":54,"baker_margin":-54,"turnout_pct":0.33},
  {"precinct_name":109,"precinct_registered":2210,"baker_total":332,"cates_total":13,"congemi_total":3,"kriseman_total":311,"lassiter_total":7,"nevel_total":35,"total":701,"third_party":58,"kriseman_margin":-21,"baker_margin":21,"turnout_pct":0.32},
  {"precinct_name":110,"precinct_registered":278,"baker_total":39,"cates_total":2,"congemi_total":2,"kriseman_total":78,"lassiter_total":3,"nevel_total":1,"total":125,"third_party":8,"kriseman_margin":39,"baker_margin":-39,"turnout_pct":0.45},
  {"precinct_name":111,"precinct_registered":546,"baker_total":119,"cates_total":1,"congemi_total":0,"kriseman_total":130,"lassiter_total":2,"nevel_total":3,"total":255,"third_party":6,"kriseman_margin":11,"baker_margin":-11,"turnout_pct":0.47},
  {"precinct_name":112,"precinct_registered":1302,"baker_total":242,"cates_total":6,"congemi_total":0,"kriseman_total":298,"lassiter_total":8,"nevel_total":9,"total":563,"third_party":23,"kriseman_margin":56,"baker_margin":-56,"turnout_pct":0.43},
  {"precinct_name":113,"precinct_registered":1525,"baker_total":257,"cates_total":6,"congemi_total":0,"kriseman_total":169,"lassiter_total":13,"nevel_total":23,"total":468,"third_party":42,"kriseman_margin":-88,"baker_margin":88,"turnout_pct":0.31},
  {"precinct_name":114,"precinct_registered":1297,"baker_total":198,"cates_total":14,"congemi_total":1,"kriseman_total":144,"lassiter_total":9,"nevel_total":12,"total":378,"third_party":36,"kriseman_margin":-54,"baker_margin":54,"turnout_pct":0.29},
  {"precinct_name":115,"precinct_registered":1352,"baker_total":207,"cates_total":6,"congemi_total":1,"kriseman_total":155,"lassiter_total":13,"nevel_total":21,"total":403,"third_party":41,"kriseman_margin":-52,"baker_margin":52,"turnout_pct":0.30},
  {"precinct_name":116,"precinct_registered":1556,"baker_total":164,"cates_total":7,"congemi_total":0,"kriseman_total":213,"lassiter_total":8,"nevel_total":30,"total":422,"third_party":45,"kriseman_margin":49,"baker_margin":-49,"turnout_pct":0.27},
  {"precinct_name":117,"precinct_registered":1261,"baker_total":137,"cates_total":8,"congemi_total":0,"kriseman_total":92,"lassiter_total":8,"nevel_total":18,"total":263,"third_party":34,"kriseman_margin":-45,"baker_margin":45,"turnout_pct":0.21},
  {"precinct_name":118,"precinct_registered":1304,"baker_total":137,"cates_total":1,"congemi_total":1,"kriseman_total":395,"lassiter_total":4,"nevel_total":12,"total":550,"third_party":18,"kriseman_margin":258,"baker_margin":-258,"turnout_pct":0.42},
  {"precinct_name":119,"precinct_registered":2707,"baker_total":262,"cates_total":15,"congemi_total":2,"kriseman_total":248,"lassiter_total":10,"nevel_total":49,"total":586,"third_party":76,"kriseman_margin":-14,"baker_margin":14,"turnout_pct":0.22},
  {"precinct_name":120,"precinct_registered":3010,"baker_total":362,"cates_total":19,"congemi_total":1,"kriseman_total":306,"lassiter_total":18,"nevel_total":46,"total":752,"third_party":84,"kriseman_margin":-56,"baker_margin":56,"turnout_pct":0.25},
  {"precinct_name":121,"precinct_registered":703,"baker_total":30,"cates_total":1,"congemi_total":0,"kriseman_total":84,"lassiter_total":1,"nevel_total":5,"total":121,"third_party":7,"kriseman_margin":54,"baker_margin":-54,"turnout_pct":0.17},
  {"precinct_name":122,"precinct_registered":266,"baker_total":10,"cates_total":0,"congemi_total":0,"kriseman_total":20,"lassiter_total":0,"nevel_total":0,"total":30,"third_party":0,"kriseman_margin":10,"baker_margin":-10,"turnout_pct":0.11},
  {"precinct_name":123,"precinct_registered":3535,"baker_total":474,"cates_total":1,"congemi_total":3,"kriseman_total":850,"lassiter_total":10,"nevel_total":27,"total":1365,"third_party":41,"kriseman_margin":376,"baker_margin":-376,"turnout_pct":0.39},
  {"precinct_name":125,"precinct_registered":1581,"baker_total":170,"cates_total":5,"congemi_total":0,"kriseman_total":332,"lassiter_total":6,"nevel_total":17,"total":530,"third_party":28,"kriseman_margin":162,"baker_margin":-162,"turnout_pct":0.34},
  {"precinct_name":126,"precinct_registered":792,"baker_total":92,"cates_total":2,"congemi_total":2,"kriseman_total":104,"lassiter_total":2,"nevel_total":19,"total":221,"third_party":25,"kriseman_margin":12,"baker_margin":-12,"turnout_pct":0.28},
  {"precinct_name":127,"precinct_registered":1775,"baker_total":143,"cates_total":2,"congemi_total":0,"kriseman_total":595,"lassiter_total":2,"nevel_total":16,"total":758,"third_party":20,"kriseman_margin":452,"baker_margin":-452,"turnout_pct":0.43},
  {"precinct_name":128,"precinct_registered":2528,"baker_total":226,"cates_total":4,"congemi_total":5,"kriseman_total":521,"lassiter_total":9,"nevel_total":27,"total":792,"third_party":45,"kriseman_margin":295,"baker_margin":-295,"turnout_pct":0.31},
  {"precinct_name":129,"precinct_registered":2528,"baker_total":280,"cates_total":0,"congemi_total":5,"kriseman_total":553,"lassiter_total":5,"nevel_total":10,"total":853,"third_party":20,"kriseman_margin":273,"baker_margin":-273,"turnout_pct":0.34},
  {"precinct_name":130,"precinct_registered":3102,"baker_total":668,"cates_total":3,"congemi_total":0,"kriseman_total":681,"lassiter_total":3,"nevel_total":17,"total":1372,"third_party":23,"kriseman_margin":13,"baker_margin":-13,"turnout_pct":0.44},
  {"precinct_name":131,"precinct_registered":1395,"baker_total":192,"cates_total":2,"congemi_total":2,"kriseman_total":146,"lassiter_total":2,"nevel_total":6,"total":350,"third_party":12,"kriseman_margin":-46,"baker_margin":46,"turnout_pct":0.25},
  {"precinct_name":132,"precinct_registered":1526,"baker_total":160,"cates_total":4,"congemi_total":5,"kriseman_total":151,"lassiter_total":5,"nevel_total":5,"total":330,"third_party":19,"kriseman_margin":-9,"baker_margin":9,"turnout_pct":0.22},
  {"precinct_name":133,"precinct_registered":1632,"baker_total":189,"cates_total":2,"congemi_total":1,"kriseman_total":212,"lassiter_total":4,"nevel_total":14,"total":422,"third_party":21,"kriseman_margin":23,"baker_margin":-23,"turnout_pct":0.26},
  {"precinct_name":134,"precinct_registered":1507,"baker_total":138,"cates_total":2,"congemi_total":1,"kriseman_total":376,"lassiter_total":1,"nevel_total":9,"total":527,"third_party":13,"kriseman_margin":238,"baker_margin":-238,"turnout_pct":0.35},
  {"precinct_name":135,"precinct_registered":3454,"baker_total":689,"cates_total":1,"congemi_total":1,"kriseman_total":943,"lassiter_total":3,"nevel_total":14,"total":1651,"third_party":19,"kriseman_margin":254,"baker_margin":-254,"turnout_pct":0.48},
  {"precinct_name":136,"precinct_registered":1816,"baker_total":388,"cates_total":1,"congemi_total":1,"kriseman_total":437,"lassiter_total":2,"nevel_total":5,"total":834,"third_party":9,"kriseman_margin":49,"baker_margin":-49,"turnout_pct":0.46},
  {"precinct_name":137,"precinct_registered":1513,"baker_total":280,"cates_total":2,"congemi_total":2,"kriseman_total":342,"lassiter_total":5,"nevel_total":8,"total":639,"third_party":17,"kriseman_margin":62,"baker_margin":-62,"turnout_pct":0.42},
  {"precinct_name":138,"precinct_registered":2754,"baker_total":812,"cates_total":3,"congemi_total":2,"kriseman_total":457,"lassiter_total":0,"nevel_total":2,"total":1276,"third_party":7,"kriseman_margin":-355,"baker_margin":355,"turnout_pct":0.46},
  {"precinct_name":139,"precinct_registered":1742,"baker_total":229,"cates_total":6,"congemi_total":6,"kriseman_total":208,"lassiter_total":7,"nevel_total":5,"total":461,"third_party":24,"kriseman_margin":-21,"baker_margin":21,"turnout_pct":0.26},
  {"precinct_name":140,"precinct_registered":4625,"baker_total":808,"cates_total":2,"congemi_total":5,"kriseman_total":753,"lassiter_total":7,"nevel_total":24,"total":1599,"third_party":38,"kriseman_margin":-55,"baker_margin":55,"turnout_pct":0.35},
  {"precinct_name":141,"precinct_registered":2104,"baker_total":331,"cates_total":1,"congemi_total":6,"kriseman_total":480,"lassiter_total":1,"nevel_total":10,"total":829,"third_party":18,"kriseman_margin":149,"baker_margin":-149,"turnout_pct":0.39},
  {"precinct_name":142,"precinct_registered":2332,"baker_total":569,"cates_total":4,"congemi_total":5,"kriseman_total":393,"lassiter_total":4,"nevel_total":2,"total":977,"third_party":15,"kriseman_margin":-176,"baker_margin":176,"turnout_pct":0.42},
  {"precinct_name":143,"precinct_registered":2162,"baker_total":607,"cates_total":1,"congemi_total":0,"kriseman_total":314,"lassiter_total":1,"nevel_total":3,"total":926,"third_party":5,"kriseman_margin":-293,"baker_margin":293,"turnout_pct":0.43},
  {"precinct_name":144,"precinct_registered":3876,"baker_total":995,"cates_total":4,"congemi_total":6,"kriseman_total":631,"lassiter_total":4,"nevel_total":6,"total":1646,"third_party":20,"kriseman_margin":-364,"baker_margin":364,"turnout_pct":0.42},
  {"precinct_name":145,"precinct_registered":1840,"baker_total":618,"cates_total":4,"congemi_total":3,"kriseman_total":391,"lassiter_total":1,"nevel_total":4,"total":1021,"third_party":12,"kriseman_margin":-227,"baker_margin":227,"turnout_pct":0.55},
  {"precinct_name":146,"precinct_registered":1179,"baker_total":197,"cates_total":4,"congemi_total":1,"kriseman_total":185,"lassiter_total":3,"nevel_total":2,"total":392,"third_party":10,"kriseman_margin":-12,"baker_margin":12,"turnout_pct":0.33},
  {"precinct_name":147,"precinct_registered":1144,"baker_total":181,"cates_total":2,"congemi_total":0,"kriseman_total":134,"lassiter_total":7,"nevel_total":0,"total":324,"third_party":9,"kriseman_margin":-47,"baker_margin":47,"turnout_pct":0.28},
  {"precinct_name":150,"precinct_registered":3227,"baker_total":510,"cates_total":6,"congemi_total":5,"kriseman_total":362,"lassiter_total":5,"nevel_total":13,"total":901,"third_party":29,"kriseman_margin":-148,"baker_margin":148,"turnout_pct":0.28},
  {"precinct_name":151,"precinct_registered":1628,"baker_total":242,"cates_total":0,"congemi_total":3,"kriseman_total":198,"lassiter_total":1,"nevel_total":4,"total":448,"third_party":8,"kriseman_margin":-44,"baker_margin":44,"turnout_pct":0.28},
  {"precinct_name":152,"precinct_registered":1902,"baker_total":281,"cates_total":2,"congemi_total":1,"kriseman_total":237,"lassiter_total":4,"nevel_total":10,"total":535,"third_party":17,"kriseman_margin":-44,"baker_margin":44,"turnout_pct":0.28},
  {"precinct_name":153,"precinct_registered":4027,"baker_total":760,"cates_total":8,"congemi_total":4,"kriseman_total":504,"lassiter_total":9,"nevel_total":9,"total":1294,"third_party":30,"kriseman_margin":-256,"baker_margin":256,"turnout_pct":0.32},
  {"precinct_name":154,"precinct_registered":1139,"baker_total":377,"cates_total":0,"congemi_total":0,"kriseman_total":211,"lassiter_total":1,"nevel_total":1,"total":590,"third_party":2,"kriseman_margin":-166,"baker_margin":166,"turnout_pct":0.52},
  {"precinct_name":155,"precinct_registered":4115,"baker_total":558,"cates_total":6,"congemi_total":3,"kriseman_total":423,"lassiter_total":7,"nevel_total":1,"total":998,"third_party":17,"kriseman_margin":-135,"baker_margin":135,"turnout_pct":0.24},
  {"precinct_name":156,"precinct_registered":2475,"baker_total":455,"cates_total":6,"congemi_total":2,"kriseman_total":375,"lassiter_total":3,"nevel_total":6,"total":847,"third_party":17,"kriseman_margin":-80,"baker_margin":80,"turnout_pct":0.34},
  {"precinct_name":157,"precinct_registered":787,"baker_total":131,"cates_total":2,"congemi_total":2,"kriseman_total":108,"lassiter_total":1,"nevel_total":0,"total":244,"third_party":5,"kriseman_margin":-23,"baker_margin":23,"turnout_pct":0.31},
  {"precinct_name":161,"precinct_registered":3580,"baker_total":255,"cates_total":4,"congemi_total":2,"kriseman_total":299,"lassiter_total":1,"nevel_total":9,"total":570,"third_party":16,"kriseman_margin":44,"baker_margin":-44,"turnout_pct":0.16},
  {"precinct_name":162,"precinct_registered":4681,"baker_total":294,"cates_total":11,"congemi_total":3,"kriseman_total":344,"lassiter_total":5,"nevel_total":24,"total":681,"third_party":43,"kriseman_margin":50,"baker_margin":-50,"turnout_pct":0.15},
  {"precinct_name":165,"precinct_registered":17,"baker_total":0,"cates_total":0,"congemi_total":0,"kriseman_total":0,"lassiter_total":0,"nevel_total":0,"total":0,"third_party":0,"kriseman_margin":0,"baker_margin":0,"turnout_pct":0.00},
  {"precinct_name":200,"precinct_registered":1699,"baker_total":398,"cates_total":1,"congemi_total":4,"kriseman_total":255,"lassiter_total":2,"nevel_total":2,"total":662,"third_party":9,"kriseman_margin":-143,"baker_margin":143,"turnout_pct":0.39},
  {"precinct_name":201,"precinct_registered":2502,"baker_total":484,"cates_total":0,"congemi_total":1,"kriseman_total":374,"lassiter_total":2,"nevel_total":6,"total":867,"third_party":9,"kriseman_margin":-110,"baker_margin":110,"turnout_pct":0.35},
  {"precinct_name":202,"precinct_registered":2133,"baker_total":565,"cates_total":0,"congemi_total":3,"kriseman_total":385,"lassiter_total":2,"nevel_total":13,"total":968,"third_party":18,"kriseman_margin":-180,"baker_margin":180,"turnout_pct":0.45},
  {"precinct_name":203,"precinct_registered":1481,"baker_total":190,"cates_total":14,"congemi_total":0,"kriseman_total":181,"lassiter_total":9,"nevel_total":11,"total":405,"third_party":34,"kriseman_margin":-9,"baker_margin":9,"turnout_pct":0.27},
  {"precinct_name":204,"precinct_registered":769,"baker_total":105,"cates_total":1,"congemi_total":0,"kriseman_total":65,"lassiter_total":0,"nevel_total":7,"total":178,"third_party":8,"kriseman_margin":-40,"baker_margin":40,"turnout_pct":0.23},
  {"precinct_name":205,"precinct_registered":1725,"baker_total":200,"cates_total":17,"congemi_total":0,"kriseman_total":133,"lassiter_total":13,"nevel_total":18,"total":381,"third_party":48,"kriseman_margin":-67,"baker_margin":67,"turnout_pct":0.22},
  {"precinct_name":211,"precinct_registered":743,"baker_total":129,"cates_total":1,"congemi_total":0,"kriseman_total":124,"lassiter_total":1,"nevel_total":0,"total":255,"third_party":2,"kriseman_margin":-5,"baker_margin":5,"turnout_pct":0.34},
  {"precinct_name":213,"precinct_registered":1232,"baker_total":178,"cates_total":0,"congemi_total":1,"kriseman_total":190,"lassiter_total":1,"nevel_total":3,"total":373,"third_party":5,"kriseman_margin":12,"baker_margin":-12,"turnout_pct":0.30},
  {"precinct_name":215,"precinct_registered":1401,"baker_total":379,"cates_total":1,"congemi_total":1,"kriseman_total":200,"lassiter_total":3,"nevel_total":3,"total":587,"third_party":8,"kriseman_margin":-179,"baker_margin":179,"turnout_pct":0.42},
  {"precinct_name":216,"precinct_registered":2137,"baker_total":367,"cates_total":1,"congemi_total":4,"kriseman_total":353,"lassiter_total":5,"nevel_total":4,"total":734,"third_party":14,"kriseman_margin":-14,"baker_margin":14,"turnout_pct":0.34},
  {"precinct_name":217,"precinct_registered":15,"baker_total":1,"cates_total":0,"congemi_total":0,"kriseman_total":1,"lassiter_total":0,"nevel_total":0,"total":2,"third_party":0,"kriseman_margin":0,"baker_margin":0,"turnout_pct":0.13},
  {"precinct_name":219,"precinct_registered":1342,"baker_total":226,"cates_total":3,"congemi_total":0,"kriseman_total":240,"lassiter_total":2,"nevel_total":4,"total":475,"third_party":9,"kriseman_margin":14,"baker_margin":-14,"turnout_pct":0.35},
  {"precinct_name":220,"precinct_registered":1088,"baker_total":154,"cates_total":6,"congemi_total":4,"kriseman_total":214,"lassiter_total":4,"nevel_total":7,"total":389,"third_party":21,"kriseman_margin":60,"baker_margin":-60,"turnout_pct":0.36},
  {"precinct_name":221,"precinct_registered":1922,"baker_total":237,"cates_total":1,"congemi_total":3,"kriseman_total":315,"lassiter_total":8,"nevel_total":5,"total":569,"third_party":17,"kriseman_margin":78,"baker_margin":-78,"turnout_pct":0.30},
  {"precinct_name":222,"precinct_registered":3668,"baker_total":643,"cates_total":4,"congemi_total":5,"kriseman_total":650,"lassiter_total":5,"nevel_total":15,"total":1322,"third_party":29,"kriseman_margin":7,"baker_margin":-7,"turnout_pct":0.36},
  {"precinct_name":223,"precinct_registered":110,"baker_total":17,"cates_total":0,"congemi_total":0,"kriseman_total":27,"lassiter_total":0,"nevel_total":1,"total":45,"third_party":1,"kriseman_margin":10,"baker_margin":-10,"turnout_pct":0.41},
  {"precinct_name":224,"precinct_registered":1572,"baker_total":167,"cates_total":15,"congemi_total":0,"kriseman_total":130,"lassiter_total":7,"nevel_total":26,"total":345,"third_party":48,"kriseman_margin":-37,"baker_margin":37,"turnout_pct":0.22},
  {"precinct_name":225,"precinct_registered":1816,"baker_total":213,"cates_total":6,"congemi_total":1,"kriseman_total":367,"lassiter_total":4,"nevel_total":14,"total":605,"third_party":25,"kriseman_margin":154,"baker_margin":-154,"turnout_pct":0.33},
  {"precinct_name":226,"precinct_registered":830,"baker_total":130,"cates_total":5,"congemi_total":1,"kriseman_total":128,"lassiter_total":6,"nevel_total":5,"total":275,"third_party":17,"kriseman_margin":-2,"baker_margin":2,"turnout_pct":0.33},
  {"precinct_name":227,"precinct_registered":2051,"baker_total":235,"cates_total":10,"congemi_total":2,"kriseman_total":278,"lassiter_total":3,"nevel_total":11,"total":539,"third_party":26,"kriseman_margin":43,"baker_margin":-43,"turnout_pct":0.26},
  {"precinct_name":228,"precinct_registered":975,"baker_total":89,"cates_total":1,"congemi_total":0,"kriseman_total":198,"lassiter_total":2,"nevel_total":6,"total":296,"third_party":9,"kriseman_margin":109,"baker_margin":-109,"turnout_pct":0.30},
  {"precinct_name":229,"precinct_registered":2170,"baker_total":324,"cates_total":4,"congemi_total":4,"kriseman_total":341,"lassiter_total":2,"nevel_total":10,"total":685,"third_party":20,"kriseman_margin":17,"baker_margin":-17,"turnout_pct":0.32},
  {"precinct_name":230,"precinct_registered":1640,"baker_total":369,"cates_total":4,"congemi_total":3,"kriseman_total":277,"lassiter_total":1,"nevel_total":1,"total":655,"third_party":9,"kriseman_margin":-92,"baker_margin":92,"turnout_pct":0.40},
  {"precinct_name":231,"precinct_registered":2965,"baker_total":492,"cates_total":3,"congemi_total":6,"kriseman_total":457,"lassiter_total":1,"nevel_total":10,"total":969,"third_party":20,"kriseman_margin":-35,"baker_margin":35,"turnout_pct":0.33},
  {"precinct_name":232,"precinct_registered":2268,"baker_total":415,"cates_total":2,"congemi_total":3,"kriseman_total":358,"lassiter_total":3,"nevel_total":5,"total":786,"third_party":13,"kriseman_margin":-57,"baker_margin":57,"turnout_pct":0.35},
  {"precinct_name":233,"precinct_registered":1662,"baker_total":253,"cates_total":0,"congemi_total":4,"kriseman_total":328,"lassiter_total":2,"nevel_total":6,"total":593,"third_party":12,"kriseman_margin":75,"baker_margin":-75,"turnout_pct":0.36},
  {"precinct_name":234,"precinct_registered":1600,"baker_total":236,"cates_total":1,"congemi_total":4,"kriseman_total":207,"lassiter_total":1,"nevel_total":3,"total":452,"third_party":9,"kriseman_margin":-29,"baker_margin":29,"turnout_pct":0.28},
  {"precinct_name":235,"precinct_registered":1923,"baker_total":402,"cates_total":3,"congemi_total":2,"kriseman_total":351,"lassiter_total":2,"nevel_total":2,"total":762,"third_party":9,"kriseman_margin":-51,"baker_margin":51,"turnout_pct":0.40},
  {"precinct_name":236,"precinct_registered":429,"baker_total":38,"cates_total":2,"congemi_total":0,"kriseman_total":40,"lassiter_total":1,"nevel_total":1,"total":82,"third_party":4,"kriseman_margin":2,"baker_margin":-2,"turnout_pct":0.19},
  {"precinct_name":237,"precinct_registered":201,"baker_total":33,"cates_total":0,"congemi_total":2,"kriseman_total":22,"lassiter_total":0,"nevel_total":0,"total":57,"third_party":2,"kriseman_margin":-11,"baker_margin":11,"turnout_pct":0.28},
  {"precinct_name":239,"precinct_registered":3133,"baker_total":469,"cates_total":6,"congemi_total":10,"kriseman_total":443,"lassiter_total":5,"nevel_total":13,"total":946,"third_party":34,"kriseman_margin":-26,"baker_margin":26,"turnout_pct":0.30},
  {"precinct_name":240,"precinct_registered":1812,"baker_total":315,"cates_total":4,"congemi_total":3,"kriseman_total":199,"lassiter_total":5,"nevel_total":8,"total":534,"third_party":20,"kriseman_margin":-116,"baker_margin":116,"turnout_pct":0.29},
  {"precinct_name":241,"precinct_registered":1954,"baker_total":380,"cates_total":1,"congemi_total":3,"kriseman_total":323,"lassiter_total":5,"nevel_total":4,"total":716,"third_party":13,"kriseman_margin":-57,"baker_margin":57,"turnout_pct":0.37},
  {"precinct_name":275,"precinct_registered":784,"baker_total":137,"cates_total":0,"congemi_total":5,"kriseman_total":106,"lassiter_total":1,"nevel_total":0,"total":249,"third_party":6,"kriseman_margin":-31,"baker_margin":31,"turnout_pct":0.32}
]



for (var i = 0; i < pickupData.features.length; i++) {
  pickupData.features[i].properties.primaryVotes={}
  pickupData.features[i].properties.generalVotes={}
}
for (var i = 0; i < officialVotes.length; i++) {
  for (var j = 0; j < pickupData.features.length; j++) {
    if (officialVotes[i].precinct_name.toString() === pickupData.features[j].properties.PRECINCTID) {
      pickupData.features[j].properties.generalVotes = officialVotes[i];
      pickupData.features[j].properties.generalVotes.baker_margin=Number(pickupData.features[j].properties.generalVotes.baker_total)-Number(pickupData.features[j].properties.generalVotes.kriseman_total);
      pickupData.features[j].properties.generalVotes.kriseman_margin=(-1)*pickupData.features[j].properties.generalVotes.baker_margin;
    }
  }
}
for (var i = 0; i < primaryPrecinctVotes.length; i++) {
  for (var j = 0; j < pickupData.features.length; j++) {
    if (primaryPrecinctVotes[i].precinct_name.toString() === pickupData.features[j].properties.PRECINCTID) {
      pickupData.features[j].properties.primaryVotes = primaryPrecinctVotes[i];
    }
  }
}





var map3 = L.map('map3', {
  zoomSnap: 0.25
}).setView([27.812390, -82.749999], 10.75);

L.tileLayer('https://api.mapbox.com/styles/v1/ltaylor11/cj9okho5d4hj92roaopd3wksn/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibHRheWxvcjExIiwiYSI6ImNqOWhndGV0cjJ6ZmIyeHBhMzVqbG42d2kifQ.PDNpdxh13YZxmaQWEqQTSg', {
  attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>'
}).addTo(map3);

var cscale=chroma.scale(['black','white','#50a291']).domain([-100,0,100]);

function  style(feature) {
  if (feature.properties.municipality) {
    var krisePickup = feature.properties.generalVotes.kriseman_margin - feature.properties.primaryVotes.kriseman_margin;
    return {
      fillColor: cscale(krisePickup),
      fillOpacity: 0.8,
      color: '#555555',
      weight: 1.5,
      opacity: 0.4
    };
  }
  else {
    return {
      fillColor: '#aaaaaa',
      fillOpacity: 0,
      color: 'white',
      weight: 1.5,
      opacity: 0
    };
  }
}

function onEachFeatureMargin(feature, layer) {
  var krisePickup = feature.properties.generalVotes.kriseman_margin - feature.properties.primaryVotes.kriseman_margin;

  layer.bindTooltip(
    '<b>Precinct '+feature.properties.PRECINCTID+'</b> <br />'+
    '<b style="font-size:125%; line-height:2;">Kriseman pickup: '+ (krisePickup<0?"":"+") + krisePickup + '</b><br />' +
    'General margin: ' + (feature.properties.generalVotes.kriseman_margin<0?"":"+") + feature.properties.generalVotes.kriseman_margin + ' votes <br />' +
    'Primary margin: ' + (feature.properties.primaryVotes.kriseman_margin<0?"":"+") + feature.properties.primaryVotes.kriseman_margin + ' votes <br />'

  );
}
L.geoJson(pickupData.features, {
  style: style,
  onEachFeature: onEachFeatureMargin,
  preferCanvas: true
}).addTo(map3);
