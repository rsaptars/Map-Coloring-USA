// var australian_constraint_graph = [
// 	[0,1,0,0,0,0,1],
// 	[1,0,0,1,0,1,1],
// 	[0,0,0,1,0,0,1],
// 	[0,1,1,0,0,1,1],
// 	[0,0,0,0,0,1,0],
// 	[0,1,0,1,1,0,1],
// 	[1,1,1,1,0,1,0]
// ];

var australian_constraint_graph = [
	[0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0], //Alabama
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], //Alaska
	[0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0], //Arizona
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0], //Arkansas
	[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0], //California
	[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1], //Colorado
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], //Connecticut
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0], //Delaware
	[1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], //Florida   
	[1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0], //Georgia
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], //Hawaii
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1], //Idaho
	[0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0], //Illinois
	[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], //Indiana
	[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0], //Iowa
	[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], //Kansas
	[0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0], //Kentucky
	[0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0], //Louisiana
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], //Maine
	[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0], //Maryland
	[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0], //Massachusetts
	[0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0], //Michigan
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0], //Minnesota
	[1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0], //Mississippi
	[0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0], //Missouri
	[0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1], //Montana
	[0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1], //Nebraska
	[0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0], //Nevada
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0], //New Hampshire
	[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0], //New jersey
	[0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0], //New Mexico
	[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0], //New york
	[0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0], //North Carolina
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0], //North Dakota
	[0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0], //Ohio
	[0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0], //Oklahoma
	[0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0], //Oregon
	[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], //Pennsylvania
	[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], //Rhode Island
	[0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], // South Carolina
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], //South Dakota
	[1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0], //Tennessee
	[0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], //Texas
	[0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], //Utah
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], //Vermont
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0], //Virginia
	[0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0], //Washington
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0], //West Virginia
	[0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], //Wisconsin
	[0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0], //Wyoming
	];

var colours = ['R','G','B','Y','BL'];

var australian_constraint_count = [{
    id: "US.AL",
    state: "Alabama",
    domain:['R','G','B','Y','BL'], 
    color:null
  },//1
  {
    id: "US.AK",
    state: "Alaska",
    domain:['R','G','B','Y','BL'], 
    color:null
  },//1
  {
    id: "US.AZ",
    state: "Arizona",
    domain:['R','G','B','Y','BL'], 
    color:null
  },//3
  {
    id: "US.AR",
    state: "Arkansas",
    domain:['R','G','B','Y','BL'], 
    color:null
  },//4 
  {
    id: "US.CA",
    state: "California",
    domain:['R','G','B','Y','BL'], 
    color:null
  },//5
  {
    id: "US.CO",
    state: "Colorado",
    domain:['R','G','B','Y','BL'], 
    color:null
  },//6
  {
    id: "US.CT",
    state: "Connecticut",
    domain:['R','G','B','Y','BL'], 
    color:null
  },//7
  {
    id: "US.DE",
    state: "Delaware",
    domain:['R','G','B','Y','BL'], 
    color:null
  },//8
  {
    id: "US.FL",
    state: "Florida",
    domain:['R','G','B','Y','BL'], 
    color:null
  },//9
  {
    id: "US.GA",
    state: "Georgia",
    domain:['R','G','B','Y','BL'], 
    color:null
  },//10
  {
    id: "US.HI",
    state: "Hawaii",
    domain:['R','G','B','Y','BL'], 
    color:null
  },//11
  {
    id: "US.ID",
    state: "Idaho",
    domain:['R','G','B','Y','BL'], 
    color:null
  },//12
  {
    id: "US.IL",
    state: "Illinois",
    domain:['R','G','B','Y','BL'], 
    color:null
  },//13
  {
    id: "US.IN",
    state: "Indiana",
    domain:['R','G','B','Y','BL'], 
    color:null
  },//14
  {
    id: "US.IA",
    state: "Iowa",
    domain:['R','G','B','Y','BL'], 
    color:null
  },//15
  {
    id: "US.KS",
    state: "Kansas",
    domain:['R','G','B','Y','BL'], 
    color:null
  },//16
  {
    id: "US.KY",
    state: "Kentucky",
    domain:['R','G','B','Y','BL'], 
    color:null
  },//17
  {
    id: "US.LA",
    state: "Louisiana",
    domain:['R','G','B','Y','BL'], 
    color:null
  },//18
  {
    id: "US.ME",
    state: "Maine",
    domain:['R','G','B','Y','BL'], 
    color:null
  },//19
  {
    id: "US.MD",
    state: "Maryland",
    domain:['R','G','B','Y','BL'], 
    color:null
  },//20
  {
    id: "US.MA",
    state: "Massachusetts",
    domain:['R','G','B','Y','BL'], 
    color:null
  },//21
  {
    id: "US.MI",
    state: "Michigan",
    domain:['R','G','B','Y','BL'], 
    color:null
  },//22
  {
    id: "US.MN",
    state: "Minnesota",
    domain:['R','G','B','Y','BL'], 
    color:null
  }, //23
  {
    id: "US.MS",
    state: "Mississippi",
    domain:['R','G','B','Y','BL'], 
    color:null
  },//24
  {
    id: "US.MO",
    state: "Missouri",
    domain:['R','G','B','Y','BL'], 
    color:null
  },//25
  {
    id: "US.MT",
    state: "Montana",
    domain:['R','G','B','Y','BL'], 
    color:null
  },//26
  {
    id: "US.NE",
    state: "Nebraska",
    domain:['R','G','B','Y','BL'], 
    color:null
  },//27
  {
    id: "US.NV",
    state: "Nevada",
    domain:['R','G','B','Y','BL'], 
    color:null
  },//28
  {
    id: "US.NH",
    state: "New Hampshire",
    domain:['R','G','B','Y','BL'], 
    color:null
  },//29
  {
    id: "US.NJ",
    state: "New Jersey",
    domain:['R','G','B','Y','BL'], 
    color:null
  },//30
  {
    id: "US.NM",
    state: "New Mexico",
    domain:['R','G','B','Y','BL'], 
    color:null
  },//31
  {
    id: "US.NY",
    state: "New York",
    domain:['R','G','B','Y','BL'], 
    color:null
  },//32
  {
    id: "US.NC",
    state: "North Carolina",
    domain:['R','G','B','Y','BL'], 
    color:null
  },//33
  {
    id: "US.ND",
    state: "North Dakota",
    domain:['R','G','B','Y','BL'], 
    color:null
  },//34
  {
    id: "US.OH",
    state: "Ohio",
    domain:['R','G','B','Y','BL'], 
    color:null
  },//35
  {
    id: "US.OK",
    state: "Oklahoma",
    domain:['R','G','B','Y','BL'], 
    color:null
  },//36
  {
    id: "US.OR",
    state: "Oregon",
    domain:['R','G','B','Y','BL'], 
    color:null
  },//37
  {
    id: "US.PA",
    state: "Pennsylvania",
    domain:['R','G','B','Y','BL'], 
    color:null
  },//38
  {
    id: "US.RI",
    state: "Rhode Island",
    domain:['R','G','B','Y','BL'], 
    color:null
  },//39
  {
    id: "US.SC",
    state: "South Carolina",
    domain:['R','G','B','Y','BL'], 
    color:null
  },//40
  {
    id: "US.SD",
    state: "South Dakota",
    domain:['R','G','B','Y','BL'], 
    color:null
  },//41
  {
    id: "US.TN",
    state: "Tennessee",
    domain:['R','G','B','Y','BL'], 
    color:null
  },//42
  {
    id: "US.TX",
    state: "Texas",
    domain:['R','G','B','Y','BL'], 
    color:null
  },//43
  {
    id: "US.UT",
    state: "Utah",
    domain:['R','G','B','Y','BL'], 
    color:null
  },//44
  {
    id: "US.VT",
    state: "Vermont",
    domain:['R','G','B','Y','BL'], 
    color:null
  },//45
  {
    id: "US.VA",
    state: "Virginia",
    domain:['R','G','B','Y','BL'], 
    color:null
  },//46
  {
    id: "US.WA",
    state: "Washington",
    domain:['R','G','B','Y','BL'], 
    color:null
  },//47
  {
    id: "US.WV",
    state: "West Virginia",
    domain:['R','G','B','Y','BL'], 
    color:null
  },//48
  {
    id: "US.WI",
    state: "Wisconsin",
    domain:['R','G','B','Y','BL'], 
    color:null
  },//49
  {
    id: "US.WY",
    state: "Wyoming",
    domain:['R','G','B','Y','BL'], 
    color:null
  },//50
  {
    id: "US.DC",
    state: "District of Columbia",
    domain:['R','G','B','Y','BL'], 
    color:null
  }]

// var australian_constraint_count = [
// 	{id:'AU.WA', state: 'WA', count:2, domain:['R','G','B','Y'], color:null},
// 	{id:'AU.NT', state: 'NT', count:3, domain:['R','G','B','Y'], color:null},
// 	{id:'AU.QL', state: 'Q', count:3, domain:['R','G','B','Y'], color:null},
// 	{id:'AU.SA', state: 'SA', count:5, domain:['R','G','B','Y'], color:null},
// 	{id:'AU.NS', state: 'NSW', count:3, domain:['R','G','B','Y'], color:null},
// 	{id:'AU.VI', state: 'V', count:2, domain:['R','G','B','Y'], color:null},
// 	{id:'AU.TS', state: 'T', count:0, domain:['R','G','B','Y'], color:null}
// ];
// var stack = [[],[],[],[],[],[],[]];
var stack = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
console.log(australian_constraint_count);

var V = australian_constraint_graph.length;
var color = [];
console.log(this.V);

//Function to check consistency of the assigned colours

function isConsistent(v,graph,color,c) 
	{ 
		for (var i = 0; i < V; i++) 
			if (graph[v][i] == 1 && c == color[i]) 
				return false; 
		return true; 
	} 
	
function forwardChecking(graph,m,color,v) 
	{ 		
		if (v == V) 
			return true; 

		 if(australian_constraint_count[v].domain.length === 0) {
			v--;
				console.log("HERE -----", v)
				var colorToRestore = australian_constraint_count[v].color;
				console.log("COLOUR----------",colorToRestore)

					for (var i = 0; i < V; i++) {
					if (graph[v][i] == 1) {
						stack[i] = stack[i].filter(e => e != colorToRestore);
						if(!australian_constraint_count[i].domain.includes(colorToRestore))
						{
							if(colorToRestore == "R")
							{
								australian_constraint_count[i].domain.splice(0, 0, colorToRestore);
							}
							else if(colorToRestore == "G"){
								australian_constraint_count[i].domain.splice(1, 0, colorToRestore);
							}
							else if(colorToRestore == "B")
							{
								australian_constraint_count[i].domain.splice(2, 0, colorToRestore);
							}
							else if(colorToRestore == "Y"){
								australian_constraint_count[i].domain.splice(3, 0, colorToRestore);
							}
							if(colorToRestore == "BL")
							{
								australian_constraint_count[i].domain.splice(0, 0, colorToRestore);
							}
						}
					} 
				}
			 console.log(australian_constraint_count)
			 //if(australian_constraint_count[v - 1].domain.length === 1) {
			// 	while(australian_constraint_count[v - 1].domain.length === 1 && v!=0) {
			// 	v--;
			// 	console.log("HERE -----", v)
			// 	var colorToRestore = australian_constraint_count[v].color;
				
				
			// 	console.log("COLOUR----------",colorToRestore)
			// 	for (var i = 0; i < V; i++) {
			// 		if (graph[v][i] == 1) {
			// 			stack[i] = stack[i].filter(e => e.includes(colorToRestore));
			// 			if(!australian_constraint_count[i].domain.includes(colorToRestore))
			// 			australian_constraint_count[i].domain.push(colorToRestore);
			// 		} 
			// 	}
			// 	australian_constraint_count[v].color = null;
			// }
			// console.log(australian_constraint_count)
			// v--;
			// console.log("Current Node COLOUR-----",v, australian_constraint_count[v].color)

			// forwardChecking(graph, m, color, v);
		 }
		else {
			for (var c = 0; c < colours.length; c++)  
			{ 				
				if (isConsistent(v, graph, color, australian_constraint_count[v].domain[c])) 
				{ 
					color[v] = australian_constraint_count[v].domain[c];
					var colorAssigned = australian_constraint_count[v].domain[c];
					if(australian_constraint_count[v].color != null){
						var colorToRestore = australian_constraint_count[v].color;
						for (var i = 0; i < V; i++) {
							if (graph[v][i] == 1) {
								stack[i] = stack[i].filter(e => e != colorAssigned);
								if(!australian_constraint_count[i].domain.includes(colorToRestore))
								{
									if(colorToRestore == "R")
									{
										australian_constraint_count[i].domain.splice(0, 0, colorToRestore);
									}
									else if(colorToRestore == "G"){
										australian_constraint_count[i].domain.splice(1, 0, colorToRestore);
									}
									else if(colorToRestore == "B")
									{
										australian_constraint_count[i].domain.splice(2, 0, colorToRestore);
									}
									else if(colorToRestore == "Y"){
										australian_constraint_count[i].domain.splice(3, 0, colorToRestore);
									}
									if(colorToRestore == "BL")
									{
										australian_constraint_count[i].domain.splice(0, 0, colorToRestore);
									}
								}
							} 
						}
					}
					australian_constraint_count[v].color = colorAssigned;
					for (var i = 0; i < V; i++) {
						if (graph[v][i] == 1) {
							australian_constraint_count[i].domain = australian_constraint_count[i].domain.filter(e => e !== colorAssigned);
							if(!stack[i].includes(colorAssigned))
								stack[i].push(colorAssigned);
						} 
					} 
					//console.log(stack)
					if (forwardChecking(graph, m, 
										color, v + 1)) 
						return true; 
					}
				color[v] = null; 
			} 
		} 
		return false; 
	} 
	

	function backTracking(graph,m,color,v) 
	{ 
		
		if (v == V) 
			return true; 

		for (var c = 0; c < colours.length; c++) 
		{ 
			
			if (isConsistent(v, graph, color, australian_constraint_count[v].domain[c])) 
			{ 
				color[v] =  australian_constraint_count[v].domain[c]; 

				if (backTracking(graph, m, 
									color, v + 1)) 
					return true; 

				color[v] = null; 
			} 
		} 
		return false; 
	} 

	function singletonDomain1(graph,m,color, v) {

		if (v == V) 
			return true; 
		//var singleton = null;
		console.log("Graph", graph);
		console.log("M", m);
		console.log("Color", color);
		console.log(australian_constraint_count);
	console.log(v)
	// if(australian_constraint_count[v].color != null)
	// 	return;
						if (isConsistent(v, graph, color, australian_constraint_count[v].domain[0])) 
								{ 
										color[v] = australian_constraint_count[v].domain[0];
										var colorAssigned = australian_constraint_count[v].domain[0];
										australian_constraint_count[v].color = colorAssigned;
										for (var i = 0; i < V; i++) {
												if (graph[v][i] == 1) {
														australian_constraint_count[i].domain = australian_constraint_count[i].domain.filter(e => e !== colorAssigned);
														if(!stack[i].includes(colorAssigned))
																stack[i].push(colorAssigned);
												}
												if(australian_constraint_count[i].domain.length === 1 && australian_constraint_count[i].color == null) {
														console.log("Singleton", i)
														singleton(graph,i);
														//break outerloop;
												}
										} 

										if (singletonDomain1(graph, m, 
											color, v + 1)) 
										  return true; 
										
								}
								console.log("Values", australian_constraint_count);
		

}

	function singletonDomain(graph,m,color) {
        //var singleton = null;
        console.log("Graph", graph);
        console.log("M", m);
        console.log("Color", color);
        console.log(australian_constraint_count);
        outerloop: for(var v = 0; v < V; v++) {
			console.log(v)
			if(australian_constraint_count[v].color != null)
				continue;
                if (isConsistent(v, graph, color, australian_constraint_count[v].domain[0])) 
                    { 
                        color[v] = australian_constraint_count[v].domain[0];
                        var colorAssigned = australian_constraint_count[v].domain[0];
                        australian_constraint_count[v].color = colorAssigned;
                        for (var i = 0; i < V; i++) {
                            if (graph[v][i] == 1) {
                                australian_constraint_count[i].domain = australian_constraint_count[i].domain.filter(e => e !== colorAssigned);
                                if(!stack[i].includes(colorAssigned))
                                    stack[i].push(colorAssigned);
                            }
                            if(australian_constraint_count[i].domain.length === 1 && australian_constraint_count[i].color == null) {
                                console.log("Singleton", i)
                                singleton(graph,i);
                                //break outerloop;
                            }
                        } 
                        
                    }
                    console.log("Values", australian_constraint_count);
                    
                }
        
    
    }
    function singleton(graph,v) {
        color[v] = australian_constraint_count[v].domain[0];
		australian_constraint_count[v].color = australian_constraint_count[v].domain[0];
		color[v] = australian_constraint_count[v].domain[0];
        var colorAssigned = australian_constraint_count[v].domain[0];
                        for (var i = 0; i < V; i++) {
                            if (graph[v][i] == 1) {
                                australian_constraint_count[i].domain = australian_constraint_count[i].domain.filter(e => e !== colorAssigned);
                                if(!stack[i].includes(colorAssigned))
                                    stack[i].push(colorAssigned);
							}
							if(australian_constraint_count[i].domain.length === 1 && australian_constraint_count[i].color == null) {
                                console.log("Singleton", i)
                                singleton(graph,i);
                                //break outerloop;
                            }
                        }
                        console.log("Values", australian_constraint_count);
                        //singletonDomain(graph,4,color)
    }
		var color = [V]; 
		for (var i = 0; i < V; i++) 
			color[i] = null;

	function graphColoring(graph,m) 
	{ 
	 
		 

		// if (!forwardChecking(graph, m, color, 0)) 
		// { 
		// 	console.log("Solution does not exist"); 
		// 	return false; 
		// }  

		//backTracking(graph, m, color, 0);

		//singletonDomain(graph,m,color);
		//singletonDomain1(graph,m,color, 0);		
		//printSolution(color); 
		//return true; 
	} 

	function printSolution(color) 
	{ 
		for(var i = 0; i < V; i++) {
		switch(color[i]) {
			case 'R': color[i] = 'RED';
			break;
			case 'G':	color[i] = 'GREEN';
			break;
			case 'B': color[i] = 'BLUE';
			break;
			case 'Y': color[i] = 'YELLOW';
			break;
			case 'BL': color[i] = 'Grey';
			break;
		}
		australian_constraint_count[i].color = color[i]
	}
		console.log("Solution Exists: Following" + 
						" are the assigned colors"); 
		for (var i = 0; i < V; i++) 
			console.log(" " + color[i] + " "); 
		console.log(australian_constraint_count);
	} 

	
	//graphColoring(australian_constraint_graph, colours.length); 
	
	// anychart.onDocumentReady(function () {
    //     var dataSet = [
    //         {'id': 'AU.WA', fill: null},
    //         {'id': 'AU.NT', fill: null},                
    // 		{'id': 'AU.QL', fill: null},  				 
    // 		{'id': 'AU.SA', fill: null}, 
    // 		{'id': 'AU.NS', fill: null}, 
    // 		{'id': 'AU.VI', fill: null}, 
    // 		{'id': 'AU.TS', fill: null}
	// 	];
		
	// 	for(var i = 0; i < australian_constraint_count.length; i++) {
	// 		dataSet[i].fill = australian_constraint_count[i].color;
	// 	}

    //     var map = anychart.map();
    //     map.interactivity(false);
    //     map.geoData(anychart.maps.australia);

    //     var series = map.choropleth(dataSet);
    	
    //     series.labels(true);
    //     series.tooltip(true);
    //     map.container('container');
    //     map.draw();
	//   });
	function doSetTimeout(map) {
		setTimeout(function() { map.draw() }, 1000);
	}
	graphColoring(australian_constraint_graph, colours.length); 	

	
	  anychart.onDocumentReady(function () {});

		var dataSet = [{
			'id': "US.AL",
			fill:null
		  },//1
		  {
			'id': "US.AK",
			fill:null
		  },//1
		  {
			'id': "US.AZ",
			fill:null
		  },//3
		  {
			'id': "US.AR",
			fill:null
		  },//4 
		  {
			'id': "US.CA",
			fill:null
		  },//5
		  {
			'id': "US.CO",	
			fill:null
		  },//6
		  {
			'id': "US.CT",
			fill:null
		  },//7
		  {
			'id': "US.DE", 
			fill:null
		  },//8
		  {
			'id': "US.FL",
			fill:null
		  },//9
		  {
			'id': "US.GA",
			fill:null
		  },//10
		  {
			'id': "US.HI",
			fill:null
		  },//11
		  {
			'id': "US.ID",
			fill:null
		  },//12
		  {
			'id': "US.IL", 
			fill:null
		  },//13
		  {
			'id': "US.IN",
			fill:null
		  },//14
		  {
			'id': "US.IA", 
			fill:null
		  },//15
		  {
			'id': "US.KS",
			fill:null
		  },//16
		  {
			'id': "US.KY",
			fill:null
		  },//17
		  {
			'id': "US.LA",
			fill:null
		  },//18
		  {
			'id': "US.ME",
			fill:null
		  },//19
		  {
			'id': "US.MD",
			fill:null
		  },//20
		  {
			'id': "US.MA",
			fill:null
		  },//21
		  {
			'id': "US.MI",
			fill:null
		  },//22
		  {
			'id': "US.MN",
			fill:null
		  }, //23
		  {
			'id': "US.MS",
			fill:null
		  },//24
		  {
			'id': "US.MO",
			fill:null
		  },//25
		  {
			'id': "US.MT", 
			fill:null
		  },//26
		  {
			'id': "US.NE",
			fill:null
		  },//27
		  {
			'id': "US.NV",
			fill:null
		  },//28
		  {
			'id': "US.NH",
			fill:null
		  },//29
		  {
			'id': "US.NJ", 
			fill:null
		  },//30
		  {
			'id': "US.NM", 
			fill:null
		  },//31
		  {
			'id': "US.NY",
			fill:null
		  },//32
		  {
			'id': "US.NC",
			fill:null
		  },//33
		  {
			'id': "US.ND",
			fill:null
		  },//34
		  {
			'id': "US.OH",
			fill:null
		  },//35
		  {
			'id': "US.OK", 
			fill:null
		  },//36
		  {
			'id': "US.OR",
			fill:null
		  },//37
		  {
			'id': "US.PA",
			fill:null
		  },//38
		  {
			'id': "US.RI",
			fill:null
		  },//39
		  {
			'id': "US.SC",
			fill:null
		  },//40
		  {
			'id': "US.SD",
			fill:null
		  },//41
		  {
			'id': "US.TN",
			fill:null
		  },//42
		  {
			'id': "US.TX",
			fill:null
		  },//43
		  {
			'id': "US.UT", 
			fill:null
		  },//44
		  {
			'id': "US.VT",
			fill:null
		  },//45
		  {
			'id': "US.VA",
			fill:null
		  },//46
		  {
			'id': "US.WA",
			fill:null
		  },//47
		  {
			'id': "US.WV", 
			fill:null
		  },//48
		  {
			'id': "US.WI", 
			fill:null
		  },//49
		  {
			'id': "US.WY",
			fill:null
		  },//50
		  {
			'id': "US.DC",
			fill:null
		  }]

	
		// anychart.data.loadJsonFile('https://cdn.anychart.com/samples/maps-general-features/usa-map-with-outside-labels/data.json', function (data) {
		// 	var dataSet = anychart.data.set(data);
	
		// 	var map = anychart.map();
		// 	map.scale().gap(.15);
		// 	map.geoData('anychart.maps.united_states_of_america');
	
		// 	series = map.choropleth(dataSet);
		// 	series.labels()
		// 			.enabled(true)
		// 			.padding(1)
		// 			.format('{%name}');
	
		// 	// set container id for the chart
		// 	map.container('container');
		// 	// initiate chart drawing
		// 	map.draw();
		// });
	  
	
			var currentMap = -1;
			var currentState;
			var depthFirstCurrentState;
			var forwardCheckingCurrentState;
			var singletonCurrentState;

	function graphColoringCall(choice) {
		switch(choice) {
			case 'depth-first': 												
													for(var i = 0; i < australian_constraint_count.length; i++) {
													dataSet[i].fill = null;
													}
													backTracking(australian_constraint_graph, colours.length,color, 0);		
													printSolution(color); 
													var map = anychart.map();
													dataSet[0].fill = australian_constraint_count[0].color;
													currentState = 0;
													// for(var i = 0; i < australian_constraint_count.length; i++) {
													// dataSet[i].fill = australian_constraint_count[i].color;
													// }
													map.scale().gap(.15);
													map.interactivity(false);
													map.geoData(anychart.maps.united_states_of_america);
													var series = map.choropleth(dataSet);
													series.labels(true);
													series.tooltip(true);
													var mapContainer = document.getElementById("container");
													mapContainer.innerHTML = '';
													mapContainer.innerHTML += 'Depth First:';
													mapContainer.style.fontWeight = 'bold';
													map.container('container');
													map.draw();
													currentMap = 0;
													return true;

			case 'forward-checking': 
															 for(var i = 0; i < australian_constraint_count.length; i++) {
																dataSet[i].fill = null;
																}
															 forwardChecking(australian_constraint_graph, colours.length,color, 0);		
															 printSolution(color);
															 var map = anychart.map();
															 dataSet[0].fill = australian_constraint_count[0].color;
															 currentState = 0;
														// 	 for(var i = 0; i < australian_constraint_count.length; i++) {
														// 	 dataSet[i].fill = australian_constraint_count[i].color;
														//  }
															 map.scale().gap(.15);
															 map.interactivity(false);
															 map.geoData(anychart.maps.united_states_of_america);
															 var series = map.choropleth(dataSet);
															 series.labels(true);
															 series.tooltip(true);
															 var mapContainer = document.getElementById("container");
																mapContainer.innerHTML = '';
																mapContainer.innerHTML += 'Depth first using forward checking:';
																mapContainer.style.fontWeight = 'bold';
															 map.container('container');															 
															 map.draw(); 
															 currentMap = 1;
															 return true;

			case 'singleton': 				
												for(var i = 0; i < australian_constraint_count.length; i++) {
												dataSet[i].fill = null;
												}
												singletonDomain1(australian_constraint_graph, colours.length,color, 0);		
												printSolution(color); 
												var map = anychart.map();	
												dataSet[0].fill = australian_constraint_count[0].color;
												currentState = 0;
											// 	for(var i = 0; i < australian_constraint_count.length; i++) {
											// 	dataSet[i].fill = australian_constraint_count[i].color;
											// }
												map.scale().gap(.15);
												map.interactivity(false);
												map.geoData(anychart.maps.united_states_of_america);
												var series = map.choropleth(dataSet);
												series.labels(true);
												series.tooltip(true);
												var mapContainer = document.getElementById("container");
												mapContainer.innerHTML = '';
												mapContainer.innerHTML += 'Depth first using forward checking (Singleton Domain):';
												mapContainer.style.fontWeight = 'bold';
												map.container('container');
												map.draw();
												currentMap = 2;
												return true;

			case 'remove-map':var mapContainer = document.getElementById("container");
												mapContainer.innerHTML = '';
												return true;

			case 'next-state':	
													var map = anychart.map();
													currentState++;
													if(currentState == australian_constraint_count.length){
													alert("All the state are shown");			
													var mapContainer = document.getElementById("container");
													mapContainer.innerHTML = '';										
													return true;
													}
													dataSet[currentState].fill = australian_constraint_count[currentState].color;
													map.scale().gap(.15);
													map.interactivity(false);
													map.geoData(anychart.maps.united_states_of_america);
													var series = map.choropleth(dataSet);
													series.labels(true);
													series.tooltip(true);
													var mapContainer = document.getElementById("container");
													mapContainer.innerHTML = '';
													if(currentMap == 0)
													mapContainer.innerHTML += 'Depth First:';
													else if(currentMap == 1)
													mapContainer.innerHTML += 'Depth first using forward checking:';
													else if(currentMap == 2)
													mapContainer.innerHTML += 'Depth first using forward checking (Singleton Domain):';		
													mapContainer.style.fontWeight = 'bold';											
													map.container('container');													
													map.draw();	
													return true;	
													
				case 'finish':	
												var map = anychart.map();
												for(var i = currentState; i < australian_constraint_count.length; i++) {
												dataSet[i].fill = australian_constraint_count[i].color;
												}
												map.scale().gap(.15);
												map.interactivity(false);
												map.geoData(anychart.maps.united_states_of_america);
												var series = map.choropleth(dataSet);
												series.labels(true);
												series.tooltip(true);
												var mapContainer = document.getElementById("container");
												mapContainer.innerHTML = '';
												if(currentMap == 0)
												mapContainer.innerHTML += 'Depth First:';
												else if(currentMap == 1)
												mapContainer.innerHTML += 'Depth first using forward checking:';
												else if(currentMap == 2)
												mapContainer.innerHTML += 'Depth first using forward checking (Singleton Domain):';
												mapContainer.style.fontWeight = 'bold';
												map.container('container');
												map.draw();
												//currentMap = 0;
												return true;												

		}
	}