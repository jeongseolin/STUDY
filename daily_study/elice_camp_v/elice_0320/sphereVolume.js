let radius = [10, 30, 50, 7700];

let volumes = []; // 구의 부피를 저장할 배열
let volume = 0;
for (let i = 0; i < radius.length; i++) {
  volume = Math.floor((Math.PI * Math.pow(radius[i], 3) * 4) / 3);
  volumes.push(volume);
}
console.log(volumes);

function sphereVolume(radius) {
  return (volume = Math.floor((Math.PI * Math.pow(radius, 3) * 4) / 3));
}
let newVolumes = radius.map(sphereVolume);
console.log(newVolumes);
