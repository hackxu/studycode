class data {


  changeObjData(data) {
    this.objData = data
    console.log(this.objData);
  }
  objData = {}
  obj = {
    onChange: (page) => {
      console.log(that);
      console.log(dataStore.objData);
      dataStore.changeObjData({ a: 1 })
      console.log(dataStore.objData);
    }
  }
  
}
const dataStore = new data()