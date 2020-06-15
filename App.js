let mymap = L.map('mapid').setView([44.42676, 26.10253], 11);
L.tileLayer(
  'https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=M2wFcgyUO9VEFIqkU5ZP',
  {
    atributtion:
      '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
  }
).addTo(mymap);

const markerDistrict1 = L.marker([44.49176, 26.04876]).addTo(mymap);
markerDistrict1.bindPopup("<b>Sector 1</b>").openPopup();

const markerDistrict2 = L.marker([44.4512, 26.13389]).addTo(mymap);
markerDistrict2.bindPopup("<b>Sector 2</b>").openPopup();

const markerDistrict3 = L.marker([44.42297, 26.1686]).addTo(mymap);
markerDistrict3.bindPopup("<b>Sector 3</b>").openPopup();

const markerDistrict4 = L.marker([44.37535, 26.12184]).addTo(mymap);
markerDistrict4.bindPopup("<b>Sector 4</b>").openPopup();

const markerDistrict5 = L.marker([44.38765, 26.0716]).addTo(mymap);
markerDistrict5.bindPopup("<b>Sector 5</b>").openPopup();

const markerDistrict6 = L.marker([44.43543, 26.0171]).addTo(mymap);
markerDistrict6.bindPopup("<b>Sector 6</b>").openPopup();


const districts = {
  district1: [
    [44.438128, 26.071277],
    [44.435708, 26.0782723],
    [44.4352486, 26.0866405],
    [44.435799, 26.1030333],
    [44.4371388, 26.1057842],
    [44.4415513, 26.1026116],
    [44.4476797, 26.1023572],
    [44.4512361, 26.1018425],
    [44.4656352, 26.1002065],
    [44.4811629, 26.1013729],
    [44.4890961, 26.1166188],
    [44.4958059, 26.1071454],
    [44.5056989, 26.1041933],
    [44.5394358, 26.1045619],
    [44.5377953, 26.0805538],
    [44.54046, 26.0749566],
    [44.539284, 26.0694115],
    [44.5344371, 26.0676434],
    [44.5309561, 26.0537043],
    [44.5252161, 26.0395599],
    [44.5232915, 26.033106],
    [44.5245486, 26.0283689],
    [44.522167, 26.0230148],
    [44.5195402, 26.0248713],
    [44.5122618, 26.0099062],
    [44.4996166, 26.0066314],
    [44.4995177, 26.001296],
    [44.4959902, 25.9935578],
    [44.497534, 25.9896714],
    [44.4956491, 25.9826952],
    [44.4920019, 25.9869389],
    [44.4780944, 25.9820372],
    [44.4707301, 25.9832194],
    [44.4763517, 25.9900646],
    [44.4780532, 25.9969107],
    [44.4750854, 26.0112896],
    [44.4639567, 26.0409935],
    [44.4534602, 26.057483],
    [44.4396894, 26.0729529],
    [44.438128, 26.071277],
  ],
  district2: [
    [44.4371388, 26.1057842],
    [44.4312201, 26.1137705],
    [44.4312201, 26.1378031],
    [44.4346523, 26.1690455],
    [44.4353878, 26.1824351],
    [44.4444575, 26.1975413],
    [44.4520553, 26.1875849],
    [44.4444575, 26.1865549],
    [44.4439672, 26.1721354],
    [44.454261, 26.1776286],
    [44.4523004, 26.1690455],
    [44.4557314, 26.1570292],
    [44.4799873, 26.1838084],
    [44.4890961, 26.1166188],
    [44.4811629, 26.1013729],
    [44.4656352, 26.1002065],
    [44.4415513, 26.1026116],
    [44.4371388, 26.1057842],
  ],
  district3: [
    [44.435675, 26.0939974],
    [44.431017, 26.0919375],
    [44.4280899, 26.1034634],
    [44.4096838, 26.1235232],
    [44.3976651, 26.1636919],
    [44.3934948, 26.1808581],
    [44.395212, 26.2117571],
    [44.3996275, 26.2100405],
    [44.4015899, 26.2151903],
    [44.4050238, 26.2031741],
    [44.4094385, 26.2048907],
    [44.4109101, 26.2134737],
    [44.4140982, 26.2179369],
    [44.4194931, 26.2193102],
    [44.4197384, 26.2244601],
    [44.4251328, 26.2261767],
    [44.4266039, 26.2220568],
    [44.4327331, 26.2241167],
    [44.4317525, 26.2179369],
    [44.4351847, 26.2145037],
    [44.4337138, 26.2083239],
    [44.4386166, 26.206264],
    [44.4381264, 26.1987109],
    [44.4444575, 26.1975413],
    [44.4353878, 26.1824351],
    [44.4322428, 26.152019],
    [44.4302815, 26.1314196],
    [44.4312622, 26.1108202],
    [44.4371388, 26.1057842],
    [44.435675, 26.0939974],
  ],
  district4: [
    [44.4280899, 26.1034634],
    [44.4315223, 26.0883572],
    [44.4209793, 26.0873272],
    [44.4138679, 26.093507],
    [44.4013595, 26.0962536],
    [44.387131, 26.0893871],
    [44.3692178, 26.0869839],
    [44.3628364, 26.0979702],
    [44.3628364, 26.1034634],
    [44.3616092, 26.1154797],
    [44.3358307, 26.1515286],
    [44.3368129, 26.157365],
    [44.3414784, 26.1539318],
    [44.3444248, 26.1659481],
    [44.3476165, 26.1632015],
    [44.3463889, 26.1587383],
    [44.3709357, 26.1419155],
    [44.3974347, 26.1611416],
    [44.4077367, 26.1223461],
    [44.4155845, 26.1123898],
    [44.4236765, 26.1075832],
    [44.4280899, 26.1034634],
  ],
  district5: [
    [44.435675, 26.0939974],
    [44.4351847, 26.0770395],
    [44.4383715, 26.0687998],
    [44.4344492, 26.0588434],
    [44.4289331, 26.0609034],
    [44.417654, 26.0571268],
    [44.4082123, 26.049402],
    [44.4098064, 26.0457972],
    [44.4100517, 26.0382441],
    [44.4088254, 26.0351541],
    [44.4095612, 26.0270861],
    [44.413853, 26.0327509],
    [44.4116458, 26.0157564],
    [44.4102969, 26.0162714],
    [44.4096838, 26.0124948],
    [44.4114006, 26.0118082],
    [44.4107874, 26.0092333],
    [44.4093159, 26.0099199],
    [44.4073538, 25.9955004],
    [44.4080896, 25.9930971],
    [44.407967, 25.9903505],
    [44.4053917, 25.9912088],
    [44.4058822, 25.9949854],
    [44.4041653, 25.9968737],
    [44.4040427, 26.0009935],
    [44.4024484, 26.0049417],
    [44.4057596, 26.0106066],
    [44.3895695, 26.0294893],
    [44.3905509, 26.0348108],
    [44.3871161, 26.0385874],
    [44.3831904, 26.0325792],
    [44.3752154, 26.0459688],
    [44.3776694, 26.0466555],
    [44.3765651, 26.0540369],
    [44.3795098, 26.0578134],
    [44.3746019, 26.0667398],
    [44.3710435, 26.0765245],
    [44.3692178, 26.0869839],
    [44.3768105, 26.0878542],
    [44.3798778, 26.0861376],
    [44.3836811, 26.083391],
    [44.3847852, 26.0864809],
    [44.3958253, 26.0923174],
    [44.405637, 26.0933474],
    [44.4196157, 26.0851076],
    [44.4315223, 26.0883572],
    [44.435675, 26.0939974],
  ],
  district6: [
    [44.4344492, 26.0588434],
    [44.4396894, 26.0729529],
    [44.4548462, 26.054523],
    [44.4659956, 26.0349536],
    [44.4719983, 26.0179591],
    [44.4780532, 25.9969107],
    [44.4742031, 25.99015],
    [44.4667307, 25.9757304],
    [44.4661181, 25.979507],
    [44.4667307, 25.9841418],
    [44.4604825, 26.0028529],
    [44.4587672, 26.011436],
    [44.4572968, 26.0155559],
    [44.4558265, 26.0171008],
    [44.453866, 26.0121226],
    [44.4512927, 26.0146976],
    [44.4495771, 26.0148692],
    [44.449332, 26.0186458],
    [44.4460233, 26.0196757],
    [44.4432045, 26.0117793],
    [44.4421015, 25.9671474],
    [44.4226114, 25.968864],
    [44.4219983, 25.9638858],
    [44.4152549, 25.9652591],
    [44.4157454, 25.9698939],
    [44.4065486, 25.9760738],
    [44.4071617, 25.988605],
    [44.407967, 25.9903505],
    [44.4080896, 25.9930971],
    [44.4073538, 25.9955004],
    [44.4093159, 26.0099199],
    [44.4134156, 26.0083461],
    [44.414887, 26.033752],
    [44.4101048, 26.0303188],
    [44.4109632, 26.0461116],
    [44.4207723, 26.0567546],
    [44.4344492, 26.0588434],
  ],
};

let mapDistrict1 = L.polygon(districts.district1, {
  color: 'red',
  fillColor: 'red',
  fillOpacity: 0.5,
  radius: 500,
}).addTo(mymap);

let mapDistrict2 = L.polygon(districts.district2, {
  color: 'orange',
  fillColor: 'orange',
  fillOpacity: 0.5,
  radius: 500,
}).addTo(mymap);

let mapDistrict3 = L.polygon(districts.district3, {
  color: 'yellow',
  fillColor: 'yellow',
  fillOpacity: 0.5,
  radius: 500,
}).addTo(mymap);

let mapDistrict4 = L.polygon(districts.district4, {
  color: 'green',
  fillColor: 'green',
  fillOpacity: 0.5,
  radius: 500,
}).addTo(mymap);

let mapDistrict5 = L.polygon(districts.district5, {
  color: 'blue',
  fillColor: 'blue',
  fillOpacity: 0.5,
  radius: 500,
}).addTo(mymap);

let mapDistrict6 = L.polygon(districts.district6, {
  color: '#b900c6',
  fillColor: '#b900c6',
  fillOpacity: 0.5,
  radius: 500,
}).addTo(mymap);
