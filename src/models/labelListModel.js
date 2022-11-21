// 建立模型
const localStorageKeyName = 'labelList'
const labelListModel = {
  data:[],
  fetch(){
    this.data = JSON.parse(window.localStorage.getItem(localStorageKeyName)|| '[]') 
    return this.data
  },
  create(name){
    if(this.data.indexOf(name)>= 0){
      return false
    }
    this.data.push(name)
    this.save()
    return true
  },
  save(){
    window.localStorage.setItem(localStorageKeyName,JSON.stringify(this.data))
  }
}

export default labelListModel