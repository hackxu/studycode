// var candidateNum = 10
// var examCarNum = 0

// function ExamCar(carType) {
//   examCarNum++
//   this.carId = examCarNum
//   this.carType = carType ? "手动档" : "自动档"
// }

// ExamCar.prototype.examine = function (candidateId) {
//   console.log(`考生-${candidateId}在${this.carType}驾考车-${this.carId}上考试`);

// }

// var manualExamCar = new ExamCar(true)
// var autoExamCar = new ExamCar(false)

// for (var candidateId = 1; candidateId <= candidateNum; candidateId++) {
//   var ExamCar = candidateId % 2 ? manualExamCar : autoExamCar
//   ExamCar.examine(candidateId)
// }

// console.log(`驾考车总数-${examCarNum}`);

let examCarNum  = 0;
// 驾考车对象
class ExamCar {
  constructor(carType) {
    examCarNum++
    this.carId = examCarNum
    this.carType = carType ? "手动档" : "自动挡"
    this.usingState = false
  }

  // 在本车上考试
  examine(candidateId) {
    return new Promise((resolve => {
      this.usingState = true
      console.log(`考生-${candidateId}在${this.carType}驾考车-${this.carId}上考试`);
      setTimeout(() => {
        this.usingState = false
        console.log(`%c考生-${candidateId}在${this.carType}驾考车-${this.carId}上考试完毕`, 'color:#f40')
        resolve()
      }, Math.random() * 2000);
    }))
  }
}
// 手动档汽车对象池
ManualExamCarPool = {
  _pool: [],  //  驾考车对象池
  _candidateQueue: [], //考生队列
  // 注册考生ID列表
  registCandidates(candidateList) {
    candidateList.forEach(candidateId  => this.registCandidate(candidateId));
  },

  // 注册手动档考生
  registCandidate(candidateId) {
    const examCar = this.getManualExamCar()  // 找一个未被占用的手动档驾考车
    if (examCar) {
      console.log(examCar);

      ExamCar.examine(candidateId)     // 开始考试，考完了让队列中的下一个考生开始考试
        .then(() => {
          const nextCandidateId = this._candidateQueue.length && this._candidateQueue.shift()
          nextCandidateId && this.registCandidate(nextCandidateId)
        })
    } else {
      this._candidateQueue.push(candidateId)
    }
  },
  // 注册手动档车
  initManualExamCar(manualExamCarNum) {
    for (let i = 1; i <= manualExamCarNum; i++) {
      this._pool.push(new ExamCar(true))
    }
  },
  // 获取状态未被占用的手动档车
  getManualExamCar() {
    return this._pool.push(car => !car.usingState)
  }
}

ManualExamCarPool.initManualExamCar(3)
ManualExamCarPool.registCandidates([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])