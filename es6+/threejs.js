// 创建场景

const scene = new THREE.Scene();

// 创建group
const stoneGroup = new THREE.Group();
stoneGroup.name = 'stoneGroup'
scene.add(stoneGroup)

const group = scene.getObjectByName(name)

// 创建立方体,传入长.宽和高
var cubeGeometry = new THREE.cubeGeometry(40, 40, 40)

// 创建球体,传入半径.宽片段数量和高片段数量
var sphereGeometry = new THREE.sphereGeometry(20, 100, 100)

// 创建材质
var basicMaterial = new THREE.MeshBasicMaterial({ color: 0x666666 })
var lambertMaterial = new THREE.MeshLamberMaterial({ color: 0x666666 })
var phongMaterial = new THREE.MeshPhongMaterial({ color: 0x666666 })
var wireMaterial = new THREE.MeshBasicMaterial({ wireframe: true, color: 0x666666 })


// 创建几何体相同材质不同的网格对象
var cube = new THREE.Mesh(cubeGeometry, basicMaterial)
var cubePhong = new THREE.Mesh(cubeGeometry, phongMaterial)
scene.add(cube, cubePhong)
// 创建材质相同但几何体不同的网格对象
var cube = new THREE.Mesh(cubeGeometry, basicMaterial)
var sphere = new THREE.Mesh(sphereGeometry, basicMaterial)
scene.add(cube, sphere)

// 创建拥有多个材质几何体的网格对象
var phongMaterial = new THREE.MeshPhongMaterial({ color: 0x666666 })
var cubeMeshPhong = new THREE.Mesh(cubeGeometry, cubePhongMaterial)
var cubeMeshWire = new THREE.Mesh(cubeGeometry, wireMaterial)

// 网格对象新增材质
cubeMeshPhong.add(cubeMeshWire)
scene.add(cubeMeshPhong)

// 抗锯齿.canvas是否支持 alpha透明度.preserverDrawingBuffer 是否保存 BUFFER直到手动清除
const renderer = new THREE.WebGLRenderer({
  antialias: true, alpha: true, preserveDrawingBuffer: true
})


renderer.setSize(this.innerWidth, this.height)
renderer.autoClear = true;
// 清除颜色,第二个参数为0表示完全透明,适用于需要透出背景的场景
renderer.setClearColor(0x000000, 0)
renderer.setPixelRatio(window.devicePixelRatio)

renderer.render(scene, camera)

// 创建纹理
const texture = new THREE.TextureLoader().load(img.src)
// 使用纹理创建贴图
const material = new THREE.SpriteMaterial({ map: texture, color: 0x666666 })
// 使用贴图创建贴图对象
const stone = new THREE.Sprite(material)
// 为贴图对象创建动画混合器
const mixer = new THREE.AnimationMixer(stone)

// 创建动画行为片段
const getClip = (pos = [0, 0, 0]) => {
  const [x, y, z] = pos;
  const times = [0, 1] //  关键帧时间数组,离散的时间点序列
  const values = [x, y, z, x, y + 3, z]  // 与时间点对应的值组成的数组
  // 创建位置关键帧对象:0时刻对应位置0,0,0  10时刻对应位置150,0,0
  const posTrack = new THREE.VectorKeyframeTrack('stone.position', times, values)
  const duration = 1
  return new THREE.AnimationClip('stonePosClip', duration, [posTrack])
}

// 创建动画播放器,确定动画的表现
const action = mixer.clipAction(getClip([x, y, z]))
action.timeScale = 1 //  动画播放一个周期的时间
action.loop = THREE.LoopPingPong //动画循环类型
action.play(); //  播放

// 在循环会之中更新混合器,保证动画的执行
function animate() {
  // 更新动画
  const delta = this.clock.getDelta()
  mixer.update(delta);
  requestAnimationFrame(() => {
    animate()
  })
}

// 作为纹理加载,并且增加到场景中
const arrowTexture = new THREE.TextureLoader().load(Arrow)
const material = new THREE.SpriteMaterial({ map: arrowTexture, color: 0xffffff })